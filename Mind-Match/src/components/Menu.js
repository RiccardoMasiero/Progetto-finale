import './Menu.css'
import {Link} from 'react-router-dom';

export const Menu = () => {

    return (
        <div className="Main">
            <h1>Mind Match</h1>

            <Link to= '/SelectDifficulty'><button>Play</button></Link>
            <Link to= '/Game'><button>Previous games</button></Link>
            <Link to= '/Game'><button>Exit</button></Link>
        </div>
    )
}