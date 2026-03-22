import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'miami-vs-purdue-2026',
  title: 'Miami vs Purdue \u2014 Round of 32 Viewing Guide',
  eventTag: 'NCAA Tournament \u2022 Round of 32 \u2022 St. Louis, MO',
  date: 'Sunday, March 22, 2026 \u2022 12:10 PM ET',
  round: 'Round of 32',
  tipTime: '2026-03-22T12:10',
  venue: 'Enterprise Center, St. Louis, Missouri \u2022 CBS',
  extraInfo: 'Winner advances to the <strong>Sweet 16</strong> in San Jose',
  teams: [
    {
      name: 'Miami',
      mascot: 'Hurricanes',
      seed: '#7 Seed',
      record: '26-8 \u2022 Beat Missouri 80-66',
      colors: { primary: '#F47321', secondary: '#005030', name: 'miami' },
      className: 'miami',
    },
    {
      name: 'Purdue',
      mascot: 'Boilermakers',
      seed: '#2 Seed',
      record: '28-8 \u2022 Beat Queens 104-71',
      colors: { primary: '#CEB888', secondary: '#000000', name: 'purdue' },
      className: 'purdue',
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
      'The team that engineered the <strong>largest turnaround in Division I basketball</strong> (7-24 to 26-8) meets the team that started the season <strong>ranked No. 1 in America</strong>, stumbled to 7th in its own conference, then won the Big Ten Tournament as a 7-seed. Miami pounds the paint and dominates the glass. Purdue runs the <strong>No. 2 offense in the country</strong> through the man who just became the <strong>NCAA\u2019s all-time career assists leader</strong>. Something\u2019s got to give \u2014 and a Sweet 16 trip to San Jose is on the line.',
    cards: [
      {
        label: 'For Miami',
        value:
          'Eighteen months after the <strong>Final Four</strong>, the program cratered to 7-24. Then Jai Lucas rebuilt the entire roster in one offseason and went <strong>26-8</strong>. They just won in a hostile St. Louis environment, outrebounding Missouri 46-30. A Sweet 16 berth would validate the most dramatic turnaround in college basketball \u2014 and prove this isn\u2019t a one-weekend wonder. Three senior transfers (Reneau, Donaldson, Udeh) have <strong>extensive NCAA Tournament experience at Indiana, Auburn, Michigan, Kansas, and TCU</strong>.',
      },
      {
        label: 'For Purdue',
        value:
          'Matt Painter is <strong>one win away from his 500th at Purdue</strong>. Braden Smith just broke Bobby Hurley\u2019s all-time NCAA assists record. This team was the preseason No. 1 in America, stumbled late in the regular season (four losses in their last six), then caught fire in the Big Ten Tournament. A Sweet 16 would prove the late-season struggles were a hiccup, not a trend. And Painter knows what it feels like to lose early \u2014 FDU as a 16-seed in 2023 still stings.',
      },
      {
        label: 'The Style Clash',
        value:
          'This is <strong>brute force vs. surgical precision</strong>. Miami ranks 331st in three-point attempts \u2014 they want to bully you inside. Purdue ranks 2nd in offensive efficiency and shoots 37.9% from three. Miami\u2019s weakness is three-point defense (opponents shoot 35.4%). Purdue\u2019s offense is built on three-point shooting. The matchup couldn\u2019t be more direct.',
      },
      {
        label: 'The Transfer Portal Game',
        value:
          'Miami was <strong>built through the portal</strong> \u2014 Reneau (Indiana), Donaldson (Auburn/Michigan), Udeh (Kansas/TCU), Washington (New Mexico). Purdue was <strong>built the old-school way</strong>, with Smith, Kaufman-Renn, and Loyer all multi-year Boilermakers. The exception: Oscar Cluff, the No. 1 transfer in the country from South Dakota State. Two philosophies. One game.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'The Monster Makeover',
      bullets: [
        '<strong>Paint dominance:</strong> Miami ranks <strong>331st in three-point volume</strong> (19.1 attempts per game) because they don\u2019t need threes. They shoot <strong>50.1% from the field</strong> overall, with Reneau (.549), Udeh (.735), and Henderson (.563) all finishing at elite rates inside. They outscore you from the paint and the free-throw line.',
        '<strong>Glass control:</strong> +7.7 rebounding margin (<strong>13th nationally</strong>). Against Missouri, they pulled down <strong>16 offensive rebounds</strong> and outscored the Tigers 19-2 in second-chance points. Six players average 3.1+ rebounds. When they get extra possessions, they convert.',
        '<strong>Donaldson runs it:</strong> Tre Donaldson averages <strong>16.5 PPG and 5.8 APG</strong>, plays 85%+ of minutes, and has proven clutch at three different schools. He scored Miami\u2019s final 15 points in a 67-66 win over Virginia Tech. Against Missouri: 17 points, 8 rebounds, 6 assists, 4 steals.',
        '<strong>The "Monster" culture is real:</strong> Before game one, Jai Lucas showed a Friday the 13th clip and asked: "What kind of monster do you want to be?" After wins, a player wears a hockey mask. The identity stuck: this is the most physical team in the ACC.',
        '<strong>Weakness:</strong> Opponents shoot <strong>35.4% from three</strong> against Miami \u2014 and in 6 of 8 losses, opponents shot 42%+ from deep. Purdue shoots 37.9% from three as a team. That\u2019s the direct vulnerability. Free-throw shooting (Udeh .512, Henderson .588) is also a concern. And only an <strong>8-man rotation</strong> with minimal bench contribution means fatigue could be a factor.',
      ],
    },
    {
      team: 'b',
      title: 'The No. 2 Offense in America',
      bullets: [
        '<strong>Elite efficiency:</strong> Purdue ranks <strong>2nd in KenPom offensive efficiency (125.5)</strong> and shoots 49.9% from the field. Braden Smith\u2019s <strong>9.0 APG</strong> \u2014 now the NCAA\u2019s all-time career assists leader \u2014 runs an offense that finds the right shot every time. Against Queens, they shot <strong>63% from the field and 58% from three</strong>.',
        '<strong>Inside-out attack:</strong> Kaufman-Renn (14.0 PPG, 57.9% FG) and Cluff (10.6 PPG, 69.8% FG) dominate inside. Loyer (13.8 PPG, 42.3% from three) stretches the defense. Smith finds the open man. When the inside game works, the threes open up. When the threes fall, the paint opens up. It\u2019s a devastating loop.',
        '<strong>Big Ten Tournament momentum:</strong> After losing four of their last six regular season games, Purdue ripped off <strong>four wins in four days</strong> as the 7th seed to win the Big Ten Tournament \u2014 the first 7-seed ever to do so. Beat regular-season champion Michigan 80-72 in the final. Then demolished Queens 104-71. They\u2019re peaking.',
        '<strong>Smith makes history:</strong> Against Queens, Smith recorded his <strong>1,077th career assist</strong> \u2014 breaking Bobby Hurley\u2019s 33-year-old NCAA record. He also holds the Big Ten single-season, tournament single-game (16), and tournament career (96) assist records. He\u2019s playing the best basketball of his life at the right time.',
        '<strong>Weakness:</strong> Defense ranks <strong>188th in KenPom</strong>. They lost to a 16-seed (FDU) three years ago and to double-digit seeds three straight years (2021-2023). Miami\u2019s physical rebounding and paint dominance could exploit the defense. And the late-season regular-season collapse (preseason No. 1 to 7th in the Big Ten) showed this team can lose its way.',
      ],
    },
  ],
  keys: [
    {
      title: 'Purdue\u2019s three-point shooting vs. Miami\u2019s three-point defense.',
      description:
        'This is the game. Purdue shoots 37.9% from three as a team, led by Loyer at 42.3%. Miami opponents shoot 35.4% from three \u2014 and in 6 of 8 Hurricane losses, opponents shot 42%+ from deep. If Loyer and Smith are hitting from the perimeter, Miami\u2019s pack-the-paint defense collapses because they have to extend. If Purdue\u2019s shooters are cold, Miami can load up inside and make this a street fight in the paint \u2014 exactly the game they want.',
    },
    {
      title: 'Miami\u2019s rebounding vs. Purdue\u2019s offensive efficiency.',
      description:
        'Miami\u2019s +7.7 rebounding margin is 13th nationally. They grabbed 16 offensive rebounds against Missouri and outscored them 19-2 in second-chance points. But Purdue rarely gives you the chance \u2014 they shoot 49.9% from the field. When shots go in, there are no rebounds to grab. Miami needs to force misses to unleash their rebounding advantage, and Purdue\u2019s offensive efficiency makes that incredibly hard.',
    },
    {
      title: 'Braden Smith vs. Miami\u2019s assist defense.',
      description:
        'Smith averages 9.0 APG against a Miami defense that ranks <strong>217th in assist defense</strong>, allowing 13.9 assists per game (and 16.3 per game over their last three). This is a mismatch. Smith dissects defenses with his vision, and Miami hasn\u2019t faced a point guard this caliber since \u2014 well, maybe ever this season. If Smith gets into the paint and starts finding Kaufman-Renn and Loyer, Miami\u2019s defense could unravel.',
    },
    {
      title: 'The bench depth gap.',
      description:
        'Miami runs an <strong>8-man rotation</strong> with almost zero bench contribution \u2014 only one reserve logged more than four minutes against Missouri. Purdue is deeper, with Cox (8.3 PPG), Jacobsen, and Gicarri Harris providing real minutes off the bench. In a Sunday afternoon game after both teams played Friday night, fatigue matters. If this game goes to overtime or stays physical throughout, Miami\u2019s thin rotation becomes a serious liability.',
    },
    {
      title: 'Can Miami\u2019s tournament veterans outperform Purdue\u2019s system?',
      description:
        'Miami\u2019s three senior transfers \u2014 Reneau (Indiana), Donaldson (Auburn, Michigan), Udeh (Kansas, TCU) \u2014 have combined for 10+ NCAA Tournament games across five different programs. Donaldson helped Michigan reach the 2025 Sweet 16. They know the moment. But Purdue\u2019s core four (Smith, Kaufman-Renn, Loyer, Cox) have played together for years. System chemistry vs. individual experience. In March, sometimes the experienced closer (Donaldson) outweighs the system. Sometimes the system wins.',
    },
  ],
  prediction: {
    summary: 'This is a style clash that favors Purdue on paper but gives Miami a path. Purdue\'s No. 2 offense in America (125.5 efficiency) attacks Miami\'s biggest weakness: three-point defense (opponents shooting 35.4%, and 42%+ in 6 of 8 losses). Braden Smith\'s 9.0 APG against Miami\'s 217th-ranked assist defense is a mismatch. But Miami\'s physicality and rebounding (+7.7 margin) can disrupt any offense, and they proved against Missouri that they can win in a hostile environment. The key: if Loyer hits early threes, Miami has to extend their defense, and Purdue\'s inside-out attack opens up. If Loyer is cold, Miami can pack the paint, and Purdue\'s 188th-ranked defense suddenly has to stop Reneau, Udeh, and Henderson in the post. Purdue\'s depth advantage and three-point shooting should ultimately win out, but Donaldson\'s proven clutch gene makes a late-game comeback always possible.',
    phases: [
      {
        title: 'Opening 10 Minutes',
        description: 'Miami comes out physical, establishing their identity from the opening possession. Udeh contests a Kaufman-Renn post-up and Reneau draws an early foul. But Smith finds Loyer for an open three on the very first possession, and Purdue\'s spacing immediately poses problems. Miami answers through Reneau inside. The pace is faster than Miami wants but slower than Purdue prefers. It\'s 18-16 Purdue as both teams feel each other out.',
      },
      {
        title: 'Mid-First Half to Halftime',
        description: 'Purdue\'s offense finds its rhythm. Smith starts seeing passing lanes that Miami\'s defense can\'t close, feeding Kaufman-Renn for a pair of easy finishes inside. Loyer hits another three, and suddenly Miami has to extend their defense. Reneau keeps the Hurricanes in it with 12 first-half points, bullying his way to the rim. But Miami\'s bench offers nothing \u2014 Lucas rides his starters all 20 minutes. Purdue leads 38-33 at the break, shooting 52% to Miami\'s 45%.',
      },
      {
        title: 'Second Half \u2014 Miami Punches Back',
        description: 'Miami opens the second half with a 7-0 run. Donaldson attacks the rim for an and-one, Henderson powers through for a layup, and Udeh grabs two offensive rebounds on the same possession. The crowd noise tilts toward the underdog. Tied at 45 with 14 minutes left. Purdue\'s defense \u2014 ranked 188th for a reason \u2014 struggles to contain Miami\'s physicality. But Smith answers with a pull-up jumper and feeds Cluff for a dunk. The teams trade blows. It\'s 58-55 Purdue with 8 minutes left.',
      },
      {
        title: 'Final 8 Minutes',
        description: 'This is where Purdue\'s depth and shooting separate them. Cox hits a corner three off a Smith assist. Loyer drills another from the wing. Miami\'s starters are logging heavy minutes and the legs start to go \u2014 Henderson misses two free throws (.588 FT%), and Udeh goes 0-for-2 at the line (.512 FT%). Donaldson tries to take over, scoring 8 points in the final stretch including a tough pull-up, but Smith matches him with a driving layup and a no-look feed to Kaufman-Renn. Purdue\'s system holds. The Boilermakers pull away in the final three minutes as Miami\'s shots start falling short from fatigue. Painter gets his 500th win.',
      },
    ],
    projectedScore: {
      teamA: 68,
      teamB: 77,
      rationale: 'Purdue\'s three-point shooting (37.9% as a team, Loyer at 42.3%) exploits Miami\'s biggest weakness. Smith\'s 9.0 APG against the 217th-ranked assist defense creates too many easy looks. Miami\'s rebounding keeps it close through three quarters, but their thin bench and free-throw struggles (Udeh .512, Henderson .588) cost them down the stretch. Donaldson scores 20+ but can\'t do it alone against Purdue\'s depth.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'Malik Reneau',
      stats: '18.8 PPG \u2022 6.6 RPG \u2022 2.0 APG \u2022 .549 FG%',
      meta: 'F \u2022 6-9, 233 lbs \u2022 Senior \u2022 All-ACC First Team',
      bio: 'From <strong>Miami, Florida</strong>. Won back-to-back national titles at Montverde Academy. Former top-30 recruit who spent three seasons at Indiana before entering the portal and <strong>coming home</strong>. Three career all-conference honors across two schools. Scored <strong>24 points (19 in the second half)</strong> in the first-round win over Missouri, including back-to-back buckets during the game-breaking 11-0 run. The interior engine of everything Lucas runs \u2014 and a Miami kid playing for his hometown school.<br><a href="https://miamihurricanes.com/news/2025/04/07/mbb-signs-malik-reneau/" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'a',
      name: 'Tre Donaldson',
      stats: '16.5 PPG \u2022 5.8 APG \u2022 3.5 RPG \u2022 .458 FG%',
      meta: 'G \u2022 6-2 \u2022 Senior \u2022 All-ACC Second Team \u2022 3rd School',
      bio: 'Originally recruited as a <strong>football prospect</strong> but chose basketball at Auburn. Won the 2024 SEC Tournament title. Helped Michigan reach the 2025 Sweet 16. Transferred to Miami for his final year. Career-high <strong>32 points vs. Virginia Tech</strong> \u2014 scoring all of Miami\u2019s final 15 in a 67-66 win. Against Missouri: <strong>17 points, 8 rebounds, 6 assists, 4 steals</strong> in a hostile St. Louis environment. A journeyman who found his peak at his third school. Plays 85%+ of Miami\u2019s minutes. The closer.<br><a href="https://themiamihurricane.com/2026/02/18/tre-donaldson-takes-over-leads-miami-to-67-66-win-over-virginia-tech-in-instant-classic/" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'a',
      name: 'Ernest Udeh Jr.',
      stats: '6.9 PPG \u2022 9.3 RPG \u2022 1.4 BPG \u2022 .735 FG%',
      meta: 'C \u2022 6-11, 250 lbs \u2022 Senior \u2022 ACC All-Defensive Team',
      bio: 'From Orlando, Florida. <strong>McDonald\u2019s All-American</strong>. Began at Kansas, where he set the school record with <strong>21 consecutive made field goals</strong>. Started all 59 games over two seasons at TCU. Now anchoring Miami\u2019s defense with <strong>9.3 RPG (2nd in ACC)</strong> and 1.4 BPG. Grabbed <strong>10 rebounds (5 offensive)</strong> against Missouri, anchoring Miami\u2019s 46-30 rebounding edge. His .735 FG% means he only takes shots he can make. The Achilles\u2019 heel: <strong>.512 free-throw shooting</strong>.<br><a href="https://miamihurricanes.com/news/2026/03/06/getting-to-know-ernest-udeh-jr/" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'a',
      name: 'Shelton Henderson',
      stats: '13.7 PPG \u2022 4.8 RPG \u2022 2.0 APG \u2022 .563 FG%',
      meta: 'F \u2022 6-6, 240 lbs \u2022 Freshman \u2022 Five-Star, Houston POY',
      bio: 'From Bellaire, Texas. <strong>2025 Houston High School Player of the Year</strong>. Five-star recruit rated No. 23 overall. Was Jai Lucas\u2019s first five-star recruit at Miami \u2014 Lucas recruited him while still at Duke. At <strong>240 pounds as a freshman</strong>, he\u2019s one of the most physically imposing first-years in the country. Scored <strong>15 points with 6 rebounds</strong> against Missouri. NBA draft prospect. His three-point shot (.271) and free throws (.588) need work, but his physicality fits the "Monster" identity perfectly.<br><a href="https://www.si.com/nba/draft/newsfeed/miami-five-star-freshman-shelton-henderson-dominates-against-fiu-01kcpt9dhrce" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'b',
      name: 'Braden Smith',
      stats: '14.3 PPG \u2022 9.0 APG \u2022 3.6 RPG',
      meta: 'G \u2022 6-3 \u2022 Senior \u2022 Consensus All-American \u2022 NCAA Assists Leader',
      bio: 'From Westfield, Indiana. Both parents played college basketball at Arkansas Tech. High school all-time leader in points (1,629) and assists (453) at Westfield, leading them to their first sectional title in <strong>105 years</strong>. Just became the <strong>NCAA Division I all-time career assists leader</strong> (1,077+), breaking Bobby Hurley\u2019s 33-year-old record during the Queens game. Also holds the Big Ten single-season and tournament assist records. Scored <strong>26 points (10-15 FG) with 8 assists</strong> against Queens. His 9.0 APG runs the No. 2 offense in America. He sees passes nobody else sees.<br><a href="https://en.wikipedia.org/wiki/Braden_Smith_(basketball)" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'b',
      name: 'Trey Kaufman-Renn',
      stats: '14.0 PPG \u2022 8.5 RPG \u2022 2.6 APG \u2022 .579 FG%',
      meta: 'F \u2022 6-9, 240 lbs \u2022 Senior \u2022 All-Big Ten',
      bio: 'From Sellersburg, Indiana. Four-star recruit who chose Purdue over Indiana, North Carolina, and Virginia. Majoring in <strong>Philosophy</strong>. The interior anchor who makes Purdue\u2019s offense elite with <strong>57.9% shooting</strong>. Scored <strong>25 points with 9 rebounds</strong> against Queens, exploiting the frontcourt mismatch all night. His scoring dropped from 20.1 PPG last season, which was part of Purdue\u2019s mid-season struggles, but he\u2019s peaking at the right time.<br><a href="https://purduesports.com/sports/mens-basketball/roster/player/trey-kaufman-renn" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'b',
      name: 'Fletcher Loyer',
      stats: '13.8 PPG \u2022 2.3 RPG \u2022 .423 3P% \u2022 .862 FT%',
      meta: 'G \u2022 6-4 \u2022 Senior \u2022 Sharpshooter \u2022 Basketball Family',
      bio: 'From Fort Wayne, Indiana. His father John is a scout for the <strong>LA Clippers</strong> and was interim coach of the Detroit Pistons. His grandfather played at Purdue in 1964. His brother Foster played at Michigan State. Won the national <strong>High School 3-Point Championship</strong>. Shoots <strong>42.3% from three</strong> \u2014 the perimeter weapon that opens up Smith\u2019s passing lanes and Kaufman-Renn\u2019s interior game. When Loyer is hitting, Purdue\u2019s offense is virtually unguardable. He directly attacks Miami\u2019s biggest weakness: three-point defense.<br><a href="https://en.wikipedia.org/wiki/Fletcher_Loyer" target="_blank">Read more \u2192</a>',
    },
    {
      team: 'b',
      name: 'Oscar Cluff',
      stats: '10.6 PPG \u2022 7.4 RPG \u2022 .698 FG%',
      meta: 'F \u2022 6-11, 250 lbs \u2022 Senior \u2022 No. 1 Transfer in America',
      bio: 'From <strong>Sunshine Coast, Australia</strong>. Ranked as the <strong>No. 1 transfer in the country</strong> when he committed to Purdue. Dominated at South Dakota State (17.6 PPG, 12.3 RPG, 63.4% FG) \u2014 one of only 10 players in NCAA history to match that stat line, alongside Zach Edey, Blake Griffin, and Tim Duncan. Against Queens: <strong>9 points, 11 rebounds, 5 assists, 4 blocks</strong>. Shoots <strong>69.8% from the field</strong> \u2014 among the best in the country.<br><a href="https://www.si.com/college/purdue/basketball/oscar-cluff-explains-why-transfer-to-purdue-was-a-no-brainer-college-basketball" target="_blank">Read more \u2192</a>',
    },
  ],
  funFacts: [
    {
      emoji: '\uD83C\uDFAF',
      title: 'The All-Time Assists King (Purdue)',
      body: 'Braden Smith broke <strong>Bobby Hurley\u2019s 33-year-old NCAA career assists record</strong> during the Queens game, recording his 1,077th assist just eight minutes in. He also holds the Big Ten single-season record, the Big Ten Tournament single-game record (16), and the tournament career record (96). He\u2019s the most prolific passer in college basketball history.',
    },
    {
      emoji: '\uD83C\uDFAD',
      title: 'The Friday the 13th Speech (Miami)',
      body: 'Before Miami\u2019s first game, Jai Lucas showed his team the scene from the 2009 <strong>Friday the 13th</strong> reboot where Jason Voorhees discovers his hockey mask. He asked: "What kind of monster do you want to be?" After each win, a player who embodies team values <strong>wears a hockey mask</strong> ceremonially. The "Monster" identity stuck.',
    },
    {
      emoji: '\uD83D\uDE80',
      title: 'Cradle of Astronauts (Purdue)',
      body: 'Purdue has produced <strong>24 astronauts</strong>, including <strong>Neil Armstrong</strong> (first person on the Moon) and <strong>Gene Cernan</strong> (last person on the Moon). It\u2019s known as the "Cradle of Astronauts." Other notable Purdue alumni: Drew Brees and Orville Redenbacher.',
    },
    {
      emoji: '\uD83D\uDD04',
      title: 'The Largest Turnaround in D-I (Miami)',
      body: 'Miami went from <strong>7-24 to 26-8</strong> in one season \u2014 a 19-win improvement that\u2019s the <strong>largest single-season turnaround in Division I basketball</strong>. Jim Larra\u00f1aga retired mid-season. Jai Lucas rebuilt the entire roster through the transfer portal in a single offseason. And now they\u2019re in the Round of 32.',
    },
    {
      emoji: '\uD83D\uDE31',
      title: 'The FDU Nightmare (Purdue)',
      body: 'In 2023, <strong>No. 16 Fairleigh Dickinson upset No. 1 Purdue 63-58</strong>. It was only the second 16-over-1 upset ever. Before that, Purdue lost to 13-seed North Texas (2021) and 15-seed Saint Peter\u2019s (2022). <strong>Three straight years of double-digit seed losses.</strong> The scar tissue is real.',
    },
    {
      emoji: '\uD83D\uDCBC',
      title: 'The Transfer Portal Game (Both)',
      body: 'Miami was <strong>built through the portal</strong>: Reneau (Indiana), Donaldson (Auburn/Michigan), Udeh (Kansas/TCU), Washington (New Mexico). Purdue was <strong>built the old-school way</strong>, with Smith, Kaufman-Renn, and Loyer as multi-year Boilermakers. The one exception: Oscar Cluff, the No. 1 transfer in America. Two philosophies collide.',
    },
    {
      emoji: '\uD83C\uDFC8',
      title: 'Football Prospect Turned Hoops Star (Miami)',
      body: 'Tre Donaldson was originally recruited as a <strong>football prospect</strong> before choosing basketball at Auburn. He won the 2024 SEC Tournament title, helped Michigan reach the 2025 Sweet 16, and now leads Miami with <strong>16.5 PPG and 5.8 APG</strong> at his third school.',
    },
    {
      emoji: '\uD83D\uDE82',
      title: 'The Boilermaker Special (Purdue)',
      body: 'Purdue\u2019s mascot is a <strong>locomotive mounted on a car chassis</strong> \u2014 claimed to be the world\u2019s largest, fastest, heaviest, and loudest collegiate mascot. First built in 1940, now on its seventh version, it travels to every away football game at <strong>speeds up to 75 MPH</strong>. The current model still carries the bell and whistle from the original.',
    },
    {
      emoji: '\uD83E\uDD85',
      title: 'Why an Ibis? (Miami)',
      body: 'Sebastian the Ibis was chosen because the white ibis is <strong>the last wildlife to take shelter before a hurricane and the first to reappear afterward</strong> \u2014 symbolizing bravery and resilience. Originally named "Icky," the mascot was later renamed after San Sebastian Hall.',
    },
    {
      emoji: '\uD83D\uDCDA',
      title: 'Philosophy Major Dominates the Paint (Purdue)',
      body: 'Trey Kaufman-Renn is majoring in <strong>Philosophy</strong> at Purdue while shooting 57.9% from the field. He scored 25 points and grabbed 9 rebounds against Queens. As Descartes might say: "I think, therefore I dunk."',
    },
    {
      emoji: '\uD83C\uDFAC',
      title: 'The Rock Went to "The U" (Miami)',
      body: '<strong>Dwayne "The Rock" Johnson</strong> graduated from the University of Miami in 1995 with a degree in criminology and physiology. Other famous alumni: <strong>Gloria Estefan</strong>, <strong>Ray Liotta</strong>, and <strong>Sylvester Stallone</strong> (who attended but didn\u2019t graduate).',
    },
    {
      emoji: '\uD83C\uDFC6',
      title: 'Painter\u2019s 500th Win (Purdue)',
      body: 'A Purdue victory would be Matt Painter\u2019s <strong>500th career win at Purdue</strong>. He\u2019s been the head coach for 21 years, played at Purdue from 1989-93, and has been named Big Ten Coach of the Year five times. He also won the 2025 Wooden "Legends of Coaching" Award.',
    },
  ],
  history: {
    callout:
      'Purdue leads the all-time series <strong>3-1</strong>, though these programs have rarely crossed paths. They\u2019ve never met in the NCAA Tournament. Purdue has <strong>38 tournament appearances and 3 Final Fours but has never won a national championship</strong>. Miami reached the <strong>Final Four in 2023</strong> under Jim Larra\u00f1aga, then cratered to 7-24, and now is back in the tournament under a brand-new coach. Both programs are chasing elusive breakthroughs \u2014 Purdue wants its first title, Miami wants to prove its resurrection is real.',
    subsections: [
      {
        title: 'Purdue\u2019s Championship Chase \u2014 Always the Bridesmaid',
        type: 'timeline' as const,
        content: '',
        timeline: [
          {
            date: '1969',
            text: 'Led by All-American <strong>Rick Mount</strong>, Purdue reaches the National Championship Game. Loses to UCLA and John Wooden. The closest they\u2019ve come.',
          },
          {
            date: '1980',
            text: '<strong>Joe Barry Carroll</strong> leads Purdue to the Final Four. UCLA ends the run again in the semifinals.',
          },
          {
            date: '2023',
            text: 'The nightmare. <strong>No. 16 Fairleigh Dickinson upsets No. 1 Purdue 63-58</strong>. Only the second 16-over-1 upset in history. The worst loss in program history.',
          },
          {
            date: '2024',
            text: 'Redemption run. <strong>Zach Edey</strong> leads Purdue to the National Championship Game for the first time in 55 years. They lose to UConn 75-60. So close, again.',
          },
          {
            date: '2026',
            text: 'The senior class of Smith, Kaufman-Renn, and Loyer \u2014 together for four years \u2014 makes one final push. After falling from preseason No. 1 to 7th in the Big Ten, they won the conference tournament and demolished Queens 104-71. The championship chase continues.',
          },
        ],
      },
      {
        title: 'Miami\u2019s Rise, Fall, and Resurrection',
        type: 'card' as const,
        content:
          '<p>In April 2023, Jim Larra\u00f1aga led Miami to the <strong>Final Four</strong> as a 5-seed \u2014 beating top-seeded Houston and 2-seed Texas. It was the program\u2019s greatest achievement. Then eight players entered the portal. The 2024-25 season was a disaster: <strong>7-24</strong>. Larra\u00f1aga retired mid-season at 75.</p><p style="margin-top:.5rem;">Enter <strong>Jai Lucas</strong>, a 37-year-old first-time head coach. He rebuilt the entire roster in a single offseason \u2014 Reneau from Indiana, Donaldson from Michigan, Udeh from TCU, Henderson as a five-star freshman. The result: <strong>26-8 and back in the NCAA Tournament</strong>. They just beat Missouri 80-66 in a hostile environment, outrebounding them by 16. The resurrection is real, and now they face the No. 2 seed.</p>',
      },
      {
        title: 'The 2-vs-7 Matchup: Purdue\u2019s Underdog History',
        type: 'card' as const,
        content:
          '<p>Historically, the 2-seed wins the 2-vs-7 matchup about <strong>71% of the time</strong>. But Purdue has a complicated March history. They lost to a 16-seed (FDU in 2023), a 15-seed (Saint Peter\u2019s in 2022), and a 13-seed (North Texas in 2021). <strong>Three straight years of double-digit seed losses.</strong></p><p style="margin-top:.5rem;">Miami isn\u2019t a typical 7-seed, either. They\u2019re <strong>KenPom 31st</strong> with a 33rd-ranked offense and 38th-ranked defense. They have three senior transfers with <strong>10+ combined NCAA Tournament games</strong> across Indiana, Auburn, Michigan, Kansas, and TCU. They\u2019re battle-tested in a way most 7-seeds aren\u2019t. This is a genuine threat to Purdue\u2019s Sweet 16 hopes.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Miami',
      links: [
        { label: 'Sports Reference \u2014 2025-26 Miami Stats', url: 'https://www.sports-reference.com/cbb/schools/miami-fl/men/2026.html' },
        { label: 'ESPN \u2014 Miami 80-66 Missouri Box Score', url: 'https://www.espn.com/mens-college-basketball/game/_/gameId/401856518/missouri-miami' },
        { label: 'Yahoo Sports \u2014 Reneau Scores 24 in Tournament Win', url: 'https://sports.yahoo.com/articles/malik-reneau-scores-24-miami-044035740.html' },
        { label: 'The Miami Hurricane \u2014 Takeaways from Win over Missouri', url: 'https://themiamihurricane.com/2026/03/21/takeaways-from-miamis-80-66-win-over-missouri-in-the-first-round-of-the-ncaa-tournament/' },
        { label: '247Sports \u2014 Miami Knocks Off Missouri', url: 'https://247sports.com/college/miami/article/miami-hurricanes-basketball-knocks-off-missouri-in-ncaa-tournament-278371038/' },
        { label: '247Sports \u2014 Inside Miami\'s Monster Makeover', url: 'https://247sports.com/article/miami-jai-lucas-college-basketball-biggest-turnaround-277146740/' },
        { label: '247Sports \u2014 All-ACC Honors', url: 'https://247sports.com/college/miami/article/miami-hurricanes-basketball-senior-trio-malik-reneau-tre-donaldson-and-ernest-udeh-earn-all-acc-honors-276468422/' },
        { label: 'ACC \u2014 Reneau Scores 24 vs. Missouri', url: 'https://theacc.com/news/2026/3/21/mens-basketball-malik-reneau-scores-24-as-miami-pulls-away-from-missouri-for-80-66-win-in-ncaa-tournament.aspx' },
        { label: 'Miami Athletics \u2014 Reneau Signing', url: 'https://miamihurricanes.com/news/2025/04/07/mbb-signs-malik-reneau/' },
        { label: 'The Miami Hurricane \u2014 Donaldson vs. Virginia Tech', url: 'https://themiamihurricane.com/2026/02/18/tre-donaldson-takes-over-leads-miami-to-67-66-win-over-virginia-tech-in-instant-classic/' },
        { label: 'SI \u2014 Henderson Dominates FIU', url: 'https://www.si.com/nba/draft/newsfeed/miami-five-star-freshman-shelton-henderson-dominates-against-fiu-01kcpt9dhrce' },
        { label: 'Wikipedia \u2014 Jai Lucas', url: 'https://en.wikipedia.org/wiki/Jai_Lucas' },
        { label: 'Wikipedia \u2014 University of Miami', url: 'https://en.wikipedia.org/wiki/University_of_Miami' },
      ],
    },
    {
      heading: 'Purdue',
      links: [
        { label: 'Sports Reference \u2014 2025-26 Purdue Stats', url: 'https://www.sports-reference.com/cbb/schools/purdue/men/2026.html' },
        { label: 'ESPN \u2014 Purdue 104-71 Queens Recap', url: 'https://www.espn.com/mens-college-basketball/recap/_/gameId/401856519' },
        { label: 'ESPN \u2014 Purdue Wins Big Ten Tournament', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48217484/purdue-trips-no-3-michigan-win-big-ten-tournament-title' },
        { label: 'SI \u2014 3 Thoughts from Purdue 104-71 Win', url: 'https://www.si.com/college/purdue/basketball/three-thoughts-from-purdue-104-71-win-vs-queens-start-ncaa-tournament' },
        { label: 'SI \u2014 5 Things to Know About Miami', url: 'https://www.si.com/college/purdue/basketball/five-things-know-about-purdue-second-round-ncaa-tournament-opponent-miami-hurricanes' },
        { label: 'NBA.com \u2014 Smith Sets Career Assists Record', url: 'https://www.nba.com/news/ncaa-tournament-2026-queens-vs-purdue' },
        { label: 'CBS Sports \u2014 Purdue Wins Big Ten Title', url: 'https://www.cbssports.com/college-basketball/news/michigan-purdue-score-live-updates-big-ten-tournament-championship-game/live/' },
        { label: 'Purdue Athletics \u2014 Big Ten Championship', url: 'https://purduesports.com/news/2026/03/15/18-purdue-wins-big-ten-tournament-title-over-3-michigan' },
        { label: '247Sports \u2014 What Happened to Purdue', url: 'https://247sports.com/article/what-happened-to-purdue-insiders-assess-preseason-no-1-boilermakers-collapse-before-march-madness-277188207/' },
        { label: 'DraftKings \u2014 Purdue vs. Miami Odds', url: 'https://dknetwork.draftkings.com/2026/03/21/opening-odds-for-purdue-boilermakers-vs-miami-hurricanes-in-march-madness-2026-second-round/' },
        { label: 'Wikipedia \u2014 Braden Smith', url: 'https://en.wikipedia.org/wiki/Braden_Smith_(basketball)' },
        { label: 'Wikipedia \u2014 Matt Painter', url: 'https://en.wikipedia.org/wiki/Matt_Painter' },
        { label: 'Wikipedia \u2014 Purdue Boilermakers Basketball', url: 'https://en.wikipedia.org/wiki/Purdue_Boilermakers_men%27s_basketball' },
        { label: 'Sports Reference \u2014 Purdue Head-to-Head', url: 'https://www.sports-reference.com/cbb/schools/purdue/men/head-to-head.html' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide \u2022 Miami vs Purdue \u2022 NCAA Round of 32 \u2022 March 22, 2026',
}

export default game
