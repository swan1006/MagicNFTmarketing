/* eslint-disable space-before-blocks */
import React from "react"
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import musicImg from "../assets/img/music.png";
import { Link } from "react-router-dom";

const NftCard = (props) => {
    console.log(props);
    const { account, library } = useWeb3React();
    const [imgUrl, setImgUrl] = useState("");
    const [isOwner, setOwner] = useState(false);
    const { item, buy, buttonTitle } = props;
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        if (item.seller === account) {
            setOwner(true);
        } else {
            setOwner(false);
        }
        // eslint-disable-next-line
    }, [account])

    useEffect(async() => {
        if(library){
            const web3 = new Web3(library.provider);
            const netWorkId = await web3.eth.net.getId();
            if(netWorkId === 56 || netWorkId === 97) {
                setCurrency("BNB")
            } else if(netWorkId === 137 || netWorkId === 80001) {
                setCurrency("MATIC")
            }
        }
    },[library])

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
                        Price: {item.price}<span>{currency}</span>
                    </Box>
                    <Box className="nft__item_price">
                        Royalties: {item.royalty}<span>%</span>
                    </Box>
                    <Box className="nft__item_action">
                        {isOwner ? <></> :
                            <div className="col-12 " style={{ cursor: 'pointer' }}>
                                <a onClick={buy} className="more-btn mb-15" style={{ fontSize: '18px' }} >{buttonTitle}</a>
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

export default NftCard;