import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'mlb-mets-at-cardinals-2026-03-31',
  title: 'Mets at Cardinals',
  eventTag: 'MLB',
  date: 'Tuesday, March 31, 2026 • 7:45 PM ET',
  round: 'Regular Season',
  tipTime: '2026-03-31T19:45',
  venue: 'Busch Stadium, St. Louis, MO • SNY / Cardinals.TV',
  extraInfo: 'Game 2 of 3 — Mets lead series 1-0 after 4-2 win on March 30',
  teams: [
    {
      name: 'New York Mets',
      mascot: 'Mets',
      seed: '',
      record: '3-1',
      colors: { primary: '#002D72', secondary: '#FF5910', name: 'mets' },
      className: 'mets',
    },
    {
      name: 'St. Louis Cardinals',
      mascot: 'Cardinals',
      seed: '',
      record: '2-2',
      colors: { primary: '#C41E3A', secondary: '#0C2340', name: 'cardinals' },
      className: 'cardinals',
    },
  ],
  tabs: [
    { id: 'stakes', label: 'Pitching' },
    { id: 'styles', label: 'Styles of Play' },
    { id: 'keys', label: 'Keys to the Game' },
    { id: 'prediction', label: 'Prediction' },
    { id: 'players', label: 'Players to Watch' },
    { id: 'trends', label: 'Trends' },
    { id: 'sources', label: 'Sources' },
  ],
  stakes: {
    callout:
      'Kodai Senga makes his <strong>2026 season debut</strong> after a dominant spring (11 K, 1.86 ERA in 9.2 IP) with his fastball back touching 98.9 mph. Andre Pallante is looking to prove his disastrous 2025 (5.31 ERA, 6-15 record) is behind him after overhauling his pitch arsenal with a new kick-change. The Mets won Game 1 behind Bo Bichette\'s 2 RBI and Devin Williams\' first save in blue and orange. The Cardinals\' young core — led by <strong>rookie JJ Wetherholt</strong>, who homered in his debut and walked it off in his second game — is trying to establish itself at home.',
    cards: [
      {
        label: 'Senga\'s Return',
        value:
          '<strong>11 K, 1 BB, 1.86 ERA</strong> this spring with fastball touching 98.9 mph. His ghost fork had a .210 xwOBA and 41.8% whiff rate in 2025. This is his first regular-season start of the year.',
      },
      {
        label: 'Pallante\'s Reinvention',
        value:
          'New kick-change pitch, more curveball usage, and a mental reset after a <strong>5.31 ERA in 2025</strong>. His career ERA vs the Mets is 5.32 in 10 appearances. His slider (.206 BAA, 33.8% whiff) is the one pitch that works.',
      },
      {
        label: 'Mets Lineup Depth',
        value:
          'Lindor is <strong>6-for-13 (.462) career vs Pallante</strong>. Soto drew 127 walks in 2025. Bichette had 2 RBI in Game 1. Five hitters in the lineup hit 15+ HR in 2025.',
      },
      {
        label: 'Cardinals\' Youth Movement',
        value:
          'Average age of the Cardinals lineup is around 25. <strong>JJ Wetherholt</strong> (debut HR, walk-off single) and <strong>Victor Scott II</strong> (30.2 ft/sec sprint, 2nd-fastest in MLB) bring energy and speed.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Star-Powered Lineup, Elite Bullpen, Discipline at the Plate',
      bullets: [
        '<strong>Juan Soto anchors the offense:</strong> .263/.396/.525 with 43 HR, 105 RBI, and 38 SB in 2025. He led the NL with <strong>127 walks</strong> — a franchise record. Against a pitcher like Pallante who struggles with command (180 career BB in 460 IP), Soto\'s patience is a weapon that poisons the entire lineup behind him.',
        '<strong>Lindor owns Pallante:</strong> Francisco Lindor is <strong>6-for-13 (.462) career vs Andre Pallante</strong>. As a switch-hitter, Lindor can attack from both sides. His 2025 season — .267/.346/.466 with 31 HR and 31 SB — made him one of just seven 30-30 players in MLB. He sets the table from the leadoff spot.',
        '<strong>Bichette provides contact and RBI production:</strong> Bo Bichette hit .311 with 18 HR and 94 RBI in 2025 with Toronto before signing with the Mets. He drove in 2 runs in Game 1 — his first multi-RBI game in a Mets uniform. His contact-oriented approach (.312 career BA in his best seasons) is harder to strike out than the typical power bat.',
        '<strong>Devin Williams closes it out:</strong> Williams earned his first Mets save in Game 1 with a 1-2-3 ninth. The former Brewers/Yankees closer signed a 3-year, $51M deal. Behind him: Luke Weaver (2yr/$22M), Brooks Raley (.103 BAA vs LHH in 2025), and Huascar Brazoban (3.57 ERA, 63 IP in 2025). This bullpen is deep and expensive.',
        '<strong>Weakness — first base and lineup depth beyond the top 4:</strong> Jared Young at 1B had just 23 games of MLB experience in 2025. Marcus Semien hit .230 last year. Carson Benge is a rookie making his 5th career start. The lineup is top-heavy — if Pallante can navigate Lindor, Soto, and Bichette, the middle and bottom are exploitable.',
      ],
    },
    {
      team: 'b',
      title: 'Youth-Driven Rebuild, Contact and Speed, Ground Ball Heavy',
      bullets: [
        '<strong>The youngest lineup in MLB:</strong> The Cardinals\' average age is roughly 25. JJ Wetherholt, Victor Scott II, Nathan Church, and Jordan Walker are all 25 or younger. This is a team building for the future — but these young players can surprise. Wetherholt homered in his debut and walked off the Rays in his second game.',
        '<strong>Ivan Herrera is the offensive engine:</strong> .284/.373/.464 with 19 HR and 66 RBI in 2025, including a .330 average and 1.115 OPS vs left-handed pitching. He\'s the DH tonight. Herrera is the one Cardinal who can match the Mets\' star power at the plate.',
        '<strong>Alec Burleson won a Silver Slugger:</strong> .290/.343/.459 with 18 HR in 2025. As a left-handed hitter at 1B, he\'s the Cardinals\' most consistent bat. His contact-first approach (.343 OBP) gives him the patience to extend at-bats against Senga\'s secondary stuff.',
        '<strong>Victor Scott II is the wild card on the bases:</strong> 34 SB in 2025 with a 30.2 ft/sec sprint speed — <strong>2nd-fastest in MLB</strong> behind Bobby Witt Jr. He has an 88.6% career success rate. If Scott reaches base against Senga, he will run. Senga is not known for a great pickoff move.',
        '<strong>Weakness — strikeouts and lineup holes:</strong> Gorman (.205, high K%), Walker (.215), Scott (.216), and Church (.179 in MLB) are all offensive liabilities. Against a pitcher with Senga\'s ghost fork, those K-prone hitters could combine for 5+ strikeouts. The Cardinals lack a consistent 3-4-5 that can punish mistakes.',
      ],
    },
  ],
  keys: [
    {
      title: 'Senga\'s ghost fork vs the Cardinals\' five left-handed bats',
      description:
        'The Cardinals stack five lefties (Wetherholt, Burleson, Gorman, Church, Scott) in tonight\'s lineup. Senga\'s ghost fork — with a .210 xwOBA and 41.8% whiff rate in 2025 — is designed to bury left-handed hitters with its tumbling downward action. If Senga has command of the fork, he could rack up 6+ strikeouts against this lineup. The key Cardinals to watch: Burleson has the discipline to lay off; Gorman is boom-or-bust with 35%+ K rates. If the ghost fork is sharp, this game could be over by the 5th inning.',
    },
    {
      title: 'Lindor\'s career dominance of Pallante sets the tone',
      description:
        'Francisco Lindor is 6-for-13 (.462) career against Andre Pallante. As the leadoff hitter, Lindor reaching base immediately puts pressure on Pallante\'s fragile confidence. Pallante\'s fastball was crushed in 2025 (.312 BAA), and Lindor is the type of hitter who punishes hittable fastballs. If Lindor gets on in the first inning, Soto and Bichette follow — and Pallante\'s career 5.32 ERA vs the Mets becomes a self-fulfilling prophecy.',
    },
    {
      title: 'Pallante\'s new kick-change: debut under pressure',
      description:
        'Pallante overhauled his arsenal this offseason, developing a kick-change at "changeup camp" and working on throwing his curveball for strikes. The question is whether these new pitches are ready for primetime in his first start of 2026. His slider was his best pitch in 2025 (.206 BAA), but he can\'t survive on slider-sinker alone against a lineup with Soto\'s plate discipline. If the kick-change gives him a third reliable pitch, he keeps it close. If it\'s inconsistent, the Mets\' top of the order feasts.',
    },
    {
      title: 'Victor Scott II\'s speed vs Senga on the mound and Alvarez behind the plate',
      description:
        'Scott is the fastest player in this game — 30.2 ft/sec, 34 SB in 2025, 88.6% career success rate. Senga does not have a reputation for holding runners well. Francisco Alvarez missed significant time in 2025 with a hamate fracture and thumb surgery, and his arm behind the plate is average. If Scott reaches base even once, he disrupts Senga\'s rhythm. In a game where each run matters, a stolen base turning a single into a scoring opportunity could flip the script.',
    },
    {
      title: 'Bullpen advantage: Williams and the Mets\' late-inning firepower',
      description:
        'Devin Williams converted a 1-2-3 save in Game 1. Behind him, the Mets have Luke Weaver and Brooks Raley (who held lefties to a .103 BAA in 2025 — devastating against the Cardinals\' lefty-heavy lineup). The Cardinals\' bullpen is closer-by-committee after trading Ryan Helsley to the Orioles. If this game goes to the 7th inning tied or close, the Mets\' bullpen depth is a decisive edge. The Cardinals need to build a lead before the late innings, because they won\'t win a bullpen battle.',
    },
  ],
  prediction: {
    summary:
      '<p>Kodai Senga\'s arsenal — headlined by the ghost fork — is a tier above what Andre Pallante can offer, even with his offseason improvements. The Mets\' top three hitters (Lindor, Soto, Bichette) have the plate discipline and contact quality to exploit Pallante\'s fastball, which was hit at a .312 clip in 2025. Lindor\'s .462 career average vs Pallante suggests the tone gets set early.</p><p>The Cardinals have youth and speed, but their K-prone hitters (Gorman, Walker, Scott) will struggle against Senga\'s ghost fork. Burleson and Herrera are the Cardinals\' best hopes to drive in runs, but Senga\'s spring dominance (11 K, 1 BB in 9.2 IP) suggests he\'s fully healthy and sharp. The warm weather and wind could help fly balls carry, but Busch Stadium\'s park factor (91 for HR) partially negates that. The Mets\' bullpen advantage with Williams closing seals it late.</p>',
    phases: [
      {
        title: 'Early Innings (1-3)',
        description:
          'Senga establishes the ghost fork early, striking out 2-3 Cardinals in the first two frames. Pallante battles but Lindor reaches base in the 1st, setting up a Soto RBI. Mets take a 1-0 or 2-0 lead. Cardinals struggle to make hard contact against Senga\'s fastball-fork combo.',
      },
      {
        title: 'Middle Innings (4-6)',
        description:
          'Pallante\'s pitch count climbs as Mets hitters work counts. A big inning comes when Soto or Polanco connects for extra bases. Senga cruises but the Cardinals get a solo homer from Gorman or Herrera to cut the deficit. Mets lead 4-2 heading into the 7th.',
      },
      {
        title: 'Late Innings (7-9)',
        description:
          'Senga exits after 5.2-6.0 innings. The Mets\' bullpen — Weaver, Brazoban, and Williams — slams the door. Victor Scott reaches and steals a base but is stranded. Williams converts his second straight save. Cardinals\' young bullpen allows a late insurance run.',
      },
    ],
    projectedScore: {
      teamA: 5,
      teamB: 3,
      rationale:
        'Senga\'s elite stuff (ghost fork, 98+ mph fastball) after a dominant spring gives the Mets a significant pitching advantage. Lindor\'s .462 career line vs Pallante and Soto\'s discipline create early damage. The Cardinals\' youth keeps it interesting — Gorman or Herrera delivers a solo shot — but the bullpen gap (Williams vs closer-by-committee) and Pallante\'s career 5.32 ERA vs the Mets prove decisive.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Kodai Senga',
      stats: 'SP | 2025: 7-6, 3.02 ERA, 1.31 WHIP, 109 K',
      meta: 'Throws R | Ghost Fork Pioneer',
      bio: 'Senga is making his <strong>2026 season debut</strong> after an elite spring — 11 K, 1 BB, 1.86 ERA in 9.2 IP with his fastball back to 98.9 mph. His ghost fork remains one of baseball\'s unhittable pitches: <strong>.210 xwOBA, 41.8% whiff rate</strong> in 2025. He started 2025 with a 1.47 ERA over 13 starts before a hamstring derailed him. Healthy Senga against a young, K-prone Cardinals lineup is a mismatch on paper. The fork will feast on lefties Gorman, Scott, and Church.',
    },
    {
      team: 'a',
      name: 'Francisco Lindor',
      stats: 'SS | 2025: .267/.346/.466, 31 HR, 31 SB',
      meta: 'Bats S | 30-30 Club',
      bio: 'Lindor is <strong>6-for-13 (.462) career vs Andre Pallante</strong> — the most important matchup advantage in this game. As a switch-hitter, Lindor attacks from both sides and can run (31 SB in 2025). He\'s one of seven 30-30 players in MLB last year. If Lindor sets the table in the 1st inning, Soto and Bichette follow. Pallante\'s sinker-heavy approach plays directly into Lindor\'s ability to drive pitches on the inner half.',
    },
    {
      team: 'a',
      name: 'Juan Soto',
      stats: 'LF | 2025: .263/.396/.525, 43 HR, 127 BB',
      meta: 'Bats L | $765M Man',
      bio: 'Soto\'s <strong>.396 OBP and 127 walks</strong> in 2025 were both NL-leading and franchise records. His plate discipline is a nightmare for Pallante, who has walked 180 batters in 460 career innings. Soto will take borderline pitches, run deep counts, and punish any fastball left over the plate. He also stole 38 bases — a career high — making him a dual threat. His 43 homers were the 3rd-most in Mets history.',
    },
    {
      team: 'a',
      name: 'Devin Williams',
      stats: 'CL | Game 1: 1.0 IP, 0 H, 1 K, SV',
      meta: 'Throws R | New Mets Closer',
      bio: 'Williams converted a <strong>1-2-3 ninth inning</strong> in Game 1 for his first Mets save after signing a 3-year, $51M deal. His changeup — the "Airbender" — is one of the most devastating pitches in baseball. Against a Cardinals lineup loaded with lefties, Williams\' righty-on-lefty splits make him the perfect closer. If the Mets have a lead in the 9th, this game is over.',
    },
    {
      team: 'b',
      name: 'Andre Pallante',
      stats: 'SP | 2025: 6-15, 5.31 ERA, 1.44 WHIP',
      meta: 'Throws R | Arsenal Overhaul',
      bio: 'Pallante is trying to prove his <strong>disastrous 2025</strong> — 49th in ERA among 52 qualifiers — was an aberration. He developed a "kick-change" this offseason and is throwing his curveball for more strikes. His slider was his best pitch in 2025 (<strong>.206 BAA, 33.8% whiff rate</strong>), but his fastball was hammered (.312 BAA). His career line vs the Mets is ugly: <strong>0-2, 5.32 ERA in 10 appearances</strong>. This is a prove-it start.',
    },
    {
      team: 'b',
      name: 'JJ Wetherholt',
      stats: '2B | MiLB 2025: .306, 17 HR, 23 SB',
      meta: 'Bats L | Top 5 MLB Prospect',
      bio: 'The <strong>No. 5 overall prospect in baseball</strong> is electric. Wetherholt homered in his MLB debut on March 26 and delivered a <strong>walk-off single in the 10th inning</strong> of his second game. At Double-A and Triple-A in 2025, he hit .306 with 17 HR and 23 SB, winning both the Texas League MVP and International League Top Prospect awards. He bats leadoff from the left side — a tough matchup against Senga\'s ghost fork, but Wetherholt\'s advanced approach and .416 career MiLB OBP suggest he won\'t chase.',
    },
    {
      team: 'b',
      name: 'Ivan Herrera',
      stats: 'DH | 2025: .284/.373/.464, 19 HR, 66 RBI',
      meta: 'Bats R | Cardinals\' Best Bat',
      bio: 'Herrera was the Cardinals\' best hitter in 2025 — first Cardinal catcher ever to hit 3 HR in a game (April 2 vs Angels). He <strong>torched lefties: .330 AVG, 1.115 OPS, 9 HR vs LHP</strong>. As the DH tonight, he can focus entirely on hitting. Against Senga, Herrera\'s right-handed bat avoids the worst of the ghost fork\'s break. He\'s the one Cardinal who can match the Mets\' star power at the plate.',
    },
    {
      team: 'b',
      name: 'Victor Scott II',
      stats: 'CF | 2025: .216, 34 SB, 30.2 ft/sec sprint',
      meta: 'Bats L | 2nd-Fastest in MLB',
      bio: 'Scott is the <strong>second-fastest player in MLB</strong> (30.2 ft/sec, trailing only Bobby Witt Jr.) with an 88.6% career stolen base success rate. His 34 SB in 2025 were the most by a Cardinal since 2003. The bat is limited (.216 AVG), but Scott doesn\'t need to hit to impact the game — <strong>a single becomes a double, a walk becomes a run</strong>. Senga\'s pickoff move is average, and Alvarez\'s arm behind the plate won\'t scare Scott. If he reaches base, he runs.',
    },
  ],
  trends: [
    {
      title: 'Hard Contact & Power',
      bullets: [
        '<strong>Juan Soto</strong> led the Mets with 43 HR and a .525 SLG in 2025. His elite exit velocity and barrel rate make him dangerous even in Busch Stadium\'s HR-suppressing dimensions (91 park factor).',
        '<strong>Nolan Gorman</strong> launched a 419-foot solo HR in Game 1 — his power is real (.400 SLG despite a .205 AVG in 2025), but it comes with extreme swing-and-miss. Against Senga\'s ghost fork, he\'ll either connect or whiff badly.',
        '<strong>Ivan Herrera</strong> hit .330 with a <strong>1.115 OPS vs left-handed pitching</strong> in 2025. As a right-handed DH, he avoids the worst of Senga\'s ghost fork break and has the best contact quality on the Cardinals.',
        '<strong>Pallante\'s fastball</strong> was hit at a .312 BAA with a .514 SLG in 2025 — barrel rate jumped from 2.1% to 5.8%. Mets hitters who sit fastball can do serious damage.',
        'Tonight\'s <strong>86°F temperature</strong> with SW wind at 15-25 mph partially offsets Busch\'s deep power alleys (375 ft). Fly balls to right field could carry for left-handed pull hitters like Soto and Gorman.',
      ],
    },
    {
      title: 'Stolen Base Potential',
      bullets: [
        '<strong>Victor Scott II</strong> is the fastest player in this game — <strong>30.2 ft/sec sprint speed (2nd in MLB)</strong>, 34 SB in 2025, 88.6% career success rate. He clocked 31.6 ft/sec on an infield single off Paul Skenes — fastest sprint by a Cardinal since Statcast began tracking.',
        'Senga does <strong>not have a strong pickoff move</strong>. If Scott reaches base, he will run. Francisco Alvarez behind the plate has average arm strength and pop time after missing time in 2025 with hamate and thumb injuries.',
        '<strong>Francisco Lindor</strong> stole 31 bases in 2025 (30-30 club). He\'ll test Pallante, whose sinker-heavy approach and slower delivery to the plate create stolen base opportunities.',
        '<strong>Juan Soto</strong> stole a career-high 38 bases in 2025 — an underrated aspect of his game. He picks his spots but won\'t hesitate if Pallante is slow to the plate.',
      ],
    },
    {
      title: 'Strikeout Projections',
      bullets: [
        '<strong>Senga</strong> struck out 11 in 9.2 spring innings with a 41.8% whiff rate on his ghost fork. Against 5 lefties in the Cardinals lineup (Wetherholt, Burleson, Gorman, Church, Scott), project <strong>5-7 K over 5-6 innings</strong>.',
        '<strong>Pallante</strong> had MLB\'s 4th-lowest K rate in 2025 (15.5% — bottom 4th percentile). Even against the Mets\' free-swinging bottom of the order, project only <strong>3-5 K over 5-6 innings</strong>.',
        '<strong>Cardinals most vulnerable to K:</strong> Gorman (35%+ K rate), Walker (.215 AVG, high chase rate), Scott (.216 AVG) — all lefties who will see Senga\'s ghost fork repeatedly.',
        '<strong>Mets hardest to K:</strong> Bo Bichette (.311 hitter, contact-first approach) and Lindor (switch-hitting veteran) rarely chase. Soto\'s 127 walks show he controls the at-bat, not the pitcher.',
      ],
    },
    {
      title: 'Other Notable Trends',
      bullets: [
        '<strong>Lindor is 6-for-13 (.462) career vs Pallante</strong> — the most lopsided hitter-pitcher matchup in this game. Pallante\'s sinker sits in Lindor\'s power zone.',
        '<strong>Pallante\'s career line vs the Mets:</strong> 0-2, 5.32 ERA in 10 appearances (23.2 IP, 30 H, 14 ER). He has been hit consistently harder by this lineup than any other team.',
        'The <strong>Cardinals\' bullpen ERA through 2 games is 11.25</strong> (28th in MLB) — an early-season small sample, but it reflects the loss of Helsley and the growing pains of a closer-by-committee approach. The Mets\' bullpen with Williams closing is a major late-game edge.',
        '<strong>Wetherholt\'s MLB debut</strong>: 3-for-8 with a HR and a walk-off single through 2 games. His .416 career MiLB OBP suggests he won\'t chase Senga\'s ghost fork — but this is his first test against an elite MLB arsenal.',
        'Senga faced the Cardinals in spring training on March 7 and allowed 2 solo HR in 2.2 IP. He\'s seen this lineup recently — expect adjustments in sequencing.',
      ],
    },
  ],
  sources: [
    {
      heading: 'New York Mets Sources',
      links: [
        { label: 'Mets 2026 Opening Day Roster — MLB.com', url: 'https://www.mlb.com/news/mets-2026-opening-day-roster' },
        { label: 'Senga Healthy After Dominant Spring — MLB.com', url: 'https://www.mlb.com/mets/news/healthy-kodai-senga-looks-to-capitalize-on-great-spring-in-2026-mets-debut' },
        { label: 'Senga Ghost Fork Analysis — Amazin\' Avenue', url: 'https://www.amazinavenue.com/2025/4/2/24399395/mets-kodai-senga-forkball-ghost-statcast-pitch-mix-new-york' },
        { label: 'Kodai Senga Statcast — Baseball Savant', url: 'https://baseballsavant.mlb.com/savant-player/kodai-senga-673540' },
        { label: 'Mets Depth Chart — FanGraphs', url: 'https://www.fangraphs.com/roster-resource/depth-charts/mets' },
        { label: 'Mets Projected Lineup — RotoChamp', url: 'https://www.rotochamp.com/baseball/TeamPage.aspx?TeamID=NYM' },
        { label: 'Devin Williams Preview — Amazin\' Avenue', url: 'https://www.amazinavenue.com/new-york-mets-roster/91919/mets-devin-williams-2026-season-preview-pitcher-closer-reliever-bullpen-new-york' },
        { label: 'Mets Injuries — CBS Sports', url: 'https://www.cbssports.com/mlb/teams/NYM/new-york-mets/injuries/' },
        { label: 'Mets-Cardinals Box Score 3/30 — ESPN', url: 'https://www.espn.com/mlb/boxscore/_/gameId/401814744' },
        { label: 'Mets-Cardinals Watch Info — SNY', url: 'https://sny.tv/articles/mets-cardinals-watch-sny-3-31-26' },
      ],
    },
    {
      heading: 'St. Louis Cardinals Sources',
      links: [
        { label: 'Cardinals 2026 Opening Day Roster — MLB.com', url: 'https://www.mlb.com/news/cardinals-projected-2026-opening-day-roster' },
        { label: 'Pallante Reinvention Story — St. Louis Post-Dispatch', url: 'https://www.stltoday.com/sports/professional/mlb/cardinals/article_b6592e82-07d8-462c-81d4-f4d1103c7161.html' },
        { label: 'What Went Wrong with Pallante — Redbird Rants', url: 'https://redbirdrants.com/what-went-wrong-for-cardinals-starter-andre-pallante-in-2025-and-how-can-he-fix-it' },
        { label: 'Pallante Statcast — Baseball Savant', url: 'https://baseballsavant.mlb.com/savant-player/andre-pallante-669467' },
        { label: 'JJ Wetherholt MLB Debut — ESPN', url: 'https://www.espn.com/mlb/story/_/id/48290578/top-cardinals-prospect-jj-wetherholt-makes-opening-day-roster' },
        { label: 'Cardinals Depth Chart — FanGraphs', url: 'https://www.fangraphs.com/roster-resource/depth-charts/cardinals' },
        { label: 'Cardinals Projected Lineup — RotoChamp', url: 'https://www.rotochamp.com/baseball/TeamPage.aspx?TeamID=STL' },
        { label: 'Cardinals Bullpen Analysis — Viva El Birdos', url: 'https://www.vivaelbirdos.com/st-louis-cardinals-analysis/68386/comparing-the-cardinals-will-the-bullpen-provide-any-relief-in-st-louis' },
        { label: 'Ivan Herrera 2026 Outlook — MLB.com', url: 'https://www.mlb.com/cardinals/news/ivan-herrera-could-reach-his-potential-in-2026' },
        { label: 'Cardinals Injuries — CBS Sports', url: 'https://www.cbssports.com/mlb/teams/STL/st-louis-cardinals/injuries/' },
        { label: 'Cardinals Lineup Breakdown — Last Word on Sports', url: 'https://lastwordonsports.com/baseball/2026/03/24/breaking-down-cardinals-lineup/' },
        { label: 'Busch Stadium Park Factors — Baseball Savant', url: 'https://baseballsavant.mlb.com/leaderboard/statcast-park-factors' },
      ],
    },
  ],
  footerText: 'Mets at Cardinals — March 31, 2026 — Busch Stadium, St. Louis',
}

export default game
