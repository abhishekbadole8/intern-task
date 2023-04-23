import Styles from "./SubMenu.module.css"
import { Link } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import { TbCodeCircle2 } from "react-icons/tb";
import { AiFillPlayCircle } from "react-icons/ai";
import Bot from "../Bot/Bot"
import { useLocation } from "react-router-dom";

function SubMenu() {
    let location = useLocation()
    return (
        <>
            <div className={Styles.SubContainer}>

                <Link to={"/Module/topic"} className={Styles.textlink}>
                    {location.pathname.includes("/Module/topic") ?
                        <div className={Styles.activeSubMenuContent}>
                            <AiFillPlayCircle className={Styles.subMenuImg} />
                            <label htmlFor="">Python Loops</label>
                        </div>
                        : <div className={Styles.subMenuContent}>
                            <AiFillPlayCircle className={Styles.subMenuImg} />
                            <label htmlFor="">Python Loops</label>
                        </div>
                    }
                </Link>

                <Link to={"/Module/quiz"} className={Styles.textlink}>
                    {location.pathname.includes("/Module/quiz") ?
                        <div className={Styles.activeSubMenuContent}>
                            <BsQuestionCircle className={Styles.subMenuImg} />
                            <label htmlFor="">Quiz-1: Data Types</label>
                        </div>
                        : <div className={Styles.subMenuContent}>
                            <BsQuestionCircle className={Styles.subMenuImg} />
                            <label htmlFor="">Quiz-1: Data Types</label>
                        </div>
                    }
                </Link>

                <Link to={"/Module/assignment"} className={Styles.textlink}>
                    {location.pathname.includes("/Module/assignment") ?
                        <div className={Styles.activeSubMenuContent}>
                            <TbCodeCircle2 className={Styles.subMenuCodeImg} />
                            <label htmlFor="">Assignment-1: Operators | Loops</label>
                        </div>
                        : <div className={Styles.subMenuContent}>
                            <TbCodeCircle2 className={Styles.subMenuCodeImg} />
                            <label htmlFor="">Assignment-1: Operators | Loops</label>
                        </div>
                    }
                </Link>

            </div>



        </>
    )
}

export default SubMenu;