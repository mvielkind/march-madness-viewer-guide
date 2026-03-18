import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'saint-louis-vs-georgia-2026',
  title: 'Saint Louis vs Georgia — First Round Viewing Guide',
  eventTag: 'NCAA Tournament • First Round • Buffalo, NY',
  date: 'Thursday, March 19, 2026',
  round: 'First Round',
  tipTime: '2026-03-19T21:15',
  venue: 'KeyBank Center, Buffalo, New York',
  extraInfo: 'Winner faces <strong>#1 Michigan</strong> on Saturday',
  teams: [
    {
      name: 'Saint Louis',
      mascot: 'Billikens',
      seed: '#9 Seed',
      record: '28-5 • A-10 At-Large',
      colors: { primary: '#003DA5', secondary: '#FFFFFF', name: 'saint-louis' },
      className: 'saint-louis',
    },
    {
      name: 'Georgia',
      mascot: 'Bulldogs',
      seed: '#8 Seed',
      record: '22-10 • SEC At-Large',
      colors: { primary: '#BA0C2F', secondary: '#000000', name: 'georgia' },
      className: 'georgia',
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
      'Two programs that have lived in the shadow of other sports — SLU in the shadow of Cardinals baseball, Georgia in the shadow of Bulldog football — finally both dancing in the same year. Georgia\'s "Dunkyard Dawgs" lead the nation in dunks and score <strong>90 points per game</strong>. Saint Louis has <strong>four players shooting 40%+ from three</strong> and a center nicknamed "Cream Abdul-Jabbar." This is the <strong>highest-scoring 8-9 matchup</strong> in the tournament.',
    cards: [
      {
        label: 'For Saint Louis',
        value:
          'Two years ago they were <strong>13-20</strong>. Now they\'re 28-5 with the <strong>best shooting team in the country</strong> (40.1% from three, 2nd nationally; 51% FG, 5th nationally). First tournament since 2019. Robbie Avila is a center who leads all D-I centers in assists AND three-pointers.',
      },
      {
        label: 'For Georgia',
        value:
          'Georgia hasn\'t won an NCAA Tournament game <strong>since 2002 — a 24-year drought</strong>. They got blown out by Gonzaga in the first round last year. The "Dunkyard Dawgs" are the highest-scoring team in <strong>121 years of Georgia basketball</strong>. This is the moment to prove Georgia basketball is real.',
      },
      {
        label: 'The Scoring Matchup',
        value:
          'SLU averages <strong>87.2 PPG (10th nationally)</strong>. Georgia averages <strong>89.8 PPG (3rd-5th nationally)</strong>. Combined, these teams average <strong>177 points per game</strong>. If you like defense, this isn\'t your game. If you like chaos, grab a seat.',
      },
      {
        label: 'The Late-Season Question',
        value:
          'SLU started <strong>24-1</strong> then went <strong>3-4 in their final 7 games</strong>, including a blowout at George Mason and a heartbreaking A-10 semifinal loss. Did they peak too early? Or was the early magic real?',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'The Best Shooting Team in America',
      bullets: [
        '<strong>Elite shooting:</strong> SLU shoots <strong>51.0% FG (5th nationally) and 40.1% from three (2nd nationally)</strong>. Four players shoot 40%+ from deep: Green (45.7%), Sharma (42.8%), Avila (41.6%), Brown (40.4%). They set school records with 360 made threes and 2,879 total points.',
        '<strong>Robbie Avila is a unicorn:</strong> A 6-10 center who leads all D-I centers in <strong>assists per game (4.1) and three-pointers per game (1.9)</strong>. Third center in NCAA history with 200+ career three-pointers. A-10 Player of the Year. Wears protective goggles. Nicknamed "Cream Abdul-Jabbar."',
        '<strong>Depth and balance:</strong> <strong>Eight players average 5+ PPG</strong>. No one player can be "taken away." They rank 6th nationally in assists. The ball moves constantly — this is the most selfless team in the tournament.',
        '<strong>Defense is real too:</strong> Opponents shoot <strong>35.8% against SLU (best in the nation)</strong> and just 26.6% from three. KenPom defensive efficiency: 22nd nationally. They\'re not just a shooting team — they suffocate on the other end.',
        '<strong>Weakness:</strong> The late-season slide is impossible to ignore. After going <strong>24-1, they went 3-4</strong>. Got blown out at George Mason 86-57. Lost the A-10 semifinal 70-69 on a layup with 1 second left. Momentum scores rank them last among all tournament teams.',
      ],
    },
    {
      team: 'b',
      title: 'The Dunkyard Dawgs',
      bullets: [
        '<strong>Pace and violence:</strong> Georgia plays at the <strong>second-fastest tempo in America</strong>, scoring <strong>89.8 PPG (top 5 nationally)</strong>. They lead the nation in dunks (193) — <strong>Somto Cyril has 81 dunks</strong>, the most of any D-I player. Eight games of 100+ points. They\'re 63.2% on two-pointers (2nd nationally).',
        '<strong>Chaos defense:</strong> Georgia is <strong>2nd nationally in blocks per game (6.1)</strong> and <strong>2nd in steals per game (8.4)</strong>. They force 13.8 turnovers. The block rate of 18.2% is also 2nd nationally. They create havoc — even if they also allow a lot of points (79.2 PPG, 315th).',
        '<strong>Four double-figure scorers:</strong> Wilkinson (17.0), Cain (13.3), Catchings (11.7), Millender (11.8). The scoring is balanced and guard-driven, with Cyril providing interior dominance.',
        '<strong>Breakthrough moments:</strong> Beat No. 16 Alabama (Catchings: 32 points, 7 threes). Won at Kentucky. Won at Missouri on a Millender game-winning and-one. This team has been in hostile environments and delivered.',
        '<strong>Weakness:</strong> Allow <strong>79.2 PPG (315th nationally)</strong>. The defense creates turnovers and blocks but gives up points in bunches. Against SLU\'s elite shooting, the math could get unfavorable fast. Lost to Gonzaga by 21 in the first round last year.',
      ],
    },
  ],
  keys: [
    {
      title: 'Can SLU\'s defense slow Georgia\'s tempo?',
      description:
        'SLU holds opponents to the lowest FG% in America (35.8%). Georgia scores at the second-fastest tempo in America. This is the central clash. If SLU can contest shots and force Georgia into half-court possessions, their shooting efficiency takes over. If Georgia pushes the pace and creates transition opportunities, the game becomes a track meet — and in track meets, the most athletic team usually wins.',
    },
    {
      title: 'The three-point shooting vs. the dunking.',
      description:
        'SLU shoots 40.1% from three with four 40%+ shooters. Georgia leads the nation in dunks with 193 (Cyril alone has 81). This is the most aesthetically extreme matchup in the tournament — one team lives beyond the arc, the other lives at the rim. SLU\'s spacing will be critical; Georgia\'s rim protection (6.1 BPG) could contest shots that SLU usually gets easily.',
    },
    {
      title: 'Robbie Avila vs. Somto Cyril.',
      description:
        'The most fascinating individual matchup in the first round. Avila is a 6-10 center who passes like a point guard and shoots threes. Cyril is a 6-11 center who leads the nation in dunks and ranks 2nd in blocks. One is cerebral; the other is physical. If Avila can stretch Cyril to the perimeter with his three-point shooting, Georgia\'s rim protection evaporates. If Cyril can stay home and contest Avila\'s shots while dominating the glass, SLU loses its offensive anchor.',
    },
    {
      title: 'SLU\'s late-season collapse — are they over it?',
      description:
        'SLU went 24-1, then 3-4 in their final 7 games. They got blown out at George Mason, lost the A-10 semifinal on a buzzer-beating layup, and enter the tournament with the worst momentum score of any team in the field. But they also staged the biggest comeback in school history (down 21 to George Washington) in the A-10 quarterfinals. Which version shows up? The 24-1 team or the 3-4 team?',
    },
    {
      title: 'Georgia\'s 24-year tournament win drought.',
      description:
        'Georgia hasn\'t won an NCAA Tournament game since 2002. They got blown out by Gonzaga in the first round last year. This is a program that lives in football\'s shadow and desperately wants a basketball moment. The emotional stakes are enormous — but pressure can work both ways. SLU, playing in their first tournament in 7 years with nothing to lose, might be the looser, more relaxed team.',
    },
  ],
  players: [
    {
      team: 'a',
      name: 'Robbie Avila',
      stats: '12.9 PPG • 4.5 RPG • 4.1 APG • 41.6% 3PT',
      meta: "C • 6-10 • Junior • A-10 Player of the Year • \"Cream Abdul-Jabbar\"",
      bio: 'From Oak Forest, IL. Leads all D-I centers in <strong>assists/game (4.1) and three-pointers/game (1.9)</strong>. Third center in NCAA history with 200+ career three-pointers. Wears protective goggles that spawned the nicknames <strong>"Cream Abdul-Jabbar," "Larry Nerd," "Steph Blurry," and "Milk Chamberlain."</strong> The Defector described him as looking "like he should be digging through record crates." His HS AD: "I don\'t know if I\'ve ever known anybody who\'s more comfortable in his own skin."<br><a href="https://defector.com/can-i-interest-you-in-a-billiken" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Trey Green',
      stats: '11.1 PPG • 45.7% 3PT (90 makes)',
      meta: "G • 6-0 • Junior • Xavier Transfer",
      bio: 'From Charlotte, NC. Xavier transfer (BIG EAST All-Freshman Team). One of the most lethal shooters in the nation at <strong>45.7% from three on 90 makes</strong>. Made seven threes in one game against Dayton. His spacing alongside Avila creates enormous offensive pressure.',
    },
    {
      team: 'a',
      name: 'Dion Brown',
      stats: '11.1 PPG • 5.5 RPG • 60.6% FG • 40.4% 3PT',
      meta: "G • 6-3 • Senior • A-10 All-Defensive Team",
      bio: 'From Great Barrington, MA. Path: <strong>UMBC (First Team America East, 19 PPG) → Boston College → SLU</strong>. Described as "positively overflowing with dawg" by The Defector. On team ethos: <strong>"It doesn\'t matter who hit it...Robbie didn\'t hit the shot. We hit it."</strong>',
    },
    {
      team: 'a',
      name: 'Ishan Sharma',
      stats: '9.1 PPG • 42.8% 3PT',
      meta: "G • 6-5 • Sophomore • Virginia Transfer • Ontario, Canada",
      bio: 'From Milton, Ontario, Canada. Virginia transfer. Fourth on the team in three-pointers made (74). Season-high <strong>29 points at St. Bonaventure</strong>. One of four Billikens shooting 40%+ from deep — when four guys can shoot like this, the floor spacing is impossible to guard.',
    },
    {
      team: 'b',
      name: 'Jeremiah Wilkinson',
      stats: '17.0 PPG • 2.0 RPG • 1.9 APG',
      meta: "G • Sophomore • Cal Transfer • Team Leading Scorer",
      bio: 'From Smyrna, Georgia. Played freshman year at Cal (<strong>15.1 PPG, ACC All-Freshman Team, ACC Sixth Man of the Year</strong>). Transferred to Georgia. Six 20-point games including a <strong>season-high 31 in the SEC opener</strong>. 986 career points — 14 shy of 1,000. The go-to scorer on the highest-scoring Georgia team in 121 years.',
    },
    {
      team: 'b',
      name: 'Somto Cyril',
      stats: '9.6 PPG • 5.6 RPG • 76.1% FG • 81 dunks',
      meta: "C • 6-11, 260 • Sophomore • SEC All-Defensive Team • Nigeria",
      bio: 'From Enugu, Nigeria via Overtime Elite in Atlanta. <strong>Leads all D-I players with 81 dunks</strong> — 28 more than any other SEC player. Shoots 76.1% from the field (shatters Georgia\'s single-season record by ~13%). 74 blocks (7th all-time single season at UGA). Named SEC All-Defensive Team. Has had two ejections for flagrant-2 fouls. The "Dunkyard Dawgs" identity starts with him.',
    },
    {
      team: 'b',
      name: 'Kanon Catchings',
      stats: '11.7 PPG • 4.8 RPG',
      meta: "F • 6-9 • Sophomore • SEC Player of the Week",
      bio: 'From Brownsburg, Indiana. Scored a <strong>career-high 32 points with 7 three-pointers</strong> in an upset of No. 16 Alabama (98-88). Named SEC co-Player of the Week after averaging 27.5 PPG on 59.4% FG over two games. The breakout sophomore who can stretch the floor and score from everywhere.',
    },
    {
      team: 'b',
      name: 'Marcus "Smurf" Millender',
      stats: '11.8 PPG • 4.0 APG',
      meta: "G • 5-11 • Junior • The Closer",
      bio: 'Nicknamed <strong>"Smurf" since birth</strong> because he looked like a Smurf wearing an oversized beanie as an infant. Path: South Alabama → UTSA → Georgia. Doubled his production from 6.8 to 13.0 PPG. Hit <strong>game-winning shots against Xavier and at Missouri</strong>. Named SEC Community Service Team for work with TEAM IMPACT member Beck Cammarata. "I\'m always in the gym."<br><a href="https://georgiadogs.com/news/2026/1/26/mens-basketball-millender-has-earned-every-opportunity" target="_blank">Read more →</a>',
    },
  ],
  funFacts: [
    {
      emoji: '🤓',
      title: '"Cream Abdul-Jabbar" (SLU)',
      body: '<strong>Robbie Avila</strong> wears protective goggles and has been given the nicknames <strong>"Cream Abdul-Jabbar," "Larry Nerd," "Steph Blurry," and "Milk Chamberlain"</strong> by fans. The Defector described him as looking "like he should be digging through record crates." He leads all D-I centers in assists AND three-pointers.',
    },
    {
      emoji: '🏈',
      title: 'Football\'s Little Brother (Georgia)',
      body: 'Georgia football has won <strong>4 national championships (including back-to-back in 2021-22)</strong>. Georgia basketball hasn\'t won an NCAA Tournament game <strong>since 2002</strong>. The program has lived in football\'s shadow for decades. This team — the highest-scoring in 121 years — is trying to change that.',
    },
    {
      emoji: '🗿',
      title: 'What IS a Billiken? (SLU)',
      body: 'A <strong>mythical good-luck charm</strong> representing "things as they ought to be." Created by Missouri art teacher <strong>Florence Pretz in 1908</strong>, inspired by the Rubaiyat of Omar Khayyam. SLU is the <strong>only university with a Billiken mascot</strong>. People rub his belly for good luck. <a href="https://www.slu.edu/about/key-facts/what-is-a-billiken.php" target="_blank">More →</a>',
    },
    {
      emoji: '🐶',
      title: 'Buried in the Stadium (Georgia)',
      body: '<strong>Uga</strong>, Georgia\'s live English Bulldog mascot, is buried in <strong>marble vaults near the main gate at Sanford Stadium</strong>. UGA is the only major college to bury its mascots in its stadium. Sports Illustrated named Uga the "Greatest Mascot in College Football History."',
    },
    {
      emoji: '📈',
      title: 'From 13-20 to 28-5 (SLU)',
      body: 'Two years ago, SLU was <strong>13-20 and 13th in the A-10</strong>. Josh Schertz was hired, brought Robbie Avila from Indiana State, overhauled the roster with six transfers, and went 28-5. The turnaround speed is remarkable — and the .773 career winning percentage doesn\'t hurt.',
    },
    {
      emoji: '🏀',
      title: '81 Dunks (Georgia)',
      body: '<strong>Somto Cyril</strong> from Enugu, Nigeria, has <strong>81 dunks this season</strong> — the most of any D-I player, and 28 more than the next-closest SEC player. He shoots 76.1% from the field. The "Dunkyard Dawgs" nickname is earned.',
    },
    {
      emoji: '🎵',
      title: 'R.E.M. Started Here (Georgia)',
      body: '<strong>Michael Stipe, Mike Mills, Peter Buck, and Bill Berry</strong> formed R.E.M. while students at UGA in 1980. Other notable alumni: <strong>Fran Tarkenton</strong> (Hall of Fame QB), <strong>Alton Brown</strong> (Food Network), and <strong>Dominique Wilkins</strong> (NBA Hall of Famer who played at Georgia 1979-82).',
    },
    {
      emoji: '🧸',
      title: 'Build-A-Bear (SLU)',
      body: '<strong>Maxine Clark</strong>, founder of Build-A-Bear Workshop, is an SLU alumna. So is <strong>Eugene Kranz</strong>, who directed NASA\'s Gemini and Apollo missions. SLU was founded in 1818 — the <strong>first university west of the Mississippi River</strong>.',
    },
    {
      emoji: '💙',
      title: '"Smurf" Millender (Georgia)',
      body: 'Guard Marcus Millender has been nicknamed <strong>"Smurf" since birth</strong> because he looked like a Smurf wearing an oversized beanie as an infant. He hit game-winning shots against Xavier and at Missouri. From 6.8 PPG early on to 13.0 over his last 26 games.',
    },
    {
      emoji: '🏀',
      title: 'The Comeback That Almost Was (SLU)',
      body: 'In the A-10 semifinal, Avila hit a <strong>go-ahead three-pointer with 6.6 seconds left</strong>. Then Dayton\'s Amael L\'Etang scored with <strong>1 second remaining</strong> to win 70-69. The gut-wrenching loss ended SLU\'s tournament hopes — but their resume earned an at-large bid anyway.',
    },
    {
      emoji: '👨‍👦',
      title: 'Dad Played Golf at Duke (Georgia)',
      body: '<strong>Blue Cain\'s</strong> father Chris played golf at Duke. His mother Myriah played basketball at George Washington and is in GW\'s Athletic Hall of Fame. Blue surpassed 1,000 career points and holds Georgia\'s career FT% record (84.4%).',
    },
    {
      emoji: '🏛️',
      title: 'The Oldest Public University (Georgia)',
      body: 'The University of Georgia was <strong>chartered in 1785</strong> — making it the <strong>oldest public university in the United States</strong>. It has produced 26 governors of Georgia, 9 Pulitzer Prize recipients, and 372,000+ living alumni.',
    },
  ],
  history: {
    callout:
      'Georgia made the <strong>Final Four in 1983</strong>, beating Dean Smith\'s North Carolina (with Michael Jordan) along the way. Saint Louis has been to the tournament <strong>10 times before this</strong> and made three straight appearances from 2012-2014. Neither program has won a tournament game since at least 2014 (SLU) or 2002 (Georgia). Both are desperate for a breakthrough. This is a toss-up — Georgia is only a 2.5-point favorite.',
    subsections: [
      {
        title: "Georgia's Basketball History: Living in Football's Shadow",
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '1979-82',
            text: '<strong>Dominique Wilkins</strong> plays at Georgia (21.6 PPG career). Future NBA Hall of Famer. Ironically, Georgia made their first NCAA Tournament the year after he left.',
          },
          {
            date: '1983',
            text: 'Georgia\'s <strong>Final Four</strong> — beat VCU, No. 3 St. John\'s (Chris Mullin), and defending champion North Carolina (Michael Jordan). Lost to eventual champion NC State.',
          },
          {
            date: '2002',
            text: 'Georgia\'s <strong>last NCAA Tournament win</strong> — beat Murray State. Lost to Southern Illinois. A 24-year drought begins.',
          },
          {
            date: '2015-2024',
            text: '<strong>No NCAA Tournament appearances for a decade.</strong> Football wins back-to-back national championships. Basketball is an afterthought.',
          },
          {
            date: '2025-26',
            text: 'Mike White delivers back-to-back bids, the highest-scoring team in 121 years, and a "Dunkyard Dawgs" identity. <strong>The revival is real.</strong>',
          },
        ],
      },
      {
        title: "Saint Louis: The Schertz Revolution",
        type: 'card',
        content:
          '<p>Two years ago, SLU was 13-20 under Travis Ford. Josh Schertz was hired from Indiana State, bringing star Robbie Avila with him. Year 1 was modest (19-15), ending with a humiliating 103-78 NIT loss that Schertz said <strong>"showed the chasm that existed between where we were and where we wanted to be."</strong></p><p style="margin-top:.5rem;">He rebuilt aggressively: six transfers ranked only 84th nationally by 247Sports, but every piece fit. The result: <strong>a 24-1 start, No. 18 in the AP Poll, school records for wins, threes, and total points.</strong> Four players shoot 40%+ from three. Eight average 5+ PPG.</p><p style="margin-top:.5rem;">The late-season stumble (3-4 to close) raised questions, but the resume is undeniable. This is SLU\'s first tournament since 2019 — and with Schertz\'s .773 career winning percentage, probably not the last.</p>',
      },
      {
        title: 'The 8-vs-9 History',
        type: 'card',
        content:
          '<p>The 8-9 matchup is the <strong>closest in the entire tournament</strong> — essentially a coin flip. Since 1985, 8-seeds have won roughly 51% of the time. Neither team has a meaningful seeding advantage. Recent 9-over-8 upsets include Missouri over Utah State (2023), Memphis over Boise State (2022), and Creighton over San Diego State (2021).</p><p style="margin-top:.5rem;">This particular matchup is especially volatile because both teams score at elite levels. SLU averages 87.2 PPG; Georgia averages 89.8. The combined 177 PPG average makes this the highest-scoring 8-9 game in the bracket. Buckle up.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Saint Louis',
      links: [
        { label: 'SLU Athletics — Billikens Face Georgia', url: 'https://slubillikens.com/news/2026/3/17/mens-basketball-mbb-preview-billikens-face-georgia-in-ncaa-tournament.aspx' },
        { label: 'The Defector — Can I Interest You In A Billiken?', url: 'https://defector.com/can-i-interest-you-in-a-billiken' },
        { label: 'Sports Reference — 2025-26 SLU Stats', url: 'https://www.sports-reference.com/cbb/schools/saint-louis/men/2026.html' },
        { label: 'SLU Athletics — Avila A-10 Player of the Year', url: 'https://slubillikens.com/news/2026/3/11/mens-basketball-avila-named-a-10-player-of-the-year-six-billikens-earn-all-conference-honors.aspx' },
        { label: 'CBS Sports — Why America Loves Robbie Avila', url: 'https://www.cbssports.com/watch/general/video/why-america-loves-robbie-avila' },
        { label: 'SLU Athletics — Record Comeback vs George Washington', url: 'https://slubillikens.com/news/2026/3/13/mens-basketball-school-record-comeback-propels-bills-to-a-10-semifinals.aspx' },
        { label: 'ESPN — Schertz Contract Extension', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48195939/saint-louis-josh-schertz-reach-contract-extension-ad-says' },
        { label: 'SI — Ten Cinderella Run Candidates', url: 'https://www.si.com/college-basketball/ten-teams-that-could-make-cinderella-runs-in-2026-mens-march-madness' },
        { label: 'Wikipedia — Robbie Avila', url: 'https://en.wikipedia.org/wiki/Robbie_Avila' },
        { label: 'SLU — What Is a Billiken?', url: 'https://www.slu.edu/about/key-facts/what-is-a-billiken.php' },
        { label: 'Wikipedia — Saint Louis University', url: 'https://en.wikipedia.org/wiki/Saint_Louis_University' },
        { label: 'BroBible — Cream Abdul-Jabbar Nickname', url: 'https://brobible.com/sports/article/cream-abdul-jabbar-robbie-avila-other-nicknames/' },
      ],
    },
    {
      heading: 'Georgia',
      links: [
        { label: 'GeorgiaDogs — Second Straight NCAA Bid', url: 'https://georgiadogs.com/news/2026/3/15/mens-basketball-bulldogs-earn-second-straight-ncaa-tournament-bid' },
        { label: 'SI — Georgia vs Saint Louis Everything to Know', url: 'https://www.si.com/college/georgia/basketball/georgia-vs-saint-louis-everything-to-know-about-the-1st-round-march-madness-game-01kkvhwe8g0v' },
        { label: 'SI — Georgia March Madness History', url: 'https://www.si.com/college/georgia/basketball/georgia-march-madness-history-record-titles-final-four-appearances-best-highlights-01kkvcapax63' },
        { label: 'Sports Reference — 2025-26 Georgia Stats', url: 'https://www.sports-reference.com/cbb/schools/georgia/men/2026.html' },
        { label: 'AJC — Mike White Has Bulldogs Rolling', url: 'https://www.ajc.com/sports/2026/03/how-mike-white-has-turned-uga-basketball-into-one-of-the-dangerous-teams/' },
        { label: 'GeorgiaDogs — Catchings Career Night vs Alabama', url: 'https://georgiadogs.com/news/2026/3/3/mens-basketball-catchings-career-night-leads-georgia-past-no-16-alabama-98-88' },
        { label: 'GeorgiaDogs — Millender Has Earned Every Opportunity', url: 'https://georgiadogs.com/news/2026/1/26/mens-basketball-millender-has-earned-every-opportunity' },
        { label: 'GeorgiaDogs — Cyril SEC All-Defensive Team', url: 'https://georgiadogs.com/news/2026/3/9/mens-basketball-somto-cyril-named-to-secs-all-defensive-team' },
        { label: 'Wikipedia — Georgia Bulldogs Basketball', url: 'https://en.wikipedia.org/wiki/Georgia_Bulldogs_basketball' },
        { label: 'Wikipedia — University of Georgia', url: 'https://en.wikipedia.org/wiki/University_of_Georgia' },
        { label: 'Wikipedia — Uga (mascot)', url: 'https://en.wikipedia.org/wiki/Uga_(mascot)' },
        { label: 'DawgNation — Georgia Returns to Tournament', url: 'https://www.dawgnation.com/mens-basketball/georgia-basketball-returns-ncaa-tournament-face-st-louis-first-round/E5V5CWJSC5ENBAIWLYWEPQHMX4/' },
        { label: 'Saturday Down South — How Far Will Georgia Advance?', url: 'https://www.saturdaydownsouth.com/news/college-basketball/how-far-will-georgia-advance-in-the-2026-ncaa-tournament/' },
        { label: 'Wikipedia — Mike White', url: 'https://en.wikipedia.org/wiki/Mike_White_(basketball)' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Saint Louis vs Georgia • NCAA First Round • March 19, 2026',
}

export default game
