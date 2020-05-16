import React, { Component } from 'react';
import './RandomColorSquare.css'

class RandomColorSquare extends Component {
    constructor(props) {
        super(props);
        this.state = { color: [54, 31, 3] };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ color: this.changeColor() })

    }
    changeColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random() * 255));
        }
        console.log(random);
        return random;
    }
    formatColor(arr) {
        return 'rgb(' + arr.join(', ') + ')';
    }
    render() {
        const style = {
            backgroundColor: this.formatColor(this.state.color)
        };
        return (
            <div className="RandomColorSquare" onClick={this.handleClick} style={style}>
                Click to change me!
            </div>
        );
    }
}

export default RandomColorSquare;