import ContactsComponent from "../../components/ContactsComponent/ContactsComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import Header from "../../components/Header/Header";
import styles from "./ContactsPage.module.scss"
import { ReactComponent as LocationLogo } from '../../images/location.svg';
import { ReactComponent as PhoneLogo } from '../../images/call.svg';
import { ReactComponent as MailLogo } from '../../images/mail.svg';

const ContactsPage = () => {
    return (
        <div>
            <Header />
            <div className={styles.contacts}>
                Контакты
            </div>
            <div className={styles.wrapper}>
                <ContactsComponent
                    logo={<LocationLogo />}
                    title="Адрес"
                    text="010000, г. Нур-Султан , ул. Сығанақ, д.17/10, МЖК «Зеленый квартал», 10 этаж"
                />
                <ContactsComponent
                    logo={<PhoneLogo />}
                    title="Телефон горячей линии"
                    text="+7 (7172) 55 22 66"
                    subtitle="Поддержка осуществляется по будням с 09:00 до 18:30"
                />
                <ContactsComponent
                    logo={<MailLogo />}
                    title="Контакты доверия"
                    text="57-02-76"
                    email="doverie@skc.kz"
                />
            </div>
            <div className={styles.subtitle}>
                Контакты менеджеров
            </div>
            <div className={styles.wrapper}>
                <ContactsComponent
                    logo={<PhoneLogo />}
                    title="По товарам"
                    text="Шыныбекова Гульмира"
                    phone="8-7172-57-02-75 (вн. 185)"
                    email="g.shynybekova@skc.kz"
                />
                <ContactsComponent
                    logo={<PhoneLogo />}
                    title="По работе в системе, услугам и работам"
                    text="Сакенов Санжар"
                    phone="8-7172-57-02-75 (вн. 145)"
                    email="s.sakenov@skc.kz"
                />
                <ContactsComponent
                    logo={<PhoneLogo />}
                    title="По вопросам заключения договора"
                    text="Касенгалиева Гульнара"
                    phone="8-7172-57-02-75 (вн. 128)"
                    email="g.kassengaliyeva@skc.kz"
                />
                <ContactsComponent
                    logo={<PhoneLogo />}
                    title="По товарам"
                    text="Кайдарова Айнаш"
                    phone="8-7172-57-02-75 (вн. 122)"
                    email="a.kaidarova@skc.kz"
                />
            </div>
            <FooterComponent />
        </div>
    );
}

export default ContactsPage;