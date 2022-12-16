import React from "react";

class Footer extends React.Component {
    constructor(props){
        super (props); 

        // cách dùng state ở component classs
        this.state = {
            infor:'Minhvn',
            user: {
                name: 'Bùi Công Minh',
                age: 21
            }
        }

        // this.change = this.changeUser.bind(this)
        // this.newState = {
        //     userName: 'minhvn',
        //     class:{
        //         nameClass:'be',
        //         number:12
        //     }
        // }
        console.log(11,this);
        console.log('===============');



        // cách setState trong class
        this.change = ()=>{
            this.setState({infor: 'An'})
        }

        // this.changeNewState = ()=>{
        //     console.log(33);
        //     this.setState({userName:'Trường An'})
        //     console.log(33,this.setState);
        // }
    }


    render() {
        return (
            <>
                <button onClick={this.change}>change</button>  
                <h1>this is footer</h1>
                <h1>and helo : {this.props.user.userName}</h1>
                <h1>đây là cách dùng state trong component classs: {this.state.infor}</h1>
            </>

        )
    }
}


export default Footer
