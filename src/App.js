import * as fp from "fingerpose";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import React, { useRef, useEffect } from "react";
import * as handpose from "@tensorflow-models/handpose";

import "./App.css";
import { drawHand } from "./utilities";

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        const fingerPose = gesture.poseData;
        if (fingerPose[0][1] === "No Curl" &&
          fingerPose[1][1] === "No Curl" &&
          fingerPose[2][1] === "No Curl" &&
          fingerPose[3][1] === "No Curl" &&
          fingerPose[4][1] === "No Curl")
          console.log("5");
        else {
          if (fingerPose[1][1] === "No Curl" &&
            fingerPose[2][1] === "No Curl" &&
            fingerPose[3][1] === "No Curl" &&
            fingerPose[4][1] === "No Curl")
            console.log("4");
          else {
            if (fingerPose[1][1] === "No Curl" &&
              fingerPose[2][1] === "No Curl" &&
              fingerPose[3][1] === "No Curl")
              console.log("3");
            else {
              if (fingerPose[1][1] === "No Curl" &&
                fingerPose[2][1] === "No Curl")
                console.log("2");
              else {
                if (fingerPose[1][1] === "No Curl")
                  console.log("1");
                else {

                  if (fingerPose[0][1] === "No Curl" && (fingerPose[0][2] === "Vertical Up" || fingerPose[0][2] === "Diagonal Up Right" || fingerPose[0][2] === "Diagonal Up Left"))
                    console.log("Like");
                  else {
                    if (fingerPose[0][1] === "No Curl" && (fingerPose[0][2] === "Vertical Down" || fingerPose[0][2] === "Diagonal Down Right" || fingerPose[0][2] === "Diagonal Down Left"))
                      console.log("Dislike");
                  }
                }
              }
            }
          }
        }
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => { runHandpose() }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default App;
