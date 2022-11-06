import { useDispatch } from 'react-redux';
import { logout } from '../../store/authorizationSlice';
import { useNavigate } from "react-router-dom";

export default function NewCodesPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutBtn = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div>
            Hello
            <button onClick={logoutBtn}>
                LogOut
            </button>
        </div>
    )
}