import React, { Component } from 'react';

class List extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container">
                 <ol className="items">
                    {this.props.items.map((item, index)=> {
                    return(<li
                        key={item}
                        className="item">
                        <div>{item.title}</div>
                        </li>);
                    })}
                </ol>
            </div>
         );
    }
}
 
export default List;