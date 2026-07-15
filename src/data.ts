/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Destination, Tour, TravelerStory, ExpeditionAlert } from "./types";

// DESTINATIONS IMAGES
import Destination1 from "../src/assets/images/destination_pic1.jpg";
import Destination2 from "../src/assets/images/destination_pic3.jpg";
import Destination3 from "../src/assets/images/destination_pic4.jpg";
import Destination4 from "../src/assets/images/destination_pic2.jpg";
import Destination5 from "../src/assets/images/destination_pic5.jpg";
import Destination6 from "../src/assets/images/destination_pic6.jpg";
import Destination7 from "../src/assets/images/destination_pic7.jpg";
import Destination8 from "../src/assets/images/destination_pic8.jpg";

// Let's use our generated premium images for destinations
export const DESTINATIONS: Destination[] = [
  {
    id: "hunza",
    name: "Hunza Valley",
    tag: "The Shangri-La of the Karakoram",
    description:
      "A land of emerald terraces, towering peaks, and legends of eternal youth. Framed by Passu Cones and Rakaposhi, Hunza offers the ultimate blend of high-altitude adventure, deep local hospitality, and striking turquoise waters.",
    elevation: "2,438 m (8,000 ft)",
    bestSeason: "Spring Blossom (Apr) / Autumn Foliage (Oct)",
    coordinates: "36.3167° N, 74.6500° E",
    coverImage: Destination1,
    // coverImage: '/src/assets/images/hero_mountain_1784037773882.jpg',
    // coverImage: 'https://www.trips.pk/main-root/transferImages/hunza%20valley.jpg',
    highlights: [
      "Altit & Baltit Ancient Forts",
      "Eagle's Nest Panoramic Sunset",
      "Attabad Turquoise Lake Boating",
      "Hussaini Suspension Bridge crossing",
    ],
    adventureTier: "Medium - Exploration",
  },
  {
    id: "fairy-meadows",
    name: "Fairy Meadows",
    tag: "The Amphitheater of Nanga Parbat",
    description:
      "An alpine meadow tucked high beneath the chilling, monumental north face of Nanga Parbat (the Killer Mountain, 8,126m). Reachable via a thrilling jeep ride and pine-scented hike, it offers unmatched tranquility and wood-cabin vibes.",
    elevation: "3,300 m (10,826 ft)",
    bestSeason: "June to September",
    coordinates: "35.3853° N, 74.5828° E",
    coverImage: Destination2,
    // coverImage: '/src/assets/images/fairy_meadows_1784037808880.jpg',
    // coverImage: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Nanga_Parbat_The_Killer_Mountain.jpg',
    highlights: [
      "Raikot Bridge 4x4 Jeep Track",
      "Trek to Beyal Camp & Base Camp",
      "Alpine Cabin stargazing",
      "Reflection of Nanga Parbat in mystical pools",
    ],
    adventureTier: "High - Trekking & Alpine Camping",
  },
  {
    id: "deosai",
    name: "Deosai Plains",
    tag: "The Land of the Giants",
    description:
      "The world's second-highest alpine plateau. A massive, windswept wilderness carpeted in wildflowers during summer, inhabited by the rare Himalayan Brown Bear, and sitting directly beneath a dome of infinite stars.",
    elevation: "4,114 m (13,497 ft)",
    bestSeason: "July and August",
    coordinates: "34.9961° N, 75.4744° E",
    coverImage: Destination3,
    // coverImage: '/src/assets/images/camping_deosai_1784037793474.jpg',
    // coverImage: 'https://guidetourismpakistan.com/wp-content/uploads/2024/01/Deosai-plains-17.jpeg',
    highlights: [
      "Sheosar High-Altitude Lake",
      "Bara Pani stream crossing",
      "Milky Way Astrophotography",
      "Himalayan Brown Bear safari",
    ],
    adventureTier: "Very High - Wilderness Survival & Camping",
  },
  {
    id: "skardu",
    name: "Skardu Baltistan",
    tag: "Gateway to the Great Karakoram & K2",
    description:
      "The capital of high-altitude mountaineering. Surrounded by barren gray giants, cold desert sand dunes, and tranquil lakes, Skardu is the starting point for some of the world's most grueling mountain expeditions.",
    elevation: "2,230 m (7,316 ft)",
    bestSeason: "May to September",
    coordinates: "35.2981° N, 75.6347° E",
    coverImage: Destination4,
    // coverImage: '/src/assets/images/road_trip_karakoram_1784037823241.jpg',
    // coverImage: 'https://wallpaperaccess.com/full/9806206.jpg',
    highlights: [
      "Shangrila Resort & Kachura Lakes",
      "Katpana Cold Desert Sand Dunes",
      "Shigar Valley & restored Fort",
      "Manthal ancient Buddha rock carvings",
    ],
    adventureTier: "Medium - Cultural Road Trip",
  },
  {
    id: "naran-kaghan",
    name: "Naran Kaghan",
    tag: "The Fairyland of Lake Saif-ul-Muluk",
    description:
      "A lush green valley carved by the raging Kunhar River. Best known for the legendary Lake Saif-ul-Muluk, where fairies are said to descend, Naran is an active outdoor playground for white-water rafting and alpine hikes.",
    elevation: "2,409 m (7,903 ft)",
    bestSeason: "May to October",
    coordinates: "34.9085° N, 73.6521° E",
    coverImage: Destination5,
    // coverImage: 'https://images.unsplash.com/photo-1572482520019-159781d56ae9?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFyYW4lMjBrYWdoYW58ZW58MHx8MHx8fDA%3D',
    highlights: [
      "Lake Saif-ul-Muluk boat expedition",
      "White-Water Rafting on Kunhar River",
      "Siri Paye cloud meadows trek",
      "Babusar Pass viewpoint (4,173m)",
    ],
    adventureTier: "Light - Active Recreation",
  },
  {
    id: "swat",
    name: "Swat Valley",
    tag: "The Switzerland of the East",
    description:
      "A stunning valley of roaring blue rivers, thick pine forests, and rich historical heritage. Home to the Malam Jabba ski resort, pristine alpine lakes like Mahodand, and deep archaeological ties to the Gandhara civilization.",
    elevation: "980 m (3,215 ft)",
    bestSeason: "Year-Round (Skiing in Jan, Trekking in Jun)",
    coordinates: "35.2227° N, 72.4258° E",
    coverImage: Destination6,
    // coverImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      "Malam Jabba Ski Resort & Ziplining",
      "Kalam Valley & Ushu Pine Forest",
      "Mahodand Glacier Lake expedition",
      "Swat River trout fishing & camping",
    ],
    adventureTier: "Light to Medium - Dual Season Adventure",
  },
  {
    id: "shogran",
    name: "Shogran",
    tag: "Meadows Floating in the Clouds",
    description:
      "A beautiful mountain plateau sitting high above the Kaghan Valley. Accessible via a steep, winding road, Shogran is enveloped in dense pine forests and offers a base to hike into the ethereal Siri Paye cloud meadows.",
    elevation: "2,362 m (7,749 ft)",
    bestSeason: "March to November",
    coordinates: "34.6295° N, 73.4619° E",
    coverImage: Destination7,
    // coverImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      "Siri Paye Meadows horse ride",
      "Hiking up to Siri Ridge",
      "Sunset over the Pine Forest",
      "Over-the-clouds photography sessions",
    ],
    adventureTier: "Light - Relaxed Mountain Getaway",
  },
  {
    id: "khunjerab",
    name: "Khunjerab Pass",
    tag: "The Roof of the Highway",
    description:
      "The highest paved international border crossing in the world at 4,693m, linking Pakistan with China. Flanked by deep winter snows and Karakoram National Park, it is a testament to engineering and extreme altitude.",
    elevation: "4,693 m (15,397 ft)",
    bestSeason: "May to October",
    coordinates: "36.8521° N, 75.4182° E",
    coverImage: Destination8,
    // coverImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      "Pakistan-China Friendship Arch",
      "World's Highest ATM transaction",
      "Karakoram National Park Yak spotting",
      "Surreal altitude snowfields and glaciers",
    ],
    adventureTier: "Medium - Alpine Road Odyssey",
  },
];

export const TOURS: Tour[] = [
  {
    id: "fairy-basecamp",
    title: "Fairy Meadows & Nanga Parbat Basecamp Odyssey",
    category: "Hiking Expeditions",
    destinationId: "fairy-meadows",
    durationDays: 4,
    groupSize: "12 - 16 Travelers",
    difficulty: "Challenging",
    costPKR: 48000,
    costUSD: 175,
    departureFrom: "Islamabad F-7 Departure Hub",
    isPopular: true,
    // coverImage: '/src/assets/images/fairy_meadows_1784037808880.jpg',
    coverImage:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Nanga_Parbat_The_Killer_Mountain.jpg",
    highlights: [
      "Trek to Beyal Camp & Nanga Parbat Viewpoint",
      "Thrilling 4x4 Raikot Jeep Track ride",
      "Two nights in cozy alpine pine log cabins",
      "Summit-vibe bonfire, local music & slow roasted BBQ",
    ],
    rating: 4.9,
    reviewCount: 142,
    slotsLeft: 5,
    itinerary: [
      {
        dayNumber: 1,
        title: "Islamabad to Chilas via Babusar Pass",
        description:
          "Meet at 4:00 AM at the Islamabad F-7 Hub. Board our private Coaster. Drive through the Hazara Motorway, climbing up Kaghan Valley. Cross Babusar Pass (4,173m) with breathtaking views of the Himalayas. Descend to Chilas along the Indus River. Welcome dinner and trip briefing.",
        activity: "High-Altitude Alpine Drive",
        sleepPoint: "Chilas Riverside Cliff Lodge",
        elevationChange: "From 540m (ISB) to 1,265m (Chilas)",
      },
      {
        dayNumber: 2,
        title: "The Infamous Raikot Jeep Ride & Trek to Fairy Meadows",
        description:
          "Drive to Raikot Bridge on the KKH. Shift into open-air 4x4 Jeeps for a heart-pounding 1.5-hour ride on the edge of Raikot Gorge. Arrive at Tato Village. Strap on backpacks and embark on a 3-hour trek winding up pine forests. Catch first sights of Nanga Parbat glowing in evening light. Log cabin bonfire under the mountain star-dome.",
        activity: "4x4 Off-roading & Alpine Forest Trekking",
        sleepPoint: "Green Alpine Log Cabins, Fairy Meadows",
        elevationChange: "Climb to 3,300m (Fairy Meadows)",
      },
      {
        dayNumber: 3,
        title: "Nanga Parbat Basecamp Trek (Beyal & Viewpoint)",
        description:
          "Wake up early to catch Nanga Parbat reflecting in the silent meadows pool. Trek 4 hours through Beyal Camp, navigating giant boulder fields and pine clearings to reach the Nanga Parbat Basecamp Viewpoint. Stand in awe of massive hanging glaciers and vertical snow faces. Trek back for a celebratory bonfire with local Hunza salt-tea and BBQ.",
        activity: "Glacier & Basecamp Trek (8-10 km)",
        sleepPoint: "Green Alpine Log Cabins, Fairy Meadows",
        elevationChange: "Max Altitude reached 3,900m at Beyal Viewpoint",
      },
      {
        dayNumber: 4,
        title: "Descent & Return Journey to Islamabad",
        description:
          "Trek down to Tato Village. Take jeeps back down to Raikot Bridge. Join our private coach and head back to Islamabad. Stop for a celebratory trout-fish dinner in Swat/Naran bypass. Arrive back at F-7 Islamabad Hub by midnight.",
        activity: "Descent & Return Highway Run",
        sleepPoint: "Home / Islamabad",
        elevationChange: "Descend to 540m (ISB)",
      },
    ],
  },
  {
    id: "deosai-milkyway",
    title: "Deosai Plains Camping & Milky Way Astrophotography",
    category: "Camping Tours",
    destinationId: "deosai",
    durationDays: 5,
    groupSize: "10 - 12 Travelers",
    difficulty: "Challenging",
    costPKR: 58000,
    costUSD: 210,
    departureFrom: "Islamabad F-7 Departure Hub",
    isPopular: true,
    // coverImage: '/src/assets/images/camping_deosai_1784037793474.jpg',
    coverImage:
      "https://guidetourismpakistan.com/wp-content/uploads/2024/01/Deosai-plains-17.jpeg",
    highlights: [
      "Wild camp under the Milky Way at Sheosar Lake (4,114m)",
      "Astro-photography workshop with professional guide",
      "Himalayan Brown Bear safari at Bara Pani stream",
      "Explore Katpana Cold Desert and Shigar Valley Fort",
    ],
    rating: 4.8,
    reviewCount: 94,
    slotsLeft: 3,
    itinerary: [
      {
        dayNumber: 1,
        title: "Islamabad to Skardu Mountain Run",
        description:
          "Depart Islamabad at 3:30 AM. Fly over K2 (weather permitting) or take the epic Jaglot-Skardu road carving through Karakoram gorges. Arrive in Skardu. Explore the pristine Shangrila Resort Lake and take a late-afternoon hike across the high Katpana Cold Desert sand dunes under a golden mountain sunset.",
        activity: "Scenic Fly/Drive & Desert Sunset Walk",
        sleepPoint: "Basecamp Shigar Guesthouse",
        elevationChange: "Climb to 2,230m (Skardu)",
      },
      {
        dayNumber: 2,
        title: "Journey to the Roof of the World - Deosai Camping",
        description:
          "Board our rugged 4x4 land cruisers. Climb up the steep Skardu-Deosai gorge. Arrive at the breathtaking Sheosar High-Altitude Lake (4,114m). Set up our premium weather-proof expedition camps. Warm up with rich local soups. As darkness falls, witness the sheer clarity of the Milky Way galaxy stretching across the deep space sky. Astrophotography training session.",
        activity: "High-Altitude 4x4 Climb & Camp Setup",
        sleepPoint: "Expedition Tents, Sheosar Lake (Deosai)",
        elevationChange: "Ascend to 4,114m (Sheosar Lake)",
      },
      {
        dayNumber: 3,
        title: "Brown Bear Spotting & Bara Pani Expedition",
        description:
          "Witness a brilliant freezing-cold sunrise over Sheosar Lake. Traverse the endless plains, crossing the freezing currents of Bara Pani stream. Accompany local wildlife rangers to spot the endangered Himalayan Brown Bears foraging in the expansive high meadows. Cozy camp night with hot cocoa and acoustic guitar sing-alongs.",
        activity: "Bear Tracking & Wilderness Traverse",
        sleepPoint: "Expedition Tents, Bara Pani (Deosai)",
        elevationChange: "4,150m average elevation",
      },
      {
        dayNumber: 4,
        title: "Return to Shigar Valley & Warm Lodges",
        description:
          "Pack up basecamp, leaving no trace behind. Descend into Shigar Valley. Visit the majestic, 400-year-old Shigar Fort, restored meticulously by AKTC. Relish a premium local Balti dinner of dried-fruit mutton inside the historical fort orchards. Warm, cozy beds to recover from high-altitude camping.",
        activity: "Descent & Historical Exploration",
        sleepPoint: "Shigar Heritage Lodge",
        elevationChange: "Descend to 2,230m (Shigar)",
      },
      {
        dayNumber: 5,
        title: "Skardu back to Islamabad Departure",
        description:
          "Board morning flight or drive back through the Karakoram Highway bypass. Reach Islamabad with high spirits, filled with starry memories and a heart connected to the ancient giants.",
        activity: "Highway Return / Flight",
        sleepPoint: "Home / Islamabad",
        elevationChange: "Descend to 540m (ISB)",
      },
    ],
  },
  {
    id: "hunza-roadtrip",
    title: "Karakoram Highway & Hunza Ultimate Road Odyssey",
    category: "Student Trips",
    destinationId: "hunza",
    durationDays: 6,
    groupSize: "16 - 22 Travelers",
    difficulty: "Moderate",
    costPKR: 35000,
    costUSD: 130,
    departureFrom: "Islamabad F-7 Departure Hub",
    isPopular: false,
    // coverImage: '/src/assets/images/road_trip_karakoram_1784037823241.jpg',
    coverImage:
      "https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5b155bed5711a8176e9f9783/5c078486bdf6900014c6c8d8/files/pakistan-passu-hunza-gilgit-karakoram-travel-photo-20181204145540920-main-image.jpg",

    highlights: [
      "Travel the epic Karakoram Highway (KKH) in a classic caravan",
      "Sunset at Eagle's Nest overlooking Rakaposhi & Ladyfinger Peak",
      "Turquoise waters boating at Attabad Lake & Hussaini Bridge",
      "Full student-group bonfires, music, and local Hunza food",
    ],
    rating: 4.7,
    reviewCount: 310,
    slotsLeft: 12,
    itinerary: [
      {
        dayNumber: 1,
        title: "Islamabad to Naran/Chilas Highway Adventure",
        description:
          "Board the student caravan in Islamabad. Head out through Abbottabad and climb the spectacular mountain pass. Interactive games and ice-breaking inside the coaster. Cross Babusar Pass (4,173m) with full-scale music vibes. Arrive at Chilas riverside. Bonfire and traditional Pakhtun chicken Karahi.",
        activity: "Group Road Trip & Alpine Icebreakers",
        sleepPoint: "KKH Highway Inn, Chilas",
        elevationChange: "Climb to 1,265m",
      },
      {
        dayNumber: 2,
        title: "Arrival in Hunza & Eagle's Nest Sunset",
        description:
          "Drive on the KKH along the roaring Indus and Hunza Rivers. Stop at the Junction Point of Three Great Mountain Ranges (Himalayas, Karakoram, Hindu Kush). Catch stunning views of Rakaposhi Peak (7,788m) towering over the highway. Reach Karimabad, Hunza. Drive up to Eagle's Nest (Duikar) for a cosmic sunset over 7 snowy peaks.",
        activity: "Mountain Junction Stop & Golden Sunset Hike",
        sleepPoint: "Eagle Peak View Guesthouse, Karimabad",
        elevationChange: "Ascend to 2,438m (Karimabad)",
      },
      {
        dayNumber: 3,
        title: "Attabad Lake Boating & Passu Cones Exploration",
        description:
          "Explore the 1000-year-old Baltit Fort. Drive through the historic Ghalapan tunnels to the majestic Attabad Turquoise Lake. Board high-speed motorboats slicing through deep glacial waters. Visit the iconic Hussaini Suspension Bridge—walk across if you dare! Group photography under the soaring, sharp needles of Passu Cones.",
        activity: "Turquoise Boating & Bridge Crossing Adventure",
        sleepPoint: "Karimabad Riverside Tents / Lodges",
        elevationChange: "2,400m elevation",
      },
      {
        dayNumber: 4,
        title: "The Climb to Khunjerab Pass (China Border)",
        description:
          "Embark on a high-altitude drive towards Khunjerab Pass (4,693m). Traverse through the cinematic tunnels of Sost. Witness the landscape shift from green valleys to extreme, snow-swept mountain peaks. Touch the frozen borders of China, take group photos at the monumental Arch, and use the World's Highest ATM. Celebrate with steaming local organic noodle soups.",
        activity: "High-Altitude Border Conquest",
        sleepPoint: "Karimabad Riverside Tents / Lodges",
        elevationChange: "Touch 4,693m (Khunjerab) and back to 2,438m",
      },
      {
        dayNumber: 5,
        title: "Altitudes Descending: Hunza to Chilas Cliffside",
        description:
          "Spend morning shopping at the local Karimabad gemstone bazaar (buy lapis lazuli and dry cherries). Engage in local discussions at Cafe de Hunza with delicious walnut cakes. Board coasters to descend back to Chilas. Midnight stargazing session by the rocky Indus.",
        activity: "Gemstone Bazaar Shopping & Descent Drive",
        sleepPoint: "Riverside Resort, Chilas",
        elevationChange: "Descend to 1,265m",
      },
      {
        dayNumber: 6,
        title: "Chilas back to Islamabad Hub",
        description:
          "Final long-drive back through Babusar Pass or Besham. Wrap up the journey with a heart-warming group session sharing stories and contact cards. Reach Islamabad Hub by 11:00 PM with life-long bonds formed.",
        activity: "Final Highway Sprint & Group Hug",
        sleepPoint: "Home / Islamabad",
        elevationChange: "Descend to 540m (ISB)",
      },
    ],
  },
  {
    id: "swat-ski-adventure",
    title: "Malam Jabba Skiing & Kalam Wilderness Expedition",
    category: "Adventure Tours",
    destinationId: "swat",
    durationDays: 4,
    groupSize: "14 - 18 Travelers",
    difficulty: "Moderate",
    costPKR: 32000,
    costUSD: 115,
    departureFrom: "Islamabad F-7 Departure Hub",
    isPopular: false,
    coverImage:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Learn skiing or snowboarding at Malam Jabba Ski Resort",
      "Off-road 4x4 Jeep safari to Ushu Forest and Mahodand Lake",
      "Cozy bonfire nights with traditional Swat valley trout fish BBQ",
      "Scenic chairlift rides floating above frosted pine valleys",
    ],
    rating: 4.6,
    reviewCount: 78,
    slotsLeft: 8,
    itinerary: [
      {
        dayNumber: 1,
        title: "Islamabad to Malam Jabba Snowy Slopes",
        description:
          "Depart Islamabad at 6:00 AM via Swat Motorway. Drive up the winding mountain pass surrounded by terraced citrus orchards. Arrive in Malam Jabba (2,804m). Get fitted for skis/snowboards. Professional ski instructors guide our first sliding lessons on the soft snow slopes. Sunset hot coffee at the slope-side cafe.",
        activity: "Travel & First Skiing Class",
        sleepPoint: "Malam Jabba Snow Chalet",
        elevationChange: "Climb to 2,804m (Malam Jabba)",
      },
      {
        dayNumber: 2,
        title: "Malam Jabba Chairlift & kalam Valley Run",
        description:
          "Board the scenic Malam Jabba Chairlift, gliding high above frosted pine tree-tops. Try the thrilling 1km dual zipline slicing through the mountain winds. After lunch, pack up and drive down Swat River to Kalam Valley. Explore Kalam bazaar, enjoy traditional local spinach (saag) and hot cornbread dinner.",
        activity: "Chairlift Gliding, Ziplining & Kalam Drive",
        sleepPoint: "Kalam Forest Wood Inn",
        elevationChange: "Descend to 2,000m (Kalam Valley)",
      },
      {
        dayNumber: 3,
        title: "Ushu Pine Forest & Mahodand Lake Jeep Odyssey",
        description:
          "Shift into open-top local 4x4 jeeps. Blast through the freezing mud and snowy banks of Ushu Forest. Stand beneath colossal, ancient cedar pine trees. Drive further up to the half-frozen Mahodand Lake. Walk along roaring glacier rivers, enjoy hot tea brewed on firewood, and row a wooden boat. Head back to Kalam for a huge traditional Swat trout barbecue.",
        activity: "4x4 Wild Jeep Safari & Glacier Lake Boating",
        sleepPoint: "Kalam Forest Wood Inn",
        elevationChange: "Ascend to 2,900m (Mahodand Lake)",
      },
      {
        dayNumber: 4,
        title: "Return to Islamabad via Buddhist Heritage Sites",
        description:
          "Depart Kalam. Stop near Barikot to explore the ancient 2000-year-old Buddhist stupas and ruins of Gandhara. Learn about the peaceful historical roots of the valley. Head back on Swat Motorway, arriving at Islamabad Hub by 8:00 PM.",
        activity: "Cultural Exploration & Highway Run",
        sleepPoint: "Home / Islamabad",
        elevationChange: "Descend to 540m (ISB)",
      },
    ],
  },
  {
    id: "deosai-photo-expedition",
    title: "Northern Landscape & Cultural Photography Quest",
    category: "Photography Tours",
    destinationId: "skardu",
    durationDays: 5,
    groupSize: "8 - 10 Travelers",
    difficulty: "Easy",
    costPKR: 62000,
    costUSD: 225,
    departureFrom: "Islamabad F-7 Departure Hub",
    isPopular: false,
    coverImage:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Led by award-winning Pakistani landscape photographers",
      "In-the-field golden-hour, blue-hour, and ND filter workshops",
      "Capture portrait stories of historical Balti tribesmen in Shigar",
      "Drone permission guidance & high-end landscape portfolios",
    ],
    rating: 4.9,
    reviewCount: 52,
    slotsLeft: 4,
    itinerary: [
      {
        dayNumber: 1,
        title: "Islamabad to Skardu Golden Hour Shoot",
        description:
          "Meet at 4:00 AM in Islamabad. Catch the scenic flight to Skardu or the classic highway run. Arrive in Skardu. Our mentors provide a pre-trip portfolio check. Capture the surreal blue-hour reflection of the Karakoram giants in Upper Kachura Lake. Dinner and framing seminar.",
        activity: "High-Altitude Arrival & Reflections Photography",
        sleepPoint: "Shangrila Lakeview Cabins",
        elevationChange: "Climb to 2,230m (Skardu)",
      },
      {
        dayNumber: 2,
        title: "Katpana Desert Textures & Balti Portraiture",
        description:
          "Wake up for a freezing-cold sunrise shoot on the sand dunes of Katpana Desert, framing the deep textures of cold sand against snowy high peaks. In the afternoon, travel to Shigar Valley. Visit an ancient wood-carved Mosque and set up standard portrait backdrops with local Balti elders, telling their stories through photography.",
        activity: "Desert Textures & Cultural Portraits Workshop",
        sleepPoint: "Shigar Palace Guesthouse",
        elevationChange: "2,200m elevation",
      },
      {
        dayNumber: 3,
        title: "Sheosar Lake Milky Way & Long Exposure Class",
        description:
          "Ascend to the Deosai National Park. Set up camp near Sheosar Lake. Set up sturdy carbon-fiber tripod positions for sunset. Run a high-end tutorial on ND filters and long exposures of winding rivers. As darkness blankets the plain, capture the spectacular galactic core using star trackers. Hot chai and editing tips around the stove heater.",
        activity: "Sunset & Astrophotography Class",
        sleepPoint: "Astro-Heated Geodesic Domes, Deosai",
        elevationChange: "Ascend to 4,114m (Deosai)",
      },
      {
        dayNumber: 4,
        title: "Cold River Long-Exposures & Shigar Fort Gardens",
        description:
          "Capture the mist rising from the waters of Bara Pani at sunrise. Pack up dome camps and head back to Shigar Fort. Dedicate the afternoon to macro photography in the heritage gardens and editing/color-grading sessions in Lightroom. Showcase traveler photos in a micro-gallery exhibition.",
        activity: "Landscape Editing & Local Mini-Exhibition",
        sleepPoint: "Shigar Palace Guesthouse",
        elevationChange: "Descend to 2,230m",
      },
      {
        dayNumber: 5,
        title: "Skardu to Islamabad Return Runway",
        description:
          "Morning flight back to Islamabad or mountain drive. Gather at the F-7 Hub to print your best shots and share high-resolution social-media files.",
        activity: "Return & Travel Review",
        sleepPoint: "Home / Islamabad",
        elevationChange: "Descend to 540m (ISB)",
      },
    ],
  },
  {
    id: "corporate-hunza-luxury",
    title: "Karakoram Luxury Glamping & Team Retreat",
    category: "Family & Corporate",
    destinationId: "hunza",
    durationDays: 5,
    groupSize: "20 - 30 Travelers",
    difficulty: "Easy",
    costPKR: 85000,
    costUSD: 310,
    departureFrom: "Islamabad F-7 Departure Hub",
    isPopular: true,
    // coverImage: '/src/assets/images/hero_mountain_1784037773882.jpg',
    coverImage:
      "https://www.trips.pk/main-root/transferImages/hunza%20valley.jpg",
    highlights: [
      "Stay in luxury heated geodesic glamping domes in Hunza",
      "Exclusive high-speed chartered coasters & logistics",
      "Professional team-building, yoga, and meditation in the clouds",
      "Private classical music performance & gourmet Hunza dinners",
    ],
    rating: 4.9,
    reviewCount: 38,
    slotsLeft: 10,
    itinerary: [
      {
        dayNumber: 1,
        title: "Islamabad to Hunza Premium Flight & Transfer",
        description:
          "Fly from Islamabad to Gilgit on our premium charter or premium flights. Board private luxury 4x4 land cruisers to Karimabad, Hunza. Check into your ultra-luxury heated geodesic glamping domes overlooking the massive valley. Welcome organic grape-juice drink and premium briefing.",
        activity: "Luxury Travel & Check-in",
        sleepPoint: "Luxus Grand Glamping Domes, Karimabad",
        elevationChange: "Ascend to 2,438m (Karimabad)",
      },
      {
        dayNumber: 2,
        title: "Team-Building at Baltit Fort & Meditation at Eagle's Nest",
        description:
          "Start with a sunrise alpine yoga session on the glamping wooden decks. Embark on a private guided tour of Baltit Fort, with interactive scavenger team games based on local history. In the evening, drive to Eagle's Nest for a mindfulness breathing seminar directly facing Rakaposhi peak glowing at sunset.",
        activity: "Yoga, Team Scavenger Hunt & Meditation",
        sleepPoint: "Luxus Grand Glamping Domes, Karimabad",
        elevationChange: "2,400m average elevation",
      },
      {
        dayNumber: 3,
        title: "Private Yacht Cruise at Attabad & Riverside Dinner",
        description:
          "Board luxury high-speed private speedboats at Attabad Lake. Cruise deep into the turquoise canyons. Return to a private, lakeside BBQ setup featuring live local sitar and rubab music, fire dances, and a gourmet 5-course organic Hunza meal including local mutton delicacies.",
        activity: "Private Speedboat Cruise & Sitar Concert",
        sleepPoint: "Luxus Grand Glamping Domes, Karimabad",
        elevationChange: "2,400m elevation",
      },
      {
        dayNumber: 4,
        title: "Passu Glacier Hike & Cultural Exchange Session",
        description:
          "Walk the gentle, pristine track towards Passu Glacier snout, accompanied by certified alpine guides. Afternoon interactive sharing session with local Hunza educational and social development leaders, supporting community schools. Celebrate the trip with a final awards ceremony on the domes lawn.",
        activity: "Glacier Hike & Social Awards Ceremony",
        sleepPoint: "Luxus Grand Glamping Domes, Karimabad",
        elevationChange: "Hike reaches 2,600m",
      },
      {
        dayNumber: 5,
        title: "Gilgit Flight back to Islamabad Hub",
        description:
          "Drive down to Gilgit Airport. Board flight back to Islamabad. Arrive at F-7 Departure Hub refreshed, aligned, and full of collaborative energy.",
        activity: "Flight Return & Safe Landing",
        sleepPoint: "Home / Islamabad",
        elevationChange: "Descend to 540m (ISB)",
      },
    ],
  },
];

export const TRAVELER_STORIES: TravelerStory[] = [
  {
    id: "story-1",
    author: "Aisha Malik",
    age: 24,
    role: "Astro-photographer & Backpacker",
    content:
      "Standing on the Deosai plains at midnight with my camera was a spiritual experience. The Milky Way was so bright that it literally cast shadows on our yellow tents! Karakoram Expeditions handled the freezing 4,100m logistics flawlessly with hot soups and heated tents. I made friends for life.",
    location: "Lahore, Pakistan",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    tripName: "Deosai Plains Camping Tour",
    rating: 5,
  },
  {
    id: "story-2",
    author: "Zain Ahmed",
    age: 28,
    role: "Corporate Team Leader",
    content:
      "We booked the luxury corporate retreat to Hunza. The heated geodesic domes are mind-blowing—you wake up looking directly at Passu Cones through a giant transparent window! The sitar night by Attabad lake was mystical. Our team has never been more aligned.",
    location: "Islamabad, Pakistan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    tripName: "Karakoram Luxury Glamping",
    rating: 5,
  },
  {
    id: "story-3",
    author: "Sarah Jenkins",
    age: 22,
    role: "Solo Adventure Traveler",
    content:
      "The jeep ride to Fairy Meadows was scary but exhilarating, and the trek up through pine forests felt like walking into Narnia. Nanga Parbat towers over you like a giant wall of ice. It was my first time visiting Pakistan, and the local hospitality left me speechless. 10/10 recommendation!",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    tripName: "Fairy Meadows Odyssey",
    rating: 5,
  },
];

export const EXPEDITION_ALERTS: ExpeditionAlert[] = [
  {
    id: "alert-1",
    location: "Deosai High Plains",
    altitude: "4,114m",
    message:
      "Team Astrophotography is currently pitching tents by Sheosar Lake. Sky is crystal clear, -2°C, galactic core is spectacular. All travelers in high spirits!",
    timestamp: "15 mins ago",
    teamName: "Team Orion",
  },
  {
    id: "alert-2",
    location: "Fairy Meadows Base",
    altitude: "3,300m",
    message:
      "Team Odyssey has completed the trek to Beyal Camp. Nanga Parbat is pristine and visible. Bonfire is being lit. Local wood cabins are incredibly cozy.",
    timestamp: "1 hour ago",
    teamName: "Team Nanga Parbat",
  },
  {
    id: "alert-3",
    location: "Khunjerab Border",
    altitude: "4,693m",
    message:
      "Team Karakoram Caravan has successfully reached the China Border Arch. Freezing snow fields but hot local organic soup in Sost has energized everyone!",
    timestamp: "3 hours ago",
    teamName: "Team KKH Odyssey",
  },
];

export const PRE_DEPARTURE_CHECKLIST = [
  {
    category: "Clothing",
    items: [
      "Waterproof windbreaker jacket",
      "Thermal fleece layers (2 pair)",
      "Dry-fit trekking shirts (4)",
      "Hiking trousers with stretch",
      "Warm wool beanie and gloves",
    ],
  },
  {
    category: "Footwear",
    items: [
      "Ankle-support broken-in hiking boots",
      "Thick merino wool socks (3 pairs)",
      "Lightweight camp slippers/sandals",
    ],
  },
  {
    category: "Gear",
    items: [
      "High-quality 10,000+ mAh power bank",
      "Headlamp or strong torch with extra batteries",
      "1-Liter reusable insulated thermal water flask",
      "Polarized UV-protection sunglasses",
      "Compact trekking backpack (35L-45L)",
    ],
  },
  {
    category: "Hygiene & Meds",
    items: [
      "Broad-spectrum SPF 50+ Sunscreen & Lip balm",
      "Altitude-sickness medication (consult doctor)",
      "Personal hygiene wipes & sanitizer",
      "Water purification tablets",
    ],
  },
];
