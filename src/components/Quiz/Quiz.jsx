import Styles from "./Quiz.module.css"
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import SubMenu from "../../components/SubMenu/SubMenu";
import calander from "../../assets/calendar.svg"
import clock from "../../assets/clock-blue.svg"
import Bot from "../Bot/Bot";

function Topic() {
    return (
        <>
            <Navbar />
            <Header />

            <div className={Styles.moduleContainer}>
                <Menu />
                <SubMenu />
                <div className={Styles.quizContainer}>

                    <div className={Styles.quiztopBox}>
                        <h1>Quiz-1: Data Types</h1>
                        <p>16 December 2021, Thursday, 07:30 PM</p>
                    </div>

                    <label >Quiz Details</label>

                    <div className={Styles.quizdownBox}>

                        <div className={Styles.quizleftBox}>

                            <div>
                                <h3>10</h3>
                                <p>Questions</p>
                            </div>

                            <div>
                                <h3>-</h3>
                                <p>Duration</p>
                            </div>

                            <div>
                                <h3>125</h3>
                                <p>Total Score</p>
                            </div>

                        </div>

                        <div className={Styles.quizrightBox}>

                            {/* Start */}
                            <div className={Styles.quizStartHead}>
                                <p>Start</p>
                                <div className={Styles.quizStartDate}>
                                    <img src={calander} alt="calender-icon" />
                                    <p>16 Dec 2021</p>
                                </div>
                                <div className={Styles.quizStartTime}>
                                    <img src={clock} alt="clock-icon" />
                                    <p>07:30 PM</p>
                                </div>
                            </div>

                            {/* Due */}
                            <div className={Styles.quizdueHead}>
                                <p>Start</p>
                                <div className={Styles.quizdueDate}>
                                    <img src={calander} alt="calender-icon" />
                                    <p>19 Dec 2021</p>
                                </div>
                                <div className={Styles.quizdueTime}>
                                    <img src={clock} alt="clock-icon" />
                                    <p>11:59 PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Bot />
        </>
    )
}
export default Topic;