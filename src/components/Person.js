import  { Component } from 'react';


export default class Person extends Component {
    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <p>{this.props.age >= 18 ? 'Admin' : 'User' }</p>
            </div>
          );
    }   
}