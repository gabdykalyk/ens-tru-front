import { useDispatch } from 'react-redux';
import { logout } from '../../store/authorizationSlice';
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';

export default function MainPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutBtn = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div>
            <Header />
            <button onClick={logoutBtn}>
                LogOut
            </button>
        </div>
    )
}