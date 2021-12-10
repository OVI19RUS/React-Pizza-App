import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, Sort, PizzaBlock } from '../components'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";
import Placeholder from '../components/PizzaBlock/Placeholder'

// выносим наши категории в отдельную константу
const categoriesArray = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filter }) => filter);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);
  // запоминаем ссылку на данную функцию, так как ререндер происходит из-за нее
  // после первого ререндера не менять
  const onSelectedCategory = useCallback((index) => {
    dispatch(setCategory(index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickSort = useCallback((type) => {
    dispatch(setSortBy(type));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddPizzaToCart = (obj) => (
    dispatch(addPizzaToCart(obj))
  )

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectedCategory}
          items={categoriesArray} />
        <Sort activeSort={sortBy.type} items={sortNames} onClickSort={onClickSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
        ? items.map((obj) => 
        <PizzaBlock 
        onClickAddPizza={handleAddPizzaToCart} 
        key={obj.id} 
        addedItems={cartItems[obj.id] && cartItems[obj.id].length}
        isLoading={true} 
        {...obj} />) 
        : Array(12).fill(0).map((_, index) => 
        <Placeholder key={index} />)}
        {" "}
      </div>
    </div>
  )
}

export default Home
