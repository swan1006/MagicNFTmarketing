import React, { useState } from "react"
import Box from '@mui/material/Box';
import { Col, Row } from "reactstrap";
import { Button, Typography } from "@mui/material";
import { styled, alpha, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterListIcon from '@mui/icons-material/FilterList';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '30vw',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '30vw',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
    },
  },
}));


const Main = styled('main')(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Collection = () => {
  const theme = useTheme();
  const [expanded, setexpanded] = useState(true);

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerHeader className="drawerHeader">
        <Typography style={{ position: "absolute", left: "15px" }}><FilterListIcon />&nbsp;&nbsp;Filter</Typography>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box>
        <Accordion defaultExpanded='true'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon onClick={() => setexpanded(expanded ? false : true)} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Event Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="activity-filter">
              <li className="filter_by_sales"><i className="fa fa-shopping-basket"></i>Sales</li>
              <li className="filter_by_likes"><i className="fa fa-heart"></i>Likes</li>
              <li className="filter_by_offers"><i className="fa fa-gavel"></i>Offers</li>
              <li className="filter_by_followings"><i className="fa fa-check"></i>Followings</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Collections</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Search className='header-search'>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Collections ..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box>
              <Button><img className="lazy" src="assets/images/author/author-3.jpg" style={{ height: "25px", borderRadius: "12px" }} alt="" />&nbsp;&nbsp;&nbsp;My Collections</Button>
              <Button><img className="lazy" src="assets/images/author/author-4.jpg" style={{ height: "25px", borderRadius: "12px" }} alt="" />&nbsp;&nbsp;&nbsp;My Collections</Button>
              <Button><img className="lazy" src="assets/images/author/author-5.jpg" style={{ height: "25px", borderRadius: "12px" }} alt="" />&nbsp;&nbsp;&nbsp;My Collections</Button>
              <Button><img className="lazy" src="assets/images/author/author-6.jpg" style={{ height: "25px", borderRadius: "12px" }} alt="" />&nbsp;&nbsp;&nbsp;My Collections</Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Chains</Typography>
          </AccordionSummary>
          <AccordionDetails>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );

  return (
    <Box id="wrapper" >
      <Box className="no-bottom no-top" id="content">
        <Box id="top"></Box>
        <Box aria-label="section">
          <Box className="container" style={{ minWidth: "100vw", paddingTop: "143px" }}>
            <Box className="row">
              <Box className="col-md-12" style={{ padding: "0px", margin: "0px" }} >
                  <div className='filter-btn'>
                    {['left'].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Button variant="contained" color="secondary" onClick={toggleDrawer(anchor, true)}>Filter</Button>
                        <SwipeableDrawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                          onOpen={toggleDrawer(anchor, true)}
                        >
                          {list(anchor)}
                        </SwipeableDrawer>
                      </React.Fragment>
                    ))}
                  </div>
                <Box sx={{ display: 'flex', position: "relative" }}>
                  <CssBaseline />
                  
                  <Main style={{padding: 0}}>
                    <Row>
                      <Col md={12}>
                        <table className="table de-table table-rank">
                          <thead>
                            <tr>
                              <th scope="col">Collection</th>
                              <th scope="col">Item</th>
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">From</th>
                              <th scope="col">To</th>
                              <th scope="col">Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-1.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                Abstraction</th>
                              <td>15,225.87</td>
                              <td className="d-plus">+87.54%</td>
                              <td className="d-plus">+309.49%</td>
                              <td>5.9</td>
                              <td>2.8k</td>
                              <td>58.5k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-2.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                Sketchify</th>
                              <td>14,304.78</td>
                              <td className="d-plus">+35.11%</td>
                              <td className="d-plus">+239.83%</td>
                              <td>2.9</td>
                              <td>2.3k</td>
                              <td>28.4k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-3.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                Cartoonism</th>
                              <td>13,705.58</td>
                              <td className="d-min">-33.56%</td>
                              <td className="d-plus">+307.97%</td>
                              <td>4.5</td>
                              <td>2.2k</td>
                              <td>48.8k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-4.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                Papercut</th>
                              <td>12,516.75</td>
                              <td className="d-plus">+23.45%</td>
                              <td className="d-plus">+171.25%</td>
                              <td>6.3</td>
                              <td>5.3k</td>
                              <td>54.2k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-5.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                Virtuland</th>
                              <td>11,586.26</td>
                              <td className="d-plus">+80.91%</td>
                              <td className="d-plus">+241.18%</td>
                              <td>2.2</td>
                              <td>1.8k</td>
                              <td>23.9k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-6.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                CoolThings</th>
                              <td>10,645.96</td>
                              <td className="d-plus">+51.99%</td>
                              <td className="d-min">-29.82%</td>
                              <td>6.6</td>
                              <td>1.8k</td>
                              <td>23.6k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-7.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                DigiPunks</th>
                              <td>9,219.13</td>
                              <td className="d-plus">+42.24%</td>
                              <td className="d-plus">+95.45%</td>
                              <td>1.2</td>
                              <td>3.8k</td>
                              <td>58.4k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-8.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                RockToonz</th>
                              <td>8,436.15</td>
                              <td className="d-plus">+61.31%</td>
                              <td className="d-plus">+347.19%</td>
                              <td>2.4</td>
                              <td>1.4k</td>
                              <td>63.3k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-9.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                BeeFriends</th>
                              <td>7,505.16</td>
                              <td className="d-plus">+64.46%</td>
                              <td className="d-plus">+240.94%</td>
                              <td>2.3</td>
                              <td>5.2k</td>
                              <td>70.3k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-10.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                Patternlicious</th>
                              <td>6,593.91</td>
                              <td className="d-min">-33.78%</td>
                              <td className="d-plus">+82.32%</td>
                              <td>4.5</td>
                              <td>6.5k</td>
                              <td>53.3k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-11.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                FlyingFox</th>
                              <td>5,605.97</td>
                              <td className="d-plus">+48.67%</td>
                              <td className="d-plus">+101.33%</td>
                              <td>4.6</td>
                              <td>5.1k</td>
                              <td>36.2k</td>
                            </tr>
                            <tr>
                              <th scope="row">
                                <div className="coll_list_pp">
                                  <img className="lazy" src="assets/images/author/author-12.jpg" alt="" />
                                  <i className="fa fa-check"></i>
                                </div>
                                Autoglyphs</th>
                              <td>4,904.27</td>
                              <td className="d-plus">+86.15%</td>
                              <td className="d-plus">+391.49%</td>
                              <td>4.5</td>
                              <td>6.2k</td>
                              <td>21.1k</td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  </Main>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default Collection