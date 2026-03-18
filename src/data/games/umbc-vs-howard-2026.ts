import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'umbc-vs-howard-2026',
  title: 'UMBC vs Howard — First Four Viewing Guide',
  eventTag: 'NCAA Tournament • First Four • Dayton, OH',
  date: 'Tuesday, March 17, 2026',
  round: 'First Four',
  tipTime: '2026-03-17T18:40',
  venue: 'UD Arena, Dayton, Ohio',
  extraInfo: 'Winner faces <strong>#1 Michigan</strong> in Buffalo, NY',
  teams: [
    {
      name: 'UMBC',
      mascot: 'Retrievers',
      seed: '#16 Seed',
      record: '24-8 • America East Champs',
      colors: { primary: '#F7B538', secondary: '#1a1a1a', name: 'umbc' },
      className: 'umbc',
    },
    {
      name: 'Howard',
      mascot: 'Bison',
      seed: '#16 Seed',
      record: '23-10 • MEAC Champs',
      colors: { primary: '#003A63', secondary: '#E51937', name: 'howard' },
      className: 'howard',
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
      'So here\'s the setup: two conference champs, both 16-seeds, playing for the right to face #1 Michigan. You\'ve got <strong>the program that pulled off the greatest upset in tournament history</strong> against <strong>one of the most culturally important universities in the country</strong>. Both have a real case for best mid-major story of the year. This one is worth your time.',
    cards: [
      {
        label: 'For UMBC',
        value:
          'It\'s been eight years since they became the <em>first</em> 16-seed to knock off a 1-seed. Now they\'re back as a 16 again — with Michigan waiting on the other side.',
      },
      {
        label: 'For Howard',
        value:
          'Howard is <strong>0-4 all-time</strong> in the NCAA Tournament. Getting that first win would be a huge deal for the program and for HBCU basketball as a whole.',
      },
      {
        label: 'Cinderella Watch',
        value:
          'Here\'s what makes Howard dangerous: their defense ranks <strong>14th nationally</strong> in adjusted efficiency. That\'s not a mid-major stat. That\'s a "can hang with anyone" stat.',
      },
      {
        label: 'The Prize',
        value:
          'Winner gets <strong>#1 Michigan</strong> in Buffalo. If either team pulls that off? Instant biggest story of March.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Guard-Driven Scoring Machine',
      bullets: [
        '<strong>Offense:</strong> Three guards who can all create their own shot. Really good in the mid-range — <strong>94th percentile</strong> in non-rim paint twos. All three primary guards are in the 78th percentile or better for unassisted threes, so they don\'t need plays run for them to score.',
        '<strong>Three-point shooting:</strong> They\'re 17-1 when shooting 37%+ from deep, and they shot 43.6% from three over their last four regular-season games. One thing to watch: they love the left wing at 41.1% efficiency.',
        '<strong>Defense:</strong> This is where it gets interesting. Once Coach Ferry inserted Jose Roberto Tanchyn into the starting lineup on Jan 15, the defense completely transformed. Now <strong>29th nationally</strong> in opponent PPG (67.0) and 27th in defensive rebounding.',
        '<strong>Tempo:</strong> Not a run-and-gun team. They play at a moderate pace (76.2 PPG) and are pretty methodical about finding quality looks.',
        '<strong>Weakness:</strong> Offensive rebounding is a problem (340th nationally). Plus their schedule strength is 365th in the country — they haven\'t played a top-200 team since December. That gap in competition is the big question mark.',
      ],
    },
    {
      team: 'b',
      title: 'Defense-First Grinders',
      bullets: [
        '<strong>Defense is the identity:</strong> Their 96.5 adjusted defensive efficiency ranks <strong>14th nationally</strong>. Regardless of conference, that\'s elite. They hold opponents to 67.8 PPG (39th nationally).',
        '<strong>Offense:</strong> Pretty balanced — 77.5 PPG with regularly four-plus players in double figures. They spread the ball around instead of relying on one guy to bail them out.',
        '<strong>Size at guard:</strong> Harris (6\'4") and Taylor (6\'7") give them a real advantage. They can switch on defense and post up smaller guards on offense. That length causes problems.',
        '<strong>Clutch factor:</strong> This team has been in big moments and delivered. Cam Gillus went 6-of-7 from the line to seal the MEAC title. They don\'t fold.',
        '<strong>Weakness:</strong> Offensive efficiency (110.4 adjusted) is solid but not great. If the defense has an off night, the offense probably can\'t compensate.',
      ],
    },
  ],
  keys: [
    {
      title: "UMBC's shooting vs Howard's defense.",
      description:
        "This is basically the whole game. UMBC is 17-1 when they shoot 37%+ from three. Howard's defense is elite. Something has to give, and whichever side wins this matchup probably wins the game.",
    },
    {
      title: "Can UMBC handle Howard's length?",
      description:
        "UMBC's guards are really good at creating their own shots, but Howard's backcourt — Taylor at 6'7\", Harris at 6'4\" — can contest and alter those looks in ways America East opponents just couldn't. Plus UMBC's schedule (365th SOS) means they haven't seen this kind of athleticism in a while.",
    },
    {
      title: 'The Tanchyn Factor.',
      description:
        'UMBC is 10.5 adjusted points per 100 possessions better with Tanchyn on the floor. That\'s a massive swing. If he stays out of foul trouble and controls the paint, UMBC\'s defense holds up. If he picks up early fouls? Things could unravel pretty quickly.',
    },
    {
      title: 'Free throws and composure late.',
      description:
        "Both teams have been in pressure spots this year (UMBC swept the AE tourney; Howard has 3 MEAC titles in 4 years). In a game between two evenly matched 16-seeds, crunch-time execution is going to be the difference. Edge to Howard here — Cam Gillus is a proven closer.",
    },
    {
      title: 'Second chances on the glass.',
      description:
        "UMBC ranks 340th nationally in offensive rebounding. So if Howard's defense forces misses — and it will — UMBC likely isn't getting second chances. Howard just needs to make sure they finish possessions on the defensive glass.",
    },
  ],
  players: [
    {
      team: 'a',
      name: 'DJ Armstrong Jr.',
      stats: '13.2 PPG • 40.4% 3PT',
      meta: "G/F • 6'4\" • America East Tournament MVP",
      bio: 'His dad is <strong>Darrell Armstrong</strong> — 14-year NBA vet, first player in NBA history to win both Sixth Man of the Year and Most Improved Player in the same season. DJ took the long road to get here (JUCO to D-II to UMBC) and then dropped <strong>33 points on 7-of-9 from three</strong> in the conference championship. He\'s a lefty with a smooth stroke who can go off at any point.<br><a href="https://pressboxonline.com/2025/11/21/dj-armstrong-jr-on-recent-game-winners-path-to-umbc-mens-basketball/" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: "Jah'Likai King",
      stats: '14.3 PPG • First Team All-AE',
      meta: "G • 6'2\" • Transfer from D-II New Haven",
      bio: 'Showed up at UMBC weighing 160 pounds. Coach Ferry said "We\'ll get him stronger" — and King put on <strong>20 pounds</strong> in the offseason. That investment paid off. He became the team\'s leading scorer and earned a First Team All-Conference selection. Went 5-of-8 from three in the conference semifinal.<br><a href="https://pressboxonline.com/2026/03/12/jahlikai-kings-offseason-gains-paying-off-with-umbc-mens-basketball/" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Ace Valentine',
      stats: '11.9 PPG • 4.0 APG • 3.2 A/TO',
      meta: "G • 6'3\" • Jr • Columbia, MD (local product)",
      bio: 'The emotional heartbeat of this team. Leads the America East in assist-to-turnover ratio, which tells you he plays with control even though he brings serious intensity. He\'s been <strong>open about overcoming an anger disorder</strong> throughout his life and has channeled that energy into his game. One of the longest-tenured guys on the roster.<br><a href="https://pressboxonline.com/2026/03/09/after-tough-meeting-ace-valentine-takes-step-forward-with-umbc-mens-basketball/" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Jose Roberto Tanchyn',
      stats: '5.7 RPG • +10.5 adj. pts/100',
      meta: "F/C • 6'10\" • Cordoba, Spain",
      bio: "Won <strong>gold medals with the Spanish U18 national team</strong> in 2021 and 2022. Has been playing basketball since he was three. When Coach Ferry moved him into the starting lineup on January 15, it sparked an 11-game winning streak and completely changed the team's defense. UMBC before Tanchyn starts and after are basically two different teams.",
    },
    {
      team: 'b',
      name: 'Bryce Harris',
      stats: '17.1 PPG • 6.9 RPG',
      meta: "G • 6'4\" • Grad Student • MEAC Tournament Outstanding Player",
      bio: "This guy does everything. Scores at all three levels, rebounds well above his position, and guards the other team's best player. Named <strong>MEAC Tournament Outstanding Player</strong> after leading Howard to their third title in four years. He's the anchor of this team.<br><a href=\"https://hubison.com/news/2026/3/14/mens-basketball-mens-basketball-captures-2026-meac-title.aspx\" target=\"_blank\">Read more →</a>",
    },
    {
      team: 'b',
      name: 'Cedric Taylor III',
      stats: '17.1 PPG • 6.7 RPG • 3.3 APG',
      meta: "G • 6'7\" • Jr • Transfer from Morehouse College",
      bio: 'The Morehouse-to-Howard pipeline is a cool <strong>HBCU-to-HBCU transfer story</strong>. At 6\'7" with legit guard skills, Taylor creates matchup problems for everyone. He overcame a hand injury to become one of the MEAC\'s best all-around players and was named MEAC Player of the Week three times this season.',
    },
    {
      team: 'b',
      name: 'Cam Gillus',
      stats: '10.6 PPG • 4.6 APG',
      meta: "G • 5'11\" • Jr • Falls Church, VA",
      bio: 'The point guard and <strong>the closer</strong>. Led all scorers with 25 points in the MEAC semifinal (14-of-18 from the line), then sealed the championship going 6-of-7 from the free throw line. When the game is tight in the final minutes, Gillus is the guy Howard wants with the ball.',
    },
  ],
  funFacts: [
    {
      emoji: '🎬',
      title: 'Hollywood Connections (Howard)',
      body: '<strong>Chadwick Boseman</strong> (Black Panther), <strong>Taraji P. Henson</strong> (Empire), and <strong>Phylicia Rashad</strong> (The Cosby Show) all went to Howard. The university renamed its College of Fine Arts after Boseman. <a href="https://edurank.org/uni/howard-university/alumni/" target="_blank">More →</a>',
    },
    {
      emoji: '🐕',
      title: 'The Mascot Is a Dog Breed (UMBC)',
      body: 'UMBC\'s mascot "True Grit" is a Chesapeake Bay Retriever — Maryland\'s state dog, originally bred to retrieve waterfowl from the icy Chesapeake Bay. There\'s a 500-pound bronze statue of one on campus. <a href="https://umbc.edu/stories/the-true-story-of-umbcs-mascot-true-grit/" target="_blank">More →</a>',
    },
    {
      emoji: '⚖️',
      title: "Thurgood Marshall's School (Howard)",
      body: 'Howard Law produced <strong>Thurgood Marshall</strong>, who argued Brown v. Board of Education and went on to become the first Black Supreme Court Justice. <a href="https://www.britannica.com/topic/Howard-University" target="_blank">More →</a>',
    },
    {
      emoji: '🏀',
      title: "Coach K's Protege vs. The Portal Alchemist",
      body: "Howard's Kenny Blakeney won <strong>back-to-back national titles at Duke under Coach K</strong> (1991-92). Meanwhile UMBC's Jim Ferry pieced together this roster from JUCO, D-II, and international talent through the transfer portal. Two very different paths to Dayton.",
    },
    {
      emoji: '🇪🇸',
      title: "Spain's Contribution (UMBC)",
      body: 'Center Jose Roberto Tanchyn is from <strong>Cordoba, Spain</strong> and won gold with the Spanish U18 national team. His move into the starting lineup on Jan 15 kicked off an 11-game winning streak.',
    },
    {
      emoji: '🏛️',
      title: 'The Divine Nine Was Born Here (Howard)',
      body: 'Five of the nine historically Black Greek-letter organizations (the "Divine Nine") were <strong>founded on Howard\'s campus</strong>, including Alpha Kappa Alpha (1908) and Delta Sigma Theta (1913). <a href="https://en.wikipedia.org/wiki/National_Pan-Hellenic_Council" target="_blank">More →</a>',
    },
    {
      emoji: '🎭',
      title: 'More Than a Basketball Game (UMBC)',
      body: 'UMBC was <strong>Maryland\'s first public college inclusive of all races when it opened in 1966</strong>. The school is a top producer of Fulbright scholars and is nationally ranked for undergraduate teaching. Not bad for a school most people only know from a basketball game.',
    },
    {
      emoji: '💰',
      title: '$80 Million Gift (Howard)',
      body: '<strong>MacKenzie Scott</strong> donated $80 million to Howard in November 2025. That\'s one of the largest gifts in the school\'s 159-year history.',
    },
    {
      emoji: '👨‍👩‍👦',
      title: 'The Parent Trap (UMBC 2018)',
      body: "When UMBC upset Virginia in 2018, star Jairus Lyles' <strong>parents were both UVA alumni</strong>. He literally knocked his own parents' school out of the tournament. <a href=\"https://www.espn.com/blog/collegebasketballnation/post/_/id/121961/\" target=\"_blank\">More →</a>",
    },
    {
      emoji: '📚',
      title: 'Two R1 Research Schools',
      body: 'Both schools hold Carnegie R1 research status. Howard became the <strong>first HBCU</strong> to earn R1 designation (Feb 2025). UMBC is only the third school in Maryland to get there, after Johns Hopkins and UMD-College Park.',
    },
    {
      emoji: '🏆',
      title: "Howard's Basketball Renaissance",
      body: "When Blakeney took over in 2019, Howard hadn't had a <strong>winning season in 18 years</strong>. This year's 23 wins are a program record. They've won <strong>3 of the last 4 MEAC titles</strong>. That's a real turnaround. <a href=\"https://bustingbrackets.com/hbcu-dynasty-the-howard-bison-win-the-meac-again-3-out-of-the-last-4-seasons-basketbal\" target=\"_blank\">More →</a>",
    },
    {
      emoji: '🛸',
      title: 'UMBC + NASA',
      body: 'UMBC ranks <strong>#11 nationally in NASA-funded research</strong> with $186 million in annual research expenditures. Definitely not your typical mid-major. <a href="https://research.umbc.edu/fast-facts/" target="_blank">More →</a>',
    },
  ],
  history: {
    callout:
      "On March 16, 2018, UMBC became the <strong>first 16-seed to beat a 1-seed</strong> in NCAA Tournament history. And it wasn't even close — they beat Virginia 74-54. Before that, 16-seeds were 0-135 against 1-seeds. Eight years later, they're back as a 16-seed again.",
    subsections: [
      {
        title: 'The 2018 Upset — How It Happened',
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: 'Halftime',
            text: 'Tied 21-21. Virginia — the ACC champs, the #1 overall seed — couldn\'t shake the tiny school from Catonsville, Maryland.',
          },
          {
            date: 'Second Half',
            text: '<strong>UMBC outscored Virginia 53-33.</strong> Jairus Lyles scored 23 of his 28 points after halftime. What started as an upset became a demolition.',
          },
          {
            date: 'Final: UMBC 74, Virginia 54',
            text: "The <strong>first 16-over-1 upset</strong> in men's tournament history after 135 straight losses. UMBC's website crashed from the traffic.",
          },
          {
            date: 'The Aftermath',
            text: 'UMBC saw a spike in applications (the "<strong>Flutie Effect</strong>" in action). Virginia used the loss as motivation and came back to <strong>win the 2019 national championship</strong>. <a href="https://www.ncaa.com/news/basketball-men/article/2020-04-07/umbc-vs-virginia-how-one-greatest-upsets-ncaa-tournament" target="_blank">Full story →</a>',
          },
        ],
      },
      {
        title: "Howard's NCAA Tournament History",
        type: 'card',
        content:
          '<p>Howard has been to the NCAA Tournament five times (1981, 1992, 2022, 2023, 2026) but has <strong>never won a tournament game (0-4)</strong>. Their 2022 appearance was the first in 30 years. Under Blakeney, they\'ve made it three of the last four years — basically building a dynasty in the MEAC with three titles in four seasons.</p><p style="margin-top:.5rem;">A first NCAA Tournament win would be a defining moment for the program and a big milestone for <strong>HBCU basketball</strong>.</p><p style="margin-top:.5rem;"><a href="https://www.sports-reference.com/cbb/schools/howard/men/" target="_blank">Howard basketball history →</a></p>',
      },
      {
        title: 'Both Schools: Pioneers in Inclusion',
        type: 'card',
        content:
          "<p><strong>UMBC</strong> was Maryland's first public college inclusive of all races when it opened in 1966. <strong>Howard</strong>, founded in 1867, has been \"The Mecca\" of Black higher education for over 150 years — they've produced more Black doctorate recipients than any other American university. Both schools have pretty remarkable stories of access and opportunity in American education.</p>",
      },
    ],
  },
  sources: [
    {
      heading: 'UMBC',
      links: [
        { label: 'Basket Under Review — Previewing UMBC for the 2026 NCAA Tournament', url: 'https://www.basketunderreview.com/ticket-punched-previewing-the-umbc-retrievers-for-the-2026-ncaa-tournament/' },
        { label: "PressBox — Jah'Likai King's Offseason Gains", url: 'https://pressboxonline.com/2026/03/12/jahlikai-kings-offseason-gains-paying-off-with-umbc-mens-basketball/' },
        { label: 'PressBox — Ace Valentine Takes Step Forward', url: 'https://pressboxonline.com/2026/03/09/after-tough-meeting-ace-valentine-takes-step-forward-with-umbc-mens-basketball/' },
        { label: "PressBox — DJ Armstrong Jr.'s Path to UMBC", url: 'https://pressboxonline.com/2025/11/21/dj-armstrong-jr-on-recent-game-winners-path-to-umbc-mens-basketball/' },
        { label: 'Baltimore Sun — UMBC NCAA Tournament', url: 'https://www.baltimoresun.com/2026/03/15/umbc-mens-basketball-howard-ncaa-tournament/' },
        { label: 'UMBC Athletics — Jim Ferry Bio', url: 'https://umbcretrievers.com/sports/mens-basketball/roster/coaches/jim-ferry/1192' },
        { label: 'Sports Reference — 2025-26 UMBC Stats', url: 'https://www.sports-reference.com/cbb/schools/maryland-baltimore-county/men/2026.html' },
        { label: 'NCAA.com — UMBC vs Virginia 2018', url: 'https://www.ncaa.com/news/basketball-men/article/2020-04-07/umbc-vs-virginia-how-one-greatest-upsets-ncaa-tournament' },
        { label: 'Wikipedia — 2018 UMBC vs. Virginia Game', url: 'https://en.wikipedia.org/wiki/2018_UMBC_vs._Virginia_men%27s_basketball_game' },
        { label: 'UMBC — True Grit Mascot History', url: 'https://umbc.edu/stories/the-true-story-of-umbcs-mascot-true-grit/' },
        { label: 'UMBC Research — Fast Facts', url: 'https://research.umbc.edu/fast-facts/' },
        { label: "ESPN — Lyles Parents' UVA Connection", url: 'https://www.espn.com/blog/collegebasketballnation/post/_/id/121961/' },
      ],
    },
    {
      heading: 'Howard',
      links: [
        { label: 'Howard Athletics — 2026 MEAC Championship', url: 'https://hubison.com/news/2026/3/14/mens-basketball-mens-basketball-captures-2026-meac-title.aspx' },
        { label: 'Sports Illustrated — Howard Bison Claim 2026 MEAC Title', url: 'https://www.si.com/college/hbcu/basketball/howard-bison-claim-2026-meac-men-basketball-championship' },
        { label: 'Sports Reference — 2025-26 Howard Stats', url: 'https://www.sports-reference.com/cbb/schools/howard/men/2026.html' },
        { label: 'Wikipedia — Kenny Blakeney', url: 'https://en.wikipedia.org/wiki/Kenny_Blakeney' },
        { label: 'The Hilltop — The Life of Kenneth Blakeney', url: 'https://thehilltoponline.com/2023/05/09/the-life-of-kenneth-blakeney-how-one-chance-turned-into-a-basketball-championship/' },
        { label: 'Yahoo Sports — Blakeney Wants to Reawaken HBCU Basketball', url: 'https://sports.yahoo.com/howards-kenneth-blakeney-deion-sanders-134125123.html' },
        { label: 'Busting Brackets — HBCU Dynasty: Howard Wins the MEAC Again', url: 'https://bustingbrackets.com/hbcu-dynasty-the-howard-bison-win-the-meac-again-3-out-of-the-last-4-seasons-basketbal' },
        { label: 'Britannica — Howard University', url: 'https://www.britannica.com/topic/Howard-University' },
        { label: 'Wikipedia — Howard University', url: 'https://en.wikipedia.org/wiki/Howard_University' },
        { label: 'Wikipedia — National Pan-Hellenic Council (Divine Nine)', url: 'https://en.wikipedia.org/wiki/National_Pan-Hellenic_Council' },
        { label: 'ESPN — March Madness 2026: Every Team Explained', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48156563/march-madness-2026-every-team-mens-ncaa-tournament-bracket-explained' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • UMBC vs Howard • NCAA First Four • March 17, 2026',
}

export default game
