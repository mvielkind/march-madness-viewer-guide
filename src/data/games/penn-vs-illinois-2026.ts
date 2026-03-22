import type { GameData } from '../../types/game.ts'

const game: GameData = {
  slug: 'penn-vs-illinois-2026',
  title: 'Penn vs Illinois — First Round Viewing Guide',
  eventTag: 'NCAA Tournament • First Round • Greenville, SC',
  date: 'Thursday, March 19, 2026',
  round: 'First Round',
  tipTime: '2026-03-19T21:40',
  venue: 'Bon Secours Wellness Arena, Greenville, South Carolina',
  extraInfo: 'Winner faces <strong>#6 North Carolina or #11 VCU</strong> on Saturday',
  teams: [
    {
      name: 'Penn',
      mascot: 'Quakers',
      seed: '#14 Seed',
      record: '18-11 • Ivy League Champs',
      colors: { primary: '#011F5B', secondary: '#990000', name: 'penn' },
      className: 'penn',
    },
    {
      name: 'Illinois',
      mascot: 'Fighting Illini',
      seed: '#3 Seed',
      record: '24-8 • Big Ten At-Large',
      colors: { primary: '#E84A27', secondary: '#13294B', name: 'illinois' },
      className: 'illinois',
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
      'A former five-star recruit who averaged <strong>1.7 PPG across 50 games at Duke and Virginia</strong> just dropped 44 points to lead an Ivy League school to the tournament. Now he faces the team with the <strong>#1 offense in America</strong>, led by a freshman who wasn\'t even a top-100 recruit and scored 46 against Purdue. This is a game about guys who were supposed to fail — and didn\'t.',
    cards: [
      {
        label: 'For Penn',
        value:
          'They were <strong>8-19 last year</strong>. The coach got fired. Then Fran McCaffery came home to his alma mater, TJ Power transferred from Virginia, and Penn won the Ivy Tournament in <strong>back-to-back overtime games — without their leading scorer</strong>. First tournament since 2018. Last tournament win: 1994.',
      },
      {
        label: 'For Illinois',
        value:
          'The <strong>#1 offense in America</strong> by KenPom (125.5 efficiency — the highest since KenPom began tracking in 2002). Keaton Wagler scored 46 against Purdue. But the defense ranks <strong>105th</strong> and they lost in OT in the Big Ten Tournament. The ceiling is a championship. The floor is a first-round upset.',
      },
      {
        label: 'The Redemption Arcs',
        value:
          'TJ Power: five-star bust at Duke and Virginia, now Ivy League Tournament MVP. Keaton Wagler: not even a top-100 recruit, now a projected <strong>lottery pick</strong>. Fran McCaffery: fired from Iowa, now taking his alma mater to March Madness. This game is full of second-act stories.',
      },
      {
        label: 'The Overtime Factor',
        value:
          'Penn won <strong>both Ivy Tournament games in overtime</strong>. Illinois <strong>lost in overtime</strong> in the Big Ten Tournament. Both teams know what it feels like to play past 40 minutes. If this one goes to OT, give the edge to Penn — they\'ve been there more recently and won.',
      },
    ],
  },
  styles: [
    {
      team: 'a',
      title: 'Ivy League Clutch Killers',
      bullets: [
        '<strong>Three-point shooting:</strong> Penn has <strong>five players shooting 39%+ from three</strong> — Power (43.3%), Thrower (41.7%), Jones (41.2%), Roberts (40.4%), Zanoni (39.0%). They can shoot from everywhere. If they get hot, Illinois\' defense (105th in KenPom) will struggle to contain them.',
        '<strong>TJ Power is for real:</strong> The former five-star (No. 17 in 2023) averaged <strong>1.7 PPG across 50 ACC games</strong> at Duke and Virginia. Now he\'s putting up <strong>16.8 PPG on 43.3% from three</strong> at Penn. His 44-point championship game — including two threes in the final 7 seconds — is one of the best individual tournament performances this year.',
        '<strong>Zone defense:</strong> McCaffery deploys <strong>zone defensive schemes</strong> that can disrupt offenses not prepared for them. KenPom ranks Penn\'s defense 112th — much better than their offense (215th). Against a team that\'s never seen Penn\'s zone, the first five minutes could be chaotic.',
        '<strong>Clutch DNA:</strong> Won both Ivy Tournament games in overtime — <strong>without leading scorer Ethan Roberts</strong> (concussion). This team has been in the fire and survived. They\'re not scared of the moment.',
        '<strong>Weakness:</strong> KenPom overall 159th. Offense ranks <strong>215th</strong> in efficiency. Roberts\' status (concussion) is uncertain. The talent gap against a Big Ten team is real. Penn hasn\'t won a tournament game since 1994 — <strong>a 32-year drought</strong>.',
      ],
    },
    {
      team: 'b',
      title: 'The Best Offense in College Basketball',
      bullets: [
        '<strong>Historic efficiency:</strong> Illinois ranks <strong>#1 nationally in KenPom offensive efficiency (125.5)</strong>. Earlier this season they posted a 132.5 rating — the highest since KenPom began tracking in 2002. They shoot 55.8% eFG and 58.3% on two-pointers. Five players average 10+ PPG.',
        '<strong>Keaton Wagler is a revelation:</strong> Not a top-100 recruit. Played for an independent AAU program. Was 5-8, 110 lbs as a HS freshman. Now he\'s 6-6, averages <strong>17.9 PPG and 4.4 APG</strong>, scored <strong>46 against Purdue</strong>, and is a projected lottery pick. Unanimous Big Ten Freshman of the Year.',
        '<strong>Offensive rebounding:</strong> <strong>No. 4 nationally (39.7%)</strong>. Illinois generates massive second-chance opportunities. Against a smaller Penn team, this could be a huge advantage — every miss becomes another chance.',
        '<strong>Twin 7-footers:</strong> Tomislav (7-1) and Zvonimir (7-2) Ivisic — Croatian twin brothers who played on different continents last year (Tomislav at Illinois, Zvonimir at Arkansas) before reuniting. They provide size Penn simply can\'t match.',
        '<strong>Weakness:</strong> Defense ranks <strong>105th in KenPom</strong>. Allowed 84+ points in each of their last 5 losses. Athletic, shifty guards have repeatedly exposed the perimeter D. Lost in OT in the Big Ten Tournament. Five of eight losses by 4 points or fewer — they\'re fragile in close games.',
      ],
    },
  ],
  keys: [
    {
      title: 'Can Penn\'s zone disrupt the #1 offense?',
      description:
        'Illinois has the best offense in America — but they\'ve never seen Penn\'s zone. McCaffery\'s zone defense schemes can throw off teams that aren\'t prepared. If Penn can force Illinois into perimeter jumpers and limit their offensive rebounding advantage, the game slows down and becomes manageable. If Illinois cracks the zone early and gets to the rim (58.3% on twos), it could get ugly fast.',
    },
    {
      title: 'The offensive rebounding mismatch.',
      description:
        'Illinois ranks 4th nationally in offensive rebounding percentage (39.7%). Penn is an Ivy League team. The Ivisic twins (7-1 and 7-2) will have massive size advantages. If Illinois dominates the glass and turns misses into second-chance points, Penn\'s defensive effort gets erased. Penn needs to box out with everything they have and limit Illinois to one-shot possessions.',
    },
    {
      title: 'TJ Power vs. the Big Ten.',
      description:
        'Power averaged 1.7 PPG across 50 ACC games. Now he\'s the best player in the Ivy League. But is Illinois a step up from Yale and Harvard? Obviously yes. The question is whether Power\'s confidence — built on a redemption arc and 44-point championship game — carries over against Big Ten length and athleticism. If he can get his mid-range game going and hit threes, Penn has a chance. If Illinois\' defense takes him out of his comfort zone, Penn doesn\'t have enough.',
    },
    {
      title: 'The Ethan Roberts question.',
      description:
        'Penn\'s leading scorer (16.9 PPG, 40.4% 3PT) suffered a concussion before the Ivy Tournament and missed both games. His status for the Illinois game is uncertain. Penn won without him — twice, in overtime — which is remarkable. But having a 17-point scorer back would transform this game. Without him, Penn needs Power, Zanoni, and Thrower to all shoot well.',
    },
    {
      title: 'McCaffery\'s tournament experience vs. Underwood\'s ceiling questions.',
      description:
        'Fran McCaffery has taken 5 different programs to March Madness — one of only 5 coaches in D-I history to do so. He\'s a tournament veteran who knows how to prepare for these moments. Underwood has six straight tournament appearances but lost in the second round last year and the year before that reached the Elite Eight before falling to UConn. Both coaches have something to prove.',
    },
  ],
  prediction: {
    summary: 'Penn has the shooting (five players at 39%+ from three), the redemption narrative (TJ Power\'s 44-point championship), and the zone defense that could throw Illinois off early. But Illinois has the #1 offense in America, twin 7-footers, and the best freshman in the Big Ten in Keaton Wagler. The talent gap is significant — Illinois\'s offensive rebounding (4th nationally at 39.7%) will be devastating against Penn\'s smaller lineup. McCaffery\'s zone will buy Penn 10-12 competitive minutes, and if Power gets hot, this stays interesting into the second half. But the Ivisic twins and Illinois\'s depth should take over once they solve the zone.',
    phases: [
      {
        title: 'Opening 10 Minutes',
        description: 'McCaffery rolls out the zone defense, and Illinois looks confused. They haven\'t seen this look — Penn\'s zone disrupts passing lanes and forces Illinois into perimeter jumpers. TJ Power hits an early three and AJ Levine gets a steal in transition. Penn leads by 4-5 and the Greenville crowd starts buzzing about an upset.',
      },
      {
        title: 'Mid-First Half Through Halftime',
        description: 'Underwood adjusts. He puts Tomislav Ivisic (7-1) in the middle of the zone and feeds him — the Ivisic twins create size mismatches Penn simply cannot handle. Wagler starts finding seams, and Andrej Stojakovic (carrying his father Peja\'s shooting DNA) knocks down a pair of mid-range pull-ups. Illinois goes on a 12-3 run to take an 8-10 point halftime lead. The offensive rebounds start piling up — second-chance points are killing Penn.',
      },
      {
        title: 'Second Half — Power\'s Response',
        description: 'TJ Power refuses to go quietly. The former five-star who averaged 1.7 PPG at Duke and Virginia starts creating from the mid-range and hitting threes. Michael Zanoni (92% FT) converts at the line. Penn cuts the lead to 5-6. The question is Ethan Roberts — if he\'s available (concussion status uncertain), Penn gets a 17-point scorer back and the calculus changes. Without him, Power has to carry too heavy a load.',
      },
      {
        title: 'Final 5 Minutes',
        description: 'Illinois\'s depth and David Mirkovic\'s toughness (27 points, 21 rebounds against Colgate) wear Penn down on the glass. Wagler — the "silent killer" who scored 46 against Purdue — takes over with a series of pull-up jumpers and dishes. Cam Thrower (the Wharton student who never transferred) hits a late three to make the final score respectable, but Illinois\'s talent advantage is too much over 40 minutes.',
      },
    ],
    projectedScore: {
      teamA: 66,
      teamB: 79,
      rationale: 'Penn\'s zone and Power\'s shooting keep it interesting through halftime, but Illinois\'s offensive rebounding, twin-tower size advantage, and Wagler\'s shot-making pull away in the second half.',
    },
  },
  players: [
    {
      team: 'a',
      name: 'TJ Power',
      stats: '16.8 PPG • 7.9 RPG • 43.3% 3PT',
      meta: "F • 6-9 • Junior • Ivy Tournament MVP • Former Five-Star",
      bio: 'The redemption story of the tournament. <strong>No. 17 recruit in 2023</strong> who averaged 6.7 min/game at Duke and 9.3 min at Virginia — described his time there as <strong>"some of the darkest moments"</strong> of his life. Found his footing at Penn. His championship performance: <strong>44 points and 14 rebounds vs. Yale</strong> — the most in Ivy Madness history. Hit back-to-back threes in the final 7 seconds to force OT. "If Fran wasn\'t here, I wouldn\'t be here."<br><a href="https://www.inquirer.com/college-sports/penn/tj-power-quakers-basketball-fran-mccaffery-duke-virginia-20260305.html" target="_blank">Read more →</a>',
    },
    {
      team: 'a',
      name: 'Michael Zanoni',
      stats: '11.6 PPG • 39.0% 3PT • 92.0% FT',
      meta: "G • 6-3 • Senior • Clutch Free Throw Shooter",
      bio: 'From North Carolina. Elite mid-range and three-point shooter. <strong>92.0% from the free throw line</strong> — a weapon in late-game situations. Hit crucial free throws in overtime of the championship to seal the victory. If this game comes down to the wire, Zanoni at the line is money.',
    },
    {
      team: 'a',
      name: 'AJ Levine',
      stats: '8.3 PPG (12.1 Ivy) • 4.0 APG • 2.0 SPG',
      meta: "G • Sophomore • Ivy League Steals Leader",
      bio: 'From Columbia, SC. Massive sophomore leap from 4.0 PPG as a freshman. <strong>Leads the Ivy League in steals</strong>. Hit the <strong>game-winning layup in OT vs. Harvard</strong> in the semifinal. Helped snap a 14-game losing streak to Princeton. "I\'ve always wanted to prove myself as an elite defender."',
    },
    {
      team: 'a',
      name: 'Cam Thrower',
      stats: '5.7 PPG • 41.7% 3PT • 88.9% FT',
      meta: "G • 6-3 • Senior • The Loyalist (Wharton School)",
      bio: 'The <strong>only non-walk-on senior across all six Big 5 programs who stayed at his original school for all four years</strong> — never transferred. Missed his entire junior season with a wrist injury. Scored <strong>career-high 19 points (4-of-6 from three)</strong> in the championship game, stepping up with Roberts injured. Wharton School student studying finance.',
    },
    {
      team: 'b',
      name: 'Keaton Wagler',
      stats: '17.9 PPG • 4.8 RPG • 4.4 APG',
      meta: "G • 6-6 • Freshman • Unanimous Big Ten FOY • Projected Lottery Pick",
      bio: 'The most unlikely star in America. <strong>Not a top-100 recruit. Was 5-8, 110 lbs as a HS freshman.</strong> Played for an independent AAU program. Only had two high-major offers. Now he\'s the <strong>unanimous Big Ten Freshman of the Year</strong> who scored <strong>46 points against No. 4 Purdue</strong> — the most by a Big Ten freshman in 30 years. Projected No. 6 on ESPN\'s draft board. Underwood: <strong>"He\'s as stoic, emotionless, and yet just that silent killer."</strong><br><a href="https://www.espn.com/mens-college-basketball/story/_/id/48037112/keaton-wagler-rise-illinois-freshman" target="_blank">Read more →</a>',
    },
    {
      team: 'b',
      name: 'Andrej Stojakovic',
      stats: '13.4 PPG • .491 FG% • .830 FT%',
      meta: "G • 6-5 • Junior • Son of NBA Legend Peja Stojakovic",
      bio: 'Son of <strong>Peja Stojakovic</strong> (3x NBA All-Star, champion with 2011 Mavericks). From Sacramento. Played at Stanford, then Cal (17.9 PPG), then Illinois. Reached 1,000 career points. Scored 30 vs. Maryland. A proven shot-maker carrying his father\'s shooting DNA — pull-ups, step-backs, and the full arsenal.',
    },
    {
      team: 'b',
      name: 'David Mirkovic',
      stats: '13.4 PPG • 7.8 RPG • .371 3PT',
      meta: "F • 6-8 • Freshman • Montenegro • Big Ten All-Freshman",
      bio: 'From Niksic, Montenegro. <strong>Left home at age 14</strong> to play for SC Derby in Podgorica. Recorded a <strong>27-point, 21-rebound game vs. Colgate</strong> — the first 20-20 by an Illini in 53 years. Set Illinois freshman rebound record. Seven double-doubles. The toughest player on a team full of them.',
    },
    {
      team: 'b',
      name: 'Tomislav Ivisic',
      stats: '10.0 PPG • 5.5 RPG • .476 FG%',
      meta: "C • 7-1 • Sophomore • Croatian Twin",
      bio: '<strong>Twin brother of teammate Zvonimir (7-2)</strong> — Croatian brothers who played on different continents last year. Tomislav was at Illinois; Zvonimir was at Arkansas under Calipari. Zvonimir entered the portal and committed to Illinois to reunite with his twin. Together they give Illinois a <strong>twin-tower frontcourt</strong> that\'s 7-1 and 7-2.',
    },
  ],
  funFacts: [
    {
      emoji: '🏛️',
      title: 'The Cathedral of College Basketball (Penn)',
      body: '<strong>The Palestra</strong>, opened in 1927, has hosted more NCAA basketball games than any arena in America. Named after an ancient Greek athletic enclosure. It\'s the oldest major college arena still in use and often called <strong>"the birthplace of college basketball."</strong>',
    },
    {
      emoji: '📈',
      title: 'From 1.7 PPG to 44 Points (Penn)',
      body: '<strong>TJ Power</strong> averaged just 1.7 PPG across 50 games at Duke and Virginia. At Penn, he put up <strong>44 points in the Ivy championship</strong> — hitting two threes in the final 7 seconds to force overtime. He was the No. 17 recruit in 2023. The talent was always there.',
    },
    {
      emoji: '🔢',
      title: 'The #1 Offense in History (Illinois)',
      body: 'Illinois posted a <strong>132.5 offensive rating</strong> earlier this season — <strong>the highest since KenPom began tracking in 2002</strong>. They enter the tournament ranked No. 1 in offensive efficiency (125.5). Five players average 10+ PPG.',
    },
    {
      emoji: '💰',
      title: 'Three Wharton Students in the Lineup (Penn)',
      body: '<strong>Three Penn basketball players</strong> — Augustus Gerhart, Cam Thrower, and Dalton Scantlebury — attend the <strong>Wharton School</strong>, the world\'s oldest business school. Alumni include Warren Buffett, Elon Musk, and Sundar Pichai. Playing in the NCAA Tournament while studying at Wharton is peak Ivy League energy.',
    },
    {
      emoji: '👯',
      title: 'The Twin 7-Footers (Illinois)',
      body: '<strong>Tomislav (7-1) and Zvonimir (7-2) Ivisic</strong> are Croatian twin brothers who played on different continents last year — Tomislav at Illinois, Zvonimir at Arkansas. Zvonimir transferred to Illinois to reunite with his twin. They\'re separated by 4 minutes at birth and 1 inch in height.',
    },
    {
      emoji: '📏',
      title: 'The Late Bloomer (Illinois)',
      body: '<strong>Keaton Wagler</strong> was 5-8 and 110 lbs as a high school freshman in Kansas. He grew to 6-6 by senior year. Was not a top-100 recruit. Only had two high-major offers. Now he\'s the <strong>unanimous Big Ten Freshman of the Year</strong> and a projected lottery pick who scored 46 against Purdue.',
    },
    {
      emoji: '🏫',
      title: 'Benjamin Franklin Founded This School (Penn)',
      body: 'Penn was <strong>chartered in 1755 through the efforts of Benjamin Franklin</strong>. The admission rate is 4.24%. Notable alumni include <strong>John Legend, Noam Chomsky, and Elizabeth Banks</strong>. The Quakers basketball team plays in "The Cathedral of College Basketball."',
    },
    {
      emoji: '🇭🇷',
      title: 'From Montenegro at 14 (Illinois)',
      body: '<strong>David Mirkovic</strong> left his home in Niksic, Montenegro at <strong>age 14</strong> to play for SC Derby in Podgorica. He recorded a 27-point, 21-rebound game at Illinois — the first 20-20 by an Illini in 53 years.',
    },
    {
      emoji: '🏀',
      title: 'The Flyin\' Illini and 37-2 (Illinois)',
      body: 'Illinois has two legendary basketball seasons: the <strong>1989 "Flyin\' Illini"</strong> (31-5, coined by Dick Vitale, reached the Final Four) and <strong>2004-05 (37-2)</strong>, which lost the championship game to UNC. The program is still seeking its first national title.',
    },
    {
      emoji: '🤝',
      title: 'McCaffery\'s Five Programs (Penn)',
      body: 'Fran McCaffery has taken <strong>5 different programs to the NCAA Tournament</strong> — Lehigh, UNC Greensboro, Siena, Iowa, and now Penn. Only 4 other coaches in D-I history have done that. He played at Penn in the early \'80s and was on campus during the 1979 Final Four run.',
    },
    {
      emoji: '🏀',
      title: "Peja's Son (Illinois)",
      body: '<strong>Andrej Stojakovic\'s</strong> father is <strong>Peja Stojakovic</strong> — a 3-time NBA All-Star with the Sacramento Kings and 2011 NBA champion with the Mavericks. Andrej carries his father\'s shooting DNA: pull-ups, step-backs, and 30-point games.',
    },
    {
      emoji: '🔒',
      title: 'The Loyalist (Penn)',
      body: '<strong>Cam Thrower</strong> is the only non-walk-on senior across all six Big 5 programs who <strong>never transferred</strong>. He missed his entire junior season with a wrist injury. Then he scored 19 points in the Ivy championship when Roberts went down. Loyalty rewarded.',
    },
  ],
  history: {
    callout:
      'Illinois has <strong>5 Final Fours, the #1 offense in America, and a freshman who scored 46 against Purdue</strong>. Penn has <strong>The Palestra, a 1979 Final Four, and a former five-star who just dropped 44 in the Ivy championship</strong>. Penn hasn\'t won a tournament game since 1994. Illinois has never won a national championship. Both programs are chasing something they\'ve never had.',
    subsections: [
      {
        title: "Illinois Basketball: Always Close, Never a Champion",
        type: 'timeline',
        content: '',
        timeline: [
          {
            date: '1989',
            text: 'The <strong>"Flyin\' Illini"</strong> go 31-5 under Lou Henson (coined by Dick Vitale). Reach the Final Four but lose to Michigan on a last-second basket.',
          },
          {
            date: '2005',
            text: 'The greatest Illinois team ever: <strong>37-2</strong> with Deron Williams, Luther Head, Dee Brown. Epic OT comeback vs. Arizona in the Elite Eight. Lost the <strong>championship game to North Carolina 75-70</strong>. Still no national title.',
          },
          {
            date: '2024',
            text: 'Under Underwood, Illinois reaches the <strong>Elite Eight</strong> for the first time since 2005. Lost to eventual champion UConn. The program is back as a national contender.',
          },
          {
            date: '2026',
            text: 'The <strong>#1 offense in KenPom history</strong>. Keaton Wagler is a projected lottery pick. Sixth straight tournament appearance. The ceiling is a championship. The question is whether the defense (105th) lets them get there.',
          },
        ],
      },
      {
        title: "Penn's Tournament History: The Palestra and the 1979 Final Four",
        type: 'card',
        content:
          '<p>Penn reached the <strong>Final Four in 1979</strong> as a 9-seed, defeating Iona, North Carolina, Syracuse, and St. John\'s before losing to Magic Johnson\'s Michigan State 101-67. They remain the <strong>last Ivy League team to reach the Final Four or Elite Eight</strong>. In 1970, they went 26-0 in the regular season before falling in the Elite Eight.</p><p style="margin-top:.5rem;">But the drought since has been long. Penn\'s <strong>last tournament win was in 1994</strong> (beat Nebraska as an 11-seed). Their last appearance was 2018 (lost to Kansas as a 16-seed). This is a program with genuine history — 24 tournament appearances, the most iconic arena in college basketball — that has been waiting decades for another moment.</p><p style="margin-top:.5rem;">Fran McCaffery, who played at Penn in the early \'80s and was on campus during the 1979 Final Four run, has come home to try to write the next chapter.</p>',
      },
      {
        title: 'The 14-vs-3 Upset History',
        type: 'card',
        content:
          '<p>Since 1985, <strong>14-seeds have beaten 3-seeds 18 times</strong> — roughly once every other year. Memorable examples: Mercer over Duke (2014), Bucknell over Kansas (2005), Norfolk State over Missouri (2012). Ivy League teams have pulled first-round upsets before too — most famously <strong>Harvard over New Mexico as a 14-seed in 2013</strong>.</p><p style="margin-top:.5rem;">Penn\'s profile — five 39%+ three-point shooters, a five-star talent in Power, a legendary coach in McCaffery, two consecutive OT wins, and a zone defense Illinois hasn\'t seen — matches the profile of a dangerous 14-seed. The question is whether the talent gap is too wide when Illinois has the best offense in America.</p>',
      },
    ],
  },
  sources: [
    {
      heading: 'Penn',
      links: [
        { label: 'ESPN — TJ Power Drops 44 to Lead Penn Over Yale', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48216037/tj-power-drops-44-lead-penn-yale-ivy-final' },
        { label: 'Daily Pennsylvanian — Next Stop March Madness', url: 'https://www.thedp.com/article/2026/03/penn-mens-basketball-win-ivy-league-tournament-2026-tj-power' },
        { label: 'Penn Athletics — Ivy League Champions', url: 'https://pennathletics.com/news/2026/3/15/mens-basketball-mens-basketball-crowned-ivy-league-champions-in-overtime-thriller-88-84.aspx' },
        { label: 'Philadelphia Inquirer — TJ Power: Three Schools Later', url: 'https://www.inquirer.com/college-sports/penn/tj-power-quakers-basketball-fran-mccaffery-duke-virginia-20260305.html' },
        { label: 'Daily Pennsylvanian — McCaffery Profile', url: 'https://www.thedp.com/article/2025/11/fran-mccaffery-penn-mens-basketball-profile-2025' },
        { label: 'Penn Today — Hardcourt Homecoming', url: 'https://penntoday.upenn.edu/news/hardcourt-homecoming-penn-basketball-fran-mccaffery' },
        { label: 'Daily Pennsylvanian — Ethan Roberts Profile', url: 'https://www.thedp.com/article/2026/02/ethan-roberts-penn-mens-basketball-profile-ambition-army-drake-memphis-arlington-heights-ivy-league' },
        { label: 'Philadelphia Inquirer — Cam Thrower Never Transferred', url: 'https://www.inquirer.com/college-sports/penn/penn-basketball-cam-thrower-big-5-non-transfer-20260227.html' },
        { label: 'Sports Reference — 2025-26 Penn Stats', url: 'https://www.sports-reference.com/cbb/schools/pennsylvania/men/2026.html' },
        { label: 'Penn Today — By the Numbers: Penn in the Tournament', url: 'https://penntoday.upenn.edu/news/numbers-penn-ncaa-tournament-men' },
        { label: 'Penn Athletics — The Palestra', url: 'https://pennathletics.com/sports/2019/6/12/penn-athletics-facilities-Palestra-bio' },
        { label: 'Daily Pennsylvanian — Penn vs Illinois Preview', url: 'https://www.thedp.com/article/2026/03/penn-mens-basketball-march-madness-illinois-preview' },
      ],
    },
    {
      heading: 'Illinois',
      links: [
        { label: 'FightingIllini — Sixth Straight NCAA Bid', url: 'https://fightingillini.com/news/2026/3/15/mens-basketball-illini-earn-sixth-straight-ncaa-tournament-bid.aspx' },
        { label: 'ESPN — The Rise of Keaton Wagler', url: 'https://www.espn.com/mens-college-basketball/story/_/id/48037112/keaton-wagler-rise-illinois-freshman' },
        { label: 'Sports Reference — 2025-26 Illinois Stats', url: 'https://www.sports-reference.com/cbb/schools/illinois/men/2026.html' },
        { label: 'SI — Why Underwood Earned Coach of the Year Candidacy', url: 'https://www.si.com/college/illinois/basketball/why-illinois-brad-underwood-has-earned-coach-of-year-candidacy' },
        { label: 'SI — Wagler Big Ten Awards', url: 'https://www.si.com/college/illinois/basketball/keaton-wagler-illinois-basketball-big-ten-awards' },
        { label: 'The Champaign Room — Offense Is Historically Elite', url: 'https://www.thechampaignroom.com/illinois-fighting-illini-basketball-news/51312/numbers-dont-lie-illinois-offense-is-historically-elite-fighting-illini-ncaa-big-ten' },
        { label: 'Chicago Tribune — David Mirkovic Feature', url: 'https://www.chicagotribune.com/2026/03/13/illinois-david-mirkovic-big-ten-tournament/' },
        { label: 'SI — Andrej Stojakovic Scouting Report', url: 'https://www.si.com/college/illinois/andrej-stojakovic-illinois-scouting-report-2025-26' },
        { label: '247Sports — Illinois Tournament Draw', url: 'https://247sports.com/college/illinois/article/illinois-fighting-illini-mens-basketball-ncaa-tournament-draw-opponent-penn-north-carolina-south-region-277785345/' },
        { label: 'Wikipedia — 2004-05 Illinois Basketball', url: 'https://en.wikipedia.org/wiki/2004%E2%80%9305_Illinois_Fighting_Illini_men%27s_basketball_team' },
        { label: 'Wikipedia — Brad Underwood', url: 'https://en.wikipedia.org/wiki/Brad_Underwood' },
        { label: 'FightingIllini — NCAA Tournament Preview vs Penn', url: 'https://fightingillini.com/news/2026/3/17/mens-basketball-ncaa-tournament-first-round-preview-3-illinois-vs-14-penn.aspx' },
        { label: 'The Champaign Room — Breaking Down Illinois\' Path', url: 'https://www.thechampaignroom.com/illinois-fighting-illini-basketball-news/52627/breaking-down-illinois-path-to-ncaa-tournament-final-four-fighting-illini-ncaa-big-ten-houston-florida' },
        { label: 'FightingIllini — Jakucionis and Riley Drafted', url: 'https://fightingillini.com/news/2025/6/26/mens-basketball-jakucionis-and-riley-selected-back-to-back-in-first-round-of-2025-nba-draft.aspx' },
      ],
    },
  ],
  footerText: 'Casual Fan Viewing Guide • Penn vs Illinois • NCAA First Round • March 19, 2026',
}

export default game
