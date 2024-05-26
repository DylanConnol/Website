import "./App.css";
import { useState, useEffect } from "react";
import Project from "./components/project";
import { Link } from "react-router-dom";

function App() {
  const [position, setPosition] = useState(0);
  const numprojects = 4;

  const el = document.querySelector("div");
  el.onwheel = customScroll;

  function customScroll(event) {
    //this is the custom scroll event I have to monitor when someone scrolls
    event.preventDefault();
    const delta = event.deltaY;
    if (position >= 5400 + 350 * numprojects && delta > 0) {
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
              Hi there! My name is Dylan Connolly, I am a student at BU majoring
              in mathematics and computer science. I love coding (competitve
              coding especially), playing chess, reading and cooking. I have a
              good amount of experience with machine learning, website deisgn,
              and complicated data structures. Welcome to my own personal
              website, I hope you enjoy your stay.
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
        <projects>
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
                  Projects
                </h1>
              )}
            </span>
          )}

          <Project position={position} number={1}>
            Test project here insert project 1. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Project>
          <Project position={position} number={2}>
            Test project here insert project 2. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Project>
          <Project position={position} number={3}>
            Test project here insert project 3. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Project>
          <Project position={position} number={4}>
            Last but not least, I built this very website! I used react to build
            it, assembling it entirely from scratch. Hope you enjoy, I sure had
            fun making it.
          </Project>
          
        </projects>

        <div id="contactMe">
          <div
            id="background"
            style={{
              backgroundColor: "white",
              height: "400%",
              width: "100%",
              position: "absolute",
              top: numprojects * 700 + 2 * (5140 - position),
            }}
          >
            {position > 5150 + 350 * numprojects && (
              <div
                style={{
                  width: "80%",
                  position: "absolute",
                  top: -1.35 * window.innerHeight - 2 * (4600 + 350*numprojects - position),
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

          {position > 5150 + 350 * numprojects && (
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
              height: "70%",
              width: "100%",
              position: "absolute",
              top: numprojects * 700 + 2 * (5140 - position),
            }}
          ></div>
          {position < 5333 + 350 * numprojects && (
            <h1
              id="ContactMeWhiteText"
              style={{
                width: "100%",
                position: "absolute",
                top:
                  position < 5194 + 350 * numprojects
                    ? numprojects * 700 + 2 * (5200 - position)
                    : 10,
                color: "white",
                textAlign: "center",
                fontSize: "100px",
                overflow: "hidden",
                maxHeight:
                  position < 5294 + 350 * numprojects
                    ? "100px"
                    : 100 - 2 * (position - (5294 + 350 * numprojects)) + "px",
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
