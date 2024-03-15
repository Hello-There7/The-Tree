addLayer("[]", {
    name: "¤", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "¤", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#red",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Ones", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1, // Prestige currency exponent
    resetDescription: "reset zeros for ",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            description: "Unlock a new layer.",
            cost: new Decimal(1),
            title: "Counting",
        },
    },
    hotkeys: [
        {key: "R", description: "R: Reset for Research", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
})
addLayer("i", {
    name: "1", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "1", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#red",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "Ones", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.5, // Prestige currency exponent
    resetDescription: "reset zeros for ",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (hasUpgrade('[]', 11))},
    upgrades: {
        11: {
            description: "multiply point gain by 2",
            cost: new Decimal(1),
            title: "1.1",
        },
        12: {
            description: "boost point gain",
            cost: new Decimal(1),
            title: "1.1",
            effectDisplay(){player.points.add(1).pow(0.25).times()},
            effect(){player.points.add(1).pow(0.25).times()}
        },
        13: {
            description: "multiply point gain by 2",
            cost: new Decimal(1),
            title: "1.1",
        },
    },
    hotkeys: [
        {key: "1", description: "1: Reset for ones", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
})