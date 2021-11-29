import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid,Paper, Button,Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    boxShadow:'none',
    color: theme.palette.text.secondary,
  }));
function Footer(){
    return(
        <div>
  
<Grid container spacing={2}>
<Grid item lg={12} md={12} sm={12}> 
  <Item  className="footer">
      <Typography><CopyrightIcon/>Copyright Grand Restaurant Theme Demo - Theme by ThemeGoods</Typography>
  </Item>
  </Grid>
  </Grid>
   
        </div>
    )
}
export default  Footer;