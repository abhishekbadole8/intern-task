import Styles from "./Information.module.css"
import wrangling from "../../assets/Data Wrangling.png"
import dataAnalysis from "../../assets/Data-Analysis.png"

function Information() {
    return (
        <div className={Styles.informationContainer}>

            {/* TOp container */}
            <div className={Styles.certificationBox}>

                <h2>Upcoming Certifications</h2>

                <div className={Styles.certificationContainer}>
                    <div><img src={dataAnalysis} alt="" /></div>

                    <div className={Styles.certificationSecondBox}>
                        <div className={Styles.certificationAttempt}>
                            <span>CERTIFICAION</span>
                            <span>|</span>
                            <span>ATTEMPT 1</span>
                        </div>
                        <h4>DATA  ANALYSIS  CERTIFICATION</h4>
                        <div className={Styles.certificationCompleted}>
                            <span>COMPLETED</span>
                            <span>|</span>
                            <span>21 MAR 2022</span>
                        </div>
                    </div >

                    <div className={Styles.certificationThirdBox}>
                        <p>Exam Structure</p>
                        <div className={Styles.round}><p>Round 1</p> <span>MCQS</span><span>CODING</span></div>
                        <div className={Styles.round}><p>Round 2</p> <span>PROJECT</span></div>
                    </div>
                    <div className={Styles.certificationFourthBox}>
                        <label >VIEW EXAM DETAILS</label>
                    </div>
                </div>

            </div>

            {/* bottom container */}
            <div className={Styles.continuelearningBox}>

                <h2>Continue Learning</h2>

                <label className={Styles.modleDetailsTag}>VIEW MODEL DETAILS</label>

                <div className={Styles.learningContainer}>

                    <div className={Styles.modleDetails}>

                        {/* FIrst box */}
                        <div className={Styles.testBox}>

                            {/* Left box top box */}
                            <div className={Styles.topBox}>
                                <img src={wrangling} alt="Data wrangling" />

                                <div>
                                    <h4>DATA WRANGLING & VISUALIZATION</h4>
                                    <div><span>Test Instructor</span></div>
                                </div>
                            </div>

                            {/* Left box bottom box */}
                            <div className={Styles.testProgressBox}>
                                <div className={Styles.taskTags}>
                                    <p>Live Sessions</p>
                                    <div className={Styles.scoreTags}>
                                        <p>0/13</p>

                                    </div>
                                </div>
                                <div className={Styles.taskTags}>
                                    <p>Assigments</p>
                                    <div className={Styles.scoreTags}>
                                        <p>0/13</p>

                                    </div>
                                </div>
                                <div className={Styles.taskTags}>
                                    <p>MCQ Quiz</p>
                                    <div className={Styles.scoreTags}>
                                        <p>0/13</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Box */}
                        <div className={Styles.todayPlanBox}>

                            <div className={Styles.todayDate}>
                                <h5>Today's Plan</h5>
                                <span>21 March 2022</span>
                            </div>

                            <label >Data Transfromation using Pandas - 3</label>

                            <div className={Styles.feedback}>
                                <p>Daily Feedback</p>
                                <span><i>opens at 07.30 PM</i></span>
                            </div>


                            <div className={Styles.sessionDetails}>
                                <label >JOIN LIVE SESSION</label>
                                <span>BEGINS AT 07:30 PM </span>
                            </div>

                        </div>

                    </div>

                    {/* Third Box */}
                    <div className={Styles.progressBox}>

                        <h5>Progress Overview</h5>
                        <div className={Styles.gradeBox}>
                            <div className={Styles.gradeBorderBox}>
                                <h3>0%</h3>
                                <p>Overall Grade</p>
                            </div>
                        </div>
                        <div className={Styles.gradeBox}>
                            <div className={Styles.gradeBorderBox}>
                                <h3>0%</h3>
                                <p>Attendance</p>
                            </div>
                        </div>
                        <label className={Styles.detailedProgress}>VIEW DETAILED PROGRESS</label>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Information;