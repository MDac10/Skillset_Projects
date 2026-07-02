// import {MouseEvent} from 'react';

import { useState } from "react";

//Should be able to pass items to put into the list and a heading, so that this component can be reused in other parts of the app.

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}


function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const noListMsg = items.length === 0 ? <p>There are no active learning items</p> : null;

    //handler
    // const handleItemClick = (event: MouseEvent) => {
    //     console.log(event);
    // }

    return (
    <div>
        <h1>{heading}</h1>
        {noListMsg}
        <ul className="list-group">
            {items.map((item, index) => (
                <li 
                    className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                    key={item} 
                    onClick={() => { setSelectedIndex(index); onSelectItem(item);}}
                >
                    {item}
                </li>
            ))}
        </ul>
    </div>
    );
}

export default ListGroup;