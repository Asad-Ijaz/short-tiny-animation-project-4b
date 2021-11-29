import   React,{ useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Container,Grid,Paper} from '@mui/material';
import Box from '@mui/material/Box';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../assets/dishesphotos";
import { diningphotos } from "../assets/diningphotos";
import { residentphotos } from "../assets/resident";
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import ScrollAnimation from 'react-animate-on-scroll';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow:'none',
  backgroundColor:'transparent',
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
 
export default function Galler() {
  const [value, setValue] = React.useState(0);
  const [currentImage, setCurrentImage] = useState(0);
const [viewerIsOpen, setViewerIsOpen] = useState(false);

const openLightbox = useCallback((event, { photo, index }) => {
  setCurrentImage(index);
  setViewerIsOpen(true);
}, []);

const closeLightbox = () => {
  setCurrentImage(0);
  setViewerIsOpen(false);
};
const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="gallery">
    <Container maxWidth="lg">
      <Grid container spacing={2}>
  <Grid item lg={12}>
  <ScrollAnimation animateIn="animate__rotateInUpRight">
  <Item className="serviceHeading">Our <span>Gallery</span> </Item>
  </ScrollAnimation>
  </Grid>
  </Grid><br></br>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dishes" {...a11yProps(0)} />
          <Tab label="Dinning" {...a11yProps(1)} />
          <Tab label="Accomodation" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <ScrollAnimation animateIn="animate__zoomInRight">
      <Gallery photos={photos} onClick={openLightbox} />
      </ScrollAnimation>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <ScrollAnimation animateIn="animate__zoomInRight">
      <Gallery photos={diningphotos} onClick={openLightbox} />
      </ScrollAnimation>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={diningphotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <ScrollAnimation animateIn="animate__zoomInRight">
      <Gallery photos={residentphotos} onClick={openLightbox} />
      </ScrollAnimation>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={residentphotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      </TabPanel>
    </Box>
    </Container>
    </div>
  );
}