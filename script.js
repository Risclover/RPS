let interVal;
let timeOut;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let result;
function computerPlay() {
    const choices = ['paladin', 'rogue', 'sorceress'];
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

$(document).ready(function() {
    $(".announcer").show();
    $(".instructions-box").show();
    $(".startbtn").show();
    $(".start").show();
    $(".start").text("Start Game");
    $(".start").click(function() {
        $(".playerbtns").show();
        $(".instructions-box").hide();
        $(".startbtn").hide();
        $(".announcer").text("Pick a dude, any dude.")
        $(".ass, .mag, .swo").bind('click', startGame);
    })
    $(".ass").click(function() {
        playerChoice = "rogue";
    })
    $(".mag").click(function() {
        playerChoice = "sorceress";
    })
    $(".swo").click(function() {
        playerChoice = "paladin";
    })

    $(".mag").hover(function() {
        $(".mag").css({
            "cursor": "pointer"
        })
    })
    $("<span class='score'></span>").prependTo($(".playerbtns"));
    $("<br><br><span class='announcer2'></span>").insertAfter($('.players'));

    function startGame() {
        computerPlay();
        $(".announcer").text(`Computer chose ${computerChoice} and Player chose ${playerChoice}.`);
        if(computerChoice === 'rogue' && playerChoice === 'rogue') {
            $(".announcer2").text(`Both rogues stand in silence and stare at each other, and neither move for a moment. Then, before Computer or Player can react, the two rogues suddenly smile, link arms, and walk off, presumably to get coffee together.`)
            $(".outcome").html("<img src='images/handshake.png' class='rps'>");
        } else if (computerChoice === 'rogue' && playerChoice === 'sorceress' || computerChoice === 'sorceress' && playerChoice === 'rogue') {
            $(".announcer2").text(`The sorceress begins to cast a fire spell, but the rogue is too quick. She flings a dagger at the sorceress, and it pierces her in the heart before the sorceress can even think to blink.`)
            $(".outcome").html("<img src='images/paladin/heart.png' class='rps'>")
        } else if (computerChoice === 'rogue' && playerChoice === 'paladin' || computerChoice === 'paladin' && playerChoice === 'rogue') {
            $(".announcer2").text(`The rogue throws her knife at the paladin, who blocks it with his mighty shield, shattering the blade. The paladin then thrusts his sword, stabbing the rogue unceremoniously in the head.`);
            $(".outcome").html("<img src='images/paladin/knives.png' class='rps'>");
        } else if (computerChoice === 'sorceress' && playerChoice === 'sorceress') {
            $(".announcer2").text(`The mysical women simultaneously cast magical barriers on themselves before, in unison, flinging fire spells at the other. The magical barriers deflect the fire spells, and no one is hurt.`);
            $(".outcome").html("<img src='images/sorceress/barrier.png' class='rps'>")
        } else if (computerChoice === 'paladin' && playerChoice === 'paladin') {
            $(".announcer2").text(`With mighty yells, the paladins run at each other and swing their swords. Identically built in skill and strength, all they manage to do is hit each other's shields at precisely the same moment. It's a stalemate.`);
            $(".outcome").html("<img src='images/parry.png' class='rps'>")
        } else if (computerChoice === 'paladin' && playerChoice === 'sorceress' || computerChoice === 'sorceress' && playerChoice === 'paladin') {
            $(".announcer2").text(`The sorceress breaks into an evil smile as the paladin starts to run towards her with a brandished sword. She knows he's no match for her quick and deadly magic. She uses a wind spell to fling his sword away, then bathes him in fire, searing him to the bone.`);
            $(".outcome").html("<img src='images/sorceress/skeleton.png' class='rps'>")
        }
        if(
            (computerChoice === 'rogue' && playerChoice === 'rogue') ||
            (computerChoice === 'sorceress' && playerChoice === 'sorceress') ||
            (computerChoice === 'paladin' && playerChoice === 'paladin')
         ) {
            result = "tie";
        } else if (
            (computerChoice === 'rogue' && playerChoice === 'sorceress') ||
            (computerChoice === 'sorceress' && playerChoice === 'paladin') ||
            (computerChoice === 'paladin' && playerChoice === 'rogue')
        ) {
            result = "lose";
            computerScore++;
        } else {
            result = "win";
            playerScore++;
        }
        $(".robot_score").html(`${computerScore}`);
        $(".player_score").html(`${playerScore}`);

        if(computerScore === 5) {
            $(".btns").hide();
            $(".announcer").text("The computer wins!");
            $(".startbtn").show();
            $(".start").html("Start over?");
            $(".ass, .mag, .swo").unbind('click');
        } else if (playerScore === 5) {
            $(".btns").hide();
            $(".announcer").text("You win!");
            $(".startbtn").show();
            $(".start").html("Start over?");
            $(".ass, .mag, .swo").unbind('click');
        }
        $(".startbtn").click(function(){
            location.reload();
        });
    }

})