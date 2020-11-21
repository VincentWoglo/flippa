import logo from './logo.svg';
import './style.css';
import React, { Component } from 'react';

function TopNavBar(){
  return (
    <div className="">
      <section>
        <nav>
          <div className="topNavBar-wrapper">
          <ul className="topNavBar-left-menu-list">
            <li>How to Sell</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Services</li>
            <div className="nav-top-sub-wrapper">
              <ul className="nav-top-sub">
                <li>Flippa Due Diligence</li>
                <li>Flippa Finder</li>
                <li>Find a Broker</li>
                <li>Fianancing</li>
              </ul>
            </div>
          </ul>
            <ul className="topNavBar-right-menu-list">
              <li className="nav-top-login">Log In</li>
              <li className="nav-top-signup">Sign Up</li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
  
}
function MainNavBar(){
  return(
    <div>
      <section>
        <nav>
        <div className="MainNavBar-Wrapper">
          <ul className="LogoAndBrowse">
            <img src="https://d1zazrti94enmy.cloudfront.net/assets/logo-flippa-c6713c797bb3d8cdcc0aa40b4e3888d7f4253696db55f0cdf1d6fd07bff9dee4.svg"
             className="FlippaLogo" />
            <li className="MainNav-Browse">Browse</li>
          <div>
          </div>
          </ul>
          <form className="searchForm">
            <input type="text" className="SearchForm-Input"
             placeholder="e.g. Fitness blog, AdSense, Shopify Stores"/>
            <input type="submit"/>
          </form>
          <div>
          <ul className="Nav-CallToAction">
            <li>Get a Valuation</li>
            <input type="submit" value="Sell Now" className="Nav-SellNow" />
          </ul>
          </div>
        </div>
        </nav>
      </section>
    </div>
  )
}
function HeroSection(){
  return(
    <div>
      <section>
        <main>
          <div className="HeroSection-Wrapper">
            <div className="Header-inner">
              <h1 className="HerSection-Title">#1 marketplace to buy and sell</h1>
              <div className="HeroSection-TitleScroll">
                <h1>Ecommerce Stores</h1>
                <h1>Digital Business</h1>
                <h1>Apps</h1>
              </div>
              <p className="HerSection-Desc">Buy an online business, become an acquisition entrepreneur,
                 and invest in digital real estate.
                 </p>
                 <form className="Search-Hero">
                   <input type="text" className="SearchInput-Hero" placeholder="e.g. Fitness blog, AdSense, Shopify Stores"/>
                   <input type="submit" className="SearchSubmit-Hero" value="Search"/>
                 </form>
                 <div className="LiveUpdate-CallAction">
                   <img src="https://d1zazrti94enmy.cloudfront.net/assets/homepage/icon-signal-f329801f765b6774416471130c3594f710b3974806cf5a9db5558ac6c127252b.svg"/>
                   <p className="LiveListing">Live Listings: <span>5,469</span></p>
                   <p className="SellerCallAction">Ready To Sell? <span>Sell Now</span></p>
                 </div>

            </div>
            <div className="HeroSection-img">
              <img src="https://d1zazrti94enmy.cloudfront.net/assets/homepage/hero-priyadarshan_back-9ddd4b890074483f74be6702e9fb3834c28c96bce03b62251649191dc9a59375.png"
              className="HeroSection-imgInner"/>
              <p className="HeroSection-imgInnerCaption">Priyadarshan | Achieving a 112% ROI on his acquisition</p>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export {TopNavBar, MainNavBar, HeroSection};
