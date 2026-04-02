import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'pga-valero-texas-open-round-1-2026',
  title: 'Valero Texas Open \u2014 Round 1 Preview',
  eventTag: 'PGA Tour \u2022 Round 1 \u2022 Thursday, April 2',
  date: 'Thursday, April 2, 2026',
  round: 'Round 1',
  tipTime: '2026-04-02T13:30',
  venue: 'TPC San Antonio (Oaks Course) \u2022 Par 72 \u2022 7,438 yards \u2022 Golf Channel 4-7 PM ET',
  extraInfo: 'Morning thunderstorms delay start \u2022 Winds 8-14 mph, gusts to 22 \u2022 84\u00b0F \u2022 Winner earns <strong>Masters invitation</strong>',
  format: 'tournament',
  tournament: {
    name: 'Valero Texas Open',
    courseName: 'TPC San Antonio (Oaks Course) \u2022 San Antonio, TX',
    colors: { primary: '#D52B1E', secondary: '#003DA5', name: 'valero-texas-open' },
  },
  teams: [
    {
      name: 'Contenders',
      mascot: 'Top Favorites',
      seed: 'Low Odds',
      record: 'Fleetwood +1500, Aberg +1500, Henley +1600',
      colors: { primary: '#D52B1E', secondary: '#003DA5', name: 'contenders' },
      className: 'contenders',
    },
    {
      name: 'The Field',
      mascot: 'Chasers',
      seed: 'In Pursuit',
      record: '132 players \u2022 Cut after R2',
      colors: { primary: '#1C3A5F', secondary: '#FFFFFF', name: 'field' },
      className: 'field',
    },
  ],
  tabs: [
    { id: 'stakes', label: 'The Stakes' },
    { id: 'styles', label: 'Styles of Play' },
    { id: 'keys', label: 'Keys to the Game' },
    { id: 'prediction', label: 'Prediction' },
    { id: 'players', label: 'Players to Watch' },
    { id: 'facts', label: 'Fun Facts' },
    { id: 'history', label: 'History' },
    { id: 'sources', label: 'Sources' },
  ],
  stakes: {
    callout:
      'Round 1 at TPC San Antonio opens under <strong>storm clouds and 84\u00b0F heat</strong>. Morning thunderstorms delayed the start, and winds are forecast to gust up to <strong>22 mph from the south</strong> as the day progresses. The marquee afternoon group of <strong>Ludvig Aberg, Jordan Spieth, and Robert MacIntyre</strong> tees off at 2:06 PM ET on Hole 1, while the featured morning trio of <strong>Tommy Fleetwood, Hideki Matsuyama, and Rickie Fowler</strong> goes off at 9:06 AM on Hole 10. With seven of the last eight winners ranking top 4 in SG: Approach during their winning week, the storm-disrupted opening round will separate the iron-play elite from the field early.',
    cards: [
      {
        label: 'Morning Storms Delay Round 1',
        value:
          'Thunderstorms hit TPC San Antonio early Thursday, <strong>delaying the start of Round 1</strong>. The 30-40% precipitation chance materialized with morning storms across the Hill Country. Conditions are expected to clear through the morning, but the delay compresses the schedule and could mean some players won\'t finish before dark. The afternoon wave faces drier skies but <strong>gusty 14-22 mph south winds</strong>.',
      },
      {
        label: 'The Last Masters Ticket',
        value:
          'The Valero winner earns the <strong>final Masters invitation</strong>. <strong>Rickie Fowler</strong> (World #65) and <strong>Tony Finau</strong> (World #107) must win outright\u2014there is no other path to Augusta. <strong>Billy Horschel</strong> (World #94) is returning from injury. Three of the last six Texas Open winners used this tournament to punch their Masters ticket.',
      },
      {
        label: 'Projected Cut Line: Even to +1',
        value:
          'Historical cut lines at TPC San Antonio range from -3 to +3. With storms, wind, and 84\u00b0F heat creating demanding conditions, the cut is projected at <strong>even par to +1</strong>. The scoring average here is 72.46\u2014the 11th-hardest on Tour. Only 58% of greens are hit in regulation, tied with Riviera for the toughest on Tour. Players on the bubble need a solid opening round to give themselves a Friday cushion.',
      },
      {
        label: 'Marquee Afternoon Pairing',
        value:
          'The <strong>Aberg-Spieth-MacIntyre</strong> group at 2:06 PM ET is must-watch TV. Spieth owns the best course history in the field (won 2021, 5 top-12s, 9 of 10 cuts). Aberg is the co-favorite at +1500 with elite ballstriking. MacIntyre is a Ryder Cup star at +2000. They face the windiest conditions of the day but also the driest.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Survive the Storms, Attack the Par 5s',
      bullets: [
        '<strong>Morning wave strategy is about patience through the delay.</strong> The storm suspension disrupts rhythm. Players who can warm up efficiently and stay sharp mentally through the stoppage have an edge. Fleetwood, Matsuyama, and Kim are all in the morning wave and need to handle disrupted conditions.',
        '<strong>Par 5s remain the primary birdie source:</strong> Holes 8 (591 yds), 12 (553 yds), and 14 (553 yds) are the three most scorable par 5s, with Hole 14 playing as the easiest on the course. In wet conditions, approach shots hold greens better, potentially opening up birdie opportunities that dry conditions would deny.',
        '<strong>Course knowledge matters in the wind.</strong> TPC San Antonio\'s design amplifies wind\u2014downhill holes play into the prevailing wind, uphill holes play downwind. Greg Norman\'s design philosophy means players who know the wind corridors can save 2-3 strokes. Spieth (10 appearances), McCarthy (6 starts), and Hoffman (San Antonio resident, 2016 champion) have massive advantages.',
      ],
    },
    {
      team: 'b',
      title: 'Afternoon Precision: Wind + Dry = Grind Mode',
      bullets: [
        '<strong>The afternoon wave trades rain for wind.</strong> With gusts up to 22 mph from the south, the afternoon starters\u2014including Aberg, Spieth, MacIntyre, Henley, Harman, and Horschel\u2014face a different challenge. Wind control and trajectory management become essential. Players who can flight the ball low and control spin will gain strokes.',
        '<strong>Bogey avoidance on the monster par 4s is critical.</strong> Holes 1 (454 yds, hardest on course), 4 (481 yds, #1 HCP), 9 (474 yds, 29%+ over-par rate), and 15 (464 yds, #2 HCP) all play over par. In windy conditions, these holes become pure survival. The winner will likely be the player who makes the fewest mistakes here, not the most birdies.',
        '<strong>The "Fantastic Finish" stretch (15-18) will be brutal in wind.</strong> Hole 16\'s par-3 with the center bunker, the drivable 17th, and the 591-yard uphill 18th that has played over par every year since 2010\u2014all become exponentially harder in 20+ mph gusts. Finishing at even par over those four holes would be a victory.',
      ],
    },
  ],
  keys: [
    {
      title: 'Morning thunderstorm delay reshapes the opening round.',
      description:
        'The storm suspension means some morning-wave players may not complete their rounds Thursday. This changes the rhythm of the entire tournament. Players who handle disruptions well\u2014who stay loose during delays, warm up efficiently, and restart cleanly\u2014have a hidden edge. Historically, weather-disrupted Valero rounds have produced higher scoring averages and more unpredictable leaderboards.',
    },
    {
      title: 'SG: Approach is everything. Seven of eight recent winners ranked top 4.',
      description:
        'TPC San Antonio is the PGA Tour\'s ultimate iron-play test. The GIR rate of 58% is the toughest on Tour alongside Riviera. Seven of the last eight winners ranked in the <strong>top 4 in SG: Approach</strong> during their winning week, averaging +1.708 per round. Si Woo Kim (2nd on Tour), Ludvig Aberg (top 10), Sepp Straka (12th), and Russell Henley are the top approach players in the field. A bad approach week here is a death sentence.',
    },
    {
      title: 'Wave advantage could be worth 2-3 strokes.',
      description:
        'In 2015, the morning/afternoon scoring differential at TPC San Antonio was <strong>3.9 strokes</strong>\u2014the largest on Tour that year. Today\'s conditions create an unusual split: the morning wave faces storm delays but potentially calmer post-storm winds, while the afternoon wave gets dry conditions but gusty 14-22 mph winds. The morning wave includes Fleetwood, Matsuyama, Kim, and Finau. The afternoon wave has Spieth, Aberg, Henley, and Harman.',
    },
    {
      title: 'Cut line bubble: Fowler, Finau, and Tom Kim face elimination pressure.',
      description:
        'The projected cut line of even to +1 means every bogey counts. <strong>Rickie Fowler</strong> missed the cut at the Houston Open last week and has no top-10 here since 2018. <strong>Tony Finau</strong> hasn\'t had a top-10 in 13 months. <strong>Tom Kim</strong> (World #126) is in a severe slump. All three need to win for a Masters invite, but first they need to make the cut. A bad Thursday in windy conditions could end their Augusta dreams by Friday afternoon.',
    },
    {
      title: 'Johnny Keefer\'s hometown story could be the feel-good narrative of the week.',
      description:
        'The 25-year-old PGA Tour rookie from San Antonio\u2014who joined TPC San Antonio as a junior, graduated from Johnson High School, and still lives with his parents\u2014tees off at 2:54 PM with Denny McCarthy and Matthieu Pavon. He finished T3 at the Houston Open last week and has already secured his Masters invitation. He knows every blade of grass on this course. Quote: "I\'m sleeping in my own bed."',
    },
  ],
  prediction: {
    summary: 'The storm-disrupted opening round will favor patient, experienced players who handle adversity well. The afternoon wave faces gustier winds but drier conditions. Expect a compressed leaderboard with the leader around -4 to -6.',
    phases: [
      {
        title: 'Thursday \u2014 Storm Survival',
        description: 'Morning thunderstorms delay play. Once cleared, the morning wave gets post-storm calm before afternoon winds build. Si Woo Kim posts a clean -4 in the morning wave using his elite approach play. The afternoon group of Aberg-Spieth-MacIntyre battles 20+ mph gusts but Spieth\'s course knowledge keeps him at -3.',
      },
      {
        title: 'Weekend Outlook',
        description: 'Friday remains messy with wind and rain. Saturday brings potential heavy storms. Sunday offers cooler (59\u00b0F), calmer conditions. ESPN says this tournament "isn\'t decided early, but built for steady players who can survive the first three days." The projected winning score of -10 to -14 reflects the challenging weather throughout.',
      },
    ],
    projectedScore: {
      teamA: -13,
      teamB: -10,
      rationale: 'Storms and wind throughout the week push the winning score well above the calm-year -20 but above the brutally windy 2025 mark of -9. Projected winner finishes -10 to -14.',
    },
  },
  tournamentPrediction: {
    summary: 'The storm-disrupted opening round will favor patient, experienced players who handle adversity and wet conditions. The afternoon wave faces gustier winds but avoids the rain delay disruption. Si Woo Kim\'s elite approach play (2nd on Tour in SG: Approach) gives him the best single-stat fit at the #1 approach course on Tour. Jordan Spieth\'s unmatched course history and peaking iron play make him the weekend favorite if he navigates Thursday\'s winds. Russell Henley\'s bogey avoidance and driving accuracy are tailor-made for grinding conditions. The stormy forecast all week means the winning score lands between -10 and -14\u2014a grinder\'s tournament.',
    phases: [
      {
        title: 'Thursday \u2014 Storm Survival',
        description: 'Morning thunderstorms delay play. Once cleared, the morning wave gets post-storm calm before afternoon winds build to 22 mph. Si Woo Kim and Hideki Matsuyama use the favorable morning conditions to post -4 to -5. The marquee afternoon trio of Aberg-Spieth-MacIntyre battles gusts but Spieth\'s course knowledge and wind experience (3rd in field) keep him at -3. The R1 leader comes from the morning wave at -5 or -6.',
      },
      {
        title: 'Friday-Saturday \u2014 Attrition',
        description: 'Friday brings more wind and rain. The cut falls at even to +1, ending the Masters dreams of several desperate contenders. Saturday\'s potential storms further compress the field. Henley\'s bogey-free consistency keeps him in the top 5. Spieth fires a low Saturday round as conditions ease slightly.',
      },
      {
        title: 'Sunday \u2014 Cool and Calm Closing',
        description: 'A cold front drops temperatures to 59\u00b0F with lighter winds. Spieth\'s familiarity with the Fantastic Finish stretch (15-18) and his peaking approach play prove decisive. The Dallas native wins his second Valero title\u2014at the course that keeps giving him breakthroughs.',
      },
    ],
    projectedWinner: {
      name: 'Jordan Spieth',
      score: '-12 to -14 (276-278)',
      rationale: 'Best course history in the field (won 2021, 5 top-12s in 10 starts). SG per round at TPC San Antonio leads the entire field. Approach play peaking at +0.548 over last 5 events. Wind performance 3rd in field\u2014critical in this week\'s storm-battered conditions. The 54-hole leader has won 10 of 15 times at TPC San Antonio.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Jordan Spieth',
      stats: 'SG/round at TPC SA: #1 in field \u2022 SG: Approach +0.548 (last 5) \u2022 2:06 PM, Hole 1',
      meta: 'Age 32 \u2022 Dallas, TX \u2022 World #18 \u2022 +1800 \u2022 Afternoon wave',
      bio: 'The <strong>best course history in the field, and it\'s not even close</strong>. Won here in 2021 to break an 82-event drought. Made <strong>9 of 10 cuts</strong> with 5 top-12s. Grouped with Ludvig Aberg and Robert MacIntyre in Thursday\'s marquee afternoon pairing at 2:06 PM. His approach play is peaking and he\'s a <strong>Dallas native</strong> who played college golf at UT Austin. Aced the signature 16th hole here in 2024. Faces 20+ mph afternoon gusts but his wind performance ranks 3rd in the field.',
    },
    {
      team: 'a',
      name: 'Si Woo Kim',
      stats: 'SG: Approach +1.198 (2nd on PGA Tour) \u2022 4+ strokes gained on approach in 3 of 4 starts \u2022 9:30 AM, Hole 10',
      meta: 'Age 31 \u2022 South Korean \u2022 World #28 \u2022 +2200 \u2022 Morning wave',
      bio: 'Owns the <strong>single best stat-to-course fit</strong> in the entire field. Ranks <strong>2nd on the PGA Tour in SG: Approach</strong>\u2014the #1 predictive stat at TPC San Antonio, where 7 of 8 recent winners ranked top 4 in approach. Morning tee time at 9:30 AM on Hole 10 could give him calmer post-storm conditions before afternoon winds build. Course history backs it up: T4 (2019), T13 (2022). Says he\'s <strong>"swinging it the best he ever has."</strong>',
    },
    {
      team: 'a',
      name: 'Russell Henley',
      stats: 'Bogey avoidance: 9th on Tour \u2022 Driving accuracy: 5th \u2022 SG: Total 12th \u2022 2:30 PM, Hole 1',
      meta: 'Age 36 \u2022 World #10 \u2022 +1600 \u2022 Afternoon wave \u2022 #1 model pick',
      bio: 'The <strong>analytical model\'s #1 pick</strong> this week. His stat profile is a glove fit for TPC San Antonio: <strong>5th in driving accuracy</strong> for the 25-30 yard fairways, <strong>9th in bogey avoidance</strong> for the monster par 4s, and <strong>7th in putting average</strong>. Finished 4th here last year. Grouped with 2022 champion J.J. Spaun and Stephan Jaeger in the afternoon wave at 2:30 PM. At 296 yards off the tee, he\'s one of the shortest hitters\u2014but distance doesn\'t predict winners here, accuracy does.',
    },
    {
      team: 'a',
      name: 'Tommy Fleetwood',
      stats: 'SG: ATG +0.900 (1st on Tour) \u2022 SG: Approach -0.048 (97th) \u2022 9:06 AM, Hole 10',
      meta: 'Age 35 \u2022 English \u2022 World #4 \u2022 +1500 co-favorite \u2022 Morning wave',
      bio: 'The <strong>highest-ranked player in the field</strong> and co-favorite, but the Fleetwood paradox is on full display. His SG: Around the Green of +0.900 <strong>leads the entire PGA Tour</strong>\u2014perfect at a course where only 58% of greens are hit. But his <strong>SG: Approach ranks just 97th</strong>\u2014a major red flag at the #1 approach-dependent course on Tour. Grouped with Hideki Matsuyama and Rickie Fowler at 9:06 AM. The morning tee time and storm delay could disrupt his rhythm.',
    },
    {
      team: 'a',
      name: 'Hideki Matsuyama',
      stats: 'SG: Total 3rd in field (last 3 months) \u2022 SG: Approach 7th \u2022 9:06 AM, Hole 10',
      meta: 'Major champion \u2022 Morning wave \u2022 With Fleetwood & Fowler',
      bio: 'A <strong>sneaky strong contender</strong> in the morning wave. Over the last three months, Matsuyama ranks <strong>3rd in the field in SG: Total, 7th in SG: Approach, and 8th in SG: Tee to Green</strong>. His 9:06 AM morning tee time gives him a chance to post a number before the strongest afternoon gusts arrive. The 2021 Masters champion has the all-around game to handle TPC San Antonio\'s demands. Multiple analysts flagged his round 1 top-20 as a strong bet.',
    },
    {
      team: 'a',
      name: 'Johnny Keefer',
      stats: 'T3 at Houston Open (last week) \u2022 FedExCup #60 \u2022 2:54 PM, Hole 1',
      meta: 'Age 25 \u2022 San Antonio native \u2022 Baylor alum \u2022 PGA Tour rookie',
      bio: 'The <strong>feel-good story of the week</strong>. The San Antonio native joined TPC San Antonio as a <strong>junior member</strong>, graduated from Johnson High School, attended Baylor, and <strong>still lives with his parents</strong>\u2014sleeping in his own bed during tournament week. After a T3 at the Houston Open last week, he\'s already secured his <strong>Masters invitation</strong> and is playing with house money in front of family and friends. Paired with Denny McCarthy and Matthieu Pavon at 2:54 PM. Quote: "Everyone just being out here, having a support group...it\'s really an awesome thing."',
    },
    {
      team: 'a',
      name: 'Rickie Fowler',
      stats: 'World #65 \u2022 Must win for Masters \u2022 MC at Houston last week \u2022 9:06 AM, Hole 10',
      meta: 'Age 37 \u2022 +6600 \u2022 Morning wave \u2022 CUT LINE WATCH',
      bio: '<strong>The stakes could not be higher.</strong> Rickie Fowler must win the Valero Texas Open to earn a Masters invitation\u2014there is no other path to Augusta. He\'s in danger of missing the Masters for the <strong>fourth time in five years</strong>. Missed the cut at Houston last week. No top-10 at TPC San Antonio since 2018. Grouped with Fleetwood and Matsuyama at 9:06 AM\u2014the morning storm delay could either derail his round or give him calmer post-storm conditions. The fan favorite\'s Masters dream hangs in the balance.',
    },
    {
      team: 'a',
      name: 'Denny McCarthy',
      stats: 'SG/round at TPC SA: +1.82 (2nd in field) \u2022 Lost 2024 playoff \u2022 2:54 PM, Hole 1',
      meta: 'Age 33 \u2022 World #92 \u2022 +4900 \u2022 0 PGA Tour wins in 221 starts \u2022 CUT LINE WATCH',
      bio: 'The ultimate <strong>course horse</strong> at TPC San Antonio\u2014but his 2026 form raises red flags. His SG per round here is <strong>+1.82, second only to Spieth</strong>, with 4 top-20s in 6 starts including the heartbreaking 2024 playoff loss to Bhatia. But ESPN\'s analysis flags <strong>two recent missed cuts, erratic driving, and 107th ranking in sand saves</strong>. His approach play has surged recently (top 11 and 19 in last two events), but can the course horse overcome bad current form? Paired with hometown hero Keefer and Pavon at 2:54 PM.',
    },
  ],
  funFacts: [
    {
      emoji: '\u26C8\uFE0F',
      title: 'Storm Delay',
      body: 'Morning thunderstorms <strong>delayed the start of Round 1</strong>. TPC San Antonio\'s Hill Country location makes it vulnerable to spring storm systems rolling through central Texas.',
    },
    {
      emoji: '\uD83C\uDFAF',
      title: 'Marquee Trio',
      body: 'The <strong>Aberg-Spieth-MacIntyre</strong> group at 2:06 PM ET is the marquee pairing. Combined, they have 5 major championships, and Spieth alone has 5 top-12 finishes at this course.',
    },
    {
      emoji: '\uD83C\uDFE0',
      title: 'Sleeping in His Own Bed',
      body: 'Johnny Keefer\u2014San Antonio native, Johnson High School grad, TPC San Antonio junior member\u2014<strong>still lives with his parents</strong> and is sleeping in his childhood bed during the tournament.',
    },
    {
      emoji: '\uD83C\uDFCC\uFE0F',
      title: 'Monday Qualifier Magic',
      body: '<strong>Nick Hardy</strong> (66, -6) and <strong>Charlie Crockett</strong> (67, -5) earned their spots through the Monday qualifier at Fair Oaks Ranch. Crockett is a local from nearby New Braunfels. Corey Conners won the 2019 Valero as a Monday qualifier.',
    },
    {
      emoji: '\uD83D\uDCA8',
      title: 'The 10-Stroke Wind Tax',
      body: 'The delta between calm and windy winning scores here is <strong>11 strokes</strong>: Harman won at -9 in windy 2025 vs. Bhatia at -20 in calm 2024. Today\'s storms and gusts suggest this year trends windy.',
    },
    {
      emoji: '\uD83D\uDCB0',
      title: 'The Golden Ticket',
      body: 'The Valero winner earns the <strong>final Masters invitation</strong>. Rickie Fowler, Tony Finau, Billy Horschel, and Tom Kim are all playing specifically for this prize\u2014there is no other path to Augusta for them.',
    },
    {
      emoji: '\uD83D\uDCC9',
      title: '221 Starts, Zero Wins',
      body: 'Denny McCarthy has earned <strong>$21.8 million across 221 PGA Tour starts without a single victory</strong>. His SG per round at TPC San Antonio is the 2nd-best in the field. If there\'s a course for his breakthrough, it\'s this one.',
    },
    {
      emoji: '\uD83C\uDF93',
      title: 'YouTube Golf School',
      body: 'PGA Tour rookie Sudarshan Yellamaraju <strong>taught himself golf by watching YouTube videos</strong> of Tiger Woods with his dad in Winnipeg. He still has no swing coach and ranks 8th in this field in SG: Approach.',
    },
    {
      emoji: '\u26F3',
      title: 'Spieth\'s Ace on 16',
      body: 'Jordan Spieth made a <strong>hole-in-one on the signature 16th hole</strong> in 2024. Tony Finau did the same in 2025 from 199 yards. The center-bunker par 3 is one of the most unique in professional golf.',
    },
    {
      emoji: '\uD83D\uDE2D',
      title: 'Morikawa\'s Absence',
      body: 'Collin Morikawa\u2014one of the best iron players on the planet\u2014<strong>withdrew with the same back injury</strong> that forced him out of The Players Championship. His Masters status is in doubt. At a course where SG: Approach is everything, his absence reshuffles the field.',
    },
    {
      emoji: '\uD83C\uDFC6',
      title: '$228 Million for Charity',
      body: 'The Valero Texas Open has raised over <strong>$228 million for charity</strong> since Valero Energy became the title sponsor in 2002\u2014the annual leader in charitable giving among all PGA Tour events.',
    },
    {
      emoji: '\uD83D\uDD22',
      title: 'Kevin Na\'s Infamous 16',
      body: 'In 2011, Kevin Na made a <strong>16 on the par-4 9th hole</strong>\u2014the only hole on the course without bunkers. He hit the ball back and forth in native brush, one of the highest scores in PGA Tour history.',
    },
  ],
  history: {
    callout:
      'The Valero Texas Open is one of the <strong>oldest and most storied events on the PGA Tour</strong>, first played in 1922. It moved to TPC San Antonio\'s Oaks Course in 2010, where <strong>accuracy and iron play\u2014not distance\u2014decide champions</strong>. Three of the last six winners used this tournament to punch their Masters ticket.',
    subsections: [
      {
        title: 'TPC San Antonio Era: 2010-Present',
        type: 'timeline' as const,
        content: 'Since moving to TPC San Antonio, the Valero Texas Open has rewarded precision ball-strikers and produced some of golf\'s best storylines.',
        timeline: [
          { date: '2010', text: 'Adam Scott wins the inaugural event at TPC San Antonio at -14, christening the Greg Norman-designed Oaks Course.' },
          { date: '2011', text: 'Kevin Na makes a 16 on the par-4 9th hole\u2014one of the highest single-hole scores in PGA Tour history. Brendan Steele wins at -8.' },
          { date: '2019', text: 'Corey Conners Monday-qualifies into the field and wins at -20\u2014the first Monday qualifier to win on Tour in nine years. Earns his first Masters invitation.' },
          { date: '2021', text: 'Jordan Spieth wins at -18, ending an 82-event, 1,351-day winless drought. The Dallas native\'s emotional victory launches his comeback.' },
          { date: '2022', text: 'J.J. Spaun wins his first Tour title in his 147th start at -13, surviving a double-bogey on the 1st hole in the final round.' },
          { date: '2024', text: 'Akshay Bhatia beats Denny McCarthy in a playoff at -20, tying the TPC San Antonio record. Both earned Masters invitations.' },
          { date: '2025', text: 'Brian Harman wins at just -9 in brutal wind conditions\u2014the toughest-scoring Valero in the TPC San Antonio era.' },
        ],
      },
      {
        title: 'Legends of the Texas Open',
        type: 'card' as const,
        content: 'The Texas Open\'s winner list spans a century of golf greatness. <strong>Walter Hagen</strong> won in 1923. <strong>Byron Nelson</strong> in 1940. <strong>Ben Hogan</strong> in 1946. <strong>Arnold Palmer</strong> won three straight (1960-62). <strong>Lee Trevino</strong> in 1980. <strong>Justin Leonard</strong> matched Palmer with three wins (2000, 2001, 2007). In 2003, <strong>Tommy Armour III</strong> shot 254 (-26)\u2014a PGA Tour 72-hole record at the time.',
      },
    ],
  },
  sources: [
    {
      heading: 'Round 1 Coverage & Tee Times',
      links: [
        { label: 'Golf.com \u2014 Thursday Tee Times', url: 'https://golf.com/news/2026-valero-texas-open-thursday-tee-times-round-1-groupings/' },
        { label: 'Yardbarker \u2014 Tee Times', url: 'https://www.yardbarker.com/golf/articles/tee_times_set_for_thursday_at_valero_texas_open/s1_17701_43677158' },
        { label: 'PGA Tour \u2014 How to Watch R1-R2', url: 'https://www.pgatour.com/article/news/latest/2026/03/31/how-to-watch-round-1-2-coverage-details-live-scores-tee-time-featured-groups-times-valero-texas-open-golf-channel-espn-tommy-fleetwood-san-antonio-texas' },
        { label: 'BetMGM \u2014 Weather Forecast', url: 'https://sports.betmgm.com/en/blog/pga/valero-texas-open-weather-forecast-rain-wind-temperatures-tpc-san-antonio-2026-bm10/' },
        { label: 'SI \u2014 Tournament Preview', url: 'https://www.si.com/golf/2026-valero-texas-open-preview-field-course-history-tee-times-how-to-watch' },
        { label: 'KSAT \u2014 Johnny Keefer Feature', url: 'https://www.ksat.com/sports/2026/04/02/pga-tour-rookie-johnny-keefer-set-for-hometown-debut-at-valero-texas-open/' },
      ],
    },
    {
      heading: 'Analysis, Picks & Field',
      links: [
        { label: 'ESPN \u2014 Betting Analysis', url: 'https://www.espn.com/betting/golf/story/_/id/48359955/golf-pga-tour-betting-valero-texas-open' },
        { label: 'The Fried Egg \u2014 Picks & Odds', url: 'https://www.thefriedegg.com/articles/pga-tour-odds-valero-texas-open-picks' },
        { label: 'Heavy.com \u2014 Field & Withdrawals', url: 'https://heavy.com/sports/golf/valero-texas-open-2026-field-players/' },
        { label: 'MondayQ \u2014 Qualifier Results', url: 'https://www.mondayq.com/results/valero-texas-open-qualifier-2026' },
        { label: 'CBS Sports \u2014 Odds & Predictions', url: 'https://www.cbssports.com/golf/news/2026-valero-texas-open-odds-picks-predictions-field-best-bets/' },
        { label: 'DraftKings \u2014 Round 1 Picks', url: 'https://dknetwork.draftkings.com/2026/04/01/golf-best-bets-round-1-picks-for-the-valero-texas-open/' },
      ],
    },
  ],
  footerText: 'Valero Texas Open 2026 \u2022 Round 1 \u2022 Thursday, April 2 \u2022 TPC San Antonio (Oaks Course) \u2022 Par 72, 7,438 yards \u2022 Golf Channel 4-7 PM ET',
}

export default game
