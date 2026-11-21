/* ==========================================================================
   Play & Learn with Bip — Color-Matched Interactive Worlds & Instant Audio
   Domain: https://bipthebot.net | YouTube/IG/TikTok: @playlearnwithbip
   ========================================================================== */

const EPISODES = [
  { id: "LCwZiT2EIik", icon: "🟣", title: "Who's Cracking the Purple Egg? Dino Eggs #2", meta: "2:20 • Mystery Dino Eggs" },
  { id: "9T2d1-nPPbQ", icon: "🥚", title: "What's Hatching Inside? Dino Eggs #1", meta: "2:51 • Mystery Dino Eggs" },
  { id: "g6gomczRjYw", icon: "🧼", title: "Dirty Big Trucks at Bip's Magic Car Wash!", meta: "7:07 • Magic Car Wash" },
  { id: "CtmFQDcpvgY", icon: "🚜", title: "Muddy Farm Tractors & Barn Animals!", meta: "8:46 • Vehicles & Farm" },
  { id: "sDwtEwIJ6zs", icon: "🔤", title: "Learn the Alphabet A to Z with Bip!", meta: "12:30 • Full A–Z Phonics" },
  { id: "bLw6DOlg-Pw", icon: "🐄", title: "Peekaboo Cow & Dolphin! Find the Animals", meta: "2:48 • Hide & Seek" },
  { id: "XhWwEkmjUak", icon: "🦁", title: "Who Is Hiding at the Zoo? 15 Animals", meta: "8:04 • Safari & Zoo" },
  { id: "A44kkwUljMM", icon: "🐳", title: "What's Swimming Under the Water? Ocean & Pond", meta: "8:05 • Water Worlds" },
  { id: "Fp5KZCXMpjs", icon: "🦊", title: "Woodland Forest Animals: Fox, Owl & Beaver", meta: "1:40 • Forest Habitat" },
  { id: "FG-Prg_mWaU", icon: "🐸", title: "Bip Visits the Pond! Frog, Duck & Muskrat", meta: "1:32 • Pond Habitat" },
  { id: "Bg_6uIAVhV8", icon: "🐴", title: "Farm Barn Animals: Horse, Hen & Goat", meta: "1:53 • Cozy Barn" },
  { id: "T9vdmRaVw4o", icon: "🐧", title: "Polar Ice Animals: Penguin & Polar Bear", meta: "1:33 • Polar Ice" }
];

const SYSTEM_LINES = {
  "bip-hello": "Hi friend! I'm Bip! Tap any animal, truck, dino egg, or letter to play with me!",
  "voice-check": "Yay! Let's play together!",
  "world-animals": "Welcome to Animal Homes! Tap an animal to hear where it lives and what it eats!",
  "world-vehicles": "Welcome to Bip's Magic Car Wash! Tap any muddy truck to wash it clean!",
  "world-dinos": "Look at the dinosaur eggs in the nest! Tap an egg to crack and hatch it!",
  "world-abcs": "Let's play with ABC blocks! Tap any letter from A to Z!",
  "mud-reset": "Splat! The trucks are muddy again! Tap each truck to wash it clean!",
  "eggs-reset": "All six dinosaur eggs are back in the nest! Tap an egg to crack it!"
};
const HABITATS = {
  "forest": {
    "name": "\ud83c\udf32 Woodland Forest",
    "episodeId": "Fp5KZCXMpjs",
    "introId": "hab-forest",
    "intro": "Welcome to the forest! Tap an animal in the trees!",
    "items": [
      {
        "id": "fox",
        "emoji": "\ud83e\udd8a",
        "label": "Orange Fox",
        "x": 24,
        "y": 66,
        "sfx": "chime",
        "line": "Hi! I'm an Orange Fox! I live in the forest, and I eat sweet berries!"
      },
      {
        "id": "owl",
        "emoji": "\ud83e\udd89",
        "label": "Brown Owl",
        "x": 74,
        "y": 28,
        "sfx": "hoot",
        "line": "Hoo, hoo! I'm a Brown Owl! I live in tall trees, and I eat little bugs!"
      },
      {
        "id": "beaver",
        "emoji": "\ud83e\uddab",
        "label": "Brown Beaver",
        "x": 54,
        "y": 74,
        "sfx": "splash",
        "line": "Chomp, chomp! I'm a Brown Beaver! I live by the river, and I chew wood!"
      },
      {
        "id": "deer",
        "emoji": "\ud83e\udd8c",
        "label": "Forest Deer",
        "x": 80,
        "y": 64,
        "sfx": "chime",
        "line": "Hi! I'm a Forest Deer! I live in the woods, and I eat green leaves!"
      }
    ]
  },
  "pond": {
    "name": "\ud83e\udeb7 Freshwater Pond",
    "episodeId": "FG-Prg_mWaU",
    "introId": "hab-pond",
    "intro": "Splash! Welcome to the pond! Tap a friend in the water!",
    "items": [
      {
        "id": "frog",
        "emoji": "\ud83d\udc38",
        "label": "Green Frog",
        "x": 26,
        "y": 68,
        "sfx": "pop",
        "line": "Ribbit, ribbit! I'm a Green Frog! I sit on a lily pad, and I eat little bugs!"
      },
      {
        "id": "duck",
        "emoji": "\ud83e\udd86",
        "label": "Pond Duck",
        "x": 53,
        "y": 55,
        "sfx": "splash",
        "line": "Quack, quack! I'm a Pond Duck! I swim in the pond, and I eat seeds and plants!"
      },
      {
        "id": "otter",
        "emoji": "\ud83e\udda6",
        "label": "River Otter",
        "x": 78,
        "y": 66,
        "sfx": "splash",
        "line": "Splash! I'm a River Otter! I swim in the water, and I eat yummy fish!"
      },
      {
        "id": "pond-turtle",
        "emoji": "\ud83d\udc22",
        "label": "Green Turtle",
        "x": 38,
        "y": 36,
        "sfx": "chime",
        "line": "Hi! I'm a Green Turtle! I live at the pond, and I eat water plants!"
      }
    ]
  },
  "barn": {
    "name": "\ud83c\udfe1 Cozy Red Barn",
    "episodeId": "Bg_6uIAVhV8",
    "introId": "hab-barn",
    "intro": "Welcome to the red barn! Tap a friendly farm animal!",
    "items": [
      {
        "id": "horse",
        "emoji": "\ud83d\udc34",
        "label": "Brown Horse",
        "x": 24,
        "y": 60,
        "sfx": "chime",
        "line": "Neigh! I'm a Brown Horse! I live in the barn, and I eat crunchy apples!"
      },
      {
        "id": "hen",
        "emoji": "\ud83d\udc14",
        "label": "White Hen",
        "x": 50,
        "y": 36,
        "sfx": "pop",
        "line": "Cluck, cluck! I'm a White Hen! I live on the farm, and I eat corn seeds!"
      },
      {
        "id": "goat",
        "emoji": "\ud83d\udc10",
        "label": "Farm Goat",
        "x": 77,
        "y": 64,
        "sfx": "chime",
        "line": "Maa, maa! I'm a Farm Goat! I live at the barn, and I eat yummy hay!"
      },
      {
        "id": "cow",
        "emoji": "\ud83d\udc04",
        "label": "Farm Cow",
        "x": 52,
        "y": 74,
        "sfx": "horn",
        "line": "Moo! I'm a Farm Cow! I live on the farm, and I eat green grass!"
      }
    ]
  },
  "polar": {
    "name": "\u2744\ufe0f Polar Ice",
    "episodeId": "T9vdmRaVw4o",
    "introId": "hab-polar",
    "intro": "Brrr! Cold snow and ice! Tap an icy friend!",
    "items": [
      {
        "id": "penguin",
        "emoji": "\ud83d\udc27",
        "label": "Penguin",
        "x": 25,
        "y": 66,
        "sfx": "pop",
        "line": "Waddle, waddle! I'm a Penguin! I live on the cold ice, and I eat little fish!"
      },
      {
        "id": "polar-bear",
        "svgKey": "polar-bear",
        "label": "White Polar Bear",
        "x": 55,
        "y": 54,
        "sfx": "chime",
        "line": "Hi! I'm a White Polar Bear! I live on the snow and ice, and I eat fish!"
      },
      {
        "id": "seal",
        "emoji": "\ud83e\uddad",
        "label": "Ice Seal",
        "x": 80,
        "y": 68,
        "sfx": "splash",
        "line": "Arf, arf! I'm a Seal! I swim in icy water, and I eat ocean fish!"
      },
      {
        "id": "arctic-whale",
        "emoji": "\ud83d\udc33",
        "label": "Blue Whale",
        "x": 38,
        "y": 30,
        "sfx": "splash",
        "line": "Splash! I'm a Blue Whale! I live in the big ocean, and I eat tiny fish!"
      }
    ]
  },
  "ocean": {
    "name": "\ud83c\udf0a Deep Blue Ocean",
    "episodeId": "A44kkwUljMM",
    "introId": "hab-ocean",
    "intro": "Bubble, bubble! Let's swim in the big blue ocean!",
    "items": [
      {
        "id": "dolphin",
        "emoji": "\ud83d\udc2c",
        "label": "Blue Dolphin",
        "x": 26,
        "y": 38,
        "sfx": "splash",
        "line": "Splash! I'm a Blue Dolphin! I live in the ocean, and I eat yummy fish!"
      },
      {
        "id": "octopus",
        "emoji": "\ud83d\udc19",
        "label": "Octopus",
        "x": 54,
        "y": 68,
        "sfx": "pop",
        "line": "Wiggle, wiggle! I'm an Octopus! I live in the ocean, and I eat little crabs!"
      },
      {
        "id": "colorful-fish",
        "emoji": "\ud83d\udc20",
        "label": "Colorful Fish",
        "x": 78,
        "y": 44,
        "sfx": "splash",
        "line": "Blub, blub! I'm a Colorful Fish! I swim by the coral reef, and I eat sea plants!"
      },
      {
        "id": "crab",
        "emoji": "\ud83e\udd80",
        "label": "Red Crab",
        "x": 28,
        "y": 76,
        "sfx": "pop",
        "line": "Snip, snap! I'm a Red Crab! I walk on the sandy ocean floor, and I eat seaweed!"
      }
    ]
  },
  "safari": {
    "name": "\ud83e\udd81 Sunny Grasslands",
    "episodeId": "XhWwEkmjUak",
    "introId": "hab-safari",
    "intro": "Welcome to the sunny grass! Tap a big animal friend!",
    "items": [
      {
        "id": "lion",
        "emoji": "\ud83e\udd81",
        "label": "Lion",
        "x": 24,
        "y": 66,
        "sfx": "horn",
        "line": "Roar! I'm a Lion! I live in the sunny grass, and I love big naps in the shade!"
      },
      {
        "id": "giraffe",
        "emoji": "\ud83e\udd92",
        "label": "Tall Giraffe",
        "x": 52,
        "y": 40,
        "sfx": "chime",
        "line": "Hi! I'm a Tall Giraffe! I live in the sunny grass, and I eat leaves high in the trees!"
      },
      {
        "id": "elephant",
        "emoji": "\ud83d\udc18",
        "label": "Gray Elephant",
        "x": 79,
        "y": 60,
        "sfx": "horn",
        "line": "Pa-woo! I'm a Gray Elephant! I spray water with my trunk, and I eat grass and fruit!"
      },
      {
        "id": "hippo",
        "emoji": "\ud83e\udd9b",
        "label": "Hippo",
        "x": 54,
        "y": 78,
        "sfx": "splash",
        "line": "Big splash! I'm a Hippo! I stay cool in the river, and I eat lots of grass!"
      }
    ]
  },
  "desert": {
    "name": "\ud83c\udf35 Warm Desert",
    "episodeId": "XhWwEkmjUak",
    "introId": "hab-desert",
    "intro": "Warm sand and tall green cactus plants! Tap a desert friend!",
    "items": [
      {
        "id": "camel",
        "emoji": "\ud83d\udc2a",
        "label": "Camel",
        "x": 26,
        "y": 58,
        "sfx": "chime",
        "line": "Hi! I'm a Camel! I walk on the warm desert sand, and I eat dry plants!"
      },
      {
        "id": "lizard",
        "emoji": "\ud83e\udd8e",
        "label": "Green Lizard",
        "x": 54,
        "y": 72,
        "sfx": "pop",
        "line": "Zip, zip! I'm a Green Lizard! I sit on warm rocks, and I eat tiny bugs!"
      },
      {
        "id": "desert-owl",
        "emoji": "\ud83e\udd89",
        "label": "Cactus Owl",
        "x": 76,
        "y": 36,
        "sfx": "hoot",
        "line": "Hoo, hoo! I'm a Cactus Owl! I live inside a green cactus, and I eat little bugs!"
      },
      {
        "id": "tortoise",
        "emoji": "\ud83d\udc22",
        "label": "Tortoise",
        "x": 78,
        "y": 74,
        "sfx": "chime",
        "line": "Hi! I'm a Tortoise! I live in the warm desert, and I eat pretty cactus flowers!"
      }
    ]
  }
};
const VEHICLES = [
  {
    "id": "tractor",
    "label": "Red Tractor",
    "x": 20,
    "y": 40,
    "line": "Vroom! I'm a Red Tractor! I work on the farm, and I pull big wagons! Now I'm clean!"
  },
  {
    "id": "dump-truck",
    "label": "Yellow Dump Truck",
    "x": 42,
    "y": 38,
    "line": "Rumble! I'm a Yellow Dump Truck! I carry rocks and dirt in my back! Now I'm clean!"
  },
  {
    "id": "fire-truck",
    "label": "Red Fire Truck",
    "x": 64,
    "y": 40,
    "line": "Wee-oo! I'm a Red Fire Truck! I have a white ladder, and I spray water to help!"
  },
  {
    "id": "school-bus",
    "label": "Yellow School Bus",
    "x": 84,
    "y": 40,
    "line": "Beep, beep! I'm a Yellow School Bus! I drive on the road and take kids to school!"
  },
  {
    "id": "excavator",
    "label": "Orange Digger",
    "x": 26,
    "y": 75,
    "line": "Scoop! I'm an Orange Digger! I dig in the dirt with my big bucket! Now I'm clean!"
  },
  {
    "id": "recycle-truck",
    "label": "Green Recycle Truck",
    "x": 53,
    "y": 75,
    "line": "Honk! I'm a Green Recycle Truck! I pick up cans and boxes to keep our street clean!"
  },
  {
    "id": "rescue-van",
    "label": "White Rescue Van",
    "x": 80,
    "y": 75,
    "line": "Beep, beep! I'm a White Rescue Van! Helpers ride in me to help people feel better!"
  }
];
const DINO_EGGS = [
  {
    "id": "trex",
    "eggLabel": "Red Egg",
    "clueLabel": "Green Tail!",
    "dinoLabel": "Green T-Rex",
    "x": 20,
    "y": 40,
    "clueLine": "Crack, crack! Look at my green tail! Tap again to hatch me!",
    "hatchLine": "Pop! Roar! I'm a Green T-Rex! I walk on two big legs and stomp around!"
  },
  {
    "id": "triceratops",
    "eggLabel": "Blue Egg",
    "clueLabel": "Three Horns!",
    "dinoLabel": "Blue Triceratops",
    "x": 50,
    "y": 38,
    "clueLine": "Knock, knock! Look at my three horns! Tap again to hatch me!",
    "hatchLine": "Pop! Stomp, stomp! I'm a Blue Triceratops! I have three horns, and I eat green leaves!"
  },
  {
    "id": "brachiosaurus",
    "eggLabel": "Green Egg",
    "clueLabel": "Orange Neck!",
    "dinoLabel": "Tall Brachiosaurus",
    "x": 80,
    "y": 40,
    "clueLine": "Crunch, crunch! Look at my long orange neck! Tap again to hatch me!",
    "hatchLine": "Pop! Hi! I'm a Tall Brachiosaurus! My long orange neck reaches leaves high in the trees!"
  },
  {
    "id": "stegosaurus",
    "eggLabel": "Purple Egg",
    "clueLabel": "Yellow Plates!",
    "dinoLabel": "Purple Stegosaurus",
    "x": 20,
    "y": 76,
    "clueLine": "Thump, thump! Look at my yellow back plates! Tap again to hatch me!",
    "hatchLine": "Pop! Yay! I'm a Purple Stegosaurus! I have yellow plates on my back, and I eat plants!"
  },
  {
    "id": "pterodactyl",
    "eggLabel": "Yellow Egg",
    "clueLabel": "Yellow Wings!",
    "dinoLabel": "Yellow Pterodactyl",
    "x": 50,
    "y": 76,
    "clueLine": "Flap, flap! Look at my two yellow wings! Tap again to hatch me!",
    "hatchLine": "Pop! Whoosh! I'm a Yellow Pterodactyl! I flap my big yellow wings and fly in the sky!"
  },
  {
    "id": "ankylosaurus",
    "eggLabel": "Orange Egg",
    "clueLabel": "Bumpy Tail!",
    "dinoLabel": "Orange Ankylosaurus",
    "x": 80,
    "y": 76,
    "clueLine": "Bonk, bonk! Look at my round bumpy tail! Tap again to hatch me!",
    "hatchLine": "Pop! Boom, boom! I'm an Orange Ankylosaurus! I wear a bumpy green shell, and I eat plants!"
  }
];
const ABC_ITEMS = [
  {
    "letter": "A",
    "icon": "\ud83c\udf4e",
    "word": "Red Apple",
    "line": "A! Apple! I'm a red apple! I grow on trees, and I taste sweet!"
  },
  {
    "letter": "B",
    "icon": "\ud83d\ude8c",
    "word": "Bus",
    "line": "B! Bus! Beep, beep! I'm a bus, and I drive friends down the road!"
  },
  {
    "letter": "C",
    "icon": "\ud83d\udc04",
    "word": "Cow",
    "line": "C! Cow! Moo! I'm a cow! I live on the farm, and I eat green grass!"
  },
  {
    "letter": "D",
    "icon": "\ud83d\udc36",
    "word": "Puppy Dog",
    "line": "D! Dog! Woof, woof! I'm a puppy dog, and I wag my tail!"
  },
  {
    "letter": "E",
    "icon": "\ud83d\udc18",
    "word": "Elephant",
    "line": "E! Elephant! I'm a big gray elephant, and I eat fruit and grass!"
  },
  {
    "letter": "F",
    "icon": "\ud83d\udc1f",
    "word": "Blue Fish",
    "line": "F! Fish! Blub, blub! I'm a blue fish, and I swim in the water!"
  },
  {
    "letter": "G",
    "icon": "\ud83e\udd92",
    "word": "Giraffe",
    "line": "G! Giraffe! I'm a tall giraffe, and I eat leaves up in the trees!"
  },
  {
    "letter": "H",
    "icon": "\ud83d\udc34",
    "word": "Brown Horse",
    "line": "H! Horse! Neigh! I'm a brown horse, and I eat crunchy apples!"
  },
  {
    "letter": "I",
    "icon": "\ud83c\udf66",
    "word": "Ice Cream",
    "line": "I! Ice Cream! Yum! I'm cold, sweet ice cream in a cone!"
  },
  {
    "letter": "J",
    "icon": "\ud83d\ude99",
    "word": "Blue Jeep",
    "line": "J! Jeep! Vroom! I'm a blue jeep, and I drive up bumpy hills!"
  },
  {
    "letter": "K",
    "icon": "\ud83e\udd98",
    "word": "Kangaroo",
    "line": "K! Kangaroo! Boing, boing! I'm a kangaroo, and I hop super high!"
  },
  {
    "letter": "L",
    "icon": "\ud83e\udd81",
    "word": "Lion",
    "line": "L! Lion! Roar! I'm a lion, and I live in the sunny grass!"
  },
  {
    "letter": "M",
    "icon": "\ud83d\udc12",
    "word": "Monkey",
    "line": "M! Monkey! Ooh, ooh! I'm a monkey! I climb trees, and I eat bananas!"
  },
  {
    "letter": "N",
    "svgKey": "abc-nest",
    "word": "Bird Nest",
    "line": "N! Nest! I'm a cozy nest in a tree, and I hold little blue eggs!"
  },
  {
    "letter": "O",
    "icon": "\ud83d\udc19",
    "word": "Octopus",
    "line": "O! Octopus! Wiggle! I'm an octopus! I live in the ocean with eight arms!"
  },
  {
    "letter": "P",
    "icon": "\ud83d\udc27",
    "word": "Penguin",
    "line": "P! Penguin! Waddle! I'm a penguin! I live on the ice, and I eat fish!"
  },
  {
    "letter": "Q",
    "icon": "\ud83e\udd86",
    "word": "Quack Duck",
    "line": "Q! Quack! Quack, quack! I'm a duck, and I swim on the pond!"
  },
  {
    "letter": "R",
    "svgKey": "abc-robot",
    "word": "Blue Robot",
    "line": "R! Robot! Beep, boop! I'm Bip, your friendly blue robot!"
  },
  {
    "letter": "S",
    "icon": "\u2b50",
    "word": "Yellow Star",
    "line": "S! Star! Twinkle, twinkle! I'm a yellow star up in the night sky!"
  },
  {
    "letter": "T",
    "svgKey": "abc-tractor",
    "word": "Red Tractor",
    "line": "T! Tractor! Vroom! I'm a red tractor, and I work on the farm!"
  },
  {
    "letter": "U",
    "icon": "\u2602\ufe0f",
    "word": "Umbrella",
    "line": "U! Umbrella! Pop me open! I keep you dry in the rain!"
  },
  {
    "letter": "V",
    "icon": "\ud83c\udfbb",
    "word": "Violin",
    "line": "V! Violin! I'm a wooden violin, and my strings play pretty music!"
  },
  {
    "letter": "W",
    "icon": "\ud83d\udc33",
    "word": "Blue Whale",
    "line": "W! Whale! Splash! I'm a blue whale! I live in the ocean, and I eat tiny fish!"
  },
  {
    "letter": "X",
    "svgKey": "abc-xylophone",
    "word": "Xylophone",
    "line": "X! Xylophone! Ding, ding! Tap my colorful keys to play music!"
  },
  {
    "letter": "Y",
    "icon": "\ud83e\ude80",
    "word": "Yo-Yo",
    "line": "Y! Yo-Yo! Zip, zip! I spin down on my string and pop back up!"
  },
  {
    "letter": "Z",
    "icon": "\ud83e\udd93",
    "word": "Zebra",
    "line": "Z! Zebra! I'm a zebra with black and white stripes, and I eat grass!"
  }
];

/* ==========================================================================
   COLOR-LOCKED 3D-CLAY STYLE CUSTOM INLINE SVGs
   Guarantees 100% visual-to-word color match across ChromeOS, iOS & Windows!
   ========================================================================== */

function renderSpecialIconSVG(key) {
  if (key === "polar-bear") {
    return `<svg viewBox="0 0 100 84" aria-hidden="true">
      <circle cx="24" cy="24" r="13" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
      <circle cx="24" cy="24" r="6" fill="#FDE2E4"/>
      <circle cx="76" cy="24" r="13" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
      <circle cx="76" cy="24" r="6" fill="#FDE2E4"/>
      <ellipse cx="50" cy="48" rx="34" ry="29" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/>
      <ellipse cx="50" cy="55" rx="15" ry="12" fill="#F1F5F9"/>
      <circle cx="37" cy="42" r="4.2" fill="#1E293B"/>
      <circle cx="63" cy="42" r="4.2" fill="#1E293B"/>
      <ellipse cx="50" cy="51" rx="6.5" ry="4.5" fill="#1E293B"/>
      <path d="M44 58 Q50 63 56 58" stroke="#1E293B" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <circle cx="29" cy="50" r="4.5" fill="#FDA4AF" opacity="0.65"/>
      <circle cx="71" cy="50" r="4.5" fill="#FDA4AF" opacity="0.65"/>
    </svg>`;
  }
  if (key === "abc-nest") {
    return `<svg viewBox="0 0 80 64" aria-hidden="true">
      <ellipse cx="28" cy="29" rx="9" ry="12" fill="#60A5FA" stroke="#2563EB" stroke-width="2"/>
      <ellipse cx="40" cy="26" rx="9.5" ry="12.5" fill="#93C5FD" stroke="#2563EB" stroke-width="2"/>
      <ellipse cx="52" cy="29" rx="9" ry="12" fill="#60A5FA" stroke="#2563EB" stroke-width="2"/>
      <path d="M10 32 Q40 58 70 32 Q66 54 40 54 Q14 54 10 32 Z" fill="#B45309" stroke="#78350F" stroke-width="2.5"/>
      <ellipse cx="40" cy="34" rx="30" ry="7" fill="#D97706" stroke="#78350F" stroke-width="2"/>
    </svg>`;
  }
  if (key === "abc-robot") {
    return `<svg viewBox="0 0 80 68" aria-hidden="true">
      <line x1="40" y1="16" x2="44" y2="6" stroke="#64748B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="45" cy="5" r="4.5" fill="#FFAE42"/>
      <rect x="14" y="16" width="52" height="40" rx="16" fill="#58AFE3" stroke="#2B79A8" stroke-width="2.5"/>
      <circle cx="30" cy="35" r="8" fill="#FFAE42"/><circle cx="30" cy="35" r="3.8" fill="#3E2009"/>
      <circle cx="50" cy="35" r="8" fill="#FFAE42"/><circle cx="50" cy="35" r="3.8" fill="#3E2009"/>
      <path d="M30 47 Q40 52 50 47" stroke="#1E4E6E" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`;
  }
  if (key === "abc-tractor") {
    return renderVehicleSVG("tractor", true);
  }
  if (key === "abc-xylophone") {
    return `<svg viewBox="0 0 90 64" aria-hidden="true">
      <line x1="10" y1="22" x2="80" y2="26" stroke="#92400E" stroke-width="4" stroke-linecap="round"/>
      <line x1="10" y1="46" x2="80" y2="42" stroke="#92400E" stroke-width="4" stroke-linecap="round"/>
      <rect x="13" y="12" width="11" height="42" rx="4" fill="#EF4444"/>
      <rect x="27" y="14" width="11" height="38" rx="4" fill="#F97316"/>
      <rect x="41" y="16" width="11" height="34" rx="4" fill="#FACC15"/>
      <rect x="55" y="18" width="11" height="30" rx="4" fill="#22C55E"/>
      <rect x="69" y="20" width="11" height="26" rx="4" fill="#3B82F6"/>
    </svg>`;
  }
  return "";
}

function renderVehicleSVG(id, isClean) {
  let body = "";
  if (id === "tractor") {
    // True Cherry-Red Tractor with Sunny-Yellow Wheel Hubs!
    body = `
      <rect x="24" y="22" width="10" height="22" rx="3" fill="#475569"/>
      <rect x="54" y="14" width="42" height="38" rx="8" fill="#DC2626" stroke="#991B1B" stroke-width="2.5"/>
      <rect x="61" y="20" width="28" height="19" rx="5" fill="#BAE6FD"/>
      <rect x="18" y="34" width="44" height="24" rx="7" fill="#EF4444" stroke="#991B1B" stroke-width="2.5"/>
      <circle cx="80" cy="58" r="20" fill="#1E293B"/><circle cx="80" cy="58" r="10" fill="#FACC15"/>
      <circle cx="31" cy="63" r="14" fill="#1E293B"/><circle cx="31" cy="63" r="6.5" fill="#FACC15"/>
    `;
  } else if (id === "dump-truck") {
    // True Sunny-Yellow Dump Truck with Gray Rocks in Bed!
    body = `
      <circle cx="62" cy="24" r="9" fill="#94A3B8"/><circle cx="76" cy="22" r="10" fill="#64748B"/><circle cx="90" cy="25" r="8" fill="#94A3B8"/>
      <polygon points="46,24 106,20 100,54 46,54" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5"/>
      <rect x="14" y="30" width="32" height="28" rx="7" fill="#FDE047" stroke="#CA8A04" stroke-width="2.5"/>
      <rect x="19" y="35" width="18" height="13" rx="3" fill="#BAE6FD"/>
      <circle cx="30" cy="64" r="12" fill="#1E293B"/><circle cx="30" cy="64" r="5" fill="#FACC15"/>
      <circle cx="82" cy="64" r="12" fill="#1E293B"/><circle cx="82" cy="64" r="5" fill="#FACC15"/>
    `;
  } else if (id === "fire-truck") {
    // True Bright Red Fire Truck with White Roof Ladder!
    body = `
      <rect x="28" y="14" width="74" height="8" rx="3" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="2"/>
      <circle cx="22" cy="20" r="5" fill="#38BDF8"/>
      <rect x="14" y="24" width="92" height="36" rx="8" fill="#EF4444" stroke="#991B1B" stroke-width="2.5"/>
      <rect x="19" y="30" width="22" height="15" rx="4" fill="#BAE6FD"/>
      <rect x="46" y="45" width="54" height="5" rx="2" fill="#FDE047"/>
      <circle cx="32" cy="64" r="12" fill="#1E293B"/><circle cx="32" cy="64" r="5.5" fill="#E2E8F0"/>
      <circle cx="84" cy="64" r="12" fill="#1E293B"/><circle cx="84" cy="64" r="5.5" fill="#E2E8F0"/>
    `;
  } else if (id === "school-bus") {
    // True Sunny-Yellow School Bus!
    body = `
      <rect x="12" y="22" width="96" height="38" rx="10" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5"/>
      <rect x="20" y="29" width="16" height="14" rx="3" fill="#BAE6FD"/>
      <rect x="41" y="29" width="16" height="14" rx="3" fill="#BAE6FD"/>
      <rect x="62" y="29" width="16" height="14" rx="3" fill="#BAE6FD"/>
      <rect x="83" y="29" width="17" height="14" rx="3" fill="#BAE6FD"/>
      <rect x="14" y="48" width="92" height="4" fill="#1E293B"/>
      <circle cx="32" cy="64" r="12" fill="#1E293B"/><circle cx="32" cy="64" r="5" fill="#FDE047"/>
      <circle cx="84" cy="64" r="12" fill="#1E293B"/><circle cx="84" cy="64" r="5" fill="#FDE047"/>
    `;
  } else if (id === "excavator") {
    // True Bright Orange Digger with Jointed Arm & Bucket!
    body = `
      <path d="M64 34 L88 16 L104 34" stroke="#FB923C" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M96 32 L112 34 L104 48 Q94 46 96 32 Z" fill="#334155"/>
      <rect x="24" y="24" width="44" height="30" rx="8" fill="#F97316" stroke="#C2410C" stroke-width="2.5"/>
      <rect x="30" y="29" width="22" height="15" rx="4" fill="#BAE6FD"/>
      <rect x="18" y="56" width="58" height="16" rx="8" fill="#334155"/>
      <circle cx="30" cy="64" r="4.5" fill="#FDBA74"/><circle cx="47" cy="64" r="4.5" fill="#FDBA74"/><circle cx="64" cy="64" r="4.5" fill="#FDBA74"/>
    `;
  } else if (id === "recycle-truck") {
    // True Leaf-Green Recycle Truck!
    body = `
      <rect x="44" y="20" width="62" height="38" rx="8" fill="#22C55E" stroke="#15803D" stroke-width="2.5"/>
      <rect x="14" y="30" width="30" height="28" rx="7" fill="#4ADE80" stroke="#15803D" stroke-width="2.5"/>
      <rect x="19" y="35" width="16" height="13" rx="3" fill="#BAE6FD"/>
      <polygon points="75,28 65,45 85,45" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="30" cy="64" r="12" fill="#1E293B"/><circle cx="30" cy="64" r="5" fill="#BBF7D0"/>
      <circle cx="82" cy="64" r="12" fill="#1E293B"/><circle cx="82" cy="64" r="5" fill="#BBF7D0"/>
    `;
  } else {
    // True Crisp White Rescue Van with Red Cross!
    body = `
      <rect x="48" y="16" width="16" height="6" rx="3" fill="#EF4444"/>
      <rect x="14" y="22" width="90" height="38" rx="10" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2.5"/>
      <rect x="19" y="29" width="22" height="15" rx="4" fill="#BAE6FD"/>
      <rect x="66" y="29" width="8" height="22" rx="2" fill="#EF4444"/>
      <rect x="59" y="36" width="22" height="8" rx="2" fill="#EF4444"/>
      <circle cx="32" cy="64" r="12" fill="#1E293B"/><circle cx="32" cy="64" r="5" fill="#E2E8F0"/>
      <circle cx="84" cy="64" r="12" fill="#1E293B"/><circle cx="84" cy="64" r="5" fill="#E2E8F0"/>
    `;
  }

  const overlay = isClean
    ? `<g fill="#FACC15" stroke="#FFFFFF" stroke-width="1.2">
         <polygon points="22,14 25,20 31,23 25,26 22,32 19,26 13,23 19,20"/>
         <polygon points="98,12 100,17 105,19 100,21 98,26 96,21 91,19 96,17"/>
       </g>`
    : `<g fill="#78350F" opacity="0.88">
         <circle cx="48" cy="48" r="8"/><circle cx="55" cy="45" r="5"/>
         <circle cx="76" cy="43" r="9"/><circle cx="84" cy="49" r="5.5"/>
         <circle cx="28" cy="50" r="6"/>
       </g>`;

  return `<svg viewBox="0 0 120 84" aria-hidden="true">${body}${overlay}</svg>`;
}

function renderDinoStageSVG(id, stage) {
  // Stage 0: Patterned Closed 3D Egg | Stage 1: Peeking Clue | Stage 2: Full Color-Matched Dino!
  const palettes = {
    trex: { egg: "#EF4444", stroke: "#B91C1C", dot: "#FACC15" },
    triceratops: { egg: "#38BDF8", stroke: "#0284C7", dot: "#FEF3C7" },
    brachiosaurus: { egg: "#22C55E", stroke: "#15803D", dot: "#FDE047" },
    stegosaurus: { egg: "#9333EA", stroke: "#6B21A8", dot: "#FACC15" },
    pterodactyl: { egg: "#FACC15", stroke: "#CA8A04", dot: "#60A5FA" },
    ankylosaurus: { egg: "#F97316", stroke: "#C2410C", dot: "#84CC16" }
  };
  const p = palettes[id] || palettes.trex;

  if (stage === 0) {
    return `<svg viewBox="0 0 100 88" aria-hidden="true">
      <ellipse cx="50" cy="76" rx="34" ry="8" fill="#D99B52"/>
      <path d="M24 68 C22 30, 36 10, 50 10 C64 10, 78 30, 76 68 Q50 78 24 68 Z" fill="${p.egg}" stroke="${p.stroke}" stroke-width="3"/>
      <circle cx="40" cy="34" r="5.5" fill="${p.dot}"/>
      <circle cx="60" cy="42" r="6.5" fill="${p.dot}"/>
      <circle cx="43" cy="55" r="6" fill="${p.dot}"/>
      <circle cx="57" cy="24" r="4.5" fill="${p.dot}"/>
      <ellipse cx="38" cy="24" rx="4" ry="8" transform="rotate(-20 38 24)" fill="#FFFFFF" opacity="0.45"/>
    </svg>`;
  }

  if (stage === 1) {
    let clue = "";
    if (id === "trex") {
      clue = `<path d="M70 52 Q94 42 92 26 Q82 32 68 42 Z" fill="#22C55E" stroke="#15803D" stroke-width="2.5"/>`;
    } else if (id === "triceratops") {
      clue = `<polygon points="36,24 41,7 46,24" fill="#FEF3C7" stroke="#CA8A04" stroke-width="2"/>
              <polygon points="48,22 52,9 56,22" fill="#FEF3C7" stroke="#CA8A04" stroke-width="2"/>
              <polygon points="58,24 63,7 68,24" fill="#FEF3C7" stroke="#CA8A04" stroke-width="2"/>`;
    } else if (id === "brachiosaurus") {
      clue = `<path d="M46 36 L48 12 Q50 5 58 8 Q64 11 60 18 L56 36 Z" fill="#FB923C" stroke="#C2410C" stroke-width="2.5"/>
              <ellipse cx="66" cy="12" rx="7" ry="4" fill="#4ADE80"/>`;
    } else if (id === "stegosaurus") {
      clue = `<polygon points="33,28 40,10 47,26" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>
              <polygon points="46,25 53,7 60,25" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>
              <polygon points="58,28 66,12 70,29" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>`;
    } else if (id === "pterodactyl") {
      clue = `<path d="M26 44 L6 28 L14 52 Z" fill="#FACC15" stroke="#0284C7" stroke-width="2.5"/>
              <path d="M74 44 L94 28 L86 52 Z" fill="#FACC15" stroke="#0284C7" stroke-width="2.5"/>`;
    } else {
      clue = `<path d="M70 56 L88 50" stroke="#F97316" stroke-width="7" stroke-linecap="round"/>
              <circle cx="91" cy="49" r="8" fill="#84CC16" stroke="#4D7C0F" stroke-width="2"/>`;
    }
    return `<svg viewBox="0 0 104 88" aria-hidden="true">
      <ellipse cx="50" cy="76" rx="34" ry="8" fill="#D99B52"/>
      ${clue}
      <path d="M24 68 C23 42, 30 24, 50 24 C70 24, 77 42, 76 68 Q50 78 24 68 Z" fill="${p.egg}" stroke="${p.stroke}" stroke-width="3"/>
      <polyline points="27,44 38,36 49,45 61,35 73,44" fill="none" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="42" cy="58" r="5.5" fill="${p.dot}"/><circle cx="60" cy="56" r="5.5" fill="${p.dot}"/>
    </svg>`;
  }

  // Stage 2: 100% Hatched Full-Body Color-Matched Dinosaurs!
  if (id === "trex") {
    return `<svg viewBox="0 0 104 88" aria-hidden="true">
      <path d="M26 58 Q10 52 14 40 Q24 46 34 50 Z" fill="#22C55E"/>
      <ellipse cx="48" cy="54" rx="20" ry="22" fill="#22C55E" stroke="#15803D" stroke-width="2.5"/>
      <ellipse cx="52" cy="56" rx="11" ry="15" fill="#BBF7D0"/>
      <rect x="38" y="20" width="32" height="24" rx="11" fill="#22C55E" stroke="#15803D" stroke-width="2.5"/>
      <circle cx="58" cy="29" r="3.5" fill="#1E293B"/>
      <path d="M52 38 Q62 42 67 37" stroke="#15803D" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <rect x="62" y="48" width="10" height="5" rx="2.5" fill="#22C55E"/>
      <rect x="38" y="70" width="9" height="12" rx="4" fill="#16A34A"/>
      <rect x="53" y="70" width="9" height="12" rx="4" fill="#16A34A"/>
    </svg>`;
  }
  if (id === "triceratops") {
    return `<svg viewBox="0 0 108 88" aria-hidden="true">
      <circle cx="40" cy="34" r="20" fill="#818CF8" stroke="#4F46E5" stroke-width="2.5"/>
      <ellipse cx="62" cy="56" rx="24" ry="17" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5"/>
      <circle cx="36" cy="44" r="15" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5"/>
      <polygon points="27,34 20,20 33,30" fill="#FEF3C7" stroke="#CA8A04" stroke-width="1.8"/>
      <polygon points="39,32 37,17 45,30" fill="#FEF3C7" stroke="#CA8A04" stroke-width="1.8"/>
      <polygon points="22,45 13,40 23,49" fill="#FEF3C7" stroke="#CA8A04" stroke-width="1.8"/>
      <circle cx="33" cy="43" r="3.2" fill="#1E293B"/>
      <rect x="44" y="68" width="9" height="12" rx="4" fill="#0284C7"/>
      <rect x="68" y="68" width="9" height="12" rx="4" fill="#0284C7"/>
    </svg>`;
  }
  if (id === "brachiosaurus") {
    return `<svg viewBox="0 0 104 88" aria-hidden="true">
      <path d="M24 62 Q12 58 14 48" stroke="#FB923C" stroke-width="7" fill="none" stroke-linecap="round"/>
      <ellipse cx="46" cy="60" rx="22" ry="15" fill="#FB923C" stroke="#C2410C" stroke-width="2.5"/>
      <path d="M56 54 L62 18 Q64 10 74 13 Q80 16 76 24 L68 56 Z" fill="#FB923C" stroke="#C2410C" stroke-width="2.5"/>
      <circle cx="71" cy="17" r="2.8" fill="#1E293B"/>
      <ellipse cx="83" cy="20" rx="7" ry="4" fill="#22C55E"/>
      <rect x="32" y="70" width="9" height="12" rx="4" fill="#EA580C"/>
      <rect x="54" y="70" width="9" height="12" rx="4" fill="#EA580C"/>
    </svg>`;
  }
  if (id === "stegosaurus") {
    return `<svg viewBox="0 0 108 88" aria-hidden="true">
      <polygon points="36,36 43,20 50,35" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>
      <polygon points="50,34 58,17 66,34" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>
      <polygon points="65,37 74,23 79,40" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>
      <ellipse cx="58" cy="54" rx="25" ry="18" fill="#9333EA" stroke="#6B21A8" stroke-width="2.5"/>
      <circle cx="30" cy="52" r="12" fill="#9333EA" stroke="#6B21A8" stroke-width="2.5"/>
      <circle cx="27" cy="50" r="3" fill="#FFFFFF"/><circle cx="27" cy="50" r="1.6" fill="#1E293B"/>
      <rect x="42" y="68" width="9" height="12" rx="4" fill="#7E22CE"/>
      <rect x="66" y="68" width="9" height="12" rx="4" fill="#7E22CE"/>
    </svg>`;
  }
  if (id === "pterodactyl") {
    return `<svg viewBox="0 0 112 88" aria-hidden="true">
      <polygon points="44,46 8,24 18,58" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5"/>
      <polygon points="68,46 104,24 94,58" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5"/>
      <polygon points="44,48 16,34 22,55" fill="#60A5FA"/>
      <polygon points="68,48 96,34 90,55" fill="#60A5FA"/>
      <ellipse cx="56" cy="52" rx="14" ry="18" fill="#FDE047" stroke="#CA8A04" stroke-width="2.5"/>
      <polygon points="56,14 68,24 56,28" fill="#60A5FA"/>
      <circle cx="56" cy="30" r="12" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5"/>
      <circle cx="52" cy="28" r="2.6" fill="#1E293B"/><circle cx="60" cy="28" r="2.6" fill="#1E293B"/>
      <path d="M51 34 Q56 38 61 34" stroke="#92400E" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    </svg>`;
  }
  // ankylosaurus
  return `<svg viewBox="0 0 112 88" aria-hidden="true">
    <line x1="78" y1="56" x2="96" y2="48" stroke="#F97316" stroke-width="6" stroke-linecap="round"/>
    <circle cx="99" cy="47" r="7.5" fill="#84CC16" stroke="#4D7C0F" stroke-width="2"/>
    <path d="M34 58 C34 32, 80 32, 80 58 Z" fill="#84CC16" stroke="#4D7C0F" stroke-width="2.5"/>
    <circle cx="48" cy="44" r="4" fill="#BEF264"/><circle cx="60" cy="41" r="4.5" fill="#BEF264"/><circle cx="71" cy="46" r="4" fill="#BEF264"/>
    <ellipse cx="56" cy="60" rx="24" ry="11" fill="#F97316"/>
    <circle cx="29" cy="55" r="11" fill="#F97316" stroke="#C2410C" stroke-width="2.5"/>
    <circle cx="26" cy="53" r="2.8" fill="#1E293B"/>
    <rect x="40" y="67" width="9" height="12" rx="4" fill="#EA580C"/>
    <rect x="64" y="67" width="9" height="12" rx="4" fill="#EA580C"/>
  </svg>`;
}

/* ==========================================================================
   ZERO-LAG AUDIO ENGINE (Preloaded Gigi MP3s + Clean Fallback)
   ========================================================================== */
let audioCtx = null;
let voiceMode = "peppy"; // "peppy" | "calm" | "sfx"
let cachedVoices = [];
let preferredVoice = null;
let availableMp3Set = new Set();
let preloadedAudioMap = new Map();
let activeAudioEl = null;
let speechTimer = null;

function ensureAudioCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playToySfx(type = "chime") {
  try {
    ensureAudioCtx();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const note = (freq, start, dur, wave = "sine", vol = 0.15) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = wave;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(vol, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + dur + 0.02);
    };
    if (type === "pop" || type === "hatch") {
      note(523.25, now, 0.11, "triangle", 0.17);
      note(659.25, now + 0.07, 0.12, "triangle", 0.17);
      note(783.99, now + 0.14, 0.16, "sine", 0.19);
      if (type === "hatch") note(1046.5, now + 0.22, 0.28, "sine", 0.21);
    } else if (type === "wash" || type === "splash") {
      note(392.0, now, 0.10, "sine", 0.14);
      note(587.33, now + 0.08, 0.12, "sine", 0.15);
      note(880.0, now + 0.16, 0.22, "triangle", 0.17);
    } else if (type === "hoot") {
      note(440.0, now, 0.18, "sine", 0.15);
      note(392.0, now + 0.22, 0.26, "sine", 0.14);
    } else if (type === "horn") {
      note(349.23, now, 0.13, "triangle", 0.15);
      note(440.0, now + 0.14, 0.20, "triangle", 0.16);
    } else {
      note(587.33, now, 0.13, "sine", 0.15);
      note(880.0, now + 0.09, 0.20, "sine", 0.15);
    }
  } catch (_) {}
}

function selectKidFriendlyVoice() {
  if (!("speechSynthesis" in window)) return;
  cachedVoices = window.speechSynthesis.getVoices() || [];
  if (!cachedVoices.length) return;
  const enVoices = cachedVoices.filter(v => /^en(-|_)/i.test(v.lang));
  const pool = enVoices.length ? enVoices : cachedVoices;
  const blocked = /(david|mark|alex|daniel|fred|ralph|albert|bruce|grandpa|reed|rocko|espeak|zarvox|trinoids)/i;
  const priority = [
    /ana.*natural/i,
    /maisie.*natural/i,
    /aria.*natural/i,
    /jenny.*natural/i,
    /ava.*(premium|enhanced|natural)/i,
    /samantha/i,
    /chrome os us english/i,
    /google us english/i,
    /allison/i,
    /zoe/i
  ];
  const cleanPool = pool.filter(v => !blocked.test(v.name));
  const list = cleanPool.length ? cleanPool : pool;
  for (const rx of priority) {
    const found = list.find(v => rx.test(v.name));
    if (found) { preferredVoice = found; return; }
  }
  preferredVoice = list[0] || null;
}

if ("speechSynthesis" in window) {
  selectKidFriendlyVoice();
  window.speechSynthesis.onvoiceschanged = selectKidFriendlyVoice;
}

// Preload studio ElevenLabs Gigi MP3s if generated via Gigi Voice Studio
fetch("audio/manifest.json")
  .then(r => (r.ok ? r.json() : { files: [] }))
  .then(data => {
    if (data && Array.isArray(data.files) && data.files.length > 0) {
      data.files.forEach(fn => {
        availableMp3Set.add(fn);
        const a = new Audio(`audio/${fn}`);
        a.preload = "auto";
        preloadedAudioMap.set(fn, a);
      });
      const pill = document.getElementById("studioVoicePill");
      if (pill) pill.classList.add("ready");
    }
  })
  .catch(() => {});

function setBipTalkingState(isTalking) {
  const bipBtn = document.getElementById("bipBuddyBtn");
  if (bipBtn) bipBtn.classList.toggle("talking", isTalking);
}

function speakWithBip(clipId, text, sfxType = "chime") {
  const bubble = document.getElementById("bipSpeechBubble");
  if (bubble) bubble.textContent = text;

  playToySfx(sfxType);

  if (activeAudioEl) {
    activeAudioEl.pause();
    activeAudioEl.currentTime = 0;
    activeAudioEl = null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (speechTimer) clearTimeout(speechTimer);

  if (voiceMode === "sfx") {
    setBipTalkingState(true);
    speechTimer = setTimeout(() => setBipTalkingState(false), 600);
    return;
  }

  // Layer 1: Preloaded Studio ElevenLabs "Gigi" MP3 (Exact YouTube Voice, 0ms Lag!)
  const mp3File = `${clipId}.mp3`;
  if (availableMp3Set.has(mp3File)) {
    const audio = preloadedAudioMap.get(mp3File) || new Audio(`audio/${mp3File}`);
    activeAudioEl = audio;
    audio.currentTime = 0;
    audio.playbackRate = voiceMode === "calm" ? 0.92 : 1.0;
    setBipTalkingState(true);
    audio.onended = () => setBipTalkingState(false);
    audio.play().catch(() => setBipTalkingState(false));
    return;
  }

  // Layer 2: Instant Browser Voice Fallback (Natural Pitch so ChromeOS never sounds metallic)
  if ("speechSynthesis" in window) {
    if (!preferredVoice) selectKidFriendlyVoice();
    const utter = new SpeechSynthesisUtterance(text);
    if (preferredVoice) utter.voice = preferredVoice;
    utter.pitch = voiceMode === "peppy" ? 1.16 : 1.05;
    utter.rate = voiceMode === "peppy" ? 0.96 : 0.90;
    setBipTalkingState(true);
    utter.onend = () => setBipTalkingState(false);
    utter.onerror = () => setBipTalkingState(false);
    window.speechSynthesis.speak(utter);
    speechTimer = setTimeout(() => setBipTalkingState(false), 5500);
  }
}

/* ==========================================================================
   ILLUSTRATED SVG ENVIRONMENT BACKDROPS
   ========================================================================== */
function getEnvironmentSVG(sceneKey) {
  const scenes = {
    forest: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs><linearGradient id="skyF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#BCE7FD"/><stop offset="100%" stop-color="#E9F8E5"/></linearGradient></defs>
      <rect width="1000" height="500" fill="url(#skyF)"/>
      <circle cx="860" cy="88" r="52" fill="#FFE07D" opacity="0.9"/>
      <path d="M0 320 Q260 250 540 310 T1000 290 L1000 500 L0 500 Z" fill="#8ECF82"/>
      <path d="M0 375 Q320 330 680 380 T1000 360 L1000 500 L0 500 Z" fill="#63B462"/>
      <path d="M390 385 Q520 420 640 500 L470 500 Q420 435 350 390 Z" fill="#6BC5E8"/>
      <g fill="#3E8E53">
        <polygon points="110,120 45,335 175,335"/><polygon points="110,75 60,245 160,245"/>
        <polygon points="890,110 820,345 960,345"/><polygon points="890,65 838,240 942,240"/>
        <polygon points="735,135 680,320 790,320"/>
      </g>
      <rect x="100" y="335" width="20" height="42" fill="#7D5233"/>
      <rect x="880" y="345" width="22" height="42" fill="#7D5233"/>
    </svg>`,
    pond: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="1000" height="500" fill="#C9EEFF"/>
      <circle cx="150" cy="84" r="46" fill="#FFE27A"/>
      <path d="M0 255 Q280 215 560 250 T1000 240 L1000 500 L0 500 Z" fill="#8ED081"/>
      <ellipse cx="520" cy="365" rx="430" ry="125" fill="#4FB6E6"/>
      <ellipse cx="520" cy="365" rx="375" ry="98" fill="#6EC9F2"/>
      <ellipse cx="265" cy="375" rx="68" ry="26" fill="#5BBF62"/>
      <ellipse cx="730" cy="392" rx="62" ry="24" fill="#5BBF62"/>
    </svg>`,
    barn: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="1000" height="500" fill="#CBEBFF"/>
      <circle cx="850" cy="82" r="48" fill="#FFE074"/>
      <path d="M0 285 Q350 240 690 280 T1000 265 L1000 500 L0 500 Z" fill="#8AD16B"/>
      <polygon points="500,95 365,195 635,195" fill="#B6322B"/>
      <rect x="385" y="195" width="230" height="150" fill="#D9443B"/>
      <rect x="455" y="235" width="90" height="110" fill="#FFFFFF" opacity="0.92"/>
      <rect x="463" y="243" width="74" height="94" fill="#B6322B"/>
      <ellipse cx="770" cy="375" rx="54" ry="34" fill="#F2C14E"/>
    </svg>`,
    polar: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs><linearGradient id="polarSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9BD6FF"/><stop offset="100%" stop-color="#E9F7FF"/></linearGradient></defs>
      <rect width="1000" height="500" fill="url(#polarSky)"/>
      <polygon points="140,120 35,310 255,310" fill="#FFFFFF"/>
      <polygon points="820,105 690,310 940,310" fill="#F2FAFF"/>
      <rect x="0" y="305" width="1000" height="195" fill="#3B9AD9"/>
      <ellipse cx="265" cy="365" rx="145" ry="42" fill="#FFFFFF"/>
      <ellipse cx="565" cy="335" rx="155" ry="46" fill="#F5FBFF"/>
      <ellipse cx="805" cy="385" rx="130" ry="38" fill="#FFFFFF"/>
    </svg>`,
    ocean: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs><linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4CC3F7"/><stop offset="100%" stop-color="#176BA0"/></linearGradient></defs>
      <rect width="1000" height="500" fill="url(#seaG)"/>
      <path d="M0 410 Q280 375 560 410 T1000 395 L1000 500 L0 500 Z" fill="#F6D799"/>
      <path d="M110 430 Q95 340 130 325 Q150 365 165 430 Z" fill="#FF7F8A"/>
      <path d="M845 425 Q825 320 865 305 Q895 350 900 425 Z" fill="#FFA952"/>
    </svg>`,
    safari: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs><linearGradient id="safG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#FFE19C"/><stop offset="100%" stop-color="#FFF5D6"/></linearGradient></defs>
      <rect width="1000" height="500" fill="url(#safG)"/>
      <circle cx="840" cy="95" r="56" fill="#FFC552"/>
      <path d="M0 300 Q340 265 680 300 T1000 285 L1000 500 L0 500 Z" fill="#9ED670"/>
      <ellipse cx="555" cy="405" rx="225" ry="52" fill="#5CBCE8"/>
      <rect x="135" y="185" width="18" height="125" fill="#7D4E2D"/>
      <ellipse cx="145" cy="175" rx="95" ry="28" fill="#5BA347"/>
    </svg>`,
    desert: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="1000" height="500" fill="#FFE9B5"/>
      <circle cx="170" cy="92" r="52" fill="#FFBE47"/>
      <path d="M0 295 Q250 225 530 290 T1000 265 L1000 500 L0 500 Z" fill="#F2C06B"/>
      <path d="M0 365 Q360 315 710 370 T1000 350 L1000 500 L0 500 Z" fill="#E5AA50"/>
      <rect x="755" y="175" width="24" height="145" rx="12" fill="#549F52"/>
      <rect x="725" y="215" width="32" height="16" rx="8" fill="#549F52"/><rect x="725" y="190" width="16" height="36" rx="8" fill="#549F52"/>
      <rect x="777" y="205" width="32" height="16" rx="8" fill="#549F52"/><rect x="793" y="178" width="16" height="40" rx="8" fill="#549F52"/>
    </svg>`,
    vehicles: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="1000" height="500" fill="#D6F1FF"/>
      <rect x="85" y="55" width="830" height="340" rx="34" fill="#A9E0FA" stroke="#FFFFFF" stroke-width="8"/>
      <rect x="115" y="85" width="54" height="290" rx="26" fill="#4BA9E6"/>
      <rect x="831" y="85" width="54" height="290" rx="26" fill="#F26659"/>
      <rect x="0" y="380" width="1000" height="120" fill="#CBD5E1"/>
      <circle cx="230" cy="130" r="22" fill="#FFF" opacity="0.72"/><circle cx="760" cy="145" r="26" fill="#FFF" opacity="0.72"/>
    </svg>`,
    dinos: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="1000" height="350" fill="#FBF2DE"/>
      <rect x="620" y="0" width="380" height="350" fill="#C9E8F8"/>
      <rect x="55" y="45" width="165" height="210" rx="16" fill="#FFFDF7" stroke="#E5D5B5" stroke-width="10"/>
      <rect x="0" y="340" width="1000" height="160" fill="#D89D5B"/>
      <ellipse cx="500" cy="385" rx="370" ry="62" fill="#C9964C"/>
      <ellipse cx="500" cy="380" rx="340" ry="48" fill="#DFB067"/>
    </svg>`,
    abcs: `<svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <rect width="1000" height="330" fill="#FDF3DF"/>
      <rect x="0" y="325" width="1000" height="175" fill="#E2AD6B"/>
      <circle cx="900" cy="80" r="46" fill="#FFE082" opacity="0.7"/>
    </svg>`
  };
  return scenes[sceneKey] || scenes.forest;
}

/* ==========================================================================
   GAME STATE & RENDERING
   ========================================================================== */
let currentWorld = "animals";
let currentHabitat = "forest";
const discoveredSet = new Set();
const washedVehicles = new Set();
const dinoEggStage = {};

function updateStarsCounter(totalInScene, currentIds) {
  const found = currentIds.filter(id => discoveredSet.has(id)).length;
  const pill = document.getElementById("sceneStarsPill");
  if (pill) pill.textContent = `Scene Stars: ${found} / ${totalInScene} ⭐`;
}

function setMatchingEpisodeButton(epId, labelText) {
  const btn = document.getElementById("watchMatchingBtn");
  if (!btn) return;
  btn.onclick = () => loadEpisodeInTheater(epId, true);
  btn.innerHTML = `▶️ Watch ${labelText}`;
}

function renderGameStage() {
  const backdropEl = document.getElementById("dioramaBackdrop");
  const badgeEl = document.getElementById("sceneTitleBadge");
  const subBar = document.getElementById("subworldBar");
  const playfield = document.getElementById("dioramaPlayfield");

  document.querySelectorAll(".world-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.world === currentWorld);
  });

  if (currentWorld === "animals") {
    subBar.style.display = "flex";
    subBar.innerHTML = Object.entries(HABITATS).map(([key, h]) => `
      <button class="subworld-chip ${key === currentHabitat ? "active" : ""}" data-hab="${key}">${h.name}</button>
    `).join("");
    subBar.querySelectorAll(".subworld-chip").forEach(b => {
      b.onclick = () => {
        currentHabitat = b.dataset.hab;
        renderGameStage();
        const hab = HABITATS[currentHabitat];
        speakWithBip(hab.introId, hab.intro, "chime");
      };
    });

    const hab = HABITATS[currentHabitat];
    backdropEl.innerHTML = getEnvironmentSVG(currentHabitat);
    badgeEl.textContent = hab.name;
    setMatchingEpisodeButton(hab.episodeId, "Habitat Episode");
    updateStarsCounter(hab.items.length, hab.items.map(i => i.id));

    playfield.innerHTML = `<div class="hotspot-stage">${hab.items.map(item => {
      const visual = item.svgKey
        ? `<span class="actor-svg-wrap">${renderSpecialIconSVG(item.svgKey)}</span>`
        : `<span class="actor-emoji">${item.emoji}</span>`;
      return `<button class="env-actor ${discoveredSet.has(item.id) ? "discovered" : ""}"
              style="left:${item.x}%; top:${item.y}%;" data-id="${item.id}">
        <span class="actor-star">⭐</span>
        ${visual}
        <span class="actor-label">${item.label}</span>
      </button>`;
    }).join("")}</div>`;

    playfield.querySelectorAll(".env-actor").forEach(el => {
      el.onclick = () => {
        const item = hab.items.find(i => i.id === el.dataset.id);
        discoveredSet.add(item.id);
        el.classList.remove("speaking-pop");
        void el.offsetWidth;
        el.classList.add("discovered", "speaking-pop");
        updateStarsCounter(hab.items.length, hab.items.map(i => i.id));
        speakWithBip(item.id, item.line, item.sfx);
      };
    });

  } else if (currentWorld === "vehicles") {
    subBar.style.display = "flex";
    subBar.innerHTML = `<button class="subworld-chip active" id="resetMudBtn">🔄 Splash Mud Again!</button>`;
    document.getElementById("resetMudBtn").onclick = () => {
      washedVehicles.clear();
      renderGameStage();
      speakWithBip("mud-reset", SYSTEM_LINES["mud-reset"], "splash");
    };

    backdropEl.innerHTML = getEnvironmentSVG("vehicles");
    badgeEl.textContent = "🧼 Bip's Magic Car Wash Bay";
    setMatchingEpisodeButton("g6gomczRjYw", "Car Wash Episode");
    updateStarsCounter(VEHICLES.length, VEHICLES.map(v => v.id));

    playfield.innerHTML = `<div class="hotspot-stage">${VEHICLES.map(v => {
      const clean = washedVehicles.has(v.id);
      return `<button class="env-actor ${clean ? "is-clean discovered" : "is-muddy"}"
                      style="left:${v.x}%; top:${v.y}%;" data-id="${v.id}">
        <span class="actor-star">⭐</span>
        <span class="actor-svg-wrap">${renderVehicleSVG(v.id, clean)}</span>
        <span class="actor-label">${v.label}</span>
      </button>`;
    }).join("")}</div>`;

    playfield.querySelectorAll(".env-actor").forEach(el => {
      el.onclick = () => {
        const v = VEHICLES.find(x => x.id === el.dataset.id);
        washedVehicles.add(v.id);
        discoveredSet.add(v.id);
        renderGameStage();
        speakWithBip(v.id, v.line, "wash");
      };
    });

  } else if (currentWorld === "dinos") {
    subBar.style.display = "flex";
    subBar.innerHTML = `<button class="subworld-chip active" id="resetEggsBtn">🥚 Close All Mystery Eggs!</button>`;
    document.getElementById("resetEggsBtn").onclick = () => {
      Object.keys(dinoEggStage).forEach(k => delete dinoEggStage[k]);
      renderGameStage();
      speakWithBip("eggs-reset", SYSTEM_LINES["eggs-reset"], "pop");
    };

    backdropEl.innerHTML = getEnvironmentSVG("dinos");
    badgeEl.textContent = "🥚 Sunlit Dinosaur Mystery Nest";
    setMatchingEpisodeButton("LCwZiT2EIik", "Dino Eggs Episode");
    updateStarsCounter(DINO_EGGS.length, DINO_EGGS.map(d => d.id));

    playfield.innerHTML = `<div class="hotspot-stage">${DINO_EGGS.map(d => {
      const st = dinoEggStage[d.id] || 0;
      const lbl = st === 0 ? d.eggLabel : (st === 1 ? d.clueLabel : d.dinoLabel);
      const tag = st === 0 ? "Tap to Crack!" : (st === 1 ? "Peek! Tap to Hatch" : "Hatched! 🎉");
      return `<button class="env-actor ${st === 2 ? "discovered" : ""}"
                      style="left:${d.x}%; top:${d.y}%;" data-id="${d.id}">
        <span class="actor-star">⭐</span>
        <span class="actor-svg-wrap">${renderDinoStageSVG(d.id, st)}</span>
        <span class="actor-label">${lbl}</span>
        <span class="actor-state-tag">${tag}</span>
      </button>`;
    }).join("")}</div>`;

    playfield.querySelectorAll(".env-actor").forEach(el => {
      el.onclick = () => {
        const d = DINO_EGGS.find(x => x.id === el.dataset.id);
        const cur = dinoEggStage[d.id] || 0;
        if (cur === 0) {
          dinoEggStage[d.id] = 1;
          speakWithBip(`${d.id}-clue`, d.clueLine, "pop");
        } else {
          dinoEggStage[d.id] = 2;
          discoveredSet.add(d.id);
          speakWithBip(d.id, d.hatchLine, "hatch");
        }
        renderGameStage();
      };
    });

  } else if (currentWorld === "abcs") {
    subBar.style.display = "none";
    backdropEl.innerHTML = getEnvironmentSVG("abcs");
    badgeEl.textContent = "🔤 Sunlit Playroom Wooden ABC Blocks";
    setMatchingEpisodeButton("sDwtEwIJ6zs", "12-Min A–Z Episode");
    updateStarsCounter(ABC_ITEMS.length, ABC_ITEMS.map(a => `abc-${a.letter}`));

    playfield.innerHTML = `<div class="abc-playroom-grid">${ABC_ITEMS.map(a => {
      const visual = a.svgKey ? renderSpecialIconSVG(a.svgKey) : a.icon;
      return `<button class="abc-block" data-letter="${a.letter}">
        <span class="abc-letters">${a.letter}${a.letter.toLowerCase()}</span>
        <span class="abc-icon">${visual}</span>
        <span class="abc-word">${a.word}</span>
      </button>`;
    }).join("")}</div>`;

    playfield.querySelectorAll(".abc-block").forEach(btn => {
      btn.onclick = () => {
        const item = ABC_ITEMS.find(x => x.letter === btn.dataset.letter);
        discoveredSet.add(`abc-${item.letter}`);
        updateStarsCounter(ABC_ITEMS.length, ABC_ITEMS.map(a => `abc-${a.letter}`));
        speakWithBip(`letter-${item.letter.toLowerCase()}`, item.line, "chime");
      };
    });
  }
}

/* ==========================================================================
   YOUTUBE EPISODE THEATER & PAGE INTERACTIONS
   ========================================================================== */
function loadEpisodeInTheater(videoId, scrollIntoView = false) {
  const iframe = document.getElementById("ytMainIframe");
  const titleEl = document.getElementById("ytNowPlayingTitle");
  const ep = EPISODES.find(e => e.id === videoId) || EPISODES[0];
  if (iframe) iframe.src = `https://www.youtube-nocookie.com/embed/${ep.id}?rel=0&modestbranding=1`;
  if (titleEl) titleEl.textContent = ep.title;
  document.querySelectorAll(".episode-row-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.vid === ep.id);
  });
  if (scrollIntoView) document.getElementById("watch")?.scrollIntoView({ behavior: "smooth" });
}

function initPage() {
  document.querySelectorAll(".world-tab").forEach(tab => {
    tab.onclick = () => {
      currentWorld = tab.dataset.world;
      renderGameStage();
      speakWithBip(`world-${currentWorld}`, SYSTEM_LINES[`world-${currentWorld}`], "chime");
    };
  });

  const bipBtn = document.getElementById("bipBuddyBtn");
  if (bipBtn) {
    bipBtn.onclick = () => speakWithBip("bip-hello", SYSTEM_LINES["bip-hello"], "hatch");
  }

  const voiceSelect = document.getElementById("voiceModeSelect");
  if (voiceSelect) {
    voiceSelect.onchange = e => {
      voiceMode = e.target.value;
      speakWithBip("voice-check", SYSTEM_LINES["voice-check"], "pop");
    };
  }

  const nightBtn = document.getElementById("nightModeBtn");
  if (nightBtn) {
    nightBtn.onclick = () => {
      const isNight = document.body.classList.toggle("night-mode");
      nightBtn.textContent = isNight ? "☀️ Sunny Day" : "🌙 Cozy Evening";
    };
  }

  const stack = document.getElementById("episodePlaylistStack");
  if (stack) {
    stack.innerHTML = EPISODES.map((ep, idx) => `
      <button class="episode-row-btn ${idx === 0 ? "active" : ""}" data-vid="${ep.id}">
        <span class="ep-badge-icon">${ep.icon}</span>
        <div>
          <div class="ep-meta-title">${ep.title}</div>
          <div class="ep-meta-sub">${ep.meta}</div>
        </div>
      </button>
    `).join("");
    stack.querySelectorAll(".episode-row-btn").forEach(b => {
      b.onclick = () => loadEpisodeInTheater(b.dataset.vid, false);
    });
  }

  const pdfBtn = document.getElementById("downloadColoringBtn");
  const toast = document.getElementById("reciprocityToast");
  const closeToast = document.getElementById("closeToastBtn");
  if (pdfBtn && toast) {
    pdfBtn.addEventListener("click", () => setTimeout(() => toast.classList.add("visible"), 600));
  }
  if (closeToast && toast) {
    closeToast.onclick = () => toast.classList.remove("visible");
  }

  renderGameStage();
}

document.addEventListener("DOMContentLoaded", initPage);
