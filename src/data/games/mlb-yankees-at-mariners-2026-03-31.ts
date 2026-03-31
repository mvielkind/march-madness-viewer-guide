import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'mlb-yankees-at-mariners-2026-03-31',
  title: 'Yankees at Mariners',
  eventTag: 'MLB',
  date: 'Tuesday, March 31, 2026 • 9:40 PM ET',
  round: 'Regular Season',
  tipTime: '2026-03-31T21:40',
  venue: 'T-Mobile Park, Seattle, WA • TBS',
  extraInfo: 'Game 2 of 3 — Mariners lead series 1-0 after Raleigh walk-off (SEA 2, NYY 1 on 3/30)',
  teams: [
    {
      name: 'New York Yankees',
      mascot: 'Yankees',
      seed: '',
      record: '3-1',
      colors: { primary: '#003087', secondary: '#E4002C', name: 'yankees' },
      className: 'yankees',
    },
    {
      name: 'Seattle Mariners',
      mascot: 'Mariners',
      seed: '',
      record: '3-2',
      colors: { primary: '#0C2C56', secondary: '#005C5C', name: 'mariners' },
      className: 'mariners',
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
      'Max Fried brings his <strong>elite 6-pitch arsenal</strong> to T-Mobile Park after a historic Opening Day gem (6.1 scoreless IP vs SF). He carries a <strong>career 1.59 ERA against Seattle</strong> in three starts. Logan Gilbert counters with MLB\'s best K/9 rate (11.9 in 2025) and a devastating splitter (.119 opponent BA), but enters with a troubling <strong>6.57 career ERA vs the Yankees</strong> in seven starts. After Cal Raleigh walked off Game 1 with an RBI single, the Mariners have momentum — but the Yankees\' lineup, headlined by reigning MVP Aaron Judge (.331, 53 HR), is baseball\'s most potent offense.',
    cards: [
      {
        label: 'Fried\'s Dominance of Seattle',
        value:
          'Career <strong>1.59 ERA vs Mariners</strong> in 3 starts with 18 K. His Opening Day line: 6.1 IP, 2 H, 0 ER, 4 K. His sinker generates a <strong>69% ground-ball rate</strong> and his cutter-four-seam separation produced a .262-.265 SLG against in 2025.',
      },
      {
        label: 'Gilbert\'s Splitter vs Yankees Power',
        value:
          'Gilbert\'s splitter had a <strong>.119 opponent BA and 50.4% whiff rate</strong> in 2025 — but he has a <strong>6.57 career ERA vs NYY</strong> in 7 starts. His 11.9 K/9 led MLB, yet the Yankees\' patience and power have historically solved him.',
      },
      {
        label: 'Judge\'s MVP Standard',
        value:
          'Aaron Judge won his 3rd MVP in 2025: <strong>.331/.426/.688, 53 HR, 114 RBI</strong>. He led MLB in AVG, OBP, SLG, and OPS. Against a righty like Gilbert at T-Mobile Park, his discipline and elite barrel rate make him the game\'s most decisive factor.',
      },
      {
        label: 'Raleigh\'s Record-Setting Power',
        value:
          'Cal Raleigh set the <strong>all-time switch-hitter HR record with 60</strong> in 2025 (.247/.359/.589). He walked off Game 1 and will bat right-handed vs the lefty Fried. His power plays even in T-Mobile Park\'s pitcher-friendly dimensions.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'MVP-Caliber Lineup, Deep Arsenal on the Mound, Power and Speed',
      bullets: [
        '<strong>Aaron Judge is the best hitter in baseball:</strong> .331/.426/.688 with 53 HR in 2025 — winning his 3rd MVP and first batting title. He led MLB in AVG, OBP, SLG, and OPS. Against a righty pitcher like Gilbert, Judge has full platoon advantage and the exit velocity to clear T-Mobile Park\'s deep power alleys.',
        '<strong>Fried\'s six-pitch arsenal is a nightmare for hitters:</strong> His four-seam (95.8 mph, .265 SLG), cutter (93.6 mph, .262 SLG), and sinker (69% GB rate) give him three distinct hard offerings. The curveball at 75.2 mph creates a 20+ mph speed differential. He posted a .222 opponent batting average and allowed only 14 HR in 195 innings in 2025.',
        '<strong>Power throughout the lineup:</strong> Grisham (34 HR), Judge (53), Bellinger (29), Stanton (24 in 77 games), and Chisholm (31) give the Yankees five 20+ HR hitters. The club led MLB with 274 HR and 849 runs in 2025. Even T-Mobile Park\'s run-suppressing dimensions (89 park factor) may not contain this group.',
        '<strong>Caballero and Chisholm bring elite speed:</strong> Jose Caballero led MLB with 49 SB in 2025. Jazz Chisholm joined the 30-30 club (31 HR, 31 SB). Together they create constant baserunning pressure that forces Gilbert to work from the stretch and shortens his delivery to the plate.',
        '<strong>Weakness — bottom of the order and rotation depth:</strong> McMahon (.208 with NYY in 2025), Wells (.209), and Caballero (.236) form a soft bottom third. With Cole, Rodon, Schmidt, and Volpe all injured, the roster is thinner than it looks beyond the star power at the top.',
      ],
    },
    {
      team: 'b',
      title: 'Strikeout Machine on the Mound, Power-Speed Blend, Elite Bullpen',
      bullets: [
        '<strong>Gilbert\'s K rate is elite:</strong> His 11.9 K/9 led all MLB pitchers with 100+ IP in 2025. His splitter (.119 opponent BA, 50.4% whiff rate) drops off the table with 4.1 more inches of total drop than 2024. Against the Yankees\' five left-handed bats, the slider-splitter combo at T-Mobile Park\'s strikeout-inflating dimensions (113 K park factor) could produce a dominant outing.',
        '<strong>Cal Raleigh is a franchise-altering catcher:</strong> 60 HR, 125 RBI, .589 SLG in 2025 — setting the all-time switch-hitter HR record. He was the AL MVP runner-up and walked off Game 1 of this series. Batting right-handed vs Fried, Raleigh is the one Mariner who can match the Yankees\' power.',
        '<strong>Julio Rodriguez is the complete center fielder:</strong> .267/.324/.474 with 32 HR and 30 SB in 2025 — a Gold Glove and Silver Slugger finalist. His power-speed combination and right-handed bat against the lefty Fried give him platoon advantage. He led CF with 6.8 bWAR.',
        '<strong>Munoz anchors a shutdown bullpen:</strong> Andres Munoz converted 38 of 40 saves (95%) with a 1.73 ERA and 1.03 WHIP in 2025. Behind him, Matt Brash (2.47 ERA) and Gabe Speier (2.61 ERA, 0.87 WHIP) form a dominant late-inning trio. If Gilbert keeps it close through 6, the bullpen can finish.',
        '<strong>Weakness — lineup depth and bottom-order production:</strong> Cole Young (.211 in 2025), Leo Rivas (placeholder for Crawford), and Luke Raley (.202) form a weak bottom third. With J.P. Crawford on the IL, the Mariners lack a reliable shortstop. The lineup is top-heavy — Raleigh, Rodriguez, and Donovan carry the offense.',
      ],
    },
  ],
  keys: [
    {
      title: 'Fried\'s career 1.59 ERA vs Seattle vs Gilbert\'s 6.57 ERA vs New York',
      description:
        'The pitching matchup splits dramatically by opponent history. Max Fried has been elite against Seattle — 1.59 ERA, 18 K in 3 career starts — while Logan Gilbert has been torched by the Yankees (6.57 ERA in 7 starts). Fried\'s sinker generates a 69% ground-ball rate, which is perfect for T-Mobile Park\'s spacious outfield. Gilbert needs to flip the script against a lineup that has historically solved him, leaning on his improved splitter that he didn\'t have in earlier meetings. If the career trends hold, the Yankees have a significant pitching edge.',
    },
    {
      title: 'Gilbert\'s splitter targeting five left-handed Yankee bats',
      description:
        'The Yankees stack five lefties — Grisham, Bellinger, Chisholm, McMahon, and Wells — in tonight\'s lineup. Gilbert\'s splitter had a .119 opponent BA and 50.4% whiff rate in 2025, with 4.1 more inches of total drop than 2024. Combined with his slider (35.3% career-high usage), Gilbert has the secondary stuff to neutralize left-handed hitters. At T-Mobile Park (113 strikeout park factor), this is the recipe for a high-K outing. The key: can Grisham and Bellinger lay off the splitter below the zone, or will they chase like most of baseball did in 2025?',
    },
    {
      title: 'Judge\'s patience vs Gilbert\'s command wobbles',
      description:
        'Aaron Judge drew 127 walks and posted a .426 OBP in his MVP 2025 season. Gilbert walked 31 in 131 IP last year (solid), but showed shaky command in spring 2026 (5 BB in 14.1 IP) and walked batters in his Opening Day start. Judge does not chase — he makes pitchers come to him. If Gilbert catches too much of the plate, Judge\'s elite barrel rate and exit velocity will punish. If Gilbert nibbles, Judge walks and the Yankees\' middle-of-the-order power (Bellinger, Stanton) cleans up.',
    },
    {
      title: 'Caballero and Chisholm\'s speed disrupts Gilbert\'s rhythm',
      description:
        'Jose Caballero (49 SB, 82% success rate) and Jazz Chisholm (31 SB) give the Yankees two elite base stealers. Gilbert\'s splitter delivery may be slow to home plate, and Cal Raleigh — despite his strong arm — threw out base stealers at a league-average clip. In a pitcher\'s park where runs are scarce, manufacturing runs via stolen bases and pressure on the basepaths could be the Yankees\' path to scoring. A single plus a stolen base becomes a run-scoring opportunity without needing a homer.',
    },
    {
      title: 'Bullpen battle: Bednar vs Munoz in a tight finish',
      description:
        'Both closers are elite. David Bednar converted 27 saves with a 2.30 ERA and 36% K rate in 2025. Andres Munoz converted 38 saves at a 95% rate with a 1.73 ERA. If this game reaches the 9th inning within a run — which T-Mobile Park\'s pitcher-friendly conditions suggest it will — the closer matchup becomes decisive. Munoz throws 100+ mph; Bednar has a devastating curveball. Behind them, the Mariners\' setup corps (Brash, Speier) has a slight edge over the Yankees\' Doval/Cruz combo. The team that hands the ball to its closer with a lead wins.',
    },
  ],
  prediction: {
    summary:
      '<p>Max Fried\'s career dominance of Seattle (1.59 ERA) and his Opening Day masterpiece (6.1 scoreless IP) give the Yankees a clear pitching advantage. Logan Gilbert\'s 6.57 career ERA against New York is a red flag, even with his elite splitter. Judge, Stanton, and Bellinger have the kind of power that has historically solved Gilbert, and the right-handed bats (Judge, Stanton, Arozarena) negate any platoon edge Gilbert might have against the five lefties in the lineup.</p><p>T-Mobile Park\'s pitcher-friendly dimensions (89 run park factor) and cool evening air will keep this tight. Raleigh\'s power and Munoz\'s arm keep the Mariners in every game, but Fried\'s deep arsenal — six pitches, three distinct hard offerings, a devastating curveball — gives him the edge in a low-scoring affair. The Yankees bounce back after Game 1\'s walk-off loss.</p>',
    phases: [
      {
        title: 'Early Innings (1-3)',
        description:
          'Fried attacks with his sinker-cutter combo, inducing ground balls from Donovan and Rodriguez. Gilbert\'s splitter strikes out Grisham and McMahon, but Judge works a walk and Stanton drives an RBI double into the gap. Yankees lead 1-0 after a tight, well-pitched opening.',
      },
      {
        title: 'Middle Innings (4-6)',
        description:
          'Gilbert settles in with his slider-splitter sequence but Bellinger lines a solo homer off a hanging slider in the 4th. Raleigh answers with a solo shot off Fried in the 5th, pulling it down the right-field line. Gilbert\'s pitch count climbs as Judge and Stanton work deep counts. Yankees lead 2-1 heading to the 7th.',
      },
      {
        title: 'Late Innings (7-8)',
        description:
          'Fried exits after 6.2 strong innings (2 H, 1 ER, 6 K). Caballero steals second and scores on a Grisham single to make it 3-1. Matt Brash and Gabe Speier stabilize for Seattle. Rodriguez doubles off Doval but is stranded at third when Raleigh grounds out.',
      },
      {
        title: '9th Inning',
        description:
          'Bednar enters to close. He strikes out the first batter, but Donovan singles. Julio Rodriguez flies out deep to center. Raleigh steps in as the tying run — but Bednar\'s curveball freezes him for the final out. Yankees win 3-2 and even the series.',
      },
    ],
    projectedScore: {
      teamA: 3,
      teamB: 2,
      rationale:
        'Fried\'s career 1.59 ERA vs Seattle and elite arsenal give the Yankees the pitching edge. Gilbert\'s 6.57 career ERA against New York, despite his improved splitter, suggests the Yankees\' patient, powerful lineup will find gaps. T-Mobile Park keeps it tight — Raleigh\'s power ensures the Mariners threaten — but Fried\'s ground-ball approach and Bednar\'s closing ability edge a low-scoring game. The Yankees even the series at 1-1.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Max Fried',
      stats: 'SP | 2025: 19-5, 2.86 ERA, 1.10 WHIP, 189 K',
      meta: 'Throws L | 6-Pitch Arsenal',
      bio: 'Fried was the <strong>AL\'s winningest pitcher</strong> in 2025, going 19-5 with a 2.86 ERA and 189 strikeouts. His Opening Day gem (6.1 scoreless IP, 2 H, 4 K vs SF) showed he\'s already in midseason form. Against Seattle specifically, Fried owns a <strong>career 1.59 ERA with 18 K in 3 starts</strong>. His arsenal is the deepest in baseball: a 95.8 mph four-seam, a 93.6 mph cutter (.262 SLG against), a sinker with a <strong>69% ground-ball rate</strong>, and a curveball with 20+ mph of speed separation. At T-Mobile Park, where ground balls die and fly balls stay in the yard, Fried\'s profile is perfectly suited.',
    },
    {
      team: 'a',
      name: 'Aaron Judge',
      stats: 'RF | 2025: .331/.426/.688, 53 HR, 114 RBI',
      meta: 'Bats R | 3x MVP',
      bio: 'Judge won his <strong>3rd MVP and first batting title</strong> in 2025, leading MLB in AVG, OBP, SLG, and OPS. His 53 home runs and .688 SLG were the best in baseball. As a right-handed hitter facing Gilbert, Judge avoids the worst of the splitter\'s arm-side run. Gilbert\'s <strong>6.57 career ERA vs the Yankees</strong> suggests he has no reliable answer for this lineup — and Judge is the primary reason why. Even at T-Mobile Park (89 run park factor), Judge\'s elite exit velocity and barrel rate make him a constant home run threat.',
    },
    {
      team: 'a',
      name: 'Giancarlo Stanton',
      stats: 'DH | 2025: .273/.350/.594, 24 HR in 77 games',
      meta: 'Bats R | Power on Power',
      bio: 'Stanton returned from an elbow injury in June 2025 and absolutely raked: <strong>.299/.380/.949 OPS with 12 HR in 43 games</strong> after his debut. His .594 SLG in limited action showed he\'s still one of baseball\'s most feared power hitters when healthy. As the DH, he can focus entirely on hitting. Against Gilbert\'s 95.5 mph fastball, Stanton\'s history of crushing premium velocity makes him a mid-game HR threat. T-Mobile Park\'s deep alleys don\'t matter when the exit velocity is 115+ mph.',
    },
    {
      team: 'a',
      name: 'Jose Caballero',
      stats: 'SS | 2025: .236/.339/.347, 49 SB (led MLB)',
      meta: 'Bats R | Elite Speed',
      bio: 'Caballero <strong>led all of MLB with 49 stolen bases</strong> in 2025, going 49-for-60 (82% success rate). In a pitcher\'s park where manufacturing runs matters, his speed is a weapon. Against Gilbert, whose splitter delivery may be slow to the plate, Caballero could turn a walk or single into scoring position without a hit. He\'s filling in at shortstop for the injured Anthony Volpe and provides defensive versatility. His bat is light (.236 AVG), but his legs change games.',
    },
    {
      team: 'b',
      name: 'Logan Gilbert',
      stats: 'SP | 2025: 6-6, 3.44 ERA, 1.03 WHIP, 173 K',
      meta: 'Throws R | MLB K/9 Leader',
      bio: 'Gilbert led MLB with an <strong>11.9 K/9 rate</strong> among pitchers with 100+ IP in 2025, powered by a splitter that held opponents to a <strong>.119 batting average with a 50.4% whiff rate</strong>. He added 4.1 inches of additional drop to the pitch compared to 2024, making it nearly unhittable. But his <strong>6.57 career ERA vs the Yankees in 7 starts</strong> is a glaring weakness. His Opening Day start (5.1 IP, 3 ER, 7 K) showed both the K upside and the occasional big inning. This is the matchup where he proves the past is behind him — or confirms the Yankees\' lineup is his kryptonite.',
    },
    {
      team: 'b',
      name: 'Cal Raleigh',
      stats: 'C | 2025: .247/.359/.589, 60 HR, 125 RBI',
      meta: 'Bats S | Record-Setting Power',
      bio: 'Raleigh set the <strong>all-time single-season HR record for switch-hitters and catchers with 60</strong> in 2025, driving in 125 runs with a .589 SLG. He was the <strong>AL MVP runner-up</strong> and walked off Game 1 of this series with an RBI single. Batting right-handed against the lefty Fried, Raleigh has the platoon advantage. Fried\'s sinker (69% GB rate) is designed to keep Raleigh on the ground, but when Raleigh gets a pitch up — especially a curveball that hangs — it leaves the park. He is the single most dangerous at-bat Fried will face tonight.',
    },
    {
      team: 'b',
      name: 'Julio Rodriguez',
      stats: 'CF | 2025: .267/.324/.474, 32 HR, 30 SB',
      meta: 'Bats R | Elite Five-Tool',
      bio: 'J-Rod posted a <strong>32 HR, 30 SB season</strong> in 2025 while leading center fielders with 6.8 bWAR. He was a Gold Glove and Silver Slugger finalist. His right-handed bat gives him the platoon advantage against Fried, and his 30 stolen bases make him a dual threat. Rodriguez\'s power-speed combination — combined with his ability to impact the game defensively in T-Mobile Park\'s spacious center field — makes him the Mariners\' most complete player. If he reaches base against Fried, his speed pressures the entire infield.',
    },
    {
      team: 'b',
      name: 'Andres Munoz',
      stats: 'CL | 2025: 1.73 ERA, 38 SV (95%), 83 K, 1.03 WHIP',
      meta: 'Throws R | 100+ mph Closer',
      bio: 'Munoz was <strong>baseball\'s most reliable closer</strong> in 2025, converting 38 of 40 save opportunities (95%) with a 1.73 ERA. His fastball sits 100+ mph, making him nearly unhittable in the 9th inning. The Mariners exercised his $6M option for 2026, and his dominance gives Seattle a guaranteed shutdown inning if they have a lead. In a projected low-scoring game at T-Mobile Park, the team that hands the ball to its closer with a lead wins — and Munoz\'s arm ensures the Mariners are never out of it.',
    },
  ],
  trends: [
    {
      title: 'Hard Contact & Power',
      bullets: [
        '<strong>Aaron Judge</strong> posted a .688 SLG and 53 HR in 2025 — the highest slugging percentage in MLB. His 95th-percentile exit velocity and barrel rate mean he can clear T-Mobile Park\'s deep alleys even in cool March air.',
        '<strong>Cal Raleigh</strong> set the all-time record for switch-hitter home runs with <strong>60</strong> in 2025 and launched his way to a .589 SLG. He walked off Game 1 and enters this game with momentum and confidence against the lefty Fried.',
        '<strong>Giancarlo Stanton</strong> posted a .594 SLG and .949 OPS after returning from injury in June 2025. He had 24 HR in just 77 games — a 50+ HR pace over a full season. His raw power is the best bet to clear center field at T-Mobile Park.',
        '<strong>T-Mobile Park\'s run factor is 89</strong> — suppressing offense by 11%. However, the Yankees hit 274 HR as a team in 2025 (most in MLB) and Raleigh alone hit 60 for the Mariners. Elite power can overcome any park.',
        '<strong>Trent Grisham</strong> hit 34 HR from the left side in 2025, with 19 of them tying or giving the Yankees the lead. His breakout power makes the top of the Yankees lineup especially dangerous.',
      ],
    },
    {
      title: 'Stolen Base Potential',
      bullets: [
        '<strong>Jose Caballero</strong> led MLB with 49 stolen bases in 2025 (82% success rate). Against Gilbert\'s splitter-heavy delivery, which may be slow to the plate, Caballero is the most likely player in this game to steal a base.',
        '<strong>Jazz Chisholm Jr.</strong> joined the <strong>30-30 club</strong> in 2025 (31 HR, 31 SB). From the left side against Gilbert, he\'ll look to run early and create pressure.',
        '<strong>Julio Rodriguez</strong> stole 30 bases in 2025. Against the lefty Fried, whose pickoff move keeps runners close, Rodriguez will be selective — but any lapse in attention creates an opportunity.',
        '<strong>Cal Raleigh</strong> behind the plate threw out base stealers at a league-average clip in 2025. <strong>Austin Wells</strong> for the Yankees is below-average defensively. Both catching matchups create stolen base openings.',
      ],
    },
    {
      title: 'Strikeout Projections',
      bullets: [
        '<strong>Logan Gilbert</strong> led MLB in K/9 (11.9) in 2025. His splitter\'s <strong>50.4% whiff rate</strong> targets the Yankees\' five left-handed bats (Grisham, Bellinger, Chisholm, McMahon, Wells). Project <strong>6-8 K in 5-6 IP</strong>.',
        '<strong>Max Fried</strong> struck out 189 in 195.1 IP (8.71 K/9) in 2025. The Mariners\' bottom of the order — Raley (.202), Young (.211), Rivas (.244) — are swing-and-miss prone. Project <strong>5-7 K in 6-7 IP</strong>.',
        '<strong>T-Mobile Park has MLB\'s highest strikeout park factor at 113</strong> — inflating K rates by 13% compared to league average. Both starters\' K numbers should be boosted by the venue.',
        'The most K-vulnerable Yankees are <strong>McMahon</strong> (league-leading 127 K in 100 games in 2025) and <strong>Wells</strong> (.209 AVG with declining plate discipline). Gilbert\'s splitter will target both aggressively.',
      ],
    },
    {
      title: 'Other Notable Trends',
      bullets: [
        '<strong>Gilbert\'s career 6.57 ERA vs NYY</strong> in 7 starts is his worst against any AL opponent. The Yankees have historically squared him up — but his 2025 splitter transformation could change the equation.',
        '<strong>Fried\'s career 1.59 ERA vs SEA</strong> in 3 starts shows dominant history against this franchise. He throws 7 different pitches and induced a .222 opponent batting average in 2025.',
        '<strong>Brendan Donovan</strong> batted .429 with 2 HR in the opening series vs Cleveland. His <strong>13% K rate</strong> (best on the Mariners) makes him a tough out at the top of the order against Fried\'s secondary stuff.',
        'The <strong>Yankees went 5-1 vs Seattle in 2025</strong> and are 13-6 against the Mariners over the last 3 seasons. The AL East powerhouse has dominated this matchup recently.',
        '<strong>Cole Young</strong> had a breakout spring (1.016 OPS, 6 HR) after a rough 2025 rookie season (.211). If his spring momentum carries into the regular season, it deepens Seattle\'s lineup significantly.',
      ],
    },
  ],
  sources: [
    {
      heading: 'New York Yankees Sources',
      links: [
        { label: 'Yankees 2026 Opening Day Roster — MLB.com', url: 'https://www.mlb.com/news/yankees-2026-opening-day-roster' },
        { label: 'Max Fried Named 2026 Opening Day Starter — MLB.com', url: 'https://www.mlb.com/news/max-fried-named-yankees-2026-opening-day-starter' },
        { label: 'Max Fried Statcast — Baseball Savant', url: 'https://baseballsavant.mlb.com/savant-player/max-fried-608331' },
        { label: 'Max Fried Stats — FanGraphs', url: 'https://www.fangraphs.com/players/max-fried/13743/stats/pitching' },
        { label: 'Max Fried Stats — Baseball Reference', url: 'https://www.baseball-reference.com/players/f/friedma01.shtml' },
        { label: 'Aaron Judge Stats — Baseball Reference', url: 'https://www.baseball-reference.com/players/j/judgeaa01.shtml' },
        { label: 'Yankees Depth Chart — FanGraphs', url: 'https://www.fangraphs.com/roster-resource/depth-charts/yankees' },
        { label: 'Yankees Bullpen Trades (Bednar, Doval) — CBS Sports', url: 'https://www.cbssports.com/mlb/news/yankees-revamp-bullpen-with-trades-for-pirates-david-bednar-giants-camilo-doval-rockies-jake-bird/' },
        { label: 'Yankees Series Preview — Pinstripe Alley', url: 'https://www.pinstripealley.com/yankees-game-information/181323/mlb-yankees-series-preview-mariners-start-times-how-to-watch-pitching-matchups-fried-schlittler-weathers' },
        { label: 'Fried Opening Day Dominance — Pinstripe Alley', url: 'https://www.pinstripealley.com/yankees-analysis-sabermetrics/181013/yankees-max-fried-dominant-outing-opening-day-stuff-command-fastball-curveball' },
      ],
    },
    {
      heading: 'Seattle Mariners Sources',
      links: [
        { label: 'Mariners 2026 Opening Day Roster — MLB.com', url: 'https://www.mlb.com/news/mariners-2026-opening-day-roster' },
        { label: 'Logan Gilbert Named Opening Day Starter — MLB.com', url: 'https://www.mlb.com/news/logan-gilbert-named-mariners-2026-opening-day-starter' },
        { label: 'Logan Gilbert Statcast — Baseball Savant', url: 'https://baseballsavant.mlb.com/savant-player/logan-gilbert-669302' },
        { label: 'Logan Gilbert Stats — FanGraphs', url: 'https://www.fangraphs.com/players/logan-gilbert/22250/stats/pitching' },
        { label: 'Logan Gilbert Stats — Baseball Reference', url: 'https://www.baseball-reference.com/players/g/gilbelo01.shtml' },
        { label: 'Mariners Roster Analysis — Lookout Landing', url: 'https://www.lookoutlanding.com/seattle-mariners-roster/140729/the-seattle-mariners-announce-their-2026-opening-day-roster' },
        { label: 'Munoz Career Year Projection — SI', url: 'https://www.si.com/mlb/mariners/onsi/news/mariners-closer-andres-munoz-career-year-2026' },
        { label: 'Mariners Bullpen Trio — Just Baseball', url: 'https://www.justbaseball.com/mlb/mariners-bullpen-trio-munoz-brash-ferrer/' },
        { label: 'T-Mobile Park Factors — Baseball Savant', url: 'https://baseballsavant.mlb.com/leaderboard/statcast-venue?venueId=680' },
        { label: 'Gilbert Arsenal Evolution — SI', url: 'https://www.si.com/mlb/mariners/onsi/news/logan-gilbert-s-evolving-arsenal-could-elevate-mariners-in-a-huge-way' },
        { label: 'Mariners Game 1 Walk-Off — ESPN', url: 'https://www.espn.com/mlb/game/_/gameId/401814748/yankees-mariners' },
        { label: 'Donovan Impact on Mariners Roster — MLB.com', url: 'https://www.mlb.com/mariners/news/brendan-donovan-impact-on-mariners-roster' },
      ],
    },
  ],
  footerText: 'Yankees at Mariners — March 31, 2026 — T-Mobile Park, Seattle',
}

export default game
