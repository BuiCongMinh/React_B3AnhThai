import React, { useEffect, useState } from 'react'
import HeaderExpense from './HeaderExpense';
import ListExpens from './ListExpens';
import ModalExpese from './ModalExpese';
import './css/App.css'
import { Link } from 'react-router-dom';

let x = 1

function Walet() {
    const [expense, setExpense] = useState([
        { money: 1000, expense: true, note: 'ăn', date: '2022-07-21' },
        { money: 60000, expense: false, note: 'ăn', date: '2022-07-21' },
        { money: 60000, expense: false, note: 'ăn', date: '2022-08-21' },
    ])

    
    

    // ===================== cách đếm số ===========================

    useEffect(()=>{
        let interval =  setInterval(()=>{console.log(x++);},1000)

        return ()=>{clearInterval(interval)}
    })
// ======================

    return (
        <div className='container'>
            <Link to={'/'}>Home</Link>
            <a href="/">Link Home</a>
            <HeaderExpense expense={expense} />
            <ListExpens expense={expense} />
            <ModalExpese />
        </div>
    )
}

export default Walet