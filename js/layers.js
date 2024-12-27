addLayer("b", {
    name: "b", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "Bk", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#222222",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Black Pigment", // Name of prestige currency
    baseResource: "Color", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('b', 11)) gain = gain.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Nothingness",
            description: "No-thing is better than nothing.",
            cost: new Decimal(1),
        },
        12: {
            title: "Black-hole",
            description: "If you see one, you're doomed-",
            cost: new Decimal(2),
        },
    },
    hotkeys: [
        {key: "K", description: "K: Reset for Bk", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
})
addLayer("w", {
    name: "w", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "White Pigment", // Name of prestige currency
    baseResource: "Color", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('w', 11)) gain = gain.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "...Also Nothingness.",
            description: "Nothing is better than no-thing.",
            cost: new Decimal(1),
        },
        12: {
            title: "White-hole",
            description: "Do these even exist?",
            cost: new Decimal(2),
        },
    },
    hotkeys: [
        {key: "W", description: "W: Reset for W", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
})
addLayer("r", {
    name: "r", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Red Pigment", // Name of prestige currency
    baseResource: "Color", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('r', 11)) gain = gain.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Red-Shift",
            description: "When you move backwards so fast",
            cost: new Decimal(1),
        },
        12: {
            title: "Stop!",
            description: "Hammer tim-",
            cost: new Decimal(2),
        },
    },
    hotkeys: [
        {key: "R", description: "R: reset for R", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
})
