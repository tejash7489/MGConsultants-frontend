import {
  Building2, MapPin , TrainFront , Notebook , DoorOpen , TreePine , ArrowUp10 , House  , Car  , Zap ,Lock , KeyRound, Leaf, Sun, Waves, Gem,
  Dumbbell, Flower2, Blocks, Gamepad2, Clapperboard, BookOpen,
  Bath, Droplets, PersonStanding, Baby, Umbrella,
  Coffee, BedDouble, UtensilsCrossed, Briefcase, Film, Flame,
  Trophy, CircleDot, Bike, Footprints, PawPrint,
  ShieldCheck, CarFront, Sparkles, ShoppingBag, Scissors, Shirt,
} from "lucide-react";

export const NAV = [
  { id: "home", label: "Home" },
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Highlights" },
  { id: "amenities", label: "Amenities" },
  { id: "price", label: "Price" },
  { id: "location", label: "Location" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

export const HERO_SLIDES = [
  { src: "/images/hero.jpg", caption: "Iconic sea-facing towers" },
  { src: "/images/living.jpg", caption: "Double-height living" },
  { src: "/images/pool.jpg", caption: "Rooftop infinity pool" },
  { src: "/images/bedroom.jpg", caption: "Serene master suites" },
  { src: "/images/lounge.jpg", caption: "Sky lounge on level 40" },
];

export const MARQUEE_ITEMS = [
  // "Sea-facing Sky Residences",
  // "Private Lift Lobbies",
  // "Rooftop Infinity Pool",
  // "Italian Marble Interiors",
  // "IGBC Platinum",
  // "White-glove Concierge",
  "Out of 913 Units, Only 12 Units left!",
  // "Out of 913 Units, Only 12 Units left!"
];

export const HIGHLIGHTS = [
  { icon: Building2, img: "/images/facade.jpg", title: "Reputed Developer", desc: "Developed by DLF Home Developers in partnership with GIC." },
  { icon: MapPin , img: "/images/suite.jpg", title: "Prime West Delhi Address", desc: "Shivaji Marg, Moti Nagar, close to Kirti Nagar and Rajouri Garden." },
  { icon: Leaf, img: "/images/balcony.jpg", title: "High-Rise Living", desc: "Four G+39 towers offering open views across the neighbourhood." },
  { icon: TrainFront , img: "/images/living.jpg", title: "Metro Connectivity", desc: "Close to Moti Nagar and Kirti Nagar metro stations on the Blue Line corridor." },
  { icon: DoorOpen , img: "/images/pool.jpg", title: "Gated Community", desc: "A secure, gated residential complex with controlled access." },
  { icon: Notebook , img: "/images/gym.jpg", title: "RERA Registered", desc: "Registered with Delhi RERA: DLRERA2021P0007." },
];

export const AMENITIES = [
  {
    label: "Comfort, convenience, elevated living.", img: "/images/lounge.jpg",
    items: [
      { icon: House  , name: "Clubhouse" },
      // { icon: TreePine , name: "Green Decks" },
      { icon: Lock , name: "24Xx7 Security" },
      { icon: Zap , name: "Power Backup" },
      { icon: Car , name: "Covered Parking" },
      { icon: ArrowUp10  , name: "High-Speed Lifts" },
      { icon: Dumbbell, name: "Gym/Pool" },
      { icon: Baby, name: "Kids' club & crèche" },
      { icon: Scissors, name: "Salon/Spa" },
      { icon: Coffee, name: "Reataurant" },
    ],
  },
  // {
  //   label: "Podium", img: "/images/pool.jpg",
  //   items: [
  //     { icon: Waves, name: "Infinity pool" },
  //     { icon: Bath, name: "Jacuzzi" },
  //     { icon: Droplets, name: "Spa, sauna & steam" },
  //     { icon: PersonStanding, name: "Fitness studio" },
  //     { icon: Baby, name: "Kids' club & crèche" },
  //     { icon: Umbrella, name: "Poolside cabana" },
  //   ],
  // },
  // {
  //   label: "Clubhouse", img: "/images/living.jpg",
  //   items: [
  //     { icon: Coffee, name: "Poolside café" },
  //     { icon: BedDouble, name: "Guest suites" },
  //     { icon: UtensilsCrossed, name: "Banquet hall" },
  //     { icon: Briefcase, name: "Business centre" },
  //     { icon: Film, name: "Private cinema" },
  //     { icon: Flame, name: "Barbeque pavilion" },
  //   ],
  // },
  // {
  //   label: "Sports & Leisure", img: "/images/balcony.jpg",
  //   items: [
  //     { icon: Trophy, name: "Tennis court" },
  //     { icon: CircleDot, name: "Squash court" },
  //     { icon: Bike, name: "Cycling track" },
  //     { icon: Footprints, name: "Jogging trail" },
  //     { icon: Leaf, name: "Zen garden" },
  //     { icon: PawPrint, name: "Pet park" },
  //   ],
  // },
  // {
  //   label: "Conveniences", img: "/images/facade.jpg",
  //   items: [
  //     { icon: ShieldCheck, name: "24/7 security" },
  //     { icon: CarFront, name: "Valet parking" },
  //     { icon: Sparkles, name: "Concierge desk" },
  //     { icon: ShoppingBag, name: "Supermarket" },
  //     { icon: Scissors, name: "Salon" },
  //     { icon: Shirt, name: "Laundry service" },
  //   ],
  // },
];

export const PLANS = [
  { name: "Horizon", tagline: "A refreshing perspective", floors: "8th to 24th floor", type: "3 BHK", area: "1,850 – 2,100 sq.ft.", img: "/images/bedroom.jpg", desc: "Horizon residences sit above the landscaped podium, with two sea-view balconies, a private lift lobby and a study nook." },
  { name: "Horizon Plus", tagline: "Room to grow", floors: "10th to 28th floor", type: "3.5 BHK", area: "2,250 – 2,450 sq.ft.", img: "/images/suite.jpg", desc: "An additional study or guest room, a utility balcony and a larger living-dining space facing the sea." },
  { name: "Vista", tagline: "A brilliant perspective", floors: "25th to 40th floor", type: "4 BHK", area: "2,640 – 3,050 sq.ft.", img: "/images/living.jpg", desc: "Vista homes offer a wraparound deck, staff quarters and walk-in wardrobes with sweeping Arabian Sea views." },
  { name: "Vista Grande", tagline: "Elevated living", floors: "30th to 44th floor", type: "4.5 BHK", area: "3,300 – 3,650 sq.ft.", img: "/images/balcony.jpg", desc: "Corner residences with dual-aspect views, a family lounge and an extra-large master suite with a private deck." },
  { name: "Sky Penthouse", tagline: "Above it all", floors: "45th to 50th floor", type: "4 BHK Penthouse", area: "4,200 – 4,600 sq.ft.", img: "/images/pool.jpg", desc: "Single-level penthouses with a private terrace garden, outdoor jacuzzi and panoramic 270° views." },
  { name: "Crown", tagline: "Bespoke luxury", floors: "51st to 52nd floor", type: "5 BHK Duplex", area: "4,900 – 5,600 sq.ft.", img: "/images/lounge.jpg", desc: "The Crown duplexes feature a private plunge pool, double-height living and a home theatre — the finest addresses in the tower." },
];

export const GALLERY = [
  { src: "/images/facade.jpg", caption: "Tower facade at dusk" },
  { src: "/images/living.jpg", caption: "Penthouse living room" },
  { src: "/images/bedroom.jpg", caption: "Master bedroom" },
  { src: "/images/pool.jpg", caption: "Rooftop pool" },
  { src: "/images/lounge.jpg", caption: "Sky lounge" },
  { src: "/images/balcony.jpg", caption: "Balcony view" },
];

export const CONTACT = {
  address: "133, Ground Floor, Raja Garden, Ramesh Nagar, West Delhi, Delhi – 110015",
  phone: ["+91 9810980014" , "+91 9355666154" , "+91 7289003400"],
  phoneHref: ["tel:+919810980014", "tel:+9355666154" , "tel:+7289003400"],
  email: "maneetghai@gmail.com",
  office: "133, Ground Floor, Raja Garden, Ramesh Nagar, West Delhi, Delhi – 110015",
  udyam: "UDYAM-DL-11-0168382",
  mapEmbed: "https://maps.google.com/maps?q=Dr.%20Annie%20Besant%20Road%2C%20Worli%2C%20Mumbai%20400018&z=15&output=embed",
};
