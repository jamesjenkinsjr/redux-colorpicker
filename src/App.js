import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

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

//actions
const updateColor = (hex) => ({
  type: COLORPICK,
  payload: {
    hex: hex
  }
});
//reducer
const initialState = {
  hex: "#000000"
};
export const colorChange = (state = initialState, action) => {
  switch (action.type) {
    case COLORPICK:
      return {
        ...state,
        hex: action.payload.hex
      }
      default:
      return { 
        ...state, 
        hex: state.hex
      }

  }
};

//types
const COLORPICK = 'COLORPICK';
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

