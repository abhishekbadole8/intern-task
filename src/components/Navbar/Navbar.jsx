import Styles from "./Navbar.module.css";
import image from "../../assets/user.svg"
import logo from "../../assets/logo.png"


function Navbar(){
    return (
        <div className={Styles.navbar}>

            <img src={logo} alt="brandlogo" className={Styles.logo}/>
            
            <div className={Styles.profile}>
                <span>Hi Test Learner!</span>
                <img src={image} alt="user" className={Styles.userimage}/>
            </div>
        </div>
    )
}
export default Navbar