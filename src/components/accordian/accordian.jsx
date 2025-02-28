import { useState } from "react"
import data from "./data"

export default function Accordian(){

    const [selected,setSelected] = useState(null)
    const [multisel, setMultisel] = useState(false)
    const [multiple,setMultiple] = useState([])


    const handlechange = (currId) =>{
        setSelected(currId === selected ? null : currId)
    }

    const handleMultiChange = (currId) =>{
        let cpyMultiple = [...multiple]
        const indexofCurr = cpyMultiple.indexOf(currId)
    
        console.log(indexofCurr);
        

        if(indexofCurr === -1) cpyMultiple.push(currId)
        else cpyMultiple.splice(indexofCurr,1)
        
        setMultiple(cpyMultiple)
        console.log(multiple);
    }
    
    

    return(
        <>
            <div className="w-[100%] gap-2 flex flex-col items-center">
                <button onClick={() => setMultisel(!multisel)}>Multi Select</button>
            {
                data.map((dataitem)=>{
                    return (
                        <div key={dataitem.id} className="flex flex-col bg-amber-700 w-[40%] cursor-pointer p-6 text-center border-2">
                            <div onClick={
                                multisel ? 
                                () => handleMultiChange(dataitem.id):
                                () => handlechange(dataitem.id)
                                }>
                                <h1>{dataitem.Ques}</h1>
                                <span>+</span>
                            </div>                            
                            {
                                multisel
                                ? multiple.indexOf(dataitem.id) !== -1 && (
                                    <div>{dataitem.answer}</div>
                                )
                                :selected === dataitem.id && (
                                    <div>{dataitem.answer}</div>
                                )
                                // selected === dataitem.id || multiple.indexOf(dataitem.id) !== -1 ?
                                // (<div>{dataitem.answer}</div>):
                                // null
                            }                        
                        </div>

                    )
                })
            }
            </div>
        </>
    )
}