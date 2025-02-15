addLayer("p", {
    name: "p", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(2), // Can be a function that takes requirement increases into account
    resource: "Points", // Name of prestige currency
    baseResource: "Time Since Prestige", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 100, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 11)) mult = mult.times(2)
        if (hasUpgrade('p', 12)) mult = mult.times(2)
        if (hasUpgrade('p', 13)) mult = mult.times(2)
        if (hasUpgrade('p', 21)) gain = gain.times(upgradeEffect('p', 21))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Prepare",
            description: "Double point gain",
            cost: new Decimal(1),
        },
        12: {
            title: "For",
            description: "Double point gain again",
            cost: new Decimal(4),
        },
        13: {
            title: "C H A O S",
            description: "Double point gain... yet again.",
            cost: new Decimal(16),
        },
        21: {
            title: "Not so Generic upgrade",
            description: "Booste pointe gaine",
            cost: new Decimal(64),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})
