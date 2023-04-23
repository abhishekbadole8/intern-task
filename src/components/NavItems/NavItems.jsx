import Styles from "./NavItems.module.css"

function NavItems({ setToggle }) {

    return (
        <div className={Styles.navheader}>

            <button onClick={() => { setToggle(false) }}>A</button>
            <button onClick={() => { setToggle(false) }}>B</button>
            <button onClick={() => { setToggle(false) }}>C</button>

        </div>
    )
}
export default NavItems