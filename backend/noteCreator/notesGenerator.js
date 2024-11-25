//import { generateNotesFromTemplate } from "./templates/phaseOne.js";
//import { generateExportedRoster } from "./exportRoster/exportRoster.js";
import { response } from "../data/fakeResponse.js";
import { classData } from "../data/classData.js"
import { classRemap } from "../helpers/classRemap.js"
import { bossData } from "../data/bossData.js";


const tactics = {};

// export const getEncodedNotes_OLD = (data) => {
//     const roster = generateDictionary(data);
//     const waRosterFormat = generateExportedRoster(roster);
//     const notes = generateNotesFromTemplate(roster);
//     return JSON.stringify({ Notes: notes, Roster: waRosterFormat });
// };
//return JSON.stringify(exportRoster);

export const getEncodedNotes = (parsedData) => { // takes input response later
    const roster = {
        players: [],
        assignments: {}
    };

    const api_response = parsedData;
    let raidSize = api_response.raidDrop.length < 25 ? 10 : 25;
    roster.players = api_response.raidDrop.slice(0, raidSize).map(player => {
        let remappedClass = classRemap[player.class];
        if (typeof remappedClass === "function") {
            remappedClass = remappedClass(player.spec);
        }

        return {
            name: player.name,
            role: classData[remappedClass || player.class]?.spec.find(spec => spec.name === player.spec)?.role,
            class: remappedClass || player.class,
            spec: player.spec,
            interrupt: classData[remappedClass || player.class]?.spec.find(spec => spec.name === player.spec)?.interruptPrio || 100,
            assignedBosses: []
            //spells: classData[remappedClass || player.class]?.spec.find(spec => spec.name === player.spec)?.Spells || [],
        }
    });

    generateAssignments(roster);

    return roster.assignments;
}

function generateAssignments(roster) {
    let output = "";
    // const tanks = roster.players.filter(player => player.role === "Tank");
    // const healers = roster.players.filter(player => player.role === "Healer");
    // const ranged = roster.players.filter(player => player.role === "Ranged");
    // const melees = roster.players.filter(player => player.role === "Melee");

    for (const bossKey in bossData) {
        const boss = bossData[bossKey];
        output += `"${boss.name}":"${boss.name}\n`;

        if (boss.specialAssignments && typeof boss.specialAssignments === "function") {
            output += boss.specialAssignments(roster);
        }

        boss.spells.forEach((bossSpell) => {
            output += `${bossSpell.name}:\n`
            let time = 0;
            let abilityAssignedPlayers = "";

            for (const preferred of bossSpell.prioCooldowns) {
                const { class: className, spec, spell, cd } = preferred; 
                const matchingPlayers = roster.players.filter(player => player.class === className && player.spec === spec && player.spec.includes(spec));
                let counter = 1;
                matchingPlayers.forEach((player, index) => {
                    const spellId = classData[className].spec.find(_spec => _spec.name === spec).spells.find(_spell => _spell.name === spell)?.id;
                    if (isCooldownCompatible(cd, bossSpell.timeBetweenCast)) {
                        if (counter === 1 && bossSpell.firstCast) {
                            time += bossSpell.firstCast;
                        } else {
                            time += bossSpell.timeBetweenCast;
                        }
                        const formattedAssignment = `{time:${formatTime(time)},${bossSpell.event}:${bossSpell.id}:${counter++}${bossSpell.id}} ${player.name} - ${spell} {spell:${spellId}}${index + 1 != matchingPlayers.length ? '\n' : '"'}`
                        abilityAssignedPlayers += formattedAssignment;
                    }
                });
            }
            if (abilityAssignedPlayers) {
                output += abilityAssignedPlayers;
            }
            output += '\n';
        });
    }
    roster.assignments = output;
}

const isCooldownCompatible = (cooldownTime, abilityFrequency) => {
    return cooldownTime >= abilityFrequency;
};
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// function assignForBoss(boss) {
//     const spells = bossData[boss]?.spells;
//     //console.log("Boss: ", boss);
//     //console.log(boss.name)
//     //console.log(boss.spells)
//     //console.log(boss.specialAssignments(roster))
//     const assignedPlayers = new Set(); // Cache for players assigned to this boss
//     if (!roster.assignments[boss]) {
//         roster.assignments[boss] = [];
//     }

//     for (const spell in spells) {
//         let order = 1;
//         let prioList = spells[spell].PrioCooldowns;
//         for (const prio in prioList) {
//             let prioObj = prioList[prio];
//             //console.log("prioObj: ", prioObj)
//             const availablePlayer = roster.players.find(player => player.class === prioObj.Class && player.spec === prioObj.Spec && !assignedPlayers.has(player.name));
//             if (availablePlayer) {
//                 //console.log("availablePlayer: ", availablePlayer.name)
//                 // Mark assignment
//                 if (!roster.assignments[boss]) {
//                     roster.assignments[boss] = [];
//                 }

//                 roster.assignments[boss].push({
//                     player: availablePlayer.name,
//                     playerAbility: prioObj.cd,
//                     bossAbility: spells[spell].name,
//                     order: order++
//                 });

//                 assignedPlayers.add(availablePlayer.name);
//                 availablePlayer.assignedBosses.push(boss);
//                 break; // Exit once a player is assigned for this priority
//             }

//         }

//     };


//     tactics[boss] = generateTacticsNote(roster.assignments[boss]);
// }

// function generateTacticsNote(assignments) {
//     let note = "";
//     if (assignments) {
//         //console.log("assignments found")
//         assignments.forEach(assignment => {
//             note += `${assignment.player} will use ${assignment.playerAbility} at ${assignment.bossAbility} order ${assignment.order}.\n`;
//         });
//     }
//     return note;
// }


// export const generateDictionary = (data) => {
//   const roles = {
//     RDruid: 25,
//     Holy: 25,
//     Disc: 25,
//     RShaman: 25,
//     Arms: 25,
//     UHDK: 25,
//   }

//   let roster = {};
//   Object.keys(roles).forEach((role) => {
//     for (let i = 1; i <= roles[role]; i++) {
//       roster[`${role}${i}`] = "MISSING";
//     }
//   });


//   let counters = Object.keys(roles).reduce((acc, role) => ({ ...acc, [role]: 1 }), {});

//   const classSpecToRole = {
//     "Priest:Discipline": "Disc",
//     "Druid:Restoration": "RDruid",
//     "Shaman:Restoration1": "RShaman",
//     "Paladin:Holy1": "Holy",
//     "DK:Unholy_DPS": "UHDK",
//     "Warrior:Arms": "Arms"
//   };

//   data.raidDrop.slice(0, 25).forEach(player => {
//     const key = `${player.class}:${player.spec}`;
//     const role = classSpecToRole[key];
//     if (role && counters[role] <= roles[role]) {
//       roster[`${role}${counters[role]}`] = player.name;
//       counters[role] += 1;
//     }
//   });

//   return roster;
// };