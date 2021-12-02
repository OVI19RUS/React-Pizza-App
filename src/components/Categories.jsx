import React, { useState } from 'react'

// используем memo для того, чтобы не происходит ненужный ререндер компонента при неизменных параментрах
const Categories = React.memo(function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectItems = (index) => {
        setActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectItems(null)}
                    className={activeItem === null ? 'active' : ''}>
                    Все
                </li>
                {items && items.map((item, index) => (
                    <li
                        onClick={() => onSelectItems(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={index}>
                        {item}
                    </li>))}
            </ul>
        </div>
    )
})

export default Categories
