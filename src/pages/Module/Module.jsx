import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import SubMenu from "../../components/SubMenu/SubMenu";
import Topic from "../../components/Topic/Topic";
import Styles from "./Module.module.css";
import { useState } from "react";

function Module() {
 

    return (
        <>
            <Navbar />
            <Header />

            <div className={Styles.moduleContainer}>
                <Menu />
                <SubMenu />
               
            </div>
        </>
    )

}
export default Module