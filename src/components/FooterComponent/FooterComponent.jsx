import styles from "./FooterComponent.module.scss"
import FooterLicense from "./FooterLicense/FooterLicense";
import FooterMain from "./FooterMain/FooterMain";

const FooterComponent = () =>{
    return(
        <div className={styles.footer}>
            <FooterMain />
            <FooterLicense />
        </div>
    )
}

export default FooterComponent;