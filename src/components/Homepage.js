import React, { Component } from 'react';
import styled  from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Popup from './popup';
import Hover from './hover';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import Break from '../image/break.png'
import Exercise from '../image/exercise.png'
import Exercise1 from '../image/exercise.png'
import Limitexercise from '../image/limit exercise.png'
import remind from '../image/remind.png'
import PMV1 from '../image/PMV1.png'
import PMV2 from '../image/PMV2.png'
import Water from '../image/water.png'
import Window from '../image/window.png'
import CloseWindow from '../image/closewindow.png'
import Reschedule from '../image/reschedule.png'
import Sit from '../image/SIIT LOGO 2.png'
import Web1 from '../image/web1.png'
import Web2 from '../image/web2.png'
import Web3 from '../image/web3.png'
import Web4 from '../image/web4.png'
import Web5 from '../image/web5.png'

class Homepage extends Component {
  state = {
    loaded:false,
    open: false
  };


  componentWillReceiveProps(nextProps){
    if(nextProps.data){
      this.heat(nextProps);
    }
  }

  handleClickOpen = name => () => {
    this.setState({ open: true ,imagePopup:name});
  };

  handleClose = () => {
    this.setState({ open: false });
  };

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
      if(HI>=0&& HI<91){
        this.setState({imageHI:Sun1,HI:HI,titleHI:"Caution",descriptionHI:"Fatigue possible",BGHI:"#d8ff3e",recom2:Water});
      }else if(HI>=91 && HI<103){
        this.setState({imageHI:Sun3,HI:HI,titleHI:"Extreme Caution",descriptionHI:"Sunstroke, muscle cramps, and/or heat exhaustion",BGHI:"#ffd700",recom2:remind,recom3:Break});
      }else if(HI>=103&&HI<115){
        this.setState({imageHI:Sun2,HI:HI,titleHI:"Danger",descriptionHI:"Sunstroke, muscle cramps, and/or heat exhaustion",BGHI:"#ffa800",recom2:remind,recom3:Limitexercise});
      }else if(HI>=115){
        this.setState({imageHI:Sun4,HI:HI,titleHI:"Extreme Danger",descriptionHI:"Heat stroke or Sun stroke highly likely",BGHI:"#ff4500",recom2:remind,recom3:Reschedule });
      }
      this.AQI(nextProps);  
  }
//คนยิ้ม ค่า I
  AQI=(nextProps)=>{
    let I=0; 
    if(nextProps.data2>=0 && nextProps.data2<=12){
      I=((50/12)*nextProps.data2).toFixed(0);
      this.setState({imageAQI:Good,AQI:I,descriptionAQI:"Good",BGAQI:"#00d500",recom4:Window,recom5:Exercise});
    }else if(nextProps.data2>=12.1 && nextProps.data2<=35.4){
      I=((49/23.3)*(nextProps.data2-12.1)+51).toFixed(0);
      this.setState({imageAQI:Moderate,AQI:I,descriptionAQI:"Moderate",BGAQI:"#7cfc00",recom4:CloseWindow,recom5:Exercise1});
    }else if(nextProps.data2>=35.5 && nextProps.data2<=55.4){
      I=((49/19.9)*(nextProps.data2-35.5)+101).toFixed(0);
      this.setState({imageAQI:Sengroups,AQI:I,descriptionAQI:"Unhealthy for Sensitive Groups",BGAQI:"#ff8c00",recom4:CloseWindow,recom5:Exercise1});
    }else if(nextProps.data2>=55.5 && nextProps.data2<=150.4){
      I=((49/94.9)*(nextProps.data2-55.5)+151).toFixed(0);
      this.setState({imageAQI:Unhealthy,AQI:I,descriptionAQI:"Unhealthy",BGAQI:"#ff0000",recom4:CloseWindow,recom5:Exercise1});
    }else if(nextProps.data2>=150.5 && nextProps.data2<=250.4){
      I=((99/99.9)*(nextProps.data2-150.5)+201).toFixed(0);
      this.setState({imageAQI:Veryunhealthy,AQI:I,descriptionAQI:"Very Unhealthy",BGAQI:"#800080",recom4:CloseWindow,recom5:Exercise1});
    }else if(nextProps.data2>=250.5 && nextProps.data2<=350.4){
      I=((99/99.9)*(nextProps.data2-250.5)+301).toFixed(0);
      this.setState({imageAQI:Hazardous,AQI:I,descriptionAQI:"Hazardous",BGAQI:"#800000",recom4:CloseWindow,recom5:Exercise1});
    }else if(nextProps.data2>=350.5){
      I=((99/149.9)*(nextProps.data2-350.5)+401).toFixed(0);
      this.setState({imageAQI:Hazardous,AQI:I,descriptionAQI:"Hazardous",BGAQI:"#800000",recom4:CloseWindow,recom5:Exercise1});
    }
  this.PMV(nextProps); 
   }

  PMV=(nextProps)=>{
    let Pa = ((nextProps.data5/100)*0.1333)*(Math.exp(18.6686-4030.183/(nextProps.data4+235)));
    let Va = 0.9
    let Icl = 0.4;
    let Rcl = Icl*0.155;
    let fcl = 1.08;
    let M= 115;
    let Tclr = nextProps.data4;
    let Tcll = 0;
    let i=1;
    let hc;
    while(i<50){
      if( 2.38*Math.pow(Tclr-nextProps.data4,0.25)  > 12.1*Math.sqrt(Va)){
       hc=2.38*Math.pow((Tclr-nextProps.data4),0.25)
      }else{
        hc = 12.1*Math.sqrt(Va)
      }      

      Tcll= 35.7-(0.028*M)-Rcl*(((39.6*Math.pow(10,-9))*fcl*((Math.pow((Tclr+273),4))- (Math.pow((nextProps.data4+273),4)) )+ (fcl*hc*(Tclr-nextProps.data4))));
      if(Tclr.toFixed(3)==Tcll.toFixed(3)){
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
      this.setState({imagePMV:Cold,descriptionPMV:"Cold",BGPMV:"#0000cd",recom1:PMV2});
    }else if(P1MV<=-2 && P1MV>-3){
      this.setState({imagePMV:Cool,descriptionPMV:"Cool",BGPMV:"#6495ed",recom1:PMV2});
    }else if(P1MV<=-1 && P1MV>2){
      this.setState({imagePMV:Slightlycool,descriptionPMV:"Slightly Cool",BGPMV:"#00ffff",recom1:PMV2});
    }else if(P1MV<1 && P1MV>-1){
      this.setState({imagePMV:Neutral,descriptionPMV:"Neutral",BGPMV:"#e0e0f6",recom1:PMV1});
    }else if(P1MV>=1 && P1MV<2){
      this.setState({imagePMV:Slightlywarm,descriptionPMV:"Slightly Warm",BGPMV:"#fa8072",recom1:PMV1});
    }else if(P1MV>=2 && P1MV<3){
      this.setState({imagePMV:Warm,descriptionPMV:"Warm",BGPMV:"#a0522d",recom1:PMV1});
    }else if(P1MV>=3){
      this.setState({imagePMV:Hot,descriptionPMV:"Hot",BGPMV:"#ff0000",recom1:PMV1});
    }

    this.Carci(nextProps); 
  }

  Carci=(nextProps)=> {
    let ADI = ((nextProps.data2*65.01888)/1226400).toFixed(6);
    let RfD = 0.001429
    let ADI2 = (ADI*110).toFixed(4)
    let HQ = ADI/RfD
    if(HQ>1) {
      this.setState({Carci:ADI2,descriptionCarci:"Must concern"});
    }else{
      this.setState({Carci:ADI2,descriptionCarci:"Must not concern"});
    }
    console.log(ADI)
    this.setState({
      loaded:true
    })
 }
  render() {
    return (
      <Div>
        <Popup open={this.state.open} image={this.state.imagePopup} handleClose={this.handleClose}/>
        <Logo src={Sit}/>
        <P1 size="18px" bottom="2vh">Location: Sirindhorn International Institute of Technology, Thammasat University</P1>
      <Container>
        <All>        
        {!this.state.loaded?
        <CircularProgress disableShrink />
        :
        <Grid container spacing={24}>
          <Grid item  xs={12} md={4}>
            <Div1  color={this.state.BGAQI} onClick={this.handleClickOpen(Web1)}>
              <Grid style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={6} >
                  <P1 weight size="45px">{this.state.AQI}</P1>
                  <P1 size="15px">US AQI</P1>
                </Grid>
                <Grid item xs={6} >
                  <P1 top="10px">{this.state.descriptionAQI}</P1>
                </Grid>  
              </Grid>   
              <Grid item xs={12} >     
                <Img width={40} src={this.state.imageAQI} />
              </Grid>
            </Div1>
            <Div1 className="center" color={this.state.BGPMV} onClick={this.handleClickOpen(Web5)}>
            <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={5} >
                  <Img width={150} src={this.state.imagePMV}/>
                </Grid>
                <Grid item xs={7}>
                  <P1>Sensation scale</P1>
                  <P1 top="10px" size="40px" weight>{this.state.descriptionPMV}</P1>
                </Grid>  
              </Grid> 
            </Div1>
          </Grid>

          <Grid item  xs={12} md={5}>
            <Div2 className="center" color="#67e486" onClick={this.handleClickOpen(Web3)}>
              <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={5} >
                  <Img  width={50} src={Carcinogen} />
                </Grid>
                <Grid item xs={7} >
                  <P1>Carcinogen Risk</P1>
                  <P1 top="10px" size="35px" weight >{this.state.Carci+' %'}</P1>
                </Grid>  
              </Grid>  
            </Div2>
            <Div2 className="center" color="#dfa74a" onClick={this.handleClickOpen(Web4)}>
              <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={5} >
                  <Img width={50} src={Noncarcinogen} />
                </Grid>
                <Grid item xs={7} >
                  <P1>Non-Carcinogen Risk</P1>
                  <P1 top="10px" size="35px" weight>{this.state.descriptionCarci}</P1>
                </Grid>  
              </Grid> 
            </Div2>
            <Div2 className="center" color={this.state.BGHI} onClick={this.handleClickOpen(Web2)}>
              <Grid  alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={12} md={5}>
                  <Img width={50} src={this.state.imageHI} />
                </Grid>
                <Grid item xs={12} md={7}>
                  <P1 size="25px" weight>{this.state.titleHI}</P1>
                  <P1 top="5px" size="18px">{this.state.descriptionHI}</P1>
                  <P1 size="35px" top="5px" weight>{this.state.HI+' °F '}</P1>
                  <P1 size="15px" weight >{' ( Feels like '+(5/9*(this.state.HI-32)).toFixed(0)+' °C )'}</P1>
                </Grid> 
              </Grid> 
            </Div2>
          </Grid> 

          <Grid item  xs={12} md={3}>
          <Div2 className="center" color="#00a04f">
              <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={6} >
                  <P1 size="22">Temperature </P1>
                  <P1 size="22"top="10px">Humidity</P1>
                  <P1 size="22"top="10px">Pressure</P1>
                </Grid>
                <Grid item xs={6} >
                  <P1 size="22">{this.props.data4+' °C'}</P1>
                  <P1 size="22" top="10px">{this.props.data5+' %'}</P1>
                  <P1 size="22" top="10px">{this.props.data6+' hPa'}</P1>
                </Grid>
              </Grid> 
            </Div2>
            <Div3 color="#4240fb">
            <Hover/>
              <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={12}>
                  <P1>Recommendation</P1>
                </Grid>
                <Hover image={this.state.recom1} text={this.state.recom1===PMV1?"Casual wear is recommended":"Winter clothing is recommended"}/> 
                <Hover image={this.state.recom2} text={this.state.recom2===Water?"Provide drinking water":"Remind workers to drink water often"}/> 
                {this.state.recom3?
                <Hover image={this.state.recom3} 
                text={this.state.recom3===Break?"Take a break":this.state.recom3===Limitexercise?"Limit physical exertion":"Reschedule non-essential activity"}/> 
                :null}
                <Hover image={this.state.recom4} text={this.state.recom4===Window?"Open window and get some fresh air":"Close window and get some fresh air"}/> 
                <Hover image={this.state.recom5} text={this.state.recom5===Exercise?"Let’s do outdoor exercise":"Sensitive groups shouldn’t spend  long time outdoor exertion"}/> 
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
  transition: all 0.2s ease;
  .center&{
    justify-content:center;
    display:flex;
    align-items:center;
  }
  :hover{
    cursor:pointer
    filter: brightness(1.1);
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
  transition: all 0.2s ease;
  .center&{
    justify-content:center;
    display:flex;
    align-items:center;
  }
  :hover{
    cursor:pointer
    filter: brightness(1.1);
  }
  @media screen and (max-width: 1280px) {
    height:auto;
  }
  `;

  const Div3 = styled.div`
  background-color:${props => props.color };
  height:51vh;
  border-radius: 20px
  transition: all 0.2s ease;
  .center&{
    justify-content:center;
    display:flex;
    align-items:center;
  }
  :hover{
    cursor:pointer
    filter: brightness(1.1);
  }
  @media screen and (max-width: 1280px) {
    height:auto;
  }
  `;

  const Logo = styled.img`
  height:7vh;
  margin: 1vh;
  :hover{
    filter: brightness(1.1);
  }
  `;

  const Img = styled.img`
  width:${props => props.width+'%'};
  margin-left:${props => props.left?props.left:'0px' };
  transition: all 0.1s ease;
  :hover{
    width:${props => (props.width+props.width/10)+'%'}; 
  }
  `;

  const P1 = styled.p`
  color:white;
  margin: 0;
  margin-bottom:${props => props.bottom? props.bottom:'0px' };
  margin-top:${props => props.top? props.top:'0px' };
  font-size:${props => props.size? props.size:'22px' };
  font-weight:${props => props.weight? '800':'auto' };
  `;