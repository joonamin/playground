import reactImg from '../assets/react.svg'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={reactImg} alt="react-logo" />
            <h1>React Essentials</h1>
        </header>
    )
}

export default Header;