import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Container,Grid,Paper, Button,Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow:'none',
  color: theme.palette.text.secondary,
}));
export default function  Contact() {
  return (
    <Container maxWidth="lg">
<Grid container spacing={2}>
<Grid item lg={6} md={6} sm={12}> 
  <Item >
    <Typography variant="h4"className="contactHeading" >Contact us </Typography>
    <div className="contact">
    <div className="address">
    <LocationOnIcon/>: 
    <Typography>732/21 Second Street, Manchester,<br></br> King Street, Kingston United Kingdom</Typography>
    </div>
    <div className="address">
    <PhoneIcon/>:  
    <Typography>000-000-000</Typography>
    </div>
    <div className="address">
   <EmailIcon/>:  
    <Typography>000-000-000info@gmail.com</Typography>
    </div>
    </div>
    </Item>
    </Grid>
  <Grid item lg={6} md={6} sm={12}> 
  <Item>
    <Box
    className="sendMessage"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4"   className="contactHeading">Send us a Message</Typography>
      <TextField id="standard-basic" label="Name" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Phone No" variant="standard" />
      <TextField id="standard-basic" label="Message" variant="standard" /><br></br>
      <Button variant="contained"  color="success">Send Message</Button>
    </Box>
    </Item>
    </Grid>
    </Grid>
    </Container>
  );
}