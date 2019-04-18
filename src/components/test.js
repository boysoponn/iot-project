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

class Homepage extends Component {
  state = {
  };

  componentDidMount(){
    // setInterval(this.changeImage,2000)
  }


  render() {
    return (
      <Div>
        <Logo src={Sit}/>
      <Container>
        <All>
        <Grid container spacing={24}>
          <Grid item  xs={12} md={4}>
            <Div1  color="#f8f663">
              <Grid style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={6} >
                  <P1 weight size="45px">95</P1>
                  <P1>US AQI</P1>
                </Grid>
                <Grid item xs={6} >
                  <P1 top="10px">Moderate</P1>
                </Grid>  
              </Grid>   
              <Grid item xs={12} >     
                <Img width="40%" src={Good} />
              </Grid>
            </Div1>
            <Div1 className="center" color="#f0794e">
            <Grid alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={5} >
                  <Img width="150%" src={Cold} />
                </Grid>
                <Grid item xs={7}>
                  <P1>Sensation scale</P1>
                  <P1 top="10px" size="40px" weight>Cool</P1>
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
                  <P1 top="10px" size="35px" weight >0.0007%</P1>
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
                  <P1 top="10px" size="35px" weight>Must concerm</P1>
                </Grid>  
              </Grid> 
            </Div2>
            <Div2 className="center" color="#ffc52b">
              <Grid  alignItems="center" style={{margin:0,width:'auto'}} container spacing={24}>
                <Grid item xs={12} md={5}>
                  <Img width="50%" src={Sun1} />
                </Grid>
                <Grid item xs={12} md={7}>
                  <P1 size="30px" weight>Danger</P1>
                  <P1 top="10px" size="18px">Sunstroke, muscle cramps and/or heat exhaustion likely</P1>
                  <P1 size="35px" top="10px" weight>115 F</P1>
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