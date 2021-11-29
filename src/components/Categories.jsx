import React, { useState } from 'react'

function Categories({items}) {
    const [activeItem, setActiveItem] = useState(0);
    
    return (
        <div className="categories">
            <ul>
                <li onClick={()=>setActiveItem(null)} className={activeItem === null ? 'active' : ''}>Все</li>
                {items && items.map((item, id) => (
                <li onClick={()=>setActiveItem(id)} className={activeItem === id ? 'active' : ''} key={id}>{item}</li>))}
            </ul>
        </div>
    )
}

export default Categories
