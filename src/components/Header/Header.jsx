import { useState } from "react";
import Styles from "./Header.module.css"
import NavItems from "../NavItems/NavItems";

function Header({ setToggle, toggleName }) {

    function showToggle() {
        setToggle(!toggleName);
    }

    return (
        <div className={Styles.header}>
            <div className={Styles.headerFirstRow}>
                <div className={Styles.userOptions} onClick={showToggle}>
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