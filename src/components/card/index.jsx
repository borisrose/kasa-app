import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';




const Card = ({data}) => {


    const navigate = useNavigate()

    const handleCardClick = (e, data) => {

        console.log('click on card', data.id)
        navigate(`/properties/${data.id}`)


    }



    return (

        <div className={styles.container}>

            <div className={styles.cardInnerContainer} onClick={(e) => handleCardClick(e, data)}>

                <p> {data.title} </p>


            </div>
            
  


          

        </div>

    )
}


export default Card