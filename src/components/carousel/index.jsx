import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

const Carousel = ({pictures, propriety}) => {


    console.log(pictures)
    const [carouselCard, setCarouselCard] = useState()
    const [ counter, setCounter] = useState(1)

    useEffect(() => {

        if(pictures && pictures.length > 0){
            setCarouselCard(pictures[0])
        }


    }, [pictures])

    const handleArrowClick = (e, direction) => {

        if(direction === "left"){

            if(carouselCard === pictures[0]){

                setCounter(pictures.length)
                setCarouselCard(pictures[pictures.length - 1])
            }
            else {
                let index = pictures.findIndex(p => p === carouselCard)
                setCarouselCard(pictures[index-1])
                setCounter(index)
            }

        } 

        if(direction === "right"){

            if(carouselCard === pictures[pictures.length - 1]){

                setCarouselCard(pictures[0])
                setCounter(1)
            }
            else {
                let index = pictures.findIndex(p => p === carouselCard)
                setCarouselCard(pictures[index+1])
                setCounter(index+2)
            }

        } 

        
    }

    return (

        <div className={styles.container}>

            
                
                {carouselCard && <div className={styles.pictureContainer}>  
                    {pictures.length > 1 && <FontAwesomeIcon className={styles.leftArrow} icon={faChevronLeft} onClick={(e) => handleArrowClick(e, "left")}/>}
                    <img className={styles.picture} src={carouselCard} alt={propriety.title}/>
                    {pictures.length > 1 && <span className={styles.counterPicture}>{counter} / {pictures.length}</span>}
                    {pictures.length > 1 && <FontAwesomeIcon className={styles.rightArrow}  icon={faChevronRight} onClick={(e) => handleArrowClick(e, "right")}/>}
                </div>}
        
            
            
        


        </div>
    )

}

export default Carousel