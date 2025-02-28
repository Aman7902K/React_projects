import List_item from "./List_item";

export default function Menu_list({ menu = [] }) {
    // console.log(menu[2]?.id);

    return (
        <ul className="">
            {menu && menu.length ? 
                menu.map((item) => <List_item key={item.id} listItem={item} />)
                : null
            }
        </ul>
    );
}
