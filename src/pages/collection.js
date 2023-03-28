/* eslint-disable no-debugger */
/* eslint-disable radix */
import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import { Col, Row } from "reactstrap";
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled, useTheme, alpha } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography, FormControl, InputLabel, Select, MenuItem, ToggleButtonGroup, ToggleButton } from "@mui/material";
import Web3 from "web3";
import axios from 'axios';
import { useWeb3React } from "@web3-react/core";
import { marketplaceContract, nftContract } from "../contracts/connections";
import { NFT_ADDRESS } from "../constants";
import NftCard from "../components/NftCard";
import { useHistory } from 'react-router-dom';
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
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
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('10');
  const [alignment, setAlignment] = useState('left');
  const [expanded, setexpanded] = useState(true);
  const {active, account, library } = useWeb3React();
  const [unsoldItems, setUnsoldItems] = useState([]);
  const [marketContract, setMarketContract] = useState(null);
  const [nftAddress, setNFTAddress] = useState(null);
  const [buyButtonTitle, setBuyButtonTitle] = useState("Loading ...");
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#0094f4");
  const history = useHistory();
  
  useEffect(() => {
    const LoadContracts = async () => {
      const web3 = new Web3(library.provider);
      const netWorkId = await web3.eth.net.getId();
      const nftaddress = NFT_ADDRESS[netWorkId];
      setNFTAddress(nftaddress);
      const deployedNftContract = nftContract(netWorkId);
      const deployedMarketContract = marketplaceContract(netWorkId);
      setMarketContract(deployedMarketContract);
      setColor("")

      if (deployedNftContract && deployedMarketContract && account) {
        setBuyButtonTitle("Buy Now")
      } else {
        setBuyButtonTitle("Wrong Network")
      }

      if (deployedNftContract && deployedMarketContract) {
        
        setLoading(true);
        //Fetch all unsold items
        const data = await deployedMarketContract.methods.getAllUnsoldItems().call();
        try{
          const items = await Promise.all(data.map(async item => {
            const nftUrl = await deployedNftContract.methods.tokenURI(item.tokenId).call();
            const priceToWei = Web3.utils.fromWei((item.price).toString(), "ether")
            const metaData = await axios.get(nftUrl);
  
            //TODO: fix this object
            let myItem = {
              price: priceToWei,
              itemId: item.id,
              owner: item.owner,
              seller: item.seller,
              oldOwner: item.oldOwner,
              creator: item.creator,
              admin: item.admin,
              oldSeller: item.oldSeller,
              royalty: item.royalty,
              oldPrice: item.oldPrice,
              image: metaData.data.image,
              type: metaData.data.type,
              name: metaData.data.name,
              description: metaData.data.description,
              isResell: item.isResell,
            }
            return myItem;
          }))
          setLoading(false);
          setUnsoldItems(items);

        } catch(err) {
          setLoading(false);
        }

      } else {
        window.alert("You are at Wrong Network, Connect with BSC network Please")
      }
    }
    library && LoadContracts()
    // eslint-disable-next-line
  }, [library, account,active])

  //Create nft Buy Function
  const buyNFT = async (nftItem) => {
    const convertIdtoInt = Number(nftItem.itemId)
    try {
      if (account) {
        if (nftItem.isResell) {
          let priceinNumber = (Number(nftItem.price));
          try {
            //Calculate The creatorCommission
            let royalty = parseInt(nftItem.royalty)
            const creatorCommission = (((Number(nftItem.price) / 100)) * (royalty)).toFixed(4);
            const creatorCommissionPrice = Web3.utils.toWei((creatorCommission).toString(), "ether")
            const sellerMoneyprice = Web3.utils.toWei((priceinNumber).toString(), "ether")
            const result = await marketContract.methods.createMarketForSaleWithRoyalty(nftAddress, creatorCommissionPrice, convertIdtoInt).send({ from: account, value: sellerMoneyprice })
            if (result) {
              history.push("/purchased");
              // window.location.reload();
            }

          } catch (e) {
            console.log("error in catch or nft BUY", e)
          }

        } else {
          try {
            let priceinNumber = (Number(nftItem.price));
            const sellerMoneyprice = Web3.utils.toWei((priceinNumber).toString(), "ether");
            if (sellerMoneyprice) {
              const result = await marketContract.methods.createMarketForSale(nftAddress, convertIdtoInt).send({ from: account, value: sellerMoneyprice })
              if (result) {
                history.push("/purchased");
                // window.location.reload();
              }
            }
          } catch (e) {
            console.log("error else of NFT BUy", e)
          }
        }
      }

    } catch (e) {
      window.alert("You should be in the BSC Mainnet in Metamask")
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Box id="wrapper" >
      <Box className="no-bottom no-top" id="content">
        <Box id="top"></Box>
        <Box id="profile_banner" style={{ background: "url(assets/template/1.jpg)" }}>
          <Typography className="explore-header">All NFTS</Typography>
        </Box>
        <Box aria-label="section" className="d_coll">
          <Box className="container" style={{ minWidth: "100vw" }}>
            <Box className="row">
              <Box className="col-md-12" style={{ padding: "0px", margin: "0px" }} >
                <Divider />
                <Box sx={{ display: 'flex', position: "relative" }}>
                  <Drawer
                    sx={{
                      flexShrink: 0,
                      '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                      },
                    }}
                    anchor="left"
                    open={open}
                    style={{ position: "relative" }}
                    className="appbar"
                  >
                    <DrawerHeader className="drawerHeader">
                      <Typography style={{ position: "absolute", left: "15px" }}><FilterListIcon />&nbsp;&nbsp;Filter</Typography>
                      <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                      </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <Box>
                      <Accordion expanded={expanded}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon onClick={() => setexpanded(expanded ? false : true)} />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Status</Typography>
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
                          <Typography>Price</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
                      <Accordion className="search-filter" style={{ display: 'none' }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel3a-content"
                        >
                          <Typography>Search</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className="activity-filter">
                            <li>
                              <Search className='draw-header'>
                                <SearchIconWrapper>
                                  <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                  placeholder="Search Collections ..."
                                  inputProps={{ 'aria-label': 'search' }}
                                />
                              </Search>
                            </li>
                            <li>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Items</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age}
                                  label="Age"
                                  onChange={handleChange}
                                >
                                  <MenuItem value={10}>Single items</MenuItem>
                                  <MenuItem value={20}>All items</MenuItem>
                                  <MenuItem value={30}>Bundles</MenuItem>
                                </Select>
                              </FormControl>
                            </li>
                            <li>
                              <FormControl fullWidth>
                                <InputLabel id="sort">Sort</InputLabel>
                                <Select
                                  labelId="sort"
                                  id="sort"
                                  // value={age}
                                  label="Sort"
                                  value="sold"
                                // onChange={handleChange}
                                >
                                  <MenuItem value="sold">Recently Sold</MenuItem>
                                  <MenuItem value="oldest">Oldest</MenuItem>
                                  <MenuItem value="lastest">Lastest</MenuItem>
                                </Select>
                              </FormControl>
                            </li>
                            <li>
                              <ToggleButtonGroup
                                orientation="horizontal"
                                value={alignment}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                              >
                                <ToggleButton value="left" aria-label="left aligned">
                                  <ViewListIcon />
                                </ToggleButton>
                                <ToggleButton value="center" aria-label="centered">
                                  <ViewModuleIcon />
                                </ToggleButton>
                                <ToggleButton value="right" aria-label="right aligned">
                                  <ViewQuiltIcon />
                                </ToggleButton>
                              </ToggleButtonGroup>
                            </li>
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Drawer>
                  <Main open={open}>
                    <Row style={{ width: "100%", alignItems: "center", marginBottom: "20px" }}>
                      <Col lg={4} md={4} sm={6} xs={12} className="header-col header-col-first">
                        <Button
                          variant='contained'
                          color="secondary"
                          onClick={handleDrawerOpen}
                          style={{ marginRight: '15px' }}
                          fullWidth
                          size='large'
                        >Filter</Button>
                        <Search className='draw-header form-item'>
                          <SearchIconWrapper>
                            <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                            placeholder="Search Collections ..."
                            inputProps={{ 'aria-label': 'search' }}
                          />
                        </Search>
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={12} className="header-col">
                        <FormControl fullWidth className='form-item'>
                          <InputLabel id="demo-simple-select-label">Items</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                          >
                            <MenuItem value={10}>Single items</MenuItem>
                            <MenuItem value={20}>All items</MenuItem>
                            <MenuItem value={30}>Bundles</MenuItem>
                          </Select>
                        </FormControl>
                      </Col>
                      <Col lg={3} md={3} sm={6} xs={12} className="header-col">
                        <FormControl fullWidth className='form-item'>
                          <InputLabel id="sort">Sort</InputLabel>
                          <Select
                            labelId="sort"
                            id="sort"
                            // value={age}
                            label="Sort"
                            value="sold"
                          // onChange={handleChange}
                          >
                            <MenuItem value="sold">Recently Sold</MenuItem>
                            <MenuItem value="oldest">Oldest</MenuItem>
                            <MenuItem value="lastest">Lastest</MenuItem>
                          </Select>
                        </FormControl>
                      </Col>
                      <Col lg={2} md={2} sm={6} xs={12} className="header-col toggle-btn-group header-col-last" style={{ justifyContent: "flex-end" }}>
                        <ToggleButtonGroup
                          orientation="horizontal"
                          value={alignment}
                          exclusive
                          onChange={handleAlignment}
                          aria-label="text alignment"
                          className="form-item"
                        >
                          <ToggleButton value="left" aria-label="left aligned">
                            <ViewListIcon />
                          </ToggleButton>
                          <ToggleButton value="center" aria-label="centered">
                            <ViewModuleIcon />
                          </ToggleButton>
                          <ToggleButton value="right" aria-label="right aligned">
                            <ViewQuiltIcon />
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </Col>
                    </Row>
                    <Divider />
                    <Row className="tool-box">
                      {
                        !loading && unsoldItems.map((item, index) => (
                          <NftCard
                            key={index}
                            item={item}
                            buttonTitle={buyButtonTitle}
                            buy = {async () => {
                              buyNFT(item);
                            }}
                          />
                        ))
                      }
                      {
                        loading && <PuffLoader color={color} loading={loading} css={override} size={150} />
                      }
                      {/* <Box className="d-item col-lg-2 col-md-12 col-sm-12 col-xs-12">
                        <Box className="nft__item">
                          <Box className="nft__item_wrap">
                            <Box className="nft__item_extra">
                              <Box className="nft__item_buttons">
                                <button >Buy Now</button>
                              </Box>
                            </Box>
                            <a href="/details">
                              <Box id="rotatecard" className="shadow wrapper">
                                <Box className="front face">
                                  <img src="assets/template/9.jpg" className="rotateimg" />
                                </Box>
                                <Box className="back face center">
                                  <img src="assets/template/13.jpg" className="rotateimg" />
                                </Box>
                              </Box>
                            </a>
                          </Box>
                          <Box className="nft__item_info">
                            <a href="/details">
                              <h4>Pinky Ocean</h4>
                            </a>
                            <Box className="nft__item_price">
                              0.08 BNB<span>1/20</span>
                            </Box>
                            <Box className="nft__item_action">
                              <a href="#">Buy Now</a>
                            </Box>
                            <Box className="nft__item_like">
                              <i className="fa fa-heart"></i><span>50</span>
                            </Box>
                          </Box>
                        </Box>
                      </Box> */}
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