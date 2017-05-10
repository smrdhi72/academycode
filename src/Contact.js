import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import img from '../images/banner1.jpg';
import '../css/style.css';
 export default class App extends React.Component {
    
render()
 {
      return (
        <div id="RB">
        <div id="pp">
        <h1 style={{color:'#ffffff'}}>You have got questions.We have got answers</h1>
        </div>
        <RaisedButton secondary={true} label="Contact us" style={{marginTop:"240px",marginLeft:"680px",
        marginBottom:'30px'}}/>
        </div>
    );
  }
}