import styles from "./index.module.scss"
import logo from "../../assets/logo_footer.png"


const Footer = () => {

    return (

        <div className={styles.container}>

            <div className={styles.imgContainer}>
                <img src={logo} alt="logo" />
            </div>
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer