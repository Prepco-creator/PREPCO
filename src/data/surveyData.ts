// healthSurveyData.ts - Health Quiz Questions + Outcomes

export const questions = [
  "Do you sleep 7+ hours every night?",
  "Do you exercise three times a week?",
  "Do you drink enough water daily?",
  "Do you eat fruits and veggies regularly?"
];

export const outcomeMap: Record<string, string> = {
  yyyy: 'You have excellent daily health habits! 🌟',
  yyyn: 'Great! Just add more fruits and veggies. 🥗',
  yyny: 'Strong hydration and nutrition — stay active! 💪',
  yynn: 'Good sleep and exercise, but improve your diet. 🍽️',
  ynny: 'You move and hydrate — time to sleep better. 🛏️',
  ynnn: 'You’re halfway there. Focus on sleep and nutrition. ⚖️',
  nyyy: 'You fuel your body well — now get active! 🚴‍♂️',
  nyyn: 'Healthy eating, but build a workout and sleep routine. 🕒',
  nyny: 'Good balance! Improve consistency and rest. 🧘',
  nynn: 'Need more rest and movement for better wellness. 🌧️',
  nnny: 'You eat okay — now hydrate, move, and rest. 🍎',
  nnnn: 'Let’s build small habits toward a healthier lifestyle. 🌱'
};
