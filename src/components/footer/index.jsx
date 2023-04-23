import styles from "./index.module.scss"
import logo from "../../assets/logo_footer.png"


const Footer = () => {

    return (

        <div className={styles.container}>

            <img src={logo} alt="logo" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer