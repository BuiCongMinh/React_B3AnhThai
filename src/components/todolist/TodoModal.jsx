import React from 'react'

function TodoModal(props) {

    return (
        <div className={!props.showModal? 'hideModal': 'showModal'  } >


            <input type="text" placeholder='job name' name='' id='' /> <br />
            <input type="text" placeholder='description' name='' id='' /> <br />
            <input type="date" name='' id='' />

            <div>
                <button>ADD</button>
                <button>UPDATE</button>
                <button>DELETE</button>
                <button onClick={props.changeModal}>CANCEL</button>
            </div>
        </div>
    )
}

export default TodoModal