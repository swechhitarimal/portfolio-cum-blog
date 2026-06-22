import type { TilEntry } from "@/types";

export const tilEntries: TilEntry[] = [
  {
    id: "til-1", title: "Octopuses have three hearts",
    fact: "Two pump blood to the gills, the third pumps it to the body. And their blood is blue! Nature is showing off.",
    category: "Nature", date: "2025-12-15", tags: ["animals", "ocean", "biology"], favorite: true,
  },
  {
    id: "til-2", title: "The 37% rule for decision-making",
    fact: "When choosing from many options, look at the first 37% to set a baseline, then pick the next best one. Also known as 'optimal stopping'. I use this for restaurant menus.",
    category: "Life Hacks", date: "2025-12-10", tags: ["psychology", "decisions", "math"], favorite: true,
  },
  {
    id: "til-3", title: "Container queries exist in CSS now",
    fact: "You can style elements based on their parent's size instead of the viewport. This made me unreasonably happy.",
    category: "Tech", date: "2025-12-05", tags: ["css", "web", "frontend"], favorite: false,
  },
  {
    id: "til-4", title: "Baader-Meinhof is just your brain",
    fact: "After you learn something new, you see it everywhere. It's not the universe — it's selective attention being a show-off.",
    category: "Psychology", date: "2025-11-28", tags: ["brain", "perception", "psychology"], favorite: false,
  },
  {
    id: "til-5", title: "Snowflakes have unique life stories",
    fact: "Every snowflake's branching pattern encodes the temperature and humidity at each moment of its fall. They're tiny weather diaries.",
    category: "Nature", date: "2025-11-20", tags: ["physics", "weather", "snow"], favorite: true,
  },
  {
    id: "til-6", title: "The Kuleshov Effect",
    fact: "The same neutral face seems hungry, sad, or thoughtful depending on what you cut to. Film editing is emotional manipulation and I respect that.",
    category: "Art", date: "2025-11-15", tags: ["film", "editing", "psychology"], favorite: false,
  },
  {
    id: "til-7", title: "Trees talk to each other",
    fact: "They share nutrients and send warnings through fungal networks. It's called the 'Wood Wide Web' and yes, it's as cool as it sounds.",
    category: "Nature", date: "2025-11-10", tags: ["trees", "nature", "fungi"], favorite: true,
  },
  {
    id: "til-8", title: "Satoshi never used commas",
    fact: "The Bitcoin whitepaper is 9 pages with zero commas. Just periods and a few colons. Absolute madman.",
    category: "Random", date: "2025-10-28", tags: ["bitcoin", "writing", "trivia"], favorite: false,
  },
  {
    id: "til-9", title: "Blue eyes = one shared ancestor",
    fact: "Every blue-eyed person on Earth shares a single ancestor from 6,000-10,000 years ago near the Black Sea. One mutation, 300 million people.",
    category: "Science", date: "2025-10-20", tags: ["genetics", "evolution", "eyes"], favorite: true,
  },
  {
    id: "til-10", title: "Japan has a 'forest bathing' prescription",
    fact: "Shinrin-yoku is literally prescribed by doctors. Just walking slowly through forests. No apps, no tracking, just trees.",
    category: "Health", date: "2025-10-12", tags: ["wellness", "nature", "japan"], favorite: true,
  },
  {
    id: "til-11", title: "The word 'nerd' started at Dr. Seuss",
    fact: "First appeared in 'If I Ran the Zoo' (1950). It was just a made-up creature name. Now it's my identity.",
    category: "Random", date: "2025-10-05", tags: ["words", "history", "language"], favorite: false,
  },
  {
    id: "til-12", title: "You can hear the difference between hot and cold water",
    fact: "Hot water sounds different when poured because viscosity changes with temperature. Your ears are thermal sensors.",
    category: "Science", date: "2025-09-28", tags: ["physics", "sound", "water"], favorite: true,
  },
];

export const tilCategories = ["All", "Nature", "Tech", "Psychology", "Art", "Science", "Random", "Health", "Life Hacks"];
