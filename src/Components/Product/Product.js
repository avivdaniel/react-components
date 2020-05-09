import React from 'react';
import './Product.css'

export class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Product">
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                <div>
                    <p>{this.props.children}</p>
                </div>
                <div>
                    <h3>${this.props.price}</h3>
                </div>
            </div>
        )
    }
}