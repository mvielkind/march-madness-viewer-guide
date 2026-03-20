import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'texas-vs-gonzaga-2026',
  title: 'Texas vs Gonzaga — Round of 32 Viewing Guide',
  eventTag: 'NCAA Tournament • Round of 32 • Portland, OR',
  date: 'Saturday, March 21, 2026',
  round: 'Round of 32',
  tipTime: '2026-03-21T16:00',
  venue: 'Moda Center, Portland, OR • 4:00 PM PT • TBS',
  extraInfo: 'Winner advances to the <strong>Sweet 16</strong>',
  teams: [
    {
      name: 'Texas',
      mascot: 'Longhorns',
      seed: '#11 Seed',
      record: '23-14 • First Four + Beat BYU 79-71',
      colors: { primary: '#BF5700', secondary: '#FFFFFF', name: 'texas' },
      className: 'texas',
      logoUrl: 'https://a.espncdn.com/i/teamlogos/ncaa/500/251.png',
    },
    {
      name: 'Gonzaga',
      mascot: 'Bulldogs',
      seed: '#3 Seed',
      record: '31-3 • Beat Kennesaw State 73-64',
      colors: { primary: '#002967', secondary: '#C8102E', name: 'gonzaga' },
      className: 'gonzaga',
      logoUrl: 'https://a.espncdn.com/i/teamlogos/ncaa/500/2250.png',
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
      'The hottest team in the tournament meets the team that can barely make a three. <strong>Texas</strong> has won two games in four days — including a <strong>game-winning fadeaway with 1.1 seconds left</strong> in the First Four and a dominant win over BYU — and is playing with the freedom of a team nobody expected to be here. <strong>Gonzaga</strong> survived Kennesaw State 73-64 but shot <strong>1-of-9 from three in the first half</strong> and looked nothing like a 3-seed. Texas has the #18 offense in KenPom. Gonzaga has the #1 defense. This is a classic March clash of styles.',
    cards: [
      {
        label: 'For Texas',
        value:
          'Two wins in four days — <strong>Mark\'s game-winner vs NC State</strong> and <strong>Vokietaitis\'s 21/14 vs BYU</strong>. An 11-seed in the Round of 32 with house-money energy and a coach (Sean Miller) who\'s been to five Sweet 16s and three Elite Eights. Nobody expected Texas to be here. That\'s exactly why they\'re dangerous.',
      },
      {
        label: 'For Gonzaga',
        value:
          'Mark Few\'s <strong>27th consecutive tournament</strong>. But the Bulldogs barely beat a 14-seed, shot 1-of-9 from three in the first half, and lost Saint-Supery to foul trouble. Without injured Braden Huff, the offense looks thin. Few is a two-time Hall of Fame finalist <strong>without a national championship</strong>. Every year the pressure builds.',
      },
      {
        label: 'The Fatigue Question',
        value:
          'Texas has played <strong>three games in five days</strong> (First Four Monday, BYU Thursday, Gonzaga Saturday). Gonzaga has played one game in three days. Fresh legs vs. momentum — which matters more? Watch Texas\'s energy in the second half.',
      },
      {
        label: 'Portland Is Gonzaga Country',
        value:
          'Moda Center is <strong>350 miles from Gonzaga\'s campus</strong> in Spokane. Portland is Gonzaga territory — the Bulldogs will have a massive crowd advantage, just as they did against Kennesaw State. Texas is 2,100 miles from Austin.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Elite Offense, Playing With House Money',
      bullets: [
        '<strong>KenPom #18 offense:</strong> The most efficient Texas offense in nearly 30 years — better than DJ Augustin\'s 2008 team. Score 83.3 PPG (30th nationally). Five legitimate scoring threats with Swain (17.7), Vokietaitis (15.5), Mark (13.6), Pope (13.1), and Heide\'s 46% from three.',
        '<strong>Tournament-tested:</strong> Vokietaitis dominated BYU with <strong>21 points and 14 rebounds</strong>. Mark hit the game-winner vs. NC State. Weaver posted his first career double-double in the First Four. This team is peaking at the right time.',
        '<strong>Interior strength:</strong> Vokietaitis (7-0, 62% FG) gives Texas a physical post presence few teams can match. Against BYU, Texas <strong>outrebounded them 40-31 with 16 offensive boards</strong>. They will attack Gonzaga inside.',
        '<strong>Ball security improved:</strong> Committed just <strong>9 turnovers against BYU</strong> — a season-best. Miller has hammered turnover discipline. Against Gonzaga\'s defense, limiting turnovers is survival.',
        '<strong>Defense still a weakness:</strong> Allow 76.5 PPG (253rd nationally). KenPom #95 defensively. Texas has been winning by outscoring opponents, not stopping them. Against the best defense in America, they need to defend too.',
      ],
    },
    {
      team: 'b',
      title: 'Best Defense in America — Offense in Question',
      bullets: [
        '<strong>#1 defense nationally:</strong> Gonzaga holds opponents to the best defensive rating in the country per Sports Reference. KenPom top-5 in adjusted defensive efficiency. The defense smothered Kennesaw State, holding them to 33% shooting in the first half.',
        '<strong>First-round red flags:</strong> Shot <strong>1-of-9 from three in the first half</strong> against Kennesaw State. Saint-Supery went 2-of-11 and fouled out. The offense looked soft — Few admitted: <em>"We weren\'t creating any advantages, we weren\'t getting the ball to the rim."</em>',
        '<strong>Graham Ike carries the load:</strong> WCC Player of the Year had 19 and 8 against Kennesaw State. He was essentially a one-man offense for stretches — 4-of-7 when the rest of the team was 1-of-15. Without Huff (dislocated kneecap), the interior depth is thin.',
        '<strong>Warley and Fogle stepped up:</strong> Jalen Warley\'s <strong>12-point, 12-rebound double-double</strong> and Davis Fogle\'s 17 points were bright spots. If they can sustain that production, Gonzaga\'s supporting cast has more to offer.',
        '<strong>Free throw lifeline:</strong> Gonzaga shot <strong>20-of-23 from the line</strong> (87%) vs. Kennesaw State. When the threes aren\'t falling, free throw shooting keeps them alive.',
      ],
    },
  ],
  keys: [
    {
      title: 'Gonzaga shot 1-of-9 from three against a 14-seed. Texas\'s offense is much better.',
      description:
        'Gonzaga\'s perimeter shooting disappeared against Kennesaw State — 1-of-9 in the first half, and Saint-Supery (their best shooter, 43.4% from three on the season) went 2-of-11 overall. Texas has the KenPom #18 offense with five scoring threats. If Gonzaga\'s shooting woes continue, they\'ll need their defense to produce a masterpiece — because Texas will score.',
    },
    {
      title: 'Vokietaitis dominated BYU inside. Can he do it to Gonzaga?',
      description:
        'The 7-foot Lithuanian had 21 points and 14 rebounds against BYU, shooting 60%. He\'s Texas\'s best weapon. But Gonzaga\'s interior defense is elite — and they held opponents to the best defensive rating in America all season. Without Huff, Ike will likely draw the Vokietaitis assignment. If Vokietaitis can get position and score inside, Texas controls the game. If Gonzaga\'s defense neutralizes him, Texas becomes a jump-shooting team.',
    },
    {
      title: 'Texas played three games in five days. Gonzaga played one.',
      description:
        'Texas beat NC State Monday, BYU Thursday, and now plays Saturday. That\'s three games in five days. Gonzaga has been resting since Thursday. Fatigue is real — especially in the second half of a physical, defensive game. Watch Texas\'s legs after the 15-minute mark of the second half. If they go on a scoring drought like the one that let BYU back in, Gonzaga\'s defense will punish it.',
    },
    {
      title: 'Can Texas limit turnovers against the best defense?',
      description:
        'Texas committed just 9 turnovers against BYU — their cleanest game of the season. But Gonzaga\'s defense is a universe beyond BYU\'s. Few\'s team forces mistakes through disciplined positioning and active hands. If Texas turns it over 15+ times, those become transition points for Gonzaga. If Texas can stay near single digits again, they can survive the defensive pressure and get shots up.',
    },
    {
      title: 'Saint-Supery fouled out against Kennesaw State. Can he stay on the floor?',
      description:
        'Mario Saint-Supery is Gonzaga\'s best perimeter shooter (43.4% from three) and a key offensive weapon — but he fouled out against a 14-seed and shot 2-of-11. If he picks up early fouls against Texas, Gonzaga loses their floor-spacing threat and their offense becomes one-dimensional through Ike. Keeping Saint-Supery on the court and in rhythm is Gonzaga\'s most important task.',
    },
  ],
  players: [
    {
      team: 'a',
      name: 'Dailyn Swain',
      stats: '17.7 PPG • 7.6 RPG • 3.4 APG • .543 FG%',
      meta: 'F • 6-7 • Junior • SEC Newcomer of the Year • Projected 1st-Round Pick',
      bio: 'From Columbus, Ohio. Followed Sean Miller from Xavier to Texas. The <strong>only player in a major conference to lead his team in points, rebounds, assists, steals, and minutes</strong>. Named SEC Newcomer of the Year — the first Texas player to earn that honor. Scored 14 against BYU and 13 in the First Four. A potential lottery pick playing the best basketball of his career.<br><a href="https://texaslonghorns.com/news/2026/3/9/mens-basketball-swain-named-sec-mens-basketball-newcomer-of-the-year" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Matas Vokietaitis',
      stats: '15.5 PPG • 6.9 RPG • .620 FG%',
      meta: 'C • 7-0 • Sophomore • Marijampole, Lithuania • FAU Transfer',
      bio: 'The tournament\'s breakout star. The 7-footer from Lithuania — whose mother played basketball for Lithuania\'s national age-group teams — <strong>dominated BYU with 21 points and 14 rebounds</strong>. AAC Freshman of the Year at Florida Atlantic before transferring to Texas. Shoots 62% from the field. His interior game gives Texas something no other 11-seed has — a dominant post presence. Free throw shooting (.691) is the one weakness to exploit.',
    },
    {
      team: 'a',
      name: 'Tramon Mark',
      stats: '13.6 PPG • .471 FG% • Game-Winner vs NC State',
      meta: 'G • 6-5 • 6th-Year Senior • Dickinson, TX • Houston Final Four Veteran',
      bio: 'The ultimate veteran. From Dickinson, Texas. Has played at <strong>Houston (2021 Final Four, 2023 Sweet 16), Arkansas, and now Texas</strong> — 136+ career games, 1,507+ career points, six years of college basketball. Hit the <strong>game-winning 19-foot fadeaway with 1.1 seconds left</strong> to beat NC State in the First Four. Then scored 15 vs. BYU. The man for the moment.',
    },
    {
      team: 'a',
      name: 'Jordan Pope',
      stats: '13.1 PPG • .371 3PT • .840 FT%',
      meta: 'G • 6-2 • Senior • Napa, CA • Oregon State Transfer',
      bio: 'From Napa, California, via Prolific Prep. Earned Pac-12 All-Freshman Team at Oregon State (12.6 PPG), averaged 17.6 as a sophomore. Provides reliable outside shooting and secondary ball-handling. His three-point shooting spaces the floor for Vokietaitis\'s interior game.',
    },
    {
      team: 'b',
      name: 'Graham Ike',
      stats: '19 pts, 8 reb vs KSU • WCC Player of the Year',
      meta: 'F • Senior • Wyoming/Gonzaga',
      bio: 'The WCC Player of the Year was essentially <strong>a one-man offense</strong> against Kennesaw State — at one point he was 4-of-7 while the rest of the team was 1-of-15. Had 19 and 8 in the first round. Transferred from Wyoming, where he averaged 19.5 PPG. Without injured Braden Huff, Ike carries the interior load. His matchup with Vokietaitis is the game within the game.',
    },
    {
      team: 'b',
      name: 'Davis Fogle',
      stats: '17 pts vs KSU • 6-13 FG',
      meta: 'G • Freshman • Tournament Debut',
      bio: 'Broke out in his <strong>NCAA Tournament debut with 17 points</strong> against Kennesaw State, including a clutch three-pointer to close the first half. The freshman gives Gonzaga a second scoring option they desperately need with Huff out and Saint-Supery struggling. If he can sustain this production, Gonzaga\'s ceiling rises significantly.',
    },
    {
      team: 'b',
      name: 'Jalen Warley',
      stats: '12 pts, 12 reb, 5 ast vs KSU',
      meta: 'G • Senior • FSU Transfer • Defensive Versatility',
      bio: 'The Florida State transfer posted a <strong>12-point, 12-rebound double-double with 5 assists</strong> against Kennesaw State — an all-around performance that stabilized Gonzaga. A switchable defender who can guard multiple positions. His versatility is critical against Texas\'s multi-dimensional offense.',
    },
    {
      team: 'b',
      name: 'Mario Saint-Supery',
      stats: '43.4% 3PT season • 2-of-11 vs KSU',
      meta: 'G • Freshman • France • Gonzaga\'s Best Shooter',
      bio: 'The French freshman shoots 43.4% from three on the season — Gonzaga\'s best perimeter weapon. But he had a <strong>nightmare against Kennesaw State: 2-of-11 from the field and fouled out</strong>. If he\'s in foul trouble again against Texas, Gonzaga loses their floor-spacing threat. Gonzaga needs the real Saint-Supery to show up.',
    },
  ],
  funFacts: [
    {
      emoji: '🐂',
      title: 'Bevo the Longhorn (Texas)',
      body: 'Texas\'s live mascot <strong>Bevo</strong> is a Texas Longhorn steer who has served as mascot since 1916. Legend says A&M cadets branded "13-0" on the original steer, and UT students rearranged it to read "BEVO." The <strong>Silver Spurs</strong> student organization has cared for Bevo since 1945.',
    },
    {
      emoji: '🐕',
      title: 'Spike the Bulldog (Gonzaga)',
      body: 'Gonzaga\'s mascot is a <strong>bulldog named Spike</strong>. The school was nearly called the "Wolves" or "Wolves Pack" before settling on Bulldogs. The costumed mascot is one of the most recognized in college basketball thanks to Gonzaga\'s 27 consecutive tournament appearances.',
    },
    {
      emoji: '🏀',
      title: 'Kevin Durant\'s One Season (Texas)',
      body: '<strong>Kevin Durant</strong> played one season at Texas (2006-07), becoming the <strong>first freshman to win a national player of the year award</strong>. Texas went 25-10 but lost in the second round — Durant scored 30 in his final college game. He was drafted #2 overall.',
    },
    {
      emoji: '🏔️',
      title: '27 Straight Tournaments (Gonzaga)',
      body: 'Gonzaga has made <strong>27 consecutive NCAA Tournaments</strong> — the second-longest active streak behind Kansas (36). For a school with 5,500 undergrads in Spokane, Washington, the sustained excellence under Mark Few is one of the most remarkable stories in sports.',
    },
    {
      emoji: '🎯',
      title: 'The Game-Winner (Texas)',
      body: 'Tramon Mark hit a <strong>19-foot fadeaway with 1.1 seconds left</strong> to beat NC State 68-66 in the First Four. Both teams had lost 5 of their last 6 entering the game. Mark is in his <strong>sixth year of college basketball</strong> — this is the shot he\'s been waiting for.',
    },
    {
      emoji: '😰',
      title: '1-of-9 from Three (Gonzaga)',
      body: 'Gonzaga shot <strong>1-of-9 from three in the first half</strong> against 14-seed Kennesaw State. Their best shooter, Saint-Supery, went 2-of-11 and fouled out. Few admitted the offense was <em>"really soft."</em> Against Texas\'s KenPom #18 offense, Gonzaga can\'t afford another shooting disappearance.',
    },
    {
      emoji: '🇱🇹',
      title: 'Lithuanian Basketball Dynasty (Texas)',
      body: '<strong>Matas Vokietaitis</strong> is from Marijampole, Lithuania. His mother played for Lithuania\'s national age-group basketball teams. He had <strong>21 points and 14 rebounds</strong> against BYU — the best game by a Texas big man in years.',
    },
    {
      emoji: '🎓',
      title: 'Texas Alumni Hall of Fame',
      body: 'Texas alumni include <strong>Kevin Durant</strong>, <strong>Matthew McConaughey</strong> (UT\'s "Minister of Culture"), <strong>Lady Bird Johnson</strong>, <strong>Walter Cronkite</strong>, <strong>Admiral William McRaven</strong> (organized the bin Laden raid), and <strong>Alan Bean</strong> (4th person on the Moon).',
    },
    {
      emoji: '🏆',
      title: 'Few\'s Missing Trophy (Gonzaga)',
      body: 'Mark Few is a <strong>two-time Hall of Fame finalist</strong> with 700+ wins — but he\'s never won a national championship. His closest call: <strong>2021 Final</strong>, when Gonzaga entered 31-0 and lost to Baylor. At 63, retirement speculation lingers. This could be one of his last chances.',
    },
    {
      emoji: '👨‍👦',
      title: 'The Miller Brothers (Texas)',
      body: 'Texas coach <strong>Sean Miller\'s</strong> brother <strong>Archie Miller</strong> is head coach at Rhode Island. Their father John was a legendary Pennsylvania high school basketball coach. Sean played at Pitt, produced 27 NBA players, and was cleared of the Arizona scandal before taking the Texas job.',
    },
    {
      emoji: '🏠',
      title: 'Houston to Arkansas to Texas (Mark\'s Journey)',
      body: '<strong>Tramon Mark</strong> has played at three schools: Houston (2021 Final Four), Arkansas, and Texas. He\'s from Dickinson, TX — 30 minutes from Houston\'s campus. Now in his <strong>sixth year of college basketball</strong> with 136+ games and 1,507+ career points. The ultimate journeyman.',
    },
    {
      emoji: '🇫🇷',
      title: 'The French Freshman (Gonzaga)',
      body: '<strong>Mario Saint-Supery</strong> is a French freshman who shoots 43.4% from three. He had a nightmare first-round game (2-of-11, fouled out), but when he\'s on, he transforms Gonzaga\'s offense with elite floor-spacing.',
    },
  ],
  history: {
    callout:
      'Both programs are trying to break through. <strong>Texas</strong> has 39 tournament appearances but hasn\'t reached the Final Four since 2003. <strong>Gonzaga</strong> has been to the title game twice (2017, 2021) but has never won it. Both coaches are chasing validation — Miller at a new school, Few without a championship.',
    subsections: [
      {
        title: 'Texas: Talent Without a Title',
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '2003 — Last Final Four',
            text: 'T.J. Ford (National Player of the Year) led Texas to the <strong>Final Four</strong>. Lost to Syracuse. Texas hasn\'t been back in 23 years.',
          },
          {
            date: '2006-07 — Kevin Durant',
            text: '<strong>Kevin Durant\'s iconic freshman season</strong>. First freshman national player of the year. Drafted #2 overall. But Texas lost in the second round.',
          },
          {
            date: '2023 — Elite Eight',
            text: 'Under interim coach Rodney Terry (after Chris Beard\'s firing), Texas beat Colgate, Penn State, and Xavier to reach the <strong>Elite Eight</strong> — best run in 20 years.',
          },
          {
            date: '2026 — The Cinderella Run',
            text: 'An 11-seed in the First Four, Texas won on <strong>Mark\'s game-winner</strong> and <strong>Vokietaitis\'s 21/14</strong>. Now they\'re two wins from the Sweet 16.',
          },
        ],
      },
      {
        title: 'Gonzaga: From Unknown to Dynasty',
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '1999 — The Cinderella Run',
            text: 'A tiny Jesuit school from Spokane reached the <strong>Elite Eight as a 10-seed</strong>. It was the beginning of the Gonzaga phenomenon.',
          },
          {
            date: '2017 — The Championship Game',
            text: 'Gonzaga reached the <strong>national championship game</strong> for the first time. Lost to North Carolina 71-65 on a last-second shot.',
          },
          {
            date: '2021 — 31-0... Then Baylor',
            text: 'Gonzaga entered the title game <strong>31-0</strong>. Baylor won 86-70. The undefeated dream died. Few\'s closest call for a championship.',
          },
          {
            date: '2026 — 27th Straight Tournament',
            text: 'The streak continues. 31-3 record. But Huff is injured, the offense is sputtering, and the <strong>Portland crowd can\'t make up for the shooting woes</strong>.',
          },
        ],
      },
      {
        title: 'Sean Miller\'s Coaching Journey',
        type: 'card',
        content:
          '<p>Sean Miller\'s career has been a roller coaster. He built <strong>Xavier into a national contender</strong> (Elite Eight 2008), then did the same at <strong>Arizona</strong> (five Sweet 16s, three Elite Eights). But the 2017 federal investigation into college basketball corruption nearly ended his career — he was dismissed from Arizona in 2021 before being <strong>cleared of personal violations</strong>. He rebuilt at Xavier, then took the Texas job in March 2025. In his first year, he\'s already taken a flawed 11-seed roster to the Round of 32. His career record: <strong>487-196 (.713)</strong>. He\'s produced 27 NBA players. Now he faces another Hall of Fame-caliber coach in Mark Few — and a chance to prove the doubters wrong.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Texas',
      links: [
        { label: 'Sports Reference — 2025-26 Texas Stats', url: 'https://www.sports-reference.com/cbb/schools/texas/men/2026.html' },
        { label: 'ESPN — Mark Sends Texas Past NC State', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48236667/mark-sends-texas-nc-state-ncaa-tournament-first-four' },
        { label: 'On3 — Sean Miller Postgame After BYU', url: 'https://www.on3.com/teams/texas-longhorns/news/everything-sean-miller-said-after-round-of-64-win-against-byu/' },
        { label: 'Texas Athletics — Swain SEC Newcomer of the Year', url: 'https://texaslonghorns.com/news/2026/3/9/mens-basketball-swain-named-sec-mens-basketball-newcomer-of-the-year' },
        { label: 'Texas Athletics — Mark\'s Game-Winner vs NC State', url: 'https://texaslonghorns.com/news/2026/3/18/marks-game-winner-leads-mens-basketball-past-nc-state-68-66-in-ncaa-first-four' },
        { label: 'SI — Dailyn Swain NBA Future', url: 'https://www.si.com/college/texas/basketball/texas-longhorns-dailyn-swain-addresses-nba-future-before-march-madness' },
        { label: 'SI — Texas March Madness History', url: 'https://www.si.com/college/texas/basketball/texas-longhorns-march-madness-history-record-final-four-appearances-highlights' },
        { label: '247Sports — Texas Earns NCAA Bid', url: 'https://247sports.com/college/texas/article/texas-basketball-earns-an-ncaa-tournament-bid-heading-to-the-first-four-for-the-second-consecutive-season-277815494/' },
        { label: 'Wikipedia — Sean Miller', url: 'https://en.wikipedia.org/wiki/Sean_Miller' },
        { label: 'Wikipedia — University of Texas', url: 'https://en.wikipedia.org/wiki/University_of_Texas_at_Austin' },
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
        { label: 'Gonzaga Athletics — WCC Tournament Championship', url: 'https://gozags.com/news/2026/3/10/mens-basketball-no-12-gonzaga-beats-santa-clara-79-68-to-win-the-wcc-tournament.aspx' },
        { label: 'Wikipedia — Mark Few', url: 'https://en.wikipedia.org/wiki/Mark_Few' },
        { label: 'Gonzaga — 1999 Tournament Run', url: 'https://www.gonzaga.edu/news-events/stories/2019/3/20/remembering-1999-beginning-of-20-year-ncaa-tournament-run' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Texas vs Gonzaga • NCAA Round of 32 • March 21, 2026',
}

export default game
