import styles from './ContactsComponent.module.scss'

const ContactsComponent = ({logo, title, text, phone, email, subtitle}) => {
    return( 
        <div className={styles.contacts}>
            <div className={styles.logo}>
                {logo}
            </div>
            <div className={styles.wrapper}>
                <div className={`${styles.items} ${styles.title}`}>
                    {title}:
                </div>
                <div className={`${styles.items} ${styles.text}`}>
                    {text}<br />
                    {phone}
                </div>
                <div className={`${styles.items} ${styles.email}`}>
                    {email}
                </div>
                <div className={`${styles.items} ${styles.subtitle}`}>
                    {subtitle}
                </div>
            </div>
        </div>
     );
}
 
export default ContactsComponent;