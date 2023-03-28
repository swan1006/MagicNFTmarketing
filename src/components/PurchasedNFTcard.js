/* eslint-disable space-before-blocks */
import React from "react"
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import musicImg from "../assets/img/music.png";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const PurchasedNFTcard = (props) => {
    const { library } = useWeb3React();
    const [imgUrl, setImgUrl] = useState("");
    const [newPrice, setNewPrice] = useState(0)
    const { item, resell } = props;
    const [currency, setCurrency] = useState("");

    useEffect(async () => {
        if (library) {
            const web3 = new Web3(library.provider);
            const netWorkId = await web3.eth.net.getId();
            if (netWorkId === 56 || netWorkId === 97) {
                setCurrency("BNB")
            } else if (netWorkId === 137 || netWorkId === 80001) {
                setCurrency("MATIC")
            }
        }
    }, [library])

    useEffect(() => {
        if (item.type === "mp3") {
            setImgUrl(musicImg);
        } else {
            setImgUrl(item.image)
        }
    }, [item])

    const handleClick = () => {
        localStorage.setItem("itemID", item.itemId);
    }


    return (
        <Box className="d-item col-lg-2 col-md-3 col-sm-4 col-xs-12" >
            <Box className="nft__item">
                <Box className="nft__item_wrap">
                    <Link to={`/details`} onClick={handleClick} className="wrapper">
                        <img src={imgUrl} className="lazy nft__item_preview"
                            style={{ height: '100px' }} alt="" />
                    </Link>
                </Box>
                <Box className="nft__item_info">
                    <Link to={`/details/${item.itemId}`}>
                        <h4>{item.name}</h4>
                    </Link>
                    <Box className="nft__item_price">
                        Royalties: {item.royalty}<span></span>
                    </Box>
                    <Box className="field-set" style={{ paddingTop: "10px" }}>
                        <h6>New Price</h6>
                        <br/>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            type={"number"}
                            label="Price"
                            variant="outlined"
                            value={newPrice}
                            onChange={e => setNewPrice(e.target.value)}
                        />
                        {currency}
                    </Box>
                    <br/>
                    <Box className="nft__item_action">
                        {newPrice ?
                            <div className="col-12 " style={{ cursor: 'pointer' }}>
                                <a onClick={() => resell(item, newPrice.toString())} className="more-btn mb-15" style={{ fontSize: '18px' }}>Resell</a>
                            </div>
                            :
                            <div className="col-12 " style={{ cursor: 'pointer' }}>
                                <a className="more-btn mb-15" style={{ fontSize: '18px' }} >Set Your Price</a>
                            </div>
                        }
                    </Box>
                    <Box className="nft__item_like">
                        <i className="fa fa-heart"></i><span>{item.itemId}</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PurchasedNFTcard;