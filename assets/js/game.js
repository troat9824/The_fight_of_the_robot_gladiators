// Game States
// "WIN" - Player robot has defeated all enemy-robots
//     * Fight all enemy-robots
//     * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble",];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    console.log(promptFight);
    if (promptFight === "FIGHT" || promptFight === "fight" || promptFight === "Fight") {
        window.alert("Welcome to Robot Gladiators!");
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName, "attacked", enemyName + ".", enemyName, "now has", enemyHealth, "health remaining.");
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName, "atacked", playerName + ".", playerName, "now has", playerHealth, "health remaining.");
        if(playerHealth <=0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if(promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight! Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }

    }
    else {
        window.alert("You need to choose a valid option. Try again!");
        fight();
    }
}



for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}