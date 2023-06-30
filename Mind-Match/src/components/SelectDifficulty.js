import './SelectDifficulty.css'
import {Link} from 'react-router-dom';


export const SelectDifficulty = () => {

    return (
        <div className="Main">
            <h1>Mind Match</h1>
            <h2>Select difficulty:</h2>

            <Link to= '/Game'><button>Easy</button></Link>
            <Link to= '/GameMedium'><button>Medium</button></Link>
            <Link to= '/GameHard'><button>Hard</button></Link>
        </div>
    )
}