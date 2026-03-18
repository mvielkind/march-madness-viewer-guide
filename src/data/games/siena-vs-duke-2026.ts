import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'siena-vs-duke-2026',
  title: 'Siena vs Duke — First Round Viewing Guide',
  eventTag: 'NCAA Tournament • First Round • Greenville, SC',
  date: 'Thursday, March 19, 2026',
  round: 'First Round',
  tipTime: '2026-03-19T14:45',
  venue: 'Bon Secours Wellness Arena, Greenville, South Carolina',
  extraInfo: 'Winner faces <strong>#8/#9 seed matchup winner</strong> on Saturday',
  teams: [
    {
      name: 'Siena',
      mascot: 'Saints',
      seed: '#16 Seed',
      record: '23-11 • MAAC Champs',
      colors: { primary: '#006341', secondary: '#F0AB00', name: 'siena' },
      className: 'siena',
    },
    {
      name: 'Duke',
      mascot: 'Blue Devils',
      seed: '#1 Seed',
      record: '32-2 • ACC Champs',
      colors: { primary: '#003087', secondary: '#FFFFFF', name: 'duke' },
      className: 'duke',
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
      'A Franciscan university from suburban Albany that was 4-28 two years ago, now dancing for the first time in 16 years — against the <strong>#1 overall seed in the entire tournament</strong>, a program with five national championships, five projected first-round NBA Draft picks, and a freshman whose father won a title in the same building 25 years ago. Duke is favored by <strong>27.5 points</strong>. But Siena has upset higher seeds before. And their captain says they\'re "going in with the confidence to go shock the world."',
    cards: [
      {
        label: 'For Siena',
        value:
          'First NCAA Tournament game in <strong>16 years</strong>. Two seasons ago they were 4-28 — the worst record in program history. Now they\'re MAAC champions under a coach who won a national title at Syracuse. Just being here is a miracle. Winning would be legendary.',
      },
      {
        label: 'For Duke',
        value:
          'The <strong>#1 overall seed</strong> with a 32-2 record, but they haven\'t won a national championship <strong>since 2015</strong>. Cameron Boozer\'s father Carlos won a title here in 2001. Jon Scheyer\'s coaching progression demands one: Round of 32 → Elite Eight → Final Four → ?',
      },
      {
        label: 'The Injury Factor',
        value:
          'Duke starting guard <strong>Caleb Foster</strong> (.402 3P%) had foot surgery and is out indefinitely. Center <strong>Patrick Ngongba II</strong> (10.7 PPG) is day-to-day with foot soreness. Duke isn\'t at full strength — and that\'s the kind of crack a 16-seed needs.',
      },
      {
        label: 'History Says...',
        value:
          '16-seeds are <strong>2-151</strong> all-time against 1-seeds. But Siena has upset higher seeds before — they beat <strong>#3 Stanford in 1989</strong> and demolished <strong>#4 Vanderbilt by 21 in 2008</strong>. This program knows how to show up in March.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Mid-Range Grinders with Elite Rim Protection',
      bullets: [
        '<strong>Offense:</strong> Siena doesn\'t bomb threes — only 30.9% of their shots come from beyond the arc (338th nationally). Instead, they live in the mid-range, ranking in the <strong>86th percentile</strong> for efficiency on non-at-rim paint twos and mid-range twos. They average 70.5 PPG (340th nationally). This is efficiency basketball, not volume basketball.',
        '<strong>Rim protection:</strong> This is where Siena gets legitimately scary. They rank in the <strong>97th percentile for FG% allowed at the rim</strong> (55.2%). The Folefac/Mulvey frontcourt pairing projects to a 26th-best defense nationally. Good luck finishing inside against these guys.',
        '<strong>Defensive discipline:</strong> They rank top-55 nationally in opponent turnover rate, defensive rebounding %, opponent eFG%, and opponent free throw rate. They don\'t foul, they don\'t give up easy buckets, and they don\'t let you get to the line. It\'s disciplined, well-coached defense.',
        '<strong>Offensive rebounding:</strong> They crash the glass hard — offensive rebounding rate of 33.3% of misses. In a game where they\'ll miss a lot of shots against Duke\'s elite defense, second chances could keep them alive.',
        '<strong>Weakness:</strong> The schedule. KenPom ranks them around 173rd overall. They went <strong>1-4 against KenPom top-200 teams</strong> and lost by 21 at Indiana. They haven\'t faced anything remotely like Duke all season.',
      ],
    },
    {
      team: 'b',
      title: 'The Best Team in America',
      bullets: [
        '<strong>The numbers:</strong> <strong>KenPom #1 overall. #4 offense. #2 defense.</strong> Duke allows just 63.1 PPG (3rd nationally) while scoring 82.3. Their SRS rating of 31.55 is 2nd nationally. They are, by every metric, the best team in the country.',
        '<strong>Cameron Boozer:</strong> The freshman is averaging <strong>22.5 PPG, 10.2 RPG, 4.2 APG</strong> on .565/.409 shooting. He leads Duke in scoring, rebounding, AND assists — only the third Blue Devil ever to do so. Sporting News Player of the Year. Projected top-3 NBA pick. He\'s the most dominant player in college basketball.',
        '<strong>The defense:</strong> Opponents shoot just .392 overall and .304 from three against Duke. <strong>Maliq Brown</strong> (ACC Defensive POY) is a switchable Draymond Green-type who led the ACC in steal rate. Duke doesn\'t just beat you — they suffocate you.',
        '<strong>Rebounding dominance:</strong> Duke averages <strong>40.3 RPG vs opponents\' 29.4</strong>. That 11-rebound margin is enormous. Against Siena\'s undersized roster, the glass could be a massacre.',
        '<strong>Vulnerability:</strong> The Foster injury removes their best perimeter shooter and veteran floor general. Ngongba II\'s foot is a concern. And Duke drew arguably <strong>the hardest region in tournament history</strong> — UConn, Michigan State, Kansas, Louisville, and UCLA are all lurking. The path to the Final Four is brutal.',
      ],
    },
  ],
  keys: [
    {
      title: 'Can Siena survive the talent gap?',
      description:
        'Duke has five projected first-round NBA Draft picks on one roster. Siena has players from D-II Lock Haven, NAIA Jamestown, and a walk-on from Niskayuna. This is the most lopsided talent gap in the first round. Siena can\'t win a talent show — they have to win a basketball game. That means executing their mid-range game, protecting the rim, and making Duke uncomfortable.',
    },
    {
      title: 'Siena\'s rim protection vs. Boozer inside.',
      description:
        'The most interesting specific matchup: Siena ranks in the 97th percentile for FG% allowed at the rim. Cameron Boozer lives at the rim, shooting .565 from the field. The Folefac/Mulvey frontcourt is Siena\'s best weapon — if they can make Boozer work for every bucket and force him into difficult finishes, they have a puncher\'s chance. If Boozer gets easy looks, it\'s over fast.',
    },
    {
      title: 'The Foster injury changes things.',
      description:
        'Caleb Foster\'s foot fracture removes Duke\'s starting guard who shot .402 from three and provided veteran floor leadership. Without him, Duke leans more heavily on freshmen — talented freshmen, yes, but freshmen nonetheless. The NCAA Tournament is a different animal. Siena needs to test whether Duke\'s young guards can handle pressure in a March environment.',
    },
    {
      title: 'Tempo control is everything.',
      description:
        'Siena averages 70.5 PPG. Duke averages 82.3. If this game is played in the 80s with fast transitions, Duke\'s superior athletes will dominate. Siena needs to grind this into the 50s and 60s — make every possession matter, limit transitions, clog the lane, and turn this into a half-court war. In a 55-50 game, anything can happen. In an 85-60 game, nothing can.',
    },
    {
      title: 'McNamara knows what this stage demands.',
      description:
        'Gerry McNamara played in and won a national championship. He coached in Final Fours at Syracuse. His staff includes former Syracuse players who\'ve been in NCAA Tournament environments. This isn\'t a coaching staff that will be overwhelmed by the moment — and that matters more than you think for a 16-seed.',
    },
  ],
  players: [
    {
      team: 'a',
      name: 'Gavin Doty',
      stats: '17.9 PPG • 7.0 RPG • 85.5% FT',
      meta: "G • 6-5 • Sophomore • MAAC Tournament MVP",
      bio: 'The Lou Henson Mid-Major Player of the Year finalist averaged <strong>21.7 PPG in the MAAC Tournament</strong>, scoring 23 in the championship — 18 in the second half — including a clutch stepback three with 2 minutes left. At Bodley High School in Fulton, NY, he averaged 28.3 PPG with seven triple-doubles and a career-high 44. Coach McNamara says Doty has <strong>"killer instinct"</strong> comparable to his own playing style.',
    },
    {
      team: 'a',
      name: 'Justice Shoats',
      stats: '13.2 PPG • 4.4 APG • 46.6% FG',
      meta: "G • 5-11 • Senior • Second Team All-MAAC",
      bio: 'Had <strong>zero Division I offers out of high school</strong>. Went to D-II Lock Haven, became conference player of the year in basketball AND earned all-conference honors in <strong>track and field</strong> (long jump, high jump). Transferred to Siena and connected with fellow northeast PA native McNamara. "I kind of put a chip on my shoulder ever since I was a senior in high school."<br><a href="https://spectrumlocalnews.com/nys/capital-region/news/2026/02/24/siena-basketball-justice-shoats" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Riley Mulvey',
      stats: '7-0 Center • Double-double in MAAC final',
      meta: "C • 7-0 • Grad Student • Iowa Transfer, Capital District Native",
      bio: 'The local kid who came home. Grew up in Rotterdam, NY, played four seasons at Iowa under <strong>Fran McCaffery — the same coach who led Siena\'s 2008-10 three-peat</strong>. His father holds Siena soccer records. His uncle Jack Mulvey \'65 is a <strong>Siena Athletics Hall of Famer</strong> who holds the program\'s career rebounding record. Played all 40 minutes in the MAAC championship.',
    },
    {
      team: 'a',
      name: 'Brendan Coyle',
      stats: '8.6 PPG • 4.6 RPG • Team Captain',
      meta: "F • 6-7 • Senior • Walk-on turned captain",
      bio: 'The best story on the roster. <strong>Grew up in Niskayuna, NY, attending Siena games with his parents. Walked on as a freshman.</strong> Now he\'s the team captain. Siena went 7-0 in MAAC play when Coyle scored 9+ points. His quote heading into Duke: <strong>"I think we\'re all going in with the confidence to go shock the world."</strong><br><a href="https://www.midmajormadness.com/metro-atlantic-athletic-conference/34021/lifelong-siena-fan-brendan-coyle-looks-to-validate-senior-year-with-a-championship" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Cameron Boozer',
      stats: '22.5 PPG • 10.2 RPG • 4.2 APG',
      meta: "F • 6-9, 250 • Freshman • Sporting News Player of the Year",
      bio: 'Son of <strong>Carlos Boozer, who won a national championship at Duke in 2001</strong>. Twin brother of teammate Cayden. ESPN 100 #3 recruit. Leads Duke in scoring, rebounding, AND assists. Shoots .565/.409/.775. Has 17 double-doubles. Projected <strong>#2-3 pick in the 2026 NBA Draft</strong>. Scheyer: "For me, he\'s as good as it gets."<br><a href="https://sports.yahoo.com/articles/sporting-news-2025-26-college-150002799.html" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Isaiah Evans',
      stats: '14.9 PPG • .365 3P% • .874 FT%',
      meta: "G • 6-6 • Sophomore • Breakout Star",
      bio: 'Declared for the 2025 NBA Draft after averaging 6.8 PPG as a freshman behind Cooper Flagg, then <strong>withdrew and returned to Duke</strong>. Best decision of his life: massive sophomore breakout to 14.9 PPG. Scored <strong>32 points on 7-of-16 from three</strong> against Florida State. Had 20 in the ACC Tournament final. Projected first-round pick.<br><a href="https://www.si.com/college/duke/blue-devils-2-reasons-why-isaiah-evans-x-factor" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Maliq Brown',
      stats: '4.8 PPG • 4.9 RPG • 1.9 SPG',
      meta: "F • Senior • ACC Defensive POY & Sixth Man of the Year",
      bio: 'Won <strong>both ACC Defensive Player of the Year AND Sixth Man of the Year</strong> — the defensive glue of the #2 defense in America. Led the ACC with a 5.61% steal rate (65 steals). Scheyer <strong>compared him to Draymond Green</strong> for his ability to guard all five positions. The stats don\'t show it, but he\'s one of the most impactful players in the country.<br><a href="https://www.si.com/college/duke/blue-devils-maliq-brown-caps-off-career-with-major-honors" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Cayden Boozer',
      stats: '7.1 PPG • 2.8 APG • .489 FG%',
      meta: "G • Freshman • Cameron\'s Twin Brother",
      bio: 'Five-star recruit, <strong>twin brother of Cameron, son of Carlos</strong>. Backup point guard whose role just expanded significantly with Caleb Foster\'s foot fracture. Projected <strong>#23 overall in the 2026 NBA Draft</strong>. Duke has three Boozers in its championship history — Carlos won the 2001 title, and now Cameron and Cayden are trying to add two more.',
    },
  ],
  funFacts: [
    {
      emoji: '🏆',
      title: 'The National Championship Connection (Duke)',
      body: 'Cameron Boozer\'s father <strong>Carlos Boozer</strong> won a national championship at Duke in 2001. Now Cameron — the Sporting News Player of the Year — is trying to do the same thing, <strong>25 years later</strong>, for the same program. His twin brother Cayden is along for the ride.',
    },
    {
      emoji: '🏀',
      title: 'McNamara\'s Perfect Game (Siena)',
      body: 'Siena coach <strong>Gerry McNamara</strong> won the 2003 national championship at Syracuse, scoring 18 points in the title game against Kansas — <strong>all on three-pointers (6-for-6 from deep)</strong>. He\'s Syracuse\'s all-time leader in three-pointers made. Now he\'s coaching against the school that beat Syracuse in the 2001 title game.',
    },
    {
      emoji: '📈',
      title: 'From 4-28 to Dancing (Siena)',
      body: 'Two years ago, Siena went <strong>4-28</strong> — the worst season in program history. McNamara was hired, improved by 10 wins in Year 1, then went 23-11 and won the MAAC championship in Year 2. That\'s one of the best two-year turnarounds in college basketball.',
    },
    {
      emoji: '😈',
      title: 'Why They\'re Called Blue Devils (Duke)',
      body: 'Duke\'s nickname comes from <strong>"les Diables Bleus"</strong> — French Alpine soldiers in World War I who wore blue uniforms, berets, and flowing capes. Before that, they were called "the Methodists." Significant upgrade. <a href="https://100.duke.edu/story/the-blue-devil/" target="_blank">More →</a>',
    },
    {
      emoji: '👨‍👦',
      title: 'The Mulvey Family Legacy (Siena)',
      body: 'Center Riley Mulvey\'s <strong>father holds Siena soccer records</strong>. His <strong>uncle Jack Mulvey \'65 is a Siena Athletics Hall of Famer</strong> who holds the program\'s career rebounding record (15.0 RPG). Riley played at Iowa under Fran McCaffery — the same coach who led Siena\'s 2008-10 three-peat — then transferred home for his final year.',
    },
    {
      emoji: '🏠',
      title: 'The Walk-On Captain (Siena)',
      body: '<strong>Brendan Coyle</strong> grew up in Niskayuna, NY, attending Siena games with his parents. He walked on as a freshman and redshirted. Now he\'s the team captain in his senior year, hitting big shots in the MAAC Tournament and telling reporters they\'re "going in with the confidence to go shock the world."',
    },
    {
      emoji: '💰',
      title: 'Five First-Round Picks on One Roster (Duke)',
      body: 'Duke has <strong>five projected first-round NBA Draft picks</strong> on the current roster: Cameron Boozer, Isaiah Evans, Patrick Ngongba II, Dame Sarr, and Cayden Boozer. That\'s more future NBA talent than some entire conferences.',
    },
    {
      emoji: '🇫🇷',
      title: 'The 1989 Upset (Siena)',
      body: 'In 1989, <strong>#14 Siena beat #3 Stanford 80-78</strong> in the NCAA Tournament. Then in 2008, <strong>#13 Siena demolished #4 Vanderbilt 83-62</strong> — a 21-point blowout upset. This program has tournament DNA, even if the sample size is small.',
    },
    {
      emoji: '🏛️',
      title: 'Presidents and Power Players (Duke)',
      body: 'Duke alumni include <strong>Richard Nixon</strong> (37th President), <strong>Tim Cook</strong> (Apple CEO), <strong>Melinda French Gates</strong>, <strong>Adam Silver</strong> (NBA Commissioner), and <strong>Ken Jeong</strong> (actor/comedian). The alumni network spans 162 countries.',
    },
    {
      emoji: '🪑',
      title: 'The Furniture Capital Connection (Siena)',
      body: 'Siena\'s home city of Loudonville is a suburb of Albany, the state capital of New York. The school was founded by <strong>Franciscan Friars in 1937</strong> and changed its name from Siena College to <strong>Siena University</strong> in July 2025. Notable alumni include the <strong>35th Governor of California</strong> (George Deukmejian) and a <strong>Pulitzer Prize-winning novelist</strong> (William Kennedy).',
    },
    {
      emoji: '🏟️',
      title: 'Cameron Indoor (Duke)',
      body: '<strong>Cameron Indoor Stadium</strong> was built in 1940 and seats just 9,314 — tiny by major-program standards. But the <strong>Cameron Crazies</strong> student section is considered the standard for college basketball atmosphere. They\'re credited with <strong>inventing the "Air Ball" chant</strong>. Students camp in "K-Ville" for tickets.',
    },
    {
      emoji: '🏃',
      title: 'Two-Sport Star (Siena)',
      body: 'Justice Shoats had <strong>zero D-I offers out of high school</strong>. He went to D-II Lock Haven, where he became conference player of the year in basketball AND earned all-conference honors in <strong>track and field</strong> — long jump and high jump. Now he\'s a starting guard in the NCAA Tournament.',
    },
  ],
  history: {
    callout:
      'Duke has <strong>five national championships, 18 Final Fours, and a 126-42 all-time tournament record (.750)</strong>. Siena has been to the tournament <strong>six times before this</strong>, winning 4 games — including two legitimate upsets (Stanford in 1989, Vanderbilt in 2008). This is the top of the mountain against a team that\'s been climbing for 16 years to get back here.',
    subsections: [
      {
        title: "Duke's Championship Dynasty",
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '1991-92',
            text: '<strong>Back-to-back national championships</strong> under Coach K. The 1992 team featured Christian Laettner\'s iconic buzzer-beater against Kentucky — widely considered the greatest game in tournament history.',
          },
          {
            date: '2001',
            text: 'Duke beats Arizona for the title. <strong>Carlos Boozer</strong> is a key player. His son Cameron is now the 2026 Sporting News Player of the Year trying to repeat his father\'s achievement.',
          },
          {
            date: '2010',
            text: 'Duke beats Butler 61-59 in the championship game. <strong>Jon Scheyer</strong> is the team captain. He\'s now the head coach trying to deliver another title.',
          },
          {
            date: '2015',
            text: 'Duke beats Wisconsin 68-63 for its most recent championship. <strong>11 years ago</strong>. The drought — by Duke standards — is real.',
          },
          {
            date: '2025-26',
            text: 'Scheyer\'s progression: Round of 32 → Elite Eight → Final Four → <strong>#1 overall seed</strong>. Everything points to a title run. But the East Region may be the toughest draw in tournament history.',
          },
        ],
      },
      {
        title: "Siena's Tournament History: Small School, Big Moments",
        type: 'card',
        content:
          '<p>Siena has been to the NCAA Tournament six times before 2026, and they\'ve made the most of it. In <strong>1989</strong>, 14-seed Siena upset 3-seed Stanford 80-78. In <strong>2008</strong>, 13-seed Siena demolished 4-seed Vanderbilt 83-62 — Kenny Hasbrouck scored 30 in one of the largest upset margins in tournament history.</p><p style="margin-top:.5rem;">The 2008-2010 three-peat under <strong>Fran McCaffery</strong> remains the golden era. Three straight MAAC titles, three straight tournament appearances. McCaffery left for Iowa and took the magic with him. Siena didn\'t return to the tournament for <strong>16 years</strong>.</p><p style="margin-top:.5rem;">Now Gerry McNamara — a national champion himself — has brought the magic back. This is the first Siena tournament game since 2010. The 4-28 season in 2023-24 feels like a lifetime ago.</p>',
      },
      {
        title: 'The 16-vs-1 History',
        type: 'card',
        content:
          '<p>In the history of the NCAA Tournament, <strong>16-seeds are just 2-151 against 1-seeds</strong>. The two wins: <strong>UMBC over Virginia in 2018</strong> (74-54, a 20-point demolition) and <strong>FDU over Purdue in 2023</strong> (63-58).</p><p style="margin-top:.5rem;">The FDU upset is particularly instructive: a small private school from the Northeast, coached by a former big-program assistant, with strong defense and a team-first identity. Sound familiar? Siena checks many of the same boxes.</p><p style="margin-top:.5rem;">Duke, for its part, has <strong>never lost to a 16-seed</strong>. As a 1-seed overall, they\'ve historically dominated early-round matchups. But as Virginia and Purdue proved, no lead is safe in March.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Siena',
      links: [
        { label: 'ESPN — Siena Triumphs in MAAC Title Game', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48170019/siena-triumphs-maac-title-game-secure-ncaa-tournament-berth' },
        { label: 'MAAC Sports — Siena Wins 2026 Championship', url: 'https://maacsports.com/news/2026/3/11/siena-wins-2026-air-force-reserve-maac-mens-basketball-championship-powered-by-northeast-beef-saints-secure-seventh-title-in-program-history.aspx' },
        { label: 'Siena Athletics — Draws Duke', url: 'https://sienasaints.com/news/2026/3/15/mens-basketball-siena-draws-duke-in-first-round-of-ncaa-tournament.aspx' },
        { label: 'Sports Reference — Siena Basketball History', url: 'https://www.sports-reference.com/cbb/schools/siena/men/' },
        { label: 'BasketUnderReview — Previewing Siena for NCAA Tournament', url: 'https://www.basketunderreview.com/ticket-punched-previewing-the-siena-saints-for-the-2026-ncaa-tournament/' },
        { label: 'Zagsblog — McNamara Leads Siena Back', url: 'https://www.zagsblog.com/2026/03/10/rising-star-gerry-mcnamara-leads-siena-back-to-ncaa-tournament-this-is-what-you-get-when-you-create-something-special/' },
        { label: 'Mid-Major Madness — MAAC Championship Returns Siena', url: 'https://www.midmajormadness.com/metro-atlantic-athletic-conference/34630/maac-championship-returns-siena-basketball-to-what-it-is-supposed-to-be' },
        { label: 'Spectrum News — Justice Shoats Profile', url: 'https://spectrumlocalnews.com/nys/capital-region/news/2026/02/24/siena-basketball-justice-shoats' },
        { label: 'Mid-Major Madness — Brendan Coyle Profile', url: 'https://www.midmajormadness.com/metro-atlantic-athletic-conference/34021/lifelong-siena-fan-brendan-coyle-looks-to-validate-senior-year-with-a-championship' },
        { label: 'Daily Gazette — A Monster Awaits Siena vs Duke', url: 'https://www.dailygazette.com/sports/siena_college/a-monster-awaits-siena-mens-basketball-in-ncaa-first-round-game-against-duke/article_7c24891a-e79d-44ea-af4e-57cf51e440c3.html' },
        { label: 'Siena Athletics — Gavin Doty Lou Henson Finalist', url: 'https://sienasaints.com/news/2026/3/13/mens-basketball-gavin-doty-named-finalist-for-lou-henson-mid-major-player-of-the-year-award.aspx' },
        { label: 'Siena Athletics — Riley Mulvey Iowa Transfer', url: 'https://sienasaints.com/news/2025/4/15/mens-basketball-siena-basketball-adds-iowa-transfer-capital-region-native-riley-mulvey.aspx' },
      ],
    },
    {
      heading: 'Duke',
      links: [
        { label: 'Duke Athletics — Duke Earns Overall One Seed', url: 'https://goduke.com/news/2026/3/15/mens-basketball-duke-earns-overall-one-seed-opens-ncaa-tournament-in-greenville' },
        { label: 'Sports Reference — 2025-26 Duke Stats', url: 'https://www.sports-reference.com/cbb/schools/duke/men/2026.html' },
        { label: 'Yahoo Sports — Duke #1 Overall Seed, Toughest Path', url: 'https://sports.yahoo.com/mens-college-basketball/article/march-madness-2026-duke-has-the-no-1-overall-seed-in-the-ncaa-mens-tournament-it-also-has-the-toughest-path-to-the-title-005508069.html' },
        { label: 'Yahoo Sports — Cameron Boozer Player of the Year', url: 'https://sports.yahoo.com/articles/sporting-news-2025-26-college-150002799.html' },
        { label: 'CBS Sports — Caleb Foster Injury', url: 'https://www.cbssports.com/college-basketball/news/caleb-foster-injury-duke-2026-ncaa-tournament-march-madness/' },
        { label: 'SI — Five Projected First-Round Picks on Duke', url: 'https://www.si.com/college/duke/five-projected-first-round-draft-picks-on-blue-devils-basketball-roster-' },
        { label: 'SI — Maliq Brown Major Honors', url: 'https://www.si.com/college/duke/blue-devils-maliq-brown-caps-off-career-with-major-honors' },
        { label: 'SI — Isaiah Evans X-Factor', url: 'https://www.si.com/college/duke/blue-devils-2-reasons-why-isaiah-evans-x-factor' },
        { label: 'CBS Sports — Scheyer Remaking Duke', url: 'https://www.cbssports.com/college-basketball/news/jon-scheyer-was-the-perfect-pick-to-succeed-coach-k-and-has-done-the-unthinkable-remake-duke-in-his-own-image/' },
        { label: '247Sports — Scheyer on "Never Enough"', url: 'https://247sports.com/college/duke/article/jon-scheyer-on-dukes-ceiling-and-why-never-enough-defines-this-season-256222923/' },
        { label: 'Duke Athletics — Jon Scheyer Bio', url: 'https://goduke.com/sports/mens-basketball/roster/coaches/jon-scheyer/5235' },
        { label: 'ESPN — Duke March Madness History', url: 'https://www.espn.com/mens-college-basketball/story/_/id/44239878/duke-march-madness-history-men-ncaa-tournament-stats' },
        { label: 'Duke Centennial — The Blue Devil Mascot', url: 'https://100.duke.edu/story/the-blue-devil/' },
        { label: 'Wikipedia — Cameron Crazies', url: 'https://en.wikipedia.org/wiki/Cameron_Crazies' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Siena vs Duke • NCAA First Round • March 19, 2026',
}

export default game
