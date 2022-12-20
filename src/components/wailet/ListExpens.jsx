import React, { useEffect, useState } from 'react'
import './css/App.css'

function ListExpens(props) {

  const [listExpenDaily, setListExpenDaily] = useState([])


  useEffect(() => {
    let data = {}
    // console.log(props.expense);
    for (let i = 0; i < props.expense.length; i++) {
      let date = props.expense[i].date
      if (!data[date]) {
        data[date] = [props.expense[i]]
      } else {
        data[date].push(props.expense[i])
      }
    }
    
    // console.log('data', data);
    let list = []
    for (let key in data) {
      list.push(data[key])
    }
    // console.log('list', list);
    setListExpenDaily(list)

  }, [props.expense])

  // console.log(29, listExpenDaily);


  return (
    <div>
      {listExpenDaily.map((expense, index) => {
        return (
          <div key={index} className='listData'>

            <div className='dateExpense'>
              <p>{expense[0].date}</p>
            </div>

            <div className='bodyExpense'>
              <div>{expense.map((value, key) => {
                return (
                  <div key={key} className='bodyExItem'>
                    <p>{value.note}</p>
                    <p>{value.money}</p>
                  </div>
                )
              })}</div>
            </div>

          </div>
        )
      })}
    </div>
  )
}

export default ListExpens