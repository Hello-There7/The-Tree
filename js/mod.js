let modInfo = {
	name: "Prestige Line",
	id: "Prestige Chain Ripoff",
	author: "Wyatt",
	pointsName: "Points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (11), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0.1",
	name: "Alter Again",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.0</h3><br>
		- Fixed Antimatter upgrades.
		<br>
	<h3>v1.0</h3><br>
		- First release, added 3 Antimatter upgrades.
		<br>
	<h3>v0.1.1</h3><br>
		- Edited Antimatter, and added an upgrade.
		<br>
	<h3>v0.1</h3><br>
		- Added Antimatter.`

let winText = `Good Job!`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	
	let gain = new Decimal(0)
	if (hasUpgrade('a', 11)) gain = gain.add(1)
    if (hasUpgrade('a', 12)) gain = gain.times(2.5)
    if (hasUpgrade('a', 14)) gain = gain.times(upgradeEffect('a', 14))
	gain = gain.times(a.buyables[11].add(1))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.a.points.gte(new Decimal("100"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}