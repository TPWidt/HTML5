
function Game() {
        var inventory = {
            FreezerKey: 0,
            Regulator: 0,
            Ramen: 0,
            Clothes: 0,
            Gun: 0,
            GloveBoxKey: 0,
            Shades: 0,
            Sia: 0,
            Medications: 0,
            MentalInstabilizer: 0,
            Bullets: 30,
            Currency: 125,
            MetaGauntlet: 0,
            SolarCannon: 0,
            AutoPistol: 0,
            Grenade: 0,
            Plasmicus: 0,
        }
        var playerstats = {
            PlayerHP: 300,
            PlayerSP: 100,
            PlayerMP: 100,
        }
        var unlockablelocations = {
            TheRiverways: 0,
            CableChecked: 0,
        }

        function Bedroom(){
            var bedroomvar = prompt("Your eyes open from a restless sleep. Your head burns with the feeling of a slight hangover. The heat radiates from your temperfoam bed and your back has a disgusting feel of sweat and dirt. You clearly haven't taken a shower in a while, and your bedroom is an absolute mess with scattered clothes and items all over the place. Your mind is scattered and unmotivated as to what you will do today. \n -go to your computer \n -leave the bedroom \n -get clothed \n -take your medications").toLowerCase();
    
            if(bedroomvar == "go to your computer" || bedroomvar == "computer" || bedroomvar == "go to computer" || bedroomvar == "move to computer" || bedroomvar == "interact with computer" || bedroomvar == "use the computer" || bedroomvar == "check out computer" || bedroomvar == "check computer"){
                alert("The computer has remained on since you last fell asleep. The desktop is filled with icons and pictures of miscellaneous programs. There are so many programs open that were opened so long ago almost none of them have any relevance to you. The computer isn't worth looking at.");
                Bedroom();
            }
            
            if(bedroomvar == "get clothed" || bedroomvar == "clothes" || bedroomvar == "put on clothes" ||bedroomvar == "interact with clothes" ||bedroomvar == "wear clothes"){
                alert ("Your clothes to which you wore yesterday still fit nicely. You feel slightly better now with them on, but they are still rugged and dirty and seriously need a clean. You feel your gun holstered at the waist. Its fully loaded.");
                inventory.Clothes ++;
                inventory.Gun ++;
                alert ("You got the gun!");
                Bedroom();
            }
            
            if(bedroomvar == "take medications" || bedroomvar == "get medicated" || bedroomvar == "use medications" || bedroomvar == "take pills" || bedroomvar == "use pills" || bedroomvar == "swallow pills"){
                alert ("You swallow down the thick, hard blue pill marked for Saturday. The effects of the pill work almost instantly, your hangover fading away very quickly and you feel significantly better than before.");
                playerstats.PlayerHP += 50;
                inventory.Medications ++;
                alert  ("You gained 50 health and lost your hang over.");
                Bedroom();
            }
            
            if(bedroomvar == "leave the bedroom" || bedroomvar == "exit the room" || bedroomvar == "north" || bedroomvar == "move forward" || bedroomvar == "go out of bedroom"){
                Kitchen();
            }
            
            if(bedroomvar == "sia" && Sia == 1){
                alert  ("...You haven't really slept well since that night, have you?");
                Bedroom();
            }
            if(bedroomvar == "go back to sleep" || bedroomvar == "go to bed" || bedroomvar == "sleep" || bedroomvar == "go to sleep" || bedroomvar == "sleep" || bedroomvar == "go to bed and sleep"){
                alert = "you fall over onto the already hot bed and try to sleep. After about half an hour of lying, you finally enter a deep sleep. You reawaken about twelve hours later.";
                playerstats.PlayerHP == 300;
                playerstats.PlayerMP == 100;
                playerstats.PlayerSP == 100;
                alert  ("All of your Health, Mental Stability, and Strength points have been brought back to their maximum values!");
                Bedroom();
            }
            }
        function Kitchen () {
            var kitchenvar = prompt("The Kitchen is an absolute mess. The sink is full of dirty dishes and the trash hasn't been taken out in weeks. Theres a spilt cup of Ramen on the counter and the door to the garage is ajar. Theres a large collar device nearby the sink with a green blinking light on its stand. Its charged and ready for use.").toLowerCase();
        
            if(kitchenvar == "eat ramen" || kitchenvar == "consume ramen" || kitchenvar == "eat the ramen" || kitchenvar == "devour the ramen") {
                alert("What are you insane? That Ramen has got to be months old. Theres fungus growing on it! Eating it makes you seriously sick and you throw it up as fast as you eat it. Disgusting. Now theres vomit on the floor. Nice job.");
                playerstats.PlayerSP -= 25;
                playerstats.PlayerMP -=10;
                inventory.Ramen ++;
                alert  ("you lost 25 strength points and 10 Mental Stability points.");
                Kitchen();
            }
            
            if(kitchenvar == "take collar device" || kitchenvar == "take blood regulator" || kitchenvar == "take large collar device" || kitchenvar == "use collar device" || kitchenvar == "use large collar device"){
                alert("Its a blood regulator. You have had heart problems before, so this device is necessary for your survival. Using magnetism from the iron boron augments in your shoulders and neck, the device floats freely around your neck.");
                playerstats.PlayerSP += 50;
                inventory.Regulator ++;
                alert  ("Your strength points increased by 50!");
                Kitchen();
            }
        
            if(kitchenvar == "go to garage" || kitchenvar == "go to ajar door" || kitchenvar == "go to open door" || kitchenvar == "enter ajar door" || kitchenvar == "enter garage door") {
                Garage();
            }
            if(kitchenvar == "go to bedroom" || kitchenvar == "go back to bedroom" || kitchenvar == "return to bedroom" || kitchenvar == "go back"){
                Bedroom();
            }
            if(kitchenvar == "sia" && Sia == 1){
                alert  ("You know kitchens are for cooking, right? You can't always just resort to takeout. But hey, you do you man.");
                Kitchen();
            }
        }
        function Garage () {
            var garagevar = prompt("The garage is very small and houses a bright red Ferrari Countach. It was a gift from someone.").toLowerCase();
                if(garagevar == "enter car" || garagevar == "enter ferrari countach" || garagevar == "go into car" || garagevar == "enter the ferrari countach"); {
                    Car();
                }
                if(garagevar == "go to kitchen" || garagevar == "go back to kitchen" || garagevar == "kitchen" || garagevar == "go back" || garagevar == "return to kitchen");{
                    Kitchen();
                }
                if(garagevar == "sia" && Sia == 1){
                    alert  ("Hah! Not even a dent on my old girl. You really kept her in good shape didn't you? You were a really good person to keep track of it.");
                    Garage();
                }
            }
        function Car () {
            var carvar = prompt("The inside of the car is warmer than the garage. The drivers seat is comfortable, and there are a pair of shades hanging from the window. The glovebox has been sealed ever since you came into possession with the car. The key is still in the ignition. Miami is now open to you. You can travel to these locations; \n The Hub \n City Hall \n City Streets").toLowerCase();
                if(carvar == "the hub"){
                TheHub();
                }
                if(carvar == "city hall"){
                CityHall();
                }
                if(carvar == "city streets"){
                CityStreets();
                }
                if(carvar == "exit car"){
                Garage();
                }
                if(carvar == "take shades" || carvar == "take the sahdes" || carvar == "use shades" || carvar == "put on the shades" || carvar == "put on shades" || carvar == "wear shades" || carvar == "wear the shades");{
                alert  ("You put on the shades, a wave of bad-assery waving over you. Hell yeah.");
                playerstats.PlayerMP += 50;
                inventory.Shades ++;
                alert  ("You acquired the shades and gained 50 Mental Stability points.");
                Car();
                }
                if(carvar == "use key" || carvar == "open glovebox" && GloveBoxKey == 1); {
                    alert ("You slip the key in and the box opens perfectly. The box opens revealing an object looking like a suitcase. Picking it up, you accidentally hit a trigger on its side and the object transforms into a massive assault rifle!");
                    inventory.SolarCannon ++;
                    alert ("You got the Solar Cannon!");
                    alert ("An item of unknown origin, the Solar Cannon is a massive weapon capable of doing unholy things to its targets. Use it wisely.");
                    Car();
                }
            }
        function CityStreets () {
            var cityStreetsvar = prompt ("Welcome to the city! You stand at the sidewalk by your car. You can listen in to what people are saying to find out what is happening here.").toLowerCase 
            if (cityStreetsvar == "listen" || cityStreetsvar == "eavesdrop")
            alert ("Listening closely, you hear:")
            var listening = ["Did you hear about the Falchion tower? They had a power outage and some personnel went missing!","Unseratos had another storm a while ago. That place is a mess.","Did you hear about Epsilon division? Their commander got killed!","I don't know, maybe theres something at the house.","Yeah. I think theres something out there.","The trip to New York is happening next week. See you then!","I got my tires replaced by that uh... What was that place called? Expiravit? Man, That place just makes me really uncomfortable.","Whats the deal with this guy? He looks like he hasn't slept in forever.","I saw the doctor, they said nothing was wrong!","Man, these Florida guys are really getting out of hand.","I hear the 8Box theater is closing soon. Really unfortunate.","Hey, do you know where my simstim went?","What is this Gom Jabbar thing everybody is talking about?","Howdy! Live long and prosper!","Hey Lance! Morning!","Evening Officer.","No way! An Outrunner! I thought all of you guys got killed a long time ago!","Hey, you look familiar. Have we met before?","Some landing crew went missing on Fuscious a little while back. I'd really hate to be those guys.","Nice weather today huh?","Where is Izzy?","JASON!?","JAAAAAASON!?","SHAAAAAAAUN!!!!","SHON!","SHAAAAAUUUUUUUUUUN!!!","For a brief moment, there is genuine silence.","CAAAAAAARL!","Howdy friend. Looking for trouble?","Dum de dum de dum..."]
                alert(listening[Math.floor(Math.random()*27)])
            CityStreets();
        }
        function CityHall () {
            var cityHallvar = prompt("Welcome to City Hall! Being an Outrunner, you are open to a selective archive of items. Choose whatever you need! You currently have " +inventory.Currency+ "$! Here are the items on sale: \n Ammo: 10$ \n Semi Automatic Pistol: 70$ \n Grenade: 100$ \n Plasmicus: 250$").toLowerCase();
            if(cityHallvar == "ammo" && inventory.currency >= 10); {
            confirm ("Are you sure you want to buy this? You have " +inventory.Currency+ "$.")
            inventory.Bullets += 50;
            inventory.Currency -= 10;
            alert ("You got some more ammo! Ammo is universal to all weapons.")
                CityHall();
            }
            if(cityHallvar == "semi automatic pistol" || cityHallvar == "automatic pistol" || cityHallvar == "auto pistol" || cityHallvar == "pistol" && inventory.currency >= 70); {
            inventory.AutoPistol ++;
            inventory.Currency -= 70;
            playerstats.PlayerMP += 25;
            alert ("You got the auto Pistol!");
            alert ("Its the same kind of pistol you already have, but now you can dual wield your pistols!");
            alert ("You feel so much cooler now! You gain 25 mental stability points.")
                CityHall();    
            }
            if(cityHallvar == "grenade" && inventory.Currency >= 100); {
            inventory.Grenade += 3;
            inventory.Currency -= 100;
            playerstats.PlayerMP -= 5;
            alert ("You got a grenade!");
            alert ("highly explosive, Grenades are to be taken highly serious, and you stress even when holding one.")
            alert ("You lost 5 Mental Stability points from the stress.")
                CityHall();
            }
            if(cityHallvar == "plasmicus" && inventory.Currency >= 250); {
            inventory.Plasmicus ++;
            inventory.Currency -= 250;
            alert ("You got Plasmicus!")
            alert ("Plasmicus is a large ordnance weapon capable of vaporizing enemies. Use it wisely.")
                CityHall();
            }
        }
        function TheHub () {
            var theHubvar = prompt("You now stand to the doorway to the hub. The large metal doorway has been broken into and busted. There is rust around it, and the door is wide enough for you to go into.").toLowerCase();
                if(theHubvar == "enter the door" || theHubvar == "enter the hub" || theHubvar == "enter hub" || theHubvar == "enter doorway" || theHubvar == "enter rusty doorway" || theHubvar == "enter metal doorway" || theHubvar == "enter rusted metal doorway");{
                Lobby();
                }
                if(theHubvar == "go to car"){
                Car();
                }
                if(theHubvar == "sia" && Sia == 1);{
                alert  ("Its been a long time... hasn't it?");
                TheHub();
                }
            }
        function Lobby () {
            var lobbyvar = prompt("The Lobby area. A cool breeze comes from the outside of the open door, and there is only a way forward.").toLowerCase();
            if(lobbyvar == "move forward" || lobbyvar == "forward" || lobbyvar == "go forward" || lobbyvar == "north"){
                CentralArea();
                }
            if(lobbyvar == "go back" || lobbyvar == "move backwards" || lobbyvar == "go to previous room" || lobbyvar == "enter rusted door" || lobbyvar == "enter doorway" || lobbyvar == "go into doorway");{
                TheHub ();
                }
            if(lobbyvar == "sia" && Sia == 1);{
                alert = ("I remember those long nights where you were always stuck on your computer finding out another mystery. I always waited here. Good times.");
                Lobby ();
                }
            }
        function CentralArea() {
            var centralAreavar = prompt("The Central Area. There is another room to each direction that you could be taken to. There is; \n The Lobby Area Behind You \n A Breakroom to Your Left \n The Office Area Forwards of you \n The Database to your right \n The Graveyard upstairs").toLowerCase();
            if(centralAreavar == "backwards" || centralAreavar == "go backwards" || centralAreavar == "go to lobby area" || centralAreavar == "go to lobby" || centralAreavar == "lobby"){
                Lobby ();
                }
            if(centralAreavar == "left" || centralAreavar == "go to breakroom" || centralAreavar == "breakroom" || centralAreavar == "go to the left" || centralAreavar == "go to breakroom area");{
                BreakRoom();
                }
            if(centralAreavar == "forwards" || centralAreavar == "office" || centralAreavar == "go to office" || centralAreavar == "move forward" || centralAreavar == "go forward");{
                Office();
                }
            if(centralAreavar == "right" || centralAreavar == "database" || centralAreavar == "move right" || centralAreavar == "go to database" || centralAreavar == "go to database area");{
                Database();
                }
            if(centralAreavar == "upwards" || centralAreavar == "graveyard" || centralAreavar == "move upwards" || centralAreavar == "go to graveyard" || centralAreavar == "go to graveyard area");{
                Graveyard();
                }
            }
        function Graveyard() {
            var graveyardvar = prompt("The Graveyard. Its strangely silent and quiet. There is nothing here except a large granite slate in front of you with four names engraved on it.").toLowerCase();
            if(graveyardvar == "read slate" || graveyardvar == "read granite slate" || graveyardvar == "look at granite slate" || graveyardvar == "look at slate" || graveyardvar == "view granite slate");{
                alert  ("The tablet has four names and information placed onto it. Enscribed on it reads; \n HERE LIES THE HONORABLE WARRIORS OF THE OUTRUNNERS:");
                alert  ("BROCK PORTSMUTH: 1944 - 1987. MAY YOU REST IN PEACE.");
                alert  ("SIA ANDERSEN: 1965 - 1987. MAY YOU REST IN PEACE.");
                alert  ("MOLLY WARBURTON: 1957 - 1987. MAY YOU REST IN PEACE.");
                alert  ("JASON WALKER: 1953 - 1987. MAY YOU REST IN PEACE.");
                alert  ("you feel a rush of nostalgia and memories. You don't want to be here anymore.")
                Graveyard ();
                }
            if(graveyardvar == "Meta Gauntlet" || graveyardvar == "meta gauntlet" || graveyardvar == "use meta gauntlet" && MetaGauntlet == 1);{
                alert = "You reach your hand out and activate the Meta Gauntlet. It glows and you can hear the hum of radiowaves activate. The large granite slate clicks and opens, revealing a deep passageway going into an abyss.";
                unlockablelocations.TheRiverways ++;
                alert = "You unlocked the Riverways!";
                Graveyard();
            }
            if(graveyardvar == "sia" && Sia == 1);{
                alert  ("...");
                alert  ("...");
                alert  ("...");
                alert  ("I don't want to be here anymore.");
                alert  ("Please leave.");
                }
            if(graveyardvar == "enter riverways" || graveyardvar == "enter passageway" || graveyardvar == "enter deep passageway" || graveyardvar == "enter abyss" || graveyardvar == "go to riverways" || graveyardvar == "enter the riverways" && TheRiverways == 1);{
                TheRiverways();
            }
            if(graveyardvar == "go back" || graveyardvar == "go downstairs" || graveyardvar == "move downstairs" || graveyardvar == "go back" || graveyardvar == "go to central area"); {
                CentralArea();
                }
            }
        function BreakRoom() {
            var breakRoomvar = prompt("The Break Room. There are some soft chairs seated around a table and supplies to make food here. The drawers are opened and food has spilled all over the floor. There really isn't anything to see.").toLowerCase();
            if(breakRoomvar == "go back" || breakRoomvar == "backwards" || breakRoomvar == "back" || breakRoomvar == "lobby" || breakRoomvar == "return"); {
                CentralArea();
            }
            if(breakRoomvar == "sia" && Sia == 1);{
                alert  ("Brock always acted weird when he was alone in here. He always kept the drawer to the freezer locked. I don't know where he put the key...");
                BreakRoom();
            }
            if(breakRoomvar == "open freezer with key" || breakRoomvar == "open freezer" || breakRoomvar == "use key on freezer" || breakRoomvar == "key on freezer" || breakRoomvar == "Freezer" && Freezerkey == 1);{
                alert  ("The key fits and the lock opens! Now with access to the freezer, you have access to whats inside.");
                alert  ("inside is a large gauntlet. Picking it up you wrap it around your forearm and turn it on. You feel its power surge through you and its capabilities are open to you.");
                alert  ("you now have the Meta Gauntlet!!");
                alert  ("use the command Meta Gauntlet in a room to see if it can do anything or say use Meta Gauntlet on _________ to see what it can do!");
                inventory.MetaGauntlet ++;
            }
        }
        function Office() {
            var officevar = prompt("The Office area. Theres a desk here with supplies and a busted computer. Theres a printer in the back and whiteboard attached to the wall. You notice a small sticky note sticking out of the stack of papers...").toLowerCase();
            if(officevar == "check sticky note" || officevar == "check stack of papers" || officevar == "look at sticky note" || officevar == "observe sticky note" || officevar == "pick up sticky note" || officevar == "read sticky note"); {
                alert  ("picking up the sticky note, you read a rushed writing on its surface, written in a dull pencil.");
                alert  ("LANCE-- \n I AM ALIVE--- \n TURN ON THE POWER--- \n BRING ME BACK--- \n IMPLANT ME INTO YOUR BRAIN--- \n HURRY--- \n NOT MUCH TIME");
                Office();
            }
            if(officevar == "go back" || officevar == "leave office" || officevar == "back" || officevar == "return" || officevar == "go to central area" || officevar == "go to last room"); {
                CentralArea();
            }
            if(officevar == "sia" && Sia == 1); {
                alert ("I never understood why this room was here. When the place was built, this was just an empty room. There was a patch of unfinished carpet in the corner however. I wonder if anything is there.");
                Office();
            }
            if(officevar == "tear up carpet" || officevar == "check carpet" || officevar == "go to carpet" || officevar == "inspect carpet" || officevar == "rip carpet" || officevar == "open carpet"); {
                alert ("You bend down and notice a piece of unfinished carpet in the corner of the room. Theres something that slightly glimmers in it. You move some desks out of the way and rip open the carpet. You find a silver key here!");
                inventory.FreezerKey ++;
                alert ("You got the freezer key!");
                Office();
            }
        }
        function Database(){
            var databasevar = prompt("The Database. You spent most of your time here as an Outrunner, and a lot of your work has been left here. A large computer is placed in the center of the room with a massive monitor built into the wall. The computer has long since been turned on, and is coated in dust. Theres a shelf of Floppy discs all lazily put together.").toLowerCase();
            if(databasevar == "turn on computer" || databasevar == "activate computer" || databasevar == "use computer" || databasevar == "go to computer" || databasevar == "interact with computer"); {
               Computer();
            }
            if(databasevar == "find cable" || databasevar == "locate cable" || databasevar == "cable" || databasevar == "look for cable" || databasevar == "search for cable");{
                alert  ("there is a thick unplugged cable on the floor. One side is connected into the computer itself...");
                alert  ("getting on your knees and looking at it, theres a tag on it that reads: TRY ME");
                unlockablelocations.CableChecked ++;
                Database();
            }
            if(databasevar == "try cable" || databasevar == "insert cable" || databasevar == "use cable" || databasevar == "take cable" && CableChecked == 1 && Regulator == 1);{
                alert  ("The only thing you can see that the cable could plug into is your Regulator. Plugging the cable into it, Spikes launch from the regulator into your neck. You try to scream, but your throat becomes so compact nothing comes out. You faint and fall onto the floor.");
                alert  ("");
                alert  ("");
                alert  ("");
                alert  (".");
                alert  ("..");
                alert  ("...");
                alert  ("...");
                alert  ("... Lance?");
                alert  ("Hey! Wake up!");
                alert  ("Did it work?");
                alert  ("Did you finally find the Revenant Program?");
                alert  ("The voice sounds so extremely familiar. Its been a long time since you heard it... Its Sia!");
                alert  ("I get this is a bit weird to have this happen, but I'm glad it worked in the long run...");
                alert  ("Ever since I died, I uploaded my consciousness into the Database computer here. I think the regulator plugged the file into your Neural Capacitor in your brain.");
                alert  ("If you need anything, I'm here!");
                alert  ("You got Sia!");
                alert  ("Sia is now an AI plugged into your brain. If you ever need any advice on anything, use the command 'Sia' In any room.");
                inventory.Sia ++;
            }
        }
        function Computer(){
            var computervar = prompt("Turning on the computer, it click and the fans whirr active. The low pixel icons appear one by one. They show: \n CASES \n CRIMINAL RECORDS \n PHOTOS \n REVENANT PROGRAM").toLowerCase();
            if(databasevar == "cases");{
                alert  ("The cases folder shows thousands of cases from over five years ago. Hundreds stocked up after 1987 with no answer to any of them.");
                Computer();
            }
            if(databasevar == "criminal records");{
                alert = "There are many different blinking record that appear. Each one has a photo attached to it in such a low quality its hard to tell the face. Each one looks like a criminal or some crook in a costume.";
                Computer();
            }
            if(databasevar == "photos");{
                alert = "Many photos appear, most of them are of other Outrunners, but there are some every now and then of newspaper stories.";
            }
            if(databasevar == "revenant program"); {
                alert  ("You've never seen this program before... What is it?");
                alert  ("It clicks the monitor off for a time, and reappears with a new icon you've never seen before. It opens and reads:");
                alert  ("INSERT CABLE TO HOST");
                alert  ("what does it mean?");
                Computer();
            }
            if(databasevar == "leave computer" || databasevar == "exit computer" || databasevar == "get off computer" || databasevar == "go back");{
                Database();
            }
        }
        function Riverways(){
            var rivervar = prompt("Going beyond the tombstone, you travel down a very dark and long pathway. A slick, unknown brown substance is splattered all over the walls and the walls are torn with patches of concrete missing.").toLowerCase();
            if(rivervar == "sia" && Sia == 1); {
                alert ("I don't know what you want from me... I don't know what any of this place is...");
            }
            if(rivervar == "reach into wall" || rivervar == "do something stupid"); {
                alert ("you look into the deep wall concrete hole in the wall. There isn't much in it until it becomes pure concrete, but somebody has chiseled away at something here, and opening inside. You feel an object inside, and pulling your hand out, you see a car key.");
                inventory.GloveBoxKey ++;
                alert ("You got the mysterious key!");
                Riverways();
            }
            if(rivervar == "continue" || rivervar == "move forward" || rivervar == "forward" || rivervar == "move" || rivervar == "north"); {
                alert ("I remember something.");
                Riverways2();
            }
        }
        function Riverways2(){
            var rivervar2 = ("Its faint, but its still in my mind somewhere.").toLowerCase();
            if (rivervar2 == "continue" || rivervar2 == "move forward" || rivervar2 == "forward" || rivervar2 == "move" || rivervar2 == "north"); {
                alert ("It didn't happen too long ago, just about three or four years ago.");
                Riverways3 ();
            }
        }
        function Riverways3() {
            var rivervar3 = prompt("There was a lot of rain.").toLowerCase();
            if (rivervar3 == "continue" || rivervar3 == "move forward" || rivervar3 == "forward" || rivervar3 == "move" || rivervar3 == "north"); {
                alert ("All five of us were separated. We couldn't even see five feet in front of us.");
                Riverways4 ();
            }
        }
        function Riverways4() {
            var rivervar4 = prompt("But by the time I found the others, They already lost too much blood.").toLowerCase();
            if (rivervar4 == "continue" || rivervar4 == "move forward" || rivervar4 == "forward" || rivervar4 == "move" || rivervar4 == "north"); {
                alert ("And I was too early, insomuch that their killer was still there.");
                Riverways5();
            }
        }
        function Riverways5() {
            var rivervar5 = prompt("It was raining so hard, I couldn't even see him.").toLowerCase();
            if (rivervar5 == "continue" || rivervar5 == "move forward" || rivervar5 == "forward" || rivervar5 == "move" || rivervar5 == "north"); {
                alert ("They grabbed me from both sides and threw me to the ground.");
                Riverways6();
            } 
        }
        function Riverways6() {
            var rivervar6 = prompt("My nose broke from the impact, but I was more worried about where they put me.").toLowerCase();
            if (rivervar6 == "continue" || rivervar6 == "move forward" || rivervar6 == "forward" || rivervar6 == "move" || rivervar6 == "north"); {
                alert ("It was a pothole in the ground.");
                Riverways7();
            }
        }
        function Riverways7() {
            var rivervar7 = prompt("They held me there for what felt like hours.").toLowerCase();
            if (rivervar7 == "continue" || rivervar7 == "move forward" || rivervar7 == "forward" || rivervar7 == "move" || rivervar7 == "north"); {
                alert ("In reality, It was only for one minute.");
                Riverways8();
            }
        }
        function Riverways8() {
            var rivervar8 = prompt("They were so sloppy, they just left my body there.").toLowerCase();
            if (rivervar8 == "continue" || rivervar8 == "move forward" || rivervar8 == "forward" || rivervar8 == "move" || rivervar8 == "north"); {
                alert ("It was only six minutes until you found me.");
                Riverways9();
            }
        }
        function Riverways9() {
            var rivervar9 = prompt("I wanted to come back, but I couldn't breathe.").toLowerCase();
            if (rivervar9 == "continue" || rivervar9 == "move forward" || rivervar9 == "forward" || rivervar9 == "move" || rivervar9 == "north"); {
                alert ("I guess its time for you to find out what happens next.");
                ViperDen();
            }
        }
        function ViperDen() {
            var viperdenvar = prompt("Welcome to the Viper Den. Here was where you lost the fight. Although the area is abandoned and has been left to rot, some of its technology is still to use. A large screen in front of you reads 'THE TIME HAS COME. MAKE YOUR CHOICE.' Approaching it, a monitor has two options on its face. They read; \n FINISH THE REVENANT PROGRAM \n SELF DESTRUCT").toLowerCase();
            if (viperdenvar == "Revenant Program" || viperdenvar == "finish the revenant program" || viperdenvar == "revenant" || viperdenvar == "revenant program"); {
                var viperdenconfirm = prompt ("Are you sure you want to do that? That could end the game.").toLowerCase();
                if (viperdenconfirm == "no"); {
                    ViperDen();
                }
                if (viperdenconfirm == "yes"); {
                    alert ("You hit the button, activating the Revenant program. Large test tubes open and release horrid creations as they surround you.");
                    alert ("GAME OVER: BAD ENDING");
                    alert ("Thanks for playing! If you want to play again, refresh the page!");
                }
            }
            if (viperdenvar == "Self Destruct" || viperdenvar == "self destruct"); {
                var viperdenconfirm2 = prompt ("Are you sure you want to do that? That could end the game.").toLowerCase();
                if (viperdenconfirm2 == "no"); {
                    ViperDen();
                }
                if (viperdenconfirm == "yes"); {
                    alert ("You hit the self destruct button, and a massive alarm blares.");
                    alert ("You run back up and through the halls, trying to escape. As you jump through the gate, the Hub explodes and shoots everywhere. You reach your car in time to get to safety.")
                    alert ("Well... Its gone. But you got rid of something horrid that could have ended everything. I'm glad that you saw to that.")
                    alert ("GAME OVER: GOOD ENDING");
                    alert ("Thanks for playing! If you want to play again, refresh the page!");
                }
            }
        }
    Bedroom();
    Kitchen();
    }
Game();