import { use, useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import './style.css'

export default function Image_slider({url = '',limit = 6}){
    const [images,setImages] = useState()
    const [slider,setSlider] = useState(0)
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false) 
    

    async function fetchImages(url){
        try{
            setLoading(true)

            const res = await fetch(url)
            const data = await res.json()

            if(data){
                setImages(data)
                setLoading(false)
            }
             
        }catch(e){
            setError(e)
            setLoading(false)
        }
    } 

    useEffect(()=>{
        if(url !== "") fetchImages(url)
    },[url])

    if(loading){
        return <div>Content Loading Please wait</div>
    }
    if(error){
        return <div>Error Occured {error}</div>
    }

    console.log(images);
    
    const handleNext = () =>{
        setSlider(slider === images.length-1 ? 0 : slider+1)
        console.log(slider);
        
    }

    const handlePrev = () =>{
        setSlider(slider === 0 ? images.length-1 : slider-1)
    }

    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrev} className="leftArrow"/>
            <div className="flex h-[100%] w-[100%]">
            {
                images && images.length ?
                images.map((image,index)=>{
                    return <img
                    key={image.id}
                    src = {image.download_url}
                    className={slider === index ? "h-[100%] w-[100%]":"hidden"}
                    />
                }):"something"
            }
            </div>
            <BsArrowRightCircleFill onClick={handleNext} className="rightArrow"/> 
            <span className="image_indicator">
                {
                    images && images.length 
                    ? images.map((image,index)=>{    
                        return <button key={image.id} 
                        className={
                            index === slider ? 
                            "bg-white h-[15px] w-[15px] outline-none border-none rounded-full":"bg-gray-500 h-[15px] w-[15px] outline-none border-none border-r-[50%] rounded-full"
                        }
                        onClick={() => setSlider(index)} 
                        ></button>
                    })
                    :null
                }
            </span>
        </div>
    )

}                   