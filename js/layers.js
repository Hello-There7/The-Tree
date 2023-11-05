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
        if (hasUpgrade('i', 12)) mult = mult.times(upgradeEffect('i', 12))
        if (hasUpgrade('e', 12)) mult = mult.times(upgradeEffect('e', 12))
        if (hasUpgrade('e', 22)) mult = mult.times(upgradeEffect('e', 22))
        if (hasUpgrade('e', 32)) mult = mult.times(upgradeEffect('e', 32))
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
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "That Wasn't So Long",
            description: "boost your IP gain based on IP.",
            cost: new Decimal(25),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})
addLayer("e", {
    name: "e", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "Δ", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#D5F5E3",
    requires: new Decimal(308.25), // Can be a function that takes requirement increases into account
    resource: "Time", // Name of prestige currency
    baseResource: "IP", // Name of resource prestige is based on
    baseAmount() {return player.i.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.9, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('e', 13)) mult = mult.times(upgradeEffect('e', 13))
        if (hasUpgrade('e', 23)) mult = mult.times(upgradeEffect('e', 23))
        if (hasUpgrade('e', 33)) mult = mult.times(upgradeEffect('e', 33))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "P to P",
            description: "boost your point gain based on points.",
            cost: new Decimal(1),
            effect() {
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "P to IP",
            description: "boost your IP gain based on Points.",
            cost: new Decimal(2),
            effect() {
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "P to T",
            description: "boost your Time gain based on Points.",
            cost: new Decimal(7),
            effect() {
                return player.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "IP to P",
            description: "boost your point gain based on IP.",
            cost: new Decimal(2),
            effect() {
                return player.i.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "IP to IP",
            description: "boost your IP gain based on IP.",
            cost: new Decimal(4),
            effect() {
                return player.i.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "IP to T",
            description: "boost your Time gain based on IP.",
            cost: new Decimal(14),
            effect() {
                return player.i.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        31: {
            title: "T to P",
            description: "boost your point gain based on Time.",
            cost: new Decimal(7),
            effect() {
                return player.e.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        32: {
            title: "T to IP",
            description: "boost your IP gain based on Time.",
            cost: new Decimal(14),
            effect() {
                return player.e.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        33: {
            title: "T to T",
            description: "boost your Time gain based on Time.",
            cost: new Decimal(49),
            effect() {
                return player.e.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})
addLayer("u", {
    name: "u", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "⇮", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: new Decimal(308.25), // Can be a function that takes requirement increases into account
    resource: "UP", // Name of prestige currency
    baseResource: "Time", // Name of resource prestige is based on
    baseAmount() {return player.e.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.01, // Prestige currency exponent
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
            title: "⥋",
            description: "boost your point gain based on points.",
            cost: new Decimal(1),
            effect() {
                return player.points.add(1).pow(player.points.add(1).pow(0.1))
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "⥋",
            description: "boost your point gain based on points.",
            cost: new Decimal(10),
            effect() {
                return player.points.add(1).pow(player.points.add(1).pow(0.1))
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "⥋",
            description: "boost your point gain based on points.",
            cost: new Decimal(100),
            effect() {
                return player.points.add(1).pow(player.points.add(1).pow(0.1))
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})