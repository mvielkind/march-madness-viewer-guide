import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'pga-houston-open-round-3-2026',
  title: 'Texas Children\'s Houston Open \u2014 Round 3 Recap',
  eventTag: 'PGA Tour \u2022 Round 3 \u2022 Saturday, March 28',
  date: 'Saturday, March 28, 2026',
  round: 'Round 3',
  tipTime: '2026-03-28T13:00',
  venue: 'Memorial Park Golf Course \u2022 Par 70 \u2022 7,475 yards \u2022 Golf Channel 1-3 PM / NBC 3-6 PM ET',
  extraInfo: 'Hojgaard fires 63 (62-63 = <strong>best consecutive rounds in 78-year Houston Open history</strong>) \u2022 Woodland leads by 1 at -18 \u2022 Six-shot gap to third',
  format: 'tournament',
  tournament: {
    name: "Texas Children's Houston Open",
    courseName: 'Memorial Park Golf Course \u2022 Houston, TX',
    colors: { primary: '#004225', secondary: '#FFD700', name: 'houston-open' },
  },
  teams: [
    {
      name: 'Woodland',
      mascot: '54-Hole Leader',
      seed: '-18',
      record: '64-63-65 = 192 \u2022 First 54-hole lead since 2019 U.S. Open',
      colors: { primary: '#004225', secondary: '#FFD700', name: 'woodland' },
      className: 'woodland',
    },
    {
      name: 'Hojgaard',
      mascot: 'The Challenger',
      seed: '-17',
      record: '68-62-63 = 193 \u2022 Historic back-to-back rounds',
      colors: { primary: '#C8102E', secondary: '#FFFFFF', name: 'hojgaard' },
      className: 'hojgaard',
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
      'Moving Day turned the Houston Open into a <strong>two-man duel</strong>. Gary Woodland leads at -18 after a third-round 65. Nicolai Hojgaard is one shot back at -17 after a <strong>63</strong> \u2014 his consecutive rounds of 62-63 are the <strong>best back-to-back rounds in the 78-year history of the Houston Open</strong>. The gap to third place is <strong>six shots</strong>. Woodland has his <strong>first 54-hole lead since his 2019 U.S. Open victory</strong>. This is his tournament to lose.',
    cards: [
      {
        label: 'Woodland\'s 54-Hole Lead',
        value: 'Gary Woodland leads at <strong>-18</strong> (64-63-65). This is his <strong>first 54-hole lead since the 2019 U.S. Open</strong> at Pebble Beach \u2014 which he won. He was runner-up at this event last year. Brain surgery in 2023. PTSD diagnosis in 2026. And now, 18 holes from his first win in nearly seven years.',
      },
      {
        label: 'Hojgaard\'s Historic Rounds',
        value: 'Nicolai Hojgaard\'s back-to-back rounds of <strong>62 and 63</strong> are the <strong>best consecutive rounds in the 78-year history of the Houston Open</strong> (est. 1946). The 23-year-old Dane produced 15 under par in two rounds at a par-70 course. He trails by one.',
      },
      {
        label: 'The Six-Shot Gap',
        value: 'Min Woo Lee and Michael Thorbjornsen are T3 at <strong>-12 \u2014 six shots back</strong>. Sam Stevens and Jason Day are T5 at -11. Only six players are within eight shots of the lead. This is essentially a <strong>two-horse race</strong>.',
      },
      {
        label: 'Thorbjornsen\'s Masters Math',
        value: 'Michael Thorbjornsen is T3 at -12 with just <strong>one bogey through 54 holes</strong>. The Stanford product is 5th in SG: OTT and 11th in SG: Approach this week. A T5 or better would push him from OWGR 56th into the top 50 for a <strong>Masters invitation</strong>.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Woodland: Power + Emotional Momentum',
      bullets: [
        '<strong>Leads the Tour in driving distance at 41:</strong> Woodland\'s length turns Memorial Park\'s monster par 4s into birdie opportunities. His eagle on the par-5 16th on Saturday was a statement.',
        '<strong>Course knowledge from five appearances:</strong> Runner-up in 2025, T9 in 2022. Knows every contour, every runoff, every pin position. Course familiarity is an underrated weapon in a tight finish.',
        '<strong>The Ceci connection drives every shot:</strong> Custom shoes, a shared battle against brain conditions, and the roar of a Houston crowd pulling for the comeback story. The emotional energy is real and measurable.',
        '<strong>Risk: hasn\'t led entering a final round since 2019.</strong> Seven years since he last protected a 54-hole lead. He won that day at Pebble Beach \u2014 but he was 34 then, not 41, and hadn\'t had brain surgery.',
      ],
    },
    {
      team: 'a',
      title: 'Hojgaard: Pure Ball-Striking in the Zone',
      bullets: [
        '<strong>Historic form: 62-63 are the best consecutive rounds in Houston Open history.</strong> When a player produces numbers like that, they\'re in a zone that transcends course familiarity or experience.',
        '<strong>One of six best ball-strikers on Tour:</strong> Averaging 1.50+ SG: Total per round in 2026. His iron play on Friday and Saturday was surgical \u2014 finding the correct quadrants of Memorial Park\'s contoured greens repeatedly.',
        '<strong>Youth and fearlessness:</strong> At 23, Hojgaard has no emotional baggage. He\'s not carrying the weight of a comeback narrative or brain surgery recovery. He can play free.',
        '<strong>Risk: first time at Memorial Park.</strong> He\'s never played a final round here. The greens, the wind patterns, the subtle slopes \u2014 Woodland knows them. Hojgaard is reading them on the fly.',
      ],
    },
  ],
  keys: [
    {
      title: 'Can Woodland hold a final-round lead for the first time since the 2019 U.S. Open?',
      description: 'Woodland hasn\'t protected a 54-hole lead in nearly seven years. The 2019 U.S. Open at Pebble Beach was his crowning achievement \u2014 he held off Brooks Koepka with a clutch birdie on the 72nd hole. Can he summon that same composure at 41, after brain surgery and a PTSD diagnosis? The crowd will be behind him. The course suits his game. But one-shot leads are fragile.',
    },
    {
      title: 'Hojgaard\'s zone \u2014 does momentum carry into Sunday?',
      description: 'Players who produce historic back-to-back rounds often either continue the magic or come back to earth with a thud. The 62-63 streak puts Hojgaard in rarefied air. If he shoots another 63-64 on Sunday, Woodland can\'t catch him by simply playing solid golf \u2014 he\'d need to go low too.',
    },
    {
      title: 'The par-5 16th \u2014 the Sunday swing hole.',
      description: 'The 616-yard par-5 16th with water guarding the peninsula green is where this tournament could be won or lost. Both Woodland and Hojgaard can reach it in two. A birdie-eagle swing on 16 could change the outcome. A water ball could end someone\'s chances.',
    },
    {
      title: 'Holes 15-18: Memorial Park\'s championship gauntlet.',
      description: 'The short par-3 15th (155 yards, "downright beastly"), the reachable par-5 16th (616 yards, water), the tight par-4 17th (405 yards), and the demanding 503-yard par-4 18th. Four holes, four different challenges. This is where the Houston Open will be decided.',
    },
    {
      title: 'Is -12 too far back for third place to matter?',
      description: 'Six shots behind with 18 holes to play is a significant gap, but not impossible at Memorial Park in calm conditions. A hot start \u2014 birdieing holes 2, 3, and 5 \u2014 could bring the chase group to within three shots if the leaders stumble. Michael Thorbjornsen has Masters qualification riding on every shot.',
    },
  ],
  prediction: {
    summary: 'This is Gary Woodland\'s tournament to lose. The one-shot lead, the emotional narrative, the course history (runner-up last year), and the crowd support all point his way. But Nicolai Hojgaard is the better pure ball-striker right now \u2014 and his 62-63 back-to-back rounds suggest a player in a zone that\'s hard to beat. The question is whether Hojgaard, at 23 and playing Memorial Park for the first time, can handle the pressure of chasing down a player the entire gallery is pulling for. The six-shot gap to third makes this essentially a head-to-head match play event.',
    phases: [
      {
        title: 'Front Nine \u2014 Setting the Tone',
        description: 'Woodland opens with a solid par on the demanding 522-yard 1st. Hojgaard birdies the par-3 2nd. They trade birdies on the par-5 3rd. The crowd roars for Woodland on every green. Hojgaard stays calm. By the turn, they\'re separated by a shot or less.',
      },
      {
        title: 'Back Nine \u2014 The Championship Stretch',
        description: 'The duel intensifies from holes 14-18. The monster par-4 14th (529 yards) tests both players\' length. The beastly par-3 15th demands precision. The par-5 16th offers eagle opportunities with water risk. The closing two holes require perfect execution.',
      },
      {
        title: 'The Finish \u2014 Either Man Can Win',
        description: 'This could go to the final putt on 18 or even a playoff. Woodland\'s emotional momentum and course knowledge give him the edge, but Hojgaard\'s pure ball-striking is the more reliable weapon. Projected winning score: -22 to -24.',
      },
    ],
    projectedScore: {
      teamA: -22,
      teamB: -21,
      rationale: 'Woodland\'s -18 pace projects to a -22 to -24 finish if he shoots 66-64 on Sunday. Hojgaard needs a 64 or better to have a chance. The calm Sunday forecast (sunny, 70s, light winds) supports low scoring. The Memorial Park record is -20 (Min Woo Lee, 2025) \u2014 it could fall.',
    },
  },
  tournamentPrediction: {
    summary: 'This is Gary Woodland\'s tournament to lose. The one-shot lead, the emotional narrative, the course history (runner-up last year), and the crowd support all point his way. But Nicolai Hojgaard is the better pure ball-striker right now \u2014 and his 62-63 back-to-back rounds suggest a player in a zone that\'s hard to beat. The six-shot gap to third makes this essentially a head-to-head match play event.',
    phases: [
      {
        title: 'Front Nine \u2014 Setting the Tone',
        description: 'Woodland opens with a solid par on the demanding 522-yard 1st. Hojgaard birdies the par-3 2nd. They trade birdies on the par-5 3rd. The crowd roars for Woodland on every green. Hojgaard stays calm. By the turn, they\'re separated by a shot or less.',
      },
      {
        title: 'Back Nine \u2014 The Championship Stretch',
        description: 'The duel intensifies from holes 14-18. The monster par-4 14th (529 yards) tests both players\' length. The beastly par-3 15th demands precision. The par-5 16th offers eagle opportunities with water risk. The closing two holes require perfect execution.',
      },
      {
        title: 'The Finish \u2014 Either Man Can Win',
        description: 'This could go to the final putt on 18 or even a playoff. Woodland\'s emotional momentum and course knowledge give him the edge, but Hojgaard\'s pure ball-striking is the more reliable weapon.',
      },
    ],
    projectedWinner: {
      name: 'Gary Woodland',
      score: '-22 (258)',
      rationale: 'Woodland\'s -18 pace projects to -22 with a final-round 66. His course knowledge and emotional momentum give him a slight edge. The Memorial Park record of -20 could fall.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Gary Woodland',
      stats: '64-63-65 (192) \u2022 -18 \u2022 54-hole leader',
      meta: 'Age 41 \u2022 First 54-hole lead since 2019 U.S. Open',
      bio: 'The <strong>2019 U.S. Open champion</strong> has his first 54-hole lead since that magical week at Pebble Beach. After brain surgery (2023) and a PTSD diagnosis (2026), Woodland is 18 holes from his first win in nearly seven years. Custom shoes designed by Ceci. The crowd is behind him. The course suits his game. <strong>One shot lead. One round to go.</strong>',
    },
    {
      team: 'a',
      name: 'Min Woo Lee',
      stats: '-12 (T3) \u2022 Defending champion \u2022 Six shots back',
      meta: 'Age 26 \u2022 Australian \u2022 Won at -20 in 2025',
      bio: 'The defending champion is T3 at -12, six shots behind Woodland. Would need a historic final round to defend his title. His 2025 victory included a separation on the back nine of Round 3 \u2014 he knows how to close at this course.',
    },
    {
      team: 'a',
      name: 'Michael Thorbjornsen',
      stats: '-12 (T3) \u2022 1 bogey in 54 holes \u2022 OWGR #56',
      meta: 'Age 23 \u2022 Stanford \u2022 Chasing Masters invite',
      bio: 'Playing the most <strong>important round of his young career</strong> on Sunday. Just one bogey through 54 holes. A T5 or better would push him into the OWGR top 50 for his first Masters invitation in two weeks. Six shots back of the lead but focused on his own game.',
    },
    {
      team: 'a',
      name: 'Jason Day',
      stats: '-11 (T5) \u2022 Former world #1 \u2022 Seven shots back',
      meta: 'Age 38 \u2022 Australian \u2022 2015 PGA champion',
      bio: 'The former world No. 1 is quietly T5 at -11. Two top-15 finishes at Memorial Park give him course comfort. At 38, he\'s not the favorite, but a low final round could produce a top-5.',
    },
    {
      team: 'a',
      name: 'Nicolai Hojgaard',
      stats: '68-62-63 (193) \u2022 -17 \u2022 Solo 2nd \u2022 1 shot back',
      meta: 'Age 23 \u2022 Danish \u2022 Best back-to-back rounds in Houston Open history',
      bio: 'Consecutive rounds of <strong>62 and 63</strong> are the <strong>best back-to-back rounds in the 78-year history of the Houston Open</strong>. The 23-year-old Dane is one of the six best ball-strikers on the 2026 PGA Tour. One shot back entering Sunday. A win would be his first on the PGA Tour.',
    },
    {
      team: 'a',
      name: 'Sam Stevens',
      stats: '-11 (T5) \u2022 Seven shots back',
      meta: 'American \u2022 Steady weekend performer',
      bio: 'Quietly in T5 at -11. Would need a spectacular final round to factor into the two-man race at the top, but a top-10 is within reach.',
    },
    {
      team: 'a',
      name: 'Sudarshan Yellamaraju',
      stats: '-10 (T7) \u2022 Self-taught via YouTube',
      meta: 'Age 23 \u2022 Canadian (born India) \u2022 PGA Tour rookie',
      bio: 'The <strong>self-taught PGA Tour rookie</strong> \u2014 who learned golf from YouTube videos \u2014 is T7 at -10. Eight shots back but showing he belongs at this level after his T5 at The Players Championship.',
    },
    {
      team: 'a',
      name: 'Sahith Theegala',
      stats: '-10 (T7) \u2022 Fan favorite',
      meta: 'Age 27 \u2022 American \u2022 USC alum \u2022 Flew in from TGL finals',
      bio: 'The fan favorite is T7 at -10 after flying in from the TGL finals earlier in the week. USC alum with infectious energy. Eight shots back but playing solid golf.',
    },
  ],
  funFacts: [
    {
      emoji: '\uD83D\uDCCA',
      title: '62-63: Houston Open History',
      body: 'Hojgaard\'s back-to-back rounds of 62-63 are the best consecutive rounds in the <strong>78-year history</strong> of the Houston Open (est. 1946). That\'s 15 under par in 36 holes on a par-70 course.',
    },
    {
      emoji: '\uD83C\uDFC6',
      title: 'First 54-Hole Lead Since Pebble Beach',
      body: 'Woodland\'s -18 lead is his first 54-hole advantage since the <strong>2019 U.S. Open at Pebble Beach</strong>. He won that day. It was the last time he won anything.',
    },
    {
      emoji: '\uD83D\uDCA8',
      title: 'Calm Sunday Forecast',
      body: 'Sunday\'s forecast: mostly sunny, highs in the upper 70s, winds only 15 km/h to the southeast. Perfect scoring conditions.',
    },
    {
      emoji: '\u2795',
      title: 'Six-Shot Gap',
      body: 'The gap from 2nd to 3rd place is <strong>six shots</strong>. This is effectively a two-man tournament.',
    },
    {
      emoji: '\uD83C\uDFAF',
      title: 'One Bogey in 54 Holes',
      body: 'Michael Thorbjornsen has made just <strong>one bogey</strong> through 54 holes of the Houston Open. His bogey avoidance is elite on a course with five par 4s over 490 yards.',
    },
    {
      emoji: '\uD83D\uDC5F',
      title: 'Ceci\'s Shoes',
      body: 'Woodland\'s custom shoes \u2014 designed by a young Texas Children\'s Hospital patient \u2014 have been on his feet for all three rounds. The connection transcends golf.',
    },
    {
      emoji: '\uD83D\uDC6F',
      title: 'Twin Power',
      body: 'Nicolai Hojgaard\'s twin brother Rasmus also plays on the PGA Tour. Both are Danish and both turned pro at 18.',
    },
    {
      emoji: '\uD83C\uDDEB\uD83C\uDDF7',
      title: 'The 16th Hole',
      body: 'The par-5 16th (616 yards) with its peninsula green and water hazard is likely to be the <strong>swing hole on Sunday</strong>. Both leaders can reach it in two.',
    },
    {
      emoji: '\uD83E\uDDE0',
      title: 'Brain Surgery to 54-Hole Leader',
      body: 'Woodland had brain surgery in September 2023. Thirty months later, he leads a PGA Tour event.',
    },
    {
      emoji: '\uD83C\uDDFB\uD83C\uDDEA',
      title: 'Vegas Still Alive',
      body: 'Houston resident Jhonattan Vegas is T12 at -8 through 54 holes. The crowd favorite is having a solid week in his hometown.',
    },
  ],
  history: {
    callout: 'Gary Woodland\'s 54-hole lead is his first since the <strong>2019 U.S. Open at Pebble Beach</strong>, which he won by three shots over Brooks Koepka. That was seven years and one brain surgery ago.',
    subsections: [
      {
        title: 'Woodland\'s Career Arc',
        type: 'timeline' as const,
        content: '',
        timeline: [
          { date: '2019', text: '<strong>U.S. Open champion</strong> at Pebble Beach. Beat Brooks Koepka by 3 shots. His 4th PGA Tour victory and crowning achievement.' },
          { date: '2020-22', text: 'Competitive but no wins. T9 at Houston Open (2022). The game is still there but inconsistent.' },
          { date: 'Sep 2023', text: '<strong>Brain surgery</strong> to remove a lesion. Begin long recovery process.' },
          { date: 'Mar 2025', text: 'Runner-up at Houston Open, losing to Min Woo Lee by one shot at -19.' },
          { date: 'Mar 2026', text: 'Publicly reveals <strong>PTSD diagnosis</strong>. Misses 4 of 6 cuts. Then fires 64-63-65 to lead the Houston Open.' },
        ],
      },
      {
        title: 'Hojgaard\'s Record Rounds in Context',
        type: 'card' as const,
        content: '<p>The Houston Open has been played since 1946 \u2014 78 years of history. No player has ever produced back-to-back rounds as low as Nicolai Hojgaard\'s 62-63 in that span. For context: Vijay Singh\'s tournament-record -22 in 2002 was spread over four rounds. Hojgaard produced -15 in just two rounds. The 23-year-old Dane is making history in real time.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Round 3 Coverage',
      links: [
        { label: 'CBS Sports \u2014 R3 Leaderboard', url: 'https://www.cbssports.com/golf/news/houston-open-2026-leaderboard-gary-woodland-nicolai-hojgaard-round-3/' },
        { label: 'PGA Tour \u2014 How to Watch Round 3', url: 'https://www.pgatour.com/article/news/latest/2026/03/27/texas-childrens-houston-open-how-to-watch-live-scores-tee-times-tv-times-for-round-3' },
        { label: 'ESPN \u2014 Leaderboard', url: 'https://www.espn.com/golf/leaderboard/_/tournamentId/401811939' },
        { label: 'PGA Tour \u2014 Thorbjornsen Masters Chase', url: 'https://www.pgatour.com/article/news/latest/2026/03/28/guys-to-watch-texas-childrens-houston-open-michael-thorbjornsen-masters-qualifying' },
      ],
    },
    {
      heading: 'Sunday Preview',
      links: [
        { label: 'Golf Channel \u2014 Final Round Tee Times', url: 'https://www.golfchannel.com/pga-tour/news/houston-open-2026-how-to-watch-final-round-tee-times-groupings' },
        { label: 'Golf.com \u2014 Sunday Tee Times', url: 'https://golf.com/news/2026-texas-childrens-houston-open-sunday-tee-times-round-4/' },
      ],
    },
  ],
  footerText: 'Texas Children\'s Houston Open 2026 \u2022 Round 3 \u2022 Saturday, March 28 \u2022 Woodland -18, Hojgaard -17 \u2022 Sunday final round on NBC (3-6 PM ET)',
}

export default game
