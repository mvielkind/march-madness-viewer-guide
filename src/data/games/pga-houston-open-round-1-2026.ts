import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'pga-houston-open-round-1-2026',
  title: 'Texas Children\'s Houston Open \u2014 Round 1 Recap',
  eventTag: 'PGA Tour \u2022 Round 1 \u2022 Thursday, March 26',
  date: 'Thursday, March 26, 2026',
  round: 'Round 1',
  tipTime: '2026-03-26T15:00',
  venue: 'Memorial Park Golf Course \u2022 Par 70 \u2022 7,475 yards \u2022 Golf Channel 3-7 PM ET',
  extraInfo: 'Gary Woodland fires opening 64 \u2022 Paul Waring cards 63 \u2022 Wind gusts up to 25 mph in afternoon wave',
  format: 'tournament',
  tournament: {
    name: "Texas Children's Houston Open",
    courseName: 'Memorial Park Golf Course \u2022 Houston, TX',
    colors: { primary: '#004225', secondary: '#FFD700', name: 'houston-open' },
  },
  teams: [
    {
      name: 'Leaders',
      mascot: 'Round 1 Leaders',
      seed: 'Low Scores',
      record: 'Woodland 64, Waring 63, Lee 68',
      colors: { primary: '#004225', secondary: '#FFD700', name: 'leaders' },
      className: 'leaders',
    },
    {
      name: 'The Field',
      mascot: 'Chasers',
      seed: 'In Pursuit',
      record: '135 players \u2022 Cut after R2',
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
      'Gary Woodland opened with a <strong>6-under 64</strong>, sharing the early lead with Paul Waring (63). The 2019 U.S. Open champion \u2014 who had brain surgery in 2023 and was diagnosed with PTSD in March 2026 \u2014 said the diagnosis helped him feel "freed up" on the course. Cole Hammer aced the par-3 15th in his hometown. Afternoon wind gusts reached 25 mph, creating a morning-wave advantage.',
    cards: [
      {
        label: 'Woodland\'s Emotional Start',
        value: 'Gary Woodland opened with a <strong>6-under 64</strong>, his best opening round in years. After brain surgery (2023) and a PTSD diagnosis (2026), he said: "Getting that diagnosis freed me up. I\'m not crazy \u2014 there\'s a reason I\'m feeling these things." Wearing custom shoes designed by Ceci, a young Texas Children\'s Hospital patient.',
      },
      {
        label: 'Wind Split',
        value: 'Afternoon tee times faced wind gusts up to <strong>25 mph</strong>. Memorial Park\'s open layout offers zero tree protection. Morning starters had a significant scoring advantage.',
      },
      {
        label: 'Hammer\'s Hometown Ace',
        value: 'Houston native <strong>Cole Hammer</strong> \u2014 a University of Texas alum on a sponsor exemption \u2014 made a <strong>hole-in-one on the par-3 15th</strong> (155 yards). The hometown crowd erupted.',
      },
      {
        label: 'Masters Bubble Watch',
        value: 'Michael Thorbjornsen (OWGR 56th) opened with a solid 68. Pierceson Coody (51st) withdrew with a back injury after an opening-round 70 \u2014 heartbreaking timing for the grandson of 1971 Masters champion Charles Coody.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'How the Leaders Attacked Memorial Park',
      bullets: [
        '<strong>Woodland\'s driving distance set the tone:</strong> The 41-year-old leads the PGA Tour in driving distance and used his length to shorten the monster par 4s.',
        '<strong>Paul Waring\'s precision approach:</strong> Waring\'s 63 was the low round of the day, built on elite iron play into Memorial Park\'s contoured greens.',
        '<strong>Morning wave capitalized on calm conditions:</strong> The best scores came before the afternoon winds arrived.',
      ],
    },
    {
      team: 'a',
      title: 'What the Chasers Need Friday',
      bullets: [
        '<strong>Attack the par 5s:</strong> The three par 5s (Holes 3, 8, 16) remain the primary birdie opportunities. Converting here is essential.',
        '<strong>Avoid the long par-4 bogeys:</strong> Holes 1 (522), 4 (490), 14 (529), and 18 (503) played over par on average.',
        '<strong>Get the putter rolling:</strong> Memorial Park\'s large, undulated greens demand confidence with the flat stick.',
      ],
    },
  ],
  keys: [
    {
      title: 'Morning vs. afternoon wave \u2014 did the draw create an advantage?',
      description: 'Thursday\'s afternoon wind gusts reached 25 mph. Morning starters had calmer conditions. If the pattern repeats Friday, wave assignments could influence the cut line.',
    },
    {
      title: 'Woodland\'s PTSD diagnosis \u2014 a mental breakthrough?',
      description: 'Woodland said his PTSD diagnosis "freed him up" mentally. After missing 4 of 6 cuts this season, he credited the diagnosis with removing uncertainty about what he was experiencing.',
    },
    {
      title: 'Defending champion Lee stays within striking distance.',
      description: 'Min Woo Lee opened with a 68 \u2014 solid but not spectacular. Four back of the lead with 54 holes remaining.',
    },
    {
      title: 'Cut line projection after Round 1.',
      description: 'Historical cut lines at Memorial Park range from -3 to +3. With low scoring on Thursday morning, the cut could fall around -1 to -2.',
    },
    {
      title: 'Koepka\'s putting \u2014 can the course designer save himself?',
      description: 'Brooks Koepka struggled with the putter in Round 1 despite ranking 1st on Tour in SG: Approach. The man who helped design Memorial Park may not make the weekend.',
    },
  ],
  prediction: {
    summary: 'Round 1 set the stage for a potential Woodland fairytale, but 54 holes remain. The leaders will need to navigate Friday\'s conditions before the weekend separation begins.',
    phases: [
      {
        title: 'Round 2 Preview \u2014 Friday',
        description: 'Calmer conditions expected Friday. Watch for Nicolai Hojgaard and Chris Gotterup to make moves. The cut line will settle around -1 to -2.',
      },
      {
        title: 'Weekend Outlook',
        description: 'Saturday and Sunday forecasts are benign: sunny, 70s, light winds. Expect low scoring and a packed leaderboard.',
      },
    ],
    projectedScore: {
      teamA: -18,
      teamB: -15,
      rationale: 'Based on Round 1 scoring and the calm weekend forecast, the winner likely finishes between -16 and -20.',
    },
  },
  tournamentPrediction: {
    summary: 'Round 1 set the stage for a potential Woodland fairytale, but 54 holes remain. The leaders will need to navigate Friday\'s conditions before the weekend separation begins.',
    phases: [
      {
        title: 'Round 2 Preview \u2014 Friday',
        description: 'Calmer conditions expected Friday. Watch for Nicolai Hojgaard and Chris Gotterup to make moves. The cut line will settle around -1 to -2.',
      },
      {
        title: 'Weekend Outlook',
        description: 'Saturday and Sunday forecasts are benign: sunny, 70s, light winds. Expect low scoring and a packed leaderboard.',
      },
    ],
    projectedWinner: {
      name: 'Gary Woodland',
      score: '-18 to -20',
      rationale: 'Based on Round 1 scoring and the calm weekend forecast, the winner likely finishes between -16 and -20.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Gary Woodland',
      stats: '64 (R1) \u2022 -6 \u2022 Leads Tour in driving distance',
      meta: 'Age 41 \u2022 2019 U.S. Open champion \u2022 Brain surgery 2023',
      bio: 'Opened with a <strong>6-under 64</strong>. Credited his PTSD diagnosis with giving him mental clarity. Wearing shoes designed by Ceci, a Texas Children\'s Hospital patient.',
    },
    {
      team: 'a',
      name: 'Paul Waring',
      stats: '63 (R1) \u2022 -7 \u2022 Low round of the day',
      meta: 'English \u2022 Co-leader after R1',
      bio: 'Fired the <strong>low round of the day at 63</strong>. Precision iron play into Memorial Park\'s contoured greens was the story of his round.',
    },
    {
      team: 'a',
      name: 'Min Woo Lee',
      stats: '68 (R1) \u2022 -2 \u2022 Defending champion',
      meta: 'Age 26 \u2022 Australian \u2022 Won at -20 in 2025',
      bio: 'The defending champion opened with a solid <strong>68</strong>. Four shots back with plenty of runway. His 2025 win was built on a third-round 64.',
    },
    {
      team: 'a',
      name: 'Cole Hammer',
      stats: 'Hole-in-one on No. 15 \u2022 Houston native',
      meta: 'University of Texas alum \u2022 Sponsor exemption',
      bio: 'Aced the par-3 15th hole (155 yards) during Round 1. Born and raised in Houston. A University of Texas alum playing his hometown event.',
    },
    {
      team: 'a',
      name: 'Nicolai Hojgaard',
      stats: '68 (R1) \u2022 -2 \u2022 World #47',
      meta: 'Age 23 \u2022 Danish \u2022 First time at Memorial Park',
      bio: 'Opened with a <strong>68</strong> in his first-ever round at Memorial Park. One of the best ball-strikers on Tour with 1.50+ SG: Total per round in 2026.',
    },
    {
      team: 'a',
      name: 'Michael Thorbjornsen',
      stats: '68 (R1) \u2022 -2 \u2022 OWGR #56',
      meta: 'Age 23 \u2022 Stanford \u2022 Needs top-50 for Masters',
      bio: 'Opened with a <strong>steady 68</strong> in his quest to crack the OWGR top 50 and earn a Masters invitation.',
    },
    {
      team: 'a',
      name: 'Brooks Koepka',
      stats: 'R1 \u2022 1st in SG: Approach on Tour \u2022 Putting struggles',
      meta: 'Age 35 \u2022 Helped design Memorial Park',
      bio: 'Struggled with the putter despite elite approach play. The five-time major champion who helped design this course may not survive the cut.',
    },
    {
      team: 'a',
      name: 'Bronson Burgoon',
      stats: 'R1 \u2022 The Woodlands native \u2022 Texas A&M alum',
      meta: 'Age 38 \u2022 Playing 30 min from home',
      bio: 'The hometown hero from The Woodlands, playing 30 minutes from where he grew up. Helped Texas A&M win the 2009 national championship.',
    },
  ],
  funFacts: [
    {
      emoji: '\uD83C\uDFAF',
      title: 'Hammer Time',
      body: 'Cole Hammer\'s hole-in-one on the par-3 15th was the highlight of Round 1.',
    },
    {
      emoji: '\uD83D\uDCA8',
      title: 'Wind Factor',
      body: 'Afternoon gusts reached <strong>25 mph</strong>. Memorial Park has no tree protection.',
    },
    {
      emoji: '\uD83E\uDDE0',
      title: 'Freed Up',
      body: 'Woodland said his PTSD diagnosis "freed him up" on the course.',
    },
    {
      emoji: '\uD83D\uDC5F',
      title: 'Ceci\'s Shoes',
      body: 'Woodland\'s custom shoes were designed by a young Texas Children\'s Hospital patient.',
    },
    {
      emoji: '\uD83E\uDE7A',
      title: 'Coody\'s Heartbreak',
      body: 'Pierceson Coody withdrew with a back injury at OWGR 51st \u2014 one spot outside Masters qualification.',
    },
    {
      emoji: '\u26F3',
      title: '$38 Muni',
      body: 'Memorial Park is a public municipal course. Houston residents play for $38.',
    },
    {
      emoji: '\uD83C\uDFC6',
      title: 'Missing: World No. 1',
      body: 'Scottie Scheffler withdrew Tuesday for the birth of his second child.',
    },
    {
      emoji: '\uD83C\uDFCC\uFE0F',
      title: 'Only 24 Bunkers',
      body: 'Tom Doak reduced bunkers from 60+ to 24 during his renovation.',
    },
    {
      emoji: '\uD83C\uDDFB\uD83C\uDDEA',
      title: 'Vegas at Home',
      body: 'Jhonattan Vegas \u2014 Houston resident, Venezuela native \u2014 is playing his home event.',
    },
    {
      emoji: '\uD83D\uDCCA',
      title: 'Tournament History',
      body: 'The Houston Open has been played since 1946. Byron Nelson won the inaugural event.',
    },
  ],
  history: {
    callout: 'The Houston Open returned to Memorial Park in 2020 after a $34 million Tom Doak renovation.',
    subsections: [
      {
        title: 'Recent Winners at Memorial Park',
        type: 'card' as const,
        content:
          '<p><strong>2025:</strong> Min Woo Lee \u2014 -20 (260)<br><strong>2024:</strong> Stephan Jaeger \u2014 -12 (268)<br><strong>2022:</strong> Tony Finau \u2014 -16 (264)<br><strong>2021:</strong> Jason Kokrak \u2014 -10 (270)<br><strong>2020:</strong> Carlos Ortiz \u2014 -13 (267)</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Round 1 Coverage',
      links: [
        { label: 'PGA Tour \u2014 Woodland Round 1', url: 'https://www.pgatour.com/article/news/latest/2026/03/26/gary-woodland-texas-childrens-houston-open-memorial-park-round-1-leaderboard-freed-up-brain-surgery-ptsd-recovery-paul-waring' },
        { label: 'CBS Sports \u2014 R1 Leaderboard', url: 'https://www.cbssports.com/golf/news/houston-open-2026-leaderboard-gary-woodland-rickie-fowler-round-1/' },
        { label: 'ESPN \u2014 Leaderboard', url: 'https://www.espn.com/golf/leaderboard/_/tournamentId/401811939' },
      ],
    },
    {
      heading: 'Tournament Information',
      links: [
        { label: 'TCH Open Official Site', url: 'https://www.tchouopen.com/' },
        { label: 'Golf News Net \u2014 TV Schedule', url: 'https://thegolfnewsnet.com/golfnewsnetteam/2026/03/28/2026-texas-childrens-houston-open-pga-tour-tv-and-streaming-schedule-how-to-watch-on-golf-channel-peacock-nbc-pga-tour-live-141615/' },
      ],
    },
  ],
  footerText: 'Texas Children\'s Houston Open 2026 \u2022 Round 1 \u2022 Thursday, March 26 \u2022 Memorial Park Golf Course',
}

export default game
