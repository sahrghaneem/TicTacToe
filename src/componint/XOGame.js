import React from 'react';
import BoardGame from "./boardgame"

class XOGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           squares:Array(9).fill(''),
           userchoice: true,
           newStep: 0,
           history:[]
        }
    }

     clickClick  = (i)=>{
        const winPlayer = this.CalculateWinner(this.state.squares);
        const cleanArr = [...this.state.squares];
        if(winPlayer || cleanArr[i]) return;
        cleanArr[i]= this.state.userchoice ? "❌" : "⭕" ;
        this.setState({
            squares:cleanArr,
            userchoice:!this.state.userchoice,
            history:[...this.state.history , this.state]
        })
    }

    time=(stepIndex)=>{
        this.setState(this.state.history[stepIndex])
    }

     CalculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
                return squares[a];
            }
        }
    
        return null;
    }

    render(){
        const winPlayer= this.CalculateWinner(this.state.squares);

        return(
            <div className="XOGame">
                <h1> Tic Tac Toe Game</h1>
                <BoardGame Sq={this.state.squares} method={this.clickClick }/>
                {console.log(this.state.squares)}
                <div className="squaresStep">
                    <div className="steps"><button onClick={()=> {this.setState({squares: Array(9).fill('') , userchoice : true} )}} >New Game</button></div>
                    <div> {winPlayer ? 'winner'+ winPlayer : 'Player:' + (this.state.userchoice ? "❌" : "⭕" ) }</div>
                    <div className="history"> 
                    {this.state.history.map((element,index)=>{
                        return (
                            <button className="button" onClick={()=> this.time(index)}>step-{index+1}</button>

                        )
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default XOGame;

