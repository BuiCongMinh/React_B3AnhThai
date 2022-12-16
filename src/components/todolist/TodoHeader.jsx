import React from 'react'

function todoHeader(props) {
    return (
        <div>
            <h1>
                DailyJob
                <button onClick={props.changeModal}>
                    {props.changeIcon? '+':'-'}
                </button>
            </h1>
        </div>
    )
}

export default todoHeader