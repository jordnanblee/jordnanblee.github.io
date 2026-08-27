const GAMES = [
  {n:"Slope Game",u:"https://jordnanblee.github.io/seraph/games/slope/index.html",c:"arcade",i:"🏔️",t:"/seraph/images/thumbnails/slope.jpg"},
  {n:"Subway Surfers",u:"https://jordnanblee.github.io/seraph/games/subwaysurfers/index.html",c:"arcade",i:"🚇",t:"/seraph/images/thumbnails/subwaysurfers.jpeg"},
  {n:"Flappy Bird Game",u:"https://jordnanblee.github.io/seraph/games/flappy/index.html",c:"arcade",i:"🐦",t:"/seraph/images/thumbnails/flappybird.jpg"},
  {n:"Papa's Pizzaria",u:"https://jordnanblee.github.io/seraph/games/papaspizzaria/index.html",c:"simulation",i:"🍕",t:"/seraph/images/thumbnails/papaspizzeria.jpg"},
  {n:"Papa's Burgeria",u:"https://jordnanblee.github.io/seraph/games/papasburgeria/index.html",c:"simulation",i:"🍔",t:"/seraph/images/thumbnails/papasburgeria.jpg"},
  {n:"Super Mario 64",u:"https://jordnanblee.github.io/seraph/games/sm64/index.html",c:"adventure",i:"🍄",t:"/seraph/images/thumbnails/sm64.jpg"},
  {n:"Run 3 Game",u:"https://jordnanblee.github.io/seraph/games/run3/index.html",c:"arcade",i:"🏃‍♂️",t:"/seraph/images/thumbnails/run3.jpg"},
  {n:"BitLife Game",u:"https://jordnanblee.github.io/seraph/games/bitlife/index.html",c:"strategy",i:"👶",t:"/seraph/images/thumbnails/bitlife.jpg"},
  {n:"Crossy Road",u:"https://jordnanblee.github.io/seraph/games/crossy/index.html",c:"arcade",i:"🐸",t:"/seraph/images/thumbnails/crossyroad.jpg"},
  {n:"Minecraft v1.5.2",u:"https://jordnanblee.github.io/seraph/games/mc/index.html",c:"adventure",i:"⛏️",t:"/seraph/images/thumbnails/mc.jpg"},
  {n:"Cookie Clicker Game",u:"https://jordnanblee.github.io/seraph/games/cookieclicker/index.html",c:"strategy",i:"🍪",t:"/seraph/images/thumbnails/cookieclick.jpg"},
  {n:"Temple Run 2 Game",u:"https://jordnanblee.github.io/seraph/games/templerun2/index.html",c:"adventure",i:"🏃",t:"/seraph/images/thumbnails/templerun2.jpg"},
  {n:"Duck Life 4",u:"https://jordnanblee.github.io/seraph/games/ducklife4/index.html",c:"simulation",i:"🦆",t:"/seraph/images/thumbnails/ducklife4.jpg"},
  {n:"Chrome Dino Game",u:"https://jordnanblee.github.io/seraph/games/dinogame/index.html",c:"arcade",i:"🦕",t:"/seraph/images/thumbnails/chromedino.jpg"},
  {n:"Jetpack Joyride Game",u:"https://jordnanblee.github.io/seraph/games/jetpackjoyride/index.html",c:"arcade",i:"🎒",t:"/seraph/images/thumbnails/jetpackjoyride.jpg"},
  {n:"Retro Bowl Game",u:"https://jordnanblee.github.io/seraph/games/retrobowl/index.html",c:"sports",i:"🏈",t:"/seraph/images/thumbnails/retrobowl.jpg"},
  {n:"Fruit Ninja Game",u:"https://jordnanblee.github.io/seraph/games/fruitninja/index.html",c:"arcade",i:"🥷",t:"/seraph/images/thumbnails/fruitninja.jpg"},
  {n:"Doodle Jump Game",u:"https://jordnanblee.github.io/seraph/games/doodlejump/index.html",c:"arcade",i:"🤽",t:"/seraph/images/thumbnails/doodlejump.jpg"},
  {n:"2048 Game",u:"https://jordnanblee.github.io/seraph/games/2048/index.html",c:"puzzle",i:"🔢",t:"/seraph/images/thumbnails/2048.jpg"},
  {n:"Tetris Game",u:"https://jordnanblee.github.io/seraph/games/tetris/index.html",c:"puzzle",i:"🔳",t:"/seraph/images/thumbnails/tetris.jpg"},
  {n:"Fancy Pants Adventure",u:"https://jordnanblee.github.io/seraph/games/fancypantsadventure/index.html",c:"adventure",i:"👖",t:"/seraph/images/thumbnails/fancypantsadventure.jpg"},
  {n:"Happy Wheels Game",u:"https://jordnanblee.github.io/seraph/games/happywheels/index.html",c:"racing",i:"🦽",t:"/seraph/images/thumbnails/happywheels.jpg"},
  {n:"Papa's Hotdoggeria",u:"https://jordnanblee.github.io/seraph/games/papashotdoggeria/index.html",c:"simulation",i:"🌭",t:"/seraph/images/thumbnails/papashotdoggeria.jpg"},
  {n:"Paper IO 2 Game",u:"https://jordnanblee.github.io/seraph/games/paperio2/index.html",c:"arcade",i:"📄",t:"/seraph/images/thumbnails/paperio2.jpg"},
  {n:"Super Hot",u:"https://jordnanblee.github.io/seraph/games/superhot/index.html",c:"action",i:"🔥",t:"/seraph/images/thumbnails/superhot.jpg"},
  {n:"The Binding of Isaac",u:"https://jordnanblee.github.io/seraph/games/thebindingofisaac/index.html",c:"adventure",i:"😭",t:"/seraph/images/thumbnails/thebindingofisaac.jpg"},
  {n:"Townscaper",u:"https://jordnanblee.github.io/seraph/games/townscaper/index.html",c:"simulation",i:"🏘️",t:"/seraph/images/thumbnails/townscaper.jpg"},
  {n:"Tunnel Rush Game",u:"https://jordnanblee.github.io/seraph/games/tunnelrush/index.html",c:"arcade",i:"🌌",t:"/seraph/images/thumbnails/tunnelrush.jpg"},
  {n:"Theme Hotel",u:"https://jordnanblee.github.io/seraph/games/themehotel/index.html",c:"simulation",i:"🏨",t:"/seraph/images/thumbnails/themehotel.jpg"},
  {n:"Escaping the Prison",u:"https://jordnanblee.github.io/seraph/games/escapingtheprison/index.html",c:"adventure",i:"🔒",t:"/seraph/images/thumbnails/escapingtheprison.jpg"},
  {n:"Stealing the Diamond",u:"https://jordnanblee.github.io/seraph/games/stealingthediamond/index.html",c:"adventure",i:"💎",t:"/seraph/images/thumbnails/stealingthediamond.jpg"},
  {n:"Infiltrating the Airship",u:"https://jordnanblee.github.io/seraph/games/infiltratingtheairship/index.html",c:"adventure",i:"✈️",t:"/seraph/images/thumbnails/infiltratingtheairship.jpg"},
  {n:"Fleeing the Complex",u:"https://jordnanblee.github.io/seraph/games/fleeingthecomplex/index.html",c:"adventure",i:"🏃",t:"/seraph/images/thumbnails/fleeingthecomplex.jpg"},
  {n:"The Impossible Quiz Game",u:"https://jordnanblee.github.io/seraph/games/theimpossiblequiz/index.html",c:"puzzle",i:"❔",t:"/seraph/images/thumbnails/theimpossiblequiz.jpg"},
  {n:"Solitaire",u:"https://jordnanblee.github.io/seraph/games/solitaire/index.html",c:"strategy",i:"🃏",t:"/seraph/images/thumbnails/solitaire.jpg"},
  {n:"Drift Hunters",u:"https://jordnanblee.github.io/seraph/games/drifthunters/index.html",c:"racing",i:"🚗",t:"/seraph/images/thumbnails/drifthunters.jpg"},
  {n:"Vex 6 Game",u:"https://jordnanblee.github.io/seraph/games/vex6/index.html",c:"arcade",i:"🧗",t:"/seraph/images/thumbnails/vex6.jpg"},
  {n:"Among Us Fangame",u:"https://jordnanblee.github.io/seraph/games/amongus/index.html",c:"strategy",i:"🔴",t:"/seraph/images/thumbnails/amongus.jpg"},
  {n:"Edge Surf",u:"https://jordnanblee.github.io/seraph/games/surf/index.html",c:"arcade",i:"🏄",t:"/seraph/images/thumbnails/surf.jpg"},
  {n:"Moto X3M Game",u:"https://jordnanblee.github.io/seraph/games/motox3m/index.html",c:"racing",i:"🏍️",t:"/seraph/images/thumbnails/motox3m.jpeg"},
  {n:"FNAF 1 Game",u:"https://jordnanblee.github.io/seraph/games/fnaf/index.html",c:"adventure",i:"🐻",t:"/seraph/images/thumbnails/fnaf.jpg"},
  {n:"FNAF 2 Game",u:"https://jordnanblee.github.io/seraph/games/fnaf-2/index.html",c:"adventure",i:"🤖",t:"/seraph/images/thumbnails/fnaf2.jpg"},
  {n:"FNAF 3 Game",u:"https://jordnanblee.github.io/seraph/games/fnaf-3/index.html",c:"adventure",i:"🔥",t:"/seraph/images/thumbnails/fnaf3.jpg"},
  {n:"FNAF 4 Game",u:"https://jordnanblee.github.io/seraph/games/fnaf-4/index.html",c:"adventure",i:"😱",t:"/seraph/images/thumbnails/fnaf4.jpg"},
  {n:"Riddle School",u:"https://jordnanblee.github.io/seraph/games/riddleschool/riddleschool1/index.html",c:"puzzle",i:"🏫",t:"/seraph/images/thumbnails/riddleschool.jpg"},
  {n:"Riddle School 2",u:"https://jordnanblee.github.io/seraph/games/riddleschool/riddleschool2/index.html",c:"puzzle",i:"🏫",t:"/seraph/images/thumbnails/riddleschool2.jpg"},
  {n:"Riddle School 3",u:"https://jordnanblee.github.io/seraph/games/riddleschool/riddleschool3/index.html",c:"puzzle",i:"🏫",t:"/seraph/images/thumbnails/riddleschool3.jpg"},
  {n:"Riddle School 4",u:"https://jordnanblee.github.io/seraph/games/riddleschool/riddleschool4/index.html",c:"puzzle",i:"🏫",t:"/seraph/images/thumbnails/riddleschool4.jpg"},
  {n:"Riddle School 5",u:"https://jordnanblee.github.io/seraph/games/riddleschool/riddleschool5/index.html",c:"puzzle",i:"🏫",t:"/seraph/images/thumbnails/riddleschool5.jpg"},
  {n:"Riddle Transfer",u:"https://jordnanblee.github.io/seraph/games/riddleschool/riddletransfer/index.html",c:"puzzle",i:"🔑",t:"/seraph/images/thumbnails/riddletransfer.jpg"},
  {n:"Riddle Transfer 2",u:"https://jordnanblee.github.io/seraph/games/riddleschool/riddletransfer2/index.html",c:"puzzle",i:"🔑",t:"/seraph/images/thumbnails/riddletransfer2.jpg"},
  {n:"Drift Boss",u:"https://jordnanblee.github.io/seraph/games/driftboss/index.html",c:"racing",i:"🚗",t:"/seraph/images/thumbnails/driftboss.jpg"},
  {n:"Friday Night Funkin Game",u:"https://jordnanblee.github.io/seraph/games/fnf/index.html",c:"arcade",i:"🎤",t:"/seraph/images/thumbnails/fnf.jpg"},
  {n:"Pac-Man Game",u:"https://jordnanblee.github.io/seraph/games/pacman/index.html",c:"arcade",i:"🟡",t:"/seraph/images/thumbnails/pacman.jpg"},
  {n:"Papa's Pancakeria",u:"https://jordnanblee.github.io/seraph/games/papaspancakeria/index.html",c:"simulation",i:"🥞",t:"/seraph/images/thumbnails/papaspancakeria.jpg"},
  {n:"Rooftop Snipers Game",u:"https://jordnanblee.github.io/seraph/games/rooftop/index.html",c:"action",i:"🎯",t:"/seraph/images/thumbnails/rooftopsnipers.jpg"},
  {n:"Baldi's Basics",u:"https://jordnanblee.github.io/seraph/games/baldisbasics/index.html",c:"adventure",i:"📏",t:"/seraph/images/thumbnails/baldisbasics.jpg"},
  {n:"Bob the Robber 2",u:"https://jordnanblee.github.io/seraph/games/bobtherobber2/index.html",c:"adventure",i:"🕵️",t:"/seraph/images/thumbnails/bobtherobber2.jpg"},
  {n:"Minesweeper Game",u:"https://jordnanblee.github.io/seraph/games/minesweeper/index.html",c:"puzzle",i:"💣",t:"/seraph/images/thumbnails/minesweeper.jpg"},
  {n:"Pokemon Emerald",u:"https://jordnanblee.github.io/seraph/games/pokemonemerald/index.html",c:"adventure",i:"💚",t:"/seraph/images/thumbnails/pokemonemerald.jpg"},
  {n:"Pokemon Fire Red",u:"https://jordnanblee.github.io/seraph/games/pokemonfirered/index.html",c:"adventure",i:"🔴",t:"/seraph/images/thumbnails/pokemonfirered.jpg"},
  {n:"Super Mario Bros Game",u:"https://jordnanblee.github.io/seraph/games/supermariobros/index.html",c:"adventure",i:"🍄",t:"/seraph/images/thumbnails/supermariobros.jpg"},
  {n:"Super Mario Kart",u:"https://jordnanblee.github.io/seraph/games/supermariokart/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/supermariokart.jpg"},
  {n:"Super Mario World",u:"https://jordnanblee.github.io/seraph/games/supermarioworld/index.html",c:"adventure",i:"🍄",t:"/seraph/images/thumbnails/supermarioworld.jpg"},
  {n:"There Is No Game Game",u:"https://jordnanblee.github.io/seraph/games/thereisnogame/index.html",c:"puzzle",i:"🚫",t:"/seraph/images/thumbnails/thereisnogame.jpg"},
  {n:"World's Hardest Game",u:"https://jordnanblee.github.io/seraph/games/worldshardestgame/index.html",c:"puzzle",i:"👿",t:"/seraph/images/thumbnails/worldshardestgame.jpg"},
  {n:"Castlevania",u:"https://jordnanblee.github.io/seraph/games/castlevania/index.html",c:"adventure",i:"🏰",t:"/seraph/images/thumbnails/castlevania.jpg"},
  {n:"Donkey Kong",u:"https://jordnanblee.github.io/seraph/games/donkeykong/index.html",c:"arcade",i:"🦍",t:"/seraph/images/thumbnails/donkeykong.jpg"},
  {n:"Dr. Mario",u:"https://jordnanblee.github.io/seraph/games/drmario/index.html",c:"puzzle",i:"💊",t:"/seraph/images/thumbnails/drmario.jpg"},
  {n:"Metroid",u:"https://jordnanblee.github.io/seraph/games/metroid/index.html",c:"adventure",i:"🚀",t:"/seraph/images/thumbnails/metroid.jpg"},
  {n:"Super Mario Bros 2",u:"https://jordnanblee.github.io/seraph/games/supermariobros2/index.html",c:"adventure",i:"🍄",t:"/seraph/images/thumbnails/supermariobros2.jpg"},
  {n:"Super Mario Bros 3",u:"https://jordnanblee.github.io/seraph/games/supermariobros3/index.html",c:"adventure",i:"🍄",t:"/seraph/images/thumbnails/supermariobros3.jpg"},
  {n:"The Legend of Zelda",u:"https://jordnanblee.github.io/seraph/games/thelegendofzelda/index.html",c:"adventure",i:"🗡️",t:"/seraph/images/thumbnails/thelegendofzelda.jpg"},
  {n:"WarioWare",u:"https://jordnanblee.github.io/seraph/games/warioware/index.html",c:"arcade",i:"😈",t:"/seraph/images/thumbnails/warioware.jpg"},
  {n:"Yoshi's Island",u:"https://jordnanblee.github.io/seraph/games/yoshisisland/index.html",c:"adventure",i:"🥚",t:"/seraph/images/thumbnails/yoshisisland.jpg"},
  {n:"Donkey Kong Land",u:"https://jordnanblee.github.io/seraph/games/donkeykongland/index.html",c:"adventure",i:"🦍",t:"/seraph/images/thumbnails/donkeykongland.jpg"},
  {n:"Kirby's Dream Land",u:"https://jordnanblee.github.io/seraph/games/kirbysdreamland/index.html",c:"adventure",i:"⭐",t:"/seraph/images/thumbnails/kirbysdreamland.jpg"},
  {n:"Super Mario Land",u:"https://jordnanblee.github.io/seraph/games/supermarioland/index.html",c:"adventure",i:"🍄",t:"/seraph/images/thumbnails/supermarioland.jpg"},
  {n:"Canopy",u:"https://jordnanblee.github.io/seraph/games/canopy/index.html",c:"adventure",i:"🌿",t:"/seraph/images/thumbnails/canopy.jpg"},
  {n:"Cave Chaos",u:"https://jordnanblee.github.io/seraph/games/cavechaos/index.html",c:"adventure",i:"🦇",t:"/seraph/images/thumbnails/cavechaos.jpg"},
  {n:"Cheese Dreams",u:"https://jordnanblee.github.io/seraph/games/cheesedreams/index.html",c:"arcade",i:"🧀",t:"/seraph/images/thumbnails/cheesedreams.jpg"},
  {n:"Chisel",u:"https://jordnanblee.github.io/seraph/games/chisel/index.html",c:"puzzle",i:"🔨",t:"/seraph/images/thumbnails/chisel.jpg"},
  {n:"Chisel 2",u:"https://jordnanblee.github.io/seraph/games/chisel2/index.html",c:"puzzle",i:"🔨",t:"/seraph/images/thumbnails/chisel2.jpg"},
  {n:"Ditto",u:"https://jordnanblee.github.io/seraph/games/ditto/index.html",c:"puzzle",i:"👾",t:"/seraph/images/thumbnails/ditto.jpg"},
  {n:"Feed Me",u:"https://jordnanblee.github.io/seraph/games/feedme/index.html",c:"puzzle",i:"😋",t:"/seraph/images/thumbnails/feedme.jpg"},
  {n:"Final Ninja",u:"https://jordnanblee.github.io/seraph/games/finalninja/index.html",c:"action",i:"🥷",t:"/seraph/images/thumbnails/finalninja.jpg"},
  {n:"Frost Bite",u:"https://jordnanblee.github.io/seraph/games/frostbite/index.html",c:"adventure",i:"❄️",t:"/seraph/images/thumbnails/frostbite.jpg"},
  {n:"Frost Bite 2",u:"https://jordnanblee.github.io/seraph/games/frostbite2/index.html",c:"adventure",i:"🧊",t:"/seraph/images/thumbnails/frostbite2.jpg"},
  {n:"Icebreaker",u:"https://jordnanblee.github.io/seraph/games/icebreaker/index.html",c:"puzzle",i:"🧊",t:"/seraph/images/thumbnails/icebreaker.jpg"},
  {n:"Mutiny",u:"https://jordnanblee.github.io/seraph/games/mutiny/index.html",c:"strategy",i:"⚓",t:"/seraph/images/thumbnails/mutiny.jpg"},
  {n:"Nitrome Must Die",u:"https://jordnanblee.github.io/seraph/games/nitromemustdie/index.html",c:"arcade",i:"💥",t:"/seraph/images/thumbnails/nitromemustdie.jpg"},
  {n:"Swindler",u:"https://jordnanblee.github.io/seraph/games/swindler/index.html",c:"puzzle",i:"🔄",t:"/seraph/images/thumbnails/swindler.jpg"},
  {n:"Twin Shot",u:"https://jordnanblee.github.io/seraph/games/twinshot/index.html",c:"action",i:"🏹",t:"/seraph/images/thumbnails/twinshot.jpg"},
  {n:"Twin Shot 2",u:"https://jordnanblee.github.io/seraph/games/twinshot2/index.html",c:"action",i:"🏹",t:"/seraph/images/thumbnails/twinshot2.jpg"},
  {n:"Cactus McCoy",u:"https://jordnanblee.github.io/seraph/games/cactusmccoy/index.html",c:"adventure",i:"🌵",t:"/seraph/images/thumbnails/cactusmccoy.jpg"},
  {n:"Cactus McCoy 2",u:"https://jordnanblee.github.io/seraph/games/cactusmccoy2/index.html",c:"adventure",i:"🌵",t:"/seraph/images/thumbnails/cactusmccoy2.jpg"},
  {n:"Papa Louie Game",u:"https://jordnanblee.github.io/seraph/games/papalouie/index.html",c:"adventure",i:"🍕",t:"/seraph/images/thumbnails/papalouie.jpg"},
  {n:"Papa Louie 2 Game",u:"https://jordnanblee.github.io/seraph/games/papalouie2/index.html",c:"adventure",i:"🍕",t:"/seraph/images/thumbnails/papalouie2.jpg"},
  {n:"Papa Louie 3",u:"https://jordnanblee.github.io/seraph/games/papalouie3/index.html",c:"adventure",i:"🍕",t:"/seraph/images/thumbnails/papalouie3.jpg"},
  {n:"Steak and Jake",u:"https://jordnanblee.github.io/seraph/games/steakandjake/index.html",c:"adventure",i:"🥩",t:"/seraph/images/thumbnails/steakandjake.jpg"},
  {n:"Steak and Jake Midnight",u:"https://jordnanblee.github.io/seraph/games/steakandjakemidnightmarch/index.html",c:"adventure",i:"🌙",t:"/seraph/images/thumbnails/steakandjakemidnightmarch.jpg"},
  {n:"Corporation Inc",u:"https://jordnanblee.github.io/seraph/games/corporationinc/index.html",c:"strategy",i:"🏢",t:"/seraph/images/thumbnails/corporationinc.jpg"},
  {n:"Shop Empire Fable",u:"https://jordnanblee.github.io/seraph/games/shopempirefable/index.html",c:"strategy",i:"🛍️",t:"/seraph/images/thumbnails/shopempirefable.jpg"},
  {n:"Precision Client (MC)",u:"https://jordnanblee.github.io/seraph/games/precisionclient/index.html",c:"adventure",i:"⛏️",t:"/seraph/images/thumbnails/precisionclient.jpg"},
  {n:"Subway Runner",u:"https://jordnanblee.github.io/seraph/games/subwayrunner/index.html",c:"arcade",i:"🚇",t:"/seraph/images/thumbnails/subwayrunner.jpg"},
  {n:"Pick Crafter",u:"https://jordnanblee.github.io/seraph/games/pickcrafter/index.html",c:"arcade",i:"⛏️",t:"/seraph/images/thumbnails/pickcrafter.jpg"},
  {n:"Doge Miner",u:"https://jordnanblee.github.io/seraph/games/dogeminer/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/dogeminer.jpg"},
  {n:"Tanuki Sunset",u:"https://jordnanblee.github.io/seraph/games/tanukisunset/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/tanukisunset.jpg"},
  {n:"Aquapark Slides",u:"https://jordnanblee.github.io/seraph/games/aquaparkslides/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/aquaparkslides.jpg"},
  {n:"Color Switch",u:"https://jordnanblee.github.io/seraph/games/colorswitch/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/colorswitch.jpg"},
  {n:"Papa'S Freezeria",u:"https://jordnanblee.github.io/seraph/games/papasfreezeria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papasfreezeria.jpg"},
  {n:"Btd",u:"https://jordnanblee.github.io/seraph/games/btd/btd/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/btd.jpg"},
  {n:"Btd 2",u:"https://jordnanblee.github.io/seraph/games/btd/btd2/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/btd2.jpg"},
  {n:"Btd 3",u:"https://jordnanblee.github.io/seraph/games/btd/btd3/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/btd3.jpg"},
  {n:"Btd 4",u:"https://jordnanblee.github.io/seraph/games/btd/btd4/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/btd4.jpg"},
  {n:"Bomberman",u:"https://jordnanblee.github.io/seraph/games/bomberman/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/bomberman.jpg"},
  {n:"Fire Emblem",u:"https://jordnanblee.github.io/seraph/games/fireemblem/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/fireemblem.jpg"},
  {n:"Ice Climber",u:"https://jordnanblee.github.io/seraph/games/iceclimber/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/iceclimber.jpg"},
  {n:"Mario Kart Super Circuit",u:"https://jordnanblee.github.io/seraph/games/mariokartsupercircuit/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/mariokartsupercircuit.jpg"},
  {n:"Pokemon Leaf Green",u:"https://jordnanblee.github.io/seraph/games/pokemonleafgreen/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonleafgreen.jpg"},
  {n:"Pokemon Ruby",u:"https://jordnanblee.github.io/seraph/games/pokemonruby/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonruby.jpg"},
  {n:"Pokemon Sapphire",u:"https://jordnanblee.github.io/seraph/games/pokemonsapphire/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonsapphire.jpg"},
  {n:"Superstar Saga",u:"https://jordnanblee.github.io/seraph/games/superstarsaga/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/superstarsaga.jpg"},
  {n:"Adofai",u:"https://jordnanblee.github.io/seraph/games/adofai/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/adofai.jpg"},
  {n:"Super Smash Flash",u:"https://jordnanblee.github.io/seraph/games/supersmashflash/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/supersmashflash.jpg"},
  {n:"Super Meat Boy",u:"https://jordnanblee.github.io/seraph/games/supermeatboy/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/supermeatboy.jpg"},
  {n:"Stickman Hook",u:"https://jordnanblee.github.io/seraph/games/stickmanhook/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/stickmanhook.jpg"},
  {n:"Defend the Tank",u:"https://jordnanblee.github.io/seraph/games/defendthetank/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/defendthetank.jpg"},
  {n:"Sort the Court",u:"https://jordnanblee.github.io/seraph/games/sortthecourt/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/sortthecourt.jpg"},
  {n:"This Is the Only Level",u:"https://jordnanblee.github.io/seraph/games/thisistheonlylevel/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/thisistheonlylevel.jpg"},
  {n:"Run",u:"https://jordnanblee.github.io/seraph/games/run/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/run.jpg"},
  {n:"Run 2",u:"https://jordnanblee.github.io/seraph/games/run2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/run2.jpg"},
  {n:"Battleships",u:"https://jordnanblee.github.io/seraph/games/battleships/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/battleships.jpg"},
  {n:"Breaking the Bank",u:"https://jordnanblee.github.io/seraph/games/breakingthebank/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/breakingthebank.jpg"},
  {n:"Duck Life",u:"https://jordnanblee.github.io/seraph/games/ducklife/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/ducklife.jpg"},
  {n:"Duck Life 2",u:"https://jordnanblee.github.io/seraph/games/ducklife2/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/ducklife2.jpg"},
  {n:"Duck Life 3",u:"https://jordnanblee.github.io/seraph/games/ducklife3/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/ducklife3.jpg"},
  {n:"Line Rider",u:"https://jordnanblee.github.io/seraph/games/linerider/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/linerider.jpg"},
  {n:"Mario Combat",u:"https://jordnanblee.github.io/seraph/games/mariocombat/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/mariocombat.jpg"},
  {n:"Raft Wars 2",u:"https://jordnanblee.github.io/seraph/games/raftwars2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/raftwars2.jpg"},
  {n:"Space Invaders",u:"https://jordnanblee.github.io/seraph/games/spaceinvaders/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/spaceinvaders.jpg"},
  {n:"Animal Crossing",u:"https://jordnanblee.github.io/seraph/games/animalcrossingwildworld/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/animalcrossingwildworld.jpg"},
  {n:"Mario Kart Ds",u:"https://jordnanblee.github.io/seraph/games/mariokartds/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/mariokartds.jpg"},
  {n:"New Super Mario Bros",u:"https://jordnanblee.github.io/seraph/games/newsupermariobros/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/newsupermariobros.jpg"},
  {n:"Nintendogs",u:"https://jordnanblee.github.io/seraph/games/nintendogs/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/nintendogs.jpg"},
  {n:"Super Mario 64 Ds",u:"https://jordnanblee.github.io/seraph/games/sm64ds/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sm64ds.jpg"},
  {n:"Gun Mayhem",u:"https://jordnanblee.github.io/seraph/games/gunmayhem/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/gunmayhem.jpg"},
  {n:"Learn to Fly",u:"https://jordnanblee.github.io/seraph/games/learntofly/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/learntofly.jpg"},
  {n:"Rooftop Snipers 2",u:"https://jordnanblee.github.io/seraph/games/rooftop2/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/rooftopsnipers2.jpg"},
  {n:"Fireboy and Watergirl",u:"https://jordnanblee.github.io/seraph/games/fireboywatergirl/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/fireboyandwatergirl.jpg"},
  {n:"Chibi Knight",u:"https://jordnanblee.github.io/seraph/games/chibiknight/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/chibiknight.jpg"},
  {n:"Cluster Rush",u:"https://jordnanblee.github.io/seraph/games/clusterrush/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/clusterrush.jpg"},
  {n:"Doodle Defender",u:"https://jordnanblee.github.io/seraph/games/doodledefender/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/doodledefender.jpg"},
  {n:"Learn to Fly 2",u:"https://jordnanblee.github.io/seraph/games/learntofly2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/learntofly2.jpg"},
  {n:"Papa'S Scooperia",u:"https://jordnanblee.github.io/seraph/games/papasscooperia/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papasscooperia.jpg"},
  {n:"Papa'S Sushiria",u:"https://jordnanblee.github.io/seraph/games/papassushiria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papaswingeria.jpg"},
  {n:"Papa'S Wingeria",u:"https://jordnanblee.github.io/seraph/games/papaswingeria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papassushiria.jpg"},
  {n:"Raft Wars",u:"https://jordnanblee.github.io/seraph/games/raftwars/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/raftwars.jpg"},
  {n:"Unfair Mario",u:"https://jordnanblee.github.io/seraph/games/unfairmario/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/unfairmario.jpg"},
  {n:"Boxing Physics 2",u:"https://jordnanblee.github.io/seraph/games/boxingphysics2/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/boxingphysics2.jpg"},
  {n:"Ace Attorney",u:"https://jordnanblee.github.io/seraph/games/aceattorney/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/aceattorney.jpg"},
  {n:"Metal Gear Solid",u:"https://jordnanblee.github.io/seraph/games/metalgearsolid/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/metalgearsolid.jpg"},
  {n:"Mother 3",u:"https://jordnanblee.github.io/seraph/games/mother3/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/mother3.jpg"},
  {n:"Pokemon Diamond",u:"https://jordnanblee.github.io/seraph/games/pokemondiamond/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemondiamond.jpg"},
  {n:"Pokemon Platinum",u:"https://jordnanblee.github.io/seraph/games/pokemonplatinum/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonplatinum.jpg"},
  {n:"Pokemon Soulsilver",u:"https://jordnanblee.github.io/seraph/games/pokemonsoulsilver/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonsoulsilver.jpg"},
  {n:"Advance Wars",u:"https://jordnanblee.github.io/seraph/games/advancewars/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/advancewars.jpg"},
  {n:"Banjo Pilot",u:"https://jordnanblee.github.io/seraph/games/banjopilot/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/banjopilot.jpg"},
  {n:"Super Monkey Ball Jr",u:"https://jordnanblee.github.io/seraph/games/supermonkeyballjr/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/supermonkeyballjr.jpg"},
  {n:"The Impossible Quiz 2",u:"https://jordnanblee.github.io/seraph/games/theimpossiblequiz2/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/theimpossiblequiz2.jpg"},
  {n:"Papa'S Donuteria",u:"https://jordnanblee.github.io/seraph/games/papasdonuteria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papasdonuteria.jpg"},
  {n:"Fancy Pants Adventure 2",u:"https://jordnanblee.github.io/seraph/games/fancypantsadventure2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/fancypantsadventure2.jpg"},
  {n:"Tiny Fishing",u:"https://jordnanblee.github.io/seraph/games/tinyfishing/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/tinyfishing.jpg"},
  {n:"Big Red Button",u:"https://jordnanblee.github.io/seraph/games/bigredbutton/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/bigredbutton.jpg"},
  {n:"Achievement Unlocked",u:"https://jordnanblee.github.io/seraph/games/achievementunlocked/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/achievementunlocked.jpg"},
  {n:"Kirby Mass Attack",u:"https://jordnanblee.github.io/seraph/games/kirbymassattack/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/kirbymassattack.jpg"},
  {n:"Sonic Advance",u:"https://jordnanblee.github.io/seraph/games/sonicadvance/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sonicadvance.jpg"},
  {n:"Worms World Party",u:"https://jordnanblee.github.io/seraph/games/wormsworldparty/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/wormsworldparty.jpg"},
  {n:"Bad Ice Cream",u:"https://jordnanblee.github.io/seraph/games/badicecream/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/badicecream.jpg"},
  {n:"Bad Ice Cream 2",u:"https://jordnanblee.github.io/seraph/games/badicecream2/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/badicecream2.jpg"},
  {n:"Bad Ice Cream 3",u:"https://jordnanblee.github.io/seraph/games/badicecream3/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/badicecream3.jpg"},
  {n:"Adventure Captialist",u:"https://jordnanblee.github.io/seraph/games/adventurecapitalist/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/adventurecaptialist.jpg"},
  {n:"Monkey Mart",u:"https://jordnanblee.github.io/seraph/games/monkeymart/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/monkeymart.jpg"},
  {n:"Doom 64",u:"https://jordnanblee.github.io/seraph/games/doom64/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/doom64.jpg"},
  {n:"Banjo Kazooie",u:"https://jordnanblee.github.io/seraph/games/banjokazooie/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/banjokazooie.jpg"},
  {n:"Donkey Kong 64",u:"https://jordnanblee.github.io/seraph/games/donkeykong64/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/donkeykong64.jpg"},
  {n:"F-Zero X",u:"https://jordnanblee.github.io/seraph/games/fzerox/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/fzerox.jpg"},
  {n:"Kirby 64",u:"https://jordnanblee.github.io/seraph/games/kirby64/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/kirby64.jpg"},
  {n:"Mario Kart 64",u:"https://jordnanblee.github.io/seraph/games/mariokart64/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/mariokart64.jpg"},
  {n:"Mario Party",u:"https://jordnanblee.github.io/seraph/games/marioparty/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/marioparty.jpg"},
  {n:"Mario Party 2",u:"https://jordnanblee.github.io/seraph/games/marioparty2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/marioparty2.jpg"},
  {n:"Ocarina of Time",u:"https://jordnanblee.github.io/seraph/games/ocarinaoftime/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/ocarinaoftime.jpg"},
  {n:"Star Fox 64",u:"https://jordnanblee.github.io/seraph/games/starfox64/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/starfox64.jpg"},
  {n:"Super Smash Bros",u:"https://jordnanblee.github.io/seraph/games/supersmashbros/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/supersmashbros.jpg"},
  {n:"Street Fighter 2",u:"https://jordnanblee.github.io/seraph/games/streetfighter2/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/streetfighter2.jpg"},
  {n:"Getaway Shootout",u:"https://jordnanblee.github.io/seraph/games/getawayshootout/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/getawayshootout.jpg"},
  {n:"Rabbit Samurai",u:"https://jordnanblee.github.io/seraph/games/rabbitsamurai/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/rabbitsamurai.jpg"},
  {n:"Mario Party Ds",u:"https://jordnanblee.github.io/seraph/games/mariopartyds/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/mariopartyds.jpg"},
  {n:"Professor Layton",u:"https://jordnanblee.github.io/seraph/games/professorlayton/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/professorlayton.jpg"},
  {n:"Scribblenauts",u:"https://jordnanblee.github.io/seraph/games/scribblenauts/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/scribblenauts.jpg"},
  {n:"Advance Wars 2",u:"https://jordnanblee.github.io/seraph/games/advancewars2/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/advancewars2.jpg"},
  {n:"Harvest Moon",u:"https://jordnanblee.github.io/seraph/games/harvestmoon/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/harvestmoon.jpg"},
  {n:"Mario Tennis",u:"https://jordnanblee.github.io/seraph/games/mariotennis/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/mariotennis.jpg"},
  {n:"Mega Man Zero",u:"https://jordnanblee.github.io/seraph/games/megamanzero/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/megamanzero.jpg"},
  {n:"Mystery Dungeon",u:"https://jordnanblee.github.io/seraph/games/pokemonmysterydungeon/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonmysterydungeon.jpg"},
  {n:"Pokemon Unbound",u:"https://jordnanblee.github.io/seraph/games/pokemonunbound/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonunbound.jpg"},
  {n:"Papa'S Cheeseria",u:"https://jordnanblee.github.io/seraph/games/papascheeseria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papascheeseria.jpg"},
  {n:"Papa'S Cupcakeria",u:"https://jordnanblee.github.io/seraph/games/papascupcakeria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papascupcakeria.jpg"},
  {n:"Papa'S Bakeria",u:"https://jordnanblee.github.io/seraph/games/papasbakeria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papasbakeria.jpg"},
  {n:"Papa'S Pastaria",u:"https://jordnanblee.github.io/seraph/games/papaspastaria/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papaspastaria.jpg"},
  {n:"Gun Mayhem 2",u:"https://jordnanblee.github.io/seraph/games/gunmayhem2/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/gunmayhem2.jpg"},
  {n:"Gun Mayhem Redux",u:"https://jordnanblee.github.io/seraph/games/gunmayhemredux/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/gunmayhemredux.jpg"},
  {n:"Achievement Unlocked 2",u:"https://jordnanblee.github.io/seraph/games/achievementunlocked2/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/achievementunlocked2.jpg"},
  {n:"Achievement Unlocked 3",u:"https://jordnanblee.github.io/seraph/games/achievementunlocked3/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/achievementunlocked3.jpg"},
  {n:"Factory Balls",u:"https://jordnanblee.github.io/seraph/games/factoryballs/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/factoryballs.jpg"},
  {n:"Skywire",u:"https://jordnanblee.github.io/seraph/games/skywire/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/skywire.jpg"},
  {n:"Super Mario Flash",u:"https://jordnanblee.github.io/seraph/games/supermarioflash/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/supermarioflash.jpg"},
  {n:"Golden Sun",u:"https://jordnanblee.github.io/seraph/games/goldensun/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/goldensun.jpg"},
  {n:"Metroid Fusion",u:"https://jordnanblee.github.io/seraph/games/metroidfusion/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/metroidfusion.jpg"},
  {n:"Dbz: Supersonic Warriors",u:"https://jordnanblee.github.io/seraph/games/dbzsupersonicwarriors/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/goldensun.jpg"},
  {n:"Wario Land 4",u:"https://jordnanblee.github.io/seraph/games/warioland4/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/warioland4.jpg"},
  {n:"Duck Life 5",u:"https://jordnanblee.github.io/seraph/games/ducklife5/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/ducklife5.jpg"},
  {n:"Learn to Fly 3",u:"https://jordnanblee.github.io/seraph/games/learntofly3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/learntofly3.jpg"},
  {n:"Bloxors",u:"https://jordnanblee.github.io/seraph/games/bloxors/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/bloxors.jpg"},
  {n:"Electric Man 2",u:"https://jordnanblee.github.io/seraph/games/electricman2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/electricman2.jpg"},
  {n:"Portal",u:"https://jordnanblee.github.io/seraph/games/portal/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/portal.jpg"},
  {n:"Portal 2",u:"https://jordnanblee.github.io/seraph/games/portal2/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/portal2.jpg"},
  {n:"Skywire 2",u:"https://jordnanblee.github.io/seraph/games/skywire2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/skywire2.jpg"},
  {n:"Duck Life 6",u:"https://jordnanblee.github.io/seraph/games/ducklife6/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/ducklife6.jpg"},
  {n:"Boxing Random",u:"https://jordnanblee.github.io/seraph/games/boxingrandom/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/boxingrandom.jpg"},
  {n:"Cell Machine",u:"https://jordnanblee.github.io/seraph/games/cellmachine/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/cellmachine.jpg"},
  {n:"Stickman Boost",u:"https://jordnanblee.github.io/seraph/games/stickmanboost/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/stickmanboost.jpg"},
  {n:"Vex 3",u:"https://jordnanblee.github.io/seraph/games/vex3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vex3.jpg"},
  {n:"Vex 4",u:"https://jordnanblee.github.io/seraph/games/vex4/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vex4.jpg"},
  {n:"Skibidi Toilet 1v100",u:"https://jordnanblee.github.io/seraph/games/skibidi1v100/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/skibiditoilet1v100.jpg"},
  {n:"Golden Eye 007",u:"https://jordnanblee.github.io/seraph/games/goldeneye007/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/goldeneye007.jpg"},
  {n:"Majora'S Mask",u:"https://jordnanblee.github.io/seraph/games/majorasmask/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/majorasmask.jpg"},
  {n:"Paper Mario",u:"https://jordnanblee.github.io/seraph/games/papermario/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/papermario.jpg"},
  {n:"Mario Golf",u:"https://jordnanblee.github.io/seraph/games/mariogolf/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/mariogolf.jpg"},
  {n:"Pokemon Stadium",u:"https://jordnanblee.github.io/seraph/games/pokemonstadium/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/pokemonstadium.jpg"},
  {n:"Excitebike 64",u:"https://jordnanblee.github.io/seraph/games/excitebike64/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/excitebike64.jpg"},
  {n:"Pokemon Snap",u:"https://jordnanblee.github.io/seraph/games/pokemonsnap/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonsnap.jpg"},
  {n:"Mario Party 3",u:"https://jordnanblee.github.io/seraph/games/marioparty3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/marioparty3.jpg"},
  {n:"Sonic Advance 2",u:"https://jordnanblee.github.io/seraph/games/sonicadvance2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sonicadvance2.jpg"},
  {n:"Bowsers Inside Story",u:"https://jordnanblee.github.io/seraph/games/bowsersinsidestory/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/bowsersinsidestory.jpg"},
  {n:"Spirit Tracks",u:"https://jordnanblee.github.io/seraph/games/spirittracks/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/spirittracks.jpg"},
  {n:"The Sims 2",u:"https://jordnanblee.github.io/seraph/games/thesims2/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/thesims2.jpg"},
  {n:"Tetris Ds",u:"https://jordnanblee.github.io/seraph/games/tetrisds/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/tetrisds.jpg"},
  {n:"Sonic Rush",u:"https://jordnanblee.github.io/seraph/games/sonicrush/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sonicrush.jpg"},
  {n:"The Sims 3",u:"https://jordnanblee.github.io/seraph/games/thesims3/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/thesims3.jpg"},
  {n:"Super Princess Peach",u:"https://jordnanblee.github.io/seraph/games/superprincesspeach/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/superprincesspeach.jpg"},
  {n:"Lego Batman",u:"https://jordnanblee.github.io/seraph/games/legobatman/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/legobatman.jpg"},
  {n:"Doom 2",u:"https://jordnanblee.github.io/seraph/games/doom2/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/doomii.jpg"},
  {n:"Duke Nukem Advance",u:"https://jordnanblee.github.io/seraph/games/dukenukemadvance/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/dukenukemadvance.jpg"},
  {n:"Mario Party Advance",u:"https://jordnanblee.github.io/seraph/games/mariopartyadvance/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/mariopartyadvance.jpg"},
  {n:"Mario Pinball Land",u:"https://jordnanblee.github.io/seraph/games/mariopinballland/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/mariopinballland.jpg"},
  {n:"Pacman World",u:"https://jordnanblee.github.io/seraph/games/pacmanworld/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pacmanworld.jpg"},
  {n:"Rayman 3",u:"https://jordnanblee.github.io/seraph/games/rayman3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/rayman3.jpg"},
  {n:"Shrek 2",u:"https://jordnanblee.github.io/seraph/games/shrek2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/shrek2.jpg"},
  {n:"Simcity 2000",u:"https://jordnanblee.github.io/seraph/games/simcity/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/simcity2000.jpg"},
  {n:"Simpsons Road Rage",u:"https://jordnanblee.github.io/seraph/games/simpsonsroadrage/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/simpsonsroadrage.jpg"},
  {n:"Diddy Kong Racing",u:"https://jordnanblee.github.io/seraph/games/diddykongracing/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/diddykongracing.jpg"},
  {n:"Wave Race 64",u:"https://jordnanblee.github.io/seraph/games/waverace64/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/waveracing.jpg"},
  {n:"Quest 64",u:"https://jordnanblee.github.io/seraph/games/quest64/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/quest64.jpg"},
  {n:"Gex 64",u:"https://jordnanblee.github.io/seraph/games/gex64/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/gex64.jpg"},
  {n:"Duke Nukem 64",u:"https://jordnanblee.github.io/seraph/games/dukenukem64/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/dukenukem64.jpg"},
  {n:"Mortal Kombat 4",u:"https://jordnanblee.github.io/seraph/games/mortalkombat4/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/mortalkombat4.jpg"},
  {n:"Bad Piggies",u:"https://jordnanblee.github.io/seraph/games/badpiggies/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/badpiggies.jpg"},
  {n:"Super Mario Flash 2",u:"https://jordnanblee.github.io/seraph/games/supermarioflash2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/supermarioflash2.jpg"},
  {n:"Swords and Sandals",u:"https://jordnanblee.github.io/seraph/games/swordsandsandals/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/swordsandsandals.jpg"},
  {n:"Swords and Sandals 2",u:"https://jordnanblee.github.io/seraph/games/swordsandsandals2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/swordsandsandals2.jpg"},
  {n:"Wordle",u:"https://jordnanblee.github.io/seraph/games/wordle/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/wordle.jpg"},
  {n:"Vex",u:"https://jordnanblee.github.io/seraph/games/vex/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vex.jpg"},
  {n:"Vex 2",u:"https://jordnanblee.github.io/seraph/games/vex2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vex2.jpg"},
  {n:"Vex 5",u:"https://jordnanblee.github.io/seraph/games/vex5/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vex5.jpg"},
  {n:"Vex 7",u:"https://jordnanblee.github.io/seraph/games/vex7/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vex7.jpg"},
  {n:"Stack",u:"https://jordnanblee.github.io/seraph/games/stack/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/stack.jpg"},
  {n:"Skibidi Toilet Attack",u:"https://jordnanblee.github.io/seraph/games/skibiditoiletattack/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/skibiditoiletattack.jpg"},
  {n:"Motox3m Pool",u:"https://jordnanblee.github.io/seraph/games/motox3mpool/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/motox3mpool.jpg"},
  {n:"Offline Paradise",u:"https://jordnanblee.github.io/seraph/games/offlineparadise/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/offlineparadise.jpg"},
  {n:"Link to the Past",u:"https://jordnanblee.github.io/seraph/games/linktothepast/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/linktothepast.jpg"},
  {n:"Donkey Kong Country",u:"https://jordnanblee.github.io/seraph/games/donkeykongcountry/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/donkeykongcountry.jpg"},
  {n:"Donkey Kong Country 2",u:"https://jordnanblee.github.io/seraph/games/donkeykongcountry2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/donkeykongcountry2.jpg"},
  {n:"Super Bomberman",u:"https://jordnanblee.github.io/seraph/games/superbomberman/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/superbomberman.jpg"},
  {n:"Mario Paint",u:"https://jordnanblee.github.io/seraph/games/mariopaint/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/mariopaint.jpg"},
  {n:"Mega Man X",u:"https://jordnanblee.github.io/seraph/games/megamanx/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/megamanx.jpg"},
  {n:"Super Mario RPG",u:"https://jordnanblee.github.io/seraph/games/supermariorpg/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/supermariorpg.jpg"},
  {n:"Super Tennis",u:"https://jordnanblee.github.io/seraph/games/supertennis/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/supertennis.jpg"},
  {n:"Wario'S Woods",u:"https://jordnanblee.github.io/seraph/games/warioswoods/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/warioswoods.jpg"},
  {n:"Worlds Hardest Game 2",u:"https://jordnanblee.github.io/seraph/games/worldshardestgame2/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/worldshardestgame2.jpg"},
  {n:"Bubble Tanks 2",u:"https://jordnanblee.github.io/seraph/games/bubbletanks2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/bubbletanks2.jpg"},
  {n:"Choose Your Weapon",u:"https://jordnanblee.github.io/seraph/games/chooseyourweapon/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/chooseyourweapon.jpg"},
  {n:"Choose Your Weapon 2",u:"https://jordnanblee.github.io/seraph/games/chooseyourweapon2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/chooseyourweapon2.jpg"},
  {n:"Choose Your Weapon 3",u:"https://jordnanblee.github.io/seraph/games/chooseyourweapon3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/chooseyourweapon3.jpg"},
  {n:"Connect 4",u:"https://jordnanblee.github.io/seraph/games/connect4/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/connect4.jpg"},
  {n:"Electric Box",u:"https://jordnanblee.github.io/seraph/games/electricbox/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/electricbox.jpg"},
  {n:"MC Tower Defence 2",u:"https://jordnanblee.github.io/seraph/games/mctowerdefence2/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/mctowerdefence2.jpg"},
  {n:"Cars 2",u:"https://jordnanblee.github.io/seraph/games/cars2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/cars2.jpg"},
  {n:"Cooking Mama",u:"https://jordnanblee.github.io/seraph/games/cookingmama/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/cookingmama.jpg"},
  {n:"Adventure Time",u:"https://jordnanblee.github.io/seraph/games/adventuretime/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/adventuretimeheyiceking.jpg"},
  {n:"Garfield Gets Real",u:"https://jordnanblee.github.io/seraph/games/garfieldgetsreal/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/garfieldgetsreal.jpg"},
  {n:"Warioware Touched",u:"https://jordnanblee.github.io/seraph/games/wariowaretouched/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/wariowaretouched.jpg"},
  {n:"Kirby Power Paintbrush",u:"https://jordnanblee.github.io/seraph/games/kirbypowerpaintbrush/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/kirbypowerpaintbrush.jpg"},
  {n:"Sonic and Knuckles",u:"https://jordnanblee.github.io/seraph/games/sonicandknuckles/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/sonicandknuckles.jpg"},
  {n:"Altered Beast",u:"https://jordnanblee.github.io/seraph/games/alteredbeast/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/alteredbeast.jpg"},
  {n:"Sonic Spinball",u:"https://jordnanblee.github.io/seraph/games/sonicspinball/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sonicspinball.jpg"},
  {n:"Sonic the Hedgehog 3",u:"https://jordnanblee.github.io/seraph/games/sonicthehedgehog3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sonicthehedgehog3.jpg"},
  {n:"Streets of Rage",u:"https://jordnanblee.github.io/seraph/games/streetsofrage/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/streetsofrage.jpg"},
  {n:"Golden Axe",u:"https://jordnanblee.github.io/seraph/games/goldenaxe/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/goldenaxe.jpg"},
  {n:"Kirby Amazing Mirror",u:"https://jordnanblee.github.io/seraph/games/kirbyamazingmirror/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/kirbyamazingmirror.jpg"},
  {n:"Champion Island",u:"https://jordnanblee.github.io/seraph/games/championisland/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/championisland.jpg"},
  {n:"Super Mario Construct",u:"https://jordnanblee.github.io/seraph/games/supermarioconstruct/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/supermarioconstruct.jpg"},
  {n:"Clicker Heroes",u:"https://jordnanblee.github.io/seraph/games/clickerheroes/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/clickerheroes.jpg"},
  {n:"Stair Race 3D",u:"https://jordnanblee.github.io/seraph/games/stairrace3d/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/stairrace3d.jpg"},
  {n:"Slope 2",u:"https://jordnanblee.github.io/seraph/games/slope2/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/slope2.jpg"},
  {n:"Paper IO 3D",u:"https://jordnanblee.github.io/seraph/games/paperio3d/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/paperio3d.jpg"},
  {n:"Motox3m Spooky",u:"https://jordnanblee.github.io/seraph/games/motox3mspooky/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/motox3mspooky.jpg"},
  {n:"Motox3m Winter",u:"https://jordnanblee.github.io/seraph/games/motox3mwinter/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/motox3mwinter.jpg"},
  {n:"Snake",u:"https://jordnanblee.github.io/seraph/games/snake/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/snake.jpg"},
  {n:"Papa'S Tacomia",u:"https://jordnanblee.github.io/seraph/games/papastacomia/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/papastacomia.jpg"},
  {n:"Ovo",u:"https://jordnanblee.github.io/seraph/games/ovo/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/ovo.jpg"},
  {n:"Knife Hit",u:"https://jordnanblee.github.io/seraph/games/knifehit/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/knifehit.jpg"},
  {n:"Cubefield",u:"https://jordnanblee.github.io/seraph/games/cubefield/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/cubefield.jpg"},
  {n:"Burger and Frights",u:"https://jordnanblee.github.io/seraph/games/burgerandfrights/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/burgerandfrights.jpg"},
  {n:"Chess",u:"https://jordnanblee.github.io/seraph/games/chess/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/chess.jpg"},
  {n:"Fnf Mid Fight Masses",u:"https://jordnanblee.github.io/seraph/games/fnfmidfight/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/midfightmasses.jpg"},
  {n:"Thumb Fighter",u:"https://jordnanblee.github.io/seraph/games/thumbfighter/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/thumbfighter.jpg"},
  {n:"Snow Battle IO",u:"https://jordnanblee.github.io/seraph/games/snowbattleio/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/snowbattleio.jpg"},
  {n:"Lazy Jump 3D",u:"https://jordnanblee.github.io/seraph/games/lazyjump3d/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/lazyjump3d.jpg"},
  {n:"Go Ball",u:"https://jordnanblee.github.io/seraph/games/goball/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/goball.jpg"},
  {n:"Flippy Fish",u:"https://jordnanblee.github.io/seraph/games/flippyfish/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/flippyfish.jpg"},
  {n:"Shop Empire",u:"https://jordnanblee.github.io/seraph/games/shopempire/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/shopempire.jpg"},
  {n:"Monster Brawl",u:"https://jordnanblee.github.io/seraph/games/monsterbrawl/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/monsterbrawl.jpg"},
  {n:"Multitask",u:"https://jordnanblee.github.io/seraph/games/multitask/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/multitask.jpg"},
  {n:"Shift",u:"https://jordnanblee.github.io/seraph/games/shift/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/shift.jpg"},
  {n:"Shift 2",u:"https://jordnanblee.github.io/seraph/games/shift2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/shift2.jpg"},
  {n:"Shift 3",u:"https://jordnanblee.github.io/seraph/games/shift3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/shift3.jpg"},
  {n:"Shift 4",u:"https://jordnanblee.github.io/seraph/games/shift4/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/shift4.jpg"},
  {n:"Monopoly",u:"https://jordnanblee.github.io/seraph/games/monopoly/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/monopoly.jpg"},
  {n:"Picross Ds",u:"https://jordnanblee.github.io/seraph/games/picrossds/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/picrossds.jpg"},
  {n:"Warioware Diy",u:"https://jordnanblee.github.io/seraph/games/wariowarediy/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/wariowarediy.jpg"},
  {n:"Pizza Tower",u:"https://jordnanblee.github.io/seraph/games/pizzatower/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/pizzatower.jpg"},
  {n:"Territorial IO",u:"https://jordnanblee.github.io/seraph/games/territorialio/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/territorialio.jpg"},
  {n:"1v1lol",u:"https://jordnanblee.github.io/seraph/games/1v1lol/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/1v1lol.jpg"},
  {n:"Ballistic Chickens",u:"https://jordnanblee.github.io/seraph/games/ballisticchickens/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/ballisticchickens.jpg"},
  {n:"Basketbros IO",u:"https://jordnanblee.github.io/seraph/games/basketbrosio/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/basketbrosio.jpg"},
  {n:"Minecraft Classic",u:"https://jordnanblee.github.io/seraph/games/mcclassic/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/mcclassic.jpg"},
  {n:"Death Run 3D",u:"https://jordnanblee.github.io/seraph/games/deathrun3d/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/deathrun3d.jpg"},
  {n:"Soccer Random",u:"https://jordnanblee.github.io/seraph/games/soccerrandom/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/soccerrandom.jpg"},
  {n:"Sprinter",u:"https://jordnanblee.github.io/seraph/games/sprinter/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sprinter.jpg"},
  {n:"Tron",u:"https://jordnanblee.github.io/seraph/games/tron/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/tron.jpg"},
  {n:"1 on 1 Soccer",u:"https://jordnanblee.github.io/seraph/games/1on1soccer/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/1on1soccer.jpg"},
  {n:"Bad Time Simulator",u:"https://jordnanblee.github.io/seraph/games/badtimesimulator/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/badtimesimulator.jpg"},
  {n:"Amazing Rope Police",u:"https://jordnanblee.github.io/seraph/games/amazingropepolice/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/amazingropepolice.jpg"},
  {n:"Celeste",u:"https://jordnanblee.github.io/seraph/games/celeste/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/celeste.jpg"},
  {n:"Just Fall Lol",u:"https://jordnanblee.github.io/seraph/games/justfalllol/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/justfalllol.jpg"},
  {n:"Ngon",u:"https://jordnanblee.github.io/seraph/games/ngon/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/ngon.jpg"},
  {n:"Rocket Soccer",u:"https://jordnanblee.github.io/seraph/games/rocketsoccer/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/rocketsoccer.jpg"},
  {n:"Stickman Climb",u:"https://jordnanblee.github.io/seraph/games/stickmanclimb/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/stickmanclimb.jpg"},
  {n:"Osu!mania",u:"https://jordnanblee.github.io/seraph/games/osumania/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/osumania.jpg"},
  {n:"Helix Jump",u:"https://jordnanblee.github.io/seraph/games/helixjump/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/helixjump.jpg"},
  {n:"Dadish",u:"https://jordnanblee.github.io/seraph/games/dadish/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/dadish.jpg"},
  {n:"Dadish 2",u:"https://jordnanblee.github.io/seraph/games/dadish2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/dadish2.jpg"},
  {n:"Dadish 3",u:"https://jordnanblee.github.io/seraph/games/dadish3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/dadish3.jpg"},
  {n:"Snow Rider 3D",u:"https://jordnanblee.github.io/seraph/games/snowrider3d/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/snowrider3d.jpg"},
  {n:"Tube Jumpers",u:"https://jordnanblee.github.io/seraph/games/tubejumpers/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/tubejumpers.jpg"},
  {n:"Yohoho IO",u:"https://jordnanblee.github.io/seraph/games/yohoho/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/yohoho.jpg"},
  {n:"10 Minutes Till Dawn",u:"https://jordnanblee.github.io/seraph/games/10minutestilldawn/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/10minutestilldawn.jpg"},
  {n:"Volley Random",u:"https://jordnanblee.github.io/seraph/games/volleyrandom/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/volleyrandom.jpg"},
  {n:"Waterworks",u:"https://jordnanblee.github.io/seraph/games/waterworks/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/waterworks.jpg"},
  {n:"Geometry Rash",u:"https://jordnanblee.github.io/seraph/games/geometryrash/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/geometryrash.jpg"},
  {n:"Hole IO",u:"https://jordnanblee.github.io/seraph/games/holeio/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/holeio.jpg"},
  {n:"Sandtrix",u:"https://jordnanblee.github.io/seraph/games/sandtrix/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sandtrix.jpg"},
  {n:"Shapeshipper",u:"https://jordnanblee.github.io/seraph/games/shapeshipper/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/shapeshipper.jpg"},
  {n:"Slope Ball",u:"https://jordnanblee.github.io/seraph/games/slopeball/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/slopeball.jpg"},
  {n:"Stickman Golf",u:"https://jordnanblee.github.io/seraph/games/stickmangolf/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/stickmangolf.jpg"},
  {n:"Totally Accurate Battle Sim",u:"https://jordnanblee.github.io/seraph/games/tabs/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/totallyaccuratebattlesim.jpg"},
  {n:"Watermelon Game",u:"https://jordnanblee.github.io/seraph/games/watermelongame/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/watermelongame.jpg"},
  {n:"Wall Smash",u:"https://jordnanblee.github.io/seraph/games/wallsmash/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/wallsmash.jpg"},
  {n:"Crimson Fantasia",u:"https://jordnanblee.github.io/seraph/games/crimsonfantasia/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/crimsonfantasia.jpg"},
  {n:"Cut the Rope",u:"https://jordnanblee.github.io/seraph/games/cuttherope/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/cuttherope.jpg"},
  {n:"Funny Mad Racing",u:"https://jordnanblee.github.io/seraph/games/funnymadracing/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/funnymadracing.jpg"},
  {n:"Geometry Dash Lite",u:"https://jordnanblee.github.io/seraph/games/gdlite/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/geometrydashlite.jpg"},
  {n:"Grand Theft Grotto",u:"https://jordnanblee.github.io/seraph/games/grandtheftgrotto/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/grandtheftgrotto.jpg"},
  {n:"Drift Mania",u:"https://jordnanblee.github.io/seraph/games/driftmania/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/driftmania.jpg"},
  {n:"Rise Higher",u:"https://jordnanblee.github.io/seraph/games/risehigher/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/risehigher.jpg"},
  {n:"Burrito Bison",u:"https://jordnanblee.github.io/seraph/games/burritobison/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/burritobison.jpg"},
  {n:"Pool",u:"https://jordnanblee.github.io/seraph/games/pool/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/pool.jpg"},
  {n:"Redball",u:"https://jordnanblee.github.io/seraph/games/redball1/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/redball.jpg"},
  {n:"Redball 3",u:"https://jordnanblee.github.io/seraph/games/redball3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/redball3.jpg"},
  {n:"Redball 4",u:"https://jordnanblee.github.io/seraph/games/redball4/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/redball4.jpg"},
  {n:"Redball 4 Vol 2",u:"https://jordnanblee.github.io/seraph/games/redballv2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/redball4vol2.jpg"},
  {n:"Redball 4 Vol 3",u:"https://jordnanblee.github.io/seraph/games/redballv3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/redball4vol3.jpg"},
  {n:"Rough Dino",u:"https://jordnanblee.github.io/seraph/games/roughdino/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/roughdino.jpg"},
  {n:"Time Shooter",u:"https://jordnanblee.github.io/seraph/games/timeshooter1/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/timeshooter.jpg"},
  {n:"Time Shooter 2",u:"https://jordnanblee.github.io/seraph/games/timeshooter2/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/timeshooter2.jpg"},
  {n:"Time Shooter 3",u:"https://jordnanblee.github.io/seraph/games/timeshooter3/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/timeshooter3.jpg"},
  {n:"Battletoads",u:"https://jordnanblee.github.io/seraph/games/battletoads/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/battletoads.jpg"},
  {n:"Castlevania",u:"https://jordnanblee.github.io/seraph/games/castlevaniaiii/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/castlevania.jpg"},
  {n:"Contra",u:"https://jordnanblee.github.io/seraph/games/contra/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/contra.jpg"},
  {n:"Duck Tales",u:"https://jordnanblee.github.io/seraph/games/ducktales/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/ducktales.jpg"},
  {n:"Kid Icarus",u:"https://jordnanblee.github.io/seraph/games/kidicarus/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/kidicarus.jpg"},
  {n:"Mega Man 2",u:"https://jordnanblee.github.io/seraph/games/megaman2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/megaman2.jpg"},
  {n:"Ninja Gaiden",u:"https://jordnanblee.github.io/seraph/games/ninjagaiden/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/ninjagaiden.jpg"},
  {n:"Punch Out",u:"https://jordnanblee.github.io/seraph/games/punchout/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/mikestysonspunchout.jpg"},
  {n:"Chrono Trigger",u:"https://jordnanblee.github.io/seraph/games/chronotrigger/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/chronotrigger.jpg"},
  {n:"Contra III",u:"https://jordnanblee.github.io/seraph/games/contraiii/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/contraiii.jpg"},
  {n:"Donkey Kong Country 3",u:"https://jordnanblee.github.io/seraph/games/donkeykongcountry3/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/donkeykongcountry3.jpg"},
  {n:"Earthbound",u:"https://jordnanblee.github.io/seraph/games/earthbound/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/earthbound.jpg"},
  {n:"Final Fantasy IV",u:"https://jordnanblee.github.io/seraph/games/finalfantasyvi/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/finalfantasyiv.jpg"},
  {n:"F-Zero",u:"https://jordnanblee.github.io/seraph/games/fzero/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/fzero.jpg"},
  {n:"Super Metroid",u:"https://jordnanblee.github.io/seraph/games/supermetroid/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/supermetroid.jpg"},
  {n:"Banjo Tooie",u:"https://jordnanblee.github.io/seraph/games/banjotooie/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/banjotooie.jpg"},
  {n:"Harvest Moon 64",u:"https://jordnanblee.github.io/seraph/games/harvestmoon64/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/harvestmoon64.jpg"},
  {n:"Jet Force Gemini",u:"https://jordnanblee.github.io/seraph/games/jetforcegemini/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/jetforcegemini.jpg"},
  {n:"Mystical Ninja",u:"https://jordnanblee.github.io/seraph/games/mysticalninja/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/mysticalninja.jpg"},
  {n:"Turok Dinosaur Hunter",u:"https://jordnanblee.github.io/seraph/games/turokdinosaurhunter/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/turokdinosaurhunter.jpg"},
  {n:"Yoshi'S Story",u:"https://jordnanblee.github.io/seraph/games/yoshisstory/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/yoshisstory.jpg"},
  {n:"Kirby'S Dreamland 2",u:"https://jordnanblee.github.io/seraph/games/kirbysdreamland2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/kirbysdreamland2.jpg"},
  {n:"Link'S Awakening Dx",u:"https://jordnanblee.github.io/seraph/games/linksawakeningdx/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/linksawakeningdx.jpg"},
  {n:"Metroid II",u:"https://jordnanblee.github.io/seraph/games/metroidii/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/metroidii.jpg"},
  {n:"Super Mario Land 2",u:"https://jordnanblee.github.io/seraph/games/supermarioland2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/supermarioland2.jpg"},
  {n:"Wario Land II",u:"https://jordnanblee.github.io/seraph/games/wariolandii/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/wariolandii.jpg"},
  {n:"Castlevania Aria of Sorrow",u:"https://jordnanblee.github.io/seraph/games/castlevaniaariaofsorrow/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/castlevaniaariaofsorrow.jpg"},
  {n:"Final Fantasy Tactics Adv",u:"https://jordnanblee.github.io/seraph/games/finalfantasytacticsadvance/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/finalfantasytacticsadventure.jpg"},
  {n:"Drill Dozer",u:"https://jordnanblee.github.io/seraph/games/drilldozer/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/drilldozer.jpg"},
  {n:"Advance Wars Days of Ruin",u:"https://jordnanblee.github.io/seraph/games/advancewarsdayofruin/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/advancewarsdaysofruin.jpg"},
  {n:"Castlevania Dawn of Sorrow",u:"https://jordnanblee.github.io/seraph/games/castlevaniadawnofsorrow/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/castlevaniadawnofsorrow.jpg"},
  {n:"Order of Ecclesia",u:"https://jordnanblee.github.io/seraph/games/castlevaniaorderofecclesia/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/castlevaniaorderofecclesia.jpg"},
  {n:"Partners in Time",u:"https://jordnanblee.github.io/seraph/games/marioandluigipartnersintime/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/marioandluigipartnersintime.jpg"},
  {n:"Comix Zone",u:"https://jordnanblee.github.io/seraph/games/comixzone/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/comixzone.jpg"},
  {n:"Ecco the Dolphin",u:"https://jordnanblee.github.io/seraph/games/eccothedolphin/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/eccothedolphin.jpg"},
  {n:"Gunstar Heroes",u:"https://jordnanblee.github.io/seraph/games/gunstarheroes/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/gunstarheroes.jpg"},
  {n:"Phantasy Star IV",u:"https://jordnanblee.github.io/seraph/games/phantasystariv/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/phantasystariv.jpg"},
  {n:"Ranger X",u:"https://jordnanblee.github.io/seraph/games/rangerx/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/rangerx.jpg"},
  {n:"Ristar",u:"https://jordnanblee.github.io/seraph/games/ristar/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/ristar.jpg"},
  {n:"Shining Force",u:"https://jordnanblee.github.io/seraph/games/shiningforce/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/shiningforce.jpg"},
  {n:"Shinobi III",u:"https://jordnanblee.github.io/seraph/games/shinobiiii/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/shinobiiii.jpg"},
  {n:"Sonic the Hedgehog",u:"https://jordnanblee.github.io/seraph/games/sonicthehedgehog/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sonicthehedgehog.jpg"},
  {n:"Sonic the Hedgehog 2",u:"https://jordnanblee.github.io/seraph/games/sonicthehedgehog2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/sonicthehedgehog2.jpg"},
  {n:"Streets of Rage 2",u:"https://jordnanblee.github.io/seraph/games/streetsofrage2/index.html",c:"fighting",i:"🥊",t:"/seraph/images/thumbnails/streetsofrage2.jpg"},
  {n:"Vectorman",u:"https://jordnanblee.github.io/seraph/games/vectorman/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vectorman.jpg"},
  {n:"Vectorman 2",u:"https://jordnanblee.github.io/seraph/games/vectorman2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/vectorman2.jpg"},
  {n:"Illusion of Gaia",u:"https://jordnanblee.github.io/seraph/games/illusionofgaia/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/illusionofgaia.jpg"},
  {n:"Pokemon Yellow",u:"https://jordnanblee.github.io/seraph/games/pokemonyellow/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/pokemonyellow.jpg"},
  {n:"Abuda the Alien",u:"https://jordnanblee.github.io/seraph/games/abudathealien/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/abudathealien.jpg"},
  {n:"Battle Beavers",u:"https://jordnanblee.github.io/seraph/games/battlebeavers/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/battlebeavers.jpg"},
  {n:"Control Craft 2",u:"https://jordnanblee.github.io/seraph/games/controlcraft2/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/controlcraft2.jpg"},
  {n:"Age of War",u:"https://jordnanblee.github.io/seraph/games/ageofwar/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/ageofwar.jpg"},
  {n:"Age of War 2",u:"https://jordnanblee.github.io/seraph/games/ageofwar2/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/ageofwar2.jpg"},
  {n:"Amorphous",u:"https://jordnanblee.github.io/seraph/games/amorphous/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/amorphous.jpg"},
  {n:"Bubble Spinner",u:"https://jordnanblee.github.io/seraph/games/bubblespinner/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/bubblespinner.jpg"},
  {n:"Crush the Castle",u:"https://jordnanblee.github.io/seraph/games/crushthecastle/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/crushthecastle.jpg"},
  {n:"Crush the Castle 2",u:"https://jordnanblee.github.io/seraph/games/crushthecastle2/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/crushthecastle2.jpg"},
  {n:"Epic Battle Fantasy",u:"https://jordnanblee.github.io/seraph/games/epicbattlefantasy/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/epicbattlefantasy.jpg"},
  {n:"Epic Battle Fantasy 2",u:"https://jordnanblee.github.io/seraph/games/epicbattlefantasy2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/epicbattlefantasy2.jpg"},
  {n:"Epic Battle Fantasy 3",u:"https://jordnanblee.github.io/seraph/games/epicbattlefantasy3/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/epicbattlefantasy3.jpg"},
  {n:"Fancy Pants Adventure 3",u:"https://jordnanblee.github.io/seraph/games/fancypantsadventure3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/fancypantsadventure3.jpg"},
  {n:"Flood Runner 2",u:"https://jordnanblee.github.io/seraph/games/floodrunner2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/floodrunner2.jpg"},
  {n:"Flood Runner 3",u:"https://jordnanblee.github.io/seraph/games/floodrunner3/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/floodrunner3.jpg"},
  {n:"Dragon Boy 2",u:"https://jordnanblee.github.io/seraph/games/dragonboy2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/dragonboy2.jpg"},
  {n:"Neon Rider",u:"https://jordnanblee.github.io/seraph/games/neonrider/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/neonrider.jpg"},
  {n:"Pandemic 2",u:"https://jordnanblee.github.io/seraph/games/pandemic2/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/pandemic2.jpg"},
  {n:"Stick War",u:"https://jordnanblee.github.io/seraph/games/stickwar/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/stickwar.jpg"},
  {n:"Stick War 2",u:"https://jordnanblee.github.io/seraph/games/stickwar2/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/stickwar2.jpg"},
  {n:"Ultimate Flash Sonic",u:"https://jordnanblee.github.io/seraph/games/ultimateflashsonic/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/ultimateflashsonic.jpg"},
  {n:"Zombocalypse",u:"https://jordnanblee.github.io/seraph/games/zombocalypse/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/zombocalpyse.jpg"},
  {n:"Zombotron",u:"https://jordnanblee.github.io/seraph/games/zombotron/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/zombotron.jpg"},
  {n:"Zombotron 2",u:"https://jordnanblee.github.io/seraph/games/zombotron2/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/zombotron2.jpg"},
  {n:"Backrooms 2D",u:"https://jordnanblee.github.io/seraph/games/backrooms2d/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/backrooms2d.jpg"},
  {n:"Basket Random",u:"https://jordnanblee.github.io/seraph/games/basketrandom/index.html",c:"sports",i:"🏆",t:"/seraph/images/thumbnails/basketrandom.jpg"},
  {n:"Csgo Clicker",u:"https://jordnanblee.github.io/seraph/games/csgoclicker/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/csgoclicker.jpg"},
  {n:"Doom",u:"https://jordnanblee.github.io/seraph/games/doom/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/doom.jpg"},
  {n:"Funny Shooter 2",u:"https://jordnanblee.github.io/seraph/games/funnyshooter2/index.html",c:"action",i:"🔫",t:"/seraph/images/thumbnails/funnyshooter2.jpg"},
  {n:"Gun Fest",u:"https://jordnanblee.github.io/seraph/games/gunfest/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/gunfest.jpg"},
  {n:"Infinite Craft",u:"https://jordnanblee.github.io/seraph/games/infinitecraft/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/infinitecraft.jpg"},
  {n:"Lows Adventures 2",u:"https://jordnanblee.github.io/seraph/games/lowsadventures2/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/lowsadventures2.jpg"},
  {n:"Pako Highway",u:"https://jordnanblee.github.io/seraph/games/pakohighway/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/pakohighway.jpg"},
  {n:"Recoil",u:"https://jordnanblee.github.io/seraph/games/recoil/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/recoil.jpg"},
  {n:"Run 3 Plus",u:"https://jordnanblee.github.io/seraph/games/run3plus/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/run3plus.jpg"},
  {n:"Slope City",u:"https://jordnanblee.github.io/seraph/games/slopecity/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/slopecity.jpg"},
  {n:"State IO",u:"https://jordnanblee.github.io/seraph/games/stateio/index.html",c:"strategy",i:"♟️",t:"/seraph/images/thumbnails/stateio.jpg"},
  {n:"Sudoku",u:"https://jordnanblee.github.io/seraph/games/sudoku/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/sudoku.jpg"},
  {n:"Superhero Drop",u:"https://jordnanblee.github.io/seraph/games/superherodrop/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/superherodrop.jpg"},
  {n:"Balloon Run",u:"https://jordnanblee.github.io/seraph/games/balloonrun/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/balloonrun.jpg"},
  {n:"Crazy Tunnel 3D",u:"https://jordnanblee.github.io/seraph/games/crazytunnel3d/index.html",c:"racing",i:"🏎️",t:"/seraph/images/thumbnails/crazytunnel3d.jpg"},
  {n:"Minecraft [v1.8]",u:"https://jordnanblee.github.io/seraph/games/eagler1.8/index.html",c:"adventure",i:"🗺️",t:"/seraph/images/thumbnails/mc1.8.jpg"},
  {n:"Geometry Dash Sky",u:"https://jordnanblee.github.io/seraph/games/geometrydashsky/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/geometrydashsky.jpg"},
  {n:"Wubzzys Adventure",u:"https://jordnanblee.github.io/seraph/games/wubzzysamazingadventure/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/wubzzysamazingadventure.jpg"},
  {n:"Gold Digger FRVR",u:"https://jordnanblee.github.io/seraph/games/golddiggerfrvr/index.html",c:"simulation",i:"🏗️",t:"/seraph/images/thumbnails/golddiggerfrvr.jpg"},
  {n:"Hexgl",u:"https://jordnanblee.github.io/seraph/games/hexgl/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/hexgl.jpg"},
  {n:"House of Hazards",u:"https://jordnanblee.github.io/seraph/games/houseofhazards/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/houseofhazards.jpg"},
  {n:"Xx142-B2.exe",u:"https://jordnanblee.github.io/seraph/games/xx142-b2.exe/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/xx142b2.exe.jpg"},
  {n:"Change Type",u:"https://jordnanblee.github.io/seraph/games/changetype/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/changetype.jpg"},
  {n:"Oodlegobs",u:"https://jordnanblee.github.io/seraph/games/oodlegobs/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/oodlegobs.jpg"},
  {n:"Super Treadmill",u:"https://jordnanblee.github.io/seraph/games/supertreadmill/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/supertreadmill.jpg"},
  {n:"Test Subject Arena",u:"https://jordnanblee.github.io/seraph/games/testsubjectarena/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/testsubjectarena.jpg"},
  {n:"Test Subject Complete",u:"https://jordnanblee.github.io/seraph/games/testsubjectcomplete/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/testsubjectcomplete.jpg"},
  {n:"Three Line",u:"https://jordnanblee.github.io/seraph/games/3line/index.html",c:"puzzle",i:"🧩",t:"/seraph/images/thumbnails/threeline.jpg"},
  {n:"Bike Champ",u:"https://jordnanblee.github.io/seraph/games/bikechamp/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/bikechamp.jpg"},
  {n:"Bike Champ 2",u:"https://jordnanblee.github.io/seraph/games/bikechamp2/index.html",c:"arcade",i:"🕹️",t:"/seraph/images/thumbnails/bikechamp2.jpg"},];

// 
// STATE
// 
const CATS = [
  {id:"all",label:"All Games"},
  {id:"arcade",label:"Arcade"},
  {id:"action",label:"Action"},
  {id:"puzzle",label:"Puzzle"},
  {id:"adventure",label:"Adventure"},
  {id:"racing",label:"Racing"},
  {id:"sports",label:"Sports"},
  {id:"strategy",label:"Strategy"},
  {id:"simulation",label:"Simulation"},
  {id:"fighting",label:"Fighting"},
];

const THUMB_BASE = "https://jordnanblee.github.io";

let state = {
  cat: "all",
  q: "",
  view: "grid",
  tab: "all",
  favs: safeParseFavs(),
};

function safeParseFavs() {
  try {
    return JSON.parse(localStorage.getItem("jbg_favs") || "[]");
  } catch (e) {
    return [];
  }
}

function catLabel(id) {
  const found = CATS.find(c => c.id === id);
  return found ? found.label : id;
}

// 
// URL SEARCH SYNC (?q=)
// Keeps the address bar in sync with the search box so links like
// https://jordnanblee.github.io/?q=slope are shareable and pre-filter
// the catalog on load — matches the SearchAction declared in the
// page's schema.org JSON-LD.
// 
function readQueryFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get("q") || "";
  } catch (e) {
    return "";
  }
}

function writeQueryToUrl(q) {
  try {
    const url = new URL(window.location.href);
    if (q && q.trim()) {
      url.searchParams.set("q", q);
    } else {
      url.searchParams.delete("q");
    }
    history.replaceState(null, "", url.toString());
  } catch (e) {
    // Ignore in environments without History API support
  }
}

function setSearchQuery(q) {
  state.q = q;
  writeQueryToUrl(q);
  renderGames();
}

// 
// INIT
// 
document.addEventListener("DOMContentLoaded", () => {
  buildFilters();
  buildMobileCats();

  const searchInput = document.getElementById("searchInput");
  const initialQ = readQueryFromUrl();
  if (initialQ) {
    state.q = initialQ;
    searchInput.value = initialQ;
  }

  renderGames();
  updateFavCount();
  document.getElementById("totalCount").textContent = GAMES.length + "+";
  document.getElementById("randomBtn").addEventListener("click", openRandom);
  searchInput.addEventListener("input", e => setSearchQuery(e.target.value));
  document.getElementById("searchClear").addEventListener("click", () => {
    searchInput.value = "";
    setSearchQuery("");
    searchInput.focus();
  });

  // Keep state in sync if the user navigates back/forward.
  window.addEventListener("popstate", () => {
    const q = readQueryFromUrl();
    state.q = q;
    searchInput.value = q;
    renderGames();
  });

  if (initialQ) {
    document.getElementById("games").scrollIntoView({behavior:"smooth"});
  }

  // Panic keyboard shortcut (desktop only)
  document.addEventListener("keydown", e => {
    if (window.innerWidth > 768 && e.key === "`") openPanic();
  });
});

// 
// FILTER BAR
// 
function buildFilters() {
  const bar = document.getElementById("filterBar");
  bar.innerHTML = "";
  CATS.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat.id === state.cat ? " active" : "");
    btn.textContent = cat.label;
    btn.dataset.cat = cat.id;
    btn.addEventListener("click", () => {
      state.cat = cat.id;
      document.querySelectorAll("#filterBar .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      syncMobileCatActive();
      renderGames();
    });
    bar.appendChild(btn);
  });
}

function buildMobileCats() {
  const el = document.getElementById("mobileCats");
  el.innerHTML = "";
  CATS.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "mobile-cat-btn" + (cat.id === state.cat ? " active" : "");
    btn.textContent = cat.label;
    btn.dataset.cat = cat.id;
    btn.addEventListener("click", () => {
      state.cat = cat.id;
      // Keep the tab bar (All / Favorites) in sync instead of just
      // silently mutating state — this was the original bug where the
      // "Favorites" tab could stay visually active after switching category.
      switchTab("all");
      document.querySelectorAll("#filterBar .filter-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.cat === cat.id);
      });
      syncMobileCatActive();
      toggleMobileMenu();
      renderGames();
    });
    el.appendChild(btn);
  });
}

function syncMobileCatActive() {
  document.querySelectorAll("#mobileCats .mobile-cat-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.cat === state.cat);
  });
}

// 
// RENDER
// 
function renderGames() {
  const grid = document.getElementById("gamesGrid");
  let list = state.tab === "favorites"
    ? GAMES.filter(g => state.favs.includes(g.n))
    : GAMES;

  if (state.cat !== "all") list = list.filter(g => g.c === state.cat);
  if (state.q.trim()) {
    const q = state.q.toLowerCase();
    list = list.filter(g => g.n.toLowerCase().includes(q) || g.c.includes(q));
  }

  const ri = document.getElementById("resultsInfo");
  ri.textContent = `${list.length} game${list.length !== 1 ? "s" : ""} found`;

  if (!list.length) {
    grid.innerHTML = `<div class="empty">🎮<p>${state.tab === "favorites" ? "No favourites yet — click ❤️ on any game to save it." : "No games match your search."}</p></div>`;
    return;
  }

  if (state.view === "list") {
    grid.className = "games-grid list-view";
  } else {
    grid.className = "games-grid";
  }

  grid.innerHTML = list.map(g => buildCard(g)).join("");
  grid.querySelectorAll(".game-card").forEach((card, i) => {
    const g = list[i];
    card.addEventListener("click", e => {
      if (!e.target.closest(".card-btn")) window.open(g.u, "_blank", "noopener");
    });
    card.querySelector(".fav-btn").addEventListener("click", e => {
      e.stopPropagation();
      toggleFav(g.n, e.currentTarget);
    });
    const img = card.querySelector(".game-thumb");
    if (img) {
      img.addEventListener("error", () => {
        const placeholder = document.createElement("div");
        placeholder.className = "game-thumb-placeholder";
        placeholder.textContent = g.i;
        img.replaceWith(placeholder);
      }, { once: true });
    }
  });
}

function buildCard(g) {
  const isFav = state.favs.includes(g.n);
  const thumbUrl = g.t ? THUMB_BASE + g.t : "";
  const thumbHtml = thumbUrl
    ? `<img class="game-thumb" src="${thumbUrl}" alt="${escapeHtml(g.n)}" loading="lazy">`
    : `<div class="game-thumb-placeholder">${g.i}</div>`;
  return `<div class="game-card" role="listitem" tabindex="0" aria-label="Play ${escapeHtml(g.n)}">
    ${thumbHtml}
    <div class="game-body">
      <div class="game-title">${escapeHtml(g.n)}</div>
      <div class="game-cat">${escapeHtml(catLabel(g.c))}</div>
    </div>
    <div class="card-actions">
      <button class="card-btn fav-btn${isFav ? " active" : ""}" title="${isFav ? "Remove from favorites" : "Add to favorites"}" aria-label="${isFav ? "Remove from favorites" : "Add to favorites"}">${isFav ? "❤️" : "🤍"}</button>
    </div>
  </div>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 
// FAVORITES
// 
function toggleFav(name, btn) {
  const idx = state.favs.indexOf(name);
  if (idx > -1) {
    state.favs.splice(idx, 1);
    btn.classList.remove("active");
    btn.textContent = "🤍";
    btn.title = "Add to favorites";
    btn.setAttribute("aria-label", "Add to favorites");
  } else {
    state.favs.push(name);
    btn.classList.add("active");
    btn.textContent = "❤️";
    btn.title = "Remove from favorites";
    btn.setAttribute("aria-label", "Remove from favorites");
  }
  localStorage.setItem("jbg_favs", JSON.stringify(state.favs));
  updateFavCount();
  if (state.tab === "favorites") renderGames();
}

function updateFavCount() {
  document.getElementById("favCount").textContent = state.favs.length;
}

// 
// TABS
// 
function switchTab(tab) {
  state.tab = tab;
  document.getElementById("tabAll").classList.toggle("active", tab === "all");
  document.getElementById("tabFav").classList.toggle("active", tab === "favorites");
  renderGames();
}

// 
// VIEW
// 
function setView(v) {
  state.view = v;
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");
  gridBtn.classList.toggle("active", v === "grid");
  listBtn.classList.toggle("active", v === "list");
  gridBtn.setAttribute("aria-pressed", v === "grid");
  listBtn.setAttribute("aria-pressed", v === "list");
  renderGames();
}

// 
// MOBILE MENU
// 
function toggleMobileMenu() {
  const m = document.getElementById("mobileMenu");
  const btn = document.getElementById("hamburgerBtn");
  m.classList.toggle("open");
  btn.setAttribute("aria-expanded", m.classList.contains("open"));
  document.body.style.overflow = m.classList.contains("open") ? "hidden" : "";
}

// 
// PANIC
// 
function openPanic() {
  if (window.innerWidth <= 768) return;
  document.getElementById("panicOverlay").classList.add("show");
}
function closePanic() {
  document.getElementById("panicOverlay").classList.remove("show");
}

// 
// RANDOM GAME
// 
function openRandom() {
  const g = GAMES[Math.floor(Math.random() * GAMES.length)];
  window.open(g.u, "_blank", "noopener");
}

// 
// FOOTER CATEGORY LINKS
// 
function filterByCategory(cat) {
  state.cat = cat;
  buildFilters();
  syncMobileCatActive();
  document.getElementById("searchInput").value = "";
  state.q = "";
  writeQueryToUrl("");
  switchTab("all");
  document.getElementById("games").scrollIntoView({behavior:"smooth"});
  return false;
}

// 
// FAQ ACCORDION
// 
function toggleFaq(el) {
  const item = el.closest(".faq-item");
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach(i => {
    i.classList.remove("open");
    i.querySelector(".faq-q").setAttribute("aria-expanded","false");
  });
  if (!isOpen) {
    item.classList.add("open");
    el.setAttribute("aria-expanded","true");
  }
}

// Keyboard FAQ support
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.classList.contains("faq-q")) toggleFaq(e.target);
});

// Scroll to games
function scrollToGames() {
  document.getElementById("games").scrollIntoView({behavior:"smooth"});
}
document.getElementById("current-year").textContent = new Date().getFullYear();
