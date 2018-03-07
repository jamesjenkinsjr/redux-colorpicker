import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { updateColor } from './color/actions'

class App extends Component {
  
  render() {
    return (
      <div>
       <h1>I DO see color</h1>
       <div className="color-grid" style={{backgroundColor: this.props.hex}}>You have found me - te heh heh</div>
       <input type="color" onChange={(e) => this.props.changeHex(e.target.value)}/>
      </div>
    );
  }
}

//dispatch
const mapStateToProps = (state) => {
  return {
    hex: state.hex
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeHex: (hex) => dispatch(updateColor(hex))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);

