/* eslint-disable no-debugger */
/* eslint-disable radix */
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { NFT_ADDRESS } from "../constants";
import { TextField, FormControl } from "@mui/material";
import { useHistory } from 'react-router-dom';
// import { MultiSelect } from "react-multi-select-component";
import { create } from 'ipfs-http-client';
import { marketplaceContract, nftContract } from "../contracts/connections";
import musicImg from "../assets/img/music.png";

const ipfsClient = create("https://ipfs.infura.io:5001/api/v0");

const CreateSelf = () => {

  const { account, library } = useWeb3React();
  const history = useHistory();
  // const [hashtag, setHashTag] = React.useState([]);
  const [nftoption, setNftOption] = React.useState("put");
  const [buttonTitle, setButtonTitle] = useState("Please Fill All Fields")

  //Load Contracts Function
  const [isActive, setIsActive] = useState(false)
  const [urlHash, setUrlHash] = useState("")

  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [royalty, setRoyalty] = useState(1);
  const [category, setCategory] = useState("New");
  const [type, setType] = useState("");
  const [uploadStatus, setUploadStatus] = useState("Upload");
  const [imgUrl, setImgUrl] = useState("");


  const onChange = async (e) => {
    const file = e.target.files[0];
    try {
      setUploadStatus("Uploading now...")
      const addedFile = await ipfsClient.add(file);
      const ipfsUrl = `https://ipfs.infura.io/ipfs/${addedFile.path}`;
      console.log(addedFile);
      setUploadStatus("Uploaded")
      if (file.type.indexOf('image') !== -1) {
        setUrlHash(ipfsUrl)
        setImgUrl(ipfsUrl);
        setType("image");
      } else {
        setUrlHash(ipfsUrl);
        setImgUrl(musicImg);
        setType("mp3")
      }
    } catch (e) {
      console.log(e);
      setUploadStatus("Upload")
    }
  }

  const createMarketItem = async () => {

    if (nftoption === "put") {
      if (parseFloat(price) <= 0 || !name || !description || !category || !royalty || !urlHash || !type) {
        return;
      }
    } else {
      if (!name || !nftoption || !description || !category || !royalty || !urlHash || !type) {
        return
      }
    }

    setButtonTitle("Please wait...")
    const data = JSON.stringify({
      name: name, description: description, royalty: royalty, category: category, image: urlHash, type: type
    });

    try {
      setIsActive(false)
      const addedFile = await ipfsClient.add(data);
      const ipfsUrl = `https://ipfs.infura.io/ipfs/${addedFile.path}`;
      createMarketForSale(ipfsUrl);
      console.log('')
    } catch (e) {
      console.log(e)
    }
  }

  const createMarketForSale = async (url) => {

    if (library) {
      const web3 = new Web3(library.provider);
      const netWorkId = await web3.eth.net.getId();

      const deployedNftContract = nftContract(netWorkId);
      const deployedMarketContract = marketplaceContract(netWorkId);

      if (deployedNftContract && deployedMarketContract && account) {
        //Start to create NFt Item Token To MarketPlace
        let tokenid;
        try {
          let createTokenResult = await deployedNftContract.methods.createNFtToken(url).send({ from: account })
          tokenid = createTokenResult.events.Transfer.returnValues["2"]
        } catch (err) {
          setIsActive(true)
        }
        setIsActive(false)
        setButtonTitle("Please wait...")
        let marketFees = await deployedMarketContract.methods.gettheMarketFees().call()
        marketFees = marketFees.toString()
        const priceToWei = Web3.utils.toWei(price, "ether")
        const nftAddress = NFT_ADDRESS[netWorkId];
        try {
          const lanchTheNFtForSale = await deployedMarketContract.methods.createItemForSale(nftAddress, tokenid, priceToWei, royalty).send({ from: account, value: marketFees });

          if (lanchTheNFtForSale) {
            history.push("/collection");
          }
        } catch (err) {
          console.log(err);
          setIsActive(true)
        }
      } else {
        setIsActive(true);
        window.alert(" UNlock Your Wallet Or Please install any provider wallet like MetaMask")
      }
    } else {
      setIsActive(true);
      window.alert("You are at Wrong Netweok, Connect with BSC network Please")
    }
  }

  const names = [
    'New',
    'New Year',
    'Free Art',
    'Birthday Greetings',
    'Dedication of Love',
    'Family or Friendship',
    'Wedding Invitaions',
    'Anniversary Gift',
    'Religious Congratulations',
    'Personal Development',
    'Stadies or job Success',
    'Happy to give birth baby',
    'Divorces',
    'Laughing and Memes',
    'Poetry',
    'Party Invitations',
  ];

  useEffect(() => {
    if (nftoption === "put") {
      if (parseFloat(price) <= 0 || !name || !description || !category || !royalty || !urlHash) {
        setIsActive(false)
      } else {
        setIsActive(true)
      }
    } else {
      if (!name || !nftoption || !description || !category || !royalty || !urlHash) {
        setIsActive(false)
      } else {
        setIsActive(true)
      }
    }
  }, [price, name, description, category, royalty, urlHash, type])

  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12 paddingtop11" >
            <h2 className="top-nfts">Create New Item</h2>
          </Box>
          <Box className="col-md-12">
            <Box className="container">
              <Box className="row" style={{ display: "flex", justifyContent: "center" }}>
                <Box className="col-lg-8">
                  <Box className="field-set">
                    <h5>Upload Item</h5>
                    <div style={{
                      borderStyle: 'dashed',
                      borderColor: "rgba(0, 0, 0, 0.12)",
                      borderWidth: '3px',
                      borderRadius: "6px",
                      display: 'flex',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}>

                      <label
                        data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change NFT">
                        {
                          urlHash ?
                            <img src={imgUrl} alt="placeholder" style={{ width: '100%' }} />
                            :
                            <img
                              width="200"
                              src="./upload.png"
                              alt="freepik"
                              style={{ filter: 'invert(1)', cursor: 'pointer' }}
                            />
                        }
                        <input
                          type="file"
                          onChange={onChange}
                          style={{ display: 'none' }}
                          accept="image/*, audio/*"
                        />
                        <h5 style={{ textAlign: 'center' }}>{uploadStatus}</h5>
                      </label>
                    </div>
                  </Box>
                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Set Title</h5>
                    <TextField
                      id="outlined-basic"
                      fullWidth label="Title"
                      variant="outlined"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </Box>
                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Set Details</h5>
                    <TextField
                      id="outlined-basic"
                      fullWidth label="Details"
                      rows={5}
                      multiline
                      variant="outlined"
                      value={description}
                      onChange={e => setDesc(e.target.value)}
                    />
                  </Box>

                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Set NFT options</h5>
                    <FormControl fullWidth>
                      <select
                        className="form-select mb-4"
                        placeholder="Set Royalty(%)"
                        aria-label="Select Single Category"
                        disabled={true}
                        style={{ padding: '13px' }}
                        onChange={e => setNftOption(e.target.value)}
                      >
                        <option value={"put"}>PUT IT ON SALE</option>
                        <option value={"give"}>GIVE IT A GIFT</option>
                        <option value={"store"}>STORE IT IN THE WALLET</option>

                      </select>
                    </FormControl>
                  </Box>



                  {nftoption === "put" && (
                    <Box className="field-set" style={{ paddingTop: "30px" }}>
                      <h5>Price</h5>
                      <TextField
                        id="outlined-basic"
                        fullWidth
                        type={"number"}
                        label="Price"
                        variant="outlined"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                      />
                    </Box>
                  )}
                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Set Royalties</h5>
                    <FormControl fullWidth>
                      <select
                        className="form-select mb-4"
                        placeholder="Set Royalty(%)"
                        style={{ padding: '13px' }}
                        aria-label="Select Single Category"
                        onChange={e => setRoyalty(e.target.value)}
                      >
                        {Array(10).fill(0).map((item, index) => <option key={index} value={index + 1}>{index + 1}%</option>)}
                      </select>
                    </FormControl>
                  </Box>

                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Set Category</h5>
                    <FormControl fullWidth>
                      <select
                        className="form-select mb-2"
                        placeholder="Set Royalty(%)"
                        style={{ padding: '13px' }}
                        aria-label="Select Single Category"
                        onChange={e => setCategory(e.target.value)}
                      >
                        {names.map((item, index) => <option key={index} value={item}>{item}</option>)}
                      </select>
                    </FormControl>
                  </Box>
                  <Box className="field-set" style={{ padding: "50px 0px", display: 'flex', justifyContent: 'center' }}>
                    {
                      isActive ? <button className="btn-main btn-lg" style={{ fontSize: 'large' }} onClick={createMarketItem}>
                        Create
                      </button> :
                        <button className={`btn-main btn-lg `} style={{ background: 'crimson', fontSize: 'large' }}>{buttonTitle}</button>
                    }
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default CreateSelf