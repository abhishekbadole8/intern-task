import Styles from "./NavItems.module.css"

function NavItems({ setToggle }) {

    return (
        <div className={Styles.navheader}>
            <p>Select program</p>
            <div className={Styles.programCode}>
            <button onClick={() => { setToggle(false) }}>ECRD</button>
            <button onClick={() => { setToggle(false) }}>FSR22222</button>
            <button onClick={() => { setToggle(false) }}>DS261121</button>
            <button onClick={() => { setToggle(false) }}>DS031212</button>
            </div>
        </div>
    )
}
export default NavItems