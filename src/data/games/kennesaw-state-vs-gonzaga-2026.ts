import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'kennesaw-state-vs-gonzaga-2026',
  title: 'Kennesaw State vs Gonzaga — First Round Viewing Guide',
  eventTag: 'NCAA Tournament • First Round • Portland, OR',
  date: 'Thursday, March 19, 2026',
  round: 'First Round',
  tipTime: '2026-03-19T21:45',
  venue: 'Moda Center, Portland, Oregon',
  extraInfo: 'Winner faces <strong>#6 BYU or #11 Texas/NC State</strong> on Saturday',
  teams: [
    {
      name: 'Kennesaw State',
      mascot: 'Owls',
      seed: '#14 Seed',
      record: '21-13 • C-USA Champs',
      colors: { primary: '#FFB81C', secondary: '#231F20', name: 'kennesaw-state' },
      className: 'kennesaw-state',
    },
    {
      name: 'Gonzaga',
      mascot: 'Bulldogs',
      seed: '#3 Seed',
      record: '30-3 • WCC Champs',
      colors: { primary: '#002967', secondary: '#C8102E', name: 'gonzaga' },
      className: 'gonzaga',
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
      'A team that lost its best player to a <strong>federal point-shaving indictment</strong> and is playing in memory of a <strong>coach who died at 43</strong> — against a program making its <strong>27th consecutive tournament appearance</strong> but missing its second-best player to a <strong>dislocated kneecap</strong>. Both teams are incomplete. Both teams are dangerous. And Gonzaga is playing what might be one of Mark Few\'s last chances to win a national championship.',
    cards: [
      {
        label: 'For Kennesaw State',
        value:
          'Their preseason Player of the Year (Cottle, 20.2 PPG) was <strong>federally indicted in a point-shaving scandal</strong> in January. Instead of collapsing, they won the C-USA Tournament as a 6-seed. This is only their <strong>2nd-ever D-I tournament appearance</strong>. They carry the memory of late coach Amir Abdur-Rahim.',
      },
      {
        label: 'For Gonzaga',
        value:
          'The <strong>27th consecutive tournament appearance</strong>. Mark Few is a <strong>Hall of Fame finalist without a championship</strong>. But Braden Huff (17.8 PPG, 66.2% FG) is <strong>out with a dislocated kneecap</strong>. This is Gonzaga\'s <strong>final WCC season</strong> before joining the Pac-12.',
      },
      {
        label: 'The Injury/Scandal Factor',
        value:
          'Kennesaw lost its best player to a federal indictment. Gonzaga lost its second-best player to a kneecap dislocation. <strong>Both teams are playing shorthanded.</strong> The question is which team adapted better.',
      },
      {
        label: 'The Style Matchup',
        value:
          'Kennesaw plays Alabama-style pace-and-pressure basketball (19th in tempo). Gonzaga has the <strong>only team in America inside the top 5 in BOTH offensive and defensive efficiency</strong>. The Owls\' chaos vs. the Bulldogs\' completeness.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Alabama-Style Chaos Ball',
      bullets: [
        '<strong>Pace and pressure:</strong> Kennesaw plays at the <strong>19th-fastest tempo nationally</strong>, averaging 83.5 PPG. Coach Pettway was an Alabama assistant for 15 years — his system is a carbon copy of Nate Oats\' attack. Mark Few described them: "A very similar style as Alabama. Get up and down, shoot the 3, offensive rebound and apply pressure 94 feet."',
        '<strong>Free-throw drawing:</strong> <strong>27.0 FTA per game (2nd nationally)</strong>. They attack the rim relentlessly and get to the line. This is their most dangerous weapon — if Gonzaga fouls, KSU lives at the stripe.',
        '<strong>Offensive rebounding:</strong> <strong>35.5% offensive rebounding rate (39th nationally)</strong>. 2nd nationally in total rebounds per game (44.79). They generate extra possessions through sheer effort on the glass.',
        '<strong>RJ Johnson\'s emergence:</strong> After Cottle\'s suspension, Johnson stepped in and averaged <strong>18.2 PPG, 5.1 APG on 42.4% from three</strong> over the final 17 games. The former Mr. Basketball of Alabama is playing his best ball at exactly the right time.',
        '<strong>Weakness:</strong> KenPom 163rd (91-spot gap vs. Gonzaga). Send opponents to the line <strong>27 times per game (360th nationally)</strong>. Free throw shooting at 69.1% is terrible. Turnover-prone (404 total). This is a team that creates chaos for both its opponent AND itself.',
      ],
    },
    {
      team: 'b',
      title: 'The Most Complete Team in America (Minus One Star)',
      bullets: [
        '<strong>Dual-threat elite:</strong> Gonzaga is the <strong>only team in America ranked top 5 in BOTH adjusted offensive (4th) and defensive (4th) efficiency</strong>. They score 85.1 PPG (17th) while allowing just 66.0 (18th). There is no weakness — except the one created by injury.',
        '<strong>Graham Ike dominates:</strong> The <strong>WCC Player of the Year</strong> averages 19.7 PPG and 8.2 RPG on 57.3% shooting. He went <strong>perfect from the field in the WCC championship</strong>. He\'s the best interior scorer Kennesaw will face all season.',
        '<strong>The Huff absence:</strong> Braden Huff (17.8 PPG, 66.2% FG, PER of 30.4) is <strong>out with a dislocated kneecap</strong>. He and Ike were one of the best frontcourt duos in America. Without him, Gonzaga\'s ceiling drops — but they still went 12-1 after his injury.',
        '<strong>Freshmen stepping up:</strong> Spanish guard <strong>Mario Saint-Supery shoots 43.4% from three</strong> (21 points in the WCC championship). Davis Fogle (top-40 recruit) provides scoring off the bench. Few: "For me, they\'re no freshmen."',
        '<strong>Vulnerability:</strong> The <strong>Michigan blowout (101-61)</strong> raised questions about the ceiling against elite competition. They blew an 18-point lead to Kentucky. Lost to Saint Mary\'s in their WCC finale. Without Huff, are they a true title contender or just a very good team?',
      ],
    },
  ],
  keys: [
    {
      title: 'Can Kennesaw\'s pace disrupt Gonzaga\'s defense?',
      description:
        'Gonzaga\'s defense ranks 4th in KenPom efficiency — they\'re elite in the half-court. But Kennesaw plays at the 19th-fastest tempo and creates chaos through pace, pressure, and offensive rebounding. If KSU can push the tempo and create transition opportunities before Gonzaga\'s defense sets, the game gets interesting. If Gonzaga controls the pace and forces KSU into half-court possessions, the talent gap takes over.',
    },
    {
      title: 'The foul trouble equation.',
      description:
        'Kennesaw draws 27 free throw attempts per game (2nd nationally) but also sends opponents to the line 27 times (360th). If Gonzaga can avoid fouling while exploiting KSU\'s foul tendency, they\'ll get easy points at the stripe AND keep Kennesaw\'s bigs in foul trouble. If KSU\'s aggressiveness draws fouls on Gonzaga\'s frontcourt — especially without Huff — the Bulldogs\' depth gets tested.',
    },
    {
      title: 'Graham Ike vs. Kennesaw\'s undersized frontcourt.',
      description:
        'Ike (6-9, 19.7 PPG, 57.3% FG) is a physical interior scorer that Conference USA teams simply don\'t have. KSU\'s biggest player is Amir Taylor at 6-9, 250 — capable but not experienced against this level. If Ike gets early position and Gonzaga feeds him, it could be a mismatch all game. KSU needs their aggressive defense to disrupt the entry passes.',
    },
    {
      title: 'Kennesaw\'s free throw shooting could doom them.',
      description:
        'KSU shoots 69.1% from the line — one of the worst in the country. They draw a lot of fouls, but if they can\'t convert, the free-throw drawing advantage becomes a weakness. In a close game, leaving points at the line against a 30-win team is fatal. Gonzaga shoots 78.7% from the stripe.',
    },
    {
      title: 'The scandal, the memorial, and the moment.',
      description:
        'Kennesaw State is playing through a federal point-shaving scandal, the loss of their best player, and the memory of a beloved coach who died at 43. That kind of emotional fuel is impossible to quantify. Teams playing for something bigger than basketball have pulled upsets before. Gonzaga has the talent advantage. KSU has the narrative.',
    },
  ],
  prediction: {
    summary: 'Gonzaga is the only team in America ranked top 5 in both offensive and defensive efficiency — even without Braden Huff, they went 12-1 after his injury. Graham Ike is the best interior scorer Kennesaw will face all season, and the Bulldogs\' defense will be a massive step up from C-USA competition. But KSU plays Alabama-style chaos ball — they draw 27 free throws per game, crash the offensive glass (39th nationally), and create havoc at a pace Gonzaga rarely sees. RJ Johnson\'s emergence (18.2 PPG post-Cottle) gives them a legitimate go-to scorer. This game will be louder and more competitive than people expect, but Gonzaga\'s completeness should ultimately prevail.',
    phases: [
      {
        title: 'Opening 10 Minutes',
        description: 'Kennesaw State comes out with the reckless energy of a team playing for a deceased coach and through a federal scandal. They push pace (19th-fastest tempo nationally), attack the rim, and draw early fouls. Ike picks up two quick fouls on KSU\'s aggressive drives — that\'s a problem for Gonzaga without Huff. But Saint-Supery (43.4% from three) hits two early threes, and Gonzaga\'s defense forces turnovers. It\'s 18-14 Gonzaga.',
      },
      {
        title: 'Mid-First Half',
        description: 'With Ike on the bench in foul trouble, Kennesaw attacks the paint. Amir Taylor (6-9, 250) scores on consecutive possessions, and Simpson adds a transition bucket. KSU\'s offensive rebounding (35.5% rate) creates second chances. The game tightens. But Warley\'s defense (team leader in steals) disrupts KSU\'s ball-handling, and Fogle scores 6 quick points off the bench. Gonzaga leads by 5 at halftime.',
      },
      {
        title: 'Early Second Half',
        description: 'Ike returns and dominates. He posts up against Taylor and converts at his 57.3% clip — there\'s simply no one in C-USA who prepared KSU for this. Gonzaga pushes the lead to 12. But KSU keeps battling — Johnson hits a step-back three (42.4% since taking over) and Lue adds a long jumper. The lead stays in the 8-12 range.',
      },
      {
        title: 'Final 10 Minutes',
        description: 'Kennesaw\'s free throw shooting (69.1%) becomes their undoing. They draw fouls at an elite rate but convert at one of the worst rates in the country. Three missed free throws in the final five minutes cost them any chance of a comeback. Gonzaga\'s 78.7% from the line provides the separation. Few\'s team advances, but KSU earns respect — and the emotional toll of their journey resonates far beyond the scoreboard.',
      },
    ],
    projectedScore: {
      teamA: 66,
      teamB: 79,
      rationale: 'Gonzaga\'s dual-elite efficiency and Ike\'s interior dominance are too much for KSU, despite the Owls\' relentless pace and emotional fuel. Kennesaw\'s poor free throw shooting prevents the upset from materializing.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'RJ Johnson',
      stats: '14.5 PPG (18.2 post-Cottle) • 4.0 APG • 42.4% 3PT',
      meta: "G • 6-4 • Junior • Mr. Basketball of Alabama",
      bio: 'From Huntsville, AL. <strong>Four-star recruit, #1-ranked player in Alabama</strong>. Chose KSU over Alabama, Georgia, Wichita State. Medically redshirted last year. When Cottle was indicted, Johnson stepped in and averaged <strong>18.2 PPG, 5.1 APG on 42.4% from three</strong> over the final 17 games. Led the team to the C-USA tournament title. The former Mr. Basketball playing the best ball of his life.',
    },
    {
      team: 'a',
      name: 'Trey Simpson',
      stats: '~16.5 PPG (C-USA play) • 1.3 BPG',
      meta: "F • Freshman • C-USA All-Freshman Team",
      bio: 'From Evergreen, Alabama. Leading C-USA freshman scorer. Scored <strong>26 points in the tournament quarterfinal</strong> vs. Western Kentucky. Won C-USA Freshman of the Week three straight weeks in January. A freshman who plays like a sophomore — his ceiling is tantalizing.',
    },
    {
      team: 'a',
      name: 'Braedan Lue',
      stats: '11.5 PPG • 1.5 BPG (team leader)',
      meta: "F • Versatile Scorer",
      bio: 'Hit a <strong>key 22-foot three in the C-USA championship game</strong>. Scored 23 against Middle Tennessee. Team leader in blocks. Provides the offensive balance that makes KSU harder to game-plan against.',
    },
    {
      team: 'a',
      name: 'Amir Taylor',
      stats: '56.0% FG • Tournament Breakout',
      meta: "F • 6-9, 250 • Freshman • Canton, GA",
      bio: 'From Canton, GA. The largest player in the rotation. <strong>Scored in double figures for six consecutive games</strong> during the tournament run, including 17 in the championship. Went 3-3 from three in the semifinal. A freshman who found another gear when it mattered most.',
    },
    {
      team: 'b',
      name: 'Graham Ike',
      stats: '19.7 PPG • 8.2 RPG • 57.3% FG',
      meta: "F/C • 6-9 • Senior • WCC Player of the Year & Tournament MOP",
      bio: 'From Aurora, Colorado. Originally at Wyoming (19.5 PPG, First Team All-MWC), then transferred to Gonzaga. <strong>WCC Player of the Year. Went perfect from the field in the WCC championship.</strong> 13 double-doubles. With Huff out, Ike carries an enormous burden — but he\'s built for it.',
    },
    {
      team: 'b',
      name: 'Mario Saint-Supery',
      stats: '8.6 PPG • 3.6 APG • 43.4% 3PT',
      meta: "G • Freshman • Spain • Youngest EuroBasket Player Since Ricky Rubio",
      bio: '19-year-old Spanish guard — the <strong>youngest player to represent Spain at EuroBasket since Ricky Rubio in 2009</strong>. Arrived at Gonzaga in late June 2025. Exploded for <strong>21 points (6-for-12 from three)</strong> in the WCC championship game. Mark Few: <strong>"For me, they\'re no freshmen."</strong>',
    },
    {
      team: 'b',
      name: 'Jalen Warley',
      stats: '~7.5 PPG • Team Leader in Steals (39)',
      meta: "G/W • 6-7 • Senior • Five-Star Recruit • FSU → Virginia → Gonzaga",
      bio: 'Former <strong>five-star recruit (No. 23 in 2021 class)</strong>. Path: Florida State (3 years) → Virginia (1 year) → Gonzaga. Defensive catalyst who had a <strong>22-point, 14-rebound game vs. San Diego</strong>. With Huff out, Warley\'s defense and versatility become even more critical.',
    },
    {
      team: 'b',
      name: 'Davis Fogle',
      stats: '8.4 PPG • 53.3% FG • 37.1% 3PT',
      meta: "W • 6-7 • Freshman • Top-40 Recruit • Anacortes, WA",
      bio: 'From Anacortes, Washington. <strong>Highest-rated high school addition since Nolan Hickman</strong> (No. 34 by 247Sports). Stepped up with Huff out — <strong>13 points, 8 rebounds, 6 assists</strong> in the WCC championship. The local kid filling enormous shoes.',
    },
  ],
  funFacts: [
    {
      emoji: '🚨',
      title: 'The Point-Shaving Scandal (Kennesaw State)',
      body: 'Preseason C-USA Player of the Year <strong>Simeon Cottle</strong> (20.2 PPG) was <strong>federally indicted in a massive point-shaving scheme</strong> on January 15, involving 26+ people — described as potentially the biggest college basketball scandal since 1951. Kennesaw suspended him and won the conference tournament anyway.',
    },
    {
      emoji: '💔',
      title: 'Playing for a Lost Coach (Kennesaw State)',
      body: '<strong>Amir Abdur-Rahim</strong>, who led KSU to its first-ever D-I NCAA Tournament in 2023, <strong>died October 24, 2024, at age 43</strong>. This tournament run is dedicated to his memory. KSU honored him with the "Love Wins" Classic. A student said: "I thank Coach Pettway for keeping the same energy that Amir brought."',
    },
    {
      emoji: '🐶',
      title: 'Salty Bit a Referee (Gonzaga)',
      body: 'Gonzaga\'s live bulldog mascot <strong>Salty once bit a referee during a game against Idaho</strong> and made Sports Illustrated. The school was originally called the "Fighting Irish" before becoming the Bulldogs. The costumed mascot "Spike" debuted in 1985.',
    },
    {
      emoji: '🏀',
      title: '27 Straight Tournaments (Gonzaga)',
      body: 'Gonzaga has made <strong>27 consecutive NCAA Tournament appearances</strong> — every tournament played since 1999. Mark Few\'s career record is <strong>766-154 (.833)</strong> — the highest winning percentage among all coaches with 600+ victories. He\'s a two-time Hall of Fame finalist without a championship.',
    },
    {
      emoji: '🇪🇸',
      title: 'The Next Ricky Rubio? (Gonzaga)',
      body: '<strong>Mario Saint-Supery</strong> was the youngest player to represent Spain at EuroBasket <strong>since Ricky Rubio in 2009</strong>. He arrived at Gonzaga in late June 2025 and shoots 43.4% from three as a freshman. Had 21 points in the WCC championship.',
    },
    {
      emoji: '🦉',
      title: 'A Live Owl Named Sturgis (Kennesaw State)',
      body: 'KSU has a <strong>live owl mascot named "Sturgis"</strong>, named after the university\'s first president. They also have "Scrappy" the costumed Owl. The school went from a <strong>junior college founded in 1963 to a 51,000-student university</strong> in about 60 years.',
    },
    {
      emoji: '🏆',
      title: 'D-II National Champions (Kennesaw State)',
      body: 'Before joining D-I, Kennesaw State won the <strong>2004 NCAA Division II National Championship</strong> under coach Tony Ingle, going 35-4. They\'re the first C-USA school to win football AND basketball conference titles in the same year since Louisville in 2004-05.',
    },
    {
      emoji: '🏠',
      title: 'The Kennel (Gonzaga)',
      body: 'McCarthey Athletic Center seats just 6,000 but has been <strong>sold out for every single home game since it opened in 2004</strong>. The student section sits the minimum allowable distance from the court. The Bulldog Band plays from before tip-off to after the final buzzer.',
    },
    {
      emoji: '📺',
      title: 'Famous Owls (Kennesaw State)',
      body: '<strong>Ty Pennington</strong> (Extreme Makeover: Home Edition) attended Kennesaw State. So did professional wrestler <strong>AJ Styles</strong>. Not bad for a school most people haven\'t heard of.',
    },
    {
      emoji: '🏀',
      title: 'The 1999 Run That Changed Everything (Gonzaga)',
      body: 'Before 1999, Gonzaga was virtually unknown. Then they made a <strong>stunning run to the Elite Eight</strong> — Casey Calvary\'s shot against Florida "put Gonzaga on the college basketball map." Few took over as head coach that summer. <strong>They haven\'t missed a tournament since.</strong>',
    },
    {
      emoji: '🏈',
      title: 'No Football Since 1941 (Gonzaga)',
      body: 'Gonzaga <strong>dropped football in 1941 and never brought it back</strong>. All institutional athletic energy goes into basketball. Bing Crosby attended but didn\'t graduate. <strong>John Stockton</strong> — the NBA\'s all-time assists and steals leader — played here. The school joins the Pac-12 this summer.',
    },
    {
      emoji: '🏀',
      title: 'The Nate Oats Connection (Kennesaw State)',
      body: 'Coach Pettway spent <strong>15 years as an Alabama assistant</strong>, recruiting and developing 8 NBA players across multiple coaching staffs. Gonzaga beat Alabama 95-85 this season; KSU lost to Alabama 91-82. The only common opponent — and the margin between these teams is smaller than you\'d think.',
    },
  ],
  history: {
    callout:
      'Gonzaga has <strong>27 consecutive tournament appearances, 30 wins this season, and the only dual top-5 offense/defense in America</strong>. Kennesaw State has been to the D-I tournament <strong>exactly once before</strong> (2023, lost to Xavier). But the Owls survived a federal scandal, honor a deceased coach, and play with the reckless energy of a team with nothing to lose. Gonzaga is missing Braden Huff. March is unpredictable.',
    subsections: [
      {
        title: "Gonzaga's March Madness Legacy",
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '1999',
            text: 'The run that changed everything: a tiny Jesuit school <strong>reaches the Elite Eight</strong>. Casey Calvary\'s shot against Florida puts Gonzaga on the map. Mark Few becomes head coach that summer.',
          },
          {
            date: '2017',
            text: 'Gonzaga\'s <strong>first championship game</strong>. Trailed North Carolina at halftime 35-32 and lost 71-65.',
          },
          {
            date: '2021',
            text: 'Entered <strong>31-0</strong>, trying to complete the first perfect season since 1976 Indiana. Baylor led wire-to-wire in an 86-70 title game loss. The closest Few has come.',
          },
          {
            date: '2025-26',
            text: '30-3, No. 3 seed. <strong>Final WCC season</strong> before joining the Pac-12. Huff injured. Two-time Hall of Fame finalist without a championship. The clock is ticking.',
          },
        ],
      },
      {
        title: "Kennesaw State: From Scandal to March Madness",
        type: 'card',
        content:
          '<p>Kennesaw State\'s 2025-26 season reads like a movie script. They began with legitimate tournament aspirations behind preseason C-USA Player of the Year Simeon Cottle (20.2 PPG). Then on January 15, Cottle was <strong>federally indicted in a massive point-shaving scheme</strong> — part of a sweeping investigation involving 26+ people, described as potentially the biggest scandal since 1951.</p><p style="margin-top:.5rem;">Instead of folding, RJ Johnson (former Mr. Basketball of Alabama) stepped up and averaged 18.2 PPG over the final 17 games. Freshmen Trey Simpson and Amir Taylor emerged. And as a 6-seed, KSU ran the C-USA tournament table — beating Western Kentucky, Sam Houston, and Louisiana Tech to claim the championship.</p><p style="margin-top:.5rem;">The entire run is dedicated to <strong>Amir Abdur-Rahim</strong>, the coach who led KSU to its first-ever tournament in 2023 and who died at 43 in October 2024. This team is playing for more than a basketball game.</p>',
      },
      {
        title: 'The 14-vs-3 History',
        type: 'card',
        content:
          '<p>Since 1985, <strong>14-seeds have beaten 3-seeds 18 times</strong> — roughly once every other year. KSU\'s profile has upset elements: frantic pace, offensive rebounding, free-throw drawing, and the emotional fuel of scandal and loss. But Gonzaga\'s dual top-5 efficiency is the highest floor of any 3-seed in the bracket.</p><p style="margin-top:.5rem;">Gonzaga\'s vulnerability is real though — they lost to Michigan by 40, blew an 18-point lead to Kentucky, and collapsed against Saint Mary\'s. Without Huff, their margin for error shrinks. If KSU can create chaos, draw fouls, and crash the boards... well, that\'s how 14-seeds win.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Kennesaw State',
      links: [
        { label: 'KSU Athletics — C-USA Championship', url: 'https://ksuowls.com/news/2026/3/15/mens-basketball-owls-claim-first-ever-conference-usa-championship-title.aspx' },
        { label: 'SI — 5 Things to Know About Kennesaw State', url: 'https://www.si.com/college/gonzaga/basketball/5-things-to-know-about-kennesaw-state-ahead-gonzaga-ncaa-tournament-first-round-matchup' },
        { label: 'ESPN — Point-Shaving Scandal', url: 'https://www.espn.com/mens-college-basketball/story/_/id/47619154/many-college-players-20-charged-point-shaving-scheme' },
        { label: 'ESPN — Pettway on Predators', url: 'https://www.espn.com/mens-college-basketball/story/_/id/47769094/kennesaw-state-coach-chides-predators-bribed-athletes' },
        { label: 'WABE — KSU Clinches with Abdur-Rahim Inspiration', url: 'https://www.wabe.org/kennesaw-state-clinches-ncaa-tournament-berth-with-inspiration-from-late-coach/' },
        { label: 'Busting Brackets — Second Time a Charm?', url: 'https://bustingbrackets.com/second-time-a-charm-kennesaw-state-owls-head-to-their-second-ever-ncaa-tournament-basketball' },
        { label: 'Sports Reference — 2025-26 KSU Stats', url: 'https://www.sports-reference.com/cbb/schools/kennesaw-state/men/2026.html' },
        { label: 'KSU Athletics — Pettway Coach Profile', url: 'https://ksuowls.com/sports/mens-basketball/roster/coaches/antoine-pettway/2316' },
        { label: 'Spokesman-Review — Gonzaga vs KSU Preview', url: 'https://www.spokesman.com/stories/2026/mar/15/no-3-gonzaga-focused-on-first-round-ncaa-tournamen/' },
        { label: 'Wikipedia — Kennesaw State University', url: 'https://en.wikipedia.org/wiki/Kennesaw_State_University' },
        { label: 'Wikipedia — KSU Owls Basketball', url: 'https://en.wikipedia.org/wiki/Kennesaw_State_Owls_men%27s_basketball' },
        { label: 'Washington Post — KSU Notching Firsts', url: 'https://www.washingtonpost.com/sports/colleges/2026/03/16/march-madness-kennesaw-st/324e35aa-2131-11f1-954a-6300919c9854_story.html' },
      ],
    },
    {
      heading: 'Gonzaga',
      links: [
        { label: 'Sports Reference — 2025-26 Gonzaga Stats', url: 'https://www.sports-reference.com/cbb/schools/gonzaga/men/2026.html' },
        { label: 'SI — Gonzaga Seed Revealed', url: 'https://www.si.com/college/gonzaga/basketball/gonzaga-march-madness-seed-revealed-selection-sunday' },
        { label: 'Spokesman-Review — Tournament Path Without Huff', url: 'https://www.spokesman.com/stories/2026/mar/15/gonzagas-ncaa-tournament-path-only-grows-more-trea/' },
        { label: 'SI — Warley Crucial for First Weekend', url: 'https://www.si.com/college/gonzaga/basketball/jalen-warley-crucial-gonzaga-first-weekend-ncaa-tournament' },
        { label: 'SI — Few Huff Injury Update', url: 'https://www.si.com/college/gonzaga/basketball/gonzaga-mark-few-gives-injury-update-braden-huff-ncaa-tournament-first-weekend' },
        { label: 'Gonzaga Athletics — WCC Championship', url: 'https://gozags.com/news/2026/3/10/mens-basketball-no-12-gonzaga-beats-santa-clara-79-68-to-win-the-wcc-tournament.aspx' },
        { label: 'SWX — Saint-Supery and Fogle WCC Title', url: 'https://www.swxlocalsports.com/spokane/gonzaga/mens-basketball/mario-saint-supery-davis-fogle-shine-as-gonzaga-captures-wcc-title-for-me-theyre-no/article_e82d6b1b-7bc1-4298-9392-2f7ebe322f6d.html' },
        { label: 'Wikipedia — Mark Few', url: 'https://en.wikipedia.org/wiki/Mark_Few' },
        { label: 'Gonzaga University — 1999 Tournament Run', url: 'https://www.gonzaga.edu/news-events/stories/2019/3/20/remembering-1999-beginning-of-20-year-ncaa-tournament-run' },
        { label: 'Gonzaga University — Pac-12 Announcement', url: 'https://www.gonzaga.edu/news-events/stories/2024/10/1/gonzaga-accepts-invitation-to-join-pac-12-conference' },
        { label: 'Gonzaga University — Spike Mascot History', url: 'https://www.gonzaga.edu/news-events/stories/2023/3/3/spike-gonzaga-mascot' },
        { label: 'ESPN — Gonzaga Bulldogs', url: 'https://www.espn.com/mens-college-basketball/team/_/id/2250/gonzaga-bulldogs' },
        { label: 'Spokesman-Review — Few Hall of Fame Finalist', url: 'https://www.spokesman.com/stories/2026/feb/11/gonzagas-mark-few-named-naismith-hall-of-fame-fina/' },
        { label: 'SI — Graham Ike Returning', url: 'https://www.si.com/college/gonzaga/basketball/graham-ike-returning-to-gonzaga-bulldogs-for-2025-26-season' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Kennesaw State vs Gonzaga • NCAA First Round • March 19, 2026',
}

export default game
