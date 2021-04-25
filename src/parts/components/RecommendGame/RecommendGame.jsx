import React, { useRef } from "react";
import { Paper, Typography } from "@material-ui/core";

import rg1 from "assets/images/1.jpg";
import rg2 from "assets/images/2.jpg";
import rg3 from "assets/images/3.jpg";
import rg4 from "assets/images/4.jpg";
import useStyles from "./style";

const RecommendGame = () => {
  const rgRef1 = useRef();
  const rgRef2 = useRef();
  const rgRef3 = useRef();
  const rgRef4 = useRef();
  const [indexImage, setIndexImage] = React.useState(2);

  const showImage = (index) => {
    console.log("show: ");
    index = index === 0 ? 4 : index;
    switch (index) {
      case 1: {
        rgRef1.current.style.display = "block";
        break;
      }
      case 2: {
        rgRef2.current.style.display = "block";
        break;
      }
      case 3: {
        rgRef3.current.style.display = "block";
        break;
      }
      case 4: {
        rgRef4.current.style.display = "block";
        break;
      }
      default: {
      }
    }
  };

  const hiddenImage = (index) => {
    console.log("hidden: ");
    index = index === 0 ? 4 : index;
    switch (index) {
      case 1: {
        rgRef1.current.style.display = "none";
        break;
      }
      case 2: {
        rgRef2.current.style.display = "none";
        break;
      }
      case 3: {
        rgRef3.current.style.display = "none";
        break;
      }
      case 4: {
        rgRef4.current.style.display = "none";
        break;
      }
      default: {
      }
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndexImage((indexImage) => {
        indexImage = indexImage + 1;
        indexImage = indexImage === 5 ? 1 : indexImage;
        indexImage = indexImage === 0 ? 4 : indexImage;
        return indexImage;
      });
      const prevIndex = indexImage - 1;
      const currentIndex = indexImage;
      hiddenImage(prevIndex);
      showImage(currentIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [indexImage]);

  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Paper className={classes.subPaper}>
        <Typography
          style={{
            color: "white",
            fontSize: "1.7rem",
            paddingLeft: "3%",
            paddingTop: "3%",
          }}
        >
          Experience 3D Game
        </Typography>
        <Typography
          style={{
            color: "rgb(132, 132, 138)",
            fontSize: "0.875rem",
            paddingLeft: "3%",
            paddingTop: "2%",
          }}
        >
          Tips: Should not play more than 180 minutes
        </Typography>
      </Paper>
      <img alt="" ref={rgRef1} className={classes.image} src={rg1} />
      <img
        alt=""
        ref={rgRef2}
        className={classes.image}
        src={rg2}
        style={{ display: "none" }}
      />
      <img
        alt=""
        ref={rgRef3}
        className={classes.image}
        src={rg3}
        style={{ display: "none" }}
      />
      <img
        alt=""
        ref={rgRef4}
        className={classes.image}
        src={rg4}
        style={{ display: "none" }}
      />
    </Paper>
  );
};

export default RecommendGame;
