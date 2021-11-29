import React from 'react';
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import Carousel from 'react-material-ui-carousel'
import { Container,Grid,Paper, Button,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Animated} from "react-animated-css";
import 'animate.css'
import PrimarySearchAppBar from './navbar'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'none',
    backgroundColor:'transparent',
    color: theme.palette.text.secondary,
  }));
function HeroCarousel(){
    let items = [
        {   src: slider1,
            name: "Welcome to",
            h1: 'Grand Restaurant',
            description: "Making the Delicious Food Since 1990"
        },
        {   
          src: slider2,
          name: "Welcome to",
          h1: 'Grand Restaurant',
          description: "Making the Delicious Food Since 1990"
        },
        {   src: slider3,
            name: "Welcome to",
            h1: 'Grand Restaurant',
            description: "Making the Delicious Food Since 1990"
      },
      {   src: slider4,
        name: "Welcome to",
            h1: 'Grand Restaurant',
            description: "Making the Delicious Food Since 1990"
    },
    ]
    return(
        
            
             <Grid item lg={12} className="carousel" >
                  
             <Item>
             
        <Carousel >
      
                {
                    items.map( (item, i) => <div key={i} item={item} > 
                      <div className="img" style={{backgroundImage:`url(${item.src})` }}>
                      <Animated
     animationIn="bounceInRight" animationOut="fadeOut" isVisible={true}
     >
                    <Typography className="sliderHeading" variant="h5">{item.name}</Typography>
                    <Typography variant="h1" className="sliderHeading" id="slidercenterhead">{item.h1}</Typography>
                    <Typography variant="h6" className="sliderHeading">{item.description}</Typography>
                    </Animated>
                      </div>
                     
                    </div> )
                }
                 
            </Carousel>
            </Item>
            
            </Grid>
           
            
    )
}
export default HeroCarousel;