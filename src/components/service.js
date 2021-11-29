import React from 'react';
import about1 from '../assets/about2.jpg';
import about2 from '../assets/about1.jpg';
import catering from '../assets/catering.jpg';
import slider4 from '../assets/slider4.jpg';
import outdoor from '../assets/outdoor.jpg';
import { Container,Grid,Paper,Card ,CardContent,CardMedia, Button,Typography,CardActions } from '@mui/material';
import { CardActionArea } from '@mui/material';
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
  function Service(){
    return(
        <div className="service">
             <Container maxWidth="lg">
                 <Grid container spacing={2}>
  <Grid item lg={12} md={12} sm={12} xs={12}>
  <ScrollAnimation animateIn="animate__rotateInUpRight">
  <Item className="serviceHeading">Our <span>Services</span> </Item>
  </ScrollAnimation>
  </Grid>
  </Grid><br></br>
<Grid container spacing={2}>
  <Grid item lg={3} md={6} sm={12} xs={12}>
  <ScrollAnimation animateIn="animate__rotateIn">
  <Item className="serviceImg"> <Card    >
      <CardActionArea  >
        <CardMedia
          component="img"
          className="serviceImg"
          height="140"
          image={slider4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Food DELIVERY
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s.
         
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card></Item>
    </ScrollAnimation>
  </Grid>
  <Grid item lg={3}  md={6} sm={12} xs={12}>
  <ScrollAnimation animateIn="animate__rotateIn">
  <Item><Card  >
      <CardActionArea>
        <CardMedia
          component="img"
          className="serviceImg"
          height="140"
          image={catering}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Custom CATERING
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s.
          
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card></Item>
    </ScrollAnimation>
  </Grid>
  <Grid item lg={3}  md={6} sm={12} xs={12}>
  <ScrollAnimation animateIn="animate__rotateIn">
  <Item>
      <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          className="serviceImg"
          height="140"
          image={about2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Resident
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s.
         
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card></Item>
    </ScrollAnimation>
  </Grid>
  <Grid item lg={3}  md={6} sm={12} xs={12}>
  <ScrollAnimation animateIn="animate__rotateIn">
  <Item>
      <Card  >
      <CardActionArea>
        <CardMedia
          className="serviceImg"
          component="img"
          height="140"
          image={outdoor}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Outdoor Dinning
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s.
         
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </CardActionArea>
    </Card></Item>
    </ScrollAnimation>
  </Grid>
  </Grid>
             </Container>
             <br></br><br></br>
             </div>
    )
}
export default Service;