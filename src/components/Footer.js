import * as React from 'react';
import logo from '../assets/img/logo-nfts-magics.png'

export default function Footer() {

    return (
        <footer className="footer" style={{backgroundColor: 'rgb(233, 148, 246)'}}>
            <div className="container">
                <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
                    <div className="footer-section1">
                        <div className="widget">
                            <div style={{ display: "flex", alignItems: 'center' }}>
                                <img src="assets/images/design/nftwebsitelogo.png" className='img-h100'></img>
                                <h2>NFTS MAGICS</h2>
                            </div>
                            <h3 style={{ color: "white" }}>The most magical digital market for non-fungible tokens (NFT).<br /> Create or buy or give away unique digital items.</h3>
                        </div>
                    </div>
                    <div className="footer-section2">
                        <div className="widget">
                            <img src="assets/images/design/cards.png" style={{ height: "300px" }}></img>
                        </div>
                    </div>
                    <div className="footer-section3">
                        <div className="widget" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <div className='footer-help'>
                                <a className='flex-just' href='affiliate'>
                                    <img src="assets/images/design/money-bag.png" className='img-h100'></img>
                                    <h3 className='margin0'>Be Affiliate</h3>
                                </a>
                            </div>
                            <div className='footer-help'>
                                <a className='flex-just' href='aboutus'>
                                    <img src="assets/images/design/about.png" style={{ height: "70px", margin: "10px" }}></img>
                                    <h3 className='margin0'>About Us</h3>
                                </a>
                            </div>
                            <div className='footer-help'>
                                <a className='flex-just' href='/support'>
                                    <img src="assets/images/design/help-logo-middle-footer.png" style={{ height: "80px", margin: "10px" }}></img>
                                    <h3 className='margin0'>Help Center</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="col-md-12">
                        <div className="de-flex" style={{ display: "flex", alignItems: "center" }}>
                            <div className="de-flex-col" style={{ width: '100%' }}>
                                <a href="/home">
                                    <img alt="" className="f-logo logo-50" src={logo} />
                                </a>
                                <h6>2022 Ith projects, Inc</h6>
                            </div>
                            <div className="de-flex-col" style={{ display: 'flex', width: '100%' }}>
                                <h6><a href='assets/pdf/nftsmagics-privacy-policy.pdf' target="_blank" rel='noreferrer'>Privacy Policy</a></h6>&nbsp;&nbsp;&nbsp;&nbsp;
                                <h6>Terms of Service</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
