import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container,Grid,Paper, Button,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {Animated} from "react-animated-css";
import 'animate.css'
import ScrollAnimation from 'react-animate-on-scroll';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'none',
    backgroundColor:'transparent',
    color: theme.palette.text.secondary,
  }));
function Testemonial(){
    let items = [
        {    
            name: "Welcome to",
            h1: 'SilverSpoon',
            description: " Making the Delicious Food Since 1990Making the Delicious Food Since 1990Making the Delicious Food Since 1990Making the Delicious Food Since 1990Making the Delicious Food Since 1990Making the Delicious Food Since 1990Making the Delicious Food Since 1990"
        },
        {   
          
          name: "Welcome to",
          h1: 'SilverSpoon',
          description: "Making the Delicious Food Since 1990 Making the Delicious Food Since 1990Making the Delicious Food Since 1990Making the Delicious Food Since 1990Making the Delicious Food Since 1990"
        },
        {    
            name: "Welcome to",
            h1: 'SilverSpoon',
            description: "Making the Delicious Food Since 1990 Making the Delicious Food Since 1990 Making the Delicious Food Since 1990 Making the Delicious Food Since 1990Making the Delicious Food Since 1990"
      },
      {    
        name: "Welcome to",
            h1: 'SilverSpoon',
            description: " Making the Delicious Food Since 1990 Making the Delicious Food Since 1990 Making the Delicious Food Since 1990"
    },
    ]
    return(
        
        <ScrollAnimation animateIn="animate__rollIn">
             <div className="testimonial">
                  <Grid container spacing={2}>
  <Grid item lg={12}>
  <ScrollAnimation animateIn="animate__rotateInUpRight">
  <Item className="serviceHeading">Our <span>Testemonial</span> </Item>
  </ScrollAnimation>
  </Grid>
  </Grid> 
        <Container maxWidth="lg"> 
        <Carousel >
       
                {
                    items.map( (item, i) => <div key={i} item={item} > 
                      <div    >
                          <Typography className="description">{item.description}</Typography>
                      
      
                    
                    
                      </div>
                     
                    </div> )
                }
                
            </Carousel>
            </Container>
            </div>
            </ScrollAnimation>
    )
}
export default Testemonial;