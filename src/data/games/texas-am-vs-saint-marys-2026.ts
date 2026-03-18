import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'texas-am-vs-saint-marys-2026',
  title: 'Texas A&M vs Saint Mary\'s — First Round Viewing Guide',
  eventTag: 'NCAA Tournament • First Round • Oklahoma City, OK',
  date: 'Thursday, March 19, 2026',
  round: 'First Round',
  tipTime: '2026-03-19T19:25',
  venue: 'Paycom Center, Oklahoma City, Oklahoma',
  extraInfo: 'Winner faces <strong>#2 Houston or #15 Idaho</strong> on Saturday',
  teams: [
    {
      name: 'Texas A&M',
      mascot: 'Aggies',
      seed: '#10 Seed',
      record: '21-11 • SEC At-Large',
      colors: { primary: '#500000', secondary: '#FFFFFF', name: 'texas-am' },
      className: 'texas-am',
    },
    {
      name: "Saint Mary's",
      mascot: 'Gaels',
      seed: '#7 Seed',
      record: '27-5 • WCC At-Large',
      colors: { primary: '#D60024', secondary: '#003DA5', name: 'saint-marys' },
      className: 'saint-marys',
    },
  ],
  tabs: [
    { id: 'stakes', label: 'The Stakes' },
    { id: 'styles', label: 'Styles of Play' },
    { id: 'keys', label: 'Keys to the Game' },
    { id: 'players', label: 'Players to Watch' },
    { id: 'facts', label: 'Fun Facts' },
    { id: 'history', label: 'History' },
    { id: 'sources', label: 'Sources' },
  ],
  stakes: {
    callout:
      'The ultimate style clash: an SEC team that scores <strong>87.7 points per game (9th nationally)</strong> with 14 new players and a first-year coach against a WCC program that allows <strong>64.6 points per game (7th nationally)</strong> and plays at the <strong>297th-slowest tempo in the country</strong>. Texas A&M wants chaos. Saint Mary\'s wants control. One of these identities will break first.',
    cards: [
      {
        label: 'For Texas A&M',
        value:
          'When Buzz Williams left for Maryland, the <strong>entire roster transferred out</strong>. First-year coach Bucky McMillan assembled 14 new players in weeks — from Alabama, Kansas, USC, Spain, and more. Getting to the tournament is already a miracle. Winning would be legendary.',
      },
      {
        label: "For Saint Mary's",
        value:
          '<strong>Five consecutive NCAA Tournament appearances</strong> (a program record). Randy Bennett\'s 25th season. But only one Sweet 16 in 12 tournaments (2010). With Gonzaga leaving the WCC, this may be the most important tournament for the program\'s national identity.',
      },
      {
        label: 'The Tempo War',
        value:
          'A&M ranks <strong>10th in possessions per game</strong>. Saint Mary\'s plays at the <strong>297th-slowest tempo</strong>. The difference is massive. Whoever controls the pace controls the outcome.',
      },
      {
        label: 'The Free Throw Factor',
        value:
          'Saint Mary\'s is the <strong>#1 free throw shooting team in America (81.1%)</strong>. In a close, grind-it-out game decided at the line, that\'s an enormous edge.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: '"Bucky Ball" — Speed and Firepower',
      bullets: [
        '<strong>Pace:</strong> Texas A&M ranks <strong>10th nationally in possessions per game</strong> and 27th in adjusted tempo. They score <strong>87.7 PPG (9th nationally)</strong>. "Bucky Ball" is designed to overwhelm opponents with speed, pressure, and volume.',
        '<strong>Three-point volume:</strong> <strong>14th nationally in three-pointers made and attempted.</strong> They shoot 36.2% from deep with multiple 40%+ shooters (Dominguez at 40.9%, Griffen at 40%+, Isaacs at 39.6%). When the threes fall, they\'re nearly unstoppable.',
        '<strong>Scoring depth:</strong> <strong>Five double-figure scorers</strong> and eight players logging 15+ minutes. Agee (14.7), Griffen (11.6), Hill (10.8), Dominguez (10.3), Isaacs (10.1). You can\'t key on one player.',
        '<strong>Turnover creation:</strong> Force <strong>13.6 turnovers per game (44th nationally)</strong> through full-court and half-court pressure. A&M is 18-4 when forcing 10+ turnovers. Saint Mary\'s ball security will be tested.',
        '<strong>Weakness:</strong> Allow <strong>79.6 PPG</strong> — the defense is inconsistent. Got blown out 83-63 by Oklahoma in the SEC Tournament. If Saint Mary\'s controls the tempo and A&M can\'t force turnovers, the Aggies\' defensive vulnerabilities get exposed.',
      ],
    },
    {
      team: 'b',
      title: 'Bennett Ball — Discipline and Suffocation',
      bullets: [
        '<strong>Elite defense:</strong> Saint Mary\'s allows just <strong>~64.6 PPG (7th nationally)</strong>. KenPom defensive efficiency: <strong>19th nationally</strong>. They held opponents under 70 points 23 times and under 60 nine times. They don\'t gamble — they contest everything and limit possessions.',
        '<strong>The slowest pace:</strong> Tempo ranks <strong>297th nationally</strong>. This is deliberate, patient basketball designed to eliminate extra possessions for high-scoring opponents. Against a team that wants to play fast, Saint Mary\'s\' tempo is their most powerful weapon.',
        '<strong>Best free throws in America:</strong> <strong>81.1% from the line — No. 1 nationally.</strong> In a close, low-possession tournament game decided in the final minutes, this is an enormous advantage.',
        '<strong>Dominant rebounding:</strong> <strong>3rd nationally in rebound margin. 13th in total rebounds (40/game). 5th in limiting opponent rebounds.</strong> Three first-team All-WCC selections and a 7-2 center (McKeever) anchor the glass.',
        '<strong>Weakness:</strong> <strong>Bottom-40 in roster depth</strong> — they rely heavily on a core rotation. If they fall behind, the slow pace gives them fewer possessions to recover. Three-point shooting efficiency is elite (38.6%) but volume is low (259th in attempts).',
      ],
    },
  ],
  keys: [
    {
      title: 'Tempo decides everything.',
      description:
        'This is the most extreme style clash in the first round. A&M wants 87 PPG and chaos. Saint Mary\'s wants 64 PPG and control. If the game is played in the 80s with fast transitions and lots of possessions, Texas A&M\'s superior athleticism and three-point volume takes over. If Saint Mary\'s can grind it into the 60s with half-court execution, their defense and free throw shooting become decisive. The first five minutes will tell us which team imposed its identity.',
    },
    {
      title: 'Can A&M\'s pressure disrupt Saint Mary\'s ball-handlers?',
      description:
        'A&M forces 13.6 turnovers per game through full-court and half-court pressure. Saint Mary\'s doesn\'t rank well in turnover avoidance (not a top-50 metric). But Bennett\'s teams are fundamentally disciplined — they don\'t make reckless mistakes. The question is whether A&M\'s SEC-level athleticism and speed create a kind of pressure Saint Mary\'s hasn\'t faced in the WCC.',
    },
    {
      title: 'The three-point shooting variance.',
      description:
        'Both teams shoot well from deep — A&M at 36.2%, Saint Mary\'s at 38.6%. But the volume is completely different: A&M is 14th nationally in attempts, Saint Mary\'s is 259th. If both teams shoot well, A&M benefits because they take more. If both go cold, Saint Mary\'s benefits because their defense and rebounding keep them in games regardless. The three-point shooting of Dominguez, Griffen, and Isaacs for A&M — and Lewis and Dent for Saint Mary\'s — will be decisive.',
    },
    {
      title: 'Agee and Hill\'s physicality vs. McKeever and Murauskas.',
      description:
        'A&M\'s Rashaun Agee (14.7/8.9, 13 double-doubles) is a physical bully inside. Saint Mary\'s has 7-2 Andrew McKeever (9.2 RPG) and 6-8 Paulius Murauskas (18.8 PPG). The interior battle could decide the glass — and Saint Mary\'s ranks 3rd nationally in rebound margin. If McKeever can neutralize Agee and Murauskas produces offensively, Saint Mary\'s controls the paint.',
    },
    {
      title: '25 years of Bennett vs. 1 year of McMillan.',
      description:
        'Randy Bennett has coached 12 NCAA Tournament teams over 25 years at Saint Mary\'s. Bucky McMillan is in his first year as a Power 4 coach, with a roster he assembled in weeks. Bennett\'s teams are always prepared, always disciplined, always in the game late. But McMillan\'s SEC-tested roster has players from Alabama\'s Final Four, Kansas, and NC State — they\'ve been in big moments at big programs. Experience vs. pedigree.',
    },
  ],
  players: [
    {
      team: 'a',
      name: 'Rashaun Agee',
      stats: '14.7 PPG • 8.9 RPG • 48.1% FG',
      meta: "F • 6-7 • Senior • All-SEC • 13 Double-Doubles",
      bio: 'From Chicago. Path: <strong>New Mexico State → Bowling Green → USC → Texas A&M</strong>. Had to obtain a <strong>temporary restraining order</strong> to gain eligibility after an NCAA waiver dispute. Broke A&M\'s single-season double-double record (13). Coach: <strong>"He\'s just a soldier. He\'s not gonna back down from anybody."</strong>',
    },
    {
      team: 'a',
      name: 'Rylan Griffen',
      stats: '11.6 PPG • 40%+ 3PT',
      meta: "G • 6-5 • Senior • Alabama Final Four → Kansas → A&M",
      bio: 'From Dallas. Was a starter on <strong>Alabama\'s 2023-24 Final Four team</strong>, then played at Kansas, then transferred to A&M. Has been part of <strong>three NCAA Tournament teams at three schools</strong>. Career-high 21 vs. Kentucky. Team is 12-3 when he scores in double figures.',
    },
    {
      team: 'a',
      name: 'Ruben Dominguez',
      stats: '10.3 PPG • 40.9% 3PT',
      meta: "G • 6-6 • Sophomore • Spanish Pro • FIBA U16 Euro MVP",
      bio: 'From Puerto Real, Spain. <strong>2019 FIBA U16 European Championship MVP</strong> (led Spain to gold). Played <strong>150+ professional games in Spain\'s Liga ACB</strong>, debuting at 17 against FC Barcelona. Came to America for the NIL: <strong>"It\'s a big opportunity to change my life, my family\'s life."</strong> Scored 30 vs. Manhattan.',
    },
    {
      team: 'a',
      name: 'Marcus Hill',
      stats: '10.8 PPG • 49.6% FG',
      meta: "G • 6-4 • Senior (5th year) • JUCO to SEC Journey",
      bio: 'From Rockford, IL. <strong>Prep school → JUCO (led NJCAA in points at 25.2 PPG) → Bowling Green (led MAC in scoring) → NC State (led team in scoring) → Texas A&M.</strong> Granted 5th year via NCAA lawsuit. <strong>"It feels great to go to the SEC...to show kids it\'s possible."</strong>',
    },
    {
      team: 'b',
      name: 'Paulius Murauskas',
      stats: '18.8 PPG • 7.7 RPG • .487 FG%',
      meta: "F • 6-8 • Junior • First Team All-WCC • Lithuania",
      bio: 'From Kaunas, Lithuania. Began career with <strong>BC Žalgiris, debuting in the first division at 16</strong>. Played at Arizona (2.7 PPG in 23 games) before transferring. Second consecutive First Team All-WCC. Scored <strong>32 points and 15 rebounds</strong> vs. Pacific on his birthday. 576 points on the season (WCC-best). Only returning starter.',
    },
    {
      team: 'b',
      name: 'Mikey Lewis',
      stats: '14.2 PPG • .372 3PT • 64 threes',
      meta: "G • Sophomore • First Team All-WCC • Oakland Native",
      bio: 'Local kid from Oakland. Was the WCC Sixth Man of the Year last season before stepping into a starring role. Scored <strong>31 points with 7 three-pointers in the 70-59 upset of No. 9 Gonzaga</strong> — the final WCC regular-season meeting between the rivals. <strong>"That was some of the most fun I\'ve ever had playing basketball."</strong>',
    },
    {
      team: 'b',
      name: 'Joshua Dent',
      stats: '13.0 PPG • 5.7 APG • .401 3PT • .918 FT%',
      meta: "G • Sophomore • First Team All-WCC • Wollongong, Australia",
      bio: 'The <strong>25th Australian to suit up for Saint Mary\'s</strong> — continuing Randy Bennett\'s legendary pipeline. Filled the enormous shoes of back-to-back WCC Player of the Year Marciulionis. Leads the WCC in minutes per game (36:07) and free throw percentage. 174 assists, 50 steals. WCC All-Academic Team.',
    },
    {
      team: 'b',
      name: 'Andrew McKeever',
      stats: '8.4 PPG • 9.2 RPG • .507 FG%',
      meta: "C • 7-2 • Junior • Interior Anchor",
      bio: 'From Livermore, CA. At <strong>7-2, he gives Saint Mary\'s a size advantage in virtually every matchup</strong>. Averaged 22/12/5 in high school and reached the CIF State Championship Game. Redshirted as a freshman. The rim protector and rebounder who anchors a defense that allows just 64.6 PPG.',
    },
  ],
  funFacts: [
    {
      emoji: '🎬',
      title: 'Two Oscar Winners (Saint Mary\'s)',
      body: '<strong>Mahershala Ali</strong> (two-time Academy Award winner for Moonlight and Green Book) <strong>played basketball at Saint Mary\'s</strong>. <strong>Ryan Coogler</strong> (Black Panther, Creed) enrolled on a football scholarship and discovered filmmaking in a creative writing class. Two Oscar winners from a school of 1,955 students.',
    },
    {
      emoji: '🐕',
      title: 'Reveille the Collie (Texas A&M)',
      body: 'A&M\'s mascot is <strong>Reveille</strong>, a Rough Collie known as "The First Lady of Aggieland." The tradition started in 1931 when cadets hit a stray dog and adopted her. She barked at the morning bugle call, earning her name. Currently on Reveille X.',
    },
    {
      emoji: '🇪🇸',
      title: 'From FC Barcelona to College Station (A&M)',
      body: '<strong>Ruben Dominguez</strong> played 150+ professional games in Spain\'s Liga ACB, debuting at age 17 against FC Barcelona. He won <strong>FIBA U16 European Championship MVP</strong> leading Spain to gold. He came to A&M for the NIL: "It\'s a big opportunity to change my life, my family\'s life."',
    },
    {
      emoji: '🇦🇺',
      title: 'The Australian Pipeline (Saint Mary\'s)',
      body: '<strong>25+ Australians</strong> have played for Saint Mary\'s — more than any college program. Bennett\'s pipeline produced <strong>Patty Mills</strong> (NBA champion) and <strong>Matthew Dellavedova</strong> (NBA champion). Five Gaels alumni represented Australia at the 2024 Paris Olympics. Bennett\'s insight: "Saint Mary\'s to them is just as good as going to Duke."',
    },
    {
      emoji: '⏱️',
      title: 'The Ultimate Tempo War',
      body: 'Texas A&M ranks <strong>10th nationally in possessions per game</strong>. Saint Mary\'s plays at the <strong>297th-slowest tempo</strong>. The difference between these two teams\' pace is among the most extreme matchups in the entire 2026 tournament.',
    },
    {
      emoji: '🏈',
      title: 'The 12th Man (Texas A&M)',
      body: 'In 1922, E. King Gill — a basketball player — was called from the stands to suit up for the injured football team. He stood ready throughout the game. Since then, the <strong>entire student body stands during home football games</strong>. A&M trademarked "12th Man" in 1990. ~38,000 students attend each game.',
    },
    {
      emoji: '🔄',
      title: '14 New Players in One Offseason (A&M)',
      body: 'When Buzz Williams left for Maryland, <strong>the entire A&M roster transferred out</strong>. Bucky McMillan assembled <strong>14 new players in weeks</strong> — from Alabama, Kansas, USC, NC State, Texas Tech, Creighton, and Spain. Getting to the NCAA Tournament with a completely new team is remarkable.',
    },
    {
      emoji: '⛪',
      title: 'Founded by Christian Brothers (Saint Mary\'s)',
      body: 'Saint Mary\'s was <strong>founded in 1863 in San Francisco</strong>, then moved to Moraga in 1927. Run by the De La Salle Christian Brothers. The 420-acre campus in the East Bay hills is one of the most beautiful in California. Bennett visits the campus chapel regularly.',
    },
    {
      emoji: '⏪',
      title: 'The Northern Iowa Comeback (A&M)',
      body: 'In the 2016 NCAA Tournament, A&M trailed Northern Iowa by <strong>12 points with 44 seconds left</strong>. They scored 12 in 33 seconds — including a buzzer-beater to force overtime — and won <strong>92-88 in double OT</strong>. The greatest comeback in tournament history.',
    },
    {
      emoji: '🤝',
      title: 'Gonzaga\'s Goodbye (Saint Mary\'s)',
      body: 'Saint Mary\'s beat No. 9 Gonzaga 70-59 in their <strong>final WCC regular-season meeting</strong> before Gonzaga leaves for the Pac-12. The teams have met 121 times since 1955. Mikey Lewis scored 31 with 7 threes. Bennett told Few: <strong>"I think this is one of your best coaching jobs."</strong>',
    },
    {
      emoji: '🎯',
      title: 'Best Free Throws in America (Saint Mary\'s)',
      body: 'Saint Mary\'s shoots <strong>81.1% from the free throw line — No. 1 in the entire country</strong>. In a close tournament game decided in the final minutes, that\'s not just a stat. That\'s the difference between winning and losing.',
    },
    {
      emoji: '🪖',
      title: 'More Officers Than West Point (A&M)',
      body: 'Texas A&M\'s Corps of Cadets produced <strong>more commissioned officers in WWII (14,123) than West Point and Annapolis combined</strong>. Over 250 Aggies have served as generals. Nine alumni have been awarded the Medal of Honor.',
    },
  ],
  history: {
    callout:
      'Saint Mary\'s has <strong>14 NCAA Tournament appearances and 562+ wins under Randy Bennett</strong>. Texas A&M has <strong>18 tournament appearances and the greatest comeback in tournament history</strong> (12 points in 44 seconds vs. Northern Iowa, 2016). Both programs are fighting for respect — Saint Mary\'s as a mid-major power in a post-Gonzaga WCC, and A&M as a program that survived total roster demolition to get here.',
    subsections: [
      {
        title: "Saint Mary's Under Bennett: Building a Program",
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '2001',
            text: 'Bennett hired, inheriting a team that won <strong>only 2 games</strong>.',
          },
          {
            date: '2010',
            text: 'As a <strong>10-seed, beat No. 2 Villanova</strong> to reach the Sweet 16 — the program\'s breakthrough moment and only Sweet 16 under Bennett.',
          },
          {
            date: '2007-2013',
            text: 'The <strong>Dellavedova-Patty Mills era</strong>. Mills becomes the first Saint Mary\'s player drafted since 1983. Dellavedova becomes the all-time leading scorer. The Australian pipeline is in full swing.',
          },
          {
            date: '2022-2026',
            text: '<strong>Five consecutive NCAA Tournament appearances</strong> (program record). Four consecutive WCC regular-season titles. Bennett signs a 10-year extension. 562+ career wins.',
          },
          {
            date: 'March 2026',
            text: 'Beat No. 9 Gonzaga 70-59 in their <strong>final WCC meeting</strong> before Gonzaga departs for the Pac-12.',
          },
        ],
      },
      {
        title: "Texas A&M's 2026: The Rebuild That Shouldn't Have Worked",
        type: 'card',
        content:
          '<p>When Buzz Williams left for Maryland in April 2025, <strong>every player on the roster transferred out</strong>. Bucky McMillan, hired from mid-major Samford, had to build a Division I basketball team from scratch in a matter of weeks. He assembled 14 new players from nine different programs — including transfers from Alabama\'s Final Four team, Kansas, USC, NC State, Texas Tech, and a Spanish professional league.</p><p style="margin-top:.5rem;">The result: 21 wins, an SEC Tournament appearance, and a 10-seed in the NCAA Tournament. <strong>Rashaun Agee broke A&M\'s double-double record. Ruben Dominguez went from Spain\'s Liga ACB to scoring 30 points in College Station. Marcus Hill\'s five-year journey from JUCO to the SEC reached its culmination.</strong></p><p style="margin-top:.5rem;">This team shouldn\'t exist. And yet here they are.</p>',
      },
      {
        title: 'The 7-10 Upset History',
        type: 'card',
        content:
          '<p>The 7-10 matchup is historically one of the closest in the tournament — <strong>10-seeds have won roughly 39% of the time</strong> since 1985. It\'s barely an upset when it happens. Recent examples: San Diego State over UConn (2023), Miami over USC (2022), Loyola Chicago over Illinois (2021).</p><p style="margin-top:.5rem;">Texas A&M\'s SEC athleticism and up-tempo pace gives them a profile that\'s different from Saint Mary\'s typical WCC opponents. But Saint Mary\'s\' defensive discipline and tempo control is exactly the kind of thing that neutralizes athletic advantages. This is a chess match — and both coaches know exactly what they\'re trying to do.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Texas A&M',
      links: [
        { label: '12thMan — Selected as No. 10 Seed', url: 'https://12thman.com/news/2026/3/15/mens-basketball-mens-basketball-selected-as-no-10-seed-in-ncaa-tournament' },
        { label: 'Sports Reference — 2025-26 A&M Stats', url: 'https://www.sports-reference.com/cbb/schools/texas-am/men/2026.html' },
        { label: '12thMan — McMillan Introduced', url: 'https://12thman.com/news/2025/4/7/mens-basketball-bucky-mcmillan-introduced-as-head-basketball-coach' },
        { label: 'SI — 4 Players Who Will Decide A&M\'s Run', url: 'https://www.si.com/college/tamu/basketball/4-players-who-will-decide-texas-am-march-madness-tournament-run' },
        { label: 'SI — How A&M Changed Dominguez\'s Life', url: 'https://www.si.com/college/tamu/basketball/how-texas-am-changed-rueben-dominguezs-life' },
        { label: 'SI — Best March Madness Moments in A&M History', url: 'https://www.si.com/college/tamu/basketball/the-best-march-madness-moments-in-texas-am-history' },
        { label: 'SI — A&M Upset Chances vs Saint Mary\'s', url: 'https://www.si.com/college/tamu/basketball/texas-am-upset-chances-and-path-to-victory-vs-saint-marys' },
        { label: 'TexAgs — Williams\' Six Good-But-Never-Great Years', url: 'https://texags.com/s/66375/williams-exit-comes-after-six-good-but-never-great-years-at-texas-am' },
        { label: 'WREX — Marcus Hill\'s Journey', url: 'https://www.wrex.com/news/featured-reports/marcus-hills-basketball-journey-leads-to-texas-a-m/article_75620106-1932-4b08-9fcb-1c6a466386fd.html' },
        { label: 'Wikipedia — Buzz Williams', url: 'https://en.wikipedia.org/wiki/Buzz_Williams' },
        { label: 'Texas A&M — 12th Man Tradition', url: 'https://www.tamu.edu/campus-community/traditions/gameday/12th-man.html' },
        { label: '12thMan — Griffen Added to Roster', url: 'https://12thman.com/news/2025/5/5/mens-basketball-mcmillan-adds-dallas-native-griffen-to-2025-26-roster' },
      ],
    },
    {
      heading: "Saint Mary's",
      links: [
        { label: 'Saint Mary\'s — Gaels Are Dancin\'', url: 'https://www.stmarys-ca.edu/news/gaels-are-dancin-saint-marys-headed-ncaa-tournament-fifth-time-row-bound-okc-seven-seed' },
        { label: 'Sports Reference — 2025-26 Saint Mary\'s Stats', url: 'https://www.sports-reference.com/cbb/schools/saint-marys-ca/men/2026.html' },
        { label: 'Saint Mary\'s — Gaels Defeat Gonzaga 70-59', url: 'https://www.stmarys-ca.edu/news/gaels-are-west-coast-conference-champs-saint-marys-defeats-gonzaga-70-59-clinch-fourth' },
        { label: 'ESPN — Why Aussie Players Get Hooked on Saint Mary\'s', url: 'https://www.espn.com/mens-college-basketball/story/_/id/17912567/why-many-australian-basketball-players-set-their-hearts-st-mary-college' },
        { label: 'CNN — Saint Mary\'s Australian Pipeline', url: 'https://www.cnn.com/2023/03/18/sport/march-madness-saint-marys-gaels-australia-spt-intl/index.html' },
        { label: 'SI — 5 Things to Know About Saint Mary\'s', url: 'https://www.si.com/college/tamu/basketball/5-things-texas-am-fans-need-to-know-about-saint-marys' },
        { label: 'Yahoo Sports — 3 Things to Know About Saint Mary\'s', url: 'https://sports.yahoo.com/articles/ncaa-tournament-3-things-know-113608346.html' },
        { label: 'Randy Bennett Wikipedia', url: 'https://en.wikipedia.org/wiki/Randy_Bennett' },
        { label: 'Saint Mary\'s — Bennett 500 Wins', url: 'https://www.stmarys-ca.edu/news/five-hundred-wins-saint-marys-randy-bennett-its-more-just-number' },
        { label: 'NCAA.com — Gonzaga Rivalry Ends', url: 'https://www.ncaa.com/news/basketball-men/article/2026-02-26/conference-realignment-brings-gonzagas-rivalry-saint-marys-ca-bittersweet-end' },
        { label: 'Saint Mary\'s — Notable Alumni', url: 'https://www.stmarys-ca.edu/alumni/notable-alumni' },
        { label: 'Saint Mary\'s — Ryan Coogler\'s Oscar Journey', url: 'https://www.stmarys-ca.edu/news/ryan-cooglers-journey-oscar-gold-began-saint-marys-classroom' },
        { label: 'Wikipedia — Saint Mary\'s College of California', url: 'https://en.wikipedia.org/wiki/Saint_Mary%27s_College_of_California' },
        { label: 'Field Level Media — Saint Mary\'s Strives for Breakthrough', url: 'https://fieldlevelmedia.com/ncaab/no-7-saint-marys-strives-for-tournament-breakthrough-against-no-10-texas-am/' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Texas A&M vs Saint Mary\'s • NCAA First Round • March 19, 2026',
}

export default game
