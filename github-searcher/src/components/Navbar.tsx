import github from '../assets/images/github.png'
import "../styles/Navbar.css";

function Navbar() {
    return (
        <div>
            <div className="logoDiv">
                <img className="image" src={github} alt="logo" />
            </div>
            <div className="headDiv">
                <h3 style={{marginBottom:'0'}}>GitHub Searcher</h3> 
                <p className="mutedText">Search users or repositories below</p>
            </div>
        </div>
    )
}

export default Navbar
