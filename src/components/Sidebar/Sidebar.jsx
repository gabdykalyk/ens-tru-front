import LightButton from "../Buttons/LightButton/LightButton";
import style from './Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <LightButton />
            <img src={require('../../images/separator.png')} />
        </div>
    )
}

export default Sidebar;