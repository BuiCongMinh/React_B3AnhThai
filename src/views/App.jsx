import logo from './logo.svg';
import './App.scss';
import '../components/todolist/todo.css'
import Data from '../config/Data'
import 'antd/dist/reset.css';
import MyComponent from './Example/myComponent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Bai1 from '../components/body/BaiTap1';
import bai1Data from '../data/bai1Data'
import TodoModal from '../components/todolist/TodoModal';
import TodoHeader from '../components/todolist/TodoHeader';
import TodoList from '../components/todolist/TodoList';
import Home from '../components/home/Home';
import Walet from '../components/wailet/Walet';

import { BrowserRouter, Routes, Route } from 'react-router-dom'  //Thêm thư viện cho file
import { useState } from 'react';
import SingIn from '../components/signIn/SingIn';
import Parent from '../components/Parent';
import Children from '../components/Children';
import Children2 from '../components/Children2';





function App() {  // component App() chỉ để làm logic


  // const [showModal, setShowModal] = useState(false)
  // const [changeIcon, setChangeIcon] = useState(false)

  // function changeModal() {
  //   setShowModal(showModal? false:true)
  //   setChangeIcon(changeIcon? false:true)
  // }

  const [count, setCount] = useState(0)



  
  function ChangeCount() {
    setCount(count + 1)
  }

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Parent />}>
          <Route path='/' element={<Home count={count} ChangeCount={ChangeCount} />} />
          <Route path='/parent' element={'test'} />
          <Route path='/children' element={<Children />} />
          <Route path='/children2' element={<Children2 />} />
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/wailet' element={<Walet />} />
        </Route>

        
        <Route path='/sing-in' element={<SingIn />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
