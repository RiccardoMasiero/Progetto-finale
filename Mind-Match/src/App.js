import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Outlet, Link } from "react-router-dom"

// import Menu from './components/Menu'


const cardImmages = [
  { "src": "/img/helmet.jpeg", matched: false },
  { "src": "/img/potion.jpeg", matched: false },
  { "src": "/img/ring.jpeg", matched: false },
  { "src": "/img/scroll.jpeg", matched: false },
  { "src": "/img/shield.jpeg", matched: false },
  { "src": "/img/sword.jpeg", matched: false },

]

function App() {
  const [cards, setCards] = useState([]) //valore iniziale array vuoto, ogni volta che la funzione shuffleCards viene chiamata aggiorno lo stato con il valore di shuffleCards.
  const [turns, setTurns] = useState(0)  //numero di mosse.
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)



  //Mischiare le carte
  const shuffleCards = () => {
    const shuffleCards = [...cardImmages, ...cardImmages] //Spread operator per ottenere una coppia uguale per ogni carta.
      .sort(() => Math.random() - 0.5) //Ottengo un numero random e il risultato sarà un array mischiato.
      .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards)
    setTurns(0)
  }

  //Gestione delle selezioni
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) //Se non c'è alcun valore allora quando clicco sarà choiceOne se invece c'è già un valore allora sarà choiseTwo.
  }

  //Confronto delle carte selezionate
  useEffect(() => {
    
    if (choiceOne && choiceTwo) {
      setDisabled(true) //Dopo aver selezionato 2 carte ho un piccolo momento in cui le altre carte non si possono selezionare finchè quelle selezionate non si girano di nuovo o rimangono girate.

      if (choiceOne.src === choiceTwo.src) { //Se le carte selezionate sono uguali,
        setCards(prevCards => { //Aggiorno lo stato delle carte prendendo il precedente stato delle carte
          return prevCards.map(card => { //Ritorno un nuovo array di carte con il metodo .map
            if (card.src === choiceOne.src) { // Se card source e choiceOne source corrispondono
              return { ...card, matched: true } // Ritorno un nuovo oggetto con lo spread sulla proprietà delle carte e modificio matched che diventa true
            } else {
              return card //Se non corrispondono allora ritorno l'oggetto card senza alcun cambiamento.
            }
          })
        })
        resetTurn()//resetTurn per riportare il valore di setChoiceOne e setChoiceTwo a null. 
      } else {      
        setTimeout(() => resetTurn(), 1000) // imposto un timeout di 1000 ms prima che le carte che non corrispondono si rigirino.
      }
    }
  }, [choiceOne, choiceTwo]) //Ora sono in grado di tenere traccia delle carte che corrispondono e che di conseguenza hanno valore true

  console.log(cards);

  //Reset delle selezioni e incremento turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  //Inizio nuova partita automaticamente
  useEffect( () => {
    shuffleCards()
  }, [])




  return (
    //Ogni volta che clicco il bottone mi crea un array di carte disposte in ordine random.
    <div className="App">
      <h1>Mind Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched} //Per determinare se una carta è girata oppure no
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App