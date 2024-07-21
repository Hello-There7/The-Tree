addLayer("p", {
    name: "p", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "PL", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Plank lengths", // Name of prestige currency
    baseResource: "Existence", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('p', 21)) gain = gain.times(2)
        if (hasUpgrade('q', 21)) gain = gain.times(2)
	    if (hasUpgrade('q', 22)) gain = gain.times(2)
	    if (hasUpgrade('q', 23)) gain = gain.times(2)
        if (hasUpgrade('q', 31)) gain = gain.times(upgradeEffect('q', 31))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Plank time",
            description: "Exist in time.",
            cost: new Decimal(1),
        },
        12: {
            title: "Plank area",
            description: "Exist in 2D.",
            cost: new Decimal(3),
        },
        13: {
            title: "Plank volume",
            description: "Exist in 3D.",
            cost: new Decimal(9),
        },
        21: {
            title: "Big Bang",
            description: "???",
            cost: new Decimal(27),
        },
    },
    hotkeys: [
        {key: "P", description: "P: Reset for PL", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
})
addLayer("q", {
    name: "q", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "QF", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00ff88",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "Quantum foam", // Name of prestige currency
    baseResource: "Plank lengths", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('q', 41)) gain = gain.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "String",
            description: "Open or closed?",
            cost: new Decimal(1),
        },
        12: {
            title: "Expansion",
            description: "Too big",
            cost: new Decimal(3),
        },
        13: {
            title: "Energy",
            description: "Mc^2",
            cost: new Decimal(9),
        },
        14: {
            title: "Space",
            description: "Time and space",
            cost: new Decimal(27),
        },
        21: {
            title: "Matter",
            description: "Anti-antimatter",
            cost: new Decimal(4),
        },
        22: {
            title: "Antimatter",
            description: "Don't touch",
            cost: new Decimal(12),
        },
        23: {
            title: "Dark matter",
            description: "Nope.",
            cost: new Decimal(36),
        },
        31: {
            title: "Light",
            description: "299792458",
            cost: new Decimal(16),
            effect() {
                return player.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        32: {
            title: "Dark",
            description: "What's the speed of dark?",
            cost: new Decimal(48),
            effect() {
                return player.p.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        41: {
            title: "Quarks",
            description: "????",
            cost: new Decimal(128),
        },
    },
    hotkeys: [
        {key: "Q", description: "Q: Reset for QF", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],P
})