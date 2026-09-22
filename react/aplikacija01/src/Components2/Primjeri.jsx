import React from 'react';

// iskoristiti ovu komponentu za vjezbanje statea
export function VjezbaProps(props) {
    return (
        <>
            <h1>Welcome {props.message}</h1>
        </>
    );
}

export class VjezbaState extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message: "visitor"
    }
  }
  render() {
    return(
    <>
    <h1>Welcome {this.state.message}</h1>
    </>
  )}
}
