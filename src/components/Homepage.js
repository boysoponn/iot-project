import React, { Component } from 'react';
import styled , {keyframes} from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Sun1 from '../image/Sun1.png'
import Sun2 from '../image/Sun2.png'
import Sun3 from '../image/Sun3.png'
import Sun4 from '../image/Sun4.png'
import Good from '../image/good.png'
import Moderate from '../image/moderate.png'
import Sengroups from '../image/sengroups.png'
import Unhealthy from '../image/unhealthy.png'
import Veryunhealthy from '../image/veryunhealthy.png'
import Hazardous from '../image/hazardous.png'
import Carcinogen from '../image/carcinogen.png'
import Noncarcinogen from '../image/noncarcinogen.png'
import Neutral from '../image/neutral.png'
import Slightlywarm from '../image/slightlywarm.png'
import Slightlycool from '../image/slightlycool.png'
import Warm from '../image/warm.png'
import Hot from '../image/hot.png'
import Cold from '../image/cold.png'
import Cool from '../image/cool.png'
import Health2 from '../image/health2.png'
import Health1 from '../image/health1.png'
import Health3 from '../image/health3.png'
import Health4 from '../image/health4.png'
import Sit from '../image/SIIT LOGO 2.png'
import CircularProgress from '@material-ui/core/CircularProgress';

class Homepage extends Component {
  state = {
    imageHI:Sun1,
    HI:0,
    titleHI:"Caution",
    descriptionHI:"Fatigue possible",
    BGHI:"#d8ff3e",
    loaded:false
  };


  componentWillReceiveProps(nextProps){
    if(nextProps.data){
      this.heat(nextProps);
      this.setState({
        loaded:true
      })
    }
  }
//ค่า HI
  heat=(nextProps)=>{
    let TaF=((9/5)*nextProps.data4)+32;
    let HI1=0.5*(TaF+61+((TaF-68)*1.2)+(nextProps.data5*0.094));
    let HI2=-42.379 + 2.04901523*TaF + 10.14333127*nextProps.data5 - 0.22475541*TaF*nextProps.data5 - 0.00683783*TaF*TaF - 0.05481717*nextProps.data5*nextProps.data5 + 0.00122874*TaF*TaF*nextProps.data5 + 0.00085282*TaF*nextProps.data5*nextProps.data5 - 0.00000199*TaF*TaF*nextProps.data5*nextProps.data5;
    let HI = 0;
    let AD1 = 0;
    let AD2 = 0;
    if(nextProps.data5<13&&80<TaF<112){
      AD1= ((13-nextProps.data5)/4)*Math.pow(((17-Math.abs(TaF-95))/17),(1/2))
    }else{
      AD1=0 
    }
    if(nextProps.data5>85&&80<TaF<87){
      AD2= ((nextProps.data5-85)/10)*((87-TaF)/5)
      }else{
        AD2=0
      }
    
    if(HI1>=80){
      HI = (HI2-AD1+AD2).toFixed(0);
    }else{
      HI = (HI1-AD1+AD2).toFixed(0);
    }
      if(HI>=91 && HI<103){
        this.setState({imageHI:Sun3,HI:HI,titleHI:"Extreme Caution",descriptionHI:"Sunstroke, muscle cramps, and/or heat exhaustion",BGHI:"#ffd700",});
      }else if(HI>=103&&HI<115){
        this.setState({imageHI:Sun2,HI:HI,titleHI:"Danger",descriptionHI:"Sunstroke, muscle cramps, and/or heat exhaustion",BGHI:"#ffa800",});
      }else if(HI>=115){
        this.setState({imageHI:Sun4,HI:HI,titleHI:"Extreme Danger",descriptionHI:"Heat stroke or Sun stroke highly likely",BGHI:"#ff4500",});
      }
      this.AQI(nextProps);  
  }

//คนยิ้ม ค่า I
  AQI=(nextProps)=>{
    let I=0; 
    if(nextProps.data2>=0 && nextProps.data2<=12){
      I=((50/12)*nextProps.data2).toFixed(0);
      this.setState({imageAQI:Good,AQI:I,descriptionAQI:"Good",BGAQI:"#00d500"});
    }else if(nextProps.data2>=12.1 && nextProps.data2<=35.4){
      I=((49/23.3)*(nextProps.data2-12.1)+51).toFixed(0);
      this.setState({imageAQI:Moderate,AQI:I,descriptionAQI:"Moderate",BGAQI:"#7cfc00"});
    }else if(nextProps.data2>=35.5 && nextProps.data2<=55.4){
      I=((49/19.9)*(nextProps.data2-35.5)+101).toFixed(0);
      this.setState({imageAQI:Sengroups,AQI:I,descriptionAQI:"Unhealthy for Sensitive Groups",BGAQI:"#ff8c00"});
    }else if(nextProps.data2>=55.5 && nextProps.data2<=150.4){
      I=((49/94.9)*(nextProps.data2-55.5)+151).toFixed(0);
      this.setState({imageAQI:Unhealthy,AQI:I,descriptionAQI:"Unhealthy",BGAQI:"#ff0000"});
    }else if(nextProps.data2>=150.5 && nextProps.data2<=250.4){
      I=((99/99.9)*(nextProps.data2-150.5)+201).toFixed(0);
      this.setState({imageAQI:Veryunhealthy,AQI:I,descriptionAQI:"Very Unhealthy",BGAQI:"#800080"});
    }else if(nextProps.data2>=250.5 && nextProps.data2<=350.4){
      I=((99/99.9)*(nextProps.data2-250.5)+301).toFixed(0);
      this.setState({imageAQI:Hazardous,AQI:I,descriptionAQI:"Hazardous",BGAQI:"#800000"});
    }else if(nextProps.data2>=350.5){
      I=((99/149.9)*(nextProps.data2-350.5)+401).toFixed(0);
      this.setState({imageAQI:Hazardous,AQI:I,descriptionAQI:"Hazardous",BGAQI:"#800000"});
    }
  this.PMV(nextProps); 
   }

  PMV=(nextProps)=>{
    let Pa = ((nextProps.data5/100)*0.1333)*(Math.exp(18.6686-4030.183/(nextProps.data4+235)));
    let Va = 0.1
    let Icl = 0.5;
    let Rcl = Icl*0.155;
    let fcl = 1.1;
    let M= 93.12;
    let Tclr = nextProps.data4;
    let Tcll = 0;
    let i=1;
    let hc;
    while(i<100){
      if( 2.38*Math.pow(Tclr-nextProps.data4,0.25)  > 12.1*Math.sqrt(Va)){
       hc=2.38*Math.pow((Tclr-nextProps.data4),0.25)
      }else{
        hc = 12.1*Math.sqrt(Va)
      }
      Tcll= 35.7-(0.028*M)-Rcl*(((39.6*Math.pow(10,-9))*fcl*((Math.pow((Tclr+273),4))- (Math.pow((nextProps.data4+273),4)) )+ (fcl*hc*(Tclr-nextProps.data4))));
      if(Tclr.toFixed(3)===Tcll.toFixed(3)){
        break;
    }
      Tclr=Tcll;
      i++;
    }
    let P1 = 3.96*Math.pow(10,-8)*fcl*(Math.pow((Tcll+273),4) -Math.pow((nextProps.data4+273),4));
    let P2 = fcl*hc*(Tcll-nextProps.data4);
    let P3 = 3.05*(5.73-(0.007*M)-Pa);
    let P4 = 0.42*(M-58.15);
    let P5 = 0.0173*M*(5.87-Pa);
    let P6 = 0.0014*M*(34-nextProps.data4);
    let L= M-P1-P2-P3-P4-P5-P6;
    let P1MV = (0.303*Math.exp(-0.036*M)+0.028)*L;
    if(P1MV<= -3){
      this.setState({imagePMV:Cold,descriptionPMV:"Cold",BGPMV:"#0000cd"});
    }else if(P1MV<=-2 && P1MV>-3){
      this.setState({imagePMV:Cool,descriptionPMV:"Cool",BGPMV:"#6495ed"});
    }else if(P1MV<=-1 && P1MV>2){
      this.setState({imagePMV:Slightlycool,descriptionPMV:"Slightly Cool",BGPMV:"#00ffff"});
    }else if(P1MV<1 && P1MV>-1){
      this.setState({imagePMV:Neutral,descriptionPMV:"Neutral",BGPMV:"#e0e0f6"});
    }else if(P1MV>=1 && P1MV<2){
      this.setState({imagePMV:Slightlywarm,descriptionPMV:"Slightly Warm",BGPMV:"#fa8072"});
    }else if(P1MV>=2 && P1MV<3){
      this.setState({imagePMV:Warm,descriptionPMV:"Warm",BGPMV:"#a0522d"});
    }else if(P1MV>=3){
      this.setState({imagePMV:Hot,descriptionPMV:"Hot",BGPMV:"#ff0000"});
    }
    this.Carci(nextProps); 
  }

  Carci=(nextProps)=> {
    let ADI = (((nextProps.data2*0.001*0.83*8*204*48)/1226400)*100).toFixed(3);
    let RfD = 0.001429
    let HQ = ADI/RfD
    if(HQ>1) {
      this.setState({Carci:ADI,descriptionCarci:"Must concern"});
    }else{
      this.setState({Carci:ADI,descriptionCarci:"Must not concern"});
    }
 }
  render() {
    return (
      <Div>
        <Logo src={Sit}/>
      <Container>
        <All>        
        {!this.state.loaded?
        <CircularProgress disableShrink />
        :
        <Grid container spacing={24}>
          <Grid item  xs={12} md={4}>
            <Div1  color={this.state.BGAQI}>
              <Grid style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={6} >
                  <P1 weight size="45px">{this.state.AQI}</P1>
                  <P1>US AQI</P1>
                </Grid>
                <Grid item xs={6} >
                  <P1 top="10px">{this.state.descriptionAQI}</P1>
                </Grid>  
              </Grid>   
              <Grid item xs={12} >     
                <Img width="40%" src={this.state.imageAQI} />
              </Grid>
            </Div1>
            <Div1 className="center" color={this.state.BGPMV}>
            <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={5} >
                  <Img width="150%" src={this.state.imagePMV}/>
                </Grid>
                <Grid item xs={7}>
                  <P1>Sensation scale</P1>
                  <P1 top="10px" size="40px" weight>{this.state.descriptionPMV}</P1>
                </Grid>  
              </Grid> 
            </Div1>
          </Grid>

          <Grid item  xs={12} md={5}>
            <Div2 className="center" color="#67e486">
              <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={5} >
                  <Img  width="50%"  src={Carcinogen} />
                </Grid>
                <Grid item xs={7} >
                  <P1>Carcinogen Risk</P1>
                  <P1 top="10px" size="35px" weight >{this.state.Carci+' %'}</P1>
                </Grid>  
              </Grid>  
            </Div2>
            <Div2 className="center" color="#dfa74a">
              <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={5} >
                  <Img width="50%" src={Noncarcinogen} />
                </Grid>
                <Grid item xs={7} >
                  <P1>Non-Carcinogen Risk</P1>
                  <P1 top="10px" size="35px" weight>{this.state.descriptionCarci}</P1>
                </Grid>  
              </Grid> 
            </Div2>
            <Div2 className="center" color={this.state.BGHI}>
              <Grid  alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={12} md={5}>
                  <Img width="50%" src={this.state.imageHI} />
                </Grid>
                <Grid item xs={12} md={7}>
                  <P1 size="30px" weight>{this.state.titleHI}</P1>
                  <P1 top="10px" size="18px">{this.state.descriptionHI}</P1>
                  <P1 size="35px" top="10px" weight>{this.state.HI+' F'}</P1>
                </Grid> 
              </Grid> 
            </Div2>
          </Grid> 

          <Grid item  xs={12} md={3}>
            <Div3 className="center" color="#4240fb">
              <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
              <Grid item xs={12}>
                  <P1>Moderate</P1>
                </Grid> 
                <Grid item xs={12}>
                  <Img width="35%" left="10px" src={Health2} />
                  <Img width="35%" left="10px" src={Health2} />
                  <Img width="35%" left="10px" src={Health2} />
                  <Img width="35%" left="10px" src={Health2} />
                  <Img width="35%" left="10px" src={Health2} />
                  <Img width="35%" left="10px" src={Health2} />
                </Grid>
              </Grid>
            </Div3>
          </Grid>
        </Grid>
        }        
        </All>
      </Container>
      </Div>
    );
   }
  }

  export default Homepage;

  const Container = styled.div`
  justify-content:center;
  display:flex;
  align-items:center;
  `;
  const All = styled.div`
  width:80vw;
  `;
  const Div = styled.div`
  text-align:center;
  `;

  const Div1 = styled.div`
  background-color:${props => props.color };
  height:37.5vh;
  margin-bottom:3vh;
  border-radius: 20px
  .center&{
    justify-content:center;
    display:flex;
    align-items:center;
  }
  @media screen and (max-width: 1280px) {
    height:auto;
  }
  `;

  const Div2 = styled.div`
  background-color:${props => props.color };
  height:24vh;
  margin-bottom:3vh;
  border-radius: 20px
  .center&{
    justify-content:center;
    display:flex;
    align-items:center;
  }
  @media screen and (max-width: 1280px) {
    height:auto;
  }
  `;

  const Div3 = styled.div`
  background-color:${props => props.color };
  height:78vh;
  border-radius: 20px
  .center&{
    justify-content:center;
    display:flex;
    align-items:center;
  }
  @media screen and (max-width: 1280px) {
    height:auto;
  }
  `;

  const Logo = styled.img`
  height:7vh;
  margin: 3vh;
  `;

  const Img = styled.img`
  width:${props => props.width };
  margin-left:${props => props.left?props.left:'0px' };
  `;

  const P1 = styled.p`
  color:white;
  margin: 0;
  margin-top:${props => props.top? props.top:'0px' };
  font-size:${props => props.size? props.size:'22px' };
  font-weight:${props => props.weight? '800':'auto' };
  `;