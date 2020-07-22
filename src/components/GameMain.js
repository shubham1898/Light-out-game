import React, { Component } from 'react'
import Style1 from './mainGame.module.css'
import './main.css'
// import GameResult from './result'


export default class GameMain extends Component {
constructor(){
    super()
    this.state={
        board:[[0,0,0],[0,0,0],[0,0,0]],
        // board:[0,0,0,0,0,0,0,0,0]
        won:'no',
        score:0
     
    }
    this.setRandomBoard()

    
}
updateRender=()=>{
   let board=[[0,0,0],[0,0,0],[0,0,0]];
        // board:[0,0,0,0,0,0,0,0,0]
      let  won='no';
      let score=0;
    this.setState({board:board,
        won:won,score:score})
        this.setRandomBoard()
}
setRandomBoard=()=>{
    for(let i=0;i<3;i++){
    let board=this.state.board;
    let r=Math.floor(Math.random()*3);
    let c=Math.floor(Math.random()*3);
    board[r][c]=1;
    this.setState({board});
}
}
isWon=()=>{
    var arr = [].concat(...this.state.board);
  
if (arr.indexOf(1)===-1)
    this.setState({won:'yes'})
console.log(this.state.won)
    
}
returnIndex=(r,c)=>{
    console.log(r,c)
}
toggleSelf=(r,c,State1)=>{
    
    let board=this.state.board
    let temp=board[r][c]
    temp=(temp===1)? 0:1
    board[r][c]=temp
    let score=State1.score+1;
    this.setState({board,score:score})
}
toggleAdjacent=(r,c)=>{
    let board=this.state.board
 
    if(r-1>=0){
        let temp=board[r-1][c];
        temp=(temp===1)? 0:1;
        board[r-1][c]=temp;
        this.setState({board}) 
    }
    if(r+1<=2){ 
        let temp=board[r+1][c];
        temp=(temp===1)? 0:1;
        board[r+1][c]=temp;
        this.setState({board}) 
    }
    if(c-1>=0){ 
        let temp=board[r][c-1];
        temp=(temp===1)? 0:1;
        board[r][c-1]=temp;
        this.setState({board}) 
    }
    if(c+1<=2){
        let temp=board[r][c+1];
        temp=(temp===1)? 0:1;
        board[r][c+1]=temp;
        this.setState({board}) }


}
toggleClass=(res)=>{
    if(res==='yes')
    return true
    else return false

}

classColor=(val)=>{
    if(val===0)
    return Style1.red
    else return Style1.green
}

    render() {

        // setTimeout(()=> 
        //    { if(this.state.won==='yes')
        // return (<div className={ `${Style1.main}`}><h1>You Won !</h1>
        // <h2>Your Score {this.state.score}</h2>
        // <button  className={`${Style1.button}`} onClick={this.updateRender}>Play Again!!!!</button></div>);
        //    }, 6);
        
       
        return (
            
           <div className={` ${Style1.main}`}>
               {this.setRandomBoard}
               {
                   this.state.board.map((val,index)=>(<div className={`${Style1.board}`}>{
                       val.map((val1,index1)=>(
                       <h2 className={this.classColor(val1)}  onClick={()=>{this.toggleSelf(index,index1,this.state) ;this.toggleAdjacent(index,index1);this.isWon()}}>{val1}</h2>
                       ))} </div>

                        ))
                        
               }
            {/* <GameResult arr={this.state.board} res={this.state.won} score={this.state.score}/> */}
            <div hidden={this.toggleClass(this.state.won)}>
            <div>Status : Did You Won : {this.state.won}</div>
            <div>Steps Score : <span className={Style1.bold}>{this.state.score}</span></div>
            <div>keep Score as low as possible</div>
            </div>
            <div className={this.state.won} >
               <div ><h1>You Won !</h1>
                <h2>Your Score {this.state.score}</h2>
                <button  className={`${Style1.button}`} onClick={this.updateRender}>Play Again!!!!</button></div>
            </div>

            </div>
        );
    }
}
// className={ `${Style1.main}`}