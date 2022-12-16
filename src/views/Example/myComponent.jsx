import React from "react";

class MyComponent extends React.Component {

    /*
        Fragment
     */

    state = {
        name: 'Ronaldo ',
        change:'Hang MU'
    }

    handleOnchangeName = (event) =>{
        this.setState({
            name:event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="firtName">
                    <input type="text" value={this.state.name} 
                    onChange={(event)=>this.handleOnchangeName(event)}/>
                    My name is {this.state.name}
                </div>
                <div className="second">
                    this is change: {this.state.change}
                </div>
            </>
        )
    }
}

export default MyComponent
