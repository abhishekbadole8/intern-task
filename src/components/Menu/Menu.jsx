import Styles from "./Menu.module.css"
import { Link } from "react-router-dom"
import { ImBooks } from "react-icons/im";
import { useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();



    return (
        <div className={Styles.menuContainer}>


            <Link to={"/Homepage"} className={Styles.textlink}>
                {(location.pathname.includes("Homepage")) ?

                    <div className={Styles.activeMenuBox}>
                        <i class="fa-solid fa-house-chimney"></i>
                        <span>HOME</span>
                    </div>
                    : <div className={Styles.menuBox}>
                        <i class="fa-solid fa-house-chimney"></i>
                        <span>HOME</span>
                    </div>
                }
            </Link>

            <Link to={"/Module/topic"} className={Styles.textlink}>
                {(location.pathname.includes("Module/topic")) || (location.pathname.includes("Module/quiz")) || (location.pathname.includes("Module/assignment"))?

                    <div className={Styles.activeMenuBox}>
                        <ImBooks />
                        <span>MODULES</span>
                    </div>
                    : <div className={Styles.menuBox}>
                        <ImBooks />
                        <span>MODULES</span>
                    </div>
                }

            </Link>

            <Link to={"/#"} className={Styles.textlink}>
                {(location.pathname.includes("Instructor")) ?

                    <div className={Styles.activeMenuBox}>
                        <span>INSTRUCTORS</span>
                    </div>
                    : <div className={Styles.menuBox}>
                        <span>INSTRUCTORS</span>
                    </div>
                }
            </Link>
        </div>
    )
}
export default Menu;