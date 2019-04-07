import React, { Component } from 'react';

class Homepage extends Component {
  state = {
  };

  render() {
    return (
      <div>
         <p>{this.props.data1}</p>
         <p>{this.props.data2}</p>
         <p>{this.props.data3}</p>
         <p>{this.props.data4}</p>
         <p>{this.props.data5}</p>
         <p>{this.props.data6}</p>
         <p>{this.props.data7}</p>
         <p>{this.props.data8}</p>
      </div>
    );
   }
  }

  export default Homepage;

