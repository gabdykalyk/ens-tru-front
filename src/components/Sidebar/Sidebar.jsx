import LightButton from "../Buttons/LightButton/LightButton";
import Profile from "../Profile/Profile";
import style from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <LightButton />
            <div className={style.separator}>
                <img src={require('../../images/separator.png')} />
            </div>
            <Profile />
        </div>
    )
}

export default Sidebar;