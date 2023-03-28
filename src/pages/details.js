/* eslint-disable radix */
/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import Divider from '@mui/material/Divider';
import TimelineIcon from '@mui/icons-material/Timeline';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ViewListIcon from '@mui/icons-material/ViewList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import { marketplaceContract, nftContract } from "../contracts/connections";
import { NFT_ADDRESS } from "../constants";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const itemId = localStorage.getItem("itemID");
  const [expanded, setexpanded] = useState(true);
  const history = useHistory();
  const [age, setAge] = useState('10');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { account, library } = useWeb3React();
  const [singleItem, setSingleItem] = useState()
  const [networkId, setNetWorkId] = useState();
  const [marketContract, setMarketContract] = useState(null);
  const [nftAddress, setNFTAddress] = useState(null);
  const [buyButtonTitle, setBuyButtonTitle] = useState("Loading ...");

  useEffect(() => {
    const LoadContracts = async () => {
      const web3 = new Web3(library.provider);
      const netWorkId = await web3.eth.net.getId();
      setNetWorkId(netWorkId);
      const nftaddress = NFT_ADDRESS[netWorkId];
      setNFTAddress(nftaddress);
      const deployedNftContract = nftContract(netWorkId);
      const deployedMarketContract = marketplaceContract(netWorkId);
      setMarketContract(deployedMarketContract);

      if (deployedNftContract && deployedMarketContract && account) {
        setBuyButtonTitle("Buy Now")
      } else {
        setBuyButtonTitle("Wrong Network")
      }
      if (deployedNftContract && deployedMarketContract) {
        try {
          if (Number(itemId)) {
            const item = await deployedMarketContract.methods.fetchSingleItem(itemId).call()
            const nftUrl = await deployedNftContract.methods.tokenURI(item.tokenId).call();
            const priceToWei = Web3.utils.fromWei((item.price).toString(), "ether")
            const metaData = await axios.get(nftUrl);
            let myItem = {
              price: priceToWei,
              itemId: item.tokenId,
              owner: item.owner,
              seller: item.seller,
              creator: item.creator,
              admin: item.admin,
              sold: item.sold,
              royalty: item.royalty,
              image: metaData.data.image,
              type: metaData.data.type,
              title: metaData.data.name,
              category: metaData.data.category,
              description: metaData.data.description,
              isResell: item.isResell
            }
            setSingleItem(myItem)
            console.log(myItem)
            return myItem;
          }

        } catch (e) {
          console.log(e)
        }
      } else {
        window.alert("You are at Wrong Network, Connect with BSC network Please")
      }
    }
    library && LoadContracts()
    // eslint-disable-next-line
  }, [library, account])

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

  return (
    <Box id="wrapper" >
      <Box className="no-top" id="content">
        <Box aria-label="section">
          <Box className="container paddingtop11">
            <Box className="row">
              <Box className="col-md-5 col-sm-12 col-xs-12 text-center">
                <img src={singleItem?.image} className="img-fluid img-rounded mb-sm-30" alt="" />
                <Accordion expanded={true}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ display: "flex", alignItems: "center" }}><DescriptionIcon />&nbsp;&nbsp;&nbsp;Description</Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ padding: "30px" }}>
                    <Typography>
                      {singleItem?.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ display: "flex", alignItems: "center" }}><DescriptionIcon />&nbsp;&nbsp;&nbsp;Details</Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ padding: "30px" }}>
                  </AccordionDetails>
                </Accordion>
              </Box>

              <Box className="col-md-7 col-sm-12 col-xs-12">
                <Box className="item_info">
                  <div className='subtitle'>
                    <h2>{singleItem?.title}</h2>
                    <Box className="item_info_counts">
                      <Box className="item_info_type"><i className="fa fa-image"></i>{singleItem?.category}</Box>
                      <Box className="item_info_views"><i className="fa fa-eye"></i>250</Box>
                      <Box className="item_info_like"><i className="fa fa-heart"></i>{singleItem?.itemId}</Box>
                    </Box>

                    <Accordion expanded={true}>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography style={{ display: "flex", alignItems: "left" }}>
                          <ScheduleIcon />&nbsp;&nbsp;&nbsp;Sale ends April 22, 2022 at 2:42am KST
                        </Typography>
                      </AccordionSummary>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography style={{ display: "flex", alignItems: "left" }}>
                          Creator:&nbsp;&nbsp;&nbsp;{singleItem?.creator}
                        </Typography>
                      </AccordionSummary>
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography style={{ display: "flex", alignItems: "left" }}>
                          Seller:&nbsp;&nbsp;&nbsp;{singleItem?.seller}
                        </Typography>
                      </AccordionSummary>
                      <Divider />
                      <AccordionDetails style={{ padding: "30px" }}>
                        <Box className="de_tab tab_simple">
                          <Box className="spacer-10"></Box>
                          <h4>Current Price</h4>
                          <Box className="nft-item-price">

                            {
                              networkId === 56 || networkId === 97 &&
                              <img src="assets/images/design/bnb.png" alt="" />
                            }
                            {
                              networkId === 137 || networkId === 80001 &&
                              <img src="assets/images/design/matic.png" alt="" />
                            }
                            <span>&nbsp;{singleItem?.price}</span>($253.67)
                          </Box>
                          {
                            account !== singleItem?.seller &&
                            <>
                              <button
                                className="btn-main btn-lg"
                                onClick={async () => {
                                  buyNFT(singleItem);
                                }}
                              >
                                <AccountBalanceWalletIcon style={{ color: "white" }} />&nbsp;{buyButtonTitle}
                              </button>
                              &nbsp;
                              <a href="/wallet" className="btn-main btn-lg btn-light">
                                <LocalOfferIcon />&nbsp;Make Offer
                              </a>
                            </>
                          }
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </div>

                  <Accordion expanded={expanded}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon onClick={() => setexpanded(expanded ? false : true)} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ display: "flex", alignItems: "center" }}><TimelineIcon />&nbsp;&nbsp;&nbsp;Price History</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails style={{ padding: "30px" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Date</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Age"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>All Time</MenuItem>
                          <MenuItem value={20}>Last 7 days</MenuItem>
                          <MenuItem value={30}>Last One Month</MenuItem>
                          <MenuItem value={30}>Last One Month</MenuItem>
                        </Select>
                      </FormControl>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ display: "flex", alignItems: "center" }}><ViewListIcon />&nbsp;&nbsp;&nbsp;Listing</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails style={{ padding: "30px" }}>
                      No yet
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ display: "flex", alignItems: "center" }}><LocalOfferIcon />&nbsp;&nbsp;&nbsp;Offers</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails style={{ padding: "30px" }}>
                      No yet
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>

              <Divider style={{ margin: "20px 0px" }} />

              {/* <Box className="col-md-12">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{ display: "flex", alignItems: "center" }}><DescriptionIcon />&nbsp;&nbsp;&nbsp;Item Activity</Typography>
                  </AccordionSummary>
                  <Divider />
                  <AccordionDetails style={{ padding: "30px" }}>
                    <Search className='header-search'>
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search Collections ..."
                        inputProps={{ 'aria-label': 'search' }}
                      />
                    </Search>
                    No yet
                  </AccordionDetails>
                </Accordion>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default Details