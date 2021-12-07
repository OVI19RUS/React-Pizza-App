import React from 'react'
import PropTypes from 'prop-types';

// используем memo для того, чтобы не происходит ненужный ререндер компонента при неизменных параментрах
const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClickCategory(null)}
                    className={activeCategory === null ? 'active' : ''}>
                    Все
                </li>
                {items && items.map((item, index) => (
                    <li
                        onClick={() => onClickCategory(index)}
                        className={activeCategory === index ? 'active' : ''}
                        key={index}>
                        {item}
                    </li>))}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
}

Categories.defaultProps = {activeCategory:null, items: []}

export default Categories
