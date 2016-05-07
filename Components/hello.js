import React from 'react';

export default class HelloComponents extends React.Component {
    render(){
        return(
            <h1>hello , {this.props.name}</h1>
            )
    }
};

