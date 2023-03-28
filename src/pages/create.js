/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import { Box } from "@mui/system";
import MyProvider from "./MyProvider"
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import styled from 'styled-components';
import { UIEvent, PhotoEditorSDKUI, ImageFormat, ExportFormat, ContainedPrimaryButton } from "photoeditorsdk";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, TextField } from "@mui/material";
import { create } from 'ipfs-http-client';
import { marketplaceContract, nftContract } from "../contracts/connections";
import Web3 from "web3";
import { useHistory } from 'react-router-dom';
import { NFT_ADDRESS } from "../constants";


const ipfsClient = create("https://ipfs.infura.io:5001/api/v0");

const ExportButton = styled(ContainedPrimaryButton)`
  color: ${({ theme }) => theme.button.containedPrimaryForeground}
  background: ${({ theme }) => theme.button.containedPrimaryBackground}
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Create = () => {
  const { account, library } = useWeb3React();
  const [theme, setTheme] = useState("light")
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [imgdata, setImgdata] = useState(false);
  const [postable, setpostable] = useState(false);

  const [nftoption, setNftOption] = React.useState("put");
  const [buttonTitle, setButtonTitle] = useState("Please Fill All Fields")
  const [isActive, setIsActive] = useState(false)
  const [urlHash, setUrlHash] = useState("")
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [royalty, setRoyalty] = useState(1);
  const [category, setCategory] = useState("New");
  const [type, setType] = useState("");
  const [uploadStatus, setUploadStatus] = useState("Upload");

  const onChange = async (file) => {
    try {
      setUploadStatus("Uploading now...")
      const addedFile = await ipfsClient.add(file);
      const ipfsUrl = `https://ipfs.infura.io/ipfs/${addedFile.path}`;
      console.log(addedFile);
      setUploadStatus("Uploaded")
      setUrlHash(ipfsUrl)
      setType("image");
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
      setIsActive(false);
      const addedFile = await ipfsClient.add(data);
      const ipfsUrl = `https://ipfs.infura.io/ipfs/${addedFile.path}`;
      createMarketForSale(ipfsUrl);
    } catch (e) {
      setIsActive(true);
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
        let createTokenResult = await deployedNftContract.methods.createNFtToken(url).send({ from: account })
        const tokenid = createTokenResult.events.Transfer.returnValues["2"]
        setIsActive(false)
        setButtonTitle("Please wait...")
        let marketFees = await deployedMarketContract.methods.gettheMarketFees().call()
        marketFees = marketFees.toString()
        const priceToWei = Web3.utils.toWei(price, "ether")
        const nftAddress = NFT_ADDRESS[netWorkId];
        try {
          const lanchTheNFtForSale = await deployedMarketContract.methods.createItemForSale(nftAddress, tokenid, priceToWei, royalty).send({ from: account, value: marketFees });

          if (lanchTheNFtForSale) {
            handleClose();
            history.push("/collection");
          }
        } catch (err) {
          console.log(err);
          window.alert("SomeThing Went Wrong")
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

  const load = async () => {
    const editor = await PhotoEditorSDKUI.init({
      library: {
        provider: MyProvider,
        enableUpload: !0
      },
      theme: theme,
      container: "#editor",
      mainCanvasActions: ["undo", "redo", "export"],
      assetBaseUrl: "./assets",
      image: "./example.jpg",
      export: {
        image: {
          enableDownload: false,
          format: ImageFormat.PNG,
          exportType: ExportFormat.BLOB,
        },
      },
      custom: {
        languages: {
          en: {
            mainCanvasActions: {
              buttonExport: 'Save NFT',
            },
          },
          components: {
            buttons: {
              mainCanvasActionExport: ExportButton,
            },
          },
        },
      },
      license: '{"api_token":"FIjt93hJjd1aTDypx2wYog","app_identifiers":[],"available_actions":[],"domains":["https://api.photoeditorsdk.com"],"enterprise_license":false,"expires_at":null,"features":["camera","library","export","customassets","whitelabel","adjustment","brush","filter","focus","frame","overlay","sticker","text","textdesign","transform"],"issued_at":1586248517,"minimum_sdk_version":"1.0","owner":"Alexander Schiewe","platform":"HTML5","products":["pesdk"],"version":"2.4","signature":"bEZWMchF+f1RPFSQ5jEIL/DteRrbrlSJb6I42a6RAkDkBcmfaI2IOjf0tm76NEPUiF7Oc+eHzxk/f5cNqXEjeAYhj9vZYTMaCgwX2jNqpSv51cnTTln+cEA3J43mJl40ZgYYkSMxXo4yKtXxvtsEat4EgxM9gHVV1dvfpXQjIaBWJiB72T2/IaZHxFjivj0tcT/jAvwr5geASUKPMLR6Q5NsCKHqX6Q/2a9wcnEUgWknqBI7kbQrCI5HNcEOMF0TxFhmake7R3hbzU6W5Heu92erWjLqkuTj0gcjY1A7giIQaCGmEc5tfmPzVeF7ByrID/WXUQ0ksezLDuXcnZHrSxf+g/SfHmauDadCHdXz64CcdjO3/5z/QYTSEL7sR1f7DHmd0eK30idXpZ4ISzV0FP7fqxzI2Q2r2niNcUpNnqj+z2vg0fqoFs++ojmFVYTDowPVL2CeLnNBflLkU+Rwka5YUMfPLlhxKBxrR/hmk+N4jlcfPZi2tCfMg27/vzuNO82VDeGAECzqIq8veaoLipPcp5Fnw3uwcUpH4EEn5Cgu26hf/mt6cKvJZgsTmjwgaZ09l1Vd9K5+MpFAb1aOmvCydx5GsYdiA6tVB/J3trDTzT3v6/doZR5jDxTOM5PbqdgwdbkKury6Sv7MtxMEHXtbPR/4bSxipISdq9NuwMk="}',
    });
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      setUrlHash();
      setImgdata(imageSrc);
      onChange(imageSrc);
      setOpen(true)
    });
  }

  const next = () => {
    setpostable(true)
  }

  const  handleClose = () => {
    setOpen(false)
    setpostable(false)

  }

  useEffect(() => {
    load()
  }, [theme])
  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="row" style={{ position: "relative", top: "143px", marginBottom: "143px" }}>
        <Box className="col-md-12">
          <Box>
            <div
              id="editor"
              style={{ width: "100vw", height: "93vh" }}
            />

          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => handleClose()}
        aria-describedby="alert-dialog-slide-description"
        className="dialog"
      >
        <DialogTitle>{postable ? "Create NFT" : "Upload NFT"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {
              urlHash ? 
              <img src={urlHash} alt="placeholder" className="preview-img"/>
                :
                <img
                  width="200"
                  src="./upload.png"
                  className="preview-img"
                  alt="freepik"
                  style={{ filter: 'invert(1)' , cursor: 'pointer', width: '100%'}}
                />
            }
            
            <h5 style={{ textAlign: 'center' }}>{uploadStatus}</h5>
            {
              postable ?
                <>
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
                      <select
                        className="form-select mb-4"
                        placeholder="Set Royalty(%)"
                        style={{ padding: '13px' }}
                        aria-label="Select Single Category"
                        onChange={e => setRoyalty(e.target.value)}
                      >
                        {Array(10).fill(0).map((item, index) => <option key={index} value={index + 1}>{index + 1}%</option>)}
                      </select>
                  </Box>

                  <Box className="field-set" style={{ paddingTop: "30px" }}>
                    <h5>Set Category</h5>
                      <select
                        className="form-select mb-2"
                        placeholder="Set Royalty(%)"
                        style={{ padding: '13px' }}
                        aria-label="Select Single Category"
                        onChange={e => setCategory(e.target.value)}
                      >
                        {names.map((item, index) => <option key={index} value={item}>{item}</option>)}
                      </select>
                  </Box>
                  <Box className="field-set" style={{ padding: "50px 0px", display: 'flex', justifyContent: 'center' }}>
                    {
                      isActive ? <button className="btn-main btn-lg" style={{ fontSize: 'large' }} onClick={createMarketItem}>
                        Create
                      </button> :
                        <button className={`btn-main btn-lg `} style={{ background: 'crimson', fontSize: 'large' }}>{buttonTitle}</button>
                    }
                  </Box>
                </>
                :
                ""
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            postable ?
              <>
                <Button variant="outlined" onClick={() => handleClose()}>Cancel</Button>
              </>
              :
              <>
                <Button variant="outlined" disabled={uploadStatus !== "Uploaded"} onClick={() => next()}>Next</Button>
                <Button variant="outlined" onClick={() => handleClose()}>Cancel</Button>
              </>
          }
        </DialogActions>
      </Dialog>
    </Box >
  )
}
export default Create