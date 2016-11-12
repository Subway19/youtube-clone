import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Sumant Bagade', email:'sumantbagade19@gmail.com' };
  }

  render() {
    return (
      <div>
         <h4>Application developed and maintained by {this.state.name} </h4>
        <h5>Find me here:</h5> <p><i>{this.state.email}</i> </p>
        <a href="https://www.linkedin.com/in/sumantbagade" target="_blank"> <RaisedButton label="Linkedin" secondary={true}/>   </a>
        <a href="https://www.hackerearth.com/@sumant2" target="_blank"><RaisedButton label="Hackerearth" secondary={true} />  </a>
        <a href="https://www.facebook.com/sumantbagade19" target="_blank"><RaisedButton label="Facebook" secondary={true} />  </a>
        <a href="https://twitter.com/SumantBagade" target="_blank"><RaisedButton label="Twitter" secondary={true} />  </a>
        <a href="https://github.com/Subway19" target="_blank"><RaisedButton label="Github" secondary={true} />  </a>
       
        
      </div>
    );
  }

 
}

export default Contact;
