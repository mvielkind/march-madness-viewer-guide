import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'texas-am-vs-houston-2026',
  title: 'Texas A&M vs Houston — Round of 32 Viewing Guide',
  eventTag: 'NCAA Tournament • Round of 32 • Oklahoma City, OK',
  date: 'Saturday, March 21, 2026',
  round: 'Round of 32',
  tipTime: '2026-03-21T19:45',
  venue: 'Paycom Center, Oklahoma City, OK • 7:45 PM CT • TNT',
  extraInfo: 'Winner advances to the <strong>Sweet 16</strong> at Toyota Center in Houston',
  teams: [
    {
      name: 'Texas A&M',
      mascot: 'Aggies',
      seed: '#10 Seed',
      record: '22-11 • Beat Saint Mary\'s 63-50',
      colors: { primary: '#500000', secondary: '#FFFFFF', name: 'texas-am' },
      className: 'texas-am',
      logoUrl: 'https://a.espncdn.com/i/teamlogos/ncaa/500/245.png',
    },
    {
      name: 'Houston',
      mascot: 'Cougars',
      seed: '#2 Seed',
      record: '29-6 • Beat Idaho 78-47',
      colors: { primary: '#C8102E', secondary: '#FFFFFF', name: 'houston' },
      className: 'houston',
      logoUrl: 'https://a.espncdn.com/i/teamlogos/ncaa/500/248.png',
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
      'The Texas rivalry nobody expected — and it might be the best game of the weekend. <strong>Texas A&M</strong> just upset Saint Mary\'s 63-50, forcing 18 turnovers with suffocating defense. <strong>Houston</strong> demolished Idaho 78-47 with a 26-4 first-half run. These are two Texas programs built on toughness by two very different coaches: first-year Bucky McMillan\'s up-tempo "Bucky Ball" vs. Kelvin Sampson\'s defense-first grind. And the winner gets the Sweet 16 at <strong>Toyota Center in Houston</strong> — a de facto home game for the Cougars.',
    cards: [
      {
        label: 'For Texas A&M',
        value:
          'Bucky McMillan inherited a program that <strong>lost its entire roster</strong> when Buzz Williams left. He assembled 14 new players and got them to the tournament in Year 1. Now they just <strong>upset a 7-seed wire-to-wire</strong>. Beating Houston — a Texas rival and #2 seed — would be the defining moment of his coaching career.',
      },
      {
        label: 'For Houston',
        value:
          'Kelvin Sampson is 70, a Hall of Fame finalist, and <strong>lost the national championship game 65-63 last year</strong>. He has 800+ wins, a redemption arc from Indiana, and three Final Fours. The championship is the one missing piece. Losing to a 10-seed Texas rival would be devastating.',
      },
      {
        label: 'The Toyota Center Factor',
        value:
          'The Sweet 16 and Elite Eight are at <strong>Toyota Center in Houston</strong>. If the Cougars win, they play their next two games in their NBA arena\'s backyard. That\'s a massive advantage — and A&M wants to take it away. The Aggies would love nothing more than sending Houston home before they get there.',
      },
      {
        label: 'Texas Bragging Rights',
        value:
          'These programs are <strong>90 miles apart</strong> on I-45. Texas A&M is SEC; Houston is Big 12. They don\'t play each other in conference. This is a rare collision of Texas basketball powers in March — and bragging rights are very much on the line.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: '"Bucky Ball" — Run, Gun, and Pressure',
      bullets: [
        '<strong>Up-tempo chaos:</strong> A&M scores 87.7 PPG (<strong>9th nationally</strong>), ranks 27th in adjusted tempo, and 10th in assists (18.1 APG). Five players average double figures. McMillan wants to push pace and create chaos — the opposite of what Houston prefers.',
        '<strong>First-round proof:</strong> <strong>Forced 18 turnovers</strong> against Saint Mary\'s and outscored them 28-12 in the paint. Agee had 22 and 9, Dominguez hit 3 threes. A&M led wire-to-wire — this wasn\'t a fluke.',
        '<strong>Portal-built depth:</strong> 14 new players from Alabama, Kansas, USC, NC State, Texas Tech, Creighton, and Spain\'s Liga ACB. Eight play 15+ minutes. The depth means they can sustain pressure for 40 minutes.',
        '<strong>Three-point volume:</strong> 14th nationally in three-point makes and attempts. Four players shoot 39%+ from deep (Dominguez 40.9%, Pop Isaacs 39.6%, Griffen 40%+). When the threes fall, "Bucky Ball" is devastating.',
        '<strong>Defensive weakness:</strong> Allow 79.6 PPG. Got blown out 83-63 by Oklahoma in the SEC Tournament. Against Houston\'s efficiency, giving up easy baskets is a death sentence.',
      ],
    },
    {
      team: 'b',
      title: 'The Best Two-Way Team in America',
      bullets: [
        '<strong>Suffocating defense:</strong> KenPom 7th in adjusted defensive efficiency. Allow <strong>62.9 PPG (2nd nationally)</strong>. JoJo Tugler leads the country in Defensive BPM (7.5) with 77 blocks and a 7\'6" wingspan. Houston\'s defense doesn\'t just slow teams — it breaks them.',
        '<strong>First-round dominance:</strong> <strong>Crushed Idaho 78-47</strong> with a 26-4 run. Shot 50% from the field and 53% from three. Outrebounded Idaho 47-32. Four players scored 12+. This team is clicking.',
        '<strong>Freshman stars:</strong> Kingston Flemings (16.4 PPG, Bob Cousy Award finalist) scored 18 vs. Idaho. Chris Cenac Jr. (potential #1 pick) had a career-high <strong>18 rebounds</strong>. These freshmen play like veterans.',
        '<strong>Elite on both ends:</strong> Only Houston, Michigan, and Duke are <strong>top-10 in both adjusted offense and defense</strong>. KenPom 5th overall. This isn\'t just a defensive team anymore — it\'s a complete team.',
        '<strong>Championship hunger:</strong> Lost the national title game <strong>65-63 to Florida</strong> last year. Emanuel Sharp, Milos Uzan, and Tugler came back specifically to finish the job. The motivation is palpable.',
      ],
    },
  ],
  keys: [
    {
      title: 'A&M forced 18 turnovers against Saint Mary\'s — Houston barely turns it over.',
      description:
        'A&M\'s defensive pressure was the story of their upset: 18 forced turnovers, suffocating ball pressure, 28-12 advantage in the paint. But Houston is a different beast. The Cougars are one of the most disciplined teams in the country with veteran guards Uzan and Sharp who\'ve been through a championship game. If A&M forces 15+ turnovers, they have a real chance. If Houston handles the pressure cleanly, their talent advantage takes over.',
    },
    {
      title: 'Can "Bucky Ball" tempo survive Houston\'s defense?',
      description:
        'This is the fundamental clash. A&M wants 75+ possessions; Houston wants 60. A&M scores 87.7 PPG; Houston allows 62.9. Something has to give. If A&M can push pace and create transition opportunities before Houston\'s defense sets, they can score in bunches. If Houston controls tempo and forces A&M into half-court possessions against the 7th-best defense in KenPom, the Aggies\' 79.6 PPG allowed becomes a bigger problem.',
    },
    {
      title: 'Agee vs. Tugler inside.',
      description:
        'Rashaun Agee (22 points, 9 rebounds vs. Saint Mary\'s) is a physical, experienced forward who\'s played at four schools. JoJo Tugler is the back-to-back Big 12 DPOY with 77 blocks and a 7\'6" wingspan. If Agee can get position and score in the paint — like he did against Saint Mary\'s (28-12 paint advantage) — A&M stays competitive. If Tugler shuts down A&M\'s interior game, the Aggies become one-dimensional perimeter shooters against elite close-outs.',
    },
    {
      title: 'Houston\'s freshmen were built for this — A&M\'s roster is brand new.',
      description:
        'Flemings (18 vs Idaho) and Cenac (18 rebounds) were the highest-rated recruits in Houston history. They\'ve played all season in a championship-caliber program. A&M\'s roster was assembled in weeks — 14 new players from 8 different schools, together since May. Chemistry matters in March. Houston\'s continuity and infrastructure could be the difference in a tight game.',
    },
    {
      title: 'The Sweet 16 is at Toyota Center. Houston wants home court.',
      description:
        'If Houston wins, they play their Sweet 16 and Elite Eight at Toyota Center — the Houston Rockets\' arena, minutes from campus. That\'s as close to a home-court advantage as you\'ll find in the tournament. A&M would love to spoil it. The Aggies\' fans will make the 3-hour drive from College Station to OKC, but this isn\'t Reed Arena. The stakes go beyond this game — they\'re playing for location advantage in the next round.',
    },
  ],
  players: [
    {
      team: 'a',
      name: 'Rashaun Agee',
      stats: '14.7 PPG • 8.9 RPG • 13 Double-Doubles',
      meta: 'F • 6-7 • Senior • Chicago, IL • All-SEC • 4th school',
      bio: 'From Chicago via New Mexico State, Bowling Green, USC, and now Texas A&M. Had to obtain a <strong>temporary restraining order</strong> to gain eligibility after an NCAA waiver dispute. Broke A&M\'s single-season double-double record. Dominated Saint Mary\'s with <strong>22 points and 9 rebounds</strong> in the first-round upset. Coach McMillan: <em>"He\'s just a soldier. He\'s not gonna back down from anybody."</em>',
    },
    {
      team: 'a',
      name: 'Ruben Dominguez',
      stats: '10.3 PPG • 40.9% 3PT',
      meta: 'G • 6-6 • Senior • Puerto Real, Spain • Former Liga ACB Pro',
      bio: 'From Puerto Real, Spain. <strong>2019 FIBA U16 European Championship MVP</strong> — led Spain to gold. Played 150+ professional games in Spain\'s Liga ACB, debuting at 17 <strong>against FC Barcelona</strong>. Came to America for the NIL opportunity: <em>"It\'s a big opportunity to change my life, my family\'s life."</em> Hit 3 threes (11 points) in the Saint Mary\'s win. Scored 30 vs. Manhattan.<br><a href="https://www.si.com/college/tamu/basketball/how-texas-am-changed-rueben-dominguezs-life" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Rylan Griffen',
      stats: '11.6 PPG • 40%+ 3PT',
      meta: 'G • 6-5 • Senior • Dallas, TX • Three Tournament Teams',
      bio: 'Has been part of <strong>three NCAA Tournament teams at three different schools</strong>: Alabama (2024 Final Four), Kansas, and now Texas A&M. From Dallas. Career-high 21 vs. Kentucky. Team is 12-3 when he scores in double figures. Brings high-major experience and clutch shooting.',
    },
    {
      team: 'a',
      name: 'Pop Isaacs',
      stats: '10.1 PPG • 39.6% 3PT',
      meta: 'G • 6-2 • Junior • Las Vegas, NV • Texas Tech/Creighton Transfer',
      bio: 'From Las Vegas. Was All-Big 12 Freshman Team and Third Team All-Big 12 at Texas Tech (15.8 PPG as a sophomore). Transferred to Creighton but suffered a season-ending hip injury after 8 games. Now healthy at A&M, providing elite perimeter spacing. His three-point shooting stretches defenses and opens the paint for Agee.',
    },
    {
      team: 'b',
      name: 'Kingston Flemings',
      stats: '16.4 PPG • 5.3 APG • .392 3PT',
      meta: 'G • Freshman • Bob Cousy Award Finalist • All-America',
      bio: 'The <strong>first freshman in Houston history to earn All-America honors</strong>. Set the Houston freshman single-game record with <strong>42 points at Texas Tech</strong> and the single-season record with 510 points. Scored 18 in the Idaho blowout. Unanimous All-Big 12 First Team. He plays like he\'s been here for four years.<br><a href="https://uhcougars.com/news/2026/3/10/mens-basketball-kingston-flemings-named-to-the-sporting-news-all-america-second-team" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'JoJo Tugler',
      stats: '8.4 PPG • 5.4 RPG • 77 BLK • .589 FG%',
      meta: 'F • 6-8 • Junior • 7\'6" Wingspan • Back-to-Back Big 12 DPOY',
      bio: 'The <strong>Lefty Driesell Award winner</strong> (nation\'s top defensive player) and back-to-back Big 12 Defensive Player of the Year. Leads the country in Defensive BPM (7.5) with 77 blocks despite being "only" 6-8 — his <strong>7\'6" wingspan</strong> is the key. Had 20 points and 10 rebounds in the Big 12 title game. The defensive anchor A&M has to solve.<br><a href="https://www.si.com/college/houston/basketball/how-jojo-tugler-s-impact-has-grown-for-the-houston-cougars" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Emanuel Sharp',
      stats: '15.3 PPG • .371 3PT • .892 FT',
      meta: 'G • Senior • Houston Career 3PT Record Holder',
      bio: 'Set the <strong>Houston all-time career three-point record</strong> (277, passing Marcus Sasser). Hit a career-high 8 threes (27 points) vs. Utah. 7th player in program history to reach 100 career victories. Went 6-of-7 from the field in the Idaho blowout (16 points). The veteran shooter who makes Houston\'s offense elite.',
    },
    {
      team: 'b',
      name: 'Chris Cenac Jr.',
      stats: '9.5 PPG • 7.5 RPG • .493 FG%',
      meta: 'C • 6-11, 240 • Freshman • Potential #1 NBA Pick • McDonald\'s All-American',
      bio: 'Houston\'s highest-rated recruit ever (No. 7 ESPN 100, No. 1 center). Had 17 points and <strong>career-high 14 rebounds</strong> vs. Kansas. Grabbed <strong>18 rebounds against Idaho</strong> in the first round. Projected potential No. 1 pick in the 2026 NBA Draft. At 6-11 with a 7\'4" wingspan, he\'s a physical force on both ends.<br><a href="https://www.si.com/college/houston/basketball/houston-cougars-freshman-chris-cenac-could-be-no-1-pick-2026-nba-draft" target="_blank">Read more →</a>',
    },
  ],
  funFacts: [
    {
      emoji: '🇪🇸',
      title: 'From Spain\'s Top League (Texas A&M)',
      body: '<strong>Ruben Dominguez</strong> played 150+ professional games in Spain\'s Liga ACB — debuting at 17 against FC Barcelona. He won FIBA U16 European Championship MVP for Spain. He came to America because <em>"the NIL is a big opportunity to change my life, my family\'s life."</em>',
    },
    {
      emoji: '🏆',
      title: 'Two Points from a Title (Houston)',
      body: 'Houston <strong>lost the 2025 national championship game 65-63 to Florida</strong>. Sharp, Uzan, and Tugler all came back specifically to finish the job. The two-point loss haunts this program. Sampson: <em>"I refuse to let someone take my joy for coaching away from me."</em>',
    },
    {
      emoji: '👨‍👦',
      title: 'The 12th Man (Texas A&M)',
      body: 'On January 2, 1922, <strong>E. King Gill</strong> — a basketball player — was called from the stands when the football team ran out of healthy players. He suited up and stood ready. Since then, the entire A&M student body <strong>stands throughout home football games</strong>. A&M trademarked "12th Man" in 1990.',
    },
    {
      emoji: '✊',
      title: 'The Battle of Hayes Pond (Houston)',
      body: 'Kelvin Sampson is a member of the <strong>Lumbee Native American tribe</strong>. His father was among <strong>500 Lumbee who drove the KKK out of Maxton, NC</strong>, in the 1958 "Battle of Hayes Pond." Sampson carries that heritage proudly. <a href="https://www.cbssports.com/college-basketball/news/houstons-kelvin-sampson-is-carrying-the-banner-for-his-lumbee-tribe-in-quest-for-federal-recognition/" target="_blank">Read more →</a>',
    },
    {
      emoji: '⏱️',
      title: '12 Points in 33 Seconds (Texas A&M)',
      body: 'In the 2016 NCAA Tournament, A&M trailed Northern Iowa by <strong>12 points with 44 seconds remaining</strong>. They scored 12 in 33 seconds — including a buzzer-beating layup to force overtime — and won in double OT. It remains the greatest comeback in NCAA Tournament history.',
    },
    {
      emoji: '🏀',
      title: 'Phi Slama Jama (Houston)',
      body: 'Houston\'s 1980s teams featured <strong>Hakeem Olajuwon and Clyde Drexler</strong>, reached three consecutive Final Fours, and were called "Phi Slama Jama" for their explosive dunking. The 1983 team lost one of history\'s greatest upsets: NC State\'s <strong>Lorenzo Charles dunk at the buzzer</strong>. <a href="https://en.wikipedia.org/wiki/Phi_Slama_Jama" target="_blank">More →</a>',
    },
    {
      emoji: '⚖️',
      title: 'Restraining Order to Play (Texas A&M)',
      body: 'Rashaun Agee had to obtain a <strong>temporary restraining order</strong> to gain eligibility at Texas A&M after an NCAA waiver dispute. He\'s now the team\'s leading scorer, broke the school double-double record, and dropped 22 and 9 in the first round.',
    },
    {
      emoji: '🐕',
      title: 'Reveille — The First Lady of Aggieland (Texas A&M)',
      body: 'A&M\'s mascot is a Rough Collie named <strong>Reveille</strong>. The tradition began in 1931 when cadets hit a stray dog with their car and adopted her. She barked at the morning bugle reveille call, earning her name. She\'s the <strong>highest-ranking member of the Corps of Cadets</strong>.',
    },
    {
      emoji: '🏟️',
      title: 'Home Court in the Sweet 16 (Houston)',
      body: 'If Houston wins, the Sweet 16 and Elite Eight are at <strong>Toyota Center — the Houston Rockets\' arena</strong>, minutes from campus. Tilman Fertitta, a Houston alum and Rockets owner, donated $20 million for the campus arena. Home-court advantage in March is almost unfair.',
    },
    {
      emoji: '📈',
      title: '14 New Players, 1 Year (Texas A&M)',
      body: 'When Buzz Williams left for Maryland, <strong>A&M lost its entire roster</strong>. Bucky McMillan assembled 14 new players from 8 different schools in weeks — and got them to the NCAA Tournament in Year 1. Only one player returned from last year.',
    },
    {
      emoji: '🎓',
      title: 'Famous Alumni Face-Off',
      body: '<strong>A&M:</strong> Robert Gates (Secretary of Defense), Rick Perry (Secretary of Energy), Johnny Manziel. <strong>Houston:</strong> Hakeem Olajuwon, Carl Lewis (9 Olympic golds), Jim Parsons (Sheldon Cooper). Combined: two Hall of Famers, a Heisman winner, and Sheldon.',
    },
    {
      emoji: '🔄',
      title: 'Sampson\'s Redemption (Houston)',
      body: 'Kelvin Sampson was <strong>forced to resign from Indiana in 2008</strong> after NCAA violations and served a 5-year show-cause penalty. He rebuilt as an NBA assistant (Bucks, Rockets), then took the Houston job in 2014. Now he has 800+ wins, three Final Fours, and is a <strong>Hall of Fame finalist</strong>.',
    },
  ],
  history: {
    callout:
      'Two Texas programs meeting in March for the first time in the modern era. <strong>Houston</strong> has Phi Slama Jama\'s legacy, Kelvin Sampson\'s three Final Fours, and a championship game loss still burning. <strong>Texas A&M</strong> has the greatest comeback in NCAA Tournament history and a first-year coach who just pulled off an upset. Only one gets to play the Sweet 16 at Toyota Center.',
    subsections: [
      {
        title: 'Houston\'s Championship Quest',
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '1982-84 — Phi Slama Jama',
            text: 'Hakeem Olajuwon and Clyde Drexler led Houston to <strong>three consecutive Final Fours</strong>. The 1983 loss to NC State on Lorenzo Charles\' buzzer-beating dunk remains one of the greatest upsets ever.',
          },
          {
            date: '2021 — Sampson\'s Final Four',
            text: 'Kelvin Sampson\'s rebuilt Houston program reached the <strong>Final Four for the first time since 1984</strong>. Lost to Baylor.',
          },
          {
            date: '2025 — Two Points Away',
            text: 'Houston reached the <strong>national championship game</strong> as a 1-seed. Lost to Florida 65-63. Sharp, Uzan, and Tugler came back to finish the job.',
          },
          {
            date: '2026 — Unfinished Business',
            text: 'The Cougars are 29-6, a 2-seed, and <strong>demolished Idaho 78-47</strong>. The Sweet 16 and Elite Eight are at Toyota Center. Everything is aligned.',
          },
        ],
      },
      {
        title: 'Texas A&M: The Comeback Kings',
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '2016 — 12 Points in 33 Seconds',
            text: 'A&M trailed Northern Iowa by 12 with 44 seconds left. They scored <strong>12 points in 33 seconds</strong> — including a buzzer-beating layup — and won in double overtime. The greatest comeback in NCAA Tournament history.',
          },
          {
            date: '2023 — Best-Ever Conference Record',
            text: 'Under Buzz Williams, A&M went <strong>15-3 in SEC play</strong> — the best conference record in program history.',
          },
          {
            date: '2025 — Williams Leaves',
            text: 'Buzz Williams left for Maryland. <strong>The entire roster transferred out.</strong> A&M hired Bucky McMillan from Samford.',
          },
          {
            date: '2026 — Year 1 Upset',
            text: 'McMillan assembled 14 new players and got to the tournament. Then <strong>upset Saint Mary\'s 63-50</strong>, forcing 18 turnovers. Now they face the 2-seed.',
          },
        ],
      },
      {
        title: 'Sampson\'s Redemption Arc',
        type: 'card',
        content:
          '<p>Kelvin Sampson\'s career nearly ended at Indiana. After NCAA violations involving impermissible phone calls, he was forced to resign in 2008 and hit with a <strong>5-year show-cause penalty</strong>. Many assumed he\'d never coach in college again. Instead, he rebuilt as an NBA assistant with the Bucks and Rockets, then took the Houston job in 2014. Since then: <strong>800+ wins, three Final Fours, a championship game appearance, back-to-back Big 12 Defensive Player of the Year selections, and Hall of Fame finalist status</strong>. The one thing missing is the trophy. At 70, with the Sweet 16 in his team\'s backyard, this might be his best chance.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Texas A&M',
      links: [
        { label: 'Sports Reference — 2025-26 A&M Stats', url: 'https://www.sports-reference.com/cbb/schools/texas-am/men/2026.html' },
        { label: '12thMan — NCAA Tournament Selection', url: 'https://12thman.com/news/2026/3/15/mens-basketball-mens-basketball-selected-as-no-10-seed-in-ncaa-tournament' },
        { label: '12thMan — McMillan Introduced', url: 'https://12thman.com/news/2025/4/7/mens-basketball-bucky-mcmillan-introduced-as-head-basketball-coach' },
        { label: 'SI — 4 Players Who Will Decide A&M\'s Run', url: 'https://www.si.com/college/tamu/basketball/4-players-who-will-decide-texas-am-march-madness-tournament-run' },
        { label: 'SI — How A&M Changed Dominguez\'s Life', url: 'https://www.si.com/college/tamu/basketball/how-texas-am-changed-rueben-dominguezs-life' },
        { label: 'SI — Best March Madness Moments in A&M History', url: 'https://www.si.com/college/tamu/basketball/the-best-march-madness-moments-in-texas-am-history' },
        { label: 'WREX — Marcus Hill\'s Journey', url: 'https://www.wrex.com/news/featured-reports/marcus-hills-basketball-journey-leads-to-texas-a-m/article_75620106-1932-4b08-9fcb-1c6a466386fd.html' },
        { label: 'TexAgs — Williams\' Exit', url: 'https://texags.com/s/66375/williams-exit-comes-after-six-good-but-never-great-years-at-texas-am' },
        { label: 'Texas A&M — 12th Man Tradition', url: 'https://www.tamu.edu/campus-community/traditions/gameday/12th-man.html' },
      ],
    },
    {
      heading: 'Houston',
      links: [
        { label: 'Sports Reference — 2025-26 Houston Stats', url: 'https://www.sports-reference.com/cbb/schools/houston/men/2026.html' },
        { label: 'UH Athletics — No. 2 Seed', url: 'https://uhcougars.com/news/2026/3/15/mens-basketball-5-5-mens-basketball-tabbed-as-2-seed-in-ncaa-tournament' },
        { label: 'SI — Houston Two-Way KenPom Dominance', url: 'https://www.si.com/college/houston/basketball/houston-cougars-two-way-dominance-has-them-in-rare-kenpom-company' },
        { label: 'SI — Cenac Could Be No. 1 Pick', url: 'https://www.si.com/college/houston/basketball/houston-cougars-freshman-chris-cenac-could-be-no-1-pick-2026-nba-draft' },
        { label: 'SI — JoJo Tugler\'s Impact', url: 'https://www.si.com/college/houston/basketball/how-jojo-tugler-s-impact-has-grown-for-the-houston-cougars' },
        { label: 'UH Athletics — Flemings All-America', url: 'https://uhcougars.com/news/2026/3/10/mens-basketball-kingston-flemings-named-to-the-sporting-news-all-america-second-team' },
        { label: 'UH Athletics — Sampson Hall of Fame Finalist', url: 'https://uhcougars.com/news/2026/2/11/mens-basketball-coach-kelvin-sampson-named-finalist-for-naismith-basketball-hall-of-fame' },
        { label: 'CBS Sports — Sampson Redemption Arc', url: 'https://www.cbssports.com/college-basketball/news/how-kelvin-sampson-repaired-his-career-at-houston-and-resurrected-the-cougars-who-are-back-in-the-final-four/' },
        { label: 'CBS Sports — Sampson Lumbee Tribe', url: 'https://www.cbssports.com/college-basketball/news/houstons-kelvin-sampson-is-carrying-the-banner-for-his-lumbee-tribe-in-quest-for-federal-recognition/' },
        { label: 'Yahoo Sports — Why Houston Will Win', url: 'https://sports.yahoo.com/articles/why-houston-basketball-win-2026-162442582.html' },
        { label: 'Wikipedia — Phi Slama Jama', url: 'https://en.wikipedia.org/wiki/Phi_Slama_Jama' },
        { label: 'SI — Houston Tournament History', url: 'https://www.si.com/college/houston/basketball/an-in-depth-look-at-the-houston-cougars-recent-ncaa-tournament-history' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Texas A&M vs Houston • NCAA Round of 32 • March 21, 2026',
}

export default game
