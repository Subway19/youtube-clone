import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
         <h4>Application developed and maintained by Sumant Bagade. </h4>
        <h5>Find me here:</h5> <i>sumantbagade19@gmail.com</i> <br/>
        <a href="https://www.hackerearth.com/@sumant2" target="_blank">  Hackerearth  </a>
        <a href="https://www.hackerearth.com/@sumant2" target="_blank">  Linkedin  </a>
        <a href="https://www.hackerearth.com/@sumant2" target="_blank">  Facebook  </a>
        <a href="https://www.hackerearth.com/@sumant2" target="_blank">  Twitter  </a>
        <a href="https://www.hackerearth.com/@sumant2" target="_blank">  Github  </a>
         
        
      </div>
    );
  }

 
}

export default Contact;
