﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using Mirror;
using System.Linq;


public class UIGameVote : NetworkBehaviour
{
    public Text TextDisplay; // hiện thị thời gian trên màn hình
    [SyncVar(hook = nameof(OnSecondsChanged))]
    int secondsLeft = 0; // thời gian còn lại
    int secondsWait = 0; // thời gian chờ
    bool takingAway = false; // 
    bool wait = true; 
    // Start is called before the first frame update
    void Start()
    {
        //TextDisplay = GameObject.FindGameObjectWithTag(Tags_4_Object.Vote_Time);
        //TextDisplay.text = "";
    }

    // Update is called once per frame
    void Update()
    {
        if (takingAway == false && secondsLeft > 0 && secondsWait == 0 && wait == false)
        {
            StartCoroutine(TimerTake());
        }
        //else if (secondsLeft == 0 && wait == false) // Thiết lập thời gian chờ
        //{
        //    secondsWait = 5;
        //    wait = true;
        //}
        //else if (takingAway == false && secondsWait > 0 && wait == true)
        //{
        //    TextDisplay.text = "";
        //    StartCoroutine(WaitingTime());
        //}
        else if (secondsWait == 0 && secondsLeft == 0 && wait == true) // Thiết lập thời gian vote
        {
            secondsLeft = 10;
            wait = false;
        }
    }

    IEnumerator TimerTake() // giảm 1 giây sử dụng hàm waitforsecond sau đó giảm secondLeft đi 1 đơn vị
    {
        takingAway = true;
        yield return new WaitForSeconds(1);
        secondsLeft--;
        TextDisplay.text = "Time Remaining: " + secondsLeft;
        takingAway = false;
    }
    IEnumerator WaitingTime() // giảm 1 giây sử dụng hàm waitforsecond sau đó giảm secondWait đi 1 đơn vị 
    {
        takingAway = true;
        yield return new WaitForSeconds(1);
        secondsWait--;
        takingAway = false;
    }

    void OnSecondsChanged(int _old, int _new)
    {
        TextDisplay.text = "Time Remaining: " + secondsLeft;
    }
    public int getSecondsLeft()
    {
        return secondsLeft;
    }
    public void setSecondsLeft(int seconds)
    {
        secondsLeft = seconds;
    }
}
