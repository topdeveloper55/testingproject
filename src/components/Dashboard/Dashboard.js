import React, { useState } from "react";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Rating } from "@mui/material";
import SmallMenuBar from "./SmallMenuBar";
import { Radio } from "@mui/material";
import CheckOutLined from "@mui/icons-material/CheckOutlined";
import ArrowFowardIcon from "@mui/icons-material/ArrowForward";
import "./Dashboard.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Divider } from "@mui/material";

const menuTitle = [
    "30-DAY STATISFACTION GUARANTEE",
    "FREE DELIVERY ON ORDERS OVER $40.00",
    "50.000+ HAPPY CUSTOMERS",
    "100% MONEY BACK GUARANTEE"
];
const icons = [
    "header-logo-1",
    "header-logo-2",
    "",
    "header-logo-4"
];
const letter = " ($84.00 Total)";
const Dashboard = () => {
    // const [menuBar, setmenuBar] = useState(true);
    return (
        <>
            <div className="dashboard">
                <div className="menubar-back">
                    <div className="menubar">
                        <div className="menubar-1">
                            <img src={`/assets/${icons[0]}.png`} alt="1"></img>
                            <span>{menuTitle[0]}</span>
                        </div>
                        <div className="menubar-2">
                            <img src={`/assets/${icons[1]}.png`} alt="1"></img>
                            <span>{menuTitle[1]}</span>
                        </div>
                        <div className="menubar-3">
                            <FavoriteBorderOutlinedIcon />
                            <span>{menuTitle[2]}</span>
                        </div>
                        <div className="menubar-4">
                            <img src={`/assets/${icons[3]}.png`} alt="1"></img>
                            <span>{menuTitle[3]}</span>
                        </div>
                    </div>
                    <SmallMenuBar />
                </div>
                <div className="main-board">
                    <div className="logo-bar1">
                        <div className="logo-bar">
                            <img src="/assets/page-logo.png" alt="logo1"></img>
                            <div>
                                <img style={{marginRight:'2vw'}} src="/assets/logo-McAfee.png" alt="logo2"></img>
                                <img src="/assets/logo-norton.png" alt="logo3"></img>
                            </div>
                        </div>
                    </div>
                    <div className="main-title">Wait! Your Order In Progress</div>
                    <div className="main-small-title">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing</div>
                    <div className="step-bar">
                        <div>
                            <CheckCircleRoundedIcon sx={{
                                width: '4vw',
                                height: '4vw',
                                color: 'rgb(125, 191, 84)',
                                marginRight: '10px'
                            }}
                            />
                            <p className="p1">Step1:Cart Review</p>
                            <p className="p2">Cart Review</p>
                        </div>

                        <div>
                            <CheckCircleRoundedIcon sx={{
                                width: '4vw',
                                height: '4vw',
                                color: 'rgb(125, 191, 84)',
                                marginRight: '10px'
                            }}
                            />
                            <p className="p1" >Step2:CheckOut</p>
                            <p className="p2">CheckOut</p>
                        </div>
                        <div>
                            <div className="step3-icon">3</div>
                            <p className="p1" style={{ marginLeft: '10px', fontWeight:'bold' }}>Step3:Special Offer</p>
                            <p className="p2" style={{ marginLeft: '10px', fontWeight:'bold' }}>Special Offer</p>
                        </div>
                        <div>
                            <div className="step4-icon">4</div>
                            <p className="p1" style={{ marginLeft: '10px' }}>Step4:Confirmation</p>
                            <p className="p2" style={{ marginLeft: '10px' }}>Confirmation</p>
                        </div>
                    </div>
                    <div className="m-b-r-title1">
                        <span style={{ color: 'var(--fontBlue)' }}>ONE TIME ONLY </span>
                        Special Price For 6 Extra Clarifion For Only
                        <span style={{ color: 'var(--fontBlue)' }}> $14 Each</span>
                        {letter}
                    </div>
                    <div className="main-back">
                        <div className="main-back-left">
                            <img src="/assets/mainBack.png" alt="main-back"></img>
                            <div className="m-b-l-avatar">
                                <div className="l-avatar">
                                    <img src="/assets/avatar-img.png"></img>
                                    <div style={{ paddingLeft: '20px', marginTop: '3vw' }}>
                                        <Rating value={5} size="medium"></Rating>
                                        <div style={{ lineHeight: '0px', width: '19vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            Ken T.
                                            <img style={{ width: '1.5vw', height: '1.5vw' }} src="/assets/verify-check.png"></img>
                                            <p style={{ color: 'rgb(99, 174, 153)' }}>Verified Customer</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ fontSize: '1vw', marginTop: '2vw', marginLeft: '3vw', marginRight: '3vw', marginBottom: '3vw' }}>"As Soon as the Clarifions arrived I put one in my bedroom. This was late
                                    in the afternoon. When I went to the bedroom in the evening it smelled clean.
                                    When I went to bed I felt I could breathe better. Wonderful."
                                </div>
                            </div>
                        </div>
                        <div className="main-back-right">
                            <div className="m-b-r-title">
                                <span style={{ color: 'var(--fontBlue)' }}>ONE TIME ONLY </span>
                                Special Price For 6 Extra Clarifion For Only
                                <span style={{ color: 'var(--fontBlue)' }}> $14 Each</span>
                                {letter}
                            </div>
                            <div className="m-b-r-phone">
                                <img style={{ width: '30%', height: '30%' }} src="/assets/phone.png"></img>
                                <div className="r-phone-div">
                                    <div className="phone-div-1" >
                                        <span className="phone-div1-first">Clarifion Air lonizer</span>
                                        <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}>
                                            <span className="phone-div1-span0" style={{ color: 'rgb(82, 82, 84)', textDecoration: 'line-through' }}>$180</span>
                                            <span className="phone-div1-span" style={{ color: 'var(--fontBlue)' }}>$84</span>
                                        </div>
                                    </div>
                                    <Rating className="phone-rating" value={5} size="medium" sx={{ width: '2vw' }}></Rating>
                                    <div className="phone-div-2" >
                                        <Radio checked className="phone-radio" color="primary"></Radio>
                                        <span className="phone-div2-span">12 left in Stock</span>
                                    </div>
                                    <div className="m-b-r-p-s" style={{ fontSize: '0.9vw', width: '90%', marginLeft: '10px' }}>
                                        Simply plug a Clarifion into any standard outlet and replace bulky,
                                        expensive air purifiers with a simple.
                                    </div>
                                </div>
                            </div>
                            <div className="m-b-r-temps">
                                Simply plug a Clarifion into any standard outlet and replace bulky,
                                expensive air purifiers with a simple.
                            </div>
                            <div className="m-b-r-check">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <CheckOutLined sx={{ color: 'var(--check)' }} />
                                    <span style={{ marginLeft: '0.1vw' }}>Negative lon Technology may <span style={{fontWeight:'bold'}}>help with allergens</span></span>
                                </div>
                                <div style={{ marginTop: '0.5vw', display: 'flex', alignItems: 'center' }}>
                                    <CheckOutLined sx={{ color: 'var(--check)' }} />
                                    <span style={{ marginLeft: '0.1vw' }}>Designed fox <span style={{fontWeight:'bold'}}>air rejuvenation</span></span>
                                </div>
                                <div style={{ marginTop: '0.5vw', display: 'flex', alignItems: 'center' }}>
                                    <CheckOutLined sx={{ color: 'var(--check)' }} />
                                    <span style={{ marginLeft: '0.1vw' }}><span style={{fontWeight:'bold'}}>Perfect for every room</span> in all types places</span>
                                </div>

                            </div>
                            <div className="m-b-r-pro">
                                <div style={{ width: '90%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div><div className="pro-round">%</div></div>
                                    <div style={{ marginLeft: '2vw' }}>
                                        Save
                                        <span style={{ color: 'var(--fontBlue)' }}> 53% </span>
                                        and get
                                        <span style={{ color: 'var(--fontBlue)' }}> 6 extra Clarifion </span>
                                        for only
                                        <span style={{ color: 'var(--fontBlue)' }}> $14 Each</span>
                                    </div>
                                </div>
                            </div>
                            <button className="claim-button">
                                <span>YES - CLAIM MY DISCOUNT </span>
                                <ArrowFowardIcon sx={{ marginLeft: '1vw' }} />
                            </button>
                            <div className="m-b-r-logobar">
                                <div className="b-r-firstline">
                                    <div className="free-snipping">Free Snipping</div>
                                    <div className="secure">
                                        <img src="/assets/secure-img.png" alt="secure-img"></img>
                                        <div> Secure 256bit SSL ENCRYPTION</div>
                                    </div>
                                </div>
                                <div className="b-r-secondline">
                                    <img src="/assets/icon-1.png" alt="icon-1"></img>
                                    <img src="/assets/icon-2.png" alt="icon-2"></img>
                                    <img src="/assets/icon-3.png" alt="icon-3"></img>
                                    <img src="/assets/icon-4.png" alt="icon-4"></img>
                                    <img src="/assets/icon-5.png" alt="icon-5"></img>
                                    <img src="/assets/icon-6.png" alt="icon-6"></img>
                                    <img src="/assets/icon-7.png" alt="icon-7"></img>
                                </div>
                            </div>
                            <h3>NO THANKS, I DON'T WANT THIS.</h3>
                            <div className="m-b-r-mark">
                                <img src="/assets/satisfaction-img.png"></img>
                                <div>
                                    If you are not completely thrilled with your Clarifion-We have a
                                    <span style={{ fontWeight: 'bold' }}>30 day satisfaction guarantee. </span>
                                    Please refer to our return policy at the bottom of the page for more details.
                                    Happy Shopping!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-main">
                        <div className="footer-left">
                            <div className="f-d1">Copyright (C) 2023</div>
                            <div className="f-d2">clarifionsupport@clarifion.com</div>
                        </div>
                        <div className="footer-right">
                            <img src="/assets/secure-img-2.png" alt="secure-img"></img>
                            <div> Secure 256bit SSL ENCRYPTION</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;