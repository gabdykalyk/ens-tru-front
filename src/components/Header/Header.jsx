import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Sidebar from '../Sidebar/Sidebar';
import style from './Header.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <div>
                <Link to='/'>
                    <img src={require('../../images/logo.png')} />
                </Link>
            </div>
            <Navigation />
            <Sidebar />
        </div>
    )
}

export default Header;