addLayer("a", {
    name: "a", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#555555",
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
    milestones: {
        0: {
            requirementDescription: "100 A",
            effectDescription: "Unlock another layer",
            done() { return player.a.points.gte(100) }
        }
    },
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
addLayer("b", {
    name: "b", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(100), // Can be a function that takes requirement increases into account
    resource: "B", // Name of prestige currency
    baseResource: "A", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.3579, // Prestige currency exponent
    resetDescription: "Forge points into ",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('b', 13)) mult = mult.times(5)
        if (hasUpgrade('b', 12)) mult = mult.pow(1.5)
        if (hasUpgrade('b', 31)) mult = mult.pow(player.b.points.div(1000).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (hasMilestone(a, 0)||hasMilestone(b, 0))},
    milestones: {
        0: {
            requirementDescription: "1 B",
            effectDescription: "Layer 2, Start!",
            done() { return player.b.points.gte(1) }
        },
        1: {
            requirementDescription: "2187 B",
            effectDescription: "Unlock yet another layer",
            done() { return player.b.points.gte(2187) }
        }
    },
    upgrades: {
        11: {
            description: "",
            cost: new Decimal(10),
            title: "Layer 2"
        },
        12: {
            description: "",
            cost: new Decimal(25),
            title: "Symmetry"
        },
        13: {
            description: "",
            cost: new Decimal(50),
            title: "Line"
        },
        21: {
            description: "",
            cost: new Decimal(100),
            title: "2D"
        },
        22: {
            description: "",
            cost: new Decimal(250),
            title: "Scissors"
        },
        31: {
            description: "",
            cost: new Decimal(500),
            title: "Layer 2 End"
        },
    },
})
addLayer("c", {
    name: "c", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    effect() {
        return {
            pointBoost: player.b.points.pow(0.25)
        }
    },
    color: "#00ff00",
    requires: new Decimal(2187), // Can be a function that takes requirement increases into account
    resource: "C", // Name of prestige currency
    baseResource: "B", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.47, // Prestige currency exponent
    resetDescription: "Forge points into ",
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return (hasMilestone(b, 1)||hasMilestone(c, 0))},
    milestones: {
        0: {
            requirementDescription: "1 C",
            effectDescription: "Third time's the charm!",
            done() { return player.c.points.gte(1) }
        },
        1: {
            requirementDescription: "2187 B",
            effectDescription: "You get the drill",
            done() { return player.c.points.gte(2048) }
        }
    },
    upgrades: {
        11: {
            description: "",
            cost: new Decimal(1),
            title: "Layer 3"
        },
        21: {
            description: "",
            cost: new Decimal(4),
            title: "Triangle"
        },
        22: {
            description: "",
            cost: new Decimal(16),
            title: "3/4"
        },
        31: {
            description: "",
            cost: new Decimal(64),
            title: "Tresillos"
        },
        32: {
            description: "",
            cost: new Decimal(256),
            title: "Triple"
        },
        33: {
            description: "",
            cost: new Decimal(1024),
            title: "Layer 3 End"
        },
    },
})