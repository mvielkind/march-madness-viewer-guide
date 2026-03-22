import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'vanderbilt-vs-nebraska-2026',
  title: 'Vanderbilt vs Nebraska — Round of 32 Viewing Guide',
  eventTag: 'NCAA Tournament • Round of 32 • Oklahoma City, OK',
  date: 'Saturday, March 21, 2026',
  round: 'Round of 32',
  tipTime: '2026-03-21T14:00',
  venue: 'Paycom Center, Oklahoma City, OK • 2:00 PM CT • TNT',
  extraInfo: 'Winner advances to the <strong>Sweet 16</strong> to face <strong>#1 Florida or #8 Hofstra</strong>',
  teams: [
    {
      name: 'Vanderbilt',
      mascot: 'Commodores',
      seed: '#5 Seed',
      record: '27-8 • Beat McNeese 78-68',
      colors: { primary: '#866D4B', secondary: '#000000', name: 'vanderbilt' },
      className: 'vanderbilt',
      logoUrl: 'https://a.espncdn.com/i/teamlogos/ncaa/500/238.png',
    },
    {
      name: 'Nebraska',
      mascot: 'Cornhuskers',
      seed: '#4 Seed',
      record: '27-6 • Beat Troy 76-47',
      colors: { primary: '#E41C38', secondary: '#F5F1E7', name: 'nebraska' },
      className: 'nebraska',
      logoUrl: 'https://a.espncdn.com/i/teamlogos/ncaa/500/158.png',
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
      'Two programs that just broke long tournament droughts — and both want more. <strong>Vanderbilt</strong> won its first NCAA Tournament game since <strong>2012</strong>, with Tyler Tanner scoring 26. <strong>Nebraska</strong> won its <strong>first tournament game EVER</strong> — after going 0-8 across 39 years — and Fred Hoiberg cried on the podium thinking of his father. Now they face each other for a Sweet 16 berth. Two feel-good stories. Only one survives.',
    cards: [
      {
        label: 'For Vanderbilt',
        value:
          'First tournament win since <strong>2012</strong>. Tanner scored 26, McGlockton went 6-of-6, and the Commodores shot 51% against McNeese. A Sweet 16 would be Vanderbilt\'s first since <strong>2007</strong> — and only the second in program history. Byington is building something special at the SEC\'s only private school.',
      },
      {
        label: 'For Nebraska',
        value:
          '<strong>First NCAA Tournament win in program history.</strong> They\'d gone 0-8 across 39 years. Sandfort hit 7 threes (23 points), they forced 17 turnovers, and won 76-47. Hoiberg choked up: <em>"I think of my dad, who\'s in a home right now. I hope he got a chance to watch."</em> A Sweet 16 would be uncharted territory.',
      },
      {
        label: 'Two Turnaround Stories',
        value:
          'Vanderbilt went from an 8-year tournament drought to back-to-back bids under Byington. Nebraska went from <strong>7-25 in Hoiberg\'s first year to 27-6</strong> and the program\'s highest seed since 1991. Both coaches rebuilt through the portal and patience. This is a celebration of program-building.',
      },
      {
        label: 'Style Clash',
        value:
          'Vanderbilt runs the <strong>Mike D\'Antoni offense</strong> — up-tempo, spacing, 86.4 PPG. Nebraska plays <strong>elite defense</strong> (66.2 PPG allowed, 22nd nationally) and grinds you down. Something has to give: Vanderbilt wants this in the 80s, Nebraska wants it in the 60s.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'D\'Antoni Ball in the SEC',
      bullets: [
        '<strong>Up-tempo firepower:</strong> 86.4 PPG (13th nationally) with an offensive rating of 121.1 (14th). Byington models his offense after Mike D\'Antoni\'s Suns — spacing, pace, and constant ball movement. Seven 100+ point games this season.',
        '<strong>First-round proof:</strong> Beat McNeese <strong>78-68</strong>, shooting 51% overall. Trailed 19-8 early before closing the half on a 22-9 run. Tanner had 26/7/5 and McGlockton went 6-of-6. Showed resilience after Byington said they had an "SEC Tournament hangover."',
        '<strong>Backcourt speed:</strong> Tanner (19.1 PPG, 2.44 SPG) and Miles (16.5 PPG) are one of the fastest backcourts in the country. Miles had 30/9/1 TO in the SEC Tournament semifinal demolition of #1 Florida.',
        '<strong>Steal-based pressure:</strong> 9th nationally in steal percentage (14.2%). Create turnovers through active hands and pressure — exactly what caused Nebraska problems during their late-season slide.',
        '<strong>Rebounding weakness:</strong> Outside top-175 in rebounding margin. Six of eight losses came when offensive rebounding dropped. Nebraska\'s physicality inside could exploit this.',
      ],
    },
    {
      team: 'b',
      title: 'Elite Defense, Three-Point Shooting, and History',
      bullets: [
        '<strong>Suffocating defense:</strong> Allow just <strong>66.2 PPG (22nd nationally)</strong>. KenPom adjusted defense top 7. Force opponents into contested shots and limit free throw attempts. Held Troy to <strong>28.3% shooting and 47 points</strong>.',
        '<strong>First-round dominance:</strong> Won <strong>76-47</strong> in the program\'s first-ever tournament victory. Sandfort hit 7 threes (23 points). Forced 17 turnovers while committing just 6. This was a statement that the late-season slide (6-6 in final 12) is over.',
        '<strong>Three-point identity:</strong> 51% of shots are threes (11th nationally). Sandfort (17.8 PPG, .401 3PT) is elite from deep. Sam Hoiberg runs the offense with a <strong>6.0:1 assist-to-turnover ratio</strong> (2nd nationally).',
        '<strong>Mast\'s comeback:</strong> Rienk Mast missed the entire 2024-25 season after knee surgery using <strong>cadaver cartilage</strong>. Returned after 575 days to score 31 in his first game back. Had 11/6/7 against Troy. Only the 3rd triple-double in Nebraska history earlier this season.',
        '<strong>The concern:</strong> After starting 20-0, Nebraska went <strong>6-6 in their last 12</strong> regular-season games. Physicality, free throw drawing, and turnovers were issues. Vanderbilt\'s pressure defense targets exactly those vulnerabilities.',
      ],
    },
  ],
  keys: [
    {
      title: 'Vanderbilt\'s steal-based pressure vs. Nebraska\'s ball security.',
      description:
        'Vanderbilt ranks 9th nationally in steal percentage. During Nebraska\'s late-season slide, turnovers increased by 2.2 per game. But against Troy, Nebraska committed just 6 turnovers while forcing 17 — their cleanest game of the season. Sam Hoiberg\'s 6.0:1 assist-to-turnover ratio (2nd nationally) is the key. If Vanderbilt can create 15+ turnovers, they get easy baskets in transition. If Hoiberg keeps the ball safe, Nebraska\'s defense takes over.',
    },
    {
      title: 'Can Nebraska\'s defense slow D\'Antoni Ball?',
      description:
        'Vanderbilt scores 86.4 PPG with D\'Antoni-style spacing and pace. Nebraska allows 66.2. The 20-point gap is the central tension. Nebraska\'s defense held Troy to 28.3% shooting — but McNeese isn\'t Vanderbilt. Tanner and Miles are faster and more skilled than anyone Nebraska saw in the Big Ten. If the game stays in the 60s, Nebraska wins. If Vanderbilt pushes it to 80+, the Commodores\' offensive firepower prevails.',
    },
    {
      title: 'Tanner scored 26 against McNeese. Nebraska\'s perimeter defense is much better.',
      description:
        'Tyler Tanner had 26/7/5 against McNeese on 7-of-16 shooting. But Nebraska\'s perimeter defense (Sam Hoiberg, All-Big Ten Defensive Team) is a different challenge. Hoiberg guards the opponent\'s best backcourt player every night. If he can contain Tanner — or at least make him work for every shot — Vanderbilt\'s offense loses its engine. Tanner has never faced a defense this disciplined.',
    },
    {
      title: 'Rebounding: Vanderbilt\'s Achilles\' heel, Nebraska\'s strength.',
      description:
        'Vanderbilt is outside the top-175 in rebounding margin and lost six of eight games when their offensive rebounding percentage dropped. Nebraska\'s Rienk Mast (6-10, 250) and Berke Buyuktuncel (6-9, 245) provide the physical interior presence Vanderbilt lacks. If Nebraska dominates the glass, Vanderbilt gets one shot per possession — and against the 22nd-best defense in America, one shot may not be enough.',
    },
    {
      title: 'Two emotional highs — which team channels it better?',
      description:
        'Both teams just experienced program-defining moments. Nebraska won its first tournament game ever — Hoiberg cried on the podium. Vanderbilt won for the first time since 2012 — Byington called it validation. The question is whether the emotional peak carries forward or creates a letdown. Nebraska\'s fans traveled in force to OKC (Sandfort called it "the best environment I\'ve ever played in"). Vanderbilt acknowledged it will feel like "basically a road game."',
    },
  ],
  prediction: {
    summary: 'This is a classic style clash: D\'Antoni Ball vs. elite defense. Vanderbilt wants to play in the 80s with pace, spacing, and Tanner-Miles running the show. Nebraska wants this in the 60s, grinding possessions and leaning on Sandfort\'s shooting and Mast\'s physicality. The key stat: Vanderbilt ranks 9th nationally in steal percentage, and Nebraska\'s late-season slide included a spike in turnovers. If Tanner and Miles can create chaos and push tempo, the Commodores\' offensive firepower (86.4 PPG) is tough to match. But Sam Hoiberg\'s 6.0:1 assist-to-turnover ratio suggests Nebraska won\'t give the ball away cheaply, and the Huskers\' rebounding advantage — Mast and Buyuktuncel are both 245+ pounds — could negate Vanderbilt\'s weak boards. This feels like a game that stays tight into the final 5 minutes.',
    phases: [
      {
        title: 'Opening 10 Minutes',
        description: 'Vanderbilt pushes pace from the opening tip. Miles attacks downhill and finds Nickel for a corner three. Tanner gets a steal and finishes in transition. Nebraska\'s defense bends but doesn\'t break — Sam Hoiberg calms things down, running deliberate half-court sets. Sandfort hits a three from the wing. Score: Vanderbilt 18, Nebraska 15. Tempo is in Vanderbilt\'s favor early.',
      },
      {
        title: 'Mid-First Half to Halftime',
        description: 'Nebraska settles in defensively. Hoiberg guards Tanner and makes him work for every touch. Mast bullies McGlockton inside for two baskets and 4 free throws. The pace slows to Nebraska\'s liking. Sandfort hits another three to give the Huskers a 2-point lead. Frager comes off the bench and drains a corner three. Halftime: Nebraska 34, Vanderbilt 32. The Huskers\' defense is winning the style battle.',
      },
      {
        title: 'Second Half — Vanderbilt\'s Offensive Explosion',
        description: 'Byington adjusts. Vanderbilt goes small, spaces the floor with four shooters, and lets Tanner go to work. He scores 10 in a 4-minute stretch — two threes and a pair of driving layups. Miles adds a floater. A 14-4 Vanderbilt run opens an 8-point lead. Nebraska\'s late-season closing problems flash — Sandfort misses two threes, and the offense goes stagnant.',
      },
      {
        title: 'Final 5 Minutes',
        description: 'Nebraska responds with what got them here: toughness. Mast hits a hook shot, Hoiberg threads a perfect bounce pass to Buyuktuncel for a layup, and Frager hits a transition three. The lead shrinks to 2. Tanner is fouled on a drive — hits both free throws. Sandfort answers with a deep three to cut it to 1 with 40 seconds left. Vanderbilt inbounds, Tanner runs down the clock, and hits a pull-up mid-ranger with 4 seconds left. Nebraska\'s final three rims out.',
      },
    ],
    projectedScore: {
      teamA: 72,
      teamB: 69,
      rationale: 'Vanderbilt\'s backcourt speed and Tanner\'s clutch shotmaking edge Nebraska in a tight, emotional game between two programs that have already made history this week.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Tyler Tanner',
      stats: '19.1 PPG • 5.1 APG • 2.44 SPG • 26 pts vs McNeese',
      meta: 'G • 6-0 • Sophomore • Brentwood, TN • First Team All-SEC',
      bio: 'The hometown kid from just outside Nashville. Both parents played D-I basketball at Rice. First SEC player in 30+ years to average 21/5.5/2 in conference games. Ranks <strong>10th nationally in steals</strong> (2.44/game). Scored <strong>26 points against McNeese</strong> (7-16 FG, 9-10 FT). A devout Christian with Scripture tattoos — he prays before every game: <em>"God, help people see You through me."</em> Projected late first-round NBA pick.<br><a href="https://sportsspectrum.com/sport/basketball/2026/02/24/tyler-tanner-spread-the-gospel-vanderbilt/" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Duke Miles',
      stats: '16.5 PPG • 4.5 APG • 30 pts vs #1 Florida',
      meta: 'G • 6-2 • Senior • 4th school (Troy → High Point → Oklahoma → Vanderbilt)',
      bio: 'The ultimate portal journeyman — his <strong>fourth school</strong> after initially committing to Virginia, then Texas A&M, before landing at Vanderbilt. At Oklahoma he shot 51.4% alongside lottery pick Jeremiah Fears. Had a <strong>historic SEC Tournament semifinal: 30 points, 9 assists, 1 turnover</strong> in a 91-74 demolition of #1 Florida. The big-game performer.',
    },
    {
      team: 'a',
      name: 'Tyler Nickel',
      stats: '13.5 PPG • 40.0% 3PT',
      meta: 'F • 6-7 • Junior • Virginia HS Scoring Legend',
      bio: 'The <strong>all-time leading scorer in Virginia High School League history</strong> with 2,909 points in 102 games. Transferred from Virginia Tech (via UNC). Career year at Vanderbilt — shooting 40.0% from three with a season-high 30 points (8 threes) in one game. The floor-spacing threat that opens up everything for Tanner and Miles.',
    },
    {
      team: 'a',
      name: 'Devin McGlockton',
      stats: '9.6 PPG • 6.7 RPG • .544 FG%',
      meta: 'F • 6-7 • Junior • BC Transfer • Interior Anchor',
      bio: 'Transferred from Boston College and became Vanderbilt\'s leading rebounder and most efficient interior scorer. Went <strong>6-of-6 from the field against McNeese</strong>. Tanner on McGlockton: <em>"I don\'t ever want to not be on his team anymore."</em> The toughness Vanderbilt needs against Nebraska\'s physical frontcourt.',
    },
    {
      team: 'b',
      name: 'Pryce Sandfort',
      stats: '17.8 PPG • .401 3PT • 23 pts vs Troy (7 threes)',
      meta: 'F • 6-7 • Junior • Iowa Transfer • First-Team All-Big Ten',
      bio: 'From Waukee, Iowa — named <strong>2023 Iowa Mr. Basketball</strong>. Brother Payton plays for the OKC Thunder. Transferred from Iowa and became Nebraska\'s best player. Hit <strong>7 threes for 23 points</strong> in the first-ever tournament win. Three 30-point games this season. <strong>6th nationally in threes per game (3.6)</strong>. Lute Olson Award finalist.<br><a href="https://huskers.com/sports/mens-basketball/roster/player/pryce-sandfort" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Rienk Mast',
      stats: '13.5 PPG • 5.8 RPG • 2.9 APG • 11/6/7 vs Troy',
      meta: 'F • 6-10, 250 • 6th-Year Senior • Netherlands • Comeback Story',
      bio: 'From Groningen, Netherlands. Switched from <strong>korfball to basketball</strong>. Played for the Dutch National Team. After 4 years at Bradley, transferred to Nebraska — then <strong>missed the entire 2024-25 season</strong> after knee surgery using <strong>cadaver cartilage</strong>. Returned after 575 days to score 31 in his first game back. Recorded the <strong>3rd triple-double in Nebraska history</strong> (18/12/10). The ultimate comeback story.<br><a href="https://hurrdatsports.com/hailvarsity/mens-basketball/rienk-mast-triple-double-leads-nebraska-mens-basketball-to-win-over-fiu/" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Sam Hoiberg',
      stats: '9.6 PPG • 5.3 RPG • 4.3 APG • 6.0:1 A/TO',
      meta: 'G • 6-0 • Senior • Coach\'s Son • Walk-On to Starter',
      bio: 'Son of head coach Fred Hoiberg. Joined Nebraska as a <strong>walk-on with ZERO Division I scholarship offers</strong>. Twin brother Charlie is a graduate manager. People questioned whether he earned his spot. Now he starts all 31 games, has a <strong>6.0:1 assist-to-turnover ratio (2nd nationally)</strong>, and made the All-Big Ten Defensive Team. Seth Davis named him captain of his "All-Glue Team." Had 9 rebounds and 4 assists in the Troy win.<br><a href="https://www.cnn.com/2026/03/13/sport/nebraska-basketball-march-madness" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Braden Frager',
      stats: '11.6 PPG • .490 FG% • Big Ten Sixth Man of the Year',
      meta: 'F • Redshirt Freshman • Lincoln, NE • Hometown Hero',
      bio: 'Grew up in Lincoln, Nebraska, <strong>watching Husker basketball from the rafters</strong>. Three-star recruit who chose Nebraska over Creighton. <strong>Big Ten Sixth Man of the Year</strong> — the first Nebraska player to win the award. Career-high 23 points (7 threes) vs. Oregon. Scored 13 off the bench against Troy. <em>"Football, basketball, everything. I was at a lot of the games"</em> — a lifelong Husker fan living the dream.',
    },
  ],
  funFacts: [
    {
      emoji: '😭',
      title: '"I Think of My Dad" (Nebraska)',
      body: 'After winning Nebraska\'s <strong>first-ever tournament game</strong> (0-8 across 39 years), Fred Hoiberg choked up at the podium: <em>"I think of my dad, who\'s in a home right now. I hope he got a chance to watch this one."</em> One of the most emotional moments of the tournament.',
    },
    {
      emoji: '🏛️',
      title: 'Benches on the Baseline (Vanderbilt)',
      body: 'Memorial Gymnasium is the <strong>only D-I arena with benches on the baselines</strong> instead of the sidelines. Built in 1952 and dedicated to WWII veterans, the court was designed as an elevated stage. Visiting teams find it uniquely disorienting.',
    },
    {
      emoji: '👨‍👦',
      title: 'Father Coaching Son (Nebraska)',
      body: 'Fred Hoiberg coaches his son <strong>Sam</strong> — a walk-on with <strong>zero D-I offers</strong> who now starts every game and has the 2nd-best assist-to-turnover ratio in America. Twin brother Charlie is a graduate manager. CNN: <em>"The Mayor and his son turned around Nebraska\'s basketball program."</em>',
    },
    {
      emoji: '💰',
      title: 'Named for a Railroad Baron (Vanderbilt)',
      body: 'Vanderbilt University was founded in 1873 with a <strong>$1 million gift from Cornelius Vanderbilt</strong> — at the time the richest man in America. The "Commodores" nickname comes from his title as a steamboat and railroad magnate. He never visited Nashville.',
    },
    {
      emoji: '🏈',
      title: 'Football School Goes Basketball Crazy (Nebraska)',
      body: 'Nebraska has <strong>five football national championships</strong> and basketball was always the stepchild. But Pinnacle Bank Arena has been <strong>top 25 nationally in attendance for 11 straight years</strong>. A 93-year-old season ticketholder has held seats since 1976. Hoiberg: <em>"Nebraska is a very unique place; people show up no matter what."</em>',
    },
    {
      emoji: '🏥',
      title: 'Cadaver Cartilage Comeback (Nebraska)',
      body: '<strong>Rienk Mast</strong> missed the entire 2024-25 season after knee surgery using <strong>cadaver cartilage</strong>. He was on crutches for months. Returned after 575 days to score <strong>31 points in his first game back</strong>. Then recorded only the 3rd triple-double in Nebraska history.',
    },
    {
      emoji: '🔥',
      title: '30/9/1 TO Against #1 Florida (Vanderbilt)',
      body: 'Duke Miles had one of the most dominant tournament-week performances in SEC history: <strong>30 points, 9 assists, and 1 turnover</strong> in a 91-74 SEC Tournament semifinal demolition of No. 1 Florida. He\'s been at four schools. Vanderbilt is where he became a star.',
    },
    {
      emoji: '🇳🇱',
      title: 'From Korfball to Basketball (Nebraska)',
      body: '<strong>Rienk Mast</strong> is from Groningen, Netherlands, and originally played <strong>korfball</strong> (a Dutch mixed-gender team sport) before switching to basketball. He played for the Dutch National Team and now he\'s a 6-10, 250-pound forward in the Round of 32.',
    },
    {
      emoji: '🎓',
      title: 'The Smartest School in the SEC (Vanderbilt)',
      body: 'Vanderbilt is ranked <strong>No. 17 nationally by US News</strong> — the only private university in the SEC. Nine Nobel Prize winners, 2 Vice Presidents, 2 Supreme Court Justices, and 27 Rhodes Scholars. Building a basketball contender here is uniquely difficult.',
    },
    {
      emoji: '🏀',
      title: '"The Mayor" (Nebraska)',
      body: 'Fred Hoiberg got his nickname "The Mayor" because he received <strong>several write-in votes during the 1993 Ames, Iowa mayoral race</strong> while playing at Iowa State. He\'s Iowa Mr. Basketball, a 10-year NBA vet, and has had <strong>two open-heart surgeries</strong>. He may cry again Saturday.',
    },
    {
      emoji: '🏆',
      title: 'Warren Buffett vs. Cornelius Vanderbilt',
      body: '<strong>Nebraska\'s</strong> most famous alum: <strong>Warren Buffett</strong> (CEO of Berkshire Hathaway). <strong>Vanderbilt\'s</strong> namesake: <strong>Cornelius Vanderbilt</strong> (once the richest man in America). Combined net worth at peak: roughly $400 billion in today\'s dollars. This is the richest Round of 32 matchup ever.',
    },
    {
      emoji: '🇹🇷',
      title: 'Beat the USA (Nebraska)',
      body: '<strong>Berke Buyuktuncel</strong> from Turkey led his country to 3rd place at the 2023 FIBA U19 World Cup — including an <strong>84-70 win over the United States</strong>. He made his Turkish senior national team debut at 18. Nebraska\'s roster features players from 12 different nations.',
    },
  ],
  history: {
    callout:
      'Both programs just made history — and now they face each other. <strong>Nebraska</strong> won its first NCAA Tournament game EVER after going 0-8 across 39 years. <strong>Vanderbilt</strong> won for the first time since 2012. Neither program has reached the Sweet 16 in over a decade. Only one gets there Saturday.',
    subsections: [
      {
        title: 'Nebraska: 0-8 No More',
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '1987-1998 — Five Tournament Trips, Zero Wins',
            text: 'Nebraska made five tournaments under Danny Nee. <strong>Lost all five.</strong> Including a devastating 1991 upset as a 3-seed to 14-seed Xavier.',
          },
          {
            date: '2014 — The 16-Year Wait',
            text: 'Nebraska returned to the tournament after 16 years. <strong>Lost to Baylor.</strong> The 0-for streak continued.',
          },
          {
            date: '2024 — Hoiberg\'s First Dance',
            text: 'Nebraska made the tournament as an 8-seed. <strong>Lost to Texas A&M 98-83.</strong> Still 0-8 all-time.',
          },
          {
            date: '2026 — Finally.',
            text: '<strong>Nebraska 76, Troy 47.</strong> Sandfort hit 7 threes. Hoiberg cried at the podium. The only power conference team to never win a tournament game — no more.',
          },
        ],
      },
      {
        title: 'Vanderbilt: The SEC\'s Private School Underdog',
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '2004-07 — Kevin Stallings\' Peak',
            text: 'Vanderbilt\'s best stretch — back-to-back Sweet 16s in 2004 and 2007. The program\'s high-water mark.',
          },
          {
            date: '2012 — Last Tournament Win',
            text: 'The last time Vanderbilt won an NCAA Tournament game. A 14-year drought followed.',
          },
          {
            date: '2017-2024 — The Wilderness',
            text: 'Eight years without a tournament appearance. The program bottomed out under multiple coaches.',
          },
          {
            date: '2025-26 — Byington\'s Renaissance',
            text: 'Back-to-back tournament bids, 26 wins (school record), SEC Tournament finalist, and <strong>Tanner\'s 26-point first-round win</strong>. Vanderbilt is back.',
          },
        ],
      },
      {
        title: 'The Hoiberg Family Story',
        type: 'card',
        content:
          '<p>Fred Hoiberg\'s path to this moment spans decades of triumph and adversity. "The Mayor" of Ames, Iowa — who got write-in votes for mayor during a college election — played 10 years in the NBA before <strong>two open-heart surgeries</strong> forced his retirement. He rebuilt Iowa State (four straight tournaments), was fired by the Chicago Bulls, and went <strong>7-25 in his first year at Nebraska</strong>. Now, in Year 7, he\'s coaching alongside his son Sam — a walk-on with zero scholarship offers who became a starter. Sam\'s twin brother Charlie is a graduate manager. After beating Troy for the program\'s first tournament win ever, Fred choked up: <em>"I think of my dad, who\'s in a home right now. I hope he got a chance to watch."</em></p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Vanderbilt',
      links: [
        { label: 'Sports Reference — 2025-26 Vanderbilt Stats', url: 'https://www.sports-reference.com/cbb/schools/vanderbilt/men/2026.html' },
        { label: 'Rutherford Source — Vanderbilt No. 5 Seed', url: 'https://rutherfordsource.com/vanderbilt-mens-basketball-earns-no-5-seed-in-2026-ncaa-tournament/' },
        { label: 'SI — Don\'t Take What Byington Is Doing For Granted', url: 'https://www.si.com/college/vanderbilt/basketball/don-t-take-what-vanderbilt-basketball-mark-byington-are-doing-these-days-for-granted-column' },
        { label: 'Sports Spectrum — Tyler Tanner Profile', url: 'https://sportsspectrum.com/sport/basketball/2026/02/24/tyler-tanner-spread-the-gospel-vanderbilt/' },
        { label: 'Vanderbilt Hustler — Tanner: Home Is Where the Heart Is', url: 'https://vanderbilthustler.com/2026/01/11/tyler-tanner-home-is-where-the-heart-is/' },
        { label: 'SI — McGlockton\'s Under the Radar Rise', url: 'https://www.si.com/college/vanderbilt/basketball/story-of-my-life-inside-devin-mcglockton-s-under-the-radar-rise' },
        { label: 'VU Commodores — Memorial Gymnasium', url: 'https://vucommodores.com/facilities/historic-memorial-gymnasium/' },
        { label: 'Wikipedia — Vanderbilt Basketball', url: 'https://en.wikipedia.org/wiki/Vanderbilt_Commodores_men%27s_basketball' },
      ],
    },
    {
      heading: 'Nebraska',
      links: [
        { label: 'Sports Reference — 2025-26 Nebraska Stats', url: 'https://www.sports-reference.com/cbb/schools/nebraska/men/2026.html' },
        { label: 'Huskers — NCAA Tournament Selection', url: 'https://huskers.com/news/2026/03/15/huskers-selected-for-ncaa-tournament-travel-to-okc-to-face-troy-on-thursday' },
        { label: 'NBC News — Never Won a Tournament Game', url: 'https://www.nbcnews.com/sports/college-basketball/never-won-ncaa-tournament-game-ninth-time-charm-rcna263033' },
        { label: 'CNN — The Mayor and His Son', url: 'https://www.cnn.com/2026/03/13/sport/nebraska-basketball-march-madness' },
        { label: 'SI — Where Nebraska Needs to Be Better', url: 'https://www.si.com/college/nebraska/basketball/where-nebraska-needs-to-be-better-for-an-ncaa-tournament-run-2026' },
        { label: 'SI — Hoiberg\'s All-Time Tournament Record', url: 'https://www.si.com/college/nebraska/basketball/fred-hoiberg-s-all-time-ncaa-tournament-record-and-best-finishes-2026' },
        { label: 'Husker Extra — Hoiberg Heart Surgery Journey', url: 'https://huskerextra.com/news/basketball/mens-basketball/fred-hoiberg-heart-surgery-journey/article_4fde4f6e-e145-419e-939c-58239bafbc00.html' },
        { label: 'SI — Nebraska Extends Hoiberg', url: 'https://www.si.com/college-basketball/nebraska-extends-fred-hoiberg-contract' },
        { label: 'Wikipedia — Fred Hoiberg', url: 'https://en.wikipedia.org/wiki/Fred_Hoiberg' },
        { label: 'Wikipedia — Nebraska Basketball', url: 'https://en.wikipedia.org/wiki/Nebraska_Cornhuskers_men%27s_basketball' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Vanderbilt vs Nebraska • NCAA Round of 32 • March 21, 2026',
}

export default game
