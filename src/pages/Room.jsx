import React, { useState, useEffect, useContext,  } from "react";
import queryString from "query-string";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import WaitingRoom from "../components/WaitingRoom";
import Controller from "../components/WaitingRoom/Controller";
import ListPlayer from "../components/WaitingRoom/ListPlayer";
import GameInfo from "../components/WaitingRoom/GameInfo";
import Chat from "../components/Chat/Chat/Chat";
import { ThemeContext } from "../App";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Room = ({ location }) => {
  const classes = useStyles();

  // eslint-disable-next-line no-unused-vars
  const [players, setPlayers] = useState();
  const [host, setHost] = useState();
  const [roomName, setRoomName]=useState();
  const [roomId, setRoomId] = useState();
  const [numOfPlayers,setNumOfPlayers] = useState();
  const socket = useContext(ThemeContext);
  const [gameSetting,setGameSetting]=useState({wereWolfs:0,witch:false, hunter:false, guard:false, villagers:0});
  const history= useHistory();

  useEffect(() => {
    const { name, room, roomName, numOfPlayers } = queryString.parse(
      location.search
    );
    
    if (room) {
      try{
      socket.emit(
        "joinRoom",
        { roomId: room, roomName: roomName, numOfPlayers: numOfPlayers }
      );  
      socket.on('roomBlock',({error})=>{
        console.log(error);
        alert('You are not allowed to join this room!');
        history.push('/play-game');
      })
      socket.on('gameInfo',({room,error})=>{
          if(room)
          {
            setHost(room.host)
            setPlayers(room.players);
            setRoomName(room.name);
            setRoomId(room.id);
            setNumOfPlayers(room.numOfPlayers);
          }
          if (!room.gameSetting) {
            setGameSetting({villagers: numOfPlayers});
          }
          else{
            setGameSetting(room.gameSetting);
          }
          if(error)
          {
            alert(error);
            return false;
          }
        
      })
      socket.on('isKicked',()=>{
        alert('You was kicked out of room!');
        history.push('/play-game');
      });

    }catch(error){
      alert(error);
    }
    }
      
  }, [socket, location.search, history]);

  

  return players ? (
    <Grid container spacing={2}>
      <Grid container item lg={8} spacing={2} style={{height: "100%",}}>
        <Grid item xs={6} >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                ROOM:
              </Typography>
              <Typography variant="h5" component="h2" color="primary">
                {roomName}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} >
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Copy ROOM CODE to clipboard
              </Typography>
              <Typography variant="h5" component="h2" color="primary">
                {roomId}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <ListPlayer host={host} players={players}/>
        </Grid>
        <Grid item xs={12}>
          <Controller host={host} numOfPlayers={numOfPlayers} roomId={roomId}/>
        </Grid>
      </Grid>
      <Grid item lg={4} xs={12}>
        <GameInfo gameSetting ={gameSetting}/>
        <Chat name={roomName} room={roomName} />
      </Grid>
    </Grid>
  ) : (
    <h5>There is no game for you. Please select a room!</h5>
  );
};

export default Room;
