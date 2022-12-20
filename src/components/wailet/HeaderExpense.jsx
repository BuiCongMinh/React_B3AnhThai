import React, { useEffect, useState } from 'react'

function HeaderWalet(props) {

  const [total, setTotal] = useState(0)

  useEffect(() => {
   
    var count = 0
    for (let i = 0; i < props.expense.length; i++) {

      count = count + props.expense[i].money * (props.expense[i].expense?1:-1)
    }

    setTotal(count)


  }, [props.expense])



  return (
    <div>
      <div>Cash: {total.toLocaleString()}</div>
    </div>
  )
}

export default HeaderWalet