import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'ucf-vs-ucla-2026',
  title: 'UCF vs UCLA \u2014 First Round Viewing Guide',
  eventTag: 'NCAA Tournament \u2022 First Round \u2022 Philadelphia, PA',
  date: 'Friday, March 20, 2026 \u2022 7:25 PM ET',
  round: 'First Round',
  tipTime: '2026-03-20T19:25',
  venue: 'Xfinity Mobile Arena, Philadelphia, Pennsylvania \u2022 TBS',
  extraInfo: 'Winner faces <strong>#2 Duke or #15 Tennessee State/Iowa State winner</strong> on Sunday',
  teams: [
    {
      name: 'UCF',
      mascot: 'Knights',
      seed: '#10 Seed',
      record: '21-11 \u2022 Big 12',
      colors: { primary: '#BA9B37', secondary: '#000000', name: 'ucf' },
      className: 'ucf',
    },
    {
      name: 'UCLA',
      mascot: 'Bruins',
      seed: '#7 Seed',
      record: '23-11 \u2022 Big Ten',
      colors: { primary: '#2774AE', secondary: '#FFD100', name: 'ucla' },
      className: 'ucla',
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
      'A school with <strong>72,000 students and zero national championships</strong> against the school with <strong>11 national championships \u2014 the most in college basketball history</strong>. UCF is making its <strong>first tournament appearance in seven years</strong>, coached by a <strong>Duke legend and Naismith Hall of Famer</strong>. UCLA has a transfer shooting <strong>46.4% from three</strong> and a point guard averaging <strong>7.6 assists</strong>. Two big-conference teams, both flawed, both dangerous. This is a 7-10 toss-up.',
    cards: [
      {
        label: 'For UCF',
        value:
          'First NCAA Tournament in <strong>seven years</strong>. Johnny Dawkins was on the <strong>hot seat last year</strong> \u2014 now he\'s dancing. Themus Fulks shattered UCF\'s <strong>single-season assists record</strong> (205, breaking a 34-year-old mark). Four players average 11+ PPG. This is the most talented UCF team ever assembled.',
      },
      {
        label: 'For UCLA',
        value:
          '<strong>11 national championships</strong>. Pauley Pavilion. John Wooden\'s legacy. Kareem Abdul-Jabbar. Bill Walton. But this isn\'t that UCLA. This is Mick Cronin\'s grind-it-out team with a <strong>179th-ranked defense</strong> and 11 losses. Tyler Bilodeau shooting <strong>46.4% from three</strong> is the reason they\'re here.',
      },
      {
        label: 'The 7-10 Matchup',
        value:
          'The 7-10 game produces upsets at a high rate \u2014 <strong>10-seeds have won roughly 40% of these matchups</strong> since 1985. UCF comes from the Big 12. UCLA comes from the Big Ten. Both played brutal conference schedules. Neither team is dramatically better than the other.',
      },
      {
        label: 'Two Duke Legends',
        value:
          'Johnny Dawkins won the <strong>1986 Naismith Player of the Year</strong> at Duke and spent a decade as Coach K\'s associate head coach. He\'s in the <strong>National Collegiate Basketball Hall of Fame</strong>. His pedigree gives UCF a coaching edge that most mid-tier programs don\'t have.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Four Scorers, One Record-Breaker',
      bullets: [
        '<strong>Balanced scoring:</strong> UCF has <strong>four players averaging 11+ PPG</strong> \u2014 Kugel (14.4), Fulks (14.1), Burks (13.0), and Stillwell (11.7). No single player dominates, which makes them hard to game-plan against.',
        '<strong>Fulks rewrites the record book:</strong> Themus Fulks recorded <strong>205 assists this season, shattering the program\'s 34-year-old record</strong> (183 by Sinua Phillips in 1992). He also shoots 40.8% from three and averages 14.1 PPG. Named All-Big 12 Third Team.',
        '<strong>Interior presence:</strong> John Bol (7-2, .727 FG%) provides rim finishing and protection. Stillwell (8.0 RPG) dominates the glass. UCF has more interior size than UCLA.',
        '<strong>Big 12 battle scars:</strong> UCF went 9-9 in the Big 12, including an <strong>upset of #19 BYU on the road</strong>. They\'ve played against Iowa State, Kansas, and Arizona. The competition level is as high as UCLA\'s Big Ten schedule.',
        '<strong>Weakness:</strong> Defense ranks <strong>262nd in KenPom (110.2)</strong>. They allow 78.5 PPG. If UCLA\'s shooters get going \u2014 especially Bilodeau at 46.4% from three \u2014 UCF may not be able to stop them.',
      ],
    },
    {
      team: 'b',
      title: 'Elite Shooting, Questionable Defense',
      bullets: [
        '<strong>Bilodeau is special:</strong> The Oregon State transfer averages <strong>17.6 PPG on 46.4% from three at 6-9</strong>. That combination of size and shooting accuracy is rare. He\'s the most dangerous individual player in this matchup.',
        '<strong>Floor spacing everywhere:</strong> UCLA has <strong>three players shooting 41%+ from three</strong> \u2014 Bilodeau (46.4%), Clark (43.2%), and Perry (41.2%). They stretch the floor in every lineup. If UCF can\'t close out on shooters, this could be a long night.',
        '<strong>Dent distributes:</strong> Donovan Dent averages <strong>7.6 APG</strong> \u2014 among the leaders in the Big Ten. He finds shooters, runs the offense, and creates easy looks. The Dent-to-Bilodeau connection is UCLA\'s most dangerous action.',
        '<strong>Cronin\'s tournament track record:</strong> This is UCLA\'s <strong>5th tournament in 6 years</strong> under Cronin. He took the Bruins to the <strong>Final Four in 2021</strong> as an 11-seed. He knows how to coach in March.',
        '<strong>Weakness:</strong> Defense ranks <strong>179th in KenPom (106.9)</strong>. For a program with UCLA\'s pedigree, that\'s alarming. Dent shoots only <strong>63.6% from the free throw line</strong>. And 23-11 with 11 losses suggests a team that can beat anyone or lose to anyone on a given night.',
      ],
    },
  ],
  keys: [
    {
      title: 'Neither team can defend.',
      description:
        'UCF ranks 262nd in defensive efficiency. UCLA ranks 179th. Neither team is going to win this game with defense. This will be a shootout \u2014 probably in the 70s or 80s. The team that shoots better from three wins. Bilodeau (46.4%), Clark (43.2%), and Perry (41.2%) vs. Fulks (40.8%), Kugel (39.2%), and Burks (36.0%). Edge: UCLA\'s shooters, but UCF has more of them.',
    },
    {
      title: 'Bilodeau\'s three-point shooting.',
      description:
        'Tyler Bilodeau shoots 46.4% from three at 6-9. That\'s among the best marks in the entire tournament. UCF\'s perimeter defense (262nd KenPom) is ill-equipped to contest a shooter this accurate and this tall. If Bilodeau hits 5+ threes, UCLA wins comfortably. If UCF can somehow bother him \u2014 face-guard him, deny the catch \u2014 the game tightens.',
    },
    {
      title: 'Fulks vs. Dent: the point guard battle.',
      description:
        'Themus Fulks (6.7 APG, 14.1 PPG) vs. Donovan Dent (7.6 APG, 13.5 PPG). Two elite distributors who also score. Fulks broke a 34-year assists record. Dent leads the Big Ten. This head-to-head matchup is the game\'s most compelling individual battle. Whoever creates more for teammates wins.',
    },
    {
      title: 'UCF\'s interior advantage.',
      description:
        'John Bol (7-2, .727 FG%) and Jamichael Stillwell (6-8, 8.0 RPG) give UCF a size edge inside. UCLA\'s Xavier Booker (6-11) and Eric Dailey (6-8) provide some length, but UCLA is built around perimeter play. If UCF can pound the ball inside while matching UCLA on the perimeter, they have an edge.',
    },
    {
      title: 'Free throw shooting in crunch time.',
      description:
        'Dent shoots 63.6% from the free throw line. Bol shoots 68.1%. In a close game decided by 1-3 points, free throw shooting will matter. UCF\'s guards (Kugel 77.1%, Fulks 79.5%) have an edge at the line. If this game goes to the wire, the team that makes its free throws wins.',
    },
  ],
  prediction: {
    summary: 'Neither team can defend, so buckle up. UCLA ranks 179th in defensive efficiency, UCF ranks 262nd — this is the worst combined defensive matchup in the first round and it\'s going to play out exactly like you\'d expect: a shootout in the upper 70s or low 80s. The difference-maker is Tyler Bilodeau. Shooting 46.4% from three at 6-9 is a matchup problem UCF simply can\'t solve with their 262nd-ranked perimeter defense. Fulks and Kugel will keep UCF in it with their own scoring, and John Bol\'s 7-2 frame gives UCF an interior edge that could matter. But UCLA\'s trio of 40%+ three-point shooters — Bilodeau, Clark, and Perry — gives them more margin for error in a game that\'s going to come down to who hits more shots in the final five minutes.',
    phases: [
      {
        title: 'Opening 10 Minutes',
        description: 'Both teams score easily in their first few possessions and it becomes clear this game will be played in the 80s. Fulks finds Bol inside for a couple of easy finishes, while Dent hits Perry and Clark for open threes. The score is 22-20 UCLA after the first media timeout.',
      },
      {
        title: 'Mid-First Half to Halftime',
        description: 'Bilodeau heats up. He hits two contested threes that Kugel and Stillwell can\'t do anything about — the 6-9 frame makes his release point nearly unblockable. But Fulks answers with his own three-ball and a pair of assists to Burks. The half ends with UCLA up 42-39 in a track meet.',
      },
      {
        title: 'Second Half — The Runs',
        description: 'UCF goes on an 8-0 run behind Bol dominating the paint and Kugel hitting a three. UCF leads by 3. Then UCLA answers with a 10-2 run — Clark hits two threes off the bench and Dent finds Bilodeau for an easy layup. The lead changes hands six times in eight minutes.',
      },
      {
        title: 'Final 5 Minutes',
        description: 'It comes down to free throws and shot-making. Dent\'s 63.6% from the line haunts UCLA — he misses two crucial free throws. But Bilodeau hits a step-back three with 90 seconds left that pushes UCLA ahead for good. UCF\'s last-ditch effort falls short when Kugel\'s contested three rims out.',
      },
    ],
    projectedScore: {
      teamA: 75,
      teamB: 79,
      rationale: 'UCLA\'s superior three-point shooting — led by Bilodeau\'s absurd 46.4% — edges out UCF in a high-scoring affair where neither defense makes much of an impact.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Themus Fulks',
      stats: '14.1 PPG \u2022 6.7 APG \u2022 3.0 RPG \u2022 .408 3P%',
      meta: 'G \u2022 6-1 \u2022 Senior \u2022 All-Big 12 Third Team',
      bio: 'Shattered UCF\'s <strong>single-season assists record with 205</strong>, breaking a 34-year-old mark set in 1992. Second in the Big 12 in assists behind only Texas Tech\'s Christian Anderson. Named All-Big 12 Third Team and All-Newcomer Team. Also shoots <strong>40.8% from three</strong> \u2014 a true do-everything point guard.<br><a href="https://ucfknights.com/news/2026/03/9/fulks-earns-all-big-12-honors" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'a',
      name: 'Riley Kugel',
      stats: '14.4 PPG \u2022 3.1 RPG \u2022 2.5 APG \u2022 .392 3P%',
      meta: 'G \u2022 6-5 \u2022 Senior \u2022 Leading Scorer',
      bio: 'UCF\'s leading scorer at 14.4 PPG. Shoots 39.2% from three. The perimeter scoring complement to Fulks\'s playmaking.',
    },
    {
      team: 'a',
      name: 'Jamichael Stillwell',
      stats: '11.7 PPG \u2022 8.0 RPG \u2022 2.2 APG \u2022 .508 FG%',
      meta: 'F \u2022 6-8 \u2022 Senior \u2022 Double-Double Threat',
      bio: 'Senior forward who leads the team with <strong>8.0 RPG</strong> while shooting 50.8% from the field. Provides the interior toughness and rebounding UCF needs against UCLA\'s perimeter-heavy lineup.',
    },
    {
      team: 'a',
      name: 'John Bol',
      stats: '6.0 PPG \u2022 5.5 RPG \u2022 .727 FG%',
      meta: 'F \u2022 7-2 \u2022 Sophomore \u2022 Rim Protector',
      bio: 'A <strong>7-2 sophomore who shoots 72.7% from the field</strong>. Provides rim protection and finishing that UCF\'s perimeter-heavy lineup needs. His size advantage over UCLA\'s frontcourt could be decisive.',
    },
    {
      team: 'b',
      name: 'Tyler Bilodeau',
      stats: '17.6 PPG \u2022 5.6 RPG \u2022 .464 3P%',
      meta: 'F \u2022 6-9 \u2022 Senior \u2022 All-Big Ten',
      bio: 'Oregon State transfer who shoots <strong>46.4% from three at 6-9</strong> \u2014 one of the most impressive shooting lines in the tournament. Led UCLA in scoring as a junior (13.5 PPG) and elevated to 17.6 as a senior. The kind of matchup problem that wins tournament games.<br><a href="https://en.wikipedia.org/wiki/Tyler_Bilodeau" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'b',
      name: 'Donovan Dent',
      stats: '13.5 PPG \u2022 7.6 APG \u2022 2.9 RPG',
      meta: 'G \u2022 6-2 \u2022 Senior \u2022 Big Ten Assists Leader',
      bio: 'Transfer from New Mexico who leads the Big Ten with <strong>7.6 assists per game</strong>. Creates easy looks for Bilodeau, Clark, and Perry. The caveat: shoots just <strong>63.6% from the free throw line</strong>, which could haunt UCLA in a close finish.',
    },
    {
      team: 'b',
      name: 'Skyy Clark',
      stats: '11.7 PPG \u2022 2.3 RPG \u2022 .432 3P%',
      meta: 'G \u2022 6-3 \u2022 Senior \u2022 Former Kentucky Five-Star',
      bio: 'Originally a five-star recruit at Kentucky. Transferred to UCLA and found his role as a <strong>knock-down shooter at 43.2% from three</strong>. Provides scoring punch off the bench or in the starting lineup.',
    },
    {
      team: 'b',
      name: 'Trent Perry',
      stats: '12.7 PPG \u2022 2.9 RPG \u2022 .412 3P%',
      meta: 'G \u2022 6-4 \u2022 Sophomore \u2022 Rising Star',
      bio: 'Sophomore who shoots <strong>41.2% from three</strong> and averages 12.7 PPG. Part of UCLA\'s trio of 40%+ three-point shooters that makes their offense so dangerous from the perimeter.',
    },
  ],
  funFacts: [
    {
      emoji: '\uD83C\uDFC6',
      title: '11 National Championships (UCLA)',
      body: 'UCLA has won <strong>11 national championships</strong> \u2014 the most in college basketball. Ten were won under <strong>John Wooden</strong> from 1964-1975, including seven consecutive from 1967-73. Famous alumni: <strong>Kareem Abdul-Jabbar, Bill Walton, Reggie Miller</strong>.',
    },
    {
      emoji: '\uD83C\uDFC0',
      title: 'Naismith Player of the Year (UCF)',
      body: 'UCF coach <strong>Johnny Dawkins</strong> won the <strong>1986 Naismith Player of the Year</strong> at Duke. He\'s a National Collegiate Basketball Hall of Famer (2023) and spent 10 years as Coach K\'s associate head coach, winning the 2001 title.',
    },
    {
      emoji: '\uD83C\uDFAF',
      title: '46.4% From Three at 6-9 (UCLA)',
      body: '<strong>Tyler Bilodeau</strong> shoots <strong>46.4% from three at 6-9</strong>. That combination of height and accuracy is extremely rare. He transferred from Oregon State and has become one of the most efficient scorers in the Big Ten.',
    },
    {
      emoji: '\uD83D\uDCDD',
      title: '34-Year-Old Record Broken (UCF)',
      body: '<strong>Themus Fulks</strong> recorded <strong>205 assists</strong> this season, shattering UCF\'s single-season record of 183 set by Sinua Phillips in 1991-92. He\'s second in the Big 12 in assists and also shoots 40.8% from three.',
    },
    {
      emoji: '\uD83C\uDFAC',
      title: 'Pauley Pavilion (UCLA)',
      body: 'UCLA plays at <strong>Pauley Pavilion</strong> in Westwood, one of the most iconic venues in college basketball. Named for Edwin W. Pauley, it hosted 10 of Wooden\'s championship teams. The building was renovated in 2012.',
    },
    {
      emoji: '\uD83C\uDFAD',
      title: '72,000 Students (UCF)',
      body: 'UCF has approximately <strong>72,000 students</strong>, making it one of the <strong>largest universities in America</strong>. Despite the massive enrollment, this is only their fourth NCAA Tournament appearance in men\'s basketball.',
    },
    {
      emoji: '\uD83D\uDD25',
      title: 'Three 40%+ Three-Point Shooters (UCLA)',
      body: 'UCLA has three players shooting 40%+ from three: <strong>Bilodeau (46.4%), Clark (43.2%), and Perry (41.2%)</strong>. That perimeter firepower is among the best in the tournament.',
    },
    {
      emoji: '\uD83C\uDFF0',
      title: 'From Hot Seat to Dancing (UCF)',
      body: 'Johnny Dawkins was on the <strong>hot seat a year ago</strong>. UCF gave him an extension, he recruited Fulks and Kugel, and now the Knights are in the tournament for the first time in seven years. Patience pays off.',
    },
    {
      emoji: '\u2B50',
      title: 'Five-Star to Floor Spacer (UCLA)',
      body: '<strong>Skyy Clark</strong> was a five-star recruit who committed to Kentucky. He transferred to UCLA and found his role as a <strong>43.2% three-point shooter</strong>. Sometimes finding the right fit matters more than the biggest name.',
    },
    {
      emoji: '\uD83C\uDFC0',
      title: '2021 Final Four Run (UCLA)',
      body: 'Mick Cronin took UCLA to the <strong>Final Four in 2021 as an 11-seed</strong> \u2014 one of the most improbable runs in tournament history. They beat Michigan State, BYU, Abilene Christian, Alabama, and Michigan before losing to Gonzaga on a half-court buzzer-beater.',
    },
    {
      emoji: '\uD83D\uDE80',
      title: 'Space Coast to Big 12 (UCF)',
      body: 'UCF is located in Orlando, near the <strong>Kennedy Space Center</strong>. The university was originally called <strong>Florida Technological University</strong> when it was founded in 1963, with a focus on supporting the space program.',
    },
    {
      emoji: '\uD83D\uDEE1\uFE0F',
      title: 'Neither Team Can Defend',
      body: 'UCF ranks <strong>262nd</strong> in defensive efficiency. UCLA ranks <strong>179th</strong>. Combined, that\'s the worst defensive matchup in the first round. Expect a high-scoring game in the upper 70s or 80s.',
    },
  ],
  history: {
    callout:
      'UCLA has <strong>11 national championships and 52 NCAA Tournament appearances</strong>. UCF has <strong>4 tournament appearances and zero wins</strong>. But this isn\'t a classic David vs. Goliath \u2014 both teams are from power conferences, both have flaws, and the 7-10 matchup is historically close. This game is about shooting, pace, and which team\'s offense can outrun its defense.',
    subsections: [
      {
        title: "UCLA's Championship Legacy",
        type: 'timeline' as const,
        content: '',
        timeline: [
          {
            date: '1964-1975',
            text: '<strong>John Wooden</strong> wins <strong>10 national championships</strong> in 12 years, including seven consecutive (1967-73). The greatest dynasty in college sports history.',
          },
          {
            date: '1995',
            text: 'UCLA wins its <strong>11th championship</strong> under Jim Harrick \u2014 the most recent.',
          },
          {
            date: '2021',
            text: 'Mick Cronin takes UCLA to the <strong>Final Four as an 11-seed</strong>. They lose to Gonzaga on a half-court buzzer-beater.',
          },
          {
            date: '2024',
            text: 'UCLA moves from the Pac-12 to the <strong>Big Ten Conference</strong>. A new era begins.',
          },
          {
            date: '2026',
            text: '23-11 in the Big Ten. 7-seed. Bilodeau shooting 46.4% from three. Cronin\'s 5th tournament in 6 years at UCLA.',
          },
        ],
      },
      {
        title: "UCF's Rise to Power Conference Basketball",
        type: 'card' as const,
        content:
          '<p>UCF\'s basketball history is short and sweet. The program moved to Division I in 1984 and made the tournament for the first time in 1996. Their most notable appearance came in 2019, when <strong>Tacko Fall</strong> (7-6) led the Knights to a near-upset of Duke in the second round \u2014 losing by just 1 point (77-76) on a controversial non-call.</p><p style="margin-top:.5rem;">Since joining the <strong>Big 12 in 2023</strong>, UCF has been building toward this moment. Johnny Dawkins \u2014 a Duke legend turned college coach \u2014 was on the hot seat last year. He recruited transfers like Themus Fulks, who shattered the school\'s assists record, and assembled the most talented roster in program history. The result: their first tournament in seven years.</p><p style="margin-top:.5rem;">UCF\'s 72,000 students make it one of the largest schools in America. But the basketball program has never had a deep tournament run. A win over UCLA \u2014 the most storied program in the sport \u2014 would be the biggest win in UCF basketball history.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'UCF',
      links: [
        { label: 'UCF News \u2014 Tournament Bound', url: 'https://www.ucf.edu/news/ucf-mens-basketball-bound-for-ncaa-tournament/' },
        { label: 'Sports Reference \u2014 2025-26 UCF Stats', url: 'https://www.sports-reference.com/cbb/schools/central-florida/men/2026.html' },
        { label: 'UCF Athletics \u2014 Fulks All-Big 12 Honors', url: 'https://ucfknights.com/news/2026/03/9/fulks-earns-all-big-12-honors' },
        { label: 'Orlando Sentinel \u2014 UCF Tournament Return', url: 'https://www.orlandosentinel.com/2026/03/15/ucf-headed-to-the-ncaa-tournament-for-first-time-since-2018-19/' },
        { label: 'Orlando Sentinel \u2014 Scouting UCLA', url: 'https://www.orlandosentinel.com/2026/03/17/ucf-knights-ncaa-tournament-scouting-opponent-ucla/' },
        { label: 'SI \u2014 Dawkins\'s Remarkable Turnaround', url: 'https://www.si.com/college/cbb-hq/johnny-dawkins-remarkable-turnaround-with-ucf-went-from-hot-seat-to-tournament' },
        { label: 'Heartland College Sports \u2014 UCF 10-Seed', url: 'https://www.heartlandcollegesports.com/2026/03/15/ucf-no-10-seed-2026-ncaa-tournament/' },
        { label: 'Wikipedia \u2014 Johnny Dawkins', url: 'https://en.wikipedia.org/wiki/Johnny_Dawkins' },
        { label: 'SI \u2014 5 Things to Know About UCF', url: 'https://www.si.com/college/ucla/bruins-5-things-fans-should-know-about-ucf' },
        { label: '247 Sports \u2014 Fulks All-Big 12', url: 'https://247sports.com/college/iowa-state/article/ucf-point-guard-themus-fulks-named-all-big-12-third-team-all-newcomer-team-for-2025-2026-277090412/' },
      ],
    },
    {
      heading: 'UCLA',
      links: [
        { label: 'UCLA Athletics \u2014 7-Seed Announcement', url: 'https://uclabruins.com/news/2026/3/15/mens-basketball-secures-no-7-seed-in-ncaa-tournament' },
        { label: 'UCLA Athletics \u2014 Looking Ahead to Philadelphia', url: 'https://uclabruins.com/news/2026/3/16/mens-basketball-looks-ahead-to-ncaa-tournament' },
        { label: 'Sports Reference \u2014 2025-26 UCLA Stats', url: 'https://www.sports-reference.com/cbb/schools/ucla/men/2026.html' },
        { label: 'SI \u2014 UCLA March Madness Hub', url: 'https://www.si.com/college/ucla/march-madness-hub-schedule-seed-opponent-path-final-four' },
        { label: 'SI \u2014 Cronin Discusses Lessons Learned', url: 'https://www.si.com/college/ucla/bruins-mick-cronin-discusses-lessons-learned-begins-postseason' },
        { label: '247 Sports \u2014 UCLA 7-Seed vs UCF', url: 'https://247sports.com/college/illinois/article/march-madness-ucla-heading-back-to-ncaa-tournament-as-no-7-seed-will-play-ucf-in-first-round-friday-277805898/' },
        { label: 'CBS LA \u2014 UCLA 7-Seed', url: 'https://www.cbsnews.com/losangeles/news/ncaa-march-madness-tournament-ucla-bruins-2026/' },
        { label: 'Wikipedia \u2014 Tyler Bilodeau', url: 'https://en.wikipedia.org/wiki/Tyler_Bilodeau' },
        { label: 'Wikipedia \u2014 Mick Cronin', url: 'https://en.wikipedia.org/wiki/Mick_Cronin_(basketball)' },
        { label: 'Yahoo Sports \u2014 UCLA or UCF Pick', url: 'https://sports.yahoo.com/articles/ucla-ucf-pick-7-vs-191500092.html' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide \u2022 UCF vs UCLA \u2022 NCAA First Round \u2022 March 20, 2026',
}

export default game
