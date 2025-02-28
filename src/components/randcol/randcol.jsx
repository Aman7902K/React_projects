import React, { useState } from "react";



export default function Randcol(){
    const [color,setColor] = useState("")
    const [hex,setHex] = useState(true)
    const [rgba,setRgba] = useState(false)

    const setValue = () =>{
        setHex(!hex)
        setRgba(!rgba)
    }

    const gen_random_color_hex = () =>{
        let random = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        let randomColor = `#${random}`
        setColor(randomColor)
    }
    const gen_random_color_rgba = () =>{
        let r = Math.floor(Math.random() * 255).toString()
        let g = Math.floor(Math.random() * 255).toString()
        let b = Math.floor(Math.random() * 255).toString()
        const a = Math.random().toFixed(2)

        let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`

        setColor(randomColor)   
    }

    const gen_random_color = () =>{
        if (hex) {
            gen_random_color_hex()
        }
        if (rgba) {
            gen_random_color_rgba()
        }
    }
    // console.log(color);
    

    return(
        <>                 
            <div className={`h-[100vh] w-[100vw] flex justify-center items-center flex-col`} 
            style={{ backgroundColor: 
                `${color}`
             }}
            >
                <div className="flex gap-2 mb-32">
                    <button className="border-2 border-amber-500" onClick={() => setValue()}>Generate Hex</button>
                    <button className="border-2 border-amber-500" onClick={() => setValue()}>Generate RGBA</button>
                    <button onClick={gen_random_color} className="border-2 border-amber-500">Generate Random Color</button>
                </div>
                <div className="text-4xl">{color}</div>
            </div>       
        </>
    )
}