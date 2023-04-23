import styles from "./index.module.scss";


const Tag = ({tagName}) => {

    return(

        <div className={styles.container}>

                <span>{tagName}</span>

        </div>
    )
}

export default Tag