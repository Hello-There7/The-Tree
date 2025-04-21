addLayer("a", {
    name: "a", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D84040",
    requires: new Decimal(11), // Can be a function that takes requirement increases into account
    resource: "Antimatter", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('a', 13)) mult = mult.times(1.5)
        if (hasUpgrade('a', 15)) mult = mult.times(upgradeEffect('a', 15))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "And",
            description: "Start Point Generation",
            cost: new Decimal(1),
        },
        12: {
            title: "All",
            description: "Multiply Points by 2.5",
            cost: new Decimal(2),
            unlocked() { return (hasUpgrade(this.layer, 11))},
        },
        13: {
            title: "Act",
            description: "Multiply Antimatter by 1.5",
            cost: new Decimal(4),
            unlocked() { return (hasUpgrade(this.layer, 12))},
        },
        14: {
            title: "Ant",
            description: "Antimatter boosts Points",
            cost: new Decimal(6),
            unlocked() { return (hasUpgrade(this.layer, 13))},
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "Art",
            description: "Points boost Antimatter",
            cost: new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 14))},
            effect() {
                return player.points.add(1).pow(0.05)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        },
    },
)
