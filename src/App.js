import React, { Component } from 'react';
import { hideMessage, decodeMessage } from './secret'

export class App extends Component {
  constructor(props) {
    super(props);
  }

  handleFile(e, message) {
    console.log("message = " + message);
    /*var reader = new FileReader();
    var file = e.target.files[0]
    reader.onload = function(e) {
      document.getElementById("textArea").value = e.target.result;
      var newFile = hideMessage(message, e.target.result);
      document.getElementById("textArea2").value = newFile;
    };
    reader.readAsText(file);
    */


  }

  encode(e) {
    var msg = document.getElementById("textArea").value;
    //var result = decodeMessage(file);
    var result = hideMessage(msg);

    console.log(result);
    document.getElementById("textArea2").value = result;
  }

  decode(e) {

    var file = document.getElementById("textArea2").value;
    var result = decodeMessage(file);
    console.log(result)
    document.getElementById("msg").innerHTML = "your message is = " + result
    //eval(result);
  }

  render() {
    return (
      <div>

        <div style={{float: "left"}}>
          <div>Encode your message in tacos:</div>


          <textarea rows="30" cols="90" id="textArea"  />
          <br />
          <button onClick={this.encode}>Get Taco Encoded Message</button>
        </div>
        <div style={{float: "left"}}>
          <div>secret message made of tacos:</div>
          <textarea rows="30" cols="90" id="textArea2"  />
          <br />

          <button onClick={this.decode}>Decode Taco Message</button>
          <div id="msg"></div>
        </div>


        <div style={{clear:"both"}}></div>
        <br />


      </div>
    );
  }
}
