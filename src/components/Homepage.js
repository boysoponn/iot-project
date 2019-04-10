import React, { Component } from 'react';
import good1 from '../image/good1.png'
import good2 from '../image/good2.png'
import Sun1 from '../image/Sun1.png'
import Sun2 from '../image/Sun2.png'
import Sun3 from '../image/Sun3.png'
import Sun4 from '../image/Sun4.png'
import Popup from './popup'

class Homepage extends Component {
  state = {
    heat:Sun1
  };

  componentDidMount(){
    this.heat();
  }

  heat=()=>{
    let Ta =30;
    let RH =86;
    let TaF=((9/5)*Ta)+32;
    let HI1=0.5*(TaF+61+((TaF-68)*1.2)+(RH*0.094));
    let HI2=-42.379+(2.04901523*TaF)+(10.14333127*RH)-(0.22475541*TaF*RH)-(0.00683783*((TaF)^2))-(0.05481717*(RH)^2)+(0.00122874*(TaF)^2)*(RH+0.00085282*TaF*(RH^2))-0.00000199*TaF*TaF*RH*RH;
    let HI = 0;
    let AD1 = 0;
    let AD2 = 0;
    if(RH<13&&80<TaF<112){
      AD1= ((13-RH)/4)*((17-Math.abs(TaF-95))/17)^(1/2)
    }else{
      AD1=0 
    }
    if(RH>85&&80<TaF<87){
      AD2= ((RH-85)/10)*((87-TaF)/5)
      }else{
        AD2=0
      }
    
    if(HI1>=80){
      HI = HI2-AD1+AD2
    }else{
      HI = HI1-AD1+AD2
    }
      if(HI>=91 && HI<103){
        this.setState({heat:Sun2})
      }else if(HI>=103&&HI<115){
        this.setState({heat:Sun3})
      }else if(HI>115){
        this.setState({heat:Sun4})
      }
  }

  render() {
    const {heat}=this.state;
    return (
      <div>
  
         <img style={{width:200}} src={heat}/>

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

