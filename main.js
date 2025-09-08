    // Game data with categories and emojis
        const gameData = [
            { name: "1-on-1 Soccer", url: "https://especially43.github.io/game2/1-on-1-soccer/", category: "sports", icon: "⚽" },
            { name: "10 Mins Till Dawn", url: "https://especially43.github.io/game2/10-mins-till-dawn/", category: "action", icon: "🌅" },
            { name: "100 Player Pong", url: "https://especially43.github.io/game2/100-player-pong/", category: "arcade", icon: "🏓" },
            { name: "12 Mini Battles", url: "https://especially43.github.io/game2/12-mini-battles/", category: "arcade", icon: "⚔️" },
            { name: "1v1 LOL", url: "https://especially43.github.io/game2/1v1-lol/", category: "action", icon: "🎯" },
            { name: "1v1 Space", url: "https://especially43.github.io/game2/1v1-space/", category: "action", icon: "🚀" },
            { name: "2020 Game", url: "https://especially43.github.io/game2/2020-game/", category: "puzzle", icon: "🎮" },
            { name: "2048", url: "https://especially43.github.io/game2/2048/", category: "puzzle", icon: "🔢" },
            { name: "2048 Multitask", url: "https://especially43.github.io/game2/2048-multitask/", category: "puzzle", icon: "🧩" },
            { name: "3D Missile", url: "https://especially43.github.io/game2/3d-missile/", category: "action", icon: "🚀" },
            { name: "5 Mins to Kill Yourself", url: "https://especially43.github.io/game2/5-mins-to-kill-yourself/", category: "puzzle", icon: "💀" },
            { name: "60 Second Burger Run", url: "https://especially43.github.io/game2/60-second-burger-run/", category: "arcade", icon: "🍔" },
            { name: "8Ball Billiards Classic", url: "https://especially43.github.io/game2/8ball-billards-classic/", category: "sports", icon: "🎱" },
            { name: "99 Balls Evo", url: "https://especially43.github.io/game2/99-balls-evo/", category: "arcade", icon: "⚾" },
            { name: "Super Mario Bros", url: "https://especially43.github.io/game2/FullScreenMario/Source/", category: "adventure", icon: "🍄" },
            { name: "A Dark Room", url: "https://especially43.github.io/game2/a-dark-room/", category: "adventure", icon: "🕯️" },
            { name: "Achievement Unlocked", url: "https://especially43.github.io/game2/achievement-unlocked/", category: "puzzle", icon: "🏆" },
            { name: "Achievement Unlocked 2", url: "https://especially43.github.io/game2/achievement-unlocked-2/", category: "puzzle", icon: "🏅" },
            { name: "Achievement Unlocked 3", url: "https://especially43.github.io/game2/achievement-unlocked-3/", category: "puzzle", icon: "🎖️" },
            { name: "Adam and Eve", url: "https://especially43.github.io/game2/adam-and-eve/", category: "adventure", icon: "🍎" },
            { name: "Adam and Eve 2", url: "https://especially43.github.io/game2/adam-and-eve-2/", category: "adventure", icon: "🌳" },
            { name: "Adam and Eve 3", url: "https://especially43.github.io/game2/adam-and-eve-3/", category: "adventure", icon: "🦕" },
            { name: "ADOFAI", url: "https://especially43.github.io/game2/adofai/", category: "arcade", icon: "🎵" },
            { name: "Adventure Capitalist", url: "https://especially43.github.io/game2/adventure-capitalist/", category: "strategy", icon: "💰" },
            { name: "Agario Minigame", url: "https://especially43.github.io/game2/agario-minigame/", category: "arcade", icon: "⚪" },
            { name: "Age of War", url: "https://especially43.github.io/game2/age-of-war/", category: "strategy", icon: "⚔️" },
            { name: "Age of War 2", url: "https://especially43.github.io/game2/age-of-war-2/", category: "strategy", icon: "🛡️" },
            { name: "Alien Invaders IO", url: "https://especially43.github.io/game2/alien-invaders-io/", category: "action", icon: "👽" },
            { name: "Among Us", url: "https://especially43.github.io/game2/among-us/", category: "strategy", icon: "🔴" },
            { name: "Among Us 2", url: "https://especially43.github.io/game2/among-us-2/", category: "strategy", icon: "🎭" },
            { name: "Angry Birds", url: "https://especially43.github.io/game2/angry-birds/", category: "puzzle", icon: "🐦" },
            { name: "Apple Shooter", url: "https://especially43.github.io/game2/apple-shooter/", category: "action", icon: "🏹" },
            { name: "Arras IO", url: "https://especially43.github.io/game2/arras-io/", category: "action", icon: "🔫" },
            { name: "Asteroids", url: "https://especially43.github.io/game2/asteroids/", category: "arcade", icon: "🪨" },
            { name: "Awesome Tanks", url: "https://especially43.github.io/game2/awesome-tanks/", category: "action", icon: "🚗" },
            { name: "Awesome Tanks 2", url: "https://especially43.github.io/game2/awesome-tanks-2/", category: "action", icon: "🛡️" },
            { name: "Backrooms", url: "https://especially43.github.io/game2/backrooms/", category: "adventure", icon: "🚪" },
            { name: "Bad Ice Cream 2", url: "https://especially43.github.io/game2/bad-ice-cream-2/", category: "arcade", icon: "🍦" },
            { name: "Bad Ice Cream 3", url: "https://especially43.github.io/game2/bad-ice-cream-3/", category: "arcade", icon: "🧊" },
            { name: "Basketball Legends 2020", url: "https://especially43.github.io/game2/basketball-legends-2020/", category: "sports", icon: "🏀" },
            { name: "Basketball Stars", url: "https://especially43.github.io/game2/basketball-stars/", category: "sports", icon: "⭐" },
            { name: "Binding of Isaac", url: "https://especially43.github.io/game2/binding-of-isaac/", category: "adventure", icon: "😭" },
            { name: "BitLife", url: "https://especially43.github.io/game2/bitlife/", category: "strategy", icon: "👶" },
            { name: "Bloons TD", url: "https://especially43.github.io/game2/bloons-td/", category: "strategy", icon: "🎈" },
            { name: "Bloons TD 2", url: "https://especially43.github.io/game2/bloons-td-2/", category: "strategy", icon: "🐵" },
            { name: "Bloons TD 3", url: "https://especially43.github.io/game2/bloons-td-3/", category: "strategy", icon: "🎯" },
            { name: "Bloons TD 4", url: "https://especially43.github.io/game2/bloons-td-4/", category: "strategy", icon: "💥" },
            { name: "Bloons TD 6", url: "https://especially43.github.io/game2/bloons-td-6/", category: "strategy", icon: "🏰" },
            { name: "Boxel Rebound", url: "https://especially43.github.io/game2/boxel-rebound/", category: "puzzle", icon: "📦" },
            { name: "Boxing Random", url: "https://especially43.github.io/game2/boxing-random/", category: "sports", icon: "🥊" },
            { name: "Breakout", url: "https://especially43.github.io/game2/breakout/", category: "arcade", icon: "🧱" },
            { name: "Burrito Bison", url: "https://especially43.github.io/game2/burrito-bison/", category: "arcade", icon: "🌯" },
            { name: "Car Simulator", url: "https://especially43.github.io/game2/car-simulator/", category: "racing", icon: "🏎️" },
            { name: "Celeste", url: "https://especially43.github.io/game2/celeste/", category: "adventure", icon: "⛰️" },
            { name: "Champion Island", url: "https://especially43.github.io/game2/champion-island/", category: "adventure", icon: "🏝️" },
            { name: "Chess", url: "https://especially43.github.io/game2/chess/", category: "strategy", icon: "♟️" },
            { name: "Chrome Dino", url: "https://especially43.github.io/game2/chrome-dino/", category: "arcade", icon: "🦕" },
            { name: "Clicker Heroes", url: "https://especially43.github.io/game2/clicker-heroes/", category: "strategy", icon: "⚔️" },
            { name: "Cluster Rush", url: "https://especially43.github.io/game2/cluster-rush/", category: "racing", icon: "🚛" },
            { name: "Cookie Clicker", url: "https://especially43.github.io/game2/cookie-clicker/", category: "strategy", icon: "🍪" },
            { name: "Core Ball", url: "https://especially43.github.io/game2/core-ball/", category: "arcade", icon: "⚽" },
            { name: "Crossy Road", url: "https://especially43.github.io/game2/crossy-road/", category: "arcade", icon: "🐸" },
            { name: "Cubefield", url: "https://especially43.github.io/game2/cubefield/", category: "arcade", icon: "🔳" },
            { name: "Cut the Rope", url: "https://especially43.github.io/game2/cut-the-rope/", category: "puzzle", icon: "🍭" },
            { name: "Cut the Rope 2", url: "https://especially43.github.io/game2/cut-the-rope-2/", category: "puzzle", icon: "✂️" },
            { name: "Doodle Jump", url: "https://especially43.github.io/game2/doodle-jump/", category: "arcade", icon: "🤽" },
            { name: "Drive Mad", url: "https://especially43.github.io/game2/drive-mad/", category: "racing", icon: "🚗" },
            { name: "Duck Life", url: "https://especially43.github.io/game2/duck-life/", category: "adventure", icon: "🦆" },
            { name: "Duck Life 2", url: "https://especially43.github.io/game2/duck-life-2/", category: "adventure", icon: "🏊" },
            { name: "Duck Life 3", url: "https://especially43.github.io/game2/duck-life-3/", category: "adventure", icon: "🏃" },
            { name: "Eggy Car", url: "https://especially43.github.io/game2/eggy-car/", category: "racing", icon: "🥚" },
            { name: "Elastic Man", url: "https://especially43.github.io/game2/elastic-man/", category: "arcade", icon: "🤪" },
            { name: "Fancy Pants Adventures", url: "https://especially43.github.io/game2/fancy-pants-adventures/", category: "adventure", icon: "👖" },
            { name: "FNAF", url: "https://especially43.github.io/game2/fnaf/", category: "adventure", icon: "🐻" },
            { name: "FNAF 2", url: "https://especially43.github.io/game2/fnaf-2/", category: "adventure", icon: "🤖" },
            { name: "FNAF 3", url: "https://especially43.github.io/game2/fnaf-3/", category: "adventure", icon: "🔥" },
            { name: "FNAF 4", url: "https://especially43.github.io/game2/fnaf-4/", category: "adventure", icon: "😱" },
            { name: "Flappy Bird", url: "https://especially43.github.io/game2/flappy-bird/", category: "arcade", icon: "🐦" },
            { name: "Friday Night Funkin", url: "https://especially43.github.io/game2/friday-night-funkin/", category: "arcade", icon: "🎤" },
            { name: "Fruit Ninja", url: "https://especially43.github.io/game2/fruit-ninja/", category: "arcade", icon: "🥷" },
            { name: "Geometry Dash", url: "https://especially43.github.io/game2/geometry-dash/", category: "arcade", icon: "🔺" },
            { name: "Getaway Shootout", url: "https://especially43.github.io/game2/getaway-shootout/", category: "action", icon: "🏃" },
            { name: "Google Snake", url: "https://especially43.github.io/game2/google-snake/", category: "arcade", icon: "🐍" },
            { name: "Happy Wheels", url: "https://especially43.github.io/game2/happy-wheels/", category: "racing", icon: "🦽" },
            { name: "Helix Jump", url: "https://especially43.github.io/game2/helix-jump/", category: "arcade", icon: "🌀" },
            { name: "Hextris", url: "https://especially43.github.io/game2/hextris/", category: "puzzle", icon: "⬣" },
            { name: "House of Hazards", url: "https://especially43.github.io/game2/house-of-hazards/", category: "adventure", icon: "🏠" },
            { name: "Idle Breakout", url: "https://especially43.github.io/game2/idle-breakout/", category: "strategy", icon: "💎" },
{ name: "Jacksmith", url: "https://especially43.github.io/game2/jacksmith/", category: "strategy", icon: "⚒️" },
{ name: "Jelly Truck", url: "https://especially43.github.io/game2/jelly-truck/", category: "racing", icon: "🚚" },
{ name: "Jetpack Joyride", url: "https://especially43.github.io/game2/jetpack-joyride/", category: "arcade", icon: "🎒" },
{ name: "Just Fall LOL", url: "https://especially43.github.io/game2/just-fall-lol/", category: "arcade", icon: "🐧" },
{ name: "Just One Boss", url: "https://especially43.github.io/game2/just-one-boss/", category: "puzzle", icon: "👑" },
{ name: "Kart Fight IO", url: "https://especially43.github.io/game2/kart-fight-io/", category: "racing", icon: "🏎️" },
{ name: "Kitchen Gun Game", url: "https://especially43.github.io/game2/kitchen-gun-game/", category: "action", icon: "🔫" },
{ name: "Kitten Cannon", url: "https://especially43.github.io/game2/kitten-cannon/", category: "arcade", icon: "🐱" },
{ name: "Klocki", url: "https://especially43.github.io/game2/klocki/", category: "puzzle", icon: "🧩" },
{ name: "Konnekt", url: "https://especially43.github.io/game2/konnekt/", category: "puzzle", icon: "🔗" },

{ name: "Learn To Fly 2", url: "https://especially43.github.io/game2/learn-to-fly-2/", category: "arcade", icon: "🐧" },
{ name: "Learn To Fly 3", url: "https://especially43.github.io/game2/learn-to-fly-3/", category: "arcade", icon: "🐧" },
{ name: "Learn To Fly Idle", url: "https://especially43.github.io/game2/learn-to-fly-idle/", category: "strategy", icon: "📈" },
{ name: "Learn To Fly", url: "https://especially43.github.io/game2/learn-to-fly/", category: "arcade", icon: "✈️" },
{ name: "Linquest", url: "https://especially43.github.io/game2/linquest/", category: "adventure", icon: "🗝️" },
{ name: "Little Alchemy", url: "https://especially43.github.io/game2/little-alchemy/", category: "puzzle", icon: "⚗️" },
{ name: "Ludo Online", url: "https://especially43.github.io/game2/ludo-online/", category: "strategy", icon: "🎲" },
{ name: "Mad Gunz", url: "https://especially43.github.io/game2/mad-gunz/", category: "action", icon: "🔫" },
{ name: "Mc Classic", url: "https://especially43.github.io/game2/mc-classic/", category: "adventure", icon: "⛏️" },
{ name: "Meme 2048", url: "https://especially43.github.io/game2/meme-2048/", category: "puzzle", icon: "🔢" },
{ name: "Microsoft Flight Simulator", url: "https://especially43.github.io/game2/microsoft-flight-simulator/", category: "simulation", icon: "🛫" },
{ name: "Minesweeper", url: "https://especially43.github.io/game2/minesweeper/", category: "puzzle", icon: "💣" },
{ name: "Mini Mall Millionaire", url: "https://especially43.github.io/game2/mini-mall-millionaire/", category: "strategy", icon: "🏬" },
{ name: "Mini Stilts", url: "https://especially43.github.io/game2/mini-stilts/", category: "arcade", icon: "🤹" },
{ name: "Money Movers 3", url: "https://especially43.github.io/game2/money-movers-3/", category: "puzzle", icon: "💰" },
{ name: "Monkey Mart", url: "https://especially43.github.io/game2/monkey-mart/", category: "strategy", icon: "🐒" },
{ name: "Moto X3M 2", url: "https://especially43.github.io/game2/moto-x3m-2/", category: "racing", icon: "🏍️" },
{ name: "Moto X3M 3", url: "https://especially43.github.io/game2/moto-x3m-3/", category: "racing", icon: "🏍️" },
{ name: "Moto X3M Pool Party", url: "https://especially43.github.io/game2/moto-x3m-pool-party/", category: "racing", icon: "🏖️" },
{ name: "Moto X3M Spooky Land", url: "https://especially43.github.io/game2/moto-x3m-spooky-land/", category: "racing", icon: "🎃" },
{ name: "Moto X3M Winter", url: "https://especially43.github.io/game2/moto-x3m-winter/", category: "racing", icon: "❄️" },
{ name: "Moto X3M", url: "https://especially43.github.io/game2/moto-x3m/", category: "racing", icon: "🏍️" },
{ name: "N Gon", url: "https://especially43.github.io/game2/n-gon/", category: "arcade", icon: "🔷" },
{ name: "Ninja Vs Evil Corp", url: "https://especially43.github.io/game2/ninja-vs-evil-corp/", category: "action", icon: "🥷" },
{ name: "One Screen Run 2", url: "https://especially43.github.io/game2/one-screen-run-2/", category: "arcade", icon: "🏃" },
{ name: "One Screen Run", url: "https://especially43.github.io/game2/one-screen-run/", category: "arcade", icon: "🏃" },
{ name: "Osu", url: "https://especially43.github.io/game2/osu/", category: "arcade", icon: "🥁" },
{ name: "Packabunchas", url: "https://especially43.github.io/game2/packabunchas/", category: "puzzle", icon: "📦" },
{ name: "Pacman FPS", url: "https://especially43.github.io/game2/pacman-fps/", category: "arcade", icon: "🔫" },
{ name: "Pacman", url: "https://especially43.github.io/game2/pacman/", category: "arcade", icon: "🟡" },
{ name: "Papa Louie 2", url: "https://especially43.github.io/game2/papa-louie-2/", category: "adventure", icon: "🍔" },
{ name: "Papa Louie", url: "https://especially43.github.io/game2/papa-louie/", category: "adventure", icon: "🍕" },
{ name: "Papas Burgeria", url: "https://especially43.github.io/game2/papas-burgeria/", category: "strategy", icon: "🍔" },
{ name: "Papas Cheeseria", url: "https://especially43.github.io/game2/papas-cheeseria/", category: "strategy", icon: "🧀" },
{ name: "Papas Cupcakeria", url: "https://especially43.github.io/game2/papas-cupcakeria/", category: "strategy", icon: "🧁" },
{ name: "Papas Donuteria", url: "https://especially43.github.io/game2/papas-donuteria/", category: "strategy", icon: "🍩" },
{ name: "Papas Freezeria", url: "https://especially43.github.io/game2/papas-freezeria/", category: "strategy", icon: "🍦" },
{ name: "Papas Hot Doggeria", url: "https://especially43.github.io/game2/papas-hot-doggeria/", category: "strategy", icon: "🌭" },
{ name: "Papas Pancakeria", url: "https://especially43.github.io/game2/papas-pancakeria/", category: "strategy", icon: "🥞" },
{ name: "Papas Pastaria", url: "https://especially43.github.io/game2/papas-pastaria/", category: "strategy", icon: "🍝" },
{ name: "Papas Pizzeria", url: "https://especially43.github.io/game2/papas-pizzeria/", category: "strategy", icon: "🍕" },
{ name: "Papas Scooperia", url: "https://especially43.github.io/game2/papas-scooperia/", category: "strategy", icon: "🍨" },
{ name: "Papas Sushiria", url: "https://especially43.github.io/game2/papas-sushiria/", category: "strategy", icon: "🍣" },
{ name: "Papas Taco Mia", url: "https://especially43.github.io/game2/papas-taco-mia/", category: "strategy", icon: "🌮" },
{ name: "Papas Wingeria", url: "https://especially43.github.io/game2/papas-wingeria/", category: "strategy", icon: "🍗" },
{ name: "Paper IO 2", url: "https://especially43.github.io/game2/paper-io-2/", category: "arcade", icon: "📄" },
{ name: "Particle Clicker", url: "https://especially43.github.io/game2/particle-clicker/", category: "strategy", icon: "⚛️" },
{ name: "Pizza", url: "https://especially43.github.io/game2/pizza/", category: "strategy", icon: "🍕" },
{ name: "Pizzeria Simulator", url: "https://especially43.github.io/game2/pizzeria-simulator/", category: "strategy", icon: "🏪" },
{ name: "Portal Flash", url: "https://especially43.github.io/game2/portal-flash/", category: "puzzle", icon: "🌀" },
{ name: "Protektor", url: "https://especially43.github.io/game2/protektor/", category: "strategy", icon: "🛡️" },
{ name: "Push The Square", url: "https://especially43.github.io/game2/push-the-square/", category: "puzzle", icon: "⬜" },
{ name: "Push Your Luck", url: "https://especially43.github.io/game2/push-your-luck/", category: "arcade", icon: "🎲" },
{ name: "Pushback", url: "https://especially43.github.io/game2/pushback/", category: "action", icon: "⚔️" },
{ name: "Pvz 2", url: "https://especially43.github.io/game2/pvz-2/", category: "strategy", icon: "🧟" },
{ name: "Q1k3", url: "https://especially43.github.io/game2/q1k3/", category: "action", icon: "🔫" },
{ name: "Qwop", url: "https://especially43.github.io/game2/qwop/", category: "sports", icon: "🏃" },
{ name: "Racer", url: "https://especially43.github.io/game2/racer/", category: "racing", icon: "🏎️" },
{ name: "Radius Raid", url: "https://especially43.github.io/game2/radius-raid/", category: "arcade", icon: "🔴" },
{ name: "Raft Wars", url: "https://especially43.github.io/game2/raft-wars/", category: "arcade", icon: "🚤" },
{ name: "Retro Bowl", url: "https://especially43.github.io/game2/retro-bowl/", category: "sports", icon: "🏈" },
{ name: "Retro Bowl Main", url: "https://especially43.github.io/game2/retrobowl/retro-bowl-main/", category: "sports", icon: "🏈" },
{ name: "Retrohaunt", url: "https://especially43.github.io/game2/retrohaunt/", category: "adventure", icon: "👻" },
{ name: "Rise Of The Neon Square", url: "https://especially43.github.io/game2/rise-of-the-neon-square/", category: "arcade", icon: "🟦" },

{ name: "Ritz", url: "https://especially43.github.io/game2/ritz/", category: "puzzle", icon: "🧩" },
{ name: "Roadblocks", url: "https://especially43.github.io/game2/roadblocks/", category: "puzzle", icon: "🚧" },
{ name: "Rocking Sky Trip", url: "https://especially43.github.io/game2/rocking-sky-trip/", category: "arcade", icon: "☁️" },
{ name: "Rolling Forests", url: "https://especially43.github.io/game2/rolling-forests/", category: "adventure", icon: "🌲" },
{ name: "Rolly Vortex", url: "https://especially43.github.io/game2/rolly-vortex/", category: "arcade", icon: "🌀" },
{ name: "Rooftop Snipers 2", url: "https://especially43.github.io/game2/rooftop-snipers-2/", category: "action", icon: "🔫" },
{ name: "Rooftop Snipers", url: "https://especially43.github.io/game2/rooftop-snipers/", category: "action", icon: "🎯" },
{ name: "Run 2", url: "https://especially43.github.io/game2/run-2/", category: "arcade", icon: "🏃" },
{ name: "Run 3", url: "https://especially43.github.io/game2/run-3/", category: "arcade", icon: "🏃‍♂️" },
{ name: "Run", url: "https://especially43.github.io/game2/run/", category: "arcade", icon: "🏃‍♀️" },
{ name: "Running Bot Xmas Gifts", url: "https://especially43.github.io/game2/running-bot-xmas-gifts/", category: "arcade", icon: "🎁" },
{ name: "Sans Fight", url: "https://especially43.github.io/game2/sans-fight/", category: "action", icon: "💀" },
{ name: "Sans", url: "https://especially43.github.io/game2/sans/", category: "arcade", icon: "☠️" },
{ name: "Sg", url: "https://especially43.github.io/game2/sg/", category: "arcade", icon: "🎮" },
{ name: "Short Ride", url: "https://especially43.github.io/game2/short-ride/", category: "arcade", icon: "🚲" },
{ name: "Shuttledeck", url: "https://especially43.github.io/game2/shuttledeck/", category: "puzzle", icon: "🛸" },
{ name: "Sleeping Beauty", url: "https://especially43.github.io/game2/sleeping-beauty/", category: "adventure", icon: "👸" },
{ name: "Slither IO", url: "https://especially43.github.io/game2/slither-io/", category: "arcade", icon: "🐍" },
{ name: "Slope 2", url: "https://especially43.github.io/game2/slope-2/", category: "arcade", icon: "⬇️" },
{ name: "Slope", url: "https://especially43.github.io/game2/slope/", category: "arcade", icon: "🏔️" },
{ name: "Sm64", url: "https://especially43.github.io/game2/sm64/", category: "adventure", icon: "🍄" },
{ name: "Snake", url: "https://especially43.github.io/game2/snake/", category: "arcade", icon: "🐍" },
{ name: "Snow Battle", url: "https://especially43.github.io/game2/snow-battle/", category: "sports", icon: "❄️" },
{ name: "Soccer Random", url: "https://especially43.github.io/game2/soccer-random/", category: "sports", icon: "⚽" },
{ name: "Sonic The Hedgehog", url: "https://especially43.github.io/game2/sonic-the-hedgehog/", category: "arcade", icon: "🦔" },
{ name: "Space Company", url: "https://especially43.github.io/game2/space-company/", category: "strategy", icon: "🚀" },
{ name: "Space Garden", url: "https://especially43.github.io/game2/space-garden/", category: "puzzle", icon: "🌌" },
{ name: "Space Huggers", url: "https://especially43.github.io/game2/space-huggers/", category: "arcade", icon: "👾" },
{ name: "Space Invaders", url: "https://especially43.github.io/game2/space-invaders/", category: "arcade", icon: "🛸" },
{ name: "Stack", url: "https://especially43.github.io/game2/stack/", category: "puzzle", icon: "🧱" },
{ name: "Stickman Hook", url: "https://especially43.github.io/game2/stickman-hook/", category: "arcade", icon: "🪢" },
{ name: "Storm The House 2", url: "https://especially43.github.io/game2/storm-the-house-2/", category: "strategy", icon: "🏠" },
{ name: "Super Mario Bros", url: "https://especially43.github.io/game2/super-mario-bros/", category: "adventure", icon: "🍄" },
{ name: "Super Smash Flash 2A", url: "https://especially43.github.io/game2/super-smash-flash-2a/", category: "fighting", icon: "🥊" },
{ name: "Super Smash Flash 2B", url: "https://especially43.github.io/game2/super-smash-flash-2b/", category: "fighting", icon: "⚔️" },
{ name: "Superhot", url: "https://especially43.github.io/game2/superhot/", category: "action", icon: "🔥" },
{ name: "Swords And Sandals 2", url: "https://especially43.github.io/game2/swords-and-sandals-2/", category: "fighting", icon: "🗡️" },
{ name: "Tactical Weapon Pack 2", url: "https://especially43.github.io/game2/tactical-weapon-pack-2/", category: "action", icon: "🔫" },
{ name: "Tam Indian Truck Simulator 3D", url: "https://especially43.github.io/game2/tam-indian-truck-simulator-3d/", category: "racing", icon: "🚚" },
{ name: "Tank Trouble", url: "https://especially43.github.io/game2/tank-trouble/", category: "arcade", icon: "💣" },
{ name: "Temple Run 2", url: "https://especially43.github.io/game2/temple-run-2/", category: "adventure", icon: "🏃" },
{ name: "Tetris", url: "https://especially43.github.io/game2/tetris/", category: "puzzle", icon: "🔳" },
{ name: "The Impossible Quiz 2", url: "https://especially43.github.io/game2/the-impossible-quiz-2/", category: "puzzle", icon: "❓" },
{ name: "The Impossible Quiz", url: "https://especially43.github.io/game2/the-impossible-quiz/", category: "puzzle", icon: "❔" },
{ name: "The Maze Of Space Goblins", url: "https://especially43.github.io/game2/the-maze-of-space-goblins/", category: "adventure", icon: "👾" },
{ name: "There Is No Game", url: "https://especially43.github.io/game2/there-is-no-game/", category: "puzzle", icon: "🚫" },
{ name: "Time Shooter 2", url: "https://especially43.github.io/game2/time-shooter-2/", category: "action", icon: "⏳" },
{ name: "Time Shooter 3", url: "https://especially43.github.io/game2/time-shooter-3/", category: "action", icon: "⏰" },
{ name: "Tiny Fishing", url: "https://especially43.github.io/game2/tiny-fishing/", category: "arcade", icon: "🎣" },
{ name: "Tower Master", url: "https://especially43.github.io/game2/tower-master/", category: "strategy", icon: "🏯" },
{ name: "Town Scaper", url: "https://especially43.github.io/game2/town-scaper/", category: "strategy", icon: "🏘️" },
{ name: "Trimps", url: "https://especially43.github.io/game2/trimps/", category: "strategy", icon: "🦐" },
{ name: "Tube Jumpers", url: "https://especially43.github.io/game2/tube-jumpers/", category: "arcade", icon: "🛶" },
{ name: "Tunnel Rush", url: "https://especially43.github.io/game2/tunnel-rush/", category: "arcade", icon: "🌌" },
{ name: "Ucn", url: "https://especially43.github.io/game2/ucn/", category: "horror", icon: "👹" },
{ name: "Underrun", url: "https://especially43.github.io/game2/underrun/", category: "action", icon: "🔦" },
{ name: "Unfair Dyne", url: "https://especially43.github.io/game2/unfair-dyne/", category: "arcade", icon: "⚡" },
{ name: "Uno", url: "https://especially43.github.io/game2/uno/", category: "strategy", icon: "🃏" },
{ name: "Vex 3", url: "https://especially43.github.io/game2/vex-3/", category: "arcade", icon: "🧗" },
{ name: "Vex 4", url: "https://especially43.github.io/game2/vex-4/", category: "arcade", icon: "🧗‍♂️" },
{ name: "Vex 5", url: "https://especially43.github.io/game2/vex-5/", category: "arcade", icon: "🧗‍♀️" },
{ name: "Vex 6", url: "https://especially43.github.io/game2/vex-6/", category: "arcade", icon: "🏃" },
{ name: "Vex 7", url: "https://especially43.github.io/game2/vex-7/", category: "arcade", icon: "🏃‍♂️" },
{ name: "Volley Gosh", url: "https://especially43.github.io/game2/volley-gosh/", category: "sports", icon: "🏐" },
{ name: "Volley Random", url: "https://especially43.github.io/game2/volley-random/", category: "sports", icon: "🏐" },
{ name: "Webgl Rollingsky", url: "https://especially43.github.io/game2/webgl-rollingsky/", category: "arcade", icon: "🎵" },
{ name: "Wordle", url: "https://especially43.github.io/game2/wordle/", category: "puzzle", icon: "🔤" },
{ name: "Worlds Hardest Game 2", url: "https://especially43.github.io/game2/worlds-hardest-game-2/", category: "puzzle", icon: "😈" },
{ name: "Worlds Hardest Game", url: "https://especially43.github.io/game2/worlds-hardest-game/", category: "puzzle", icon: "👿" },
{ name: "Xtreme", url: "https://especially43.github.io/game2/xtreme/", category: "arcade", icon: "💥" },
{ name: "Xx142 B2exe", url: "https://especially43.github.io/game2/xx142-b2exe/", category: "arcade", icon: "💻" },
{ name: "You Are Bezos", url: "https://especially43.github.io/game2/you-are-bezos/", category: "strategy", icon: "💵" }

     
    ];  
    const gamesGrid = document.getElementById("gamesGrid");
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const randomGameBtn = document.getElementById("randomGameBtn");
    const panicOverlay = document.getElementById("panicOverlay");

    // Render games
    function renderGames(filterCategory = "all", searchTerm = "") {
        gamesGrid.innerHTML = "";
        const filteredGames = gameData.filter(game => {
            const matchesCategory = filterCategory === "all" || game.category === filterCategory;
            const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filteredGames.length === 0) {
            gamesGrid.innerHTML = "<p class='loading'>No games found...</p>";
            return;
        }

        filteredGames.forEach(game => {
            const card = document.createElement("div");
            card.className = "game-card";
            card.innerHTML = `
                <div class="game-image">${game.icon}</div>
                <div class="game-info">
                    <h3 class="game-title">${game.name}</h3>
                    <p class="game-category">${game.category}</p>
                </div>
                <button class="play-btn" aria-label="Play ${game.name}">▶</button>
            `;

            // Open game on click
            card.addEventListener("click", () => window.open(game.url, "_blank"));
            card.querySelector(".play-btn").addEventListener("click", e => {
                e.stopPropagation();
                window.open(game.url, "_blank");
            });

            gamesGrid.appendChild(card);
        });
    }

    // Search functionality
    searchInput.addEventListener("input", () => {
        const activeFilter = document.querySelector(".filter-btn.active").dataset.category;
        renderGames(activeFilter, searchInput.value);
    });

    // Filter functionality
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            btn.classList.add("active");
            renderGames(btn.dataset.category, searchInput.value);
        });
    });

    // Random game
    randomGameBtn.addEventListener("click", e => {
        e.preventDefault();
        const randomGame = gameData[Math.floor(Math.random() * gameData.length)];
        window.open(randomGame.url, "_blank");
    });
    // Detect mobile/tablet
     function isMobileOrTablet() {
        return window.innerWidth <= 1024; // disable panic on devices ≤ 1024px
    }

    // School Panic Mode
function togglePanic() {
        if (isMobileOrTablet()) return; // do nothing on mobile/tablet

        if (panicOverlay.style.display === "flex") {
            panicOverlay.style.display = "none";
        } else {
            panicOverlay.style.display = "flex";
        }
    }

 document.addEventListener("keydown", e => {
        if (!isMobileOrTablet() && e.key === "`") {
            togglePanic();
        }
    });

    window.togglePanic = togglePanic;

    // Initial render
    renderGames();