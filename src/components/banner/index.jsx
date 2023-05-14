import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"
import logo from "../../assets/logo_small.png"
import headerImage from "../../assets/header_image.svg"
import aboutImage from "../../assets/apropos_image.svg"

const Banner = ({context}) => {


    return(

        <header className={context === "about" ? styles.aboutContextContainer : context === "propOr404" ? styles.propOr404Container :styles.container}>

            <div className={context=== "about" ? styles.logoAndNavAbout : context === "propOr404" ? styles.propOr404LogoAndNav: styles.logoAndNav}>


                <div className={styles.logo}>

                    <img src={logo} alt="logo" />

                </div>


                <nav className={context=== 'propOr404' ? styles.propOr404Nav : styles.nav }>
                    <NavLink 
                    to="/"
                    className={({isActive, isPending}) => isPending ? styles.pending : isActive ? styles.active : ""}
                    end
                    >
                    ACCUEIL

                    </NavLink>

                    <NavLink 
                    to="/about"
                    className={({isActive, isPending}) => isPending ? styles.pending : isActive ? styles.active : ""}
                    >
                    A PROPOS
                    </NavLink>
                </nav>



            </div>
            {context === "about" || !context  ? 
            
                <div className={!context === "about" || !context ? styles.headerImage : styles.aboutImage }>

                <img src={context === "about" ? aboutImage : headerImage} alt="" />
                {!context === "about" || !context && <p> Chez vous, partout et ailleurs </p>}

                </div> 

            : null}
           

        </header>


    )
}

export default Banner