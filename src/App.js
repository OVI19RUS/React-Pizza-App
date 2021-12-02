import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux'

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from 'react-router-dom';
import { setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // перенести в Redux и подключить redux-thunk
    // Следить за фильтрацией и сортировкой и подставлять данные из URL
    // Следать имитацию загрузки пицц из CSS
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    })
  })

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;