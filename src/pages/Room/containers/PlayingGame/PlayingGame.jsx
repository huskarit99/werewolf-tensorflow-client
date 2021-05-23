import * as fp from "fingerpose";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import React, { useRef, useEffect, Fragment } from "react";
import * as handpose from "@tensorflow-models/handpose";

import "./PlayingGame.css";
import useStyles from "./style";
import { drawHand } from "./utilities";
import makeDecision from "./makeDecision";

const PlayingGame = () => {
  const classes = useStyles();
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
        console.log(makeDecision(fingerPose));
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return (
    <Fragment>
      <Webcam ref={webcamRef} className={classes.webcam} />
      <canvas ref={canvasRef} className={classes.canvas} />
    </Fragment>
  );
};

export default PlayingGame;
