
// JavaScript Document
var playername = "";
var stagename = "";
var alt = "";
var ship = "";
var fc = false;
var heart = 4;
var companion = "";
var dust = "";

//Disable Button
function disabled(s, d) {
    document.getElementById(s).style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById(s).style.borderColor = "rgba(146, 228, 166, 1.0)";
    document.getElementById(s).disabled = true;
    document.getElementById(d).style.backgroundColor = "rgba(151, 0, 9, 1.0)";
    document.getElementById(d).style.borderColor = "rgba(151, 0, 9, 1.0)";
    document.getElementById(d).disabled = true;
}
//Hearts
function broke() {
    heart--;
    document.getElementById("heart" + heart).style.visibility = "hidden";
}

function fix() {
    heart = 0;
    for (var i = 0; i < 3; i++) {
        heart++;
        document.getElementById("heart" + heart).style.visibility = "visible";
    }
    heart = 4;
}
//Introduction
function intro() {
    fix();
    document.getElementById("story").style.backgroundImage = "url('images/startpage.jpg')";
    document.getElementById("story").style.color = "rgba(70,222,255,1.00)";
    document.getElementById("story").style.borderColor = "rgba(90,148,58,1.00)";
    playername = prompt("What is your name?");
    var audio = new Audio('music.mp3');
    audio.loop = true;
    audio.play();
    stagename = "Start";
    document.getElementById("story").innerHTML = "";
    document.getElementById("stage_name").innerHTML = "Stage name : " + stagename;
    update_scene(stagename);
}
//Adds to textbox text
function new_message(msg) {
    document.getElementById("story").innerHTML += "<p>" + msg + "</p>";
}
//The Crash
function thecrash() {
    stagename = "The Crash";
    document.getElementById("story").innerHTML = "";
    document.getElementById("story").style.backgroundImage = "url('images/s1page.jpg')";
    document.getElementById("stage_name").innerHTML = "Stage name : " + stagename;
    document.getElementById("story").style.color = "rgba(255, 255, 255, 1.0)";
    document.getElementById("story").style.borderColor = "rgba(255, 0, 0, 1.0)";
    update_scene(stagename);
}
//Again
function again() {
    broke();
    if (heart <= 1) {
        alert("You are out of lives");
        var start = confirm("Do you want to restart?");
        if (start == true) {
            intro();
        } else if (start == false) {
            alert("Well that sucks");
            intro();
        }
    } else {
        thecrash();
    }
}
//Forest
function forest() {
    stagename = "forest";
    alt = "caves";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Forest 2
function forest2() {
    if (fc === false) {
        stagename = "forest2";
        alt = "thetowers3";
        disabled(stagename, alt);
        update_scene(stagename);
        fc = true;
    } else if (fc === true) {
        new_message("You have already visited the forest");
        setTimeout(function() {
            thetowers3();
        }, 600);
    }
}
//Cabin
function cabin() {
    stagename = "cabin";
    alt = "thetowers";
    disabled(stagename, alt);
    update_scene(stagename);
}
//TakeArmor
function takearmor() {
    stagename = "takearmor";
    alt = "leavearmor";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Right Riddle 2
function rightriddle2() {
    stagename = "rightriddle2";
    alt = "wrongriddle2";
    disabled(stagename, alt);
    update_scene(stagename);
    document.getElementById("weaponpage").innerHTML += "<img src='images/armor.png'>";
    document.getElementById("weaponpage").innerHTML += "<img src='images/potion.png'>";
}
//Wrong Riddle 2
function wrongriddle2() {
    stagename = "wrongriddle2";
    alt = "rightriddle2";
    disabled(stagename, alt);
    update_scene(stagename);
}
//LeaveArmor
function leavearmor() {
    stagename = "leavearmor";
    alt = "takearmor";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Caves
function caves() {
    stagename = "caves";
    alt = "forest";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Caves 2
function caves2() {
    if (fc === false) {
        stagename = "caves2";
        alt = "thetowers2";
        disabled(stagename, alt);
        update_scene(stagename);
        fc = true;
    } else if (fc === true) {
        new_message("You have already visited the caves");
        setTimeout(function() {
            thetowers2();
        }, 600);
    }
}
//Take Treasure
function taketreasure() {
    stagename = "taketreasure";
    alt = "leavetreasure";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Right Riddle 1
function rightriddle1() {
    stagename = "rightriddle1";
    alt = "wrongriddle1";
    disabled(stagename, alt);
    update_scene(stagename);
    document.getElementById("weapon").src = "images/G36.png";
}
//Wrong Riddle 1
function wrongriddle1() {
    stagename = "wrongriddle1";
    alt = "rightriddle1";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Leave Treasure
function leavetreasure() {
    stagename = "leavetreasure";
    alt = "taketreasure";
    disabled(stagename, alt);
    update_scene(stagename);
}
//The Towers
function thetowers() {
    stagename = "thetowers";
    document.getElementById("story").innerHTML = "";
    document.getElementById("stage_name").innerHTML = "Stage name : The Towers";
    document.getElementById("story").style.backgroundImage = "url('images/s3page.jpg')";
    document.getElementById("story").style.color = "rgba(255, 255, 255, 1.0)";
    document.getElementById("story").style.borderColor = "rgba(0, 0, 0, 1.0)";
    update_scene(stagename);
}
//The Towers 2
function thetowers2() {
    stagename = "thetowers2";
    document.getElementById("story").innerHTML = "";
    document.getElementById("stage_name").innerHTML = "Stage name : The Towers";
    document.getElementById("story").style.backgroundImage = "url('images/s3page.jpg')";
    document.getElementById("story").style.color = "rgba(255, 255, 255, 1.0)";
    document.getElementById("story").style.borderColor = "rgba(0, 0, 0, 1.0)";
    update_scene(stagename);
}
//The Towers 3
function thetowers3() {
    stagename = "thetowers3";
    document.getElementById("story").innerHTML = "";
    document.getElementById("stage_name").innerHTML = "Stage name : The Towers";
    document.getElementById("story").style.backgroundImage = "url('images/s3page.jpg')";
    document.getElementById("story").style.color = "rgba(255, 255, 255, 1.0)";
    document.getElementById("story").style.borderColor = "rgba(0, 0, 0, 1.0)";
    update_scene(stagename);
}
//Leave 0
function leave() {
    stagename = "leave";
    alt = "goinside";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Leave 1
function leave1() {
    stagename = "leave1";
    alt = "godeeper";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Leave 2
function leave2() {
    stagename = "leave2";
    alt = "goinside";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Leave 3
function leave3() {
    stagename = "leave3";
    alt = "godeeper1";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Go Inside 0
function goinside() {
    stagename = "goinside";
    alt = "leave";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Go Inside 1
function goinside1() {
    stagename = "goinside1";
    alt = "backway";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Backway
function backway() {
    stagename = "backway";
    alt = "goinside1";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Go Deeper
function godeeper() {
    stagename = "godeeper";
    alt = "leave1";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Go Deeper 1
function godeeper1() {
    stagename = "godeeper1";
    alt = "leave3";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Back Door
function seesdoor() {
    stagename = "seesdoor";
    alt = "leave2";
    disabled(stagename, alt);
    update_scene(stagename);
}
//Ship 1
function oneship() {
    stagename = "oneship";
    document.getElementById("oneship").disabled = true;
    document.getElementById("oneship").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("oneship").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}
//Ship 2
function fightership() {
    stagename = "fightership";
    document.getElementById("fightership").disabled = true;
    document.getElementById("fightership").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("fightership").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}

function savemore() {
    stagename = "savemore";
    document.getElementById("savemore").disabled = true;
    document.getElementById("savemore").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("savemore").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}

function leaveugandans() {
    stagename = "leaveugandans";
    document.getElementById("leaveugandans").disabled = true;
    document.getElementById("leaveugandans").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("leaveugandans").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}

function focusfighters() {
    stagename = "focusfighters";
    document.getElementById("focusfighters").disabled = true;
    document.getElementById("focusfighters").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("focusfighters").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}

function shutup() {
    stagename = "shutup";
    document.getElementById("shutup").disabled = true;
    document.getElementById("shutup").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("shutup").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}
//Companions
function zonke() {
    stagename = "zonke";
    update_scene(stagename);
    companion = "Zonke";
    dust = "blue dust and sparks and many spinning gold coins";
}

function ganya() {
    stagename = "ganya";
    update_scene(stagename);
    companion = "Ganya";
    dust = "Red dust";
}

function senzo() {
    stagename = "senzo";
    update_scene(stagename);
    companion = "Senzo";
    dust = "A ancient flag with a red circle in the middle and ancient flowers your display calls cherry blossom";
}

function dabuka() {
    stagename = "dabuka";
    update_scene(stagename);
    companion = "Dabuka";
    dust = "red fur from his cap and snow";
}

function avenge() {
    stagename = "avenge";
    document.getElementById("avenge").disabled = true;
    document.getElementById("avenge").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("avenge").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}

function finish() {
    stagename = "finish";
    document.getElementById("finish").disabled = true;
    document.getElementById("finish").style.backgroundColor = "rgba(146, 288, 166, 1.0)";
    document.getElementById("finish").style.borderColor = "rgba(146, 288, 166, 1.0)";
    update_scene(stagename);
}

//Various scenes
function update_scene(s) {
    switch (s) {
        case "Start":
            new_message("What planet is this cargo going to again?");
            setTimeout(function() {
                new_message("Jonathan, we've been over this a hundred times!");
                setTimeout(function() {
                    new_message("I know! I know! I just keep forgetting! - Jonathan");
                    setTimeout(function() {
                        new_message("Planet Fostroth, now don't ask again! - " + playername);
                        setTimeout(function() {
                            new_message("Oh. Hmmm... I wonder what are in these boxes, you know, the ones in the cargo bay. - Jonathan");
                            setTimeout(function() {
                                new_message("I don't know and I really don't care, just as long as I get paid. - " + playername);
                                setTimeout(function() {
                                    new_message("Hmmm... You're a good pilot right? - Jonathan");
                                    setTimeout(function() {
                                        new_message("Pff! I'm one of the best! - " + playername);
                                        setTimeout(function() {
                                            new_message("Ha ha! That's why you're flying a cargo ship? Ha ha! - Jonathan");
                                            setTimeout(function() {
                                                new_message("What's your point? - " + playername);
                                                setTimeout(function() {
                                                    new_message("You can handle this on your own for a few minutes, right? I'm going to check out those boxes.");
                                                    setTimeout(function() {
                                                        new_message("Fine, you have two minutes. I'm counting! - " + playername);
                                                        setTimeout(function() {
                                                            new_message("Thanks! - Jonathan runs off");
                                                            setTimeout(function() {
                                                                new_message("Kids these days. - " + playername);
                                                                setTimeout(function() {
                                                                    new_message(playername + " turns on the cargo bay cameras.");
                                                                    setTimeout(function() {
                                                                        new_message("What do you see? - " + playername + " through intercom");
                                                                        setTimeout(function() {
                                                                            new_message("WHOA! " + playername + ", this is insane! - Jonathan through intercom");
                                                                            setTimeout(function() {
                                                                                new_message("What is it?! - " + playername + " through intercom");
                                                                                setTimeout(function() {
                                                                                    new_message("It's... it's... tons of GOLD! Some diamonds and jewels, too! - Jonathan through intercom");
                                                                                    setTimeout(function() {
                                                                                        new_message("No way! - " + playername + " through intercom");
                                                                                        setTimeout(function() {
                                                                                            new_message("*BEEP* *BEEP* *BEEP* - computer in control room");
                                                                                            setTimeout(function() {
                                                                                                new_message("Crap! - " + playername + " through intercom");
                                                                                                setTimeout(function() {
                                                                                                    new_message("What is it? - Jonathan through intercom");
                                                                                                    setTimeout(function() {
                                                                                                        new_message("I'm checking! - " + playername + " through intercom");
                                                                                                        setTimeout(function() {
                                                                                                            new_message(playername + "... - Jonathan through intercom");
                                                                                                            setTimeout(function() {
                                                                                                                new_message("Jonathan, there is an incoming missile coming from Planet Ugnada X! Get up here NOW! - " + playername + " through intercom");
                                                                                                                setTimeout(function() {
                                                                                                                    new_message("*BOOM!*");
                                                                                                                    setTimeout(function() {
                                                                                                                        new_message("The ship jerks violently!");
                                                                                                                        setTimeout(function() {
                                                                                                                            new_message("AHHHH! - Jonathan through intercom");
                                                                                                                            setTimeout(function() {
                                                                                                                                new_message("The cargo bay door rips off. Jonathan quickly grabs on to a pole. Everything that has not been strapped down flies out into open space.");
                                                                                                                                setTimeout(function() {
                                                                                                                                    new_message("Jonathan! Hold on! - " + playername);
                                                                                                                                    setTimeout(function() {
                                                                                                                                        new_message("I... I can't! AHHH! - Jonathan's hands slip off the pole. He flies right out of the ship.");
                                                                                                                                        setTimeout(function() {
                                                                                                                                            new_message("NOOO! JONATHAN!!! - " + playername);
                                                                                                                                            setTimeout(function() {
                                                                                                                                                new_message("The ships tilts downwards. All control has been lost, the ship spirals downwards towards the mysterious planet of Uganda X.");
                                                                                                                                                setTimeout(function() {
                                                                                                                                                    document.getElementById("story").innerHTML += "<center><button onClick='thecrash()'>Continue</button></center>";
                                                                                                                                                }, 600);
                                                                                                                                            }, 600);
                                                                                                                                        }, 600);
                                                                                                                                    }, 600);
                                                                                                                                }, 600);
                                                                                                                            }, 600);
                                                                                                                        }, 600);
                                                                                                                    }, 600);
                                                                                                                }, 600);
                                                                                                            }, 600);
                                                                                                        }, 600);
                                                                                                    }, 600);
                                                                                                }, 600);
                                                                                            }, 600);
                                                                                        }, 600);
                                                                                    }, 600);
                                                                                }, 600);
                                                                            }, 600);
                                                                        }, 600);
                                                                    }, 600);
                                                                }, 600);
                                                            }, 600);
                                                        }, 600);
                                                    }, 600);
                                                }, 600);
                                            }, 600);
                                        }, 600);
                                    }, 600);
                                }, 600);
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "The Crash":
            new_message("Ahh...Where am I?");
            setTimeout(function() {
                new_message("Uganda X?");
                setTimeout(function() {
                    new_message("Where's the ship?");
                    setTimeout(function() {
                        new_message("-It has been completely decimated-");
                        setTimeout(function() {
                            new_message("I need to find some way off this planet");
                            setTimeout(function() {
                                new_message("-You are faced with two paths, one leading to a forest and the other to caves-");
                                setTimeout(function() {
                                    document.getElementById("story").innerHTML += "<button onClick='forest()' id='forest'>Head to the Forest</button>";
                                    document.getElementById("story").innerHTML += "<button onClick='caves()' id='caves'>Head to the Caves</button>";
                                }, 600);
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "caves":
            new_message("-You travel into the dark caves.-");
            setTimeout(function() {
                new_message("-You find a treasure chest-");
                setTimeout(function() {
                    new_message("Do I take it or leave it?");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='taketreasure()' id='taketreasure'>Take the treasure</button";
                        document.getElementById("story").innerHTML += "<button onClick='leavetreasure()' id='leavetreasure'> Leave the treasure</button";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "caves2":
            new_message("You travel into the dark caves.");
            setTimeout(function() {
                new_message("You find a treasure chest");
                setTimeout(function() {
                    new_message("Do I take it or leave it?");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='taketreasure()' id='taketreasure'>Take the treasure</button";
                        document.getElementById("story").innerHTML += "<button onClick='leavetreasure()' id='leavetreasure'> Leave the treasure</button";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "leavetreasure":
            new_message("-You journey further into the caves to find an opening with towers in the distance-");
            setTimeout(function() {
                new_message("-Do you turn back for the forest or head for the towers?-");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='forest()' id='forest'>Forest</button>";
                    document.getElementById("story").innerHTML += "<button onClick='thetowers()' id='thetowers'>The Towers</button>";
                }, 600);
            }, 600);
            break;
        case "taketreasure":
            new_message("-You take the treasure...-");
            setTimeout(function() {
                new_message("-A trap triggers a riddle for you to solve-");
                setTimeout(function() {
                    new_message("-Imagine you are in a dark room. How do you get out?-");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='rightriddle1()' id='rightriddle1'>Stop Imagining</button";
                        document.getElementById("story").innerHTML += "<button onClick='wrongriddle1()' id='wrongriddle1'>Find a Door</button";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "rightriddle1":
            new_message("-Congratulations, you got the riddle right-");
            setTimeout(function() {
                new_message("You open the chest and find...");
                setTimeout(function() {
                    new_message("A G36!");
                    setTimeout(function() {
                        new_message("You journey further into the caves to find an opening with towers in the distance");
                        setTimeout(function() {
                            new_message("Do you turn back for the forest or head for the towers");
                            setTimeout(function() {
                                document.getElementById("story").innerHTML += "<button onClick='forest2()' id='forest2'>Forest</button>";
                                document.getElementById("story").innerHTML += "<button onClick='thetowers3()' id='thetowers3'>The Towers</button>";
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "wrongriddle1":
            new_message("-You are wrong!-");
            setTimeout(function() {
                new_message("Your life shall be taken");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='again()'>Again</button>";
                }, 600);
            }, 600);
            break;
        case "forest":
            new_message("-You travel into to forest and stumbles upon an old cabin, but you spot towers in the distance-");
            setTimeout(function() {
                new_message("-Shall you go inside or head for the towers?-");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='cabin()' id='cabin'>Cabin</button>";
                    document.getElementById("story").innerHTML += "<button onClick='thetowers()' id='thetowers'>Towers</button>";
                }, 600);
            }, 600);
            break;
        case "forest2":
            new_message("You travel into to forest and stumbles upon an old cabin, but you spot towers in the distance");
            setTimeout(function() {
                new_message("Shall you go inside or head for the towers?");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='cabin()' id='cabin'>Cabin</button>";
                    document.getElementById("story").innerHTML += "<button onClick='thetowers()' id='thetowers'>Towers</button>";
                }, 600);
            }, 600);
            break;
        case "cabin":
            new_message("-You walk into the cabin and find a skeleton with armor-");
            setTimeout(function() {
                new_message("-Will you take the armor or leave it?-");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='takearmor()' id='takearmor'>Take the armor</button>";
                    document.getElementById("story").innerHTML += "<button onClick='leavearmor()' id='leavearmor'>Leave the armor</button>";
                }, 600);
            }, 600);
            break;
        case "leavearmor":
            new_message("-You leave the armor and search the cabin-");
            setTimeout(function() {
                new_message("-You find nothing and leave the cabin, only to spot towers in the distance-");
                setTimeout(function() {
                    new_message("-Do you venture for the towers or head for the caves?-");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='thetowers()'>Go to the towers</button>";
                        document.getElementById("story").innerHTML += "<button onClick='caves()' id='caves'>Head to the Caves</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "takearmor":
            new_message("-The skeleton awakens...-");
            setTimeout(function() {
                new_message("I see you want to take my armor");
                setTimeout(function() {
                    new_message("If you must take my armor then you have to solve this puzzle");
                    setTimeout(function() {
                        new_message("A cowboy rode into town on Friday. He stayed in town for three days and rode out on Friday. How was that possible?");
                        setTimeout(function() {
                            document.getElementById("story").innerHTML += "<button onClick='rightriddle2()' id='rightriddle2'>Horse named Friday</button>";
                            document.getElementById("story").innerHTML += "<button onClick='wrongriddle2()' id='wrongriddle2'>Time Travel</button>";
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "wrongriddle2":
            new_message("You are wrong!");
            setTimeout(function() {
                new_message("Your life shall be taken");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='again()'>Again</button>";
                }, 600);
            }, 600);
            break;
        case "rightriddle2":
            new_message("You are worthy of my gifts");
            setTimeout(function() {
                new_message("-Take my armor and my potions-");
                setTimeout(function() {
                    new_message("You take the armor and potions and leave the cabin");
                    setTimeout(function() {
                        new_message("You head onward further into the forest only to spot towers in the distance");
                        setTimeout(function() {
                            new_message("-Do you head for the towers or turn back for the caves?-");
                            setTimeout(function() {
                                document.getElementById("story").innerHTML += "<button onClick='thetowers2()' id='thetowers2'>Go to the Towers</button>";
                                document.getElementById("story").innerHTML += "<button onClick='caves2()' id='caves2'>Head to the Caves</button>";
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "thetowers":
            new_message("-You continue onwards to the towers-");
            setTimeout(function() {
                new_message("-You near an open gate, only to hear an alarm-");
                setTimeout(function() {
                    new_message("-What do you do?-");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='leave()' id='leave'>Leave</button>";
                        document.getElementById("story").innerHTML += "<button onClick='goinside()' id='goinside'>Head Inside</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "thetowers2":
            new_message("You continue onwards to the towers");
            setTimeout(function() {
                new_message("You near an open gate, only to hear an alarm");
                setTimeout(function() {
                    new_message("What do you do?");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='leave()' id='leave'>Leave</button>";
                        document.getElementById("story").innerHTML += "<button onClick='goinside()' id='goinside'>Head Inside</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "thetowers3":
            new_message("You continue onwards to the towers");
            setTimeout(function() {
                new_message("You near an open gate, only to hear an alarm");
                setTimeout(function() {
                    new_message("What do you do?");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='leave()' id='leave'>Leave</button>";
                        document.getElementById("story").innerHTML += "<button onClick='goinside()' id='goinside'>Head Inside</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "leave":
            new_message("-As you turn to head back, the path disappears-");
            setTimeout(function() {
                new_message("-Do you enter or go around towers?-");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='goinside1()' id='goinside1'>Head Inside</button>";
                    document.getElementById("story").innerHTML += "<button onClick='backway()' id='backway'>Go Around</button>";
                }, 600);
            }, 600);
            break;
        case "leave1":
            new_message("-As you turn to head back, the path disappears-");
            setTimeout(function() {
                new_message("-Do you enter or go around towers-");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='goinside1()' id='goinside1'>Head Inside</button>";
                    document.getElementById("story").innerHTML += "<button onClick='backway()' id='backway'>Go Around</button>";
                }, 600);
            }, 600);
            break;
        case "leave2":
            new_message("-As you turn to head back, the path disappears-");
            setTimeout(function() {
                new_message("-Do you enter or go around towers?-");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='goinside1()' id='goinside1'>Head Inside</button>";
                    document.getElementById("story").innerHTML += "<button onClick='backway()' id='backway'>Go Around</button>";
                }, 600);
            }, 600);
            break;
        case "leave3":
            new_message("-As you turn to head back, the path disappears-");
            setTimeout(function() {
                new_message("-Do you enter or go around towers?-");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='goinside1()' id='goinside1'>Head Inside</button>";
                    document.getElementById("story").innerHTML += "<button onClick='backway()' id='backway'>Go Around</button>";
                }, 600);
            }, 600);
            break;
        case "goinside":
            new_message("Let's do this then");
            setTimeout(function() {
                new_message("The alarm blares louder and faster");
                setTimeout(function() {
                    new_message("Alright, this is my last chance to get out");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='godeeper1()' id='godeeper1'>Go Farther</button>";
                        document.getElementById("story").innerHTML += "<button onClick='leave3()' id='leave3'>Leave</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "goinside1":
            new_message("Let's do this then");
            setTimeout(function() {
                new_message("The alarm blares louder and faster");
                setTimeout(function() {
                    new_message("Alright, this is my last chance to get out");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='godeeper()' id='godeeper'>Go Farther</button>";
                        document.getElementById("story").innerHTML += "<button onClick='leave1()' id='leave1'>Leave</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "backway":
            new_message("-You head around the gigantic building only to find a single metal door-");
            setTimeout(function() {
                document.getElementById("story").innerHTML += "<button onClick='seesdoor()' id='seesdoor'>Open It</button>";
                document.getElementById("story").innerHTML += "<button onClick='leave2()' id='leave2'>Leave</button>";
            }, 600);
            break;
        case "seesdoor":
            new_message("-Once inside, you enter a hanger with a fighter class personal ship-");
            setTimeout(function() {
                document.getElementById("story").innerHTML += "<button onClick='fightership()' id='fightership'>Enter the Ship</button>";
            }, 600);
            break;
        case "godeeper":
            new_message("Let's go deeper");
            setTimeout(function() {
                new_message("-You eventually enter a hanger, only to find a small cargo ship-");
                document.getElementById("story").innerHTML += "<button onClick='oneship()' id='oneship'>Enter the Ship</button>";
            }, 600);
            break;
        case "godeeper1":
            new_message("-Let's go deeper-");
            setTimeout(function() {
                new_message("-You eventually enter a hanger, only to find a small cargo ship-");
                document.getElementById("story").innerHTML += "<button onClick='oneship()' id='oneship'>Enter the Ship</button>";
            }, 600);
            break;
        case "fightership":
            ship = 2;
            new_message("-You find four creatures held in cages in the cargo hold-");
            setTimeout(function() {
                new_message("-Their names are etched on collars that seem to be counting down-");
                setTimeout(function() {
                    new_message("-You only have enough time to free one of them-");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='zonke()' id=zonke'>Zonke</button>";
                        document.getElementById("story").innerHTML += "<button onClick='ganya()' id=ganya'>Ganya</button>";
                        document.getElementById("story").innerHTML += "<button onClick='senzo()' id=senzo'>Senzo</button>";
                        document.getElementById("story").innerHTML += "<button onClick='dabuka()' id=dabuka'>Dabuka</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "oneship":
            ship = 1;
            new_message("-You find four creatures held in cages in the cargo hold-");
            setTimeout(function() {
                new_message("-Their names are etched on collars that seem to be counting down-");
                setTimeout(function() {
                    new_message("-You only have enough time to free one of them-");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='zonke()' id='zonke'>Zonke</button>";
                        document.getElementById("story").innerHTML += "<button onClick='ganya()' id='ganya'>Ganya</button>";
                        document.getElementById("story").innerHTML += "<button onClick='senzo()' id='senzo'>Senzo</button>";
                        document.getElementById("story").innerHTML += "<button onClick='dabuka()' id='dabuka'>Dabuka</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "zonke":
            new_message("*cluck cluck cluck* - Zonke");
            setTimeout(function() {
                new_message("I know, we have to go");
                setTimeout(function() {
                    new_message("I'm sorry uhhhhh dabuka, ganya, anddddddddd senzo");
                    setTimeout(function() {
                        new_message("*CLUCK CLUCK CLUCK* - dabuka, ganya, and senzo");
                        setTimeout(function() {
                            new_message("I don't have time to save all of you though!");
                            setTimeout(function() {
                                document.getElementById("story").innerHTML += "<button onClick='savemore()' id='savemore'>Try and save more?</button>";
                                document.getElementById("story").innerHTML += "<button onClick='leaveugandans()' id='leaveugandans'> Leave the creatures</button>";
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;

        case "leaveugandans":
            new_message("You decide to leave the rest and take the one you chose");
            setTimeout(function() {
                new_message("You run towards the ship with your companion in your arms, he is quite soft and very obese.");
                setTimeout(function() {
                    new_message("You get in the ship and fly away...");
                    setTimeout(function() {
                        new_message("Enemy ships are inbound");
                        setTimeout(function() {
                            new_message("Your companion starts clucking rapidly");
                            setTimeout(function() {
                                new_message("Do you take them on or tell your companion to be quiet");
                                setTimeout(function() {
                                    document.getElementById("story").innerHTML += "<button onClick='focusfighters()' id='focusfighters'> Ignore him</button>";
                                    document.getElementById("story").innerHTML += "<button onClick='shutup()' id='shutup'>Tell your companion to be quiet</button>";
                                }, 600);
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "shutup":
            new_message("You tell your companion to be quiet");
            setTimeout(function() {
                new_message("Your companion stops");
                setTimeout(function() {
                    new_message("And ejects himself from the ship");
                    setTimeout(function() {
                        new_message("As he is floating in space, he is 'sploded out of the air");
                        setTimeout(function() {
                            new_message(dust + "comes from the explosion");
                            setTimeout(function() {
                                new_message("You think about avenging" + companion);
                                setTimeout(function() {
                                    document.getElementById("story").innerHTML += "<button onClick='avenge()' id='avenge'>Avenge him</button>";
                                    document.getElementById("story").innerHTML += "<button onClick='finish()' id='finish'>Don't avenge him and safe yourself</button>";
                                }, 600);
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "finish":
            new_message("You safe yourself and leave");
            setTimeout(function() {
                new_message("You finished the game and got the bad ending");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='intro()' id='intro'>Play Again</button>";
                }, 600);
            }, 600);
            break;
        case "savemore":
            new_message("In your act of courage you were...");
            setTimeout(function() {
                new_message("not able to save any more and got everyone killed including you");
                setTimeout(function() {
                    new_message("*slow clap*");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='thetowers()' id='thetowers'>Restart</button>";
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "leaveugandans":
            new_message("You decide to leave the rest and take the one you chose");
            setTimeout(function() {
                new_message("You run towards the ship with your companion in your arms, he is quite soft and very obese.");
                setTimeout(function() {
                    new_message("You get in the ship and fly away...");
                    setTimeout(function() {
                        new_message("Enemy ships are inbound");
                        setTimeout(function() {
                            new_message("Your companion starts clucking rapidly");
                            setTimeout(function() {
                                new_message("Do you take them on or tell your companion to be quiet");
                                setTimeout(function() {
                                    document.getElementById("story").innerHTML += "<button onClick='focusfighters()' id='focusfighters'> Ignore him</button>";
                                    document.getElementById("story").innerHTML += "<button onClick='shutup()' id='shutup'>Tell your companion to be quiet</button>";
                                }, 300);
                            }, 300);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
            break;
        case "shutup":
            new_message("You tell your companion to be quiet");
            setTimeout(function() {
                new_message("Your companion stops");
                setTimeout(function() {
                    new_message("And ejects himself from the ship");
                    setTimeout(function() {
                        new_message("As he is floating in space, he is 'sploded out of the air");
                        setTimeout(function() {
                            new_message(dust + " comes from the explosion");
                            setTimeout(function() {
                                new_message("You think about avenging " + companion);
                                setTimeout(function() {
                                    document.getElementById("story").innerHTML += "<button onClick='avenge()' id='avenge'>Avenge him</button>";
                                    document.getElementById("story").innerHTML += "<button onClick='finish()' id='finish'>Don't avenge him and safe yourself</button>";
                                }, 300);
                            }, 300);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
            break;

        case "avenge":
            new_message("You decide to avenge " + companion);
            setTimeout(function() {
                new_message("You fight the enemies");
                setTimeout(function() {
                    new_message("You are outgunned and die");
                    setTimeout(function() {
                        new_message("You are seen as a hero to the ugandans");
                        setTimeout(function() {
                            new_message("You finished the game and got the good ending");
                            setTimeout(function() {
                                document.getElementById("story").innerHTML += "<button onClick = 'intro()' id= 'intro'> Play Again</button>";
                            }, 300);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);

            break;

        case "finish":
            new_message("You safe yourself and leave");
            setTimeout(function() {
                new_message("You finished the game and got the bad ending");
                setTimeout(function() {
                    document.getElementById("story").innerHTML += "<button onClick='intro()' id='intro'>Play Again</button>";
                }, 300);
            }, 300);
            break;

        case "savemore":
            new_message("In your act of courage you were...");
            setTimeout(function() {
                new_message("not able to save any more and got everyone killed including you");
                setTimeout(function() {
                    new_message("*slow clap*");
                    setTimeout(function() {
                        document.getElementById("story").innerHTML += "<button onClick='thetowers()' id='thetowers'>Restart</button>";
                    }, 300);
                }, 300);
            }, 300);
            break;
        case "dabuka":
            new_message("*cluck cluck cluck* - Dabuka");
            setTimeout(function() {
                new_message("I know, we have to go");
                setTimeout(function() {
                    new_message("I'm sorry uhhhhh zonke, ganya, anddddddddd senzo");
                    setTimeout(function() {
                        new_message("*CLUCK CLUCK CLUCK* - zonke, ganya, and senzo");
                        setTimeout(function() {
                            new_message("I don't have time to save all of you though!");
                            setTimeout(function() {
                                document.getElementById("story").innerHTML += "<button onClick='savemore()' id=savemore>Try and save more?</button>";
                                document.getElementById("story").innerHTML += "<button onClick='leaveugandans()' id=leaveugandans> Leave the creatures</button>";
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "senzo":
            new_message("*cluck cluck cluck* - senzo");
            setTimeout(function() {
                new_message("I know, we have to go");
                setTimeout(function() {
                    new_message("I'm sorry uhhhhh zonke, ganya, anddddddddd dabuka");
                    setTimeout(function() {
                        new_message("*CLUCK CLUCK CLUCK* - zonke, ganya, and dabuka");
                        setTimeout(function() {
                            new_message("I don't have time to save all of you though!");
                            setTimeout(function() {
                                document.getElementById("story").innerHTML += "<button onClick='savemore()' id=savemore>Try and save more?</button>";
                                document.getElementById("story").innerHTML += "<button onClick='leaveugandans()' id=leaveugandans> Leave the creatures</button>";
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "ganya":
            new_message("*cluck cluck cluck* - ganya");
            setTimeout(function() {
                new_message("I know, we have to go");
                setTimeout(function() {
                    new_message("I'm sorry uhhhhh zonke, dabuka, anddddddddd senzo");
                    setTimeout(function() {
                        new_message("*CLUCK CLUCK CLUCK* - zonke, dabuka, and senzo");
                        setTimeout(function() {
                            new_message("I don't have time to save all of you though!");
                            setTimeout(function() {
                                document.getElementById("story").innerHTML += "<button onClick='savemore()' id=savemore>Try and save more?</button>";
                                document.getElementById("story").innerHTML += "<button onClick='leaveugandans()' id=leaveugandans>Leave the creatures</button>";
                            }, 600);
                        }, 600);
                    }, 600);
                }, 600);
            }, 600);
            break;
        case "focusfighters":
            new_message("*cluck cluck cluck* - " + companion);
            setTimeout(function() {
                new_message("I know, we have to do this");
            }, 10);
            break;
        case "senzo":
            new_message("*cluck cluck cluck* - Senzo");
            setTimeout(function() {
                new_message("your instanly get outgunned");
                setTimeout(function() {
                    new_message("you have no choic and press the eject button");
                    setTimeout(function() {
                        new_message("it ejects " + companion + " and you know you are going to die");
                        setTimeout(function() {
                            new_message("you hope that you provided a good future for you companion as he flies away in the metal pod");
                            setTimeout(function() {
                                new_message("good bye cruel world");
                                setTimeout(function() {
                                    new_message("you die with the, sadly, best ending");
                                }, 300);
                            }, 300);
                        }, 300);
                    }, 300);
                }, 300);
            }, 300);
break;
case "senzo":
    new_message("*cluck cluck cluck* - Senzo");
    setTimeout(function() {
        new_message("I know, we have to go");
        setTimeout(function() {
            new_message("I'm sorry uhhhhh zonke, ganya, anddddddddd debuka");
            setTimeout(function() {
                new_message("*CLUCK CLUCK CLUCK* - zonke, ganya, and debuka");
                setTimeout(function() {
                    new_message("I don't have time to save all of you though!");
                    setTimeout(function() {
                        new_message("--- TO BE CONTINUED ---");
                    }, 300);
                }, 300);
            }, 300);
        }, 300);
    }, 300);
    break;

    }
    }