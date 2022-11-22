import React from "react";
import * as S from "./styles";
import * as F from "../Text";

export default function Characters({ key, char, handleLance }) {
    const [lance, setLance] = React.useState(0)
    const [comprador, setComprador] = React.useState('')

    function handleLanceSubmit() {
        console.log(`
            lance -> ${lance}
            char.lanceMaior.valorLance -> ${char.lanceMaior.valorLance}
            char.lanceIncial -> ${char.lanceIncial}
            
        `)
        if (lance > char.lanceMaior.valorLance && lance > char.lanceIncial) {
            handleLance(char.id, comprador, lance)
            console.log('lance maior que o anterior')
        } else {
            alert('Seu lance deve cobrir o lance atual')
            console.log('lance menor que o anterior')
        }
    }

    return (
        <S.CharactersContainer key={key}>
            <S.CharactersContent>
                <div>
                    <S.CharactersImage src={char.imagem} alt="" />
                </div>
                <div>
                    <F.H2>{char.nome}</F.H2>
                    <S.Stars src="/assets/stars.webp" alt="" />
                    <F.Text marginBottom={"2rem"}>
                        {char.descricao}
                    </F.Text>
                    <F.Text>
                        Maior lance:
                    </F.Text>
                    {!!char.lanceMaior.comprador ? (
                        <F.H3 marginBottom={"2.3rem"}>
                        {char.lanceMaior.valorLance} <S.Primogem src="/assets/primos.webp" alt=""/> por {char.lanceMaior.comprador}
                    </F.H3>
                    ) : (
                        <F.H3 marginBottom={"2.3rem"}>
                            {char.lanceIncial} <S.Primogem src="/assets/primos.webp" alt=""/>
                        </F.H3>
                    )}
                    <F.Text marginBottom={"0.5rem"}>
                        Faça o seu lance:
                    </F.Text>
                    <S.Form>
                        <input type="text" placeholder="Seu nome" value={comprador} onChange={(e) => setComprador(e.target.value)} />
                        <input type="number" min="0" placeholder="Seu lance" onChange={(e) => setLance(e.target.value)} />
                    </S.Form>
                    <button onClick={() => handleLanceSubmit()}>Enviar</button>
                </div>
            </S.CharactersContent>
        </S.CharactersContainer>
    )
}

