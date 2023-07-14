import Styles from "./Header.module.css"

function Header({ setToggle, toggleName }) {

    return (
        <div className={Styles.header}>

            <div className={Styles.headerFirstRow}>

                <div className={Styles.userOptions} onClick={() => setToggle(!toggleName)}>
                    <p>USER123456</p>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <div className={Styles.program}>
                    <h3>DATA SCIENTIST PROGRAM</h3>
                </div>

            </div>

        </div>
    )
}
export default Header;