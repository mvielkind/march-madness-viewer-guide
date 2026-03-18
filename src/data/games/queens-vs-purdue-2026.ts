import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'queens-vs-purdue-2026',
  title: 'Queens vs Purdue \u2014 First Round Viewing Guide',
  eventTag: 'NCAA Tournament \u2022 First Round \u2022 St. Louis, MO',
  date: 'Friday, March 20, 2026 \u2022 7:35 PM ET',
  round: 'First Round',
  tipTime: '2026-03-20T19:35',
  venue: 'Enterprise Center, St. Louis, Missouri \u2022 truTV',
  extraInfo: 'Winner faces <strong>#7 Kentucky/Santa Clara or #10 winner</strong> on Sunday',
  teams: [
    {
      name: 'Queens',
      mascot: 'Royals',
      seed: '#15 Seed',
      record: '21-13 \u2022 ASUN Champs',
      colors: { primary: '#002D72', secondary: '#A89968', name: 'queens' },
      className: 'queens',
    },
    {
      name: 'Purdue',
      mascot: 'Boilermakers',
      seed: '#2 Seed',
      record: '27-8 \u2022 Big Ten Champs',
      colors: { primary: '#CEB888', secondary: '#000000', name: 'purdue' },
      className: 'purdue',
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
      'A school that became <strong>Division I eligible on July 1, 2025</strong> \u2014 less than nine months ago \u2014 is in the NCAA Tournament. Queens University of Charlotte won the <strong>ASUN Tournament in their first year of DI eligibility</strong>. Now they face the team with the <strong>2nd-best offense in America</strong>, a point guard averaging <strong>9.1 assists per game</strong>, and the <strong>Big Ten Tournament championship</strong>. Oh, and Purdue lost to a 15-seed (Fairleigh Dickinson) three years ago. Lightning doesn\'t strike twice... right?',
    cards: [
      {
        label: 'For Queens',
        value:
          '<strong>First year of Division I eligibility.</strong> They completed their DII-to-DI reclassification on July 1, 2025, and won the ASUN Tournament nine months later. This is one of the most remarkable achievements in recent college basketball history. Just being here is the story.',
      },
      {
        label: 'For Purdue',
        value:
          'The <strong>#2 offense in America (KenPom 124.7)</strong>. Braden Smith averages <strong>9.1 assists per game</strong>. Won the <strong>Big Ten Tournament</strong> by beating #1 Michigan. <strong>11th straight NCAA Tournament.</strong> Matt Painter has been here for 21 years. This is supposed to be routine.',
      },
      {
        label: 'The FDU Ghost',
        value:
          'In 2023, <strong>#16 Fairleigh Dickinson upset #1 Purdue 63-58</strong> \u2014 one of only two 16-over-1 upsets in history. Purdue fans remember. Queens is a 15-seed, not a 16, but the PTSD is real. Matt Painter knows what can go wrong.',
      },
      {
        label: 'The Offense Gap',
        value:
          'Queens ranks <strong>31st in offensive efficiency</strong> and averages 84.9 PPG. That\'s elite for a 15-seed \u2014 they can actually score. But their defense ranks <strong>349th</strong>, allowing 82.9 PPG. This isn\'t a typical 15-seed that grinds you down. This is a team that wants a shootout.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'First Year of DI and They Score 85 a Game',
      bullets: [
        '<strong>Offense for a 15-seed:</strong> Queens ranks <strong>31st nationally in offensive efficiency (118.7)</strong> and averages <strong>84.9 PPG (19th nationally)</strong>. That\'s not a typo. They can score with almost anyone in the country.',
        '<strong>Six players at 10+ PPG:</strong> Mann (13.4), Berman (12.6), Watford (11.9), Ashby (11.7), Parker (11.3), and Schweiger (10.2). You can\'t key on one player. The balance is remarkable.',
        '<strong>Interior efficiency:</strong> Avantae Parker shoots <strong>68.5% from the field</strong>. Jordan Watford shoots <strong>59.9%</strong>. They finish at the rim at elite rates.',
        '<strong>ASUN Tournament champions:</strong> Beat Central Arkansas 98-93 in the championship. They score in the 90s in big games. This team has no fear.',
        '<strong>Weakness:</strong> Defense ranks <strong>349th nationally (KenPom 116.0)</strong>. They allow 82.9 PPG. Against Purdue\'s #2 offense, they may need to score 90+ to have a chance. And 21-13 with 13 losses shows the other side of living by offense alone.',
      ],
    },
    {
      team: 'b',
      title: 'The #2 Offense in America',
      bullets: [
        '<strong>Second-best offense nationally:</strong> Purdue ranks <strong>2nd in KenPom offensive efficiency (124.7)</strong>. They shoot 49.9% from the field and 37.9% from three. Braden Smith runs the show with <strong>9.1 APG</strong> \u2014 among the best in the country.',
        '<strong>Smith is elite:</strong> The senior point guard averages <strong>14.0 PPG and 9.1 APG</strong>. He sees passes nobody else sees. When Smith is facilitating, Purdue\'s offense is nearly unstoppable.',
        '<strong>Kaufman-Renn inside:</strong> Trey Kaufman-Renn averages <strong>13.6 PPG, 8.5 RPG on 57.9% shooting</strong>. He dominates the interior. Queens has no one who can match his size and skill.',
        '<strong>Big Ten Tournament champions:</strong> Beat #1 Michigan 80-72 in the final. Won four games in four days. Entering the tournament with momentum and confidence.',
        '<strong>Weakness:</strong> Defense ranks <strong>190th in KenPom (107.1)</strong>. And they lost to 16-seed Fairleigh Dickinson in 2023. The 15-seed upset has happened to Purdue before. Queens\'s 31st-ranked offense could make this uncomfortable.',
      ],
    },
  ],
  keys: [
    {
      title: 'Can Queens score enough to keep pace?',
      description:
        'Queens averages 84.9 PPG with the 31st-ranked offense. Purdue has the 2nd-ranked offense and averages 81.7. This could be one of the highest-scoring 2-15 games in tournament history. If Queens can stay within 10 at halftime, their offense gives them a chance. If Purdue opens a 20-point lead early, the defense gap becomes fatal.',
    },
    {
      title: 'Purdue\'s interior vs. Queens\'s lack of size.',
      description:
        'Kaufman-Renn (13.6 PPG, 8.5 RPG, 57.9% FG) and Cluff (10.6 PPG, 69.8% FG) will dominate the paint. Queens\' biggest regular is Avantae Parker at 6-something who shoots 68.5% — efficient but undersized. If Purdue pounds the ball inside and gets easy baskets, the offense gap widens quickly.',
    },
    {
      title: 'Braden Smith\'s 9.1 assists.',
      description:
        'Smith averages 9.1 APG against the 349th-ranked defense in America. This could be a highlight-reel game for him — finding cutters, kicking to Loyer (42.1% from three), and feeding Kaufman-Renn inside. Queens simply doesn\'t have the defensive personnel to contain his vision.',
    },
    {
      title: 'Queens\'s balanced scoring as a threat.',
      description:
        'Six players averaging 10+ PPG means Purdue can\'t focus on one guy. In a single-elimination game, if two or three Queens shooters get hot simultaneously, the score stays close. Purdue\'s 190th-ranked defense is genuinely vulnerable to a team that can put up 85+ points.',
    },
    {
      title: 'The FDU precedent.',
      description:
        'In 2023, Purdue lost to Fairleigh Dickinson as a 1-seed. It was only the second 16-over-1 upset ever. Painter has lived through this nightmare. His preparation for Queens will be intense precisely because of that memory. But the psychological scar is real — and if Queens makes a run in the second half, the pressure on Purdue intensifies.',
    },
  ],
  players: [
    {
      team: 'a',
      name: 'Nasir Mann',
      stats: '13.4 PPG \u2022 5.8 RPG \u2022 2.7 APG',
      meta: 'F \u2022 Senior \u2022 Leading Scorer',
      bio: 'Queens\'s leading scorer and rebounder. Leads a <strong>six-player scoring attack where everyone averages 10+ PPG</strong>. Playing in the NCAA Tournament in the program\'s first year of DI eligibility.',
    },
    {
      team: 'a',
      name: 'Avantae Parker',
      stats: '11.3 PPG \u2022 5.3 RPG \u2022 .685 FG%',
      meta: 'F \u2022 Interior Finisher',
      bio: 'Shoots an astonishing <strong>68.5% from the field</strong> \u2014 one of the highest marks of any player in the tournament. Provides interior scoring and rebounding. His efficiency is elite; the question is whether he can maintain it against Big Ten-level defenders.',
    },
    {
      team: 'a',
      name: 'Jordan Watford',
      stats: '11.9 PPG \u2022 3.8 APG \u2022 .599 FG%',
      meta: 'G \u2022 Ultra-Efficient Scorer',
      bio: 'Shoots <strong>59.9% from the field</strong> while averaging 11.9 PPG. One of three Queens players shooting above 50% from the field. Part of the most offensively efficient 15-seed in recent memory.',
    },
    {
      team: 'a',
      name: 'Carson Schweiger',
      stats: '10.2 PPG \u2022 3.2 RPG \u2022 .411 3P%',
      meta: 'F \u2022 Perimeter Shooter',
      bio: 'Shoots <strong>41.1% from three</strong>. Provides the floor spacing Queens needs alongside their interior finishers. One of six Royals averaging 10+ PPG.',
    },
    {
      team: 'b',
      name: 'Braden Smith',
      stats: '14.0 PPG \u2022 9.1 APG \u2022 3.6 RPG',
      meta: 'G \u2022 Senior \u2022 Elite Distributor',
      bio: 'Averages <strong>9.1 assists per game</strong> \u2014 among the national leaders. Runs Purdue\'s #2-ranked offense with elite court vision. Was a standout in the <strong>Big Ten Tournament championship</strong> run. The kind of point guard who makes everyone around him better.<br><a href="https://purduesports.com/sports/mens-basketball/roster/season/2025-26/staff/matt-painter" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'b',
      name: 'Trey Kaufman-Renn',
      stats: '13.6 PPG \u2022 8.5 RPG \u2022 2.6 APG \u2022 .579 FG%',
      meta: 'F \u2022 Senior \u2022 Interior Anchor',
      bio: 'Dominant interior player who shoots <strong>57.9% from the field</strong> and averages 8.5 RPG. The inside presence that makes Purdue\'s offense elite. Queens has no one who can match his combination of size, skill, and efficiency.',
    },
    {
      team: 'b',
      name: 'Fletcher Loyer',
      stats: '13.8 PPG \u2022 2.3 RPG \u2022 .421 3P%',
      meta: 'G \u2022 Senior \u2022 Sharpshooter',
      bio: 'Shoots <strong>42.1% from three</strong> \u2014 the perimeter weapon that opens up Smith\'s passing lanes and Kaufman-Renn\'s interior game. When Loyer is hitting, Purdue\'s offense is virtually unguardable.',
    },
    {
      team: 'b',
      name: 'Oscar Cluff',
      stats: '10.6 PPG \u2022 7.4 RPG \u2022 .698 FG%',
      meta: 'F \u2022 Interior Force',
      bio: 'Shoots <strong>69.8% from the field</strong> \u2014 nearly 70%. Provides interior depth alongside Kaufman-Renn. With two players shooting above 57% from the field, Purdue\'s inside game is overwhelming.',
    },
  ],
  funFacts: [
    {
      emoji: '\uD83C\uDF1F',
      title: 'First Year of DI (Queens)',
      body: 'Queens University became <strong>DI-eligible on July 1, 2025</strong>. Nine months later, they\'re in the NCAA Tournament. They completed the DII-to-DI reclassification and immediately won the ASUN Tournament. One of the most remarkable achievements in recent college basketball.',
    },
    {
      emoji: '\uD83D\uDE80',
      title: 'Cradle of Astronauts (Purdue)',
      body: 'Purdue has produced <strong>24 astronauts</strong>, including <strong>Neil Armstrong</strong> (first person on the Moon) and <strong>Gus Grissom</strong>. It\'s known as the "Cradle of Astronauts." The engineering program is among the best in the world.',
    },
    {
      emoji: '\uD83D\uDE31',
      title: 'The FDU Nightmare (Purdue)',
      body: 'In 2023, <strong>#16 Fairleigh Dickinson upset #1 Purdue 63-58</strong>. It was only the second 16-over-1 upset ever (after UMBC-Virginia in 2018). The memory haunts Mackey Arena. Now Purdue faces another small school as a high seed.',
    },
    {
      emoji: '\uD83C\uDFAF',
      title: '9.1 Assists Per Game (Purdue)',
      body: '<strong>Braden Smith</strong> averages 9.1 APG \u2014 among the best in the country. He runs Purdue\'s #2-ranked offense. His court vision is the engine that makes everything work.',
    },
    {
      emoji: '\uD83D\uDCCA',
      title: '84.9 PPG as a 15-Seed (Queens)',
      body: 'Queens averages <strong>84.9 points per game (19th nationally)</strong> as a 15-seed. They rank <strong>31st in offensive efficiency</strong>. This is not a typical small-school grinder \u2014 this is a team that wants to outscore you.',
    },
    {
      emoji: '\uD83C\uDFC6',
      title: '21 Seasons of Painter (Purdue)',
      body: 'Matt Painter has been Purdue\'s coach for <strong>21 years</strong>. He played at Purdue from 1989-93. Five-time Big Ten Coach of the Year. Reached the <strong>2024 national championship game</strong> (lost to UConn). 11 straight tournament appearances.',
    },
    {
      emoji: '\uD83D\uDCAA',
      title: 'Six Players at 10+ PPG (Queens)',
      body: 'Queens has <strong>six players averaging 10 or more points per game</strong>. That\'s the most balanced scoring attack of any team in the tournament. You can\'t game-plan for one player when everyone scores.',
    },
    {
      emoji: '\uD83D\uDCA5',
      title: 'Big Ten Tournament Champions (Purdue)',
      body: 'Purdue won the <strong>Big Ten Tournament</strong> by beating #1 Michigan 80-72 in the final. They won four games in four days. They\'re entering March with momentum.',
    },
    {
      emoji: '\uD83C\uDFEB',
      title: 'Founded in 1857 (Queens)',
      body: 'Queens University of Charlotte was <strong>founded in 1857</strong> as a Presbyterian college. It\'s a small private school in Charlotte, North Carolina. The basketball team was playing Division II just a year ago.',
    },
    {
      emoji: '\uD83C\uDFC0',
      title: '2024 Championship Game (Purdue)',
      body: 'Purdue reached the <strong>2024 national championship game</strong> behind Zach Edey (7-4 center), losing to UConn. The program is still chasing its first national title since... ever. Purdue has never won a national championship in men\'s basketball.',
    },
    {
      emoji: '\uD83D\uDEE1\uFE0F',
      title: '349th in Defense (Queens)',
      body: 'Queens ranks <strong>349th in defensive efficiency</strong>, allowing 82.9 PPG. They\'re among the worst defensive teams in Division I. But they outscore opponents with the 31st-ranked offense. Against Purdue\'s #2 offense, that strategy faces its ultimate test.',
    },
    {
      emoji: '\uD83C\uDFAF',
      title: '69.8% FG (Purdue)',
      body: '<strong>Oscar Cluff</strong> shoots 69.8% from the field. <strong>Kaufman-Renn</strong> shoots 57.9%. Purdue\'s interior efficiency is absurd \u2014 they barely miss inside the arc.',
    },
  ],
  history: {
    callout:
      'Purdue has been to the NCAA Tournament <strong>38 times</strong>, including the <strong>2024 national championship game</strong>. Queens has been to the tournament <strong>once \u2014 right now, in their first year of DI eligibility</strong>. This is David vs. Goliath, except David scores 85 points a game and Goliath lost to a 16-seed three years ago.',
    subsections: [
      {
        title: "Queens's Remarkable DI Journey",
        type: 'timeline' as const,
        content: '',
        timeline: [
          {
            date: '2020',
            text: 'Queens University begins the <strong>DII-to-DI reclassification process</strong>, joining the ASUN Conference.',
          },
          {
            date: 'July 1, 2025',
            text: 'Queens becomes a <strong>full NCAA Division I member</strong>. They\'re now eligible for the NCAA Tournament for the first time.',
          },
          {
            date: 'March 2026',
            text: 'In their <strong>first year of DI eligibility</strong>, Queens wins the ASUN Tournament (98-93 over Central Arkansas) and earns the automatic bid. <strong>15 seed.</strong>',
          },
        ],
      },
      {
        title: "Purdue's Championship Chase",
        type: 'card' as const,
        content:
          '<p>Purdue has <strong>never won a national championship</strong> in men\'s basketball. They came closest in 2024, when Zach Edey led them to the title game before losing to UConn. Before that, their best runs were Final Fours in 1969 and 1980.</p><p style="margin-top:.5rem;">Under Matt Painter (21 years), Purdue has become a perennial contender: <strong>11 straight tournament appearances, 9 consecutive top-4 seeds, the 2024 national championship game</strong>. Braden Smith\'s 9.1 APG and the #2-ranked offense give this year\'s team the tools. But the FDU loss in 2023 is a scar that won\'t fully heal. Painter will be ultra-focused against Queens \u2014 he knows what can happen.</p>',
      },
      {
        title: 'The 2-15 Upset: Rare but Real',
        type: 'card' as const,
        content:
          '<p>A 15-seed has beaten a 2-seed <strong>11 times</strong> in tournament history. The most recent: Oral Roberts over Ohio State (2021) and Saint Peter\'s over Kentucky (2022). It happens about once every 3-4 years.</p><p style="margin-top:.5rem;">Queens doesn\'t fit the typical 15-seed upset profile \u2014 most upsets come from defensive teams that grind, and Queens is the opposite (349th in defense). But their <strong>31st-ranked offense</strong> is genuinely dangerous. If they can stay within striking distance and hit some threes late, the pressure on Purdue \u2014 with their FDU memory \u2014 becomes immense.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Queens',
      links: [
        { label: 'Queens Athletics \u2014 NCAA Tournament Debut', url: 'https://queensathletics.com/news/2026/3/15/mens-basketball-queens-earns-15-seed-in-the-west-in-ncaa-di-tournament-debut-royals-will-face-2-seed-purdue-in-st-louis.aspx' },
        { label: 'ESPN \u2014 Queens First Year Eligible', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48146671/queens-university-earns-ncaa-tourney-berth-first-year-eligible' },
        { label: 'Sports Reference \u2014 2025-26 Queens Stats', url: 'https://www.sports-reference.com/cbb/schools/queens-nc/men/2026.html' },
        { label: 'WBTV \u2014 A Dream Come True', url: 'https://www.wbtv.com/2026/03/16/dream-come-true-queens-earns-15-seed-first-ncaa-tournament-appearance/' },
        { label: 'Spectrum News \u2014 Queens First DI Tournament', url: 'https://spectrumlocalnews.com/nc/charlotte/news/2026/03/13/queens-basketball-team-heads-to-first-ncaa-division-i-tournament--boosting-spotlight-on-athletics-and-academics' },
        { label: 'PFN \u2014 Queens Cinderella Story', url: 'https://www.profootballnetwork.com/mens-cbb/where-is-queens-university-everything-to-know-about-march-madness-potential-cinderella-story/' },
        { label: 'ASUN \u2014 Queens 15-Seed', url: 'https://asunsports.org/news/2026/3/15/queens-earn-15-seed-in-2026-ncaa-division-i-mens-basketball-championship.aspx' },
        { label: 'Yahoo Sports \u2014 Queens Celebrates NCAA Dreams', url: 'https://sports.yahoo.com/articles/queens-celebrates-reaching-ncaa-dreams-222624065.html' },
        { label: 'Wikipedia \u2014 Queens Royals Basketball', url: 'https://en.wikipedia.org/wiki/Queens_Royals_men%27s_basketball' },
      ],
    },
    {
      heading: 'Purdue',
      links: [
        { label: 'Sports Reference \u2014 2025-26 Purdue Stats', url: 'https://www.sports-reference.com/cbb/schools/purdue/men/2026.html' },
        { label: 'ESPN \u2014 Purdue Big Ten Tournament Title', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48217484/purdue-trips-no-3-michigan-win-big-ten-tournament-title' },
        { label: 'SI \u2014 Purdue March Madness Hub', url: 'https://www.si.com/college/purdue/basketball/purdue-march-madness-hub-schedule-seed-opponent-path-to-the-final-four' },
        { label: 'SI \u2014 5 Things About Queens', url: 'https://www.si.com/college/purdue/basketball/five-things-know-about-purdue-basketball-first-march-madness-opponent-queens-royals' },
        { label: 'Purdue Exponent \u2014 Big Ten Championship', url: 'https://www.purdueexponent.org/sports/mens/basketball/purdue-boilermakers-big-ten-championship/article_a2cb84cd-c57d-40ec-afca-df7d9c5f0d95.html' },
        { label: 'Hoops HQ \u2014 Purdue Heating Up', url: 'https://www.hoopshq.com/big-ten/purdue-vs-michigan-final' },
        { label: 'Hammer and Rails \u2014 Opening Odds', url: 'https://www.hammerandrails.com/mens-basketball/58918/2-purdue-vs-15-queens-opening-odds' },
        { label: 'Fox 59 \u2014 Purdue Takes On Queens', url: 'https://fox59.com/sports/big-10-sports/purdue-to-take-on-queens-in-ncaa-tournament-first-round/' },
        { label: 'Wikipedia \u2014 Matt Painter', url: 'https://en.wikipedia.org/wiki/Matt_Painter' },
        { label: 'Wikipedia \u2014 Purdue Boilermakers Basketball', url: 'https://en.wikipedia.org/wiki/Purdue_Boilermakers_men%27s_basketball' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide \u2022 Queens vs Purdue \u2022 NCAA First Round \u2022 March 20, 2026',
}

export default game
