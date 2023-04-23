import Styles from "./Bot.module.css"
import { SiChatbot } from "react-icons/si";

function Bot() {
    return (
        <div className={Styles.botContainer}>
            <div className={Styles.botBackCover}>
            <SiChatbot className={Styles.botHead}/>
            </div>
            
        </div>
    )
}
export default Bot;