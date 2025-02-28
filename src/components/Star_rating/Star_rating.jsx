import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'


export default function Star_rating(){

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)

    const handleClickChange = (index) =>{
        setRating(index)
    }
    const handleMouseLeave = () =>{
        setHover(rating)
    }
    const handlMouseenter = (index) =>{
        setHover(index);
    }


    return(
            <>
                <div className="flex mt-10  justify-center">
                    {
                        [...Array(7)].map((_,index)=>{
                            index += 1
                            return (
                                <FaStar
                                className={index <= (rating || hover) ? 'text-amber-400' : 'text-black'}
                                    key={index}
                                    onClick={() => handleClickChange(index)}
                                    onMouseMove={()=> handlMouseenter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    size={25}
                                />
                            )
                        })
                    }
                </div>
            </>
    )
}