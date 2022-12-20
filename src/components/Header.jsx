import { useState } from "react"

function Header(props) {

    // console.log(4, props);
    const [numberState, setNumBerState] = useState(props.test)
 

    function changeNumber(){
        setNumBerState(numberState+1)
    }



    return (
        <>
            <h1>this is header </h1>
            {/* {
                props.user.userName||props.user.passWord ? 
                <div>               
                    <h1>tài khoản có userName: {props.user.userName} </h1>
                    <h1>tài khoản có passWord: {props.user.passWord} </h1>
                </div> :
                <div>
                    <button>đăng ký </button>
                    <button>đăng nhập </button>
                </div>
            } */}
            {/* <button onClick={changeNumber}>ChangeNumber</button> */}
            {/* <button onClick={props.user}>change background</button> */}

            {/* <h2>{numberState}</h2> */}

        </>
    )
}

export default Header
