import logo from './logo.svg';
import './style.css';
import React, { Component } from 'react';

function Browse(){
  return (
      <div>
      <section>
        <main>
          <div className="Browse-Wrapper">
            <h1 className="BrowseTitle">Browse top online businesses</h1>
            <p className="BrowseDesc">These are all revenue generating websites, ecommerce stores and other online businesses</p>
            <input type="button" className="eCommerce-Tab" value="eCommerce" />
            <div className="Card-Wrapper">
            <div className="Card-Wrapper-Inner">
              <img className="Card-Img" src="https://d2jafhvbn4akdi.cloudfront.net/website_regular_5bb72ad8-1968-4b35-b204-4a973c49791a.jpg" />
              <div className="Card-Flex">
                <div className="Card-Title-Wrapper">
                  <h1 className="Card-Title">Tattooing 101</h1>
                  <ul className="Card-Price-Info">
                    <li>6 bids</li>
                    <li>15 days left</li>
                  </ul>
                </div>
                <div className="Card-Categories-Wrapper">
                  <ul className="Card-Categories-List">
                    <li>Type</li>
                    <li>Monetization</li>
                    <li>Net Profit</li>
                  </ul>
                  <ul className="Card-Categories-List">
                    <li>Website</li>
                    <li>Ecommerce</li>
                    <li>$4,240 p/mo</li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
          </div>
        </main>
      </section>
    </div>
    )
}
export {Browse}