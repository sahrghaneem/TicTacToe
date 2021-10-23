import React from 'react';
import Square from './square';
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render(){
        return(
        <div className="container">
        {this.props.Sq.map((val, index) =>{ 

        return<Square value={val} key={index} method={() => this.props.method(index)} />

        })
        }
        </div>
        )
    }
}
export default Board;