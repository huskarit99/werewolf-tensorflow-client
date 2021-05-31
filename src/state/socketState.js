import { atom } from "recoil";
import io from "socket.io-client";

const ENDPOINT = `http://localhost:${process.env.REACT_APP_API_URL}`;
// const ENDPOINT = `https://werewolf-tensorflow-server.herokuapp.com`;

const socketState = atom({
  key: "socketState",
  default: io(ENDPOINT, {
    transports: ["websocket", "polling", "flashsocket"],
  }),
});

export default socketState;
