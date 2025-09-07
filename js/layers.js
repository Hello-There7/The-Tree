addLayer("BK", {
    name: "Black", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "BK", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        best: new Decimal(0),
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#363636ff",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Black Pigment", // Name of prestige currency
    baseResource: "Chroma", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('BK', 11)) mult = mult.times(0.5)
        if (hasUpgrade('BK', 12)) mult = mult.times(3)
        if (hasUpgrade('BK', 13)) mult = mult.times(0.5)
        if (hasUpgrade('BK', 14)) mult = mult.times(5)
        if (hasUpgrade('BK', 15)) mult = mult.times(0.5)
        if (hasUpgrade('BK', 16)) mult = mult.times(upgradeEffect('BK', 16))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {   
        11: {
            title: "UV Radiation",
            description: "Triple Point Gain, But Half Black Pigment Gain",
            cost: new Decimal(2),
        },
        12: {
            title: "UV Absorbtion",
            description: "Triple Black Pigment Gain, But Half Point Gain",
            cost: new Decimal(4),
        },
        13: {
            title: "IR Radiation",
            description: "Quintuple Point Gain, But Half Black Pigment Gain",
            cost: new Decimal(6),
        },
        14: {
            title: "IR Absorbtion",
            description: "Quintuple Black Pigment Gain, But Half Point Gain",
            cost: new Decimal(8),
        },
        15: {
            title: "Dynamic Radiation",
            description: "Boost Point Gain, But Half Black Pigment Gain",
            cost: new Decimal(10),
            effect() {
                return player.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        16: {
            title: "Dynamic Absorbtion",
            description: "Boost Black Pigment Gain, But Half Point Gain",
            cost: new Decimal(12),
            effect() {
                return player.points.add(1).pow(0.2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
    },
)
