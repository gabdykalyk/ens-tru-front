import FooterComponent from '../../components/FooterComponent/FooterComponent';
import Header from '../../components/Header/Header';
import NotificationComponent from '../../components/Notification/NotificationComponent';
import SearchComponent from '../../components/SearchComponent/SearchComponent';

export default function MainPage() {
    return (
        <div>
            <Header />
            <SearchComponent />
            <NotificationComponent />
            <FooterComponent />
        </div>
    )
}