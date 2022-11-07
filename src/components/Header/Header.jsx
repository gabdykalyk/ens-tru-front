import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <img src={require('../../images/logo.png')} />
            </div>
            <Navigation />
            <Sidebar />
        </div>
    )
}

export default Header;