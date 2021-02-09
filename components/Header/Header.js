import firebase from "../../firebase"

const Header = () => {
    return (
        <header>
            <nav>

            </nav> 
            <input type="button" value="Logout" onClick={() => firebase.auth().signOut()} />
        </header>
    )
}

export default Header