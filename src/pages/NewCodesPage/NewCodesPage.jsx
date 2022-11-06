import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { logout } from '../../store/authorizationSlice';
import { useNavigate } from "react-router-dom";

export default function NewCodesPage() {
    const { isAuth } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutBtn = () => {
        dispatch(logout())
        navigate('/')
    }

    return (
        <div>
            {isAuth ?
                <div>
                    Hello
                    <button onClick={logoutBtn}>
                        LogOut
                    </button>
                </div> : <Navigate to="/login" />
            }
        </div>
    )
}