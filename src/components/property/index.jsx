import { useNavigate, useParams } from "react-router-dom";
import Banner from "../banner";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Carousel from "../carousel";
import Tag from "../tags";
import Stars from "../stars";
import List from "../list";
import Footer from "../footer";


const Property = () => {

    const [ data, setData] = useState()

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        console.log("use effet in property");


        (async() => {


            try{
                
                const res = await fetch('./../database.json', { 

                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
    
                })

                const response = await res.json()
                const propriety = response.filter(p => p.id === params.id)[0]
                if(!propriety){

                    navigate('/404')
                }
                setData(propriety)
            }
            catch(err) {

                console.error(err)
               
                
            }
    



        })()


    }, [])




    return(

        <>
               <Banner  context={'propOr404'}/>
        <div className={styles.container}>
     


            {data && <Carousel pictures={data.pictures} propriety={{title:data.title}}/>}


           {data && <div className={styles.titleAndLocationAndTagsAndStars}>

                <div className={styles.titleAndLocation}>

                    <p>{data.title}</p>

                    <p>{data.location}</p>

                    <div className={styles.tagsContainer}>
                        {data.tags && data.tags.map((tag, index) => <Tag key={index} tagName={tag} />)}
                    </div>

                </div>

                <div className={styles.tagsAndStars}>

                 
                    <div className={styles.starsContainer}>
                      
                        <Stars starsNumber={data.rating}/>
                  
        
                        <div className={styles.hostContainer}>

                                <div className={styles.hostName}>
                                    {data.host.name}
                                </div>
                                <div className={styles.hostPicture}>
                                    <img src={data.host.picture} alt={data.host.name} />
                                </div>

                        </div>
                    </div>
                 
         

                </div>

            </div>}
            <div className={styles.descriptionAndEquipment}>
                {data &&
                    <>
                    <List listName={"Description"} data={data.description}/>
                    <List listName={"Equipement"} data={data.equipments}/>
                    </>
                }   
            </div>




        </div>
        <Footer />
        </>
    )


}

export default Property