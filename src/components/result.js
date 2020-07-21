import React, { Component } from 'react'
class result extends Component {
   
    render() {
        let array1=[...this.props.arr];
        let final='yes'
        array1.map(val=>(
           <div> {if(val===1){
            final='no';}}</div>
        ))

        if(final==='yes'){
        return (
           <h1>You Won</h1>
        )}else return <h1>wait</h1>
    }
}

export default result;

