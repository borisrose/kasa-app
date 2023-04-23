import { useState, useEffect } from "react"
import styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"



const Stars = ({starsNumber}) => {

    const starsNumberToNumber = Number(starsNumber)
    const [redStarsNumber, setRedStarsNumber] = useState(starsNumberToNumber)
    const [ redArray, setRedArray] = useState([])
    const [ silverArray, setSilverArray] = useState([])
    console.log(starsNumberToNumber)




    useEffect(() => {

        console.log(redArray)

        let redCounter = 0
        let rArray = []
        let sArray = []

        while(redCounter < redStarsNumber){

            rArray.push("red")
            redCounter += 1;
        }

        let silverCounter = 0

        while(silverCounter < (6 - redStarsNumber)){

            sArray.push("silver")
            silverCounter += 1;
        }

        setRedArray(rArray)
        setSilverArray(sArray)
    }, [redStarsNumber])



    return(

        <div className={styles.container}>

            {redArray && redArray.length > 0 && redArray.map((r, index) => <FontAwesomeIcon icon={faStar} className={styles.redStar} key={index} />)}
            {silverArray && silverArray.length > 0 && silverArray.map((s,index) =>  <FontAwesomeIcon icon={faStar} className={styles.silverStart} key={index} />)}

        </div>
    )





}

export default Stars