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
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('QF', 41)) mult = mult.times(2)
        if (hasUpgrade('QF', 42)) mult = mult.times(2)
        if (hasUpgrade('UQ', 21)) mult = mult.times(upgradeEffect('UQ', 21))
	    if (hasUpgrade('UQ', 22)) mult = mult.times(upgradeEffect('UQ', 22))
	    if (hasUpgrade('UQ', 23)) mult = mult.times(upgradeEffect('UQ', 23))
        if (hasUpgrade('DQ', 21)) mult = mult.times(upgradeEffect('DQ', 21))
	    if (hasUpgrade('DQ', 22)) mult = mult.times(upgradeEffect('DQ', 22))
	    if (hasUpgrade('DQ', 23)) mult = mult.times(upgradeEffect('DQ', 23))
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
            unlocked() {
                return hasUpgrade('QF', 11)
            }
        },
        13: {
            title: "Gamma",
            description: "Double Infinitessimal Production",
            cost: new Decimal(11),
            unlocked() {
                return hasUpgrade('QF', 12)
            }
        },
        14: {
            title: "Delta",
            description: "Double Infinitessimal Production",
            cost: new Decimal(21),
            unlocked() {
                return hasUpgrade('QF', 13)
            }
        },
        15: {
            title: "Epsilon",
            description: "Double Infinitessimal Production",
            cost: new Decimal(43),
            unlocked() {
                return hasUpgrade('QF', 14)
            }
        },
        21: {
            title: "Zeta",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(30),
            unlocked() {
                return hasUpgrade('QF', 11)
            }
        },
        22: {
            title: "Eta",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(91),
            unlocked() {
                return hasUpgrade('QF', 12)
            }
        },
        23: {
            title: "Theta",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(274),
            unlocked() {
                return hasUpgrade('QF', 13)
            }
        },
        24: {
            title: "Iota",
            description: "Triple Infinitessimal Production",
            cost: new Decimal(823),
            unlocked() {
                return hasUpgrade('QF', 14)
            }
        },
        31: {
            title: "Kappa",
            description: "Quadruple Infinitessimal Production",
            cost: new Decimal(4000),
            unlocked() {
                return hasUpgrade('QF', 21)
            }
        },
        32: {
            title: "Lambda",
            description: "Quadruple Infinitessimal Production",
            cost: new Decimal(16001),
            unlocked() {
                return hasUpgrade('QF', 22)
            }
        },
        33: {
            title: "Mu",
            description: "Quadruple Infinitessimal Production",
            cost: new Decimal(64005),
            unlocked() {
                return hasUpgrade('QF', 23)
            }
        },
        41: {
            title: "Nu",
            description: "Double Quantum Foam Production",
            cost: new Decimal(100000),
            unlocked() {
                return hasUpgrade('QF', 31)
            }
        },
        42: {
            title: "Xi",
            description: "Double Quantum Foam Production",
            cost: new Decimal(200001),
            unlocked() {
                return hasUpgrade('QF', 32)
            }
        },
        51: {
            title: "Omicron",
            description: "Unlock 2 New Layers",
            cost: new Decimal(444444),
            unlocked() {
                return hasUpgrade('QF', 41)
            }
        },
        },
    },
)
addLayer("UQ", {
    name: "Up Quark", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "▲", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#A13D63",
    requires: new Decimal(1000000), // Can be a function that takes requirement increases into account
    resource: "Up Quarks", // Name of prestige currency
    baseResource: "Quantum Foam", // Name of resource prestige is based on
    baseAmount() {return player.QF.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.6, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('UQ', 31)) mult = mult.times(upgradeEffect('UQ', 31))
	    if (hasUpgrade('UQ', 32)) mult = mult.times(upgradeEffect('UQ', 32))
	    if (hasUpgrade('UQ', 33)) mult = mult.times(upgradeEffect('UQ', 33))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infinitessimal to Infinitessimal",
            description: "Infinitessimals boost Infinitessimals",
            cost: new Decimal(2),
            effect() {
                return player.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Quantum to Infinitessimal",
            description: "Quantum Foam boosts Infinitessimals",
            cost: new Decimal(10),
            effect() {
                return player.QF.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Up to Infinitessimal",
            description: "Up Quarks boost Infinitessimals",
            cost: new Decimal(25),
            effect() {
                return player.UQ.points.add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Infinitessimal to Quantum",
            description: "Infinitessimals boost Quantum Foam",
            cost: new Decimal(10),
            effect() {
                return player.points.add(1).pow(0.125)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Quantum to Quantum",
            description: "Quantum Foam boosts Quantum Foam",
            cost: new Decimal(25),
            effect() {
                return player.QF.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "Up to Quantum",
            description: "Up Quarks boost Quantum Foam",
            cost: new Decimal(50),
            effect() {
                return player.UQ.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        31: {
            title: "Infinitessimal to Up",
            description: "Infinitessimals boost Up Quarks",
            cost: new Decimal(25),
            effect() {
                return player.points.add(1).pow(0.0005)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        32: {
            title: "Quantum to Up",
            description: "Quantum Foam boosts Up Quarks",
            cost: new Decimal(50),
            effect() {
                return player.QF.points.add(1).pow(0.005)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        33: {
            title: "Up to Up",
            description: "Up Quarks boost Up Quarks",
            cost: new Decimal(100),
            effect() {
                return player.UQ.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        },
    },
)
addLayer("DQ", {
    name: "Down Quark", // This is optional, only used in a few places, If absent it just uses the layer id.
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    symbol: "▼", // This appears on the layer's node. Default is the id with the first letter capitalized
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#6DD3CE",
    requires: new Decimal(1000000), // Can be a function that takes requirement increases into account
    resource: "Down Quarks", // Name of prestige currency
    baseResource: "Quantum Foam", // Name of resource prestige is based on
    baseAmount() {return player.QF.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('DQ', 31)) mult = mult.times(upgradeEffect('DQ', 31))
	    if (hasUpgrade('DQ', 32)) mult = mult.times(upgradeEffect('DQ', 32))
	    if (hasUpgrade('DQ', 33)) mult = mult.times(upgradeEffect('DQ', 33))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Infinitessimal to Infinitessimal",
            description: "Infinitessimals boost Infinitessimals",
            cost: new Decimal(2),
            effect() {
                return player.points.add(1).pow(0.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Quantum to Infinitessimal",
            description: "Quantum Foam boosts Infinitessimals",
            cost: new Decimal(10),
            effect() {
                return player.QF.points.add(1).pow(0.3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Down to Infinitessimal",
            description: "Down Quarks boost Infinitessimals",
            cost: new Decimal(25),
            effect() {
                return player.DQ.points.add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Infinitessimal to Quantum",
            description: "Infinitessimals boost Quantum Foam",
            cost: new Decimal(10),
            effect() {
                return player.points.add(1).pow(0.125)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Quantum to Quantum",
            description: "Quantum Foam boosts Quantum Foam",
            cost: new Decimal(25),
            effect() {
                return player.QF.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "Down to Quantum",
            description: "Down Quarks boost Quantum Foam",
            cost: new Decimal(50),
            effect() {
                return player.DQ.points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        31: {
            title: "Infinitessimal to Down",
            description: "Infinitessimals boost Down Quarks",
            cost: new Decimal(25),
            effect() {
                return player.points.add(1).pow(0.0005)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        32: {
            title: "Quantum to Down",
            description: "Quantum Foam boosts Down Quarks",
            cost: new Decimal(50),
            effect() {
                return player.QF.points.add(1).pow(0.005)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        33: {
            title: "Down to Down",
            description: "Down Quarks boost Down Quarks",
            cost: new Decimal(100),
            effect() {
                return player.DQ.points.add(1).pow(0.15)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        },
    },
)