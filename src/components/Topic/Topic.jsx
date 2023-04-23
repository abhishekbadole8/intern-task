import Styles from "./Topic.module.css"
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Navbar from "../../components/Navbar/Navbar";
import SubMenu from "../../components/SubMenu/SubMenu";
import information from "../../assets/information-circle 1.svg"
import Bot from "../Bot/Bot";
function Topic() {



    return (
        <>
            <Navbar />
            <Header />

            <div className={Styles.moduleContainer}>
                <Menu />
                <SubMenu />
                <div className={Styles.topicContainer}>

                    <div className={Styles.topictopBox}>
                        <h1>Python Loops</h1>
                        <p>15 December 2021, Wednesday, 07:30 PM</p>
                    </div>

                    <div className={Styles.dailyFeedback}><label>DAILY FEEDBACK</label></div>

                    <div >

                        {/* boxheading */}
                        <div className={Styles.topicDownBoxFields}>
                            <label><span></span>SESSION PLAN</label>
                            <label><span></span>PRE-WATCH VIDEOS</label>
                            <label><span></span>SESSION RECORDING</label>
                            <label><span></span>REFERENCES</label>
                        </div>

                        {/* active field */}
                        <div className={Styles.topicDownBox}>

                            <div className={Styles.activeTop}>
                                <h1>Session Plan</h1>
                                <p>LIVE session is about to start. Please stay tuned.</p>
                                <label htmlFor="">JOIN LIVE SESSION</label>
                            </div>

                            <div className={Styles.sessionTopics}>
                                <h4>Sub-Topics</h4>
                                <p>1. Sorting and Indexing Dataframe.</p>
                                <p>2. Filtering Dataframe.</p>
                                <p>3. Usage of loc and iloc functions.</p>

                            </div>
                            <h4>Session Details</h4>

                        </div>

                    </div>

                </div>
                <Bot className={Styles.botPosition}/>
            </div>

        </>
    )
}
export default Topic;