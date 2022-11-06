import style from './404.module.scss'

const Error404 = () => {
    return (
        <div className={style.error}>
            <div>
                <img src={require('../images/404.webp')} />
            </div>
        </div>
    )
}

export default Error404;