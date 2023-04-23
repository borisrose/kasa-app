import { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Banner from '../banner'
import Card from '../card'
import Footer from '../footer'


const Homepage = () => {

    const [proprieties, setProprieties] = useState([])

    useEffect(() => {


        const api = async() => {

            try {

                const res = await fetch('database.json', { 

                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
    
                })

                const response=  await res.json()

                setProprieties(response)
                    

            }catch(err){

                console.error(err)
            }
           
            
           
            
        }

        api()
        

    }, [])


    useEffect(() => {

        if(proprieties){

            console.log(proprieties)
        }

    }, [proprieties])


    return(

        <div className={styles.homepage}>


            <Banner />
            <div className={styles.cardsContainer}>
                {proprieties && proprieties.map((prop,index) => <Card data={prop} key={index} /> )}
            </div>
            <Footer/>
      

            


        </div>
        
    )
}


export default Homepage