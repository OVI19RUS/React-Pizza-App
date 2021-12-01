import React from 'react'
import { useSelector } from 'react-redux'
import { Categories, Sort, PizzaBlock } from '../components'

function Home() {
  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    }
  })

    return (
        <div className="container">
          <div className="content__top">
            <Categories items={[
              'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'
            ]} />
            <Sort items={[{name: 'популярности', type: 'popular'},{name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}
            ]}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj}/>)}
            {" "}
          </div>
        </div>
    )
}

export default Home
