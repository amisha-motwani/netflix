import Card from "./Card";
import React, { useState } from "react";
import icon from "./Images/icon.png";
function FirstRow() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  return (
    <>
      <div className="container-fluid">
        <div
          className="row Firstrow"
          style={{ color: "black", backgroundColor: "#00081d" }}
        >
          <div
            className="col-sm-3 col-12"
            style={{ height: "auto", alignItems: "center" }}
          >
            <img
              style={{
                width: "50%",
                height: "50%",
                marginTop: "5%",
                marginLeft: "10%",
              }}
              src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
            ></img>
          </div>
          <div
            className="col-sm-9 col-12 d-flex flex-row-reverse"
            style={{
              alignItems: "center",
            }}
          >
            <button
              className="my-4 py-2 px-3 me-3 ms-4 button-7"
              role="button"
              style={{ height: "32px", width: "75px", borderRadius: "6px" }}
            >
              <h1
                style={{
                  fontFamily: "Reguler",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Sign in
              </h1>
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "41px",
                padding: "5px 10px",
                background: "black",
                borderRadius: "3px",
                gap:"10px",
                border: "1px solid #606060"
              }}
            >
              <img src={icon} style={{ height: "25px" }} alt="" />
              <select name="" id="" 
              style={{
                background: "transparent",color: "white",border:"0"
              }}>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>
          <div
            className="col-md-7 mt-4"
            style={{ marginLeft: "10%", color: "white" }}
          >
            <h1
              style={{
                fontFamily: "Bold",
                fontSize: "64px",
                fontWeight: "900",
              }}
            >
              Unlimited movies, TV{" "}
            </h1>
            <h1
              style={{
                fontFamily: "Bold",
                fontSize: "64px",
                fontWeight: "900",
              }}
            >
              shows and more.
            </h1>
            <h2
              className="WatchAnywhere"
              style={{
                fontFamily: "Regular",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              Watch anywhere. Cancel anytime.
            </h2>
          </div>
          <div className="col-10 BeautifulCol" style={{ marginLeft: "10%" }}>
            <div className="row" style={{ color: "white" }}>
              <div className="col-8">
                <h2
                  className="ReadyTo mt-4"
                  style={{ fontFamily: "Regular", fontSize: "20px" }}
                >
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h2>
              </div>
              <div className="col-md-8 col-12 mt-4">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="py-3 ps-2 mb-4"
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    backgroundColor: "rgb(15,17,24)",
                    border: "none",
                    border: "0.1px solid gray",
                    color: "white",
                  }}
                />
              </div>
              <div className="col-md-4 col-12">
                <button style={{ borderRadius: "6px" }} className="mb-5 mt-4">
                  <h2
                    className="py-2 px-3"
                    style={{
                      fontFamily: "Regular",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    Get Started{" "}
                  </h2>
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 ChildOfFirstrow">
            <div className="row">
              <div className="col-11" style={{ marginLeft: "4%" }}>
                <div className="row">
                  <div className="col-md-6 col-12 mt-3">
                    <div className="">
                      <Card
                        imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/enjoyOnTv/en.png"
                        heading="Enjoy on your TV"
                        para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-12 mt-3">
                    <div className="">
                      <Card
                        imgsrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/watchEverywhere/en.png"
                        heading="Watch everywhere"
                        para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
            <div className="row">
               <div className="col-11">
                         <div className="row CardRow" style={{color:"black", backgroundColor:"#00081d"}}>
              <div className='col-md-6 col-12  mt-3'>
                  <div className=''>
                       <Card
                          imgsrc = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/kids/en-GB.png'
                         heading = 'Create profiles for kids'
                         para = 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.'
                        />
                   </div>
               </div>
              <div className='col-md-6 col-12  mt-3'>
                  <div className=''>
                       <Card
                         imgsrc = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/v2.1/download/en.png'
                         heading = 'Download your shows to watch offline'
                         para = 'Save your favourites easily and always have something to watch.'
                       />
                   </div>                  
               </div>
          </div>
               </div>
            </div>
          </div>
    */}
    </>
  );
}
export default FirstRow;
