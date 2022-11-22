import React from 'react'
import GlobalFonts from './fonts/fonts'
import Hero from './components/Hero';
import Characters from './components/Characters';
function App() {

  const [isLoading, setIsloading] = React.useState(true)
  const [charsArray, setCharsArray] = React.useState([])

  async function loadChars() {

    const response = await (await fetch('http://localhost:3333/chars')).json();
    console.log(response)
    setCharsArray(response);

    setIsloading(false)
  }

  async function handleLance(idProduto, comprador, lance) {
    const response = await (await fetch('http://localhost:3333/lance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idProduto,
        comprador,
        lance
      })
    })).json();
    loadChars();
    console.log(response)
  }

  React.useEffect(() => {
    loadChars()
  }, [])

  return (
    <>
      <GlobalFonts />
      <Hero />
      {charsArray.map((char, index) => <Characters key={index} char={char} handleLance={handleLance} />)}
    </>
  );
}

export default App;
