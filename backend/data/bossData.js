export const bossData = {
    Shannox: {
        name: "Shannox",
        spells: [],
        specialAssignments: function (roster) {
            let tanks = roster.players.filter(player => player.role === "Tank");
            let mt = "";
            let ot = "";
            if(tanks.length > 0 && tanks.length < 2){
                mt = ot = tanks[0]
            }
            if(tanks.length === 2){
                mt = tanks[0];
                ot = tanks[1];
            }
            if (mt.class === "Druid" && ot.class !== "Druid") {
                mt = tanks[1];
                ot = tanks[0];
            }
            return `Shannox Tank: ${mt.name}\nRiplimb Tank: ${ot.name}`
        }
    },
    Bethtilac: {
        name: "Bethtilac",
        spells: [
            {
                name: "Smoldering",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "Shaman",
                        spec: "Restoration1",
                        spell: "Spirit Link Totem",
                        cd: 180
                    },
                    {
                        class: "Priest",
                        spec: "Discipline",
                        spell: "Power Word: Barrier",
                        cd: 120
                    },
                    {
                        class: "Warrior",
                        spec: "Protection",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Arms",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Fury",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                ]
            },
            {
                name: "Ember Flare",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Shaman",
                        spec: "Restoration1",
                        spell: "Spirit Link Totem",
                        cd: 180
                    },
                    {
                        class: "Priest",
                        spec: "Discipline",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Balance",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Feral",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Shadow",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Warrior",
                        spec: "Protection",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Arms",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Fury",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Paladin",
                        spec: "Holy1",
                        Spell: "Aura Mastery",
                        cd: 120
                    },
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Discipline",
                        spell: "Power Word: Barrier",
                        cd: 120
                    },
                ]
            },

        ],
        specialAssignments: function (roster) {

            // WHO GOES UP ?
            // WHO SOAKS WHERE ?
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];

            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    },
    Rhyolith: {
        name: "Rhyolith",
        spells: [
            {
                name: "Concussive Stomp",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "Warrior",
                        spec: "Protection",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Arms",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Fury",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Paladin",
                        spec: "Holy1",
                        Spell: "Aura Mastery",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Holy",
                        spell: "Divine Hymn",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Restoration",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Discipline",
                        spell: "Power Word: Barrier",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Balance",
                        spell: "Tranquility",
                        cd: 120
                    },
                    {
                        class: "Druid",
                        spec: "Feral",
                        spell: "Tranquility",
                        cd: 120
                    }
                ]
            },
            {
                name: "Concussive Stomp P2",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "Priest",
                        spec: "Discipline",
                        spell: "Power Word: Barrier",
                        cd: 120
                    },
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Shaman",
                        spec: "Restoration1",
                        spell: "Spirit Link Totem",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Protection",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Arms",
                        spell: "Rallying Cry",
                        cd: 180
                    },
                    {
                        class: "Warrior",
                        spec: "Fury",
                        spell: "Rallying Cry",
                        cd: 180
                    }
                ]
            },

        ],
        specialAssignments: function (roster) {
            let mSkull = [];
            let mCross = [];
            let rSkull = [];
            let rCross = [];

            const melees = roster.players.filter(player => player.role === "Melee");
            const ranged = roster.players.filter(player => player.role === "Ranged");

            for (let i = 0; i < melees.length; i++) {
                if (i % 2 === 0) {
                    mSkull.push(melees[i]);
                } else {
                    mCross.push(melees[i]);
                }
            }

            for (let i = 0; i < ranged.length; i++) {
                if (i % 2 === 0) {
                    rSkull.push(ranged[i]);
                } else {
                    rCross.push(ranged[i]);
                }
            }

            return `Melee targets:\nSkull: ${mSkull.map(player => player.name).join(", ")}\nCross: ${mCross.map(player => player.name).join(", ")}\n` +
                `Ranged start targets:\nSkull: ${rSkull.map(player => player.name).join(", ")}\nCross: ${rCross.map(player => player.name).join(", ")}\n`;
        }
    },
    Alysrazor: {
        name: "Alysrazor",
        spells: [
            {
                name: "Knockback",
                id: 97282,
                castTime: 3,
                event: "SCS",
                firstCast: 15,
                timeBetweenCast: 30,
                totalCasts: 7,
                maxCdPerCast: 2,
                prioCooldowns: [
                    {
                        class: "DK",
                        spec: "Unholy_DPS",
                        spell: "Anti-Magic Zone",
                        cd: 120
                    },
                    {
                        class: "Paladin",
                        spec: "Holy1",
                        Spell: "Aura Mastery",
                        cd: 120
                    },
                    {
                        class: "Priest",
                        spec: "Discipline",
                        spell: "Power Word: Barrier",
                        cd: 120
                    },
                ]
            },
        ],
        specialAssignments: function (roster) {
            let airGroup = roster.players.filter(player =>
                (player.role === "Ranged" && ["Fire", "Shadow", "Affliction", "Balance"].includes(player.spec)) ||
                (player.role === "Melee" && player.spec == "Feral")).splice(0, 7);
            return `Flying Players: ${airGroup.map(player => player.name).join(", ")}\n`
        }
    },
    Baleroc: {
        name: "Baleroc",
        spells: [],
        specialAssignments: function (roster) {
            const rangedPlayers = roster.players.filter(player => player.role === "Ranged");
            let soakGroups = [];

            for (let i = 0; i < rangedPlayers.length; i += 3) {
                let group = rangedPlayers.slice(i, i + 3);
                soakGroups.push(group);
            }

            let result = "Ranged Soak Groups:\n";
            soakGroups.forEach((group, index) => {
                result += `Group ${index + 1}: `;
                group.forEach(player => {
                    result += `${player.name} `;
                });
                result += "\n";
            });

            return result;
        }
    },
    Majordomo: {
        name: "Majordomo",
        spells: [],
        specialAssignments: function (roster) {
            const baiters = roster.players.filter(player => (player.role === "Healer") || (player.role === "Ranged" && player.class === "Hunter"));
            let backup = baiters.splice(7, baiters.length)
            if(backup.length < 3){
                let ranged = roster.players.filter(player => player.role === "Ranged" && !baiters.includes(player) && !backup.includes(player))
                backup.push(...ranged.slice(0, 3 - backup.length));
            }
            return `Baiters: ${baiters.map(player => player.name).join(", ")}\n` +
                `Backups: ${backup.map(player => player.name).join(", ")}\n`;
        }
    },
    Ragnaros: {
        name: "Ragnaros",
        spells: [],
        specialAssignments: ""
    }
}