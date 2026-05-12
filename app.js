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
const lowerIsBetterBlendAttributes = new Set([
  "Controversy",
  "Dirtiness",
  "Injury Proneness",
]);
const baselinePresetValues = Object.fromEntries(
  attributes.map((attribute) => [attribute.name, 10]),
);



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

let playerPresets = {};

async function loadPresets() {
  const response = await fetch("presets.json");
  const data = await response.json();
  const seeds = Object.fromEntries(
    Object.entries(data.seeds).map(([key, seed]) => [
      key,
      {
        label: seed.label,
        nickname: seed.nickname,
        values: data.presets[seed.presetKey].values,
      },
    ]),
  );
  playerPresets = Object.fromEntries(
    Object.entries(seeds)
      .sort(([, a], [, b]) => a.label.localeCompare(b.label))
      .map(([key, seed]) => {
        const primeValues = { ...baselinePresetValues, ...seed.values };
        return [
          key,
          {
            label: seed.label,
            nickname: seed.nickname,
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
}

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
  resetSelectionsButton: document.querySelector("#resetSelectionsButton"),
  exportButton: document.querySelector("#exportButton"),
  downloadChecklist: document.querySelector("#downloadChecklist"),
  visibleRelevantOnly: document.querySelector("#visibleRelevantOnly"),
  hiddenRelevantOnly: document.querySelector("#hiddenRelevantOnly"),
  resetButton: document.querySelector("#resetButton"),
  visibleAttributes: document.querySelector("#visibleAttributes"),
  hiddenAttributes: document.querySelector("#hiddenAttributes"),
  suggestionGrid: document.querySelector("#suggestionGrid"),
  roleFitList: document.querySelector("#roleFitList"),
  compareTypeSelect: document.querySelector("#compareTypeSelect"),
  comparePlayerSelect: document.querySelector("#comparePlayerSelect"),
  compareProfileSelect: document.querySelector("#compareProfileSelect"),
  compareRoleSelect: document.querySelector("#compareRoleSelect"),
  compareDutySelect: document.querySelector("#compareDutySelect"),
  compareLevelSelect: document.querySelector("#compareLevelSelect"),
  comparisonSummary: document.querySelector("#comparisonSummary"),
  deltaList: document.querySelector("#deltaList"),
  previewRows: document.querySelector("#previewRows"),
  hexDump: document.querySelector("#hexDump"),
  fileStatus: document.querySelector("#fileStatus"),
  sizeMetric: document.querySelector("#sizeMetric"),
  changedMetric: document.querySelector("#changedMetric"),
  validMetric: document.querySelector("#validMetric"),
  nicknameBanner: document.querySelector("#nicknameBanner"),
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

function combineNicknames(nickA, nickB) {
  if (!nickA) return nickB || "The Hybrid";
  if (!nickB) return nickA;

  const clean = (s) => s.replace(/^(The|El|La|Le|Il|L'|Lo|Los|Las|Un|Une|Der|Die|Das|O|A)\s+/i, "").trim();
  const a = clean(nickA);
  const b = clean(nickB);

  const wa = a.split(/\s+/);
  const wb = b.split(/\s+/);

  const first = wa[0];
  const last = wb[wb.length - 1];

  return `${first} ${last}`;
}

function getCurrentSelectionLabel() {
  if (getPresetMode() === "role") {
    return getRoleSelectionLabel();
  }
  if (getPresetMode() === "custom") return "Custom ATP";

  const first = getPlayerProfile(elements.playerSelectA.value, elements.profileSelectA.value);
  const second = getPlayerProfile(elements.playerSelectB.value, elements.profileSelectB.value);
  const firstLabel = `${first.player.label} ${first.profile.label}`;
  if (second.player.neutral) {
    return first.player.nickname ? `${firstLabel} "${first.player.nickname}"` : firstLabel;
  }
  const combinedNick = combineNicknames(first.player.nickname, second.player.nickname);
  return `${firstLabel} + ${second.player.label} ${second.profile.label} — "${combinedNick}"`;
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
  const items = [
    "Mode: Player Preset",
    `Player 1: ${first.player.label} / ${first.profile.label}${first.player.nickname ? ` "${first.player.nickname}"` : ""}`,
  ];
  if (!second.player.neutral) {
    const combinedNick = combineNicknames(first.player.nickname, second.player.nickname);
    items.push(`Player 2: ${second.player.label} / ${second.profile.label}${second.player.nickname ? ` "${second.player.nickname}"` : ""}`);
    items.push(`Hybrid Name: "${combinedNick}"`);
  }
  return items;
}

function getPositionProficiency(score) {
  if (score >= 18) return { label: "Natural", class: "proficiency-natural" };
  if (score >= 14) return { label: "Accomplished", class: "proficiency-accomplished" };
  if (score >= 10) return { label: "Competent", class: "proficiency-competent" };
  if (score >= 6) return { label: "Unconvincing", class: "proficiency-unconvincing" };
  return { label: "Awkward", class: "proficiency-awkward" };
}

function calculatePositionScore(values, attrs) {
  const sum = attrs.reduce((total, attr) => total + (Number(values[attr]) || 0), 0);
  return sum / attrs.length;
}

function inferPositionSuggestions() {
  const values = state.values;
  const suggestions = [];

  const positionAttributes = {
    DC: ["Marking", "Tackling", "Positioning", "Heading", "Strength", "Jumping Reach", "Anticipation", "Concentration"],
    "DR/DL": ["Crossing", "Tackling", "Marking", "Positioning", "Stamina", "Pace", "Acceleration", "Work Rate"],
    "WBR/WBL": ["Crossing", "Dribbling", "Tackling", "Stamina", "Pace", "Acceleration", "Work Rate", "Off the Ball"],
    DM: ["Positioning", "Passing", "Tackling", "Marking", "Anticipation", "Decisions", "Strength", "Work Rate"],
    MC: ["Passing", "Decisions", "Teamwork", "Work Rate", "Technique", "Tackling", "Stamina", "First Touch"],
    AMC: ["Vision", "Passing", "Technique", "First Touch", "Dribbling", "Off the Ball", "Decisions", "Flair"],
    "MR/ML": ["Crossing", "Passing", "Tackling", "Positioning", "Teamwork", "Work Rate", "Stamina", "Decisions"],
    "AMR/AML": ["Dribbling", "Crossing", "Pace", "Acceleration", "Off the Ball", "Technique", "Finishing", "Agility"],
    ST: ["Finishing", "Off the Ball", "Anticipation", "Composure", "Acceleration", "Pace", "First Touch", "Decisions"],
  };

  const positionThresholds = {
    DC: { min: 15, key: ["Marking", "Tackling", "Positioning"] },
    "DR/DL": { min: 14, key: ["Crossing", "Tackling", "Stamina"] },
    "WBR/WBL": { min: 14, key: ["Crossing", "Dribbling", "Stamina"] },
    DM: { min: 14, key: ["Positioning", "Passing", "Tackling"] },
    MC: { min: 14, key: ["Passing", "Decisions", "Teamwork"] },
    AMC: { min: 15, key: ["Vision", "Passing", "Technique"] },
    "MR/ML": { min: 14, key: ["Crossing", "Passing", "Work Rate"] },
    "AMR/AML": { min: 15, key: ["Dribbling", "Pace", "Crossing"] },
    ST: { min: 15, key: ["Finishing", "Off the Ball", "Anticipation"] },
  };

  if (getPresetMode() === "role") {
    getSelectedRoleLabels().forEach((label) => {
      label
        .split(" - ")[0]
        .split("/")
        .forEach((position) => {
          const pos = position.trim();
          const attrs = positionAttributes[pos];
          if (attrs) {
            const score = calculatePositionScore(values, attrs);
            const prof = getPositionProficiency(score);
            suggestions.push(`${pos} <span class="${prof.class}">${prof.label}</span>`);
          } else {
            suggestions.push(pos);
          }
        });
    });
  }

  for (const [position, { min, key }] of Object.entries(positionThresholds)) {
    if (key.every((attr) => values[attr] >= min)) {
      const score = calculatePositionScore(values, positionAttributes[position]);
      const prof = getPositionProficiency(score);
      suggestions.push(`${position} <span class="${prof.class}">${prof.label}</span>`);
    }
  }

  return [...new Set(suggestions)].slice(0, 8);
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

function getRoleAnalysisAttributeWeights(roleKey, dutyKey) {
  const weights = new Map();
  const role = rolePresets[roleKey] ?? rolePresets.none;
  const duty = roleDutyPresets[dutyKey] ?? roleDutyPresets.support;

  Object.entries(role.boosts).forEach(([name, boost]) => {
    weights.set(name, Math.max(weights.get(name) ?? 0, 2 + boost));
  });
  Object.entries(duty.boosts).forEach(([name, boost]) => {
    weights.set(name, Math.max(weights.get(name) ?? 0, 1 + boost));
  });
  ["Consistency", "Important Matches", "Professionalism", "Pressure"].forEach((name) => {
    weights.set(name, Math.max(weights.get(name) ?? 0, 1));
  });
  return weights;
}

function getRoleFitScore(roleKey, dutyKey, levelKey) {
  const targetValues = buildRoleTargetValues(roleKey, "none", "none", dutyKey, levelKey);
  const weights = getRoleAnalysisAttributeWeights(roleKey, dutyKey);
  const compared = [...weights.entries()].filter(([name]) => state.values[name] !== undefined);
  if (!compared.length) return null;

  let weightedScore = 0;
  let totalWeight = 0;
  const deltas = compared.map(([name, weight]) => {
    const current = Number(state.values[name]);
    const target = Number(targetValues[name]);
    const delta = current - target;
    const targetFit = current >= target
      ? 1
      : Math.max(0, 1 - (target - current) / 19);
    const strengthFit = Math.max(0, Math.min(1, current / 20));
    const score = targetFit * 0.35 + strengthFit * 0.65;
    weightedScore += score * weight;
    totalWeight += weight;
    return { name, current, target, delta, weight };
  });

  const strengths = deltas
    .filter((item) => item.delta >= 0)
    .sort((left, right) => right.current - left.current || right.weight - left.weight)
    .slice(0, 3);
  const gaps = deltas
    .filter((item) => item.delta < 0)
    .sort((left, right) => left.delta - right.delta)
    .slice(0, 3);

  return {
    key: roleKey,
    label: rolePresets[roleKey].label,
    score: Math.round((weightedScore / totalWeight) * 100),
    strengths,
    gaps,
  };
}

function getTopRoleFits() {
  const dutyKey = getPresetMode() === "role" ? elements.roleDutySelect.value : "support";
  const levelKey = getPresetMode() === "role" ? elements.roleLevelSelect.value : "good";
  const selectedRoleKeys = new Set([
    elements.roleSelect.value,
    elements.secondaryRoleSelect.value,
    elements.thirdRoleSelect.value,
  ]);
  return Object.keys(rolePresets)
    .filter((roleKey) => roleKey !== "none")
    .filter((roleKey) => {
      const isGoalkeeperRole = rolePresets[roleKey].label.startsWith("GK -");
      return !isGoalkeeperRole || selectedRoleKeys.has(roleKey);
    })
    .map((roleKey) => getRoleFitScore(roleKey, dutyKey, levelKey))
    .filter(Boolean)
    .sort((left, right) => right.score - left.score)
    .slice(0, 5);
}

function getComparisonTargetValues() {
  if (elements.compareTypeSelect.value === "role") {
    return {
      label: `${rolePresets[elements.compareRoleSelect.value].label} (${roleDutyPresets[elements.compareDutySelect.value].label}, ${roleLevelPresets[elements.compareLevelSelect.value].label})`,
      values: buildRoleTargetValues(
        elements.compareRoleSelect.value,
        "none",
        "none",
        elements.compareDutySelect.value,
        elements.compareLevelSelect.value,
      ),
    };
  }
  const selection = getPlayerProfile(
    elements.comparePlayerSelect.value,
    elements.compareProfileSelect.value,
  );
  return {
    label: `${selection.player.label} ${selection.profile.label}`,
    values: buildFullPresetValues(elements.comparePlayerSelect.value, elements.compareProfileSelect.value),
  };
}

function getComparisonAnalysis() {
  const target = getComparisonTargetValues();
  const deltas = attributes.map((attribute) => {
    const current = Number(state.values[attribute.name]);
    const targetValue = Number(target.values[attribute.name]);
    return {
      name: attribute.name,
      group: attribute.group,
      category: attribute.category ?? attribute.group,
      current,
      target: targetValue,
      delta: current - targetValue,
    };
  });
  const averageDelta =
    deltas.reduce((total, item) => total + Math.abs(item.delta), 0) / deltas.length;
  const similarity = Math.round(Math.max(0, 100 - (averageDelta / 19) * 100));
  const categories = [
    ["Technical", visibleAttributes.filter((attribute) => attribute.category === "technical")],
    ["Mental", visibleAttributes.filter((attribute) => attribute.category === "mental")],
    ["Physical", visibleAttributes.filter((attribute) => attribute.category === "physical")],
    ["Hidden", hiddenAttributes],
  ].map(([label, categoryAttributes]) => {
    const names = new Set(categoryAttributes.map((attribute) => attribute.name));
    const categoryDeltas = deltas.filter((item) => names.has(item.name));
    const average =
      categoryDeltas.reduce((total, item) => total + item.delta, 0) / categoryDeltas.length;
    return { label, average };
  });

  return {
    target,
    similarity,
    categories,
    deltas: deltas.sort((left, right) => Math.abs(right.delta) - Math.abs(left.delta)),
  };
}

function formatDelta(delta) {
  if (delta > 0) return `+${delta}`;
  return String(delta);
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

function stripHtmlTags(html) {
  return html.replace(/<[^>]*>/g, "");
}

function buildChecklistText() {
  const suggestions = inferEditorSuggestions();
  const sections = [
    ["Selection", [suggestions.selection]],
    ["Suggested Positions", suggestions.positions.map((item) => stripHtmlTags(item))],
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

function renderRoleFitItem(fit, isPrimary = false) {
  const strengths = fit.strengths.length
    ? fit.strengths.map((item) => `${item.name} ${item.current}`).join(", ")
    : "No clear surplus yet";
  const gaps = fit.gaps.length
    ? fit.gaps.map((item) => `${item.name} ${formatDelta(item.delta)}`).join(", ")
    : "No major gaps";
  return `
    <section class="role-fit-item${isPrimary ? " is-primary" : ""}">
      <div class="score-row">
        <strong>${fit.label}</strong>
        <span>${fit.score}%</span>
      </div>
      <progress class="score-bar" value="${fit.score}" max="100" aria-label="${fit.label} fit score"></progress>
      ${isPrimary ? `<p><strong>Strengths:</strong> ${strengths}</p><p><strong>Gaps:</strong> ${gaps}</p>` : ""}
    </section>
  `;
}

function updateAnalysisMode() {
  const isRoleComparison = elements.compareTypeSelect.value === "role";
  document.querySelectorAll(".compare-player-control").forEach((element) => {
    element.classList.toggle("is-hidden", isRoleComparison);
  });
  document.querySelectorAll(".compare-role-control").forEach((element) => {
    element.classList.toggle("is-hidden", !isRoleComparison);
  });
}

function updateAnalysis() {
  const roleFits = getTopRoleFits();
  elements.roleFitList.innerHTML = roleFits
    .map((fit, index) => renderRoleFitItem(fit, index === 0))
    .join("");

  const comparison = getComparisonAnalysis();
  elements.comparisonSummary.innerHTML = `
    <div class="similarity-score">
      <span>Similarity</span>
      <strong>${comparison.similarity}%</strong>
      <em>${comparison.target.label}</em>
    </div>
    <div class="category-deltas">
      ${comparison.categories
        .map(
          (category) => `
            <span>
              ${category.label}
              <strong class="${category.average > 0 ? "delta-positive" : category.average < 0 ? "delta-negative" : "delta-even"}">${formatDelta(Math.round(category.average))}</strong>
            </span>
          `,
        )
        .join("")}
    </div>
  `;

  elements.deltaList.innerHTML = comparison.deltas
    .slice(0, 14)
    .map((item) => {
      const deltaClass =
        item.delta > 0 ? "delta-positive" : item.delta < 0 ? "delta-negative" : "delta-even";
      return `
        <div class="delta-row">
          <span>${item.name}</span>
          <span>${item.current} vs ${item.target}</span>
          <strong class="${deltaClass}">${formatDelta(item.delta)}</strong>
        </div>
      `;
    })
    .join("");
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
    : "";
  elements.fileStatus.className = invalid.length ? "status-pill error" : "status-pill";
  elements.exportButton.disabled = invalid.length > 0 || output.length !== EXACT_SIZE;

  if (getPresetMode() === "player") {
    const first = getPlayerProfile(elements.playerSelectA.value, elements.profileSelectA.value);
    const second = getPlayerProfile(elements.playerSelectB.value, elements.profileSelectB.value);
    if (second.player.neutral && first.player.nickname) {
      elements.nicknameBanner.innerHTML = `<span class="nickname-banner-text">"${first.player.nickname}"</span>`;
    } else if (!second.player.neutral) {
      const combinedNick = combineNicknames(first.player.nickname, second.player.nickname);
      elements.nicknameBanner.innerHTML = `<span class="nickname-banner-text">"${combinedNick}"</span>`;
    } else {
      elements.nicknameBanner.innerHTML = "";
    }
  } else {
    elements.nicknameBanner.innerHTML = "";
  }

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
  updateAnalysis();
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
  if (!player) {
    profileSelect.innerHTML = "";
    profileSelect.disabled = true;
    return;
  }
  profileSelect.innerHTML = "";
  for (const [key, profile] of Object.entries(player.profiles)) {
    profileSelect.add(new Option(profile.label, key));
  }
  profileSelect.disabled = Boolean(player.neutral);
}

function setDefaultSelections() {
  elements.playerSelectA.value = "maldini";
  elements.playerSelectB.value = "none";
  elements.presetTypeSelect.value = "player";
  elements.roleSelect.value = "centralDefender";
  elements.secondaryRoleSelect.value = "none";
  elements.thirdRoleSelect.value = "none";
  elements.roleDutySelect.value = "defend";
  elements.roleLevelSelect.value = "good";
  elements.compareTypeSelect.value = "player";
  elements.comparePlayerSelect.value = "messi";
  elements.compareRoleSelect.value = "advancedForward";
  elements.compareDutySelect.value = "attack";
  elements.compareLevelSelect.value = "good";

  populateProfileSelect(elements.playerSelectA, elements.profileSelectA);
  populateProfileSelect(elements.playerSelectB, elements.profileSelectB);
  populateProfileSelect(elements.comparePlayerSelect, elements.compareProfileSelect);
  elements.profileSelectA.value = "prime";
  elements.compareProfileSelect.value = "prime";

  [
    elements.presetTypeSelect,
    elements.playerSelectA,
    elements.profileSelectA,
    elements.playerSelectB,
    elements.profileSelectB,
    elements.roleSelect,
    elements.secondaryRoleSelect,
    elements.thirdRoleSelect,
    elements.roleDutySelect,
    elements.roleLevelSelect,
    elements.compareTypeSelect,
    elements.comparePlayerSelect,
    elements.compareProfileSelect,
    elements.compareRoleSelect,
    elements.compareDutySelect,
    elements.compareLevelSelect,
  ].forEach((select) => select.dispatchEvent(new Event("change")));

  updatePresetMode();
  updateAnalysisMode();
}

function populateSelects() {
  populatePlayerSelect(elements.playerSelectA);
  populatePlayerSelect(elements.playerSelectB, true);
  populatePlayerSelect(elements.comparePlayerSelect);
  for (const [key, role] of Object.entries(rolePresets)) {
    elements.roleSelect.add(new Option(role.label, key));
    elements.secondaryRoleSelect.add(new Option(role.label, key));
    elements.thirdRoleSelect.add(new Option(role.label, key));
    if (key !== "none") elements.compareRoleSelect.add(new Option(role.label, key));
  }
  for (const [key, duty] of Object.entries(roleDutyPresets)) {
    elements.roleDutySelect.add(new Option(duty.label, key));
    elements.compareDutySelect.add(new Option(duty.label, key));
  }
  for (const [key, level] of Object.entries(roleLevelPresets)) {
    elements.roleLevelSelect.add(new Option(level.label, key));
    elements.compareLevelSelect.add(new Option(level.label, key));
  }
  setDefaultSelections();
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

function getStandoutAttributes(values) {
  const sorted = attributes
    .map((attr) => ({ name: attr.name, value: values[attr.name] }))
    .filter((item) => item.value >= 16)
    .sort((a, b) => b.value - a.value);
  return new Set(sorted.slice(0, 12).map((item) => item.name));
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
    state.highlightedAttributes = getStandoutAttributes(first);
    attributes.forEach((attribute) => state.dirtyAttributes.add(attribute.name));
    updateInputs();
    updateOutput();
    return;
  }
  const second = buildFullPresetValues(secondPlayerKey, secondProfileKey);
  const combinedValues = Object.fromEntries(
    attributes.map((attribute) => {
      const blend = lowerIsBetterBlendAttributes.has(attribute.name)
        ? Math.min(first[attribute.name], second[attribute.name])
        : Math.max(first[attribute.name], second[attribute.name]);
      return [attribute.name, blend];
    }),
  );
  state.values = combinedValues;
  const firstStandout = getStandoutAttributes(first);
  const secondStandout = getStandoutAttributes(second);
  state.highlightedAttributes = new Set([...firstStandout, ...secondStandout]);
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
  if (secondSelection.player.neutral) {
    const nick = firstSelection.player.nickname ? `_${firstSelection.player.nickname.replaceAll(" ", "_")}` : "";
    link.download = `${firstLabel}${nick}.atp`.replaceAll(" ", "_");
  } else {
    const combinedNick = combineNicknames(firstSelection.player.nickname, secondSelection.player.nickname);
    const secondLabel = `${secondSelection.player.label}_${secondSelection.profile.label}`;
    link.download = `${firstLabel}_x_${secondLabel}_${combinedNick.replaceAll(" ", "_")}.atp`.replaceAll(" ", "_");
  }
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function makeSelectSearchable(select) {
  const wrapper = document.createElement("div");
  wrapper.className = "searchable-select";
  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(select);

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "searchable-select-trigger";
  const initialOption = select.options[select.selectedIndex];
  const initialNick = initialOption ? getOptionNickname(initialOption) : null;
  const initialValue = initialOption?.textContent || "Select...";
  trigger.innerHTML = `<span class="searchable-select-value">${initialValue}${initialNick ? ` <span class="trigger-nickname">${initialNick}</span>` : ""}</span><span class="searchable-select-arrow">&#9662;</span>`;
  wrapper.insertBefore(trigger, select);

  const dropdown = document.createElement("div");
  dropdown.className = "searchable-select-dropdown";
  dropdown.innerHTML = `
    <input type="text" class="searchable-select-search" placeholder="Search..." />
    <div class="searchable-select-options"></div>
  `;
  wrapper.appendChild(dropdown);

  const searchInput = dropdown.querySelector(".searchable-select-search");
  const optionsContainer = dropdown.querySelector(".searchable-select-options");

  function getOptionNickname(option) {
    if (select.id !== "playerSelectA" && select.id !== "playerSelectB") return null;
    return playerPresets[option.value]?.nickname || null;
  }

  function renderOptions(filter = "") {
    optionsContainer.innerHTML = "";
    const term = filter.toLowerCase();
    let hasMatch = false;

    Array.from(select.options).forEach((option) => {
      if (term && !option.textContent.toLowerCase().includes(term)) return;
      hasMatch = true;
      const item = document.createElement("button");
      item.type = "button";
      item.className = "searchable-select-option";
      const nickname = getOptionNickname(option);
      item.innerHTML = nickname
        ? `<span>${option.textContent}</span><span class="option-nickname">${nickname}</span>`
        : option.textContent;
      item.dataset.value = option.value;
      if (option.value === select.value) item.classList.add("is-selected");
      item.addEventListener("click", () => {
        select.value = option.value;
        select.dispatchEvent(new Event("change"));
        const selectedNick = getOptionNickname(option);
        trigger.querySelector(".searchable-select-value").innerHTML = selectedNick
          ? `${option.textContent} <span class="trigger-nickname">${selectedNick}</span>`
          : option.textContent;
        closeDropdown();
      });
      optionsContainer.appendChild(item);
    });

    if (!hasMatch) {
      const empty = document.createElement("div");
      empty.className = "searchable-select-empty";
      empty.textContent = "No matches";
      optionsContainer.appendChild(empty);
    }
  }

  function openDropdown() {
    document.querySelectorAll(".searchable-select-dropdown.is-open").forEach((el) => {
      el.classList.remove("is-open");
    });
    dropdown.style.width = trigger.offsetWidth + "px";
    dropdown.classList.add("is-open");
    searchInput.value = "";
    renderOptions();
    searchInput.focus();
  }

  function closeDropdown() {
    dropdown.classList.remove("is-open");
    dropdown.style.width = "";
  }

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    if (dropdown.classList.contains("is-open")) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  searchInput.addEventListener("input", () => renderOptions(searchInput.value));

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
      trigger.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) closeDropdown();
  });

  window.addEventListener("resize", () => {
    if (dropdown.classList.contains("is-open")) {
      dropdown.style.width = trigger.offsetWidth + "px";
    }
  });

  select.addEventListener("change", () => {
    trigger.querySelector(".searchable-select-value").textContent = select.options[select.selectedIndex]?.textContent || "Select...";
  });

  select.classList.add("is-hidden");
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
  elements.comparePlayerSelect.addEventListener("change", () => {
    populateProfileSelect(elements.comparePlayerSelect, elements.compareProfileSelect);
    updateOutput();
  });
  elements.compareTypeSelect.addEventListener("change", () => {
    updateAnalysisMode();
    updateOutput();
  });
  [
    elements.compareProfileSelect,
    elements.compareRoleSelect,
    elements.compareDutySelect,
    elements.compareLevelSelect,
  ].forEach((select) => {
    select.addEventListener("change", updateOutput);
  });

  elements.presetTypeSelect.addEventListener("change", updatePresetMode);
  elements.visibleRelevantOnly.addEventListener("click", () => toggleRelevantOnly("visible"));
  elements.hiddenRelevantOnly.addEventListener("click", () => toggleRelevantOnly("hidden"));
  elements.downloadChecklist.addEventListener("click", downloadChecklist);
  elements.resetSelectionsButton.addEventListener("click", () => {
    setDefaultSelections();
    updateOutput();
  });
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

async function init() {
  await loadPresets();
  populateSelects();
  document.querySelectorAll("select.searchable").forEach((select) => makeSelectSearchable(select));
  resetValuesFromBase();
  renderVisibleAttributeSections();
  hiddenAttributes.forEach((attribute) => renderAttribute(attribute, elements.hiddenAttributes));
  bindEvents();
  updateOutput();
}

init();
