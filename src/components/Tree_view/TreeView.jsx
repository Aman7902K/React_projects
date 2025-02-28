import Menu_list from "./Menu_list";


export default function TreeView({menu}){
    return(
        <div className="bg-amber-600 w-[20%] h-[100vh] mt-0 pt-4 pl-2">
        <Menu_list menu = {menu}/>
        </div>
    )
}