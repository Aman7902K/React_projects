import { useState } from "react";
import Menu_list from "./Menu_list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function List_item({ listItem }) {

    const [children,setChildren] = useState({})

    const handleChildren = (itemId) =>{
        setChildren({
            ...children,
            [itemId]: !children[itemId]
        })
        
    }


    console.log(children);

    return (
        <li className="ml-2 mb-6">
            <div className="flex items-center gap-2">
            <p>{listItem.label}</p>
            {
                listItem && listItem.children && listItem.children.length ? (
                <span onClick={() => handleChildren(listItem.id)}>
                    {children[listItem.id] ? <FaMinus /> : <FaPlus />}
                </span>
                ) : null
            }
            </div>
            {
                listItem && listItem.children && children[listItem.id]
                ?
                    <Menu_list  menu={listItem.children}/>
                : null
            }
        </li>
    );
}
