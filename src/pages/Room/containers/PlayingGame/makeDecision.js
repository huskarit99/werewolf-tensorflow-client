export default function makeDecision(fingerPose) {
  if (
    fingerPose[0][1] === "No Curl" &&
    fingerPose[1][1] === "No Curl" &&
    fingerPose[2][1] === "No Curl" &&
    fingerPose[3][1] === "No Curl" &&
    fingerPose[4][1] === "No Curl"
  ) {
    return 5;
  } else {
    if (
      fingerPose[1][1] === "No Curl" &&
      fingerPose[2][1] === "No Curl" &&
      fingerPose[3][1] === "No Curl" &&
      fingerPose[4][1] === "No Curl"
    )
      return 4;
    else {
      if (
        fingerPose[1][1] === "No Curl" &&
        fingerPose[2][1] === "No Curl" &&
        fingerPose[3][1] === "No Curl"
      )
        return 3;
      else {
        if (fingerPose[1][1] === "No Curl" && fingerPose[2][1] === "No Curl")
          return 2;
        else {
          if (fingerPose[1][1] === "No Curl") return 1;
          else {
            if (
              fingerPose[0][1] === "No Curl" &&
              (fingerPose[0][2] === "Vertical Up" ||
                fingerPose[0][2] === "Diagonal Up Right" ||
                fingerPose[0][2] === "Diagonal Up Left")
            )
              return "Like";
            else {
              if (
                fingerPose[0][1] === "No Curl" &&
                (fingerPose[0][2] === "Vertical Down" ||
                  fingerPose[0][2] === "Diagonal Down Right" ||
                  fingerPose[0][2] === "Diagonal Down Left")
              )
                return "Dislike";
            }
          }
        }
      }
    }
  }
  return "none";
}
