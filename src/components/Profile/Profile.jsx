import { ReactComponent as KzLogo } from '../../images/kz.svg';
import { ReactComponent as ArrowDown } from '../../images/arrowdown.svg';
import styles from './Profile.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authorizationSlice';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggling = () => setIsOpen(!isOpen);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutBtn = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div className={styles.profile}>
            <div className={styles.flag}>
                <KzLogo />
            </div>
            <div className={styles.lang}>
                kz
            </div>
            <div className={styles.dropdownbtn}>
                <button
                    onClick={toggling}
                    className={styles.btn}
                >
                    <ArrowDown />
                </button>
                {isOpen &&
                    <div className={styles.dropdown}>
                        <button 
                            onClick={logoutBtn}
                            className={styles.btn}
                        >
                            LogOut
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Profile;