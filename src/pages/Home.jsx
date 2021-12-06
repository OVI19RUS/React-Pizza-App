import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, Sort, PizzaBlock } from '../components'
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from "../redux/actions/pizzas";
import Placeholder from './Placeholder'

// выносим наши категории в отдельную константу
const categoriesArray = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [{ name: 'популярности', type: 'popular' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'alphabet' }];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  useEffect(() => {
    dispatch(fetchPizzas())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // запоминаем ссылку на данную функцию, так как ререндер происходит из-за нее
  // после первого ререндера не менять
  const onSelectedCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectedCategory}
          items={categoriesArray} />
        <Sort items={sortNames} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj} />) : Array(12).fill(<Placeholder />)}
        {" "}
      </div>
    </div>
  )
}

export default Home
