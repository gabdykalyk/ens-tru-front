import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to="/">Поиск</Link>
            <Link to="/">Поставщикам</Link>
            <Link to="/">Инструменты</Link>
            <Link to="/">Контакты</Link>
        </div>
    )
}

export default Navigation;