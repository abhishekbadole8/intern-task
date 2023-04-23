import Styles from "./Assignment.module.css"
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import SubMenu from "../../components/SubMenu/SubMenu";
import calander from "../../assets/calendar.svg"
import clock from "../../assets/clock-blue.svg"

function Topic() {
    return (
        <>
            <Navbar />
            <Header />

            <div className={Styles.moduleContainer}>
                <Menu />
                <SubMenu />
                <div className={Styles.assignmentContainer}>

                    <div className={Styles.assignmenttopBox}>

                        <div className={Styles.assignmenttopleftBox}>
                            <h1>Assignment-1: Operators | Loops</h1>
                            <p>20 December 2021</p>
                        </div>

                        <div className={Styles.assignmenttoprightBox}>
                            <div>
                                <h5>3</h5>
                                <p>Problems</p>
                            </div>
                            <div>
                                <h5>100</h5>
                                <p>Total Score</p>
                            </div>
                        </div>

                    </div>
                   
                        <label>Assignment Details</label>                    

                    <div className={Styles.assignmentdownBox}>

                        {/* Left */}
                        <div className={Styles.assignmentleftBox}>
                            
                            <div>
                                <h3>3</h3>
                                <p>Problems</p>
                            </div>

                            <div>
                                <h3>100</h3>
                                <p>Total Score</p>
                            </div>

                        </div>

                        {/* Right */}
                        <div className={Styles.assignmentrightBox}>

                            {/* Start */}
                            <div className={Styles.assignmentStartHead}>
                                <p>Start</p>
                                <div className={Styles.assignmentStartDate}>
                                    <img src={calander} alt="calender-icon" />
                                    <p>20 December 2021</p>
                                </div>
                                <div className={Styles.assignmentStartTime}>
                                    <img src={clock} alt="clock-icon" />
                                    <p>07:30 PM</p>
                                </div>
                            </div>

                            {/* Due */}
                            <div className={Styles.assignmentdueHead}>
                                <p>Due:</p>
                                <div className={Styles.assignmentdueDate}>
                                    <img src={calander} alt="calender-icon" />
                                    <p>26 December 2021</p>
                                </div>
                                <div className={Styles.assignmentdueTime}>
                                    <img src={clock} alt="clock-icon" />
                                    <p>11:59 PM</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Topic;