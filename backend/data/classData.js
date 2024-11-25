export const classData = {
    Druid: {
        spec: [
            {
                name: "Balance",
                spells: [
                    {
                        name: "Tranquility",
                        id: 740,
                        cd: 180,
                    },
                    {
                        name: "Stampeding Roar",
                        id: 77764,
                        cd: 120
                    }
                ],
                role: "Ranged",
                interruptPrio: 11,
            },
            {
                name: "Feral",
                spells: [
                    {
                        name: "Tranquility",
                        id: 740,
                        cd: 180,
                    },
                    {
                        name: "Stampeding Roar",
                        id: 77764,
                        cd: 120
                    }
                ],
                role: "Melee",
                interruptPrio: 10,
            },
            {
                name: "Guardian",
                spells: [
                    {
                        name: "Stampeding Roar",
                        id: 77764,
                        cd: 120
                    },
                    {
                        name: "Barkskin",
                        id: 22812,
                        cd: 60
                    },
                    {
                        name: "Survival instincts",
                        id: 61336,
                        cd: 180
                    }
                ],
                role: "Tank",
                interruptPrio: 9,
            },
            {
                name: "Restoration",
                spells: [
                    {
                        name: "Tranquility",
                        id: 740,
                        cd: 180,
                    },
                    {
                        name: "Stampeding Roar",
                        id: 77764,
                        cd: 120
                    }
                ],
                role: "Healer",
            }
        ]
    },
    DK: {
        spec: [
            {
                name: "Blood_Tank",
                spells: [
                    {
                        name: "Icebound Fortitude",
                        id: 48792,
                        cd: 280
                    },
                    {
                        name: "Anti-Magic Shell",
                        id: 48707,
                        cd: 45
                    },
                    {
                        name: "Vampiric Blood",
                        id: 55233,
                        cd: 60
                    }
                ],
                role: "Tank",
                interruptPrio: 2
            },
            {
                name: "Frost_DPS",
                spells: [
                    {
                        name: "Icebound Fortitude",
                        id: 48792,
                        cd: 280
                    },
                    {
                        name: "Anti-Magic Shell",
                        id: 48707,
                        cd: 45
                    }
                ],
                role: "Melee",
                interruptPrio: 6
            },
            {
                name: "Unholy_DPS",
                spells: [
                    {
                        name: "Anti-Magic Zone",
                        id: 51052,
                        cd: 120
                    },
                    {
                        name: "Icebound Fortitude",
                        id: 48792,
                        cd: 280
                    },
                    {
                        name: "Anti-Magic Shell",
                        id: 48707,
                        cd: 45
                    }
                ],
                role: "Melee",
                interruptPrio: 6
            }
        ]
    },
    Hunter: {
        spec: [
            {
                name: "Beast Mastery",
                spells: [],
                role: "Ranged",
            },
            {
                name: "Marksmanship",
                spells: [],
                role: "Ranged",
            },
            {
                name: "Survival",
                spells: [],
                role: "Ranged",
            }
        ]
    },
    Mage: {
        spec: [
            {
                name: "Arcane",
                spells: [],
                role: "Ranged",
                interruptPrio: 7,
            },
            {
                name: "Frost",
                spells: [],
                role: "Ranged",
                interruptPrio: 7,
            },
            {
                name: "Fire",
                spells: [],
                role: "Ranged",
                interruptPrio: 7,
            }
        ]
    },
    Paladin: {
        spec: [
            {
                name: "Holy1",
                spells: [
                    {
                        name: "Aura Mastery",
                        id: 31821,
                        cd: 120
                    },
                    {
                        name: "Hand of Protection",
                        id: 87772,
                        cd: 300
                    },
                    {
                        name: "Hand of Sacrifice",
                        id: 6940,
                        cd: 120
                    },
                    {
                        name: "Divine Protection",
                        id: 498,
                        cd: 60
                    },
                    {
                        name: "Lay on Hands",
                        id: 633,
                        cd: 600
                    }
                ],
                role: "Healer",
                interruptPrio: 8,
            },
            {
                name: "Protection1",
                spells: [
                    {
                        name: "Divine Guardian",
                        cd: 180
                    },
                    {
                        name: "Hand of Protection",
                        id: 87772,
                        cd: 300
                    },
                    {
                        name: "Hand of Sacrifice",
                        id: 6940,
                        cd: 120
                    },
                    {
                        name: "Divine Protection",
                        id: 498,
                        cd: 60
                    },
                    {
                        name: "Lay on Hands",
                        id: 633,
                        cd: 600
                    }
                ],
                role: "Tank",
                interruptPrio: 2,
            },
            {
                name: "Retribution",
                spells: [
                    {
                        name: "Hand of Protection",
                        id: 87772,
                        cd: 300
                    },
                    {
                        name: "Hand of Sacrifice",
                        id: 6940,
                        cd: 120
                    },
                    {
                        name: "Divine Protection",
                        id: 498,
                        cd: 60
                    },
                    {
                        name: "Lay on Hands",
                        id: 633,
                        cd: 600
                    }
                ],
                role: "Melee",
                interruptPrio: 4,
            }
        ]
    },
    Priest: {
        spec: [
            {
                name: "Discipline",
                spells: [
                    {
                        name: "Power Infusion",
                        id: 10060,
                        cd: 120
                    },
                    {
                        name: "Power Word: Barrier",
                        id: 62618,
                        cd: 180
                    },
                    {
                        name: "Pain Suppression",
                        id: 33206,
                        cd: 180
                    },
                    {
                        name: "Fear Ward",
                        id: 6346,
                        cd: 180
                    },
                    {
                        name: "Divine Hymn",
                        id: 64843,
                        cd: 480
                    },
                    {
                        name: "Hymn of Hope",
                        id: 64901,
                        cd: 360
                    }
                ],
                role: "Healer",
            },
            {
                name: "Holy",
                spells: [
                    {
                        name: "Guardian Spirit",
                        id: 47788,
                        cd: 180
                    },
                    {
                        name: "Fear Ward",
                        id: 6346,
                        cd: 180
                    },
                    {
                        name: "Divine Hymn",
                        id: 64843,
                        cd: 480
                    },
                    {
                        name: "Hymn of Hope",
                        id: 64901,
                        cd: 360
                    }
                ],
                role: "Healer",
            },
            {
                name: "Shadow",
                spells: [
                    {
                        name: "Fear Ward",
                        id: 6346,
                        cd: 180
                    },
                    {
                        name: "Divine Hymn",
                        id: 64843,
                        cd: 480
                    },
                    {
                        name: "Hymn of Hope",
                        id: 64901,
                        cd: 360
                    }
                ],
                role: "Ranged",
            }
        ]
    },
    Rogue: {
        spec: [
            {
                name: "Combat",
                spells: [],
                role: "Melee",
                interruptPrio: 1
            },
            {
                name: "Subtlety",
                spells: [],
                role: "Melee",
                interruptPrio: 1
            },
            {
                name: "Assassination",
                spells: [],
                role: "Melee",
                interruptPrio: 1
            }
        ]
    },
    Shaman: {
        spec: [
            {
                name: "Elemental",
                spells: [],
                role: "Ranged",
                interruptPrio: 1,
            },
            {
                name: "Enhancement",
                spells: [],
                role: "Melee",
                interruptPrio: 3,
            },
            {
                name: "Restoration1",
                spells: [
                    {
                        name: "Spirit Link Totem",
                        id: 98008,
                        cd: 180
                    },
                    {
                        name: "Mana Tide",
                        id: 16190,
                        cd: 180
                    }
                ],
                role: "Healer",
                interruptPrio: 8,
            }
        ]
    },
    Warrior: {
        spec: [
            {
                name: "Arms",
                spells: [
                    {
                        name: "Rallying Cry",
                        id: 97462,
                        cd: 180
                    }
                ],
                role: "Melee",
                interruptPrio: 4
            },
            {
                name: "Fury",
                spells: [
                    {
                        name: "Rallying Cry",
                        id: 97462,
                        cd: 180
                    }
                ],
                role: "Melee",
                interruptPrio: 4
            },
            {
                name: "Protection",
                spells: [
                    {
                        name: "Rallying Cry",
                        id: 97462,
                        cd: 180
                    }
                ],
                role: "Tank",
                interruptPrio: 2,
            }
        ]
    },
    Warlock: {
        spec: [
            {
                name: "Demonology",
                spells: [],
                role: "Ranged",
                interruptPrio: 12
            },
            {
                name: "Affliction",
                spells: [],
                role: "Ranged",
                interruptPrio: 12
            },
            {
                name: "Destruction",
                spells: [],
                role: "Ranged",
                interruptPrio: 12
            }
        ]
    }
};