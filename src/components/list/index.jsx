import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



const List = ({data, listName}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [list, setList] = useState()

    const handleList = (e, choice) => {

        if(choice === "up"){
            setIsOpen(true)
        }

        if(choice === "down"){
            setIsOpen(false)
        }
    }

    useEffect(() => {

        setList(data)




    }, [data])

  

    return(

        <div className={styles.container}>

            <div className={styles.listNameContainer}>
                <p>{listName}</p>
                {!isOpen ? <FontAwesomeIcon icon={faChevronDown} onClick={(e) => handleList(e, "up")}/> : <FontAwesomeIcon icon={faChevronUp} onClick={(e) => handleList(e, "down")} />}
            </div>
            {isOpen && <div className={styles.listDataContainer}>
                {listName && listName === "Equipement" ? list.map((e, i) => <p key={i}>{e}</p>) : <p>{list}</p>}
            </div>}

        </div>
    )

}

export default List