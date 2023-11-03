addLayer("i", {
    name: "i", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "∞", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D5F5E3",
    requires: new Decimal(308.25), // Can be a function that takes requirement increases into account
    resource: "IP", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
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
            title: "That Was A While",
            description: "boost your point gain based on points.",
            cost: new Decimal(1),
            effect() {
                return player.points.add(1).pow(0.125)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        }
    },
})