import Bot from "../../components/Bot/Bot"
import Header from "../../components/Header/Header"
import Information from "../../components/Information/Information"
import Menu from "../../components/Menu/Menu"
import NavItems from "../../components/NavItems/NavItems"
import Navbar from "../../components/Navbar/Navbar"
import Styles from "./Homepage.module.css"
import { useState } from "react"

function Homepage() {
    const [toggleName, setToggle] = useState(false)

    return (
        <div className={Styles.main}>
            <Navbar />
            <Header setToggle={setToggle} toggleName={toggleName} />
            {toggleName ?
                <NavItems setToggle={setToggle} /> : ""}

            <div className={Styles.midContainer}>
                <Menu />
                <Information />
                <Bot />
            </div>
        </div>
    )
}
export default Homepage