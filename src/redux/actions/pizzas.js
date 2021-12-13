import axios from "axios";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    }
    ); // при любом вызов данной функции изначально ставится false; без диспатча - просто объект
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`).then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }; // а уже после получения данных мы ставим setLoaded через функцию setPizzas в true положение
// изначально проверям, что если категория не равна null (все пиццы), то рендери категорию по индексу категории. Если равна - то пустая строчка, и это условие уходит
// category=${category} - фильтрация по категориям, полученным из пропсов
// _sort=${sortBy} - сортировка по sortBy из пропсов
// _order=desc - порядок сортировки по убыванию

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
  });