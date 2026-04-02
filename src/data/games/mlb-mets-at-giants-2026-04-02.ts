import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'mlb-mets-at-giants-2026-04-02',
  title: 'Mets at Giants',
  eventTag: 'MLB',
  date: 'Thursday, April 2, 2026 • 9:45 PM ET',
  round: 'Regular Season',
  tipTime: '2026-04-02T21:45',
  venue: 'Oracle Park, San Francisco, CA • SNY / NBCS Bay Area',
  extraInfo: 'Game 1 of 4 — First meeting of the season between these two clubs',
  teams: [
    {
      name: 'New York Mets',
      mascot: 'Mets',
      seed: '',
      record: '3-3',
      colors: { primary: '#002D72', secondary: '#FF5910', name: 'mets' },
      className: 'mets',
    },
    {
      name: 'San Francisco Giants',
      mascot: 'Giants',
      seed: '',
      record: '2-4',
      colors: { primary: '#FD5A1E', secondary: '#27251F', name: 'giants' },
      className: 'giants',
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
      'A rare <strong>lefty vs lefty pitching matchup</strong> at one of baseball\'s most extreme pitcher\'s parks. David Peterson brings his ground-ball-heavy approach to Oracle Park after tossing 5.1 scoreless innings in his season debut. Robbie Ray — the 2025 All-Star who posted a 3.65 ERA and 186 K — looks to build on a solid first start (5.1 IP, 2 ER, 0 BB) in front of a Giants team trying to shake off a historically bad 0-3 start. The Giants\' right-heavy lineup has a natural platoon advantage against both southpaws, while <strong>Juan Soto</strong> — who owns a .313 career average with 8 HR at Oracle Park — is the one lefty bat who can overcome the marine layer.',
    cards: [
      {
        label: 'Ray\'s All-Star Encore',
        value:
          '2025 All-Star: <strong>11-8, 3.65 ERA, 186 K in 182.1 IP</strong>. First 2026 start: 5.1 IP, 2 ER, 0 BB vs NYY. The zero walks are the key — his rising four-seamer and swing-and-miss changeup play up in Oracle Park\'s cold air.',
      },
      {
        label: 'Peterson\'s Scoreless Debut',
        value:
          '<strong>5.1 IP, 0 R, 6 H, 3 K, 2 BB</strong> vs Pittsburgh in his first start. His sinker-slider combo generated ground balls all night. But he collapsed (12.54 ERA in final 5 starts of 2025) — sustainability is the question.',
      },
      {
        label: 'Oracle Park Factor',
        value:
          'HR park factor of <strong>0.765 — 2nd-lowest in MLB</strong>. Dense marine air and cold night conditions suppress fly balls. This favors both ground-ball-oriented Peterson and contact-first approaches over raw power.',
      },
      {
        label: 'Platoon Edge: Giants',
        value:
          'The Giants stack <strong>6 right-handed bats</strong> (Chapman, Adames, Ramos, Bader, Encarnacion, Schmitt) against Peterson. The Mets counter with Soto and Baty from the left side — but Soto owns Oracle Park (.313 AVG, 8 HR in 25 games).',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Star-Driven Offense, Elite Bullpen, Plate Discipline',
      bullets: [
        '<strong>Juan Soto is the engine:</strong> .263/.396/.525 with 43 HR, 127 BB, and 38 SB in 2025. He led the NL in OBP and walks. His career numbers at Oracle Park are exceptional — <strong>.313 AVG, 8 HR in 25 games</strong> — proof that his elite exit velocity can beat the marine layer. Through 6 games in 2026, he\'s slashing .353/.450/.471 with his first HR coming April 1.',
        '<strong>Lindor-Bichette-Soto is a loaded top 3:</strong> Lindor\'s 30-30 season in 2025 (.267/.346/.466, 31 HR, 31 SB) makes him a dual threat from the leadoff spot. Bichette hit .311 with 94 RBI in Toronto and delivered 2 RBI in his Mets debut. This top of the order has the contact, power, and discipline to grind any starter.',
        '<strong>The bullpen is a weapon:</strong> Devin Williams\' "Airbender" changeup ($51M closer) converted his first Mets save in Game 1. Behind him: Luke Weaver (2yr/$22M), Brooks Raley (.103 BAA vs LHH in 2025), and Brazoban (3.57 ERA). If the Mets have a late lead, they won\'t give it back.',
        '<strong>Plate discipline creates runs without power:</strong> At Oracle Park, where HR are suppressed, the Mets\' ability to work counts matters. Soto\'s 127 walks in 2025 and Lindor\'s patient approach extend innings and wear down starters. Even in a low-scoring game, the Mets create baserunners.',
        '<strong>Weakness — the bottom of the order:</strong> Marcus Semien (.230 in 2025), Carson Benge (rookie), and Brett Baty are not proven MLB producers. Against Ray\'s power stuff, the 6-7-8 hitters could be automatic outs. The lineup is top-heavy.',
      ],
    },
    {
      team: 'b',
      title: 'Right-Handed Power, Contact-First Leadoff, New Identity Under Vitello',
      bullets: [
        '<strong>Platoon advantage is real:</strong> Against a lefty like Peterson, the Giants load up with right-handed bats — Chapman (.241/.351/.457, 21 HR in 2025), Adames ($182M deal, 30 HR in 2025), Ramos, Bader, Encarnacion, and Schmitt. This is a lineup built to punish left-handed pitching.',
        '<strong>Adames is heating up:</strong> After a brutal 2-for-15 start with 6 K, Adames erupted for a <strong>4-hit game</strong> with a leadoff HR against San Diego on April 1. His 30 HR in 2025 were the most by a Giant since Barry Bonds in 2004. If his timing has arrived, he\'s the most dangerous bat in this lineup.',
        '<strong>Arraez provides elite contact at the top:</strong> Luis Arraez is a 2x batting champion with a career .314 average. He rarely strikes out and puts the ball in play at an extraordinary rate. Against Peterson\'s ground-ball approach, Arraez will make consistent hard contact — the question is whether it finds holes.',
        '<strong>Oracle Park favors this team\'s style:</strong> The Giants don\'t need to hit home runs to win at home. Their park rewards contact, speed, and triples. Bader\'s speed in center, Arraez\'s contact, and the deep outfield gaps create extra-base opportunities without requiring the ball to leave the yard.',
        '<strong>Weakness — the offense has been anemic:</strong> The Giants scored just 4 runs and 19 hits in their first 4 games before the breakout 9-3 win vs San Diego. This team started 0-3 for the first time since 2012. The overall offensive identity is still forming under rookie manager Tony Vitello.',
      ],
    },
  ],
  keys: [
    {
      title: 'Soto vs Oracle Park\'s marine layer — can he beat the cold air again?',
      description:
        'Juan Soto owns a .313 career average with 8 HR in 25 games at Oracle Park — one of the best individual records at a park that suppresses power by 23% for left-handed hitters. His elite exit velocity (top 3% in MLB) and opposite-field power allow him to drive balls where others can\'t. Against Robbie Ray\'s fastball, Soto won\'t chase — he\'ll wait for a pitch in the zone and try to drive it. If he gets 2+ hits, the Mets likely win. If Ray can limit Soto to 0-for-4 with walks, the Giants keep control.',
    },
    {
      title: 'Peterson\'s sinker vs the Giants\' right-handed-heavy lineup',
      description:
        'David Peterson\'s sinker (91.3 mph avg) is designed to generate ground balls, especially from right-handed hitters. But the Giants have 6 righties in the lineup, and Adames in particular is riding a 4-hit breakout game. Peterson\'s 2025 collapse (12.54 ERA in final 5 starts) was driven by pitches left over the plate. If his sinker stays down, he can limit damage through ground balls in Oracle Park\'s spacious infield. If the sinker catches too much plate, Adames and Chapman will drive it.',
    },
    {
      title: 'Ray\'s command — the zero-walk game was the story',
      description:
        'Robbie Ray\'s first start of 2026 produced zero walks in 5.1 innings — a critical sign. His career has been defined by walks: a 17.9% walk rate during his brief 2024 return, and 73 BB in 182.1 IP in 2025. When Ray walks hitters, innings spiral. When he attacks the zone, his rising four-seamer and swing-and-miss changeup are devastating. Against a Mets lineup that includes patient hitters like Soto (127 BB) and Lindor, Ray needs to throw strikes — not nibble.',
    },
    {
      title: 'Arraez\'s contact vs Peterson\'s ground ball game — unstoppable meets immovable',
      description:
        'Luis Arraez is a 2x batting champion with a career .314 average who almost never strikes out. Peterson is a ground ball pitcher who lives on weak contact. This is a stylistic clash: Arraez will put the ball in play almost every at-bat, but Peterson\'s sinker is designed to produce harmless grounders. If Arraez finds gaps, it pressures Peterson into working from the stretch. If Peterson keeps the sinker low, Arraez\'s grounders become 4-3 outs.',
    },
    {
      title: 'Bullpen edge: Mets\' depth vs Giants\' closer-in-progress',
      description:
        'The Mets\' bullpen — Williams, Weaver, Raley — is one of MLB\'s deepest. The Giants\' Ryan Walker is working through a mechanical fix after a 4.11 ERA / 6 blown saves in 2025. If this game is close after 6 innings, the Mets have a significant advantage in leverage situations. Walker\'s save vs San Diego on March 30 was clean, but he hasn\'t been tested against a lineup of this quality. The Mets won\'t need to beat Walker — they just need to get there first.',
    },
  ],
  prediction: {
    summary:
      '<p>This projects as a classic Oracle Park pitcher\'s duel — two lefties working in cold, dense air at one of MLB\'s most extreme pitcher\'s parks. Robbie Ray\'s superior stuff (186 K, 3.65 ERA in 2025, All-Star) gives the Giants a pitching edge, while David Peterson\'s ground ball approach is well-suited to the environment but doesn\'t have the swing-and-miss weapons to dominate.</p><p>The Giants\' right-heavy lineup has the natural platoon advantage, and Willy Adames\' breakout 4-hit game suggests his timing is arriving. But the Mets counter with Juan Soto — who owns Oracle Park — and a bullpen that\'s significantly deeper than the Giants\'. The game will likely hinge on whether Ray can neutralize Soto and whether Peterson can keep his sinker down against Adames and Chapman. Oracle Park\'s park factor tilts the scale toward a tight, low-scoring game decided by one or two key at-bats.</p>',
    phases: [
      {
        title: 'Early Innings (1-3)',
        description:
          'Both lefties settle in at Oracle Park. Ray\'s rising fastball generates swings and misses from the Mets\' bottom of the order. Peterson keeps the ball on the ground but Arraez and Adames each single. A sacrifice fly or RBI groundout gives the Giants a 1-0 lead. Soto works a walk in the 2nd.',
      },
      {
        title: 'Middle Innings (4-6)',
        description:
          'Soto connects on a Ray fastball for an RBI double to the right-center gap — his exit velocity beats the marine layer. Mets tie it 1-1. Peterson begins to labor as his pitch count climbs against right-handed bats. Chapman or Adames drives one into the gap for an RBI double. Giants retake the lead 2-1. Peterson exits after 5.1 innings.',
      },
      {
        title: 'Late Innings (7-9)',
        description:
          'Ray exits after 6 solid innings. The Mets\' bullpen keeps it close, but the Giants\' Walker navigates a clean 8th. Lindor reaches in the 9th and Soto comes up as the tying run — the key at-bat of the game. Walker gets a groundout to end it. Giants win a tight pitcher\'s duel at home.',
      },
    ],
    projectedScore: {
      teamA: 2,
      teamB: 3,
      rationale:
        'Oracle Park\'s HR-suppressing conditions (0.765 park factor) and two lefty starters point to a low-scoring game. Ray\'s superior stuff (186 K in 2025) and the Giants\' platoon advantage against Peterson give San Francisco the narrow edge. Soto\'s Oracle Park track record (.313 AVG, 8 HR) keeps the Mets in it, but the Giants\' home-field pitching advantage and Adames\' emerging form are enough to take Game 1.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'David Peterson',
      stats: 'SP | 2025: 9-6, 4.22 ERA, 1.37 WHIP, 151 K',
      meta: 'Throws L | Ground Ball Specialist',
      bio: 'Peterson opened 2026 with a <strong>5.1 scoreless innings</strong> against Pittsburgh — 6 hits, 3 K, 2 BB. His sinker-slider combination generated consistent ground balls, and he and catcher Alvarez were "on the same page" by his own account. The concern is durability: after a career-high 168.2 IP in 2025, he collapsed with a <strong>12.54 ERA over his final 5 starts</strong>. At Oracle Park, his ground ball approach should play well — the spacious infield turns grounders into outs. But the Giants\' 6 right-handed bats will test whether his sinker stays down.',
    },
    {
      team: 'a',
      name: 'Juan Soto',
      stats: 'LF | 2025: .263/.396/.525, 43 HR, 127 BB, 38 SB',
      meta: 'Bats L | $765M Man',
      bio: 'Soto has a <strong>.313 career average with 8 HR in 25 games at Oracle Park</strong> — one of the best individual track records at a park that suppresses LHH power by 23%. His elite exit velocity and opposite-field ability allow him to beat the marine layer. Through 6 games in 2026, he\'s hitting .353 with a .450 OBP and launched his first HR on April 1 off a Cardinals fastball. Against Ray, this is a lefty-on-lefty matchup, but Soto\'s 127 walks in 2025 prove he won\'t chase — he\'ll force Ray to come to him.',
    },
    {
      team: 'a',
      name: 'Francisco Lindor',
      stats: 'SS | 2025: .267/.346/.466, 31 HR, 31 SB',
      meta: 'Bats S | 30-30 Club',
      bio: 'Lindor\'s switch-hitting ability is critical in a lefty-lefty matchup — he\'ll bat <strong>right-handed against Ray</strong>, which gives him access to his pull-side power. His 30-30 season in 2025 (one of just seven players to achieve it) made him one of baseball\'s most complete players. As the leadoff hitter, he sets the tempo. If Lindor gets on base against Ray, his stolen base threat (31 SB) immediately creates scoring opportunities in a low-scoring game.',
    },
    {
      team: 'a',
      name: 'Devin Williams',
      stats: 'CL | 2025: 4.79 ERA, 90 K, 18 SV (3.02 xERA)',
      meta: 'Throws R | The Airbender',
      bio: 'Williams\' "Airbender" changeup is one of the most unhittable pitches in baseball — and in a game projected to be tight through 9 innings, the Mets\' closer is a significant insurance policy. He converted a <strong>1-2-3 save in his Mets debut</strong> (Game 1 vs Pittsburgh). His 2025 ERA (4.79) was misleading — his xERA (3.02) suggests he was nearly two runs better than his results. Against the Giants\' right-heavy lineup, Williams\' righty-on-righty changeup is devastating.',
    },
    {
      team: 'b',
      name: 'Robbie Ray',
      stats: 'SP | 2025: 11-8, 3.65 ERA, 186 K, 1.21 WHIP (All-Star)',
      meta: 'Throws L | 2021 Cy Young Winner',
      bio: 'Ray\'s comeback from Tommy John surgery culminated in a <strong>2025 All-Star selection</strong> — 11-8, 3.65 ERA, 186 K in 182.1 IP. His first 2026 start was solid: 5.1 IP, 2 ER, 4 K, <strong>0 BB</strong> vs the Yankees. The zero walks are the story — when Ray walks hitters, he implodes. His over-the-top fastball with elite spin creates a rising effect, and his changeup generates an unusually high rate of swings and misses. At Oracle Park in cool air, his fastball should play up.',
    },
    {
      team: 'b',
      name: 'Willy Adames',
      stats: 'SS | 2025: .226/.319/.417, 30 HR, 84 RBI',
      meta: 'Bats R | $182M Franchise Cornerstone',
      bio: 'Adames signed a franchise-record <strong>$182M deal</strong> and started 2026 ice-cold — 2-for-15 with 6 K through 4 games. Then he erupted for a <strong>4-hit game</strong> against San Diego on April 1, including a leadoff homer, an infield single, an RBI single, and a double. His 30 HR in 2025 were the most by a Giant since Barry Bonds in 2004. As a right-handed hitter facing Peterson\'s left-handed sinker, Adames has the platoon edge. If his timing holds, he\'s the most dangerous bat in either lineup tonight.',
    },
    {
      team: 'b',
      name: 'Luis Arraez',
      stats: '2B | Career: .314 AVG, 2x Batting Champion',
      meta: 'Bats L | Contact Machine',
      bio: 'Arraez is one of the hardest hitters in baseball to strike out — a <strong>2x batting champion</strong> with a career .314 average and elite bat-to-ball skills. Against Peterson\'s ground-ball approach, this matchup is a chess match: Peterson wants weak ground balls, Arraez makes consistent hard contact. Arraez rarely chases and forces pitchers to throw in the zone. As the leadoff hitter, he sets the table for the Giants\' power bats behind him.',
    },
    {
      team: 'b',
      name: 'Matt Chapman',
      stats: '3B | 2025: .241/.351/.457, 21 HR',
      meta: 'Bats R | Elite Defender',
      bio: 'Chapman\'s <strong>.351 OBP and 21 HR</strong> in 2025 showed his offensive game is more than just defense — though his defense remains Gold Glove caliber. As a right-handed hitter against Peterson, Chapman has the platoon advantage and the discipline to work counts. His ability to drive the ball to the opposite field means Peterson can\'t just pound sinkers inside — Chapman will adjust and line pitches the other way. If Adames and Chapman both produce, the Giants\' middle of the order is dangerous.',
    },
  ],
  trends: [
    {
      title: 'Hard Contact & Power',
      bullets: [
        '<strong>Oracle Park suppresses HR</strong> — 0.765 park factor for home runs (2nd-lowest in MLB). Dense marine air and cool night conditions mean fly balls die at the wall. Left-handed HR power is suppressed by <strong>23%</strong>, right-handed by <strong>21%</strong> over the last three seasons.',
        '<strong>Juan Soto</strong> is the exception to the park\'s power suppression — <strong>.313 career AVG, 8 HR in 25 games</strong> at Oracle Park. His elite exit velocity (top 3% in MLB) allows him to beat the marine layer when others can\'t.',
        '<strong>Willy Adames</strong> broke out with a 4-hit, 2-RBI game on April 1 after going 2-for-15 to start the season. His 30 HR in 2025 give him serious power, but Oracle Park may limit his home run potential — look for doubles into the gaps instead.',
        'Both starters are <strong>left-handed</strong>, which suppresses power from the lefty bats in both lineups (Soto, Baty, Arraez, Lee, Bailey). Right-handed bats (Adames, Chapman, Bichette, Ramos) have the advantage.',
      ],
    },
    {
      title: 'Stolen Base Potential',
      bullets: [
        '<strong>Francisco Lindor</strong> stole 31 bases in 2025 (30-30 club) and will test Robbie Ray\'s delivery. Ray\'s deliberate windup creates windows for stolen base attempts.',
        '<strong>Juan Soto</strong> stole a career-high 38 bases in 2025 — an underrated weapon. Against Ray\'s focus on the batter, Soto picks his spots and runs when the situation calls for it.',
        '<strong>Neither lefty starter has an elite pickoff move</strong> — both focus on getting hitters out rather than holding runners. This creates opportunities for both teams\' base runners.',
        '<strong>Patrick Bailey</strong> (Giants) is a solid defensive catcher who controls the running game. <strong>Francisco Alvarez</strong> (Mets) is returning from hamate and thumb surgeries in 2025 — his arm strength may be below baseline, giving Giants runners an edge.',
        'In a low-scoring game at Oracle Park, a <strong>stolen base converting a single into a scoring position</strong> could be the difference. Watch for Lindor and Soto on the bases in the middle innings.',
      ],
    },
    {
      title: 'Strikeout Projections',
      bullets: [
        '<strong>Robbie Ray</strong> struck out 186 in 182.1 IP in 2025 (9.2 K/9). Against the Mets\' aggressive bottom of the order (Robert, Benge, Baty), project <strong>5-7 K over 5-6 innings</strong>. His changeup is the swing-and-miss weapon.',
        '<strong>David Peterson</strong> is not a power pitcher — 151 K in 168.2 IP (8.1 K/9). Against Arraez (almost impossible to K) and the Giants\' contact-first approach, project <strong>3-5 K over 5-6 innings</strong>.',
        '<strong>Giants most vulnerable to K:</strong> Casey Schmitt, Jerar Encarnacion, and Heliot Ramos are aggressive swingers who will chase Peterson\'s slider. But the top of the lineup (Arraez, Lee) makes contact consistently.',
        '<strong>Mets most vulnerable to K:</strong> Luis Robert Jr., Carson Benge (rookie), and Brett Baty are swing-and-miss threats against Ray\'s slider and changeup combination.',
      ],
    },
    {
      title: 'Other Notable Trends',
      bullets: [
        'The <strong>Giants started 0-3 for the first time since 2012</strong> before winning 2 of 3 vs San Diego. The franchise was shut out in back-to-back games to open the season for the first time in history. Morale is fragile.',
        'The <strong>Mets\' offense went cold in St. Louis</strong> — shut out in Game 2, scored just 1 run in an extra-innings loss in Game 3. They arrive at Oracle Park having scored just 1 run in their last 20 innings.',
        '<strong>Tony Vitello</strong> is the first MLB manager hired directly from a college program (Tennessee) without any professional coaching experience. This is his first home series at Oracle Park as a big-league skipper.',
        'Two lefty starters in the same game is <strong>increasingly rare in MLB</strong> — only ~8% of games feature a lefty-lefty matchup. Both lineups will adjust accordingly, stacking opposite-handed bats.',
        'The Mets\' <strong>Freddy Peralta and Kodai Senga</strong> anchor the rotation — Peterson is the 3rd or 4th starter. His performance in this start will determine whether he holds his rotation spot as the season progresses.',
      ],
    },
  ],
  sources: [
    {
      heading: 'New York Mets Sources',
      links: [
        { label: 'Mets 2026 Opening Day Roster — MLB.com', url: 'https://www.mlb.com/mets/news/mets-2026-opening-day-roster' },
        { label: 'David Peterson 2026 Preview — Amazin\' Avenue', url: 'https://www.amazinavenue.com/new-york-mets-roster/91826/mets-david-peterson-pitcher-rotation-injury-2026-preview-new-york' },
        { label: 'David Peterson Statcast — Baseball Savant', url: 'https://baseballsavant.mlb.com/savant-player/david-peterson-656849' },
        { label: 'Juan Soto Season Preview — Amazin\' Avenue', url: 'https://www.amazinavenue.com/new-york-mets-roster/91975/mets-2026-season-preview-juan-soto-left-field-superstar' },
        { label: 'Juan Soto Statcast — Baseball Savant', url: 'https://baseballsavant.mlb.com/savant-player/juan-soto-665742' },
        { label: 'Devin Williams Bullpen Preview — Amazin\' Avenue', url: 'https://www.amazinavenue.com/new-york-mets-roster/91919/mets-devin-williams-2026-season-preview-pitcher-closer-reliever-bullpen-new-york' },
        { label: 'Mets Depth Chart — FanGraphs', url: 'https://www.fangraphs.com/roster-resource/depth-charts/mets' },
        { label: 'Mets at Giants Watch Info — SNY', url: 'https://sny.tv/articles/mets-giants-how-to-watch-sny-4-2-26' },
        { label: 'Mets Schedule & Results — ESPN', url: 'https://www.espn.com/mlb/team/schedule/_/name/nym/new-york-mets' },
        { label: 'Mets Roster Preview — Yardbarker', url: 'https://www.yardbarker.com/mlb/articles/new_york_mets_2026_preview_a_complete_roster_built_to_contend/s1_17702_43639029' },
      ],
    },
    {
      heading: 'San Francisco Giants Sources',
      links: [
        { label: 'Giants 2026 Opening Day Roster — MLB.com', url: 'https://www.mlb.com/news/giants-2026-opening-day-roster' },
        { label: 'Robbie Ray 2026 Outlook — MLB.com', url: 'https://www.mlb.com/news/ryan-walker-giants-2026-outlook' },
        { label: 'Robbie Ray Statcast — Baseball Savant', url: 'https://baseballsavant.mlb.com/savant-player/robbie-ray-592662' },
        { label: 'Willy Adames 4-Hit Breakout — NBC Sports Bay Area', url: 'https://www.nbcsportsbayarea.com/mlb/san-francisco-giants/willy-adames-jung-hoo-lee-padres/1927768/' },
        { label: 'Ryan Walker Closer Job — NBC Sports Bay Area', url: 'https://www.nbcsportsbayarea.com/mlb/san-francisco-giants/ryan-walker-closer-job-2026-season/1916292/' },
        { label: 'Giants Depth Chart — FanGraphs', url: 'https://www.fangraphs.com/roster-resource/depth-charts/giants' },
        { label: 'Giants Historically Poor Start — Yardbarker', url: 'https://www.yardbarker.com/mlb/articles/giants_2026_season_gets_off_to_a_historically_poor_start/s1_17194_43664355' },
        { label: 'Giants Lineup Projections — SF Standard', url: 'https://sfstandard.com/2026/03/07/sf-giants-lineup-luis-arraez/' },
        { label: 'Oracle Park Factors — Baseball Savant', url: 'https://baseballsavant.mlb.com/leaderboard/statcast-park-factors' },
        { label: 'Oracle Park Guide — MLB.com', url: 'https://www.mlb.com/news/featured/oracle-park-guide-capacity-seating-chart-parking-and-more' },
        { label: 'MLB Standings 2026 — ESPN', url: 'https://www.espn.com/mlb/standings' },
        { label: 'Series Preview — Bleacher Nation', url: 'https://www.bleachernation.com/picks/2026/03/31/san-francisco-giants-vs-new-york-mets-series-april-2-5-odds-starting-pitchers-predictions/' },
      ],
    },
  ],
  footerText: 'Mets at Giants — April 2, 2026 — Oracle Park, San Francisco',
}

export default game
