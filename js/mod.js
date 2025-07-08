let modInfo = {
	name: "Universe Tree",
	id: "Build the Universe",
	author: "Wyatt",
	pointsName: "Infinitessimals",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0",
	name: "Quantum Quake",
}

let changelog = `I broke it`

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
	
	let gain = new Decimal(1)
	if (hasUpgrade('QF', 11)) gain = gain.times(2)
	if (hasUpgrade('QF', 12)) gain = gain.times(2)
	if (hasUpgrade('QF', 13)) gain = gain.times(2)
	if (hasUpgrade('QF', 14)) gain = gain.times(2)
	if (hasUpgrade('QF', 15)) gain = gain.times(2)
	if (hasUpgrade('QF', 21)) gain = gain.times(3)
	if (hasUpgrade('QF', 22)) gain = gain.times(3)
	if (hasUpgrade('QF', 23)) gain = gain.times(3)
	if (hasUpgrade('QF', 24)) gain = gain.times(3)
	if (hasUpgrade('QF', 31)) gain = gain.times(4)
	if (hasUpgrade('QF', 32)) gain = gain.times(4)
	if (hasUpgrade('QF', 33)) gain = gain.times(4)
    if (hasUpgrade('UQ', 11)) gain = gain.times(upgradeEffect('UQ', 11))
	if (hasUpgrade('UQ', 12)) gain = gain.times(upgradeEffect('UQ', 12))
	if (hasUpgrade('UQ', 13)) gain = gain.times(upgradeEffect('UQ', 13))
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
	return player.QF.points.gte(new Decimal("1000000"))
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