addLayer("a", {
    name: "a", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: [],
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(1), // Can be a function that takes requirement increases into account
    resource: "A", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.23456789, // Prestige currency exponent
    resetDescription: "Forge points into ",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('a', 13)) mult = mult.mul(5)
        if (hasUpgrade('a', 12)) mult = mult.pow(1.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            description: "",
            cost: new Decimal(10),
            title: "A"
        },
        12: {
            description: "",
            cost: new Decimal(25),
            title: "Journey"
        },
        13: {
            description: "",
            cost: new Decimal(50),
            title: "Begins"
        },
    },
})