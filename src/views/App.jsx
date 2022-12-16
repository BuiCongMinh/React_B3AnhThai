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


import { useState } from 'react';




function App() {  // component App() chỉ để làm logic


  const [showModal, setShowModal] = useState(false)
  const [changeIcon, setChangeIcon] = useState(false)

  function changeModal() {
    setShowModal(showModal? false:true)
    setChangeIcon(changeIcon? false:true)
  }

  return (
    <div className="App">
      <TodoHeader changeModal={changeModal} changeIcon={changeIcon} />

      <TodoList />
      <TodoModal showModal={showModal} changeModal={changeModal} />



      {/* header */}

      {/* lisst hiển thị đata

      modal để thêm sửa xoá */}

    </div>
  );
}

export default App;
