import { Component } from 'react'

export default class Klasna extends Component {
  render() {
    return (<h1>Ja sam {this.props.name} i imam {this.props.god} godina</h1>)
  }
}