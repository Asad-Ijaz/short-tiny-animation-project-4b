import React from 'react';
import about2 from '../assets/about2.jpg'
import { Container,Grid,Paper, Button,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'none',
    color: theme.palette.text.secondary,
  }));
function About(){
    return(
             <Container maxWidth="lg">
<Grid container spacing={2}>
  <Grid item lg={6}  md={6} sm={12} xs={12}>
  <ScrollAnimation animateIn="bounceInRight">
    <Item className="about">
    <ScrollAnimation animateIn="animate__rotateInUpRight">
      <Typography className="aboutHeading">About To <span>SilverSpoon</span></Typography></ScrollAnimation><br></br>
    <Typography >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
         the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
         and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
         into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages,
         and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumpog.<br></br></Typography>
         <br></br><Button variant="contained"  color="success">Our Services</Button><br></br><br></br>
    </Item>
    </ScrollAnimation>
  </Grid>
  <Grid item lg={6} md={6} sm={12} xs={12}>
  <ScrollAnimation animateIn="bounceInLeft">
    <Item><img className="aboutimg" src={about2} alt=""/></Item>
    </ScrollAnimation>
  </Grid>
  </Grid>
             </Container>
    )
}
export default About;