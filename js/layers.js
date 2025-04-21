addLayer("a", {
    name: "Antimatter", // This is optional, only used in a few places, If absent it just uses the layer id.
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
        21: {
            title: "Anti",
            description: "Unlocks the first buyable",
            cost: new Decimal(10),
            unlocked() { return (hasUpgrade(this.layer, 11) & hasUpgrade(this.layer, 12))},
        },
        },
    buyables: {
         11: {
            title: "A",
            cost(x) { return new Decimal(10).pow(x.mul(0.5).add(1)) },
            display() { return `You have ${ a.buyables[11] } of this buyable, which multiplies point gain by ${a.buyables[11].add(1)}` },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return (hasUpgrade(this.layer, 21))}
         },
    }
    },
)
