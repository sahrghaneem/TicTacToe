import React from 'react';
import BoardGame from "./boardgame"



class XOGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
           userchoice: true,
           newStep: 0,
           listSteps:[
            {squares:Array(9).fill('')}
           ]

        }
    }

     clickClick  = (i)=>{
        const listSteps2= this.state.listSteps.slice(0, this.state.newStep+1);
        const currentSteps= listSteps2[listSteps2.length-1];
        const cleanArr = currentSteps.squares.slice();
        
      //  const winner = CalculateWinner(squares);
        if (cleanArr[i]) {
            return;
        }
        if(cleanArr[i]) return;
        cleanArr[i]= this.state.userchoice ? "❌" : "⭕" ;
        this.setState({
            listSteps:listSteps2.concat({
            listSteps:cleanArr
        }),
       
        userchoice:!this.state.userchoice,
        newStep:listSteps2.length
        
    });
    }
    

    render(){
        const listSteps = this.state.listSteps;
        const currentSteps = listSteps[this.state.newStep];

      //  const winner = CalculateWinner(currentSteps.squares);

        // let status;
        // if (winner) {
        //     status = 'Winner is ' + winner;
        // } else {
        //     status = 'Next Player is ' + (this.state.userchoice ? 'X' : 'O');
        // }

        return(
            <div className="XOGame">
                <h1> Tic Tac Toe Game</h1>
                <BoardGame Sq={this.state.listSteps[0].squares} method={this.clickClick }/>
                {console.log(this.state.listSteps[0])};
                <div className="NewStep">
                    <div className="steps"><button onClick={()=> {this.setState({listSteps: Array(9).fill('') , userchoice : true} )}} >New Game</button></div>
                    <div>User : {this.state.userchoice ? "❌" : "⭕" } </div>
                </div>

            </div>

        );
    }
}
export default XOGame;

// function CalculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
//             return squares[a];
//         }
//     }

//     return null;
// }