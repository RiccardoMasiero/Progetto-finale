import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
        
    }

    return (

        <div className="card">
             <div className={flipped ? "flipped" : ""}> {/*Per dire se una carta è girata oppure no utilizzo l'operatore ternario...if flipped true allora è flipped altrimenti niente */}
                <img className="front" src={card.src} alt="card front" /> {/* source della parte davanti cambia dinamicamente mentre il back è sempre lo stesso. */}
                <img
                    className="back"
                    src="/img/cover.jpeg"
                    onClick={handleClick}
                    alt="card back"
                />
            </div>
        </div>
    )
}