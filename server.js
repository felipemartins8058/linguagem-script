const express = require('express')
const session = require('express-session')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors({origin: '*'}))
server.use(session({
    secret: 'EtYu!BMV0Kw1JOc@m05r%dQY1bGAvBQ*OY5FtI^!yjOQ2yoPlX',
    resave: false,
    saveUninitialized: true
  }));

const compradores = [
    {
        id: 0,
        nome: "Martins",
        usuario: "martins000",
        senha: "123456"
    },
    {
        id: 1,
        nome: "Caio",
        usuario: "caiobrndz",
        senha: "123456"
    }
]

const chars = [
    {
        id: 1,
        nome: "Bennett",
        descricao: 'One of the few young adventurers of the Mondstadt Adventurers Guild, he is always plagued with inexplicable bad luck.',
        lanceIncial: 200,
        lanceMaior: {
            valorLance: 0,
            comprador: null
        },
        imagem: 'https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/bennett/header_image.png?strip=all&quality=10'
    },
    {
        id: 2,
        nome: "Nilou",
        descricao: 'Star of the Zubayr Theater. Her dance is as graceful as a water lily in first bloom, pure and pristine. But she is by no means a haughty and cold person. Even the most hurried traveler will not forget her innocent and radiant smile.',
        lanceIncial: 300,
        lanceMaior: {
            valorLance: 900,
            comprador: "Caio"
        },
        imagem: '/assets/nilou.png'
    },
    {
        id: 3,
        nome: "The Wanderer",
        descricao: '"Those who believe cast the gods in glory, while unbelievers witness how gods transcend. But as for him, I will not characterize him as either. All uncertainties are but foundations for his future path."',
        lanceIncial: 200,
        lanceMaior: {
            valorLance: 600,
            comprador: "Felipe"
        },
        imagem: '/assets/wanderer.png'
    },

]

// returns a char
server.get('/chars/:index', (req, res) => {
    const { index } = req.params

    const character = chars.find(char => char.id == index)

    return res.json(character)
})

// returns all chars
server.get('/chars', (req, res) => {
    return res.json(chars)
})

// create new char
server.post('/chars', (req, res) => {
    const { name } = req.body;
    chars.push(name)

    return res.json(chars)
})

// update char
server.put('/chars/:id', (req, res) => {
    const { id } = req.params
    const { nome, descricao, lanceIncial, lanceMaior, imagem } = req.body

    const charIndex = chars.findIndex(char => char.id == id)

    return res.json(chars[charIndex])
})

// delete char
server.delete('/chars/:index', (req, res) => {
    const { index } = req.params

    chars.splice(index, 1)

    return res.json({ message: 'deletado' })
})

// faz um lance
server.post('/lance', (req, res) => {
    const { idProduto, comprador, lance } = req.body;

    const lanceChar = chars.findIndex(char => char.id === idProduto)

    let maiorLance = chars[lanceChar].lanceMaior.valorLance
    console.log(maiorLance)

    if (!!maiorLance && maiorLance < lance) {   
        console.log("passou")
        chars[lanceChar].lanceMaior.valorLance = lance
        chars[lanceChar].lanceMaior.comprador = comprador
    } else if (!maiorLance) {
        chars[lanceChar].lanceMaior.valorLance = lance
        chars[lanceChar].lanceMaior.comprador = comprador
    }

    return res.json(chars[lanceChar])
})

// login
server.post('/login', (req, res) => {
    const { usuario, senha } = req.body

    const existsUsuario = compradores.findIndex(comprador => comprador.usuario == usuario)

    if(!!existsUsuario && compradores[existsUsuario].senha == senha){
        req.session.login = usuario
        return res.json({message: 'logado'})
    }

    return res.json({message: 'erro ao logar'})

})

server.listen(3333)