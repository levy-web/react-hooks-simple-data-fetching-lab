// create your App component here
import React, {useEffect, useState} from 'react'

const ANIMAL_API = "https://dog.ceo/api/breeds/image/random"



function App(){

    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch(ANIMAL_API)
        .then((res)=>res.json())
        .then(data=>setImage(data.message))
    }, [])

    if (!image) {
        return <p>Loading...</p>
    }

    return(
        <>
        <img src= {image} alt="A Random Dog"/>
        </>

    )
}
export default App;
