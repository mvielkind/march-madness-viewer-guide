import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'pga-houston-open-round-2-2026',
  title: 'Texas Children\'s Houston Open \u2014 Round 2 Recap',
  eventTag: 'PGA Tour \u2022 Round 2 \u2022 Friday, March 27',
  date: 'Friday, March 27, 2026',
  round: 'Round 2',
  tipTime: '2026-03-27T15:00',
  venue: 'Memorial Park Golf Course \u2022 Par 70 \u2022 7,475 yards \u2022 Golf Channel 3-7 PM ET',
  extraInfo: 'Hojgaard fires 62 \u2022 Woodland shoots 63 to extend lead \u2022 Cut at -2 \u2022 Koepka misses cut',
  format: 'tournament',
  tournament: {
    name: "Texas Children's Houston Open",
    courseName: 'Memorial Park Golf Course \u2022 Houston, TX',
    colors: { primary: '#004225', secondary: '#FFD700', name: 'houston-open' },
  },
  teams: [
    {
      name: 'Leaders',
      mascot: 'After 36 Holes',
      seed: 'Making the Cut',
      record: 'Woodland -13, Hojgaard -9, Lee -7',
      colors: { primary: '#004225', secondary: '#FFD700', name: 'leaders' },
      className: 'leaders',
    },
    {
      name: 'Cut Line',
      mascot: 'Weekend or Home',
      seed: '-2 to make weekend',
      record: '75 players advance',
      colors: { primary: '#1C3A5F', secondary: '#FFFFFF', name: 'cutline' },
      className: 'cutline',
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
      'Gary Woodland backed up his opening 64 with a <strong>63 on Friday</strong> to take command at -13. Nicolai Hojgaard fired a <strong>62</strong> \u2014 tying the Memorial Park course record \u2014 to vault into contention. The cut fell at <strong>-2</strong>, with 75 players advancing. <strong>Brooks Koepka missed the cut</strong> at the course he helped design. Rickie Fowler also missed, effectively ending his Masters qualification hopes.',
    cards: [
      {
        label: 'Woodland Extends Lead',
        value: 'Woodland\'s 64-63 opening (127 total, -13) gives him a commanding position at the halfway mark. The 41-year-old is playing the best golf of his post-surgery career.',
      },
      {
        label: 'Hojgaard\'s 62',
        value: 'Nicolai Hojgaard fired a <strong>62 on Friday</strong>, tying the Memorial Park course record. This is the beginning of what would become the best back-to-back rounds in Houston Open history.',
      },
      {
        label: 'Cut Line: -2',
        value: 'The cut fell at <strong>-2</strong> with 75 players advancing to the weekend. Historical cut lines at Memorial Park range from -3 to +3 \u2014 this year\'s cut reflects the low scoring conditions.',
      },
      {
        label: 'Notable Missed Cuts',
        value: '<strong>Brooks Koepka</strong> \u2014 who helped design Memorial Park \u2014 missed the cut due to putting woes. <strong>Rickie Fowler</strong> (OWGR 61st) also missed, ending his Masters qualification hopes. <strong>Sam Burns</strong> missed his fourth consecutive cut.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Woodland\'s Sustained Excellence',
      bullets: [
        '<strong>Back-to-back 63-64 rounds:</strong> Woodland\'s consistency over 36 holes is remarkable for a player who missed 4 of his first 6 cuts this season.',
        '<strong>Driving distance creating short approach shots:</strong> Leading the Tour in driving distance at age 41, Woodland is turning long par 4s into mid-iron approaches.',
        '<strong>Emotional energy from the Ceci connection:</strong> The Texas Children\'s Hospital storyline is providing extra motivation on every hole.',
      ],
    },
    {
      team: 'a',
      title: 'Hojgaard\'s Ball-Striking Masterclass',
      bullets: [
        '<strong>Course-record tying 62:</strong> The 23-year-old Dane\'s Friday round was a ball-striking clinic, finding green after green in regulation.',
        '<strong>Elite SG: Total in 2026:</strong> Averaging 1.50+ SG: Total per round, Hojgaard is one of the best all-around players on Tour this season.',
        '<strong>First time at Memorial Park:</strong> That he produced a 62 on his second-ever round here speaks to pure talent overcoming lack of course knowledge.',
      ],
    },
  ],
  keys: [
    {
      title: 'Woodland\'s four-shot cushion \u2014 is it enough?',
      description: 'Woodland leads by four entering the weekend. Historical data at Memorial Park shows that 36-hole leaders have held on more often than not, but the calm weekend forecast could produce charges from deep in the field.',
    },
    {
      title: 'Hojgaard\'s trajectory \u2014 can the Dane go even lower?',
      description: 'After a pedestrian 68 on Thursday, Hojgaard fired a 62 on Friday. If he carries that momentum into Saturday, the Houston Open record for consecutive rounds could be in play.',
    },
    {
      title: 'Koepka\'s cut \u2014 the designer fails his own test.',
      description: 'Brooks Koepka helped Tom Doak design Memorial Park\'s renovation. His missed cut \u2014 due to putting, not ball-striking \u2014 is an ironic twist. His SG: Approach was still elite; the greens he helped shape simply wouldn\'t cooperate.',
    },
    {
      title: 'Masters qualification update after the cut.',
      description: 'Michael Thorbjornsen made the cut comfortably and is in position for a top-10 that could push him into the OWGR top 50. Rickie Fowler missed the cut and must now win next week\'s Valero Texas Open to qualify for Augusta.',
    },
    {
      title: 'Weekend weather favors low scoring.',
      description: 'Saturday and Sunday forecasts call for sunny skies, temperatures in the 70s, and light winds. Expect aggressive play and scoring in the mid-to-low 60s from the leaders.',
    },
  ],
  prediction: {
    summary: 'Woodland\'s four-shot lead is comfortable but not insurmountable. Hojgaard\'s 62 showed he has the game to close the gap quickly. The calm weekend forecast should produce low scores across the board, compressing the leaderboard. Saturday\'s Moving Day will determine whether this is a coronation or a Sunday shootout.',
    phases: [
      {
        title: 'Round 3 Preview \u2014 Moving Day',
        description: 'Calm conditions expected. Woodland and Hojgaard will be the center of attention. Watch for Min Woo Lee (defending champion, -7) to make a Saturday charge \u2014 his 2025 win was built on a third-round 64.',
      },
      {
        title: 'Sunday Outlook',
        description: 'If Woodland maintains his lead through Saturday, Sunday becomes about whether Hojgaard can apply enough pressure to force mistakes on Memorial Park\'s demanding closing stretch (15-18).',
      },
    ],
    projectedScore: {
      teamA: -20,
      teamB: -17,
      rationale: 'Woodland\'s -13 pace through 36 holes projects to a -22 to -26 finish if maintained. More realistically, expect regression toward -18 to -22. Hojgaard needs two more rounds in the 63-65 range to catch up.',
    },
  },
  tournamentPrediction: {
    summary: 'Woodland\'s four-shot lead is comfortable but not insurmountable. Hojgaard\'s 62 showed he has the game to close the gap quickly. The calm weekend forecast should produce low scores across the board, compressing the leaderboard.',
    phases: [
      {
        title: 'Round 3 Preview \u2014 Moving Day',
        description: 'Calm conditions expected. Woodland and Hojgaard will be the center of attention. Watch for Min Woo Lee (defending champion, -7) to make a Saturday charge \u2014 his 2025 win was built on a third-round 64.',
      },
      {
        title: 'Sunday Outlook',
        description: 'If Woodland maintains his lead through Saturday, Sunday becomes about whether Hojgaard can apply enough pressure to force mistakes on Memorial Park\'s demanding closing stretch.',
      },
    ],
    projectedWinner: {
      name: 'Gary Woodland',
      score: '-20 to -22',
      rationale: 'Woodland\'s -13 pace through 36 holes projects to a -20 to -22 finish. Hojgaard needs two more rounds in the 63-65 range to catch up.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Gary Woodland',
      stats: '64-63 (127) \u2022 -13 \u2022 36-hole leader by 4',
      meta: 'Age 41 \u2022 2019 U.S. Open champion \u2022 Best golf since brain surgery',
      bio: 'Backed up his opening 64 with a Friday <strong>63</strong>. At -13 through 36 holes, Woodland is playing the best golf of his post-surgery career. The emotional energy from the Ceci connection and his PTSD breakthrough is palpable.',
    },
    {
      team: 'a',
      name: 'Nicolai Hojgaard',
      stats: '68-62 (130) \u2022 -9 \u2022 Course-record tying 62',
      meta: 'Age 23 \u2022 Danish \u2022 World #47 \u2022 Four shots back',
      bio: 'Fired a <strong>course-record tying 62</strong> on Friday after an opening 68. The 23-year-old Dane is one of the six best ball-strikers on Tour in 2026. Four shots back but trending in the right direction.',
    },
    {
      team: 'a',
      name: 'Min Woo Lee',
      stats: '68-63 \u2022 -7 \u2022 Defending champion',
      meta: 'Age 26 \u2022 Australian \u2022 Six shots back',
      bio: 'The defending champion followed his opening 68 with a Friday <strong>63</strong>. Six shots back entering the weekend, but his 2025 victory was built on a Saturday surge.',
    },
    {
      team: 'a',
      name: 'Michael Thorbjornsen',
      stats: '68-64 \u2022 -6 \u2022 OWGR #56',
      meta: 'Age 23 \u2022 Stanford \u2022 Chasing Masters invite',
      bio: 'Made the cut comfortably and is in position for a top-10 that could push him into the OWGR top 50 for a Masters invitation.',
    },
    {
      team: 'a',
      name: 'Chris Gotterup',
      stats: 'Made cut \u2022 World #10 \u2022 2 wins in 2026',
      meta: 'Age 25 \u2022 Highest-ranked player in field',
      bio: 'The highest-ranked player in the field made the cut but is chasing from well back. His driving distance (321.5 yards, 5th on Tour) is perfectly suited for Memorial Park\'s closing stretch.',
    },
    {
      team: 'a',
      name: 'Tony Finau',
      stats: 'Made cut \u2022 2022 Houston Open champion',
      meta: 'Age 36 \u2022 5th in SG per round at Memorial Park',
      bio: 'The 2022 champion made the cut and has the course knowledge to make a weekend move. Ranks 5th in SG per round at this venue among the current field.',
    },
    {
      team: 'a',
      name: 'Jason Day',
      stats: '68-63 \u2022 Made cut \u2022 Former world #1',
      meta: 'Age 38 \u2022 Australian \u2022 2015 PGA champion',
      bio: 'The former world No. 1 is quietly in contention after a strong Friday round. Two top-15 finishes at Memorial Park in prior years.',
    },
    {
      team: 'a',
      name: 'Bronson Burgoon',
      stats: 'Made cut \u2022 The Woodlands native',
      meta: 'Age 38 \u2022 Texas A&M alum \u2022 Hometown hero',
      bio: 'The hometown hero from The Woodlands made the cut, ensuring a weekend of hometown support at Memorial Park.',
    },
  ],
  funFacts: [
    {
      emoji: '\uD83D\uDCCA',
      title: 'Course Record Tied',
      body: 'Hojgaard\'s 62 tied the Memorial Park course record, previously set by Scottie Scheffler, Tony Finau, Gary Woodland, and Sami Valimaki.',
    },
    {
      emoji: '\u274C',
      title: 'Designer\'s Dilemma',
      body: 'Brooks Koepka \u2014 who helped Tom Doak design Memorial Park \u2014 missed the cut at his own course due to putting woes.',
    },
    {
      emoji: '\uD83C\uDFCC\uFE0F',
      title: 'Cut at -2',
      body: 'The -2 cut line reflects the low scoring conditions created by calm weather and soft spring turf.',
    },
    {
      emoji: '\uD83C\uDFC6',
      title: 'Fowler\'s Masters Hopes Dashed',
      body: 'Rickie Fowler missed the cut and must now win next week\'s Valero Texas Open to qualify for Augusta.',
    },
    {
      emoji: '\uD83E\uDDE0',
      title: 'Woodland\'s Streak',
      body: 'Woodland\'s 64-63 opening is his best 36-hole start since before his 2023 brain surgery.',
    },
    {
      emoji: '\uD83D\uDC6F',
      title: 'Twin on Tour',
      body: 'Nicolai Hojgaard\'s twin brother Rasmus also plays on the PGA Tour. Both turned pro at age 18.',
    },
    {
      emoji: '\uD83C\uDDFB\uD83C\uDDEA',
      title: 'Vegas Makes the Weekend',
      body: 'Houston resident Jhonattan Vegas made the cut, ensuring he\'ll play the weekend at his home event.',
    },
    {
      emoji: '\uD83C\uDFAF',
      title: 'Five Par 3s',
      body: 'Memorial Park\'s five par 3s are unusual for a par 70. They range from 155 yards (#15) to 237 yards (#11).',
    },
    {
      emoji: '\u26F3',
      title: 'Public Course',
      body: 'Memorial Park handles 60,000+ rounds per year as a public municipal course.',
    },
    {
      emoji: '\uD83D\uDCB0',
      title: '$1.78M on the Line',
      body: 'The winner takes home $1,782,000 plus 500 FedExCup points and a Masters invitation.',
    },
  ],
  history: {
    callout: 'The -2 cut line at Memorial Park falls within the historical range of -3 to +3. The 2025 event produced the lowest scoring in Memorial Park history with Min Woo Lee\'s record -20.',
    subsections: [
      {
        title: 'Historical Cut Lines at Memorial Park',
        type: 'card' as const,
        content:
          '<p>Cut lines at Memorial Park have ranged from <strong>-3 to +3</strong> across five tournaments. The 2026 cut at -2 reflects the favorable scoring conditions created by calm weather, soft spring turf, and overseeded greens. Notable players who have missed cuts at Memorial Park over the years include several big names who struggled with the course\'s demanding par 4s.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Round 2 Coverage',
      links: [
        { label: 'CBS Sports \u2014 R2 Leaderboard', url: 'https://www.cbssports.com/golf/news/houston-open-2026-leaderboard-gary-woodland-round-2/' },
        { label: 'PGA Tour \u2014 Koepka Misses Cut', url: 'https://www.pgatour.com/article/news/latest/2026/03/27/brooks-koepka-misses-cut-line-texas-childrens-houston-open-who-made-the-weekend' },
        { label: 'ESPN \u2014 Leaderboard', url: 'https://www.espn.com/golf/leaderboard/_/tournamentId/401811939' },
      ],
    },
    {
      heading: 'Tournament Information',
      links: [
        { label: 'TCH Open Official Site', url: 'https://www.tchouopen.com/' },
        { label: 'Golf News Net \u2014 Purse & Payout', url: 'https://thegolfnewsnet.com/golfnewsnetteam/2026/03/28/2026-texas-childrens-houston-open-purse-winners-share-pga-tour-prize-money-payout-141602/' },
      ],
    },
  ],
  footerText: 'Texas Children\'s Houston Open 2026 \u2022 Round 2 \u2022 Friday, March 27 \u2022 Memorial Park Golf Course',
}

export default game
