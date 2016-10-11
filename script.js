'use strict';
//
const _ = require('lodash');
const Script = require('smooch-bot').Script;
const scriptRules = require('./script.json');

// function wait(ms) {
// return new Promise((resolve) => {setTimeout(resolve, ms) })
// }

// module.exports = new Script({
//   console.log("hello");
// });

// //  processing: {
// // prompt: (bot) => bot.say('![](http://www.bieg.nl/beeld/speechbubble.gif)'),
// //  receive: () => 'processing'
// //  },
//
// // start: {
// //     receive: (bot,message) => {
// //         //const opening = message.text.trim().toUpperCase();
// //         return bot.say(`${groet}... Wat voor soort hypotheek zoek je? `)
// //         .then(() => bot.say(`![](http://www.bieg.nl/beeld/woningen.jpg)`))
// //         .then(() => bot.say(`%[Starters Hypotheek](postback:hypotheektype_starter)`))
// //         .then(() => bot.say (`%[Nieuwe hypotheek](postback:hypotheektype_nieuw) `))
// //         .then(() => bot.say (`%[Hypotheek oversluiten](postback:hypotheektype_oversluiten)`))
// //         .then(() => 'selecteerHypotheek');
// //     }
// // },
//
// // speak: {
// //           receive: (bot, message) => {
// //
// //               const upperText = message.text.trim().toUpperCase();
// //
// //               function updateSilent() {
// //                   switch (upperText) {
// //                       case "CONNECT ME":
// //                           return bot.setProp("silent", true);
// //                       case "DISCONNECT":
// //                           return bot.setProp("silent", false);
// //                       default:
// //                           return Promise.resolve();
// //                   }
// //               }
// //
// //               function getSilent() {
// //                   return bot.getProp("silent");
// //               }
// //
// //               function processMessage(isSilent) {
// //                   if (isSilent) {
// //                       return Promise.resolve("speak");
// //                   }
// //
// //
// //                   /*  CREATE EXTRA JSON FILE FOR HYPO AND INCLUDE IT */
// //                   if (!_.has(scriptRules, upperText)) {
// //                       return bot.say('![](http://www.bieg.nl/beeld/speechbubble.gif)').then(() => 'speak');
// //                   }
// //
// //                   var response = scriptRules[upperText];
// //                   var lines = response.split('\n');
// //
// //                   var p = Promise.resolve();
// //                   _.each(lines, function(line) {
// //                       line = line.trim();
// //                       p = p.then(function() {
// //                           console.log(line);
// //                           return wait(50).then(function() {
// //                               return bot.say(line);
// //                           });
// //                       });
// //                   });
// //
// //                   return p.then(() => 'speak');
// //               }
// //
// //               return updateSilent()
// //                   .then(getSilent)
// //                   .then(processMessage);
// //           }
// // },
//
// // selecteerHypotheek: {
// //     receive: (bot, message) => {
// //       switch(message.text) {
// //       case 'Hoi':
// //             return bot.say(`${groet} waar ben je naar op zoek? %[Starters hypotheek](postback:hypotheektype_starter) %[Nieuwe hypotheek](postback:hypotheektype_nieuw) %[Hypotheek oversluiten](postback:hypotheektype_oversluiten)`)
// //             .then(() => 'askName')
// //           break;
// //       case 'Starters Hypotheek':
// //           return bot.say(`Wat voor type woning zoek je? `)
// //           .then(() => bot.say(`%[🏬 Appartement](postback:hypotheekkeuze_appartement) %[🏠 Huis](postback:hypotheekkeuze_huis) %[📭 Vakantiewoning](postback:hypotheekkeuze_vakantiewoning)`))
// //           .then(() => 'woningType')
// //               break;
// //         case 'Nieuwe hypotheek':
// //           return bot.say(`😞 Helaas biedt Independer momenteel alleen Starters een hypotheek aan.`)
// //           .then(() => bot.say(`Via onderstaande link kun je de beste hypotheekadviseur voor jou vinden. %[💼 Zoek Hypotheek Adviseur](https://www.independer.nl/hypotheekadviseur/jelocatie.aspx)`))
// //             .then(() => 'finish')
// //           break;
// //         case 'Hypotheek oversluiten':
// //           return bot.say(`😟 Het spijt me maar op dit moment biedt Independer alleen  Starters een hypotheek.`)
// //           .then(()=> bot.say(`Als het allemaal wel zo ver is, wil je dan een update ontvangen? %[Ja, dat wil ik wel](postback:update_ja) %[Nee, dat hoeft niet](postback:update_nee)`))
// //             .then(() => 'updateOntvangen')
// //           break;
// //         default:
// //           return bot.say(`![](http://www.bieg.nl/beeld/speechbubble.gif)`)
// //             .then(() => 'processing')
// //           break;
// //       }
// //     }
// // },
//
// // updateOntvangen: {
// //     receive: (bot, message) => {
// //       switch(message.text) {
// //         case 'Ja, dat wil ik wel':
// //             return bot.say(`👍 Leuk, dan houd ik  je op de hoogte zodra er weer nieuws is.`)
// //             .then(() => 'update_ja');
// //           break;
// //           case 'Nee, dat hoeft niet':
// //               receive: () => 'bye'
// //               break;
// //           default:
// //             receive: ()  => 'processing'
// //             break;
// //       }
// //     }
// // },
//
// // update_ja: {
// //   prompt: (bot) => bot.say('Wat is je email adres?'),
// //       receive: (bot, message) => {
// //           const emailer=message.text;
// //           return bot.setProp('emailer', emailer)
// //               .then(()  => bot.say(`Ok - ✉️  dan hou ik je via ${emailer} op de hoogte.`))
// //               .then(()  =>'lastCheck')
// //     }
// // },
//
// // update_nee: {
// //   receive: () => 'bye'
// // },
//
// // hypotheekStarter: {
// //     receive: () => 'askName'
// // },
//
// // hypotheektype_nieuw: {
// //     prompt: (bot) => bot.say('Independer biedt momenteel alleen voor Starters een hypotheek. Onderstaande link bied je meer informatie %[Hypotheek Adviseur](https://www.independer.nl/hypotheekadviseur/intro.aspx)'),
// //     receive: () => 'processing'
// // },
//
// // woningType: {
// //   receive: (bot, message) => {
// //     switch(message.text) {
// //         case '🏬 Appartement':
// //           return bot.say(`Nice!`)
// //           .then(() => 'vervolgVragen')
// //           break;
// //       case '🏠 Huis':
// //           return bot.say(`Leuk`)
// //           .then(() => 'vervolgVragen')
// //           break;
// //     case '📭 Vakantiewoning':
// //           return bot.say(`Gezellig`)
// //           .then(() => 'vervolgVragen')
// //           break;
// //       default:
// //         receive: ()  => 'processing'
// //         break;
// //         }
// //     }
// // },
//
// // vervolgVragen: {
// //   prompt: (bot) => bot.say('Hoe heet je eigelijk? 😋'),
// //           receive: (bot, message) => {
// //               const Name = message.text.trim().toUpperCase();
// //               return bot.setProp('Name', Name)
// //                   .then(() => bot.say(`Hoi ${Name}. 📋 Ik heb nog wat vragen voor je om verder te kunnen.`))
// //                   .then(() => 'processing')
// //             }
// // },
//
// // lastCheck: {
// //     prompt: (bot) => bot.say(' Is er nog iets waar ik  je bij kan helpen?  🔶  %[Ik zoek meer informatie](postback:meerInfo) %[Nee hoor](postback:bye)'),
// //           receive: (bot, message) => {
// //             switch(message.text) {
// //               case 'Nee hoor':
// //                   receive: ()  => 'bye'
// //                   break;
// //              case 'Ik zoek meer informatie':
// //                   receive: () => 'processing'
// //                   break;
// //             case 'Nee':
// //                   receive: () => 'bye'
// //                   break;
// //             default:
// //               receive:() => 'processing'
// //               break;
// //             }
// //         }
// // },
//
// // meerInfo: {
// //   prompt: (bot) => bot.say('bestand'),
// //    receive: () => 'processing'
// // },
//
// // bye: {
// //     prompt: (bot) => bot.say('Fijn je gesproken te hebben. Bedankt voor je tijd ⏲'),
// //     receive: ()  => 'finish'
// // },
//
// // error: {
// // prompt: (bot) => bot.say('Sorry - kun je dat nog eens zeggen?  Er ging iets mis...'),
// // receive: () => 'pri'
// // },
//
// // finish: {
// // receive: () => 'finish'
// // }
