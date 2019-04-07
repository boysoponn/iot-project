import React, { Component } from 'react';
import { BrowserRouter as  Router, Route} from 'react-router-dom';
import Homepage from './components/Homepage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.interval = setInterval(this.getData, 1000);
  }
  getData=()=> {
    fetch('https://api.thingspeak.com/channels/747224/fields/1/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data1:data }));
    fetch('https://api.thingspeak.com/channels/747224/fields/2/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data2:data }));
    fetch('https://api.thingspeak.com/channels/747224/fields/3/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data3:data }));
    fetch('https://api.thingspeak.com/channels/747224/fields/4/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data4:data }));
    fetch('https://api.thingspeak.com/channels/747224/fields/5/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data5:data }));
    fetch('https://api.thingspeak.com/channels/747224/fields/6/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data6:data }));
    fetch('https://api.thingspeak.com/channels/747224/fields/7/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data7:data }));
    fetch('https://api.thingspeak.com/channels/747224/fields/8/last.txt')
    .then(response => response.json())
    .then(data => this.setState({ data8:data }));
  }

  render() {
    return(
      <Router> 
        <div> 
          <Route exact path="/" render={() => <Homepage {...this.state}/>} />           
        </div>
      </Router>
    );
  }
}

export default App;
