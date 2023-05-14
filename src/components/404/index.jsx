import { Link } from "react-router-dom";
import Banner from "../banner";
import styles from "./index.module.scss";




const Error = () => {




    return(

        <div className={styles.container}>

                <Banner context={"propOr404"} />
                <div className={styles.errorContainer}>
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </div>
                <Link to="/">Retourner sur la page d'accueil</Link>

        </div>

    )


}


export default Error