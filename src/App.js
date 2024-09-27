import "./App.css";
import { useState, useEffect, useRef } from "react";
import Job from "./components/job";
import { Link } from "react-router-dom";

function App() {
  const [position, setPosition] = useState(0);
  const numjobs = 4;

  const el = document.querySelector("div");
  el.onwheel = customScroll;

  function customScroll(event) {
    //this is the custom scroll event I have to monitor when someone scrolls
    event.preventDefault();
    const delta = event.deltaY;
    if (position >= 5400 + height + 0.35*window.innerHeight && delta > 0) {
      return;
    }
    if (position > 0 || (position <= 0 && delta > 0)) {
      setPosition(position + delta);
    }
  }
  const AMCalcSlider = () => {
    //Calculate the slider's position relative to the respective side, for the about me section
    if (position < 1000) {
      return -1000;
    }
    if (position < 1500) {
      return -1000 + 2 * (position - 1000);
    }
    return 0;
  };

  const AMCalcTop = () => {
    if (position < 1800) {
      return 0;
    }
    return 1800 - position;
  };

  const CalcBackground = () => {
    if (position < 1600) {
      //return "linear-gradient(180deg, rgb(43, 45, 49), rgb(148, 150, 171))"
      return "#bec2c2";
    }
    if (position < 4500) {
      return "#8aaac2";
    }
    return "#cfd1b6";
    // return "linear-gradient(180deg, #bec2c2, #bec2c2)"
  };

  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })


  const [CMheight, setcontactMeHeight] = useState(0)
  const CMRef = useRef(null)

  function tryCMHeight(){
    try {
      setcontactMeHeight(CMRef.current.clientHeight)
    }
    catch{}
  }

  useEffect(() => {
    tryCMHeight()
  })




  return (
    <>
      <div
        id="background"
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          right: 0,
          top: 0,
          overflow: "hidden",
          backgroundSize: "cover",
          minHeight: "100%",
          backgroundColor: CalcBackground(),
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "30%",
            right: position + "px",
            width: "100%",
            fontSize: "100px",
            textAlign: "center",
          }}
        >
          Dylan Connolly
        </h1>
        {position <= 0 && (
          <img
            id="scroll_down_image"
            src="./scrolldown.png"
            style={{
              position: "absolute",
              top: "78%",
              padding: 0,
              left: 0.5 * window.innerWidth - 100 + "px",
              width: "200px",
            }}
          ></img>
        )}
        <aboutme>
          <div
            id="right_slider"
            style={{
              position: "absolute",
              top: AMCalcTop(),
              right: AMCalcSlider(),
              width: "50%",
              fontSize: "50px",
              height: "100%",
              backgroundColor: "#cbcbf2",
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "gray",
                padding: "30px",
                fontSize: 30 - Math.floor(5000 / window.innerWidth) + "px",
              }}
            >
              Hello! My name is Dylan Connolly, I am a student at BU majoring
              in mathematics and computer science. I spend my time coding (competitive
              coding especially), playing chess, reading and cooking. I have a
              good amount of experience with machine learning, website deisgn,
              and complicated data structures. Welcome to my own personal
              website, I hope you enjoy it.
            </h1>
          </div>
          <div
            id="left_slider"
            style={{
              position: "absolute",
              top: AMCalcTop(),
              left: AMCalcSlider(),
              flex: "auto",
              width: "50%",
              fontSize: "50px",

              height: "100%",
              backgroundColor: "#878c9c",
              padding: 0,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "#cbcbf2",
                textAlign: "center",
                fontSize: 100 - Math.floor(10000 / window.innerWidth) + "px",
              }}
            >
              About Me
            </h1>
          </div>
          <h2></h2>
        </aboutme>
        <jobs>
          {position > 2600 && position < 5000 && (
            <span
              className="dot"
              style={{
                height: position - 2600 + "px",
                width: position - 2600 + "px",
                backgroundColor: "#cfd1b6",
                borderRadius: "50%",
                display: "inline-block",
                position: "absolute",
                right: window.innerWidth * 0.5 - 0.5 * (position - 2600),
                top:
                  position < 4700
                    ? window.innerHeight * 0.5 - 0.5 * (position - 2600)
                    : window.innerHeight * 0.5 -
                      0.5 * (position - 2600) -
                      2 * (position - 4700),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {position > 2750 && (
                <h1
                  style={{
                    fontSize:
                      position < 4400 ? 0.1 * (position - 2700) : 170 + "px",
                  }}
                >
                  Experience
                </h1>
              )}
            </span>
          )}
          <joblist style = {{display:"flex", flexDirection: "column", position: "absolute", top: 4800 - position + 1*350 + 0.05*window.innerHeight, width: "100%"}} ref = {ref}>
          <Job position={position} number={1} JobHeader = {"Mok Sports LLC"}>
          Developing the frontend app for Mok Sports using React Native, Javascript, and Figma for graphic design. 
          Working as the Lead Frontend Dev to make a user-friendly UI with mobile compatibility, across Android and IOS. 
          Utilized AWS servers to host and update user data for live feedback and interaction on the app. 
          Helped attain $1000 in funding through a beta demo of the application released.
          </Job>
          <Job position={position} number={2} JobHeader = {"Widesense "}>
          Coded with OpenAI ChatGPT4o APIs to detect anomalies in Widesense' bus route and battery charge plan data. This included cleaning Widesense historical and current data for GPT consumption, prompt engineering, and GPT conversation management. 
          Connected our API to a large language model, allowing efficient function calling and intuitive chatbot querying. 
          Gained more familiarity with Github, scrum, APIs, collaboration, pytest, and dockers.
           Used DAG systems to deploy periodically updated systems that would enable for live usage and display of up to date data.
          </Job>
          <Job position={position} number={3} JobHeader = {"BLAZE Solutions"}>
          Provided data analysis insights; handled data ingestion with an emphasis on corrections in data labelling and processing. Displayed the data back to the user on dashboards
           Worked in Blaze’s data warehousing team, developing machine learning algorithms in Python to match similar products between different clients in the database to create an industry standardized product taxonomy using sklearn and numpy. Worked in Python primarily, with exposure to C++, and MySQL.
            Used Jira for our project management/sprints, and attended daily standups. With a dataset of 2.7 million products, I employed clustering models (k-means) to analyze product data and information; successfully utilized natural language processing (BERT, NLTK, spaCy) to correlate brands to products through only the product name, significantly reducing the need for manual data collection and analysis.
             Enabled Blaze’s customers to analyze dozens of product category data points and map their specific products to an industry-standardized product taxonomy, allowing for easier management of product pricing and inventory.
          </Job>
          </joblist>
          
        </jobs>

        <div id="contactMe">
          <div
            id="background"
            style={{
              backgroundColor: "white",
              height: "400%",
              width: "100%",
              position: "absolute",
              top: 2*height + 2 * (5140 - position),
            }}
          >
            {position > 5150 + height - 0.1*window.innerHeight && (
              <div
                style={{
                  width: "80%",
                  position: "absolute",
                  top: .25 * window.innerHeight -( 2*height + 2 * (5140 - position)),
                  display: "flex",
                  justifyContent: "center",
                  padding: "10%",
                  left:0,
                  gap: "10%"
                }}
              >
                <a href="mailto:djconnol@bu.edu">
                  <img
                    src="gmail.webp"
                    style={{
                      width: window.innerWidth*0.1 + "px",
                    }}
                  ></img>
                </a>

                <a
                  href="https://www.linkedin.com/in/dylan-connolly-b65480266/"
                  target="_blank"
                >
                  <img
                    src="linkedin.webp"
                    style={{
                      width: window.innerWidth*0.1 + "px",
                    }}
                  ></img>
                </a>
                <a href="https://github.com/DylanConnol" target="_blank">
                  <img
                    src="github.png"
                    style={{
                      width: window.innerWidth*0.1 + "px",
                    }}
                  ></img>
                </a>
                <a href="tel:617-320-0153">
                  <img
                    src="phone.png"
                    style={{
                      width: window.innerWidth*0.1 + "px",
                    }}
                  ></img>
                </a>
              </div>
            )}
          </div>

          {position > 5150 + height && (
            <h1 
              id="ContactMeBlackText"
              style={{
                width: "100%",
                position: "absolute",
                top: "10px",
                color: "black",
                textAlign: "center",
                fontSize: "100px",
              }}
            >
              Contact Me
            </h1>
          )}
          <div
            id="bar"
            style={{
              backgroundColor: "black",
              height: 0.7*window.innerHeight,
              width: "100%",
              position: "absolute",
              top: 2*height + 2 * (5140 - position), alignContent: "center", alignItems: "center", display: "flex"
            }}
          >
            { 2*height + 2 * (5140 - position) + 0.35*window.innerHeight - CMheight > 10 && 
            <h1 ref = {CMRef}
              id="ContactMeWhiteText"
              style={{
                width: "100%",
                position: "absolute",
                top: 2*height + 2 * (5140 - position) + 0.35*window.innerHeight > 10 ? "auto": -3*(position  - 2*height + 2 * (5140 - position)),
                color: "white",
                textAlign: "center",
                fontSize: "100px",
                overflow: "hidden",
              }}
            >
              Contact Me
            </h1>
            }

          </div>
          {(2*height + 2 * (5140 - position) + 0.35*window.innerHeight  - CMheight <= 10 && position < 5350 + height + 0.35*window.innerHeight &&
            <h1 ref = {CMRef}
              id="ContactMeWhiteText"
              style={{
                width: "100%",
                position: "absolute",
                top: 10,
                color: "white",
                textAlign: "center",
                fontSize: "100px",
                overflow: "hidden",
                maxHeight:
                  position < 2*height + 2 * (5140 - position) + 0.7*window.innerHeight
                    ? "100px"
                    : Math.max(0, 100 + (2*height + 2 * (5052 - position) + 0.7*window.innerHeight)) + "px",
              }}
            >
              Contact Me
            </h1>
          )}
        </div>
        <></>
      </div>
      <h1 style={{ position: "absolute", top: 0, left: 0 }}>{}</h1>
    </>
  );
}

//      <h1 style={{ position: "absolute", top: 0, left: 0 }}>{position}</h1>

export default App;
// 1.5 * (5800 - position) + 350 * numprojects, zIndex: 2
