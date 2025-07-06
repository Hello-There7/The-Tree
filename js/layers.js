addLayer("QF", {
    name: "Quantum", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "⌗", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#443850",
    requires: new Decimal(25), // Can be a function that takes requirement increases into account
    resource: "Quantum Foam", // Name of prestige currency
    baseResource: "Infinitessimals", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.01, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('QF', 41)) mult = mult.times(2)
        if (hasUpgrade('QF', 42)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Alpha",
            description: "Double Infinitessimal Production",
            cost: new Decimal(2),
        },
        12: {
            title: "Beta",
            description: "Double Infinitessimal Production",
            cost: new Decimal(5),
        },
        13: {
            title: "Gamma",
            description: "Double Infinitessimal Production",
            cost: new Decimal(11),
        },
        14: {
            title: "Delta",
            description: "Double Infinitessimal Production",
            cost: new Decimal(21),
        },
        15: {
            title: "Epsilon",
            description: "Double Infinitessimal Production",
            cost: new Decimal(43),
        },
        21: {
            title: "Zeta",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(30),
        },
        22: {
            title: "Eta",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(91),
        },
        23: {
            title: "Theta",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(274),
        },
        24: {
            title: "Iota",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(823),
        },
        31: {
            title: "Kappa",
            description: "Quadruple Infinitessimal Production",
            cost: new Decimal(4000),
        },
        32: {
            title: "Lambda",
            description: "Quadruple Infinitessimal Production",
            cost: new Decimal(16001),
        },
        33: {
            title: "Mu",
            description: "Quadruple Infinitessimal Production",
            cost: new Decimal(64005),
        },
        41: {
            title: "Nu",
            description: "Double Quantum Foam Production",
            cost: new Decimal(100000),
        },
        42: {
            title: "Xi",
            description: "Double Quantum Foam Production",
            cost: new Decimal(200001),
        },
        51: {
            title: "Omicron",
            description: "Unlock New Layer (Next Update)",
            cost: new Decimal(444444),
        },
        },
    },
)
