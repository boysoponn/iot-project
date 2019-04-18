import React, { Component, PureComponent } from 'react';
import Sun1 from '../image/Sun1.png'
import Sun2 from '../image/Sun2.png'
import Sun3 from '../image/Sun3.png'
import Sun4 from '../image/Sun4.png'
import good from '../image/good.png'
import moderate from '../image/moderate.png'
import sengroups from '../image/sengroups.png'
import unhealthy from '../image/unhealthy.png'
import veryunhealthy from '../image/veryunhealthy.png'
import hazardous from '../image/hazardous.png'
import Popup from './popup'

class Homepage extends Component {
  state = {
    heat:Sun1,
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.data){
      this.heat();
    }
  }

  heat=()=>{
    let TaF=((9/5)*this.props.data4)+32;
    let HI1=0.5*(TaF+61+((TaF-68)*1.2)+(this.props.data5*0.094));
    let HI2=-42.379 + 2.04901523*TaF + 10.14333127*this.props.data5 - 0.22475541*TaF*this.props.data5 - 0.00683783*TaF*TaF - 0.05481717*this.props.data5*this.props.data5 + 0.00122874*TaF*TaF*this.props.data5 + 0.00085282*TaF*this.props.data5*this.props.data5 - 0.00000199*TaF*TaF*this.props.data5*this.props.data5;
    let HI = 0;
    let AD1 = 0;
    let AD2 = 0;
    if(this.props.data5<13&&80<TaF<112){
      AD1= ((13-this.props.data5)/4)*Math.pow(((17-Math.abs(TaF-95))/17),(1/2))
    }else{
      AD1=0 
    }
    if(this.props.data5>85&&80<TaF<87){
      AD2= ((this.props.data5-85)/10)*((87-TaF)/5)
      }else{
        AD2=0
      }
    
    if(HI1>=80){
      HI = HI2-AD1+AD2
    }else{
      HI = HI1-AD1+AD2
    }
      if(HI>=91 && HI<103){
        this.setState({heat:Sun3})
      }else if(HI>=103&&HI<115){
        this.setState({heat:Sun2})
      }else if(HI>115){
        this.setState({heat:Sun4})
      }
      this.AQI();  
  }

  AQI=()=>{
    let I=0; 
  //   if(this.props.data2>=0 && this.props.data2<=12){
  //     I=(50/12)*this.props.data2
  //     image = good
  //   }else if(this.props.data2>=12.1 && this.props.data2<=35.4){
  //     I=(49/23.3)*(this.props.data2-12.1)+51
  //     image= moderate
  //   }else if(this.props.data2>=35.5 && this.props.data2<=55.4){
  //     I=(49/19.9)*(this.props.data2-35.5)+101
  //     image=sengroups
  //   }else if(this.props.data2>=55.5 && this.props.data2<=150.4){
  //     I=(49/94.9)*(this.props.data2-55.5)+151
  //     image=unhealthy
  //   }else if(this.props.data2>=150.5 && this.props.data2<=250.4){
  //     I=(99/99.9)*(this.props.data2-150.5)+201
  //     image=veryunhealthy
  //   }else if(this.props.data2>=250.5 && this.props.data2<=350.4){
  //     I=(99/99.9)*(this.props.data2-250.5)+301
  //     image=harzadous
  //   }else if(this.props.data2>=350.5){
  //     I=(99/149.9)*(this.props.data2-350.5)+401
  //     image = harzadous
  //   }
  this.PMV(); 
   }

  PMV=()=>{
    let Pa = ((this.props.data5/100)*0.1333)*(Math.exp(18.6686-4030.183/(this.props.data4+235)));
    let Va = 0.1
    let Icl = 0.5;
    let Rcl = Icl*0.155;
    let fcl = 1.1;
    let M= 93.12;
    let Tclr = this.props.data4;
    let Tcll = 0;
    let i=1;
    let hc;
    while(i<100){
      if( 2.38*Math.pow(Tclr-this.props.data4,0.25)  > 12.1*Math.sqrt(Va)){
       hc=2.38*Math.pow((Tclr-this.props.data4),0.25)
      }else{
        hc = 12.1*Math.sqrt(Va)
      }
      Tcll= 35.7-(0.028*M)-Rcl*(((39.6*Math.pow(10,-9))*fcl*((Math.pow((Tclr+273),4))- (Math.pow((this.props.data4+273),4)) )+ (fcl*hc*(Tclr-this.props.data4))));
      if(Tclr.toFixed(3)===Tcll.toFixed(3)){
        break;
    }
      Tclr=Tcll;
      i++;
    }
    let P1 = 3.96*Math.pow(10,-8)*fcl*(Math.pow((Tcll+273),4) -Math.pow((this.props.data4+273),4))
    let P2 = fcl*hc*(Tcll-this.props.data4)
    let P3 = 3.05*(5.73-(0.007*M)-Pa)
    let P4 = 0.42*(M-58.15)
    let P5 = 0.0173*M*(5.87-Pa)
    let P6 = 0.0014*M*(34-this.props.data4)
    let L= M-P1-P2-P3-P4-P5-P6
    let P1MV = (0.303*Math.exp(-0.036*M)+0.028)*L
    if(P1MV<= -3){
      print("cold")
    }else if(P1MV<=-2 && P1MV>-3){
      print("cool")
    }else if(P1MV<=-1 && P1MV>2){
      print("slightly cool")
    }else if(P1MV<1 && P1MV>-1){
      print("neutral")
    }else if(P1MV>=1 && P1MV<2){
      print("slightly warm")
    }else if(P1MV>=2 && P1MV<3){
      print("warm")
    }else if(P1MV>=3){
      print("hot")
    }
    this.Carci(); 
  }


  Carci=()=> {
    let ADI = (this.props.data2*0.001*0.83*8*204*48)/1226400;
    let RfD = 0.001429
    let HQ = ADI/RfD
    if(HQ>1) {
      // print(HQ) 
      // print("Adverse health effects will occur")
    }else{
      // print(HQ)
      // print("adverse effects are not likely to occur")
    }
    // print(ADI*1.1)
 }

  render() {
    const {heat}=this.state;
    return (
      <div>
  
         <img style={{width:200}} src={heat}/>
         <p>data1:{this.props.data1}</p>
         <p>data2:{this.props.data2}</p>
         <p>data3:{this.props.data3}</p>
         <p>data4:{this.props.data4}</p>
         <p>data5:{this.props.data5}</p>
         <p>data6:{this.props.data6}</p>
         <p>data7:{this.props.data7}</p>
         <p>data8:{this.props.data8}</p>
      </div>
    );
   }
  }

  export default Homepage;

