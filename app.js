const EXACT_SIZE = 89;

const BUILT_IN_BASES = {
  blankBaseline10: {
    label: "Built-in blank baseline 10",
    bytes: [
      3, 1, 112, 116, 97, 46, 1, 0, 0, 241, 13, 10, 10, 10, 10, 10, 10,
      10, 10, 1, 1, 1, 20, 20, 6, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 5, 5, 15, 5, 15, 5, 50, 50, 12,
      50, 18, 50, 50, 100, 72, 50, 50, 50, 50, 50, 10, 10, 10, 50, 50,
      50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50,
      50,
    ],
  },
};

const visibleAttributes = [
  ["Corners", 62, "technical"],
  ["Crossing", 35, "technical"],
  ["Dribbling", 36, "technical"],
  ["Finishing", 37, "technical"],
  ["First Touch", 57, "technical"],
  ["Free Kick Taking", 70, "technical"],
  ["Heading", 38, "technical"],
  ["Long Shots", 39, "technical"],
  ["Long Throws", 65, "technical"],
  ["Marking", 40, "technical"],
  ["Passing", 42, "technical"],
  ["Penalty Taking", 43, "technical"],
  ["Tackling", 44, "technical"],
  ["Technique", 58, "technical"],
  ["Aggression", 80, "mental"],
  ["Anticipation", 52, "mental"],
  ["Bravery", 78, "mental"],
  ["Composure", 87, "mental"],
  ["Concentration", 88, "mental"],
  ["Decisions", 53, "mental"],
  ["Determination", 86, "mental"],
  ["Flair", 61, "mental"],
  ["Leadership", 75, "mental"],
  ["Off the Ball", 41, "mental"],
  ["Positioning", 55, "mental"],
  ["Teamwork", 63, "mental"],
  ["Vision", 45, "mental"],
  ["Work Rate", 64, "mental"],
  ["Acceleration", 69, "physical"],
  ["Agility", 81, "physical"],
  ["Balance", 77, "physical"],
  ["Jumping Reach", 74, "physical"],
  ["Natural Fitness", 85, "physical"],
  ["Pace", 73, "physical"],
  ["Stamina", 72, "physical"],
  ["Strength", 71, "physical"],
].map(([name, offset, category]) => ({
  name,
  offset,
  category,
  mode: "scaled",
  group: "visible",
}));

const visibleAttributeSections = [
  {
    title: "Technical",
    category: "technical",
  },
  {
    title: "Mental",
    category: "mental",
  },
  {
    title: "Physical",
    category: "physical",
  },
];

const hiddenAttributes = [
  ["Adaptability", 11, "direct"],
  ["Ambition", 12, "direct"],
  ["Loyalty", 13, "direct"],
  ["Pressure", 14, "direct"],
  ["Professionalism", 15, "direct"],
  ["Sportsmanship", 16, "direct"],
  ["Temperament", 17, "direct"],
  ["Controversy", 18, "direct"],
  ["Consistency", 79, "scaled"],
  ["Dirtiness", 76, "scaled"],
  ["Important Matches", 82, "scaled"],
  ["Injury Proneness", 83, "scaled"],
  ["Versatility", 84, "scaled"],
].map(([name, offset, mode]) => ({ name, offset, mode, group: "hidden" }));

const attributes = [...visibleAttributes, ...hiddenAttributes];
const attributeDescriptions = {
  Corners: "Quality and accuracy when delivering corner kicks.",
  Crossing: "Ability to deliver useful balls from wide or crossing positions.",
  Dribbling: "Close control while carrying the ball, helped by pace, agility, and balance.",
  Finishing: "Accuracy and placement when converting goalscoring chances.",
  "First Touch": "How quickly and cleanly the player controls received passes.",
  "Free Kick Taking": "Threat from direct free kicks and quality on indirect set pieces.",
  Heading: "Technique and reliability when using the head in aerial situations.",
  "Long Shots": "Shooting threat from outside the penalty area.",
  "Long Throws": "Distance and usefulness of throw-ins as attacking or territory tools.",
  Marking: "Tracking, reacting to, and denying opponents, especially defensively.",
  Passing: "Consistency and execution when finding teammates with passes.",
  "Penalty Taking": "Reliability from the penalty spot, supported by composure.",
  Tackling: "Ability to win the ball cleanly and avoid unnecessary fouls.",
  Technique: "Base technical class for difficult passes, touches, shots, and weaker-foot actions.",
  Aggression: "Willingness to get involved, press, challenge, and impose physically.",
  Anticipation: "Reading play early and reacting before others.",
  Bravery: "Willingness to contest risky aerials, blocks, and challenges.",
  Composure: "Calmness under pressure, especially on the ball or in big moments.",
  Concentration: "Focus and reliability across repeated match events.",
  Decisions: "How often the player chooses the right action for the situation.",
  Determination: "Drive to keep pushing and compete strongly on and off the pitch.",
  Flair: "Creative unpredictability and willingness to attempt risky attacking actions.",
  Leadership: "Influence over teammates and presence on the pitch.",
  "Off the Ball": "Attacking movement and ability to find space without possession.",
  Positioning: "Defensive location sense: where to stand, mark, cover, and react.",
  Teamwork: "How well the player follows instructions and supports teammates.",
  Vision: "Ability to spot opportunities that other players may miss.",
  "Work Rate": "Mental drive to keep working and get into required positions.",
  Acceleration: "How quickly the player reaches top speed from a start.",
  Agility: "Ability to start, stop, turn, and change direction at speed.",
  Balance: "Stability when running, turning, evading contact, or defending movement.",
  "Jumping Reach": "How high the player can reach aerial balls, influenced by height.",
  "Natural Fitness": "Physical resilience, recovery, and ability to retain fitness over time.",
  Pace: "Top speed once the player is fully moving.",
  Stamina: "Ability to sustain physical output over a match or season.",
  Strength: "Physical power when competing with opponents.",
  Adaptability: "How well the player settles into new clubs, countries, and environments.",
  Ambition: "Drive to improve, achieve more, and pursue bigger goals.",
  Loyalty: "Attachment to the current club and resistance to outside opportunities.",
  Pressure: "Emotional resilience in high-stakes or demanding situations.",
  Professionalism: "Dedication to training, development, discipline, and career habits.",
  Sportsmanship: "Fairness and respectful conduct toward teammates, opponents, and officials.",
  Temperament: "Self-control when facing frustration, setbacks, or provocation.",
  Controversy: "Likelihood of confrontational or disruptive behavior.",
  Consistency: "Ability to perform near the same level from match to match.",
  Dirtiness: "Tendency to bend or break rules, raising card risk.",
  "Important Matches": "Performance level in high-pressure, high-importance matches.",
  "Injury Proneness": "Likelihood of suffering injuries; higher means more injury risk.",
  Versatility: "Ability to play, adapt to, or learn positions outside the main role.",
};
const attributeValueGuidance = {
  Adaptability: "Higher is better for settling into new environments.",
  Ambition: "Higher means more career ambition; can be positive but may push transfers.",
  Loyalty: "Higher means more loyalty to the current club.",
  Pressure: "Higher is better under pressure.",
  Professionalism: "Higher is better for training, development, and discipline.",
  Sportsmanship: "Higher means fairer, more sporting behavior.",
  Temperament: "Higher is better self-control.",
  Controversy: "Lower is safer; higher means more controversial or disruptive.",
  Consistency: "Higher is better match-to-match reliability.",
  Dirtiness: "Lower is cleaner; higher means more dirty fouls and card risk.",
  "Important Matches": "Higher is better in big matches.",
  "Injury Proneness": "Lower is better; 20 means very injury-prone.",
  Versatility: "Higher is better for covering or learning more positions.",
};
const baselinePresetValues = Object.fromEntries(
  attributes.map((attribute) => [attribute.name, 10]),
);

const presets = {
  none: {
    label: "No second preset",
    values: {},
    neutral: true,
  },
  blank10: {
    label: "Blank baseline 10",
    values: baselinePresetValues,
  },
  maldini: {
    label: "Paolo Maldini Prime",
    values: {
      Crossing: 13,
      Dribbling: 15,
      Finishing: 7,
      Heading: 19,
      "Long Shots": 7,
      Marking: 20,
      "Off the Ball": 12,
      Passing: 17,
      "Penalty Taking": 7,
      Tackling: 20,
      Vision: 15,
      Anticipation: 20,
      Decisions: 20,
      Positioning: 20,
      "First Touch": 18,
      Technique: 17,
      Flair: 8,
      Corners: 8,
      Teamwork: 20,
      "Work Rate": 19,
      "Long Throws": 6,
      Acceleration: 18,
      "Free Kick Taking": 6,
      Strength: 19,
      Stamina: 20,
      Pace: 18,
      "Jumping Reach": 19,
      Leadership: 20,
      Balance: 19,
      Bravery: 20,
      Aggression: 17,
      Agility: 17,
      "Natural Fitness": 20,
      Determination: 20,
      Composure: 20,
      Concentration: 20,
      Adaptability: 16,
      Ambition: 18,
      Loyalty: 20,
      Pressure: 19,
      Professionalism: 20,
      Sportsmanship: 18,
      Temperament: 18,
      Controversy: 3,
      Dirtiness: 5,
      Consistency: 20,
      "Important Matches": 19,
      "Injury Proneness": 4,
      Versatility: 17,
    },
  },
  zidaneScholes: {
    label: "Zidane-Scholes Hybrid",
    values: {
      Crossing: 16,
      Dribbling: 18,
      Finishing: 15,
      Heading: 14,
      "Long Shots": 18,
      Marking: 14,
      "Off the Ball": 20,
      Passing: 17,
      "Penalty Taking": 10,
      Tackling: 19,
      Vision: 6,
      Anticipation: 11,
      Decisions: 20,
      Positioning: 15,
      "First Touch": 10,
      Technique: 20,
      Flair: 20,
      Corners: 18,
      Teamwork: 20,
      "Work Rate": 17,
      "Long Throws": 20,
      Acceleration: 13,
      "Free Kick Taking": 16,
      Strength: 20,
      Stamina: 16,
      Pace: 17,
      "Jumping Reach": 17,
      Leadership: 13,
      Balance: 19,
      Bravery: 20,
      Aggression: 16,
      Agility: 17,
      "Natural Fitness": 12,
      Determination: 16,
      Composure: 18,
      Concentration: 19,
      Adaptability: 15,
      Ambition: 17,
      Loyalty: 14,
      Pressure: 19,
      Professionalism: 18,
      Sportsmanship: 14,
      Temperament: 17,
      Controversy: 8,
      Dirtiness: 7,
      Consistency: 18,
      "Important Matches": 19,
      "Injury Proneness": 8,
      Versatility: 16,
    },
  },
  messiPrime: {
    label: "Lionel Messi Prime",
    values: {
      Crossing: 16,
      Dribbling: 20,
      Finishing: 20,
      Heading: 10,
      "Long Shots": 18,
      Marking: 4,
      "Off the Ball": 19,
      Passing: 19,
      "Penalty Taking": 17,
      Tackling: 6,
      Vision: 20,
      Anticipation: 19,
      Decisions: 20,
      Positioning: 16,
      "First Touch": 20,
      Technique: 20,
      Flair: 20,
      Corners: 17,
      Teamwork: 16,
      "Work Rate": 13,
      Acceleration: 19,
      "Free Kick Taking": 19,
      Strength: 12,
      Stamina: 16,
      Pace: 17,
      Balance: 20,
      Agility: 20,
      Determination: 17,
      Composure: 20,
      Concentration: 17,
      Ambition: 19,
      Pressure: 20,
      Professionalism: 18,
      Temperament: 18,
      Consistency: 20,
      "Important Matches": 20,
      "Injury Proneness": 5,
      Versatility: 16,
    },
  },
  ronaldoPrime: {
    label: "Cristiano Ronaldo Prime",
    values: {
      Crossing: 15,
      Dribbling: 18,
      Finishing: 20,
      Heading: 20,
      "Long Shots": 19,
      Marking: 5,
      "Off the Ball": 20,
      Passing: 15,
      "Penalty Taking": 20,
      Tackling: 7,
      Vision: 15,
      Anticipation: 19,
      Decisions: 18,
      Positioning: 18,
      "First Touch": 18,
      Technique: 19,
      Flair: 18,
      Teamwork: 14,
      "Work Rate": 17,
      Acceleration: 19,
      "Free Kick Taking": 18,
      Strength: 18,
      Stamina: 19,
      Pace: 19,
      "Jumping Reach": 20,
      Leadership: 17,
      Balance: 17,
      Bravery: 18,
      Agility: 18,
      "Natural Fitness": 20,
      Determination: 20,
      Composure: 20,
      Concentration: 18,
      Ambition: 20,
      Pressure: 20,
      Professionalism: 20,
      Temperament: 17,
      Consistency: 20,
      "Important Matches": 20,
      "Injury Proneness": 4,
      Versatility: 15,
    },
  },
  haaland: {
    label: "Erling Haaland",
    values: {
      Dribbling: 14,
      Finishing: 20,
      Heading: 18,
      "Long Shots": 16,
      Marking: 4,
      "Off the Ball": 20,
      Passing: 13,
      "Penalty Taking": 18,
      Tackling: 6,
      Vision: 12,
      Anticipation: 19,
      Decisions: 16,
      Positioning: 17,
      "First Touch": 16,
      Technique: 16,
      Flair: 15,
      Teamwork: 13,
      "Work Rate": 16,
      Acceleration: 18,
      Strength: 19,
      Stamina: 17,
      Pace: 19,
      "Jumping Reach": 18,
      Balance: 17,
      Bravery: 18,
      Agility: 15,
      "Natural Fitness": 18,
      Determination: 18,
      Composure: 18,
      Concentration: 16,
      Ambition: 19,
      Pressure: 18,
      Professionalism: 18,
      Consistency: 18,
      "Important Matches": 18,
      "Injury Proneness": 7,
    },
  },
  mbappe: {
    label: "Kylian Mbappe",
    values: {
      Crossing: 14,
      Dribbling: 19,
      Finishing: 19,
      Heading: 12,
      "Long Shots": 16,
      Marking: 5,
      "Off the Ball": 19,
      Passing: 15,
      "Penalty Taking": 16,
      Tackling: 6,
      Vision: 16,
      Anticipation: 18,
      Decisions: 17,
      Positioning: 16,
      "First Touch": 18,
      Technique: 18,
      Flair: 18,
      Teamwork: 14,
      "Work Rate": 14,
      Acceleration: 20,
      Strength: 15,
      Stamina: 17,
      Pace: 20,
      Balance: 16,
      Agility: 19,
      "Natural Fitness": 18,
      Determination: 18,
      Composure: 18,
      Concentration: 16,
      Ambition: 20,
      Pressure: 19,
      Professionalism: 17,
      Consistency: 18,
      "Important Matches": 19,
      "Injury Proneness": 6,
      Versatility: 15,
    },
  },
  deBruyne: {
    label: "Kevin De Bruyne",
    values: {
      Crossing: 19,
      Dribbling: 16,
      Finishing: 16,
      Heading: 12,
      "Long Shots": 18,
      Marking: 9,
      "Off the Ball": 17,
      Passing: 20,
      "Penalty Taking": 15,
      Tackling: 12,
      Vision: 20,
      Anticipation: 18,
      Decisions: 19,
      Positioning: 14,
      "First Touch": 19,
      Technique: 19,
      Flair: 17,
      Corners: 18,
      Teamwork: 18,
      "Work Rate": 17,
      Acceleration: 14,
      "Free Kick Taking": 18,
      Strength: 14,
      Stamina: 17,
      Pace: 14,
      Balance: 15,
      Bravery: 15,
      Agility: 15,
      "Natural Fitness": 15,
      Determination: 18,
      Composure: 18,
      Concentration: 18,
      Ambition: 18,
      Pressure: 19,
      Professionalism: 19,
      Temperament: 17,
      Consistency: 19,
      "Important Matches": 19,
      "Injury Proneness": 9,
      Versatility: 17,
    },
  },
  vanDijk: {
    label: "Virgil van Dijk",
    values: {
      Crossing: 9,
      Dribbling: 11,
      Finishing: 8,
      Heading: 19,
      "Long Shots": 10,
      Marking: 20,
      "Off the Ball": 9,
      Passing: 16,
      Tackling: 19,
      Vision: 13,
      Anticipation: 19,
      Decisions: 18,
      Positioning: 19,
      "First Touch": 15,
      Technique: 15,
      Teamwork: 17,
      "Work Rate": 15,
      Acceleration: 14,
      Strength: 19,
      Stamina: 16,
      Pace: 15,
      "Jumping Reach": 19,
      Leadership: 19,
      Balance: 17,
      Bravery: 18,
      Aggression: 14,
      Agility: 14,
      "Natural Fitness": 17,
      Determination: 18,
      Composure: 19,
      Concentration: 19,
      Ambition: 17,
      Pressure: 19,
      Professionalism: 19,
      Temperament: 18,
      Consistency: 19,
      "Important Matches": 18,
      "Injury Proneness": 6,
    },
  },
  neuer: {
    label: "Manuel Neuer Sweeper Keeper",
    values: {
      Crossing: 5,
      Dribbling: 9,
      Finishing: 3,
      Heading: 8,
      "Long Shots": 5,
      Marking: 5,
      "Off the Ball": 8,
      Passing: 15,
      Tackling: 7,
      Vision: 15,
      Anticipation: 18,
      Decisions: 18,
      Positioning: 16,
      "First Touch": 14,
      Technique: 14,
      Flair: 10,
      Teamwork: 17,
      "Work Rate": 14,
      Acceleration: 12,
      Strength: 15,
      Stamina: 13,
      Pace: 13,
      "Jumping Reach": 16,
      Leadership: 18,
      Balance: 15,
      Bravery: 20,
      Agility: 16,
      "Natural Fitness": 16,
      Determination: 18,
      Composure: 19,
      Concentration: 18,
      Adaptability: 15,
      Ambition: 17,
      Pressure: 19,
      Professionalism: 20,
      Temperament: 18,
      Consistency: 19,
      "Important Matches": 19,
      "Injury Proneness": 6,
    },
  },
  pele: {
    label: "Pele",
    values: {
      Crossing: 12,
      Dribbling: 18,
      Finishing: 20,
      Heading: 18,
      "Long Shots": 16,
      Marking: 5,
      "Off the Ball": 19,
      Passing: 16,
      "Penalty Taking": 17,
      Tackling: 5,
      Vision: 16,
      Anticipation: 19,
      Decisions: 17,
      Positioning: 12,
      "First Touch": 18,
      Technique: 18,
      Flair: 17,
      Corners: 12,
      Teamwork: 16,
      "Work Rate": 16,
      "Long Throws": 10,
      Acceleration: 18,
      "Free Kick Taking": 15,
      Strength: 17,
      Stamina: 16,
      Pace: 17,
      "Jumping Reach": 18,
      Leadership: 18,
      Balance: 18,
      Bravery: 16,
      Aggression: 14,
      Agility: 17,
      "Natural Fitness": 18,
      Determination: 20,
      Composure: 18,
      Concentration: 17,
      Adaptability: 14,
      Ambition: 18,
      Loyalty: 16,
      Pressure: 18,
      Professionalism: 18,
      Sportsmanship: 16,
      Temperament: 16,
      Controversy: 6,
      Dirtiness: 5,
      Consistency: 19,
      "Important Matches": 20,
      "Injury Proneness": 10,
      Versatility: 14,
    },
  },
  maradona: {
    label: "Diego Maradona",
    values: {
      Crossing: 13,
      Dribbling: 20,
      Finishing: 17,
      Heading: 8,
      "Long Shots": 16,
      Marking: 5,
      "Off the Ball": 18,
      Passing: 19,
      "Penalty Taking": 15,
      Tackling: 7,
      Vision: 19,
      Anticipation: 18,
      Decisions: 18,
      Positioning: 12,
      "First Touch": 20,
      Technique: 20,
      Flair: 20,
      Corners: 14,
      Teamwork: 16,
      "Work Rate": 15,
      "Long Throws": 8,
      Acceleration: 18,
      "Free Kick Taking": 19,
      Strength: 14,
      Stamina: 14,
      Pace: 16,
      "Jumping Reach": 10,
      Leadership: 18,
      Balance: 20,
      Bravery: 17,
      Aggression: 16,
      Agility: 19,
      "Natural Fitness": 14,
      Determination: 19,
      Composure: 17,
      Concentration: 16,
      Adaptability: 13,
      Ambition: 17,
      Loyalty: 12,
      Pressure: 17,
      Professionalism: 14,
      Sportsmanship: 13,
      Temperament: 12,
      Controversy: 14,
      Dirtiness: 12,
      Consistency: 17,
      "Important Matches": 19,
      "Injury Proneness": 12,
      Versatility: 15,
    },
  },
  ronaldoNazario: {
    label: "Ronaldo Nazario",
    values: {
      Crossing: 12,
      Dribbling: 20,
      Finishing: 20,
      Heading: 14,
      "Long Shots": 16,
      Marking: 4,
      "Off the Ball": 20,
      Passing: 14,
      "Penalty Taking": 16,
      Tackling: 5,
      Vision: 15,
      Anticipation: 19,
      Decisions: 16,
      Positioning: 14,
      "First Touch": 19,
      Technique: 19,
      Flair: 19,
      Corners: 10,
      Teamwork: 13,
      "Work Rate": 14,
      "Long Throws": 8,
      Acceleration: 20,
      "Free Kick Taking": 14,
      Strength: 16,
      Stamina: 15,
      Pace: 20,
      "Jumping Reach": 14,
      Leadership: 12,
      Balance: 19,
      Bravery: 15,
      Aggression: 13,
      Agility: 19,
      "Natural Fitness": 16,
      Determination: 18,
      Composure: 17,
      Concentration: 16,
      Adaptability: 14,
      Ambition: 16,
      Loyalty: 14,
      Pressure: 17,
      Professionalism: 16,
      Sportsmanship: 15,
      Temperament: 15,
      Controversy: 8,
      Dirtiness: 6,
      Consistency: 16,
      "Important Matches": 18,
      "Injury Proneness": 14,
      Versatility: 12,
    },
  },
  ronaldinho: {
    label: "Ronaldinho",
    values: {
      Crossing: 14,
      Dribbling: 20,
      Finishing: 16,
      Heading: 8,
      "Long Shots": 15,
      Marking: 4,
      "Off the Ball": 17,
      Passing: 18,
      "Penalty Taking": 14,
      Tackling: 6,
      Vision: 18,
      Anticipation: 16,
      Decisions: 16,
      Positioning: 10,
      "First Touch": 20,
      Technique: 20,
      Flair: 20,
      Corners: 15,
      Teamwork: 15,
      "Work Rate": 13,
      "Long Throws": 10,
      Acceleration: 17,
      "Free Kick Taking": 18,
      Strength: 14,
      Stamina: 14,
      Pace: 16,
      "Jumping Reach": 10,
      Leadership: 13,
      Balance: 19,
      Bravery: 14,
      Aggression: 12,
      Agility: 19,
      "Natural Fitness": 15,
      Determination: 15,
      Composure: 17,
      Concentration: 14,
      Adaptability: 15,
      Ambition: 14,
      Loyalty: 14,
      Pressure: 16,
      Professionalism: 14,
      Sportsmanship: 16,
      Temperament: 15,
      Controversy: 10,
      Dirtiness: 8,
      Consistency: 15,
      "Important Matches": 17,
      "Injury Proneness": 10,
      Versatility: 16,
    },
  },
  zidane: {
    label: "Zinedine Zidane",
    values: {
      Crossing: 13,
      Dribbling: 18,
      Finishing: 15,
      Heading: 13,
      "Long Shots": 16,
      Marking: 8,
      "Off the Ball": 16,
      Passing: 20,
      "Penalty Taking": 14,
      Tackling: 12,
      Vision: 20,
      Anticipation: 17,
      Decisions: 19,
      Positioning: 14,
      "First Touch": 20,
      Technique: 20,
      Flair: 18,
      Corners: 12,
      Teamwork: 17,
      "Work Rate": 16,
      "Long Throws": 9,
      Acceleration: 15,
      "Free Kick Taking": 17,
      Strength: 16,
      Stamina: 17,
      Pace: 14,
      "Jumping Reach": 13,
      Leadership: 19,
      Balance: 18,
      Bravery: 16,
      Aggression: 14,
      Agility: 16,
      "Natural Fitness": 17,
      Determination: 18,
      Composure: 20,
      Concentration: 17,
      Adaptability: 14,
      Ambition: 17,
      Loyalty: 16,
      Pressure: 19,
      Professionalism: 18,
      Sportsmanship: 15,
      Temperament: 14,
      Controversy: 12,
      Dirtiness: 7,
      Consistency: 18,
      "Important Matches": 20,
      "Injury Proneness": 8,
      Versatility: 15,
    },
  },
  xavi: {
    label: "Xavi",
    values: {
      Crossing: 11,
      Dribbling: 16,
      Finishing: 8,
      Heading: 7,
      "Long Shots": 12,
      Marking: 12,
      "Off the Ball": 16,
      Passing: 20,
      "Penalty Taking": 10,
      Tackling: 14,
      Vision: 20,
      Anticipation: 18,
      Decisions: 20,
      Positioning: 17,
      "First Touch": 20,
      Technique: 20,
      Flair: 14,
      Corners: 10,
      Teamwork: 20,
      "Work Rate": 18,
      "Long Throws": 8,
      Acceleration: 13,
      "Free Kick Taking": 14,
      Strength: 13,
      Stamina: 19,
      Pace: 12,
      "Jumping Reach": 8,
      Leadership: 17,
      Balance: 16,
      Bravery: 14,
      Aggression: 13,
      Agility: 15,
      "Natural Fitness": 18,
      Determination: 18,
      Composure: 20,
      Concentration: 19,
      Adaptability: 16,
      Ambition: 16,
      Loyalty: 19,
      Pressure: 18,
      Professionalism: 20,
      Sportsmanship: 17,
      Temperament: 17,
      Controversy: 5,
      Dirtiness: 4,
      Consistency: 19,
      "Important Matches": 19,
      "Injury Proneness": 8,
      Versatility: 14,
    },
  },
  iniesta: {
    label: "Andres Iniesta",
    values: {
      Crossing: 12,
      Dribbling: 19,
      Finishing: 12,
      Heading: 7,
      "Long Shots": 13,
      Marking: 9,
      "Off the Ball": 17,
      Passing: 19,
      "Penalty Taking": 11,
      Tackling: 12,
      Vision: 19,
      Anticipation: 17,
      Decisions: 19,
      Positioning: 15,
      "First Touch": 20,
      Technique: 20,
      Flair: 17,
      Corners: 10,
      Teamwork: 19,
      "Work Rate": 17,
      "Long Throws": 8,
      Acceleration: 15,
      "Free Kick Taking": 13,
      Strength: 12,
      Stamina: 17,
      Pace: 14,
      "Jumping Reach": 8,
      Leadership: 14,
      Balance: 19,
      Bravery: 14,
      Aggression: 12,
      Agility: 18,
      "Natural Fitness": 16,
      Determination: 17,
      Composure: 20,
      Concentration: 17,
      Adaptability: 15,
      Ambition: 15,
      Loyalty: 18,
      Pressure: 18,
      Professionalism: 19,
      Sportsmanship: 18,
      Temperament: 17,
      Controversy: 6,
      Dirtiness: 5,
      Consistency: 18,
      "Important Matches": 18,
      "Injury Proneness": 10,
      Versatility: 16,
    },
  },
  henry: {
    label: "Thierry Henry",
    values: {
      Crossing: 14,
      Dribbling: 17,
      Finishing: 19,
      Heading: 14,
      "Long Shots": 16,
      Marking: 6,
      "Off the Ball": 20,
      Passing: 16,
      "Penalty Taking": 14,
      Tackling: 7,
      Vision: 16,
      Anticipation: 19,
      Decisions: 17,
      Positioning: 14,
      "First Touch": 18,
      Technique: 18,
      Flair: 17,
      Corners: 12,
      Teamwork: 16,
      "Work Rate": 16,
      "Long Throws": 9,
      Acceleration: 20,
      "Free Kick Taking": 13,
      Strength: 15,
      Stamina: 17,
      Pace: 20,
      "Jumping Reach": 14,
      Leadership: 14,
      Balance: 17,
      Bravery: 14,
      Aggression: 13,
      Agility: 18,
      "Natural Fitness": 17,
      Determination: 18,
      Composure: 17,
      Concentration: 16,
      Adaptability: 15,
      Ambition: 17,
      Loyalty: 15,
      Pressure: 17,
      Professionalism: 17,
      Sportsmanship: 16,
      Temperament: 15,
      Controversy: 8,
      Dirtiness: 6,
      Consistency: 18,
      "Important Matches": 18,
      "Injury Proneness": 9,
      Versatility: 14,
    },
  },
  cruyff: {
    label: "Johan Cruyff",
    values: {
      Crossing: 13,
      Dribbling: 18,
      Finishing: 16,
      Heading: 11,
      "Long Shots": 15,
      Marking: 8,
      "Off the Ball": 18,
      Passing: 19,
      "Penalty Taking": 13,
      Tackling: 10,
      Vision: 20,
      Anticipation: 19,
      Decisions: 19,
      Positioning: 16,
      "First Touch": 19,
      Technique: 19,
      Flair: 19,
      Corners: 11,
      Teamwork: 17,
      "Work Rate": 17,
      "Long Throws": 8,
      Acceleration: 17,
      "Free Kick Taking": 14,
      Strength: 14,
      Stamina: 16,
      Pace: 16,
      "Jumping Reach": 12,
      Leadership: 17,
      Balance: 16,
      Bravery: 15,
      Aggression: 14,
      Agility: 17,
      "Natural Fitness": 16,
      Determination: 17,
      Composure: 18,
      Concentration: 17,
      Adaptability: 18,
      Ambition: 17,
      Loyalty: 14,
      Pressure: 17,
      Professionalism: 16,
      Sportsmanship: 15,
      Temperament: 14,
      Controversy: 10,
      Dirtiness: 8,
      Consistency: 17,
      "Important Matches": 18,
      "Injury Proneness": 10,
      Versatility: 18,
    },
  },
  beckenbauer: {
    label: "Franz Beckenbauer",
    values: {
      Crossing: 12,
      Dribbling: 14,
      Finishing: 10,
      Heading: 16,
      "Long Shots": 13,
      Marking: 18,
      "Off the Ball": 14,
      Passing: 18,
      "Penalty Taking": 10,
      Tackling: 17,
      Vision: 18,
      Anticipation: 19,
      Decisions: 20,
      Positioning: 20,
      "First Touch": 17,
      Technique: 17,
      Flair: 14,
      Corners: 8,
      Teamwork: 18,
      "Work Rate": 17,
      "Long Throws": 10,
      Acceleration: 14,
      "Free Kick Taking": 12,
      Strength: 16,
      Stamina: 17,
      Pace: 14,
      "Jumping Reach": 15,
      Leadership: 20,
      Balance: 16,
      Bravery: 16,
      Aggression: 14,
      Agility: 15,
      "Natural Fitness": 17,
      Determination: 18,
      Composure: 20,
      Concentration: 18,
      Adaptability: 16,
      Ambition: 16,
      Loyalty: 17,
      Pressure: 18,
      Professionalism: 19,
      Sportsmanship: 16,
      Temperament: 16,
      Controversy: 7,
      Dirtiness: 5,
      Consistency: 19,
      "Important Matches": 19,
      "Injury Proneness": 8,
      Versatility: 16,
    },
  },
  buffon: {
    label: "Gianluigi Buffon",
    values: {
      Crossing: 3,
      Dribbling: 4,
      Finishing: 3,
      Heading: 8,
      "Long Shots": 4,
      Marking: 6,
      "Off the Ball": 5,
      Passing: 12,
      "Penalty Taking": 10,
      Tackling: 6,
      Vision: 13,
      Anticipation: 19,
      Decisions: 18,
      Positioning: 19,
      "First Touch": 12,
      Technique: 12,
      Flair: 8,
      Corners: 1,
      Teamwork: 17,
      "Work Rate": 15,
      "Long Throws": 12,
      Acceleration: 13,
      "Free Kick Taking": 5,
      Strength: 16,
      Stamina: 16,
      Pace: 12,
      "Jumping Reach": 17,
      Leadership: 18,
      Balance: 14,
      Bravery: 18,
      Aggression: 14,
      Agility: 16,
      "Natural Fitness": 18,
      Determination: 19,
      Composure: 20,
      Concentration: 19,
      Adaptability: 15,
      Ambition: 16,
      Loyalty: 19,
      Pressure: 19,
      Professionalism: 20,
      Sportsmanship: 17,
      Temperament: 17,
      Controversy: 6,
      Dirtiness: 4,
      Consistency: 19,
      "Important Matches": 19,
      "Injury Proneness": 8,
      Versatility: 10,
    },
  },
  casillas: {
    label: "Iker Casillas",
    values: {
      Crossing: 3,
      Dribbling: 4,
      Finishing: 3,
      Heading: 7,
      "Long Shots": 4,
      Marking: 5,
      "Off the Ball": 5,
      Passing: 11,
      "Penalty Taking": 9,
      Tackling: 5,
      Vision: 12,
      Anticipation: 19,
      Decisions: 17,
      Positioning: 18,
      "First Touch": 11,
      Technique: 11,
      Flair: 7,
      Corners: 1,
      Teamwork: 18,
      "Work Rate": 15,
      "Long Throws": 10,
      Acceleration: 14,
      "Free Kick Taking": 4,
      Strength: 15,
      Stamina: 16,
      Pace: 12,
      "Jumping Reach": 16,
      Leadership: 17,
      Balance: 14,
      Bravery: 18,
      Aggression: 13,
      Agility: 17,
      "Natural Fitness": 17,
      Determination: 18,
      Composure: 19,
      Concentration: 19,
      Adaptability: 14,
      Ambition: 15,
      Loyalty: 19,
      Pressure: 19,
      Professionalism: 19,
      Sportsmanship: 18,
      Temperament: 17,
      Controversy: 5,
      Dirtiness: 4,
      Consistency: 19,
      "Important Matches": 19,
      "Injury Proneness": 7,
      Versatility: 10,
    },
  },
  lahm: {
    label: "Philipp Lahm",
    values: {
      Crossing: 16,
      Dribbling: 14,
      Finishing: 8,
      Heading: 10,
      "Long Shots": 11,
      Marking: 17,
      "Off the Ball": 16,
      Passing: 18,
      "Penalty Taking": 10,
      Tackling: 18,
      Vision: 17,
      Anticipation: 18,
      Decisions: 19,
      Positioning: 19,
      "First Touch": 17,
      Technique: 17,
      Flair: 12,
      Corners: 10,
      Teamwork: 20,
      "Work Rate": 19,
      "Long Throws": 10,
      Acceleration: 16,
      "Free Kick Taking": 11,
      Strength: 14,
      Stamina: 19,
      Pace: 16,
      "Jumping Reach": 11,
      Leadership: 19,
      Balance: 17,
      Bravery: 16,
      Aggression: 13,
      Agility: 16,
      "Natural Fitness": 18,
      Determination: 19,
      Composure: 19,
      Concentration: 18,
      Adaptability: 17,
      Ambition: 16,
      Loyalty: 18,
      Pressure: 18,
      Professionalism: 20,
      Sportsmanship: 17,
      Temperament: 17,
      Controversy: 5,
      Dirtiness: 4,
      Consistency: 19,
      "Important Matches": 18,
      "Injury Proneness": 7,
      Versatility: 18,
    },
  },
  robertoCarlos: {
    label: "Roberto Carlos",
    values: {
      Crossing: 18,
      Dribbling: 14,
      Finishing: 12,
      Heading: 10,
      "Long Shots": 18,
      Marking: 13,
      "Off the Ball": 16,
      Passing: 15,
      "Penalty Taking": 12,
      Tackling: 14,
      Vision: 14,
      Anticipation: 15,
      Decisions: 15,
      Positioning: 14,
      "First Touch": 15,
      Technique: 16,
      Flair: 16,
      Corners: 14,
      Teamwork: 15,
      "Work Rate": 18,
      "Long Throws": 16,
      Acceleration: 18,
      "Free Kick Taking": 18,
      Strength: 17,
      Stamina: 18,
      Pace: 19,
      "Jumping Reach": 14,
      Leadership: 14,
      Balance: 16,
      Bravery: 16,
      Aggression: 16,
      Agility: 16,
      "Natural Fitness": 17,
      Determination: 17,
      Composure: 15,
      Concentration: 14,
      Adaptability: 14,
      Ambition: 15,
      Loyalty: 16,
      Pressure: 16,
      Professionalism: 16,
      Sportsmanship: 15,
      Temperament: 14,
      Controversy: 9,
      Dirtiness: 8,
      Consistency: 17,
      "Important Matches": 17,
      "Injury Proneness": 9,
      Versatility: 14,
    },
  },
  pirlo: {
    label: "Andrea Pirlo",
    values: {
      Crossing: 12,
      Dribbling: 15,
      Finishing: 9,
      Heading: 7,
      "Long Shots": 17,
      Marking: 10,
      "Off the Ball": 15,
      Passing: 20,
      "Penalty Taking": 16,
      Tackling: 12,
      Vision: 20,
      Anticipation: 17,
      Decisions: 19,
      Positioning: 16,
      "First Touch": 19,
      Technique: 20,
      Flair: 17,
      Corners: 13,
      Teamwork: 17,
      "Work Rate": 15,
      "Long Throws": 10,
      Acceleration: 11,
      "Free Kick Taking": 20,
      Strength: 13,
      Stamina: 16,
      Pace: 10,
      "Jumping Reach": 8,
      Leadership: 15,
      Balance: 15,
      Bravery: 13,
      Aggression: 11,
      Agility: 14,
      "Natural Fitness": 16,
      Determination: 17,
      Composure: 20,
      Concentration: 18,
      Adaptability: 15,
      Ambition: 15,
      Loyalty: 17,
      Pressure: 18,
      Professionalism: 18,
      Sportsmanship: 16,
      Temperament: 16,
      Controversy: 7,
      Dirtiness: 5,
      Consistency: 18,
      "Important Matches": 18,
      "Injury Proneness": 9,
      Versatility: 14,
    },
  },
};

const playerPresetSeeds = {
  blank10: {
    label: "Blank baseline 10",
    values: baselinePresetValues,
  },
  maldini: {
    label: "Paolo Maldini",
    values: presets.maldini.values,
  },
  zidaneScholes: {
    label: "Zidane-Scholes Hybrid",
    values: presets.zidaneScholes.values,
  },
  messi: {
    label: "Lionel Messi",
    values: presets.messiPrime.values,
  },
  ronaldo: {
    label: "Cristiano Ronaldo",
    values: presets.ronaldoPrime.values,
  },
  haaland: {
    label: "Erling Haaland",
    values: presets.haaland.values,
  },
  mbappe: {
    label: "Kylian Mbappe",
    values: presets.mbappe.values,
  },
  deBruyne: {
    label: "Kevin De Bruyne",
    values: presets.deBruyne.values,
  },
  vanDijk: {
    label: "Virgil van Dijk",
    values: presets.vanDijk.values,
  },
  neuer: {
    label: "Manuel Neuer",
    values: presets.neuer.values,
  },
  pele: {
    label: "Pele",
    values: presets.pele.values,
  },
  maradona: {
    label: "Diego Maradona",
    values: presets.maradona.values,
  },
  ronaldoNazario: {
    label: "Ronaldo Nazario",
    values: presets.ronaldoNazario.values,
  },
  ronaldinho: {
    label: "Ronaldinho",
    values: presets.ronaldinho.values,
  },
  zidane: {
    label: "Zinedine Zidane",
    values: presets.zidane.values,
  },
  xavi: {
    label: "Xavi",
    values: presets.xavi.values,
  },
  iniesta: {
    label: "Andres Iniesta",
    values: presets.iniesta.values,
  },
  henry: {
    label: "Thierry Henry",
    values: presets.henry.values,
  },
  cruyff: {
    label: "Johan Cruyff",
    values: presets.cruyff.values,
  },
  beckenbauer: {
    label: "Franz Beckenbauer",
    values: presets.beckenbauer.values,
  },
  buffon: {
    label: "Gianluigi Buffon",
    values: presets.buffon.values,
  },
  casillas: {
    label: "Iker Casillas",
    values: presets.casillas.values,
  },
  lahm: {
    label: "Philipp Lahm",
    values: presets.lahm.values,
  },
  robertoCarlos: {
    label: "Roberto Carlos",
    values: presets.robertoCarlos.values,
  },
  pirlo: {
    label: "Andrea Pirlo",
    values: presets.pirlo.values,
  },
};

const profileAdjustments = {
  wonderkid: {
    label: "Wonderkid",
    technical: -2,
    mental: -4,
    physical: -1,
    hidden: -3,
    overrides: {
      Ambition: 2,
      Determination: 1,
      Pressure: -5,
      Consistency: -5,
      "Important Matches": -5,
      Leadership: -6,
      Strength: -3,
      Stamina: -2,
      "Natural Fitness": 0,
      Pace: 0,
      Acceleration: 0,
      Agility: 0,
    },
  },
  veteran: {
    label: "Veteran",
    technical: 0,
    mental: 1,
    physical: -4,
    hidden: 0,
    overrides: {
      Anticipation: 1,
      Decisions: 1,
      Positioning: 1,
      Leadership: 1,
      Composure: 1,
      Concentration: 1,
      "Natural Fitness": -2,
      Acceleration: -5,
      Pace: -5,
      Agility: -3,
      Stamina: -3,
      Strength: -1,
      "Injury Proneness": 3,
    },
  },
};

const attributeBuckets = {
  technical: new Set([
    "Corners",
    "Crossing",
    "Dribbling",
    "Finishing",
    "First Touch",
    "Free Kick Taking",
    "Heading",
    "Long Shots",
    "Long Throws",
    "Marking",
    "Passing",
    "Penalty Taking",
    "Tackling",
    "Technique",
  ]),
  mental: new Set([
    "Aggression",
    "Anticipation",
    "Bravery",
    "Composure",
    "Concentration",
    "Decisions",
    "Determination",
    "Flair",
    "Leadership",
    "Off the Ball",
    "Positioning",
    "Teamwork",
    "Vision",
    "Work Rate",
  ]),
  physical: new Set([
    "Acceleration",
    "Agility",
    "Balance",
    "Jumping Reach",
    "Natural Fitness",
    "Pace",
    "Stamina",
    "Strength",
  ]),
};

function clampPresetValue(value) {
  return Math.min(20, Math.max(1, Math.round(value)));
}

function createProfileValues(seedValues, adjustment) {
  const fullValues = { ...baselinePresetValues, ...seedValues };
  return Object.fromEntries(
    attributes.map((attribute) => {
      let delta = adjustment.hidden;
      if (attributeBuckets.technical.has(attribute.name)) delta = adjustment.technical;
      if (attributeBuckets.mental.has(attribute.name)) delta = adjustment.mental;
      if (attributeBuckets.physical.has(attribute.name)) delta = adjustment.physical;
      delta += adjustment.overrides[attribute.name] ?? 0;
      return [attribute.name, clampPresetValue(fullValues[attribute.name] + delta)];
    }),
  );
}

const playerPresets = Object.fromEntries(
  Object.entries(playerPresetSeeds).map(([key, seed]) => {
    const primeValues = { ...baselinePresetValues, ...seed.values };
    if (key === "blank10") {
      return [
        key,
        {
          label: seed.label,
          profiles: {
            baseline: { label: "Baseline", values: primeValues },
          },
        },
      ];
    }
    return [
      key,
      {
        label: seed.label,
        profiles: {
          prime: { label: "Prime", values: primeValues },
          wonderkid: {
            label: profileAdjustments.wonderkid.label,
            values: createProfileValues(seed.values, profileAdjustments.wonderkid),
          },
          veteran: {
            label: profileAdjustments.veteran.label,
            values: createProfileValues(seed.values, profileAdjustments.veteran),
          },
        },
      },
    ];
  }),
);

const neutralPlayerPreset = {
  none: {
    label: "No second player",
    neutral: true,
    profiles: {
      none: { label: "None", values: baselinePresetValues },
    },
  },
};

const rolePresets = {
  none: {
    label: "No role focus",
    boosts: {},
  },
  goalkeeper: {
    label: "GK - Goalkeeper",
    boosts: {
      Anticipation: 2,
      Bravery: 2,
      Composure: 2,
      Concentration: 3,
      Decisions: 2,
      Positioning: 2,
      "Jumping Reach": 1,
    },
  },
  sweeperKeeper: {
    label: "GK - Sweeper Keeper",
    boosts: {
      Acceleration: 1,
      Anticipation: 3,
      Bravery: 2,
      Composure: 3,
      Concentration: 2,
      Decisions: 3,
      "First Touch": 2,
      Passing: 2,
      Pace: 1,
      Positioning: 2,
      Technique: 1,
      Vision: 1,
    },
  },
  centralDefender: {
    label: "DC - Central Defender",
    boosts: {
      Marking: 3,
      Tackling: 3,
      Heading: 2,
      Positioning: 3,
      Anticipation: 2,
      Concentration: 2,
      Strength: 2,
      "Jumping Reach": 2,
      Bravery: 2,
    },
  },
  wideCentreBack: {
    label: "DC - Wide Centre-Back",
    boosts: {
      Marking: 2,
      Tackling: 2,
      Heading: 1,
      Positioning: 2,
      Anticipation: 2,
      Crossing: 1,
      Dribbling: 1,
      Pace: 2,
      Stamina: 2,
      "Work Rate": 2,
    },
  },
  noNonsenseCentreBack: {
    label: "DC - No-Nonsense Centre-Back",
    boosts: {
      Heading: 3,
      Marking: 3,
      Tackling: 3,
      Positioning: 3,
      Strength: 3,
      "Jumping Reach": 2,
      Bravery: 2,
      Aggression: 1,
      Concentration: 2,
    },
  },
  libero: {
    label: "DC - Libero",
    boosts: {
      Marking: 2,
      Tackling: 2,
      Positioning: 2,
      Anticipation: 3,
      Composure: 3,
      Decisions: 3,
      Passing: 3,
      Technique: 2,
      Vision: 2,
      "First Touch": 2,
    },
  },
  ballPlayingDefender: {
    label: "DC - Ball Playing Defender",
    boosts: {
      Marking: 2,
      Tackling: 2,
      Positioning: 2,
      Anticipation: 2,
      Composure: 3,
      Passing: 3,
      Vision: 2,
      Technique: 2,
      "First Touch": 2,
      Strength: 1,
    },
  },
  fullBack: {
    label: "DR/DL - Full-Back",
    boosts: {
      Tackling: 2,
      Marking: 2,
      Positioning: 2,
      Crossing: 2,
      Stamina: 2,
      Pace: 2,
      Acceleration: 2,
      "Work Rate": 2,
      Teamwork: 2,
    },
  },
  wingBack: {
    label: "WBR/WBL - Wing-Back",
    boosts: {
      Crossing: 3,
      Dribbling: 2,
      Tackling: 2,
      "Work Rate": 3,
      Stamina: 3,
      Pace: 2,
      Acceleration: 2,
      "Off the Ball": 2,
      Teamwork: 2,
    },
  },
  noNonsenseFullBack: {
    label: "DR/DL - No-Nonsense Full-Back",
    boosts: {
      Tackling: 3,
      Marking: 3,
      Positioning: 3,
      Anticipation: 2,
      Concentration: 2,
      Strength: 1,
      Pace: 1,
      Teamwork: 1,
    },
  },
  completeWingBack: {
    label: "WBR/WBL - Complete Wing-Back",
    boosts: {
      Crossing: 3,
      Dribbling: 3,
      "First Touch": 2,
      Technique: 2,
      Tackling: 2,
      "Off the Ball": 3,
      "Work Rate": 3,
      Stamina: 3,
      Pace: 2,
      Acceleration: 2,
      Decisions: 2,
    },
  },
  invertedWingBack: {
    label: "DR/DL/WB - Inverted Wing-Back",
    boosts: {
      Passing: 3,
      Decisions: 3,
      Teamwork: 2,
      Positioning: 2,
      Tackling: 2,
      Marking: 1,
      "First Touch": 2,
      Technique: 2,
      Vision: 2,
      "Work Rate": 2,
    },
  },
  invertedFullBack: {
    label: "DR/DL - Inverted Full-Back",
    boosts: {
      Marking: 2,
      Tackling: 2,
      Positioning: 3,
      Anticipation: 2,
      Concentration: 2,
      Passing: 2,
      Decisions: 2,
      Strength: 1,
      Teamwork: 2,
    },
  },
  defensiveMidfielder: {
    label: "DM - Defensive Midfielder",
    boosts: {
      Tackling: 3,
      Marking: 2,
      Positioning: 3,
      Anticipation: 2,
      Decisions: 2,
      Teamwork: 2,
      "Work Rate": 2,
      Strength: 1,
    },
  },
  anchor: {
    label: "DM - Anchor",
    boosts: {
      Marking: 3,
      Tackling: 3,
      Positioning: 3,
      Anticipation: 2,
      Concentration: 2,
      Strength: 2,
      Decisions: 1,
      Teamwork: 2,
    },
  },
  halfBack: {
    label: "DM - Half-Back",
    boosts: {
      Marking: 2,
      Tackling: 2,
      Positioning: 3,
      Anticipation: 2,
      Concentration: 2,
      Passing: 2,
      Decisions: 2,
      Teamwork: 2,
      Strength: 1,
    },
  },
  regista: {
    label: "DM/MC - Regista",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 3,
      "First Touch": 2,
      Decisions: 3,
      Flair: 2,
      Composure: 2,
      Teamwork: 1,
      Stamina: 1,
    },
  },
  roamingPlaymaker: {
    label: "DM/MC - Roaming Playmaker",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 2,
      "First Touch": 2,
      Decisions: 2,
      Stamina: 3,
      "Work Rate": 2,
      Teamwork: 2,
      "Off the Ball": 1,
    },
  },
  segundoVolante: {
    label: "DM - Segundo Volante",
    boosts: {
      Tackling: 2,
      Passing: 2,
      "Off the Ball": 3,
      "Work Rate": 3,
      Stamina: 3,
      "Long Shots": 2,
      Decisions: 2,
      Strength: 1,
      Acceleration: 1,
    },
  },
  deepLyingPlaymaker: {
    label: "DM/MC - Deep-Lying Playmaker",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 2,
      "First Touch": 2,
      Decisions: 3,
      Composure: 2,
      Teamwork: 1,
      Positioning: 1,
    },
  },
  centralMidfielder: {
    label: "MC - Central Midfielder",
    boosts: {
      Passing: 2,
      Decisions: 2,
      Teamwork: 2,
      "Work Rate": 2,
      "First Touch": 1,
      Technique: 1,
      Tackling: 1,
      Stamina: 1,
    },
  },
  ballWinningMidfielder: {
    label: "DM/MC - Ball-Winning Midfielder",
    boosts: {
      Tackling: 3,
      Aggression: 3,
      "Work Rate": 3,
      Stamina: 2,
      Bravery: 2,
      Teamwork: 2,
      Strength: 2,
      Anticipation: 1,
    },
  },
  boxToBoxMidfielder: {
    label: "MC - Box-to-Box Midfielder",
    boosts: {
      Stamina: 3,
      "Work Rate": 3,
      Teamwork: 2,
      Passing: 2,
      Tackling: 2,
      "Off the Ball": 2,
      "Long Shots": 2,
      Decisions: 1,
    },
  },
  mezzala: {
    label: "MC - Mezzala",
    boosts: {
      Dribbling: 2,
      Passing: 2,
      Technique: 2,
      "First Touch": 2,
      "Off the Ball": 3,
      Vision: 2,
      Decisions: 2,
      Flair: 2,
      Acceleration: 1,
    },
  },
  carrilero: {
    label: "MC - Carrilero",
    boosts: {
      Passing: 2,
      Teamwork: 3,
      "Work Rate": 3,
      Stamina: 3,
      Positioning: 2,
      Tackling: 2,
      Decisions: 2,
      Concentration: 1,
    },
  },
  advancedPlaymaker: {
    label: "MC/AMC - Advanced Playmaker",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 3,
      "First Touch": 3,
      Decisions: 2,
      Flair: 2,
      Composure: 2,
      "Off the Ball": 1,
    },
  },
  wideMidfielder: {
    label: "MR/ML - Wide Midfielder",
    boosts: {
      Crossing: 2,
      Passing: 2,
      Tackling: 1,
      Positioning: 1,
      Teamwork: 3,
      "Work Rate": 3,
      Stamina: 2,
      Decisions: 2,
    },
  },
  defensiveWinger: {
    label: "MR/ML/AMR/AML - Defensive Winger",
    boosts: {
      Crossing: 2,
      Tackling: 2,
      Marking: 2,
      "Work Rate": 3,
      Teamwork: 3,
      Stamina: 3,
      Pace: 1,
      Acceleration: 1,
      Aggression: 1,
    },
  },
  widePlaymaker: {
    label: "MR/ML/AMR/AML - Wide Playmaker",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 3,
      "First Touch": 2,
      Decisions: 2,
      Flair: 2,
      Dribbling: 1,
      "Off the Ball": 1,
    },
  },
  winger: {
    label: "MR/ML/AMR/AML - Winger",
    boosts: {
      Crossing: 3,
      Dribbling: 3,
      Acceleration: 3,
      Pace: 3,
      Agility: 2,
      Technique: 2,
      "Off the Ball": 2,
      Stamina: 1,
    },
  },
  invertedWinger: {
    label: "AMR/AML - Inverted Winger",
    boosts: {
      Dribbling: 3,
      Passing: 2,
      Technique: 3,
      "First Touch": 2,
      Vision: 2,
      Flair: 2,
      Acceleration: 2,
      Pace: 2,
      "Off the Ball": 2,
    },
  },
  insideForward: {
    label: "AMR/AML - Inside Forward",
    boosts: {
      Finishing: 3,
      Dribbling: 3,
      "First Touch": 2,
      Technique: 2,
      "Off the Ball": 3,
      Acceleration: 2,
      Pace: 2,
      Composure: 2,
      "Long Shots": 2,
    },
  },
  wideTargetForward: {
    label: "AMR/AML - Wide Target Forward",
    boosts: {
      Heading: 3,
      Strength: 3,
      "Jumping Reach": 3,
      Balance: 2,
      Bravery: 2,
      "First Touch": 2,
      "Off the Ball": 2,
      Teamwork: 1,
    },
  },
  raumdeuter: {
    label: "AMR/AML - Raumdeuter",
    boosts: {
      "Off the Ball": 3,
      Anticipation: 3,
      Decisions: 2,
      Finishing: 2,
      Composure: 2,
      Acceleration: 1,
      Pace: 1,
      Teamwork: 1,
    },
  },
  attackingMidfielder: {
    label: "AMC - Attacking Midfielder",
    boosts: {
      Passing: 2,
      Vision: 2,
      "First Touch": 2,
      Technique: 2,
      Dribbling: 2,
      "Off the Ball": 2,
      Decisions: 2,
      Flair: 1,
      Finishing: 1,
    },
  },
  trequartista: {
    label: "AMC/ST - Trequartista",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 3,
      "First Touch": 3,
      Flair: 3,
      "Off the Ball": 2,
      Composure: 2,
      Decisions: 2,
    },
  },
  enganche: {
    label: "AMC - Enganche",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 3,
      "First Touch": 3,
      Decisions: 3,
      Composure: 2,
      Flair: 2,
      Strength: 1,
    },
  },
  shadowStriker: {
    label: "AMC - Shadow Striker",
    boosts: {
      Finishing: 3,
      "Off the Ball": 3,
      Anticipation: 2,
      Composure: 2,
      Acceleration: 2,
      Pace: 1,
      "Work Rate": 2,
      "Long Shots": 2,
    },
  },
  deepLyingForward: {
    label: "ST - Deep-Lying Forward",
    boosts: {
      Passing: 3,
      Vision: 2,
      "First Touch": 3,
      Technique: 2,
      Teamwork: 2,
      Decisions: 2,
      Strength: 1,
      Finishing: 1,
      "Off the Ball": 1,
    },
  },
  advancedForward: {
    label: "ST - Advanced Forward",
    boosts: {
      Finishing: 3,
      "Off the Ball": 3,
      Acceleration: 2,
      Pace: 2,
      Composure: 2,
      Anticipation: 2,
      "First Touch": 2,
      Decisions: 1,
    },
  },
  targetForward: {
    label: "ST - Target Forward",
    boosts: {
      Heading: 3,
      Strength: 3,
      "Jumping Reach": 3,
      Bravery: 2,
      Balance: 2,
      "First Touch": 2,
      Teamwork: 2,
      "Off the Ball": 1,
      Finishing: 1,
    },
  },
  poacher: {
    label: "ST - Poacher",
    boosts: {
      Finishing: 3,
      "Off the Ball": 3,
      Anticipation: 3,
      Composure: 3,
      Acceleration: 2,
      "First Touch": 1,
      Decisions: 1,
    },
  },
  completeForward: {
    label: "ST - Complete Forward",
    boosts: {
      Finishing: 3,
      Heading: 2,
      Dribbling: 2,
      "First Touch": 2,
      Technique: 2,
      Passing: 2,
      Strength: 2,
      "Off the Ball": 2,
      Composure: 2,
    },
  },
  pressingForward: {
    label: "ST - Pressing Forward",
    boosts: {
      "Work Rate": 3,
      Stamina: 3,
      Aggression: 2,
      Bravery: 2,
      Teamwork: 2,
      Pace: 2,
      Acceleration: 2,
      Finishing: 1,
      Strength: 1,
    },
  },
  falseNine: {
    label: "ST - False Nine",
    boosts: {
      Passing: 3,
      Vision: 3,
      Technique: 3,
      "First Touch": 3,
      Decisions: 2,
      "Off the Ball": 2,
      Flair: 2,
      Composure: 2,
      Dribbling: 1,
    },
  },
};

const roleDutyPresets = {
  defend: {
    label: "Defend",
    boosts: {
      Marking: 2,
      Tackling: 2,
      Positioning: 2,
      Anticipation: 1,
      Concentration: 1,
      Teamwork: 1,
      Strength: 1,
    },
  },
  support: {
    label: "Support",
    boosts: {
      Passing: 2,
      Decisions: 2,
      Teamwork: 2,
      "Work Rate": 2,
      "First Touch": 1,
      Technique: 1,
      Stamina: 1,
      Vision: 1,
    },
  },
  attack: {
    label: "Attack",
    boosts: {
      Finishing: 2,
      "Off the Ball": 2,
      Dribbling: 2,
      Flair: 2,
      Acceleration: 1,
      Pace: 1,
      Composure: 1,
      "Long Shots": 1,
    },
  },
};

const roleLevelPresets = {
  decent: {
    label: "Decent",
    base: 10,
    primary: 14,
    secondary: 12,
    support: 11,
    hidden: 11,
  },
  good: {
    label: "Good",
    base: 11,
    primary: 16,
    secondary: 14,
    support: 12,
    hidden: 12,
  },
  elite: {
    label: "Elite",
    base: 12,
    primary: 18,
    secondary: 16,
    support: 14,
    hidden: 14,
  },
  worldClass: {
    label: "World Class",
    base: 13,
    primary: 20,
    secondary: 18,
    support: 15,
    hidden: 16,
  },
};

const state = {
  baseName: BUILT_IN_BASES.blankBaseline10.label,
  baseBytes: Uint8Array.from(BUILT_IN_BASES.blankBaseline10.bytes),
  values: {},
  dirtyAttributes: new Set(),
  highlightedAttributes: new Set(),
  relevantOnly: {
    visible: false,
    hidden: false,
  },
};

const elements = {
  templateUpload: document.querySelector("#templateUpload"),
  uploadName: document.querySelector("#uploadName"),
  exportSummary: document.querySelector("#exportSummary"),
  presetTypeSelect: document.querySelector("#presetTypeSelect"),
  playerSelectA: document.querySelector("#playerSelectA"),
  profileSelectA: document.querySelector("#profileSelectA"),
  playerSelectB: document.querySelector("#playerSelectB"),
  profileSelectB: document.querySelector("#profileSelectB"),
  roleSelect: document.querySelector("#roleSelect"),
  secondaryRoleSelect: document.querySelector("#secondaryRoleSelect"),
  thirdRoleSelect: document.querySelector("#thirdRoleSelect"),
  roleDutySelect: document.querySelector("#roleDutySelect"),
  roleLevelSelect: document.querySelector("#roleLevelSelect"),
  applyPreset: document.querySelector("#applyPreset"),
  exportButton: document.querySelector("#exportButton"),
  downloadChecklist: document.querySelector("#downloadChecklist"),
  visibleRelevantOnly: document.querySelector("#visibleRelevantOnly"),
  hiddenRelevantOnly: document.querySelector("#hiddenRelevantOnly"),
  resetButton: document.querySelector("#resetButton"),
  visibleAttributes: document.querySelector("#visibleAttributes"),
  hiddenAttributes: document.querySelector("#hiddenAttributes"),
  suggestionGrid: document.querySelector("#suggestionGrid"),
  previewRows: document.querySelector("#previewRows"),
  hexDump: document.querySelector("#hexDump"),
  fileStatus: document.querySelector("#fileStatus"),
  sizeMetric: document.querySelector("#sizeMetric"),
  changedMetric: document.querySelector("#changedMetric"),
  validMetric: document.querySelector("#validMetric"),
};

function encodeValue(attribute, value) {
  return attribute.mode === "scaled" ? value * 5 : value;
}

function decodeValue(attribute, byteValue) {
  const value = attribute.mode === "scaled" ? byteValue / 5 : byteValue;
  if (Number.isInteger(value) && value >= 1 && value <= 20) return value;
  return Math.min(20, Math.max(1, Math.round(value)));
}

function resetValuesFromBase() {
  state.values = Object.fromEntries(
    attributes.map((attribute) => [
      attribute.name,
      decodeValue(attribute, state.baseBytes[attribute.offset]),
    ]),
  );
  state.dirtyAttributes.clear();
  state.highlightedAttributes.clear();
  state.relevantOnly.visible = false;
  state.relevantOnly.hidden = false;
}

function renderAttribute(attribute, container) {
  const row = document.createElement("label");
  row.className = "attribute-row";
  row.dataset.attribute = attribute.name;

  const info = document.createElement("span");
  info.className = "attr-name";
  const description = attributeDescriptions[attribute.name] ?? "Mapped FM24 attribute.";
  info.innerHTML = `
    <strong>${attribute.name}</strong>
    <span>Offset ${attribute.offset} · ${attribute.mode === "scaled" ? "FM value ×5" : "direct byte"}</span>
    <em>${description}</em>
    ${attributeValueGuidance[attribute.name] ? `<em class="value-guidance">${attributeValueGuidance[attribute.name]}</em>` : ""}
  `;
  row.title = description;

  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = "numeric";
  input.pattern = "[0-9]*";
  input.value = state.values[attribute.name];
  input.dataset.attribute = attribute.name;
  input.addEventListener("input", () => {
    state.values[attribute.name] = Number(input.value);
    state.dirtyAttributes.add(attribute.name);
    updateOutput();
  });

  const stepper = document.createElement("span");
  stepper.className = "stepper";

  const decrease = document.createElement("button");
  decrease.className = "icon-button";
  decrease.type = "button";
  decrease.title = `Decrease ${attribute.name}`;
  decrease.textContent = "-";
  decrease.addEventListener("click", (event) => {
    event.preventDefault();
    adjustAttribute(attribute.name, -1);
  });

  const increase = document.createElement("button");
  increase.className = "icon-button";
  increase.type = "button";
  increase.title = `Increase ${attribute.name}`;
  increase.textContent = "+";
  increase.addEventListener("click", (event) => {
    event.preventDefault();
    adjustAttribute(attribute.name, 1);
  });

  stepper.append(decrease, input, increase);
  row.append(info, stepper);
  container.append(row);
}

function renderVisibleAttributeSections() {
  elements.visibleAttributes.innerHTML = "";
  elements.visibleAttributes.classList.add("sectioned");
  for (const section of visibleAttributeSections) {
    const sectionElement = document.createElement("section");
    sectionElement.className = "attribute-section";

    const heading = document.createElement("h3");
    heading.textContent = section.title;

    const list = document.createElement("div");
    list.className = "attribute-section-list";

    visibleAttributes
      .filter((attribute) => attribute.category === section.category)
      .forEach((attribute) => renderAttribute(attribute, list));

    sectionElement.append(heading, list);
    elements.visibleAttributes.append(sectionElement);
  }
}

function clampAttributeValue(value) {
  return Math.min(20, Math.max(1, value));
}

function adjustAttribute(name, delta) {
  const current = Number(state.values[name]);
  const next = Number.isInteger(current) ? current + delta : 10 + delta;
  state.values[name] = clampAttributeValue(next);
  state.dirtyAttributes.add(name);
  updateInputs();
  updateOutput();
}

function adjustAttributeGroup(group, delta) {
  for (const attribute of attributes.filter((item) => item.group === group)) {
    const current = Number(state.values[attribute.name]);
    const next = Number.isInteger(current) ? current + delta : 10 + delta;
    state.values[attribute.name] = clampAttributeValue(next);
    state.dirtyAttributes.add(attribute.name);
  }
  updateInputs();
  updateOutput();
}

function getOutputBytes() {
  const output = new Uint8Array(state.baseBytes);
  for (const attribute of attributes) {
    if (!state.dirtyAttributes.has(attribute.name)) continue;
    const value = Number(state.values[attribute.name]);
    if (Number.isInteger(value) && value >= 1 && value <= 20) {
      output[attribute.offset] = encodeValue(attribute, value);
    }
  }
  return output;
}

function getValidationErrors() {
  return attributes.filter((attribute) => {
    const value = Number(state.values[attribute.name]);
    return !Number.isInteger(value) || value < 1 || value > 20;
  });
}

function getChangedAttributes(output) {
  return attributes.filter(
    (attribute) => output[attribute.offset] !== state.baseBytes[attribute.offset],
  );
}

function getTopAttributes(names, minimum = 15) {
  return names
    .filter((name) => Number(state.values[name]) >= minimum)
    .sort((left, right) => Number(state.values[right]) - Number(state.values[left]));
}

function getRoleSelectionLabel() {
  const primary = rolePresets[elements.roleSelect.value];
  const secondary = rolePresets[elements.secondaryRoleSelect.value];
  const third = rolePresets[elements.thirdRoleSelect.value];
  const duty = roleDutyPresets[elements.roleDutySelect.value];
  const level = roleLevelPresets[elements.roleLevelSelect.value];
  const roleParts = [primary.label];
  if (elements.secondaryRoleSelect.value !== "none") roleParts.push(secondary.label);
  if (elements.thirdRoleSelect.value !== "none") roleParts.push(third.label);
  return `${roleParts.join(" + ")} (${duty.label}, ${level.label})`;
}

function getSelectedRoleLabels() {
  return [
    elements.roleSelect.value,
    elements.secondaryRoleSelect.value,
    elements.thirdRoleSelect.value,
  ]
    .filter((roleKey) => roleKey !== "none")
    .map((roleKey) => rolePresets[roleKey].label);
}

function getCurrentSelectionLabel() {
  if (getPresetMode() === "role") {
    return getRoleSelectionLabel();
  }
  if (getPresetMode() === "custom") return "Custom ATP";

  const first = getPlayerProfile(elements.playerSelectA.value, elements.profileSelectA.value);
  const second = getPlayerProfile(elements.playerSelectB.value, elements.profileSelectB.value);
  const firstLabel = `${first.player.label} ${first.profile.label}`;
  return second.player.neutral
    ? firstLabel
    : `${firstLabel} + ${second.player.label} ${second.profile.label}`;
}

function getModeSummaryItems() {
  if (getPresetMode() === "custom") return ["Mode: Load custom .atp"];
  if (getPresetMode() === "role") {
    return [
      "Mode: Role Focus",
      `Primary: ${rolePresets[elements.roleSelect.value].label}`,
      `Secondary: ${rolePresets[elements.secondaryRoleSelect.value].label}`,
      `Third: ${rolePresets[elements.thirdRoleSelect.value].label}`,
      `Duty: ${roleDutyPresets[elements.roleDutySelect.value].label}`,
      `Level: ${roleLevelPresets[elements.roleLevelSelect.value].label}`,
    ];
  }
  const first = getPlayerProfile(elements.playerSelectA.value, elements.profileSelectA.value);
  const second = getPlayerProfile(elements.playerSelectB.value, elements.profileSelectB.value);
  return [
    "Mode: Player Preset",
    `Player 1: ${first.player.label} / ${first.profile.label}`,
    `Player 2: ${second.player.label} / ${second.profile.label}`,
  ];
}

function inferPositionSuggestions() {
  const values = state.values;
  const suggestions = [];
  if (getPresetMode() === "role") {
    getSelectedRoleLabels().forEach((label) => {
      label
        .split(" - ")[0]
        .split("/")
        .forEach((position) => suggestions.push(position.trim()));
    });
  }
  if (values.Marking >= 15 && values.Tackling >= 15 && values.Positioning >= 15) {
    suggestions.push("DC");
  }
  if (values.Crossing >= 14 && values.Tackling >= 13 && values.Stamina >= 14) {
    suggestions.push("DR/DL", "WBR/WBL");
  }
  if (values.Positioning >= 14 && values.Passing >= 13 && values.Tackling >= 13) {
    suggestions.push("DM");
  }
  if (values.Passing >= 14 && values.Decisions >= 14 && values.Teamwork >= 13) {
    suggestions.push("MC");
  }
  if (values.Vision >= 15 && values.Passing >= 15 && values.Technique >= 15) {
    suggestions.push("AMC");
  }
  if (values.Dribbling >= 15 && values.Pace >= 14 && values.Crossing >= 13) {
    suggestions.push("MR/ML", "AMR/AML");
  }
  if (values.Finishing >= 15 && values["Off the Ball"] >= 15) {
    suggestions.push("ST");
  }
  return [...new Set(suggestions)].slice(0, 6);
}

function inferRoleSuggestions() {
  const values = state.values;
  const suggestions = getPresetMode() === "role"
    ? getSelectedRoleLabels().map((label) => {
        const roleName = label.split(" - ")[1] ?? label;
        return `${roleName} - ${roleDutyPresets[elements.roleDutySelect.value].label}`;
      })
    : [];
  if (values.Marking >= 17 && values.Tackling >= 17) suggestions.push("Central Defender - Defend");
  if (values.Passing >= 16 && values.Composure >= 16 && values.Marking >= 14) {
    suggestions.push("Ball Playing Defender - Defend");
  }
  if (values.Crossing >= 15 && values.Stamina >= 15 && values.Tackling >= 13) {
    suggestions.push("Wing-Back - Support");
  }
  if (values.Passing >= 16 && values.Vision >= 16 && values.Decisions >= 15) {
    suggestions.push("Deep-Lying Playmaker - Support");
  }
  if (values.Tackling >= 16 && values["Work Rate"] >= 16 && values.Stamina >= 15) {
    suggestions.push("Ball-Winning Midfielder - Support");
  }
  if (values.Dribbling >= 16 && values.Crossing >= 15 && values.Pace >= 15) {
    suggestions.push("Winger - Attack");
  }
  if (values.Dribbling >= 16 && values.Finishing >= 15 && values["Off the Ball"] >= 15) {
    suggestions.push("Inside Forward - Attack");
  }
  if (values.Finishing >= 16 && values["Off the Ball"] >= 16 && values.Pace >= 14) {
    suggestions.push("Advanced Forward - Attack");
  }
  return [...new Set(suggestions)].slice(0, 8);
}

function inferEditorSuggestions() {
  const values = state.values;
  const average =
    attributes.reduce((total, attribute) => total + Number(values[attribute.name]), 0) /
    attributes.length;
  const eliteCount = attributes.filter((attribute) => Number(values[attribute.name]) >= 18).length;
  const ageProfile =
    getPresetMode() === "player" ? elements.profileSelectA.value : "custom";
  const roleLevel = getPresetMode() === "role" ? elements.roleLevelSelect.value : null;
  const reputation =
    roleLevel === "worldClass" || average >= 17
      ? {
          current: "7500-9500, very high",
          home: "8000-10000, national icon",
          world: "7500-9500, globally known",
        }
      : roleLevel === "elite" || average >= 14
        ? {
            current: "6000-8000, high",
            home: "6500-8500, high domestic reputation",
            world: "5500-7500, known internationally",
          }
        : {
            current: "4500-6500, moderate",
            home: "5000-7000, moderate domestic reputation",
            world: "3500-6000, moderate worldwide reputation",
          };
  const currentAbility =
    roleLevel === "worldClass"
      ? "170-200, world-class role fit"
      : roleLevel === "elite"
        ? "155-180, elite role fit"
        : roleLevel === "good"
          ? "135-160, good top-flight role fit"
          : roleLevel === "decent"
            ? "115-140, decent role fit"
            : ageProfile === "wonderkid"
      ? "90-130, developing below final peak"
      : ageProfile === "veteran"
        ? "130-170, current level near ceiling"
        : eliteCount >= 10
          ? "170-200, elite / world-class"
          : average >= 14
            ? "145-170, top-league level"
            : "120-145, match intended league level";
  const potentialAbility =
    roleLevel === "worldClass"
      ? "170-200, if intended as world-class"
      : roleLevel === "elite"
        ? "160-185, if intended as elite"
        : roleLevel === "good"
          ? "145-170, match intended growth"
          : roleLevel === "decent"
            ? "125-155, match intended growth"
            : ageProfile === "wonderkid"
      ? "150-190, high ceiling"
      : ageProfile === "veteran"
        ? "Same as or slightly above Current Ability"
        : eliteCount >= 10
          ? "170-200, if recreating a peak player"
          : average >= 14
            ? "155-180, match intended growth"
            : "130-160, match intended growth";
  const heightWeight =
    values.Heading >= 16 || values["Jumping Reach"] >= 16 || values.Strength >= 16
      ? "188-195 cm / 82-92 kg, tall and strong"
      : values.Agility >= 16 || values.Dribbling >= 16
        ? "170-180 cm / 65-75 kg, lighter and agile"
        : "178-186 cm / 72-82 kg, balanced role average";
  const preferredFoot =
    values.Crossing >= 15 || values.Technique >= 16 || values.Passing >= 16
      ? "Strong preferred foot, useful weaker foot"
      : "Use real preferred foot";
  const traits = [];
  if (values.Marking >= 17) traits.push("Marks Opponent Tightly");
  if (values.Passing >= 17 && values.Vision >= 17) traits.push("Tries Killer Balls Often");
  if (values.Dribbling >= 17) traits.push("Runs With Ball Often");
  if (values.Finishing >= 17) traits.push("Places Shots");
  if (values.Pace >= 17 && values["Off the Ball"] >= 16) traits.push("Likes To Beat Offside Trap");
  if (values["Work Rate"] >= 17) traits.push("Gets Forward Whenever Possible or Comes Deep To Get Ball");
  const fitness =
    ageProfile === "wonderkid"
      ? [
          "Overall Player Condition: 9000-10000, fit young player",
          "Match Sharpness: 6000-8500, still building rhythm",
          "Fatigue: -500-100, fresh / low fatigue",
        ]
      : ageProfile === "veteran"
        ? [
            "Overall Player Condition: 8500-9500, managed fitness",
            "Match Sharpness: 7500-9500, match-ready if playing regularly",
            "Fatigue: 0-500, monitor recovery",
          ]
        : values["Injury Proneness"] >= 14
          ? [
              "Overall Player Condition: 8500-9500, avoid overloading",
              "Match Sharpness: 7500-9500, build carefully",
              "Fatigue: -500-300, keep low due to injury risk",
            ]
          : [
              "Overall Player Condition: 9500-10000, fully fit",
              "Match Sharpness: 8500-10000, match sharp",
              "Fatigue: -500-100, fresh / low fatigue",
            ];

  return {
    selection: getCurrentSelectionLabel(),
    positions: inferPositionSuggestions(),
    roles: inferRoleSuggestions(),
    editor: [
      `Current Ability: ${currentAbility}`,
      `Potential Ability: ${potentialAbility}`,
      `Current Reputation: ${reputation.current}`,
      `Home Reputation: ${reputation.home}`,
      `World Reputation: ${reputation.world}`,
      `Height / Weight: ${heightWeight}`,
      `Preferred Foot: ${preferredFoot}`,
    ],
    fitness,
    traits: traits.length ? traits.slice(0, 6) : ["Use traits sparingly; match the intended role."],
  };
}

function renderSuggestionCard(title, items) {
  const listItems = items.length ? items : ["No strong suggestion from current attributes."];
  return `
    <article class="suggestion-card">
      <h3>${title}</h3>
      <ul>${listItems.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}

function buildChecklistText() {
  const suggestions = inferEditorSuggestions();
  const sections = [
    ["Selection", [suggestions.selection]],
    ["Suggested Positions", suggestions.positions],
    ["Suggested Roles", suggestions.roles],
    ["Manual Editor Values", suggestions.editor],
    ["Fitness Suggestions", suggestions.fitness],
    ["Possible Player Traits", suggestions.traits],
  ];
  return sections
    .map(([title, items]) => [`${title}:`, ...items.map((item) => `- ${item}`)].join("\n"))
    .join("\n\n");
}

function downloadChecklist() {
  const blob = new Blob([buildChecklistText()], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "fm24-editor-suggestions.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function updateRelevantFilterButtons() {
  const hasRelevant = state.highlightedAttributes.size > 0;
  [
    [elements.visibleRelevantOnly, "visible"],
    [elements.hiddenRelevantOnly, "hidden"],
  ].forEach(([button, group]) => {
    button.classList.toggle("is-hidden", !hasRelevant);
    button.textContent = state.relevantOnly[group] ? "Show All" : "Relevant Only";
  });
}

function toggleRelevantOnly(group) {
  state.relevantOnly[group] = !state.relevantOnly[group];
  updateOutput();
}

function updateSuggestions() {
  const suggestions = inferEditorSuggestions();
  elements.suggestionGrid.innerHTML = [
    renderSuggestionCard("Selection", [suggestions.selection]),
    renderSuggestionCard("Suggested Positions", suggestions.positions),
    renderSuggestionCard("Suggested Roles", suggestions.roles),
    renderSuggestionCard("Manual Editor Values", suggestions.editor),
    renderSuggestionCard("Fitness Suggestions", suggestions.fitness),
    renderSuggestionCard("Possible Player Traits", suggestions.traits),
  ].join("");
}

function updateInputs() {
  document.querySelectorAll("input[data-attribute]").forEach((input) => {
    input.value = state.values[input.dataset.attribute];
  });
}

function updateOutput() {
  const output = getOutputBytes();
  const invalid = getValidationErrors();
  const changed = getChangedAttributes(output);

  elements.sizeMetric.textContent = `${output.length} bytes`;
  elements.changedMetric.textContent = String(changed.length);
  elements.validMetric.textContent = invalid.length ? `${invalid.length} invalid` : "Valid";
  elements.validMetric.className = invalid.length ? "error" : "";
  elements.fileStatus.textContent = invalid.length
    ? "Fix values before export"
    : "Ready to export";
  elements.fileStatus.className = invalid.length ? "status-pill error" : "status-pill";
  elements.exportButton.disabled = invalid.length > 0 || output.length !== EXACT_SIZE;
  elements.exportSummary.innerHTML = [
    ...getModeSummaryItems(),
    `Output: ${output.length} bytes`,
    `Changed mapped attributes: ${changed.length}`,
  ]
    .map((item) => {
      const [label, ...rest] = item.split(":");
      const value = rest.join(":").trim();
      return `<span>${label}: <strong>${value}</strong></span>`;
    })
    .join("");

  document.querySelectorAll(".attribute-row").forEach((row) => {
    const attribute = attributes.find((item) => item.name === row.dataset.attribute);
    const value = Number(state.values[attribute.name]);
    const isInvalid = !Number.isInteger(value) || value < 1 || value > 20;
    row.classList.toggle("invalid", isInvalid);
    row.classList.toggle(
      "changed",
      !isInvalid && output[attribute.offset] !== state.baseBytes[attribute.offset],
    );
    row.classList.toggle("role-relevant", state.highlightedAttributes.has(attribute.name));
    const riskyHigh =
      ["Injury Proneness", "Dirtiness", "Controversy"].includes(attribute.name) && value >= 14;
    row.classList.toggle("risky-hidden", riskyHigh);
    const hideForRelevantFilter =
      state.relevantOnly[attribute.group] &&
      state.highlightedAttributes.size > 0 &&
      !state.highlightedAttributes.has(attribute.name);
    row.classList.toggle("is-hidden", hideForRelevantFilter);
  });
  updateRelevantFilterButtons();

  elements.previewRows.innerHTML = "";
  if (!changed.length) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="6">No mapped attribute bytes changed from the selected base template.</td>`;
    elements.previewRows.append(row);
  } else {
    for (const attribute of changed) {
      const base = state.baseBytes[attribute.offset];
      const next = output[attribute.offset];
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${attribute.name}</td>
        <td>${attribute.offset}</td>
        <td>${attribute.mode === "scaled" ? "FM ×5" : "Direct"}</td>
        <td>${base}</td>
        <td>${next}</td>
        <td>0x${next.toString(16).padStart(2, "0").toUpperCase()}</td>
      `;
      elements.previewRows.append(row);
    }
  }

  elements.hexDump.textContent = formatHexDump(output, changed);
  updateSuggestions();
}

function formatHexDump(bytes, changed) {
  const changedOffsets = new Set(changed.map((attribute) => attribute.offset));
  const lines = [];
  for (let offset = 0; offset < bytes.length; offset += 16) {
    const chunk = Array.from(bytes.slice(offset, offset + 16));
    const rendered = chunk
      .map((byte, index) => {
        const absolute = offset + index;
        const hex = byte.toString(16).padStart(2, "0").toUpperCase();
        return changedOffsets.has(absolute) ? `[${hex}]` : ` ${hex} `;
      })
      .join(" ");
    lines.push(`${offset.toString(16).padStart(8, "0")}: ${rendered}`);
  }
  return lines.join("\n");
}

function populatePlayerSelect(select, includeNeutral = false) {
  select.innerHTML = "";
  const source = includeNeutral
    ? { ...neutralPlayerPreset, ...playerPresets }
    : playerPresets;
  for (const [key, player] of Object.entries(source)) {
    select.add(new Option(player.label, key));
  }
}

function populateProfileSelect(playerSelect, profileSelect) {
  const player =
    neutralPlayerPreset[playerSelect.value] ?? playerPresets[playerSelect.value];
  profileSelect.innerHTML = "";
  for (const [key, profile] of Object.entries(player.profiles)) {
    profileSelect.add(new Option(profile.label, key));
  }
  profileSelect.disabled = Boolean(player.neutral);
}

function populateSelects() {
  populatePlayerSelect(elements.playerSelectA);
  populatePlayerSelect(elements.playerSelectB, true);
  for (const [key, role] of Object.entries(rolePresets)) {
    elements.roleSelect.add(new Option(role.label, key));
    elements.secondaryRoleSelect.add(new Option(role.label, key));
    elements.thirdRoleSelect.add(new Option(role.label, key));
  }
  for (const [key, duty] of Object.entries(roleDutyPresets)) {
    elements.roleDutySelect.add(new Option(duty.label, key));
  }
  for (const [key, level] of Object.entries(roleLevelPresets)) {
    elements.roleLevelSelect.add(new Option(level.label, key));
  }
  elements.playerSelectA.value = "maldini";
  elements.playerSelectB.value = "none";
  elements.presetTypeSelect.value = "player";
  elements.roleSelect.value = "centralDefender";
  elements.secondaryRoleSelect.value = "none";
  elements.thirdRoleSelect.value = "none";
  elements.roleDutySelect.value = "defend";
  elements.roleLevelSelect.value = "good";
  populateProfileSelect(elements.playerSelectA, elements.profileSelectA);
  populateProfileSelect(elements.playerSelectB, elements.profileSelectB);
  elements.profileSelectA.value = "prime";
  updatePresetMode();
}

function getPlayerProfile(playerKey, profileKey) {
  const player = neutralPlayerPreset[playerKey] ?? playerPresets[playerKey];
  return {
    player,
    profile: player.profiles[profileKey] ?? Object.values(player.profiles)[0],
  };
}

function buildFullPresetValues(playerKey, profileKey) {
  return { ...baselinePresetValues, ...getPlayerProfile(playerKey, profileKey).profile.values };
}

function getPresetMode() {
  return elements.presetTypeSelect.value;
}

function updatePresetMode() {
  const mode = getPresetMode();
  const isCustomMode = mode === "custom";
  const isRoleMode = mode === "role";
  const isPlayerMode = mode === "player";
  document.querySelectorAll(".custom-control").forEach((element) => {
    element.classList.toggle("is-hidden", !isCustomMode);
  });
  document.querySelectorAll(".player-control").forEach((element) => {
    element.classList.toggle("is-hidden", !isPlayerMode);
  });
  document.querySelectorAll(".role-control").forEach((element) => {
    element.classList.toggle("is-hidden", !isRoleMode);
  });
  elements.applyPreset.classList.toggle("is-hidden", isCustomMode);
  elements.applyPreset.textContent = isRoleMode ? "Apply Role" : "Apply Player";
}

function applyRoleFocus(values, roleKey) {
  const role = rolePresets[roleKey] ?? rolePresets.none;
  return Object.fromEntries(
    attributes.map((attribute) => [
      attribute.name,
      clampPresetValue(values[attribute.name] + (role.boosts[attribute.name] ?? 0)),
    ]),
  );
}

function applyRoleDuty(values, dutyKey) {
  const duty = roleDutyPresets[dutyKey] ?? roleDutyPresets.support;
  return Object.fromEntries(
    attributes.map((attribute) => [
      attribute.name,
      clampPresetValue(values[attribute.name] + (duty.boosts[attribute.name] ?? 0)),
    ]),
  );
}

function applyWeightedRoleTargets(values, roleKey, level, weight) {
  const role = rolePresets[roleKey] ?? rolePresets.none;
  if (roleKey === "none") return values;
  const weightedLevel = {
    primary: Math.max(level.support, Math.round(level.primary * weight)),
    secondary: Math.max(level.support, Math.round(level.secondary * weight)),
    support: Math.max(level.base, Math.round(level.support * weight)),
  };
  const roleBoosts = Object.entries(role.boosts);
  const roleBoostValues = roleBoosts.map(([, boost]) => boost);
  const maxRoleBoost = Math.max(1, ...roleBoostValues);

  for (const [name, boost] of roleBoosts) {
    const target =
      boost >= maxRoleBoost
        ? weightedLevel.primary
        : boost >= Math.max(2, maxRoleBoost - 1)
          ? weightedLevel.secondary
          : weightedLevel.support;
    values[name] = Math.max(values[name], target);
  }
  return values;
}

function buildRoleTargetValues(roleKey, secondaryRoleKey, thirdRoleKey, dutyKey, levelKey) {
  const duty = roleDutyPresets[dutyKey] ?? roleDutyPresets.support;
  const level = roleLevelPresets[levelKey] ?? roleLevelPresets.good;
  const dutyBoosts = Object.entries(duty.boosts);
  const values = Object.fromEntries(
    attributes.map((attribute) => [
      attribute.name,
      attribute.group === "hidden" ? level.hidden : level.base,
    ]),
  );

  applyWeightedRoleTargets(values, roleKey, level, 1);
  applyWeightedRoleTargets(values, secondaryRoleKey, level, 1);
  applyWeightedRoleTargets(values, thirdRoleKey, level, 1);

  for (const [name, boost] of dutyBoosts) {
    const target = boost >= 2 ? level.secondary : level.support;
    values[name] = Math.max(values[name], target);
  }

  return Object.fromEntries(
    attributes.map((attribute) => [
      attribute.name,
      clampPresetValue(values[attribute.name]),
    ]),
  );
}

function getRoleRelevantAttributes(roleKeys, dutyKey) {
  const names = new Set();
  roleKeys
    .filter((roleKey) => roleKey !== "none")
    .forEach((roleKey) => {
      Object.keys((rolePresets[roleKey] ?? rolePresets.none).boosts).forEach((name) =>
        names.add(name),
      );
    });
  Object.keys((roleDutyPresets[dutyKey] ?? roleDutyPresets.support).boosts).forEach((name) =>
    names.add(name),
  );
  ["Consistency", "Important Matches", "Professionalism", "Pressure"].forEach((name) =>
    names.add(name),
  );
  if (roleKeys.filter((roleKey) => roleKey !== "none").length > 1) {
    names.add("Versatility");
    names.add("Adaptability");
  }
  if (dutyKey === "defend") {
    names.add("Temperament");
    names.add("Dirtiness");
  }
  if (dutyKey === "attack") {
    names.add("Ambition");
  }
  return names;
}

function applyRolePreset(roleKey, secondaryRoleKey, thirdRoleKey, dutyKey, levelKey) {
  state.values = buildRoleTargetValues(roleKey, secondaryRoleKey, thirdRoleKey, dutyKey, levelKey);
  state.highlightedAttributes = getRoleRelevantAttributes(
    [roleKey, secondaryRoleKey, thirdRoleKey],
    dutyKey,
  );
  attributes.forEach((attribute) => state.dirtyAttributes.add(attribute.name));
  updateInputs();
  updateOutput();
}

function applyPlayerProfiles(
  firstPlayerKey,
  firstProfileKey,
  secondPlayerKey,
  secondProfileKey,
  roleKey,
) {
  const first = buildFullPresetValues(firstPlayerKey, firstProfileKey);
  const secondSelection = getPlayerProfile(secondPlayerKey, secondProfileKey);
  if (secondSelection.player.neutral) {
    state.values = first;
    state.highlightedAttributes.clear();
    attributes.forEach((attribute) => state.dirtyAttributes.add(attribute.name));
    updateInputs();
    updateOutput();
    return;
  }
  const second = buildFullPresetValues(secondPlayerKey, secondProfileKey);
  const combinedValues = Object.fromEntries(
    attributes.map((attribute) => [
      attribute.name,
      Math.round((first[attribute.name] + second[attribute.name]) / 2),
    ]),
  );
  state.values = combinedValues;
  state.highlightedAttributes.clear();
  attributes.forEach((attribute) => state.dirtyAttributes.add(attribute.name));
  updateInputs();
  updateOutput();
}

function exportAtp() {
  const invalid = getValidationErrors();
  if (invalid.length) return;

  const output = getOutputBytes();
  if (output.length !== EXACT_SIZE) return;

  const blob = new Blob([output], { type: "application/octet-stream" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  if (getPresetMode() === "role") {
    link.download = getRoleSelectionLabel().replaceAll(" ", "_") + ".atp";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
    return;
  }
  const firstSelection = getPlayerProfile(
    elements.playerSelectA.value,
    elements.profileSelectA.value,
  );
  const secondSelection = getPlayerProfile(
    elements.playerSelectB.value,
    elements.profileSelectB.value,
  );
  const firstLabel = `${firstSelection.player.label}_${firstSelection.profile.label}`;
  const secondLabel = `${secondSelection.player.label}_${secondSelection.profile.label}`;
  const playerLabel = secondSelection.player.neutral ? firstLabel : `${firstLabel}_x_${secondLabel}`;
  link.download = playerLabel.replaceAll(" ", "_") + ".atp";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function bindEvents() {
  elements.templateUpload.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (bytes.length !== EXACT_SIZE) {
      elements.uploadName.innerHTML = `<span class="error">${file.name} is ${bytes.length} bytes</span>`;
      event.target.value = "";
      return;
    }
    state.baseName = file.name;
    state.baseBytes = bytes;
    elements.uploadName.textContent = file.name;
    resetValuesFromBase();
    updateInputs();
    updateOutput();
  });

  elements.playerSelectA.addEventListener("change", () => {
    populateProfileSelect(elements.playerSelectA, elements.profileSelectA);
  });
  elements.playerSelectB.addEventListener("change", () => {
    populateProfileSelect(elements.playerSelectB, elements.profileSelectB);
  });
  elements.presetTypeSelect.addEventListener("change", updatePresetMode);
  elements.visibleRelevantOnly.addEventListener("click", () => toggleRelevantOnly("visible"));
  elements.hiddenRelevantOnly.addEventListener("click", () => toggleRelevantOnly("hidden"));
  elements.downloadChecklist.addEventListener("click", downloadChecklist);
  elements.applyPreset.addEventListener("click", () => {
    if (getPresetMode() === "role") {
      applyRolePreset(
        elements.roleSelect.value,
        elements.secondaryRoleSelect.value,
        elements.thirdRoleSelect.value,
        elements.roleDutySelect.value,
        elements.roleLevelSelect.value,
      );
      return;
    }
    applyPlayerProfiles(
      elements.playerSelectA.value,
      elements.profileSelectA.value,
      elements.playerSelectB.value,
      elements.profileSelectB.value,
    );
  });
  elements.exportButton.addEventListener("click", exportAtp);
  elements.resetButton.addEventListener("click", () => {
    resetValuesFromBase();
    updateInputs();
    updateOutput();
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
      document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("is-active"));
      tab.classList.add("is-active");
      document.querySelector(`#${tab.dataset.tab}Panel`).classList.add("is-active");
    });
  });

  document.querySelectorAll("[data-set]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.set;
      for (const attribute of attributes.filter((item) => item.group === group)) {
        state.values[attribute.name] = 10;
        state.dirtyAttributes.add(attribute.name);
      }
      updateInputs();
      updateOutput();
    });
  });

  document.querySelectorAll("[data-adjust-group]").forEach((button) => {
    button.addEventListener("click", () => {
      adjustAttributeGroup(button.dataset.adjustGroup, Number(button.dataset.delta));
    });
  });
}

function init() {
  populateSelects();
  resetValuesFromBase();
  renderVisibleAttributeSections();
  hiddenAttributes.forEach((attribute) => renderAttribute(attribute, elements.hiddenAttributes));
  bindEvents();
  updateOutput();
}

init();
