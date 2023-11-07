const samplePosts = [
  {
    id: 1,
    username: "john_doe",
    title: "Exploring the Great Outdoors",
    description:
      "Spent the weekend hiking in the mountains. The views were breathtaking!",
    image: "mountain_hike.jpg",
    link: "https://example.com/hiking-adventure",
    likes: 10,
    comments: [
      { id: 1, username: "Alice", text: "Amazing photo!", date: "2023-11-05T09:30:00Z" },
  { id: 2, username: "Bob", text: "Incredible view!", date: "2023-11-05T10:15:00Z" },
  { id: 3, username: "Charlie", text: "Nature's beauty!", date: "2023-11-05T11:00:00Z" },
  { id: 4, username: "David", text: "I'm speechless!", date: "2023-11-05T12:45:00Z" },
  { id: 5, username: "Eve", text: "Wish I was there!", date: "2023-11-05T13:30:00Z" },
    ],
  },
  {
    id: 2,
    username: "sara_smith",
    title: "Delicious Homemade Recipe",
    description: "Tried a new recipe today. It's a mouthwatering delight!",
    image: "homemade_dish.jpg",
    link: "https://example.com/delicious-recipe",
    likes: 10,
    comments: [
      { id: 6, username: "Frank", text: "Breathtaking!", date: "2023-11-05T14:15:00Z" },
      { id: 7, username: "Grace", text: "Lovely photo!", date: "2023-11-05T15:00:00Z" },
      { id: 8, username: "Henry", text: "Unbelievable!", date: "2023-11-05T15:45:00Z" },
      { id: 9, username: "Isabel", text: "Nature's masterpiece!", date: "2023-11-05T16:30:00Z" },
      { id: 10, username: "James", text: "I'm in awe!", date: "2023-11-05T17:15:00Z" },
    ],
  },
  {
    id: 3,
    username: "jane_wilson",
    title: "Tech Gadgets Unboxing",
    description:
      "Unboxed the latest gadgets in the tech world. Check out my reviews!",
    image: "tech_gadgets.jpg",
    link: "https://example.com/gadget-reviews",
    likes: 10,
    comments: [
      { id: 11, username: "Karen", text: "Fantastic shot!", date: "2023-11-05T18:00:00Z" },
      { id: 12, username: "Liam", text: "I love this place!", date: "2023-11-05T18:45:00Z" },
      { id: 13, username: "Mia", text: "Nature's beauty!", date: "2023-11-05T19:30:00Z" },
      { id: 14, username: "Noah", text: "Stunning view!", date: "2023-11-05T20:15:00Z" },
      { id: 15, username: "Olivia", text: "Absolutely breathtaking!", date: "2023-11-05T21:00:00Z" },
    ],
  },
  {
    id: 4,
    username: "mark_anderson",
    title: "Traveling Across Europe",
    description:
      "Visited multiple countries in Europe. Such a culturally rich experience!",
    image: "europe_travel.jpg",
    link: "https://example.com/europe-travel",
    likes: 10,
    comments: [
      { id: 16, username: "Peter", text: "I want to visit!", date: "2023-11-05T21:45:00Z" },
      { id: 17, username: "Quinn", text: "Wow, just wow!", date: "2023-11-05T22:30:00Z" },
      { id: 18, username: "Ryan", text: "Nature's wonders!", date: "2023-11-05T23:15:00Z" },
      { id: 19, username: "Sophia", text: "I'm in love!", date: "2023-11-05T00:00:00Z" },
      { id: 20, username: "Thomas", text: "This is incredible!", date: "2023-11-05T00:45:00Z" },
    ],
  },
  {
    id: 5,
    username: "lisa_jackson",
    title: "Adventures in the Jungle",
    description: "Explored the dense jungles and encountered unique wildlife.",
    image: "jungle_adventures.jpg",
    link: "https://example.com/jungle-exploration",
    likes: 10,
    comments: [
      { id: 21, username: "Victoria", text: "This is breathtaking!", date: "2023-11-05T01:30:00Z" },
      { id: 22, username: "William", text: "Absolutely stunning!", date: "2023-11-05T02:15:00Z" },
      { id: 23, username: "Xavier", text: "I'm lost for words!", date: "2023-11-05T03:00:00Z" },
      { id: 24, username: "Yasmine", text: "I want to be there!", date: "2023-11-05T03:45:00Z" },
      { id: 25, username: "Zachary", text: "Incredible photo!", date: "2023-11-05T04:30:00Z" },
    ],
  },
  {
    id: 6,
    username: "mike_brown",
    title: "Sunset Serenity",
    description: "Captured the beauty of a serene sunset at the beach.",
    image: "beach_sunset.jpg",
    link: "https://example.com/sunset-moments",
    likes: 10,
    comments: [
      { id: 26, username: "Ava", text: "Wow, amazing!", date: "2023-11-05T05:15:00Z" },
      { id: 27, username: "Benjamin", text: "This is a masterpiece!", date: "2023-11-05T06:00:00Z" },
      { id: 28, username: "Chloe", text: "Speechless!", date: "2023-11-05T06:45:00Z" },
      { id: 29, username: "Daniel", text: "Nature's beauty!", date: "2023-11-05T07:30:00Z" },
      { id: 30, username: "Emma", text: "I'm in awe!", date: "2023-11-05T08:15:00Z" },
    ],
  },
  {
    id: 7,
    username: "emily_jones",
    title: "Artistic Creations",
    description: "Showcasing my latest art creations. Art is my passion!",
    image: "artistic_works.jpg",
    link: "https://example.com/art-portfolio",
    likes: 10,
    comments: [
      { id: 31, username: "Finn", text: "Fantastic shot!", date: "2023-11-05T09:00:00Z" },
      { id: 32, username: "Grace", text: "I love this place!", date: "2023-11-05T09:45:00Z" },
      { id: 33, username: "Henry", text: "Nature's masterpiece!", date: "2023-11-05T10:30:00Z" },
      { id: 34, username: "Isabel", text: "Absolutely stunning!", date: "2023-11-05T11:15:00Z" },
      { id: 35, username: "James", text: "Unbelievable!", date: "2023-11-05T12:00:00Z" },
    ],
  },
  {
    id: 8,
    username: "david_carter",
    title: "Biking Adventures",
    description:
      "Took my mountain bike on an epic adventure. Trails and adrenaline!",
    image: "mountain_biking.jpg",
    link: "https://example.com/biking-journey",
    likes: 10,
    comments: [
      { id: 36, username: "Karen", text: "I want to visit!", date: "2023-11-05T12:45:00Z" },
      { id: 37, username: "Liam", text: "This is incredible!", date: "2023-11-05T13:30:00Z" },
      { id: 38, username: "Mia", text: "Stunning view!", date: "2023-11-05T14:15:00Z" },
      { id: 39, username: "Noah", text: "Amazing photo!", date: "2023-11-05T15:00:00Z" },
      { id: 40, username: "Olivia", text: "Breathtaking!", date: "2023-11-05T15:45:00Z" },
    ],
  },
  {
    id: 9,
    username: "olivia_martin",
    title: "Foodie Chronicles",
    description:
      "Exploring various cuisines and documenting culinary adventures.",
    image: "culinary_delights.jpg",
    link: "https://example.com/foodie-blog",
    likes: 10,
    comments: [
      { id: 41, username: "Peter", text: "I'm in love!", date: "2023-11-05T16:30:00Z" },
      { id: 42, username: "Quinn", text: "Nature's wonders!", date: "2023-11-05T17:15:00Z" },
      { id: 43, username: "Ryan", text: "I'm speechless!", date: "2023-11-05T18:00:00Z" },
      { id: 44, username: "Sophia", text: "Wow, just wow!", date: "2023-11-05T18:45:00Z" },
      { id: 45, username: "Thomas", text: "I'm lost for words!", date: "2023-11-05T19:30:00Z" },
    ],
  },
  {
    id: 10,
    username: "sam_robinson",
    title: "Bookworm's Paradise",
    description: "My cozy reading nook and the latest books on my shelf.",
    image: "reading_corner.jpg",
    link: "https://example.com/book-lover",
    likes: 10,
    comments: [
      { id: 46, username: "Victoria", text: "This is breathtaking!", date: "2023-11-05T20:15:00Z" },
      { id: 47, username: "William", text: "Absolutely stunning!", date: "2023-11-05T21:00:00Z" },
      { id: 48, username: "Xavier", text: "I want to be there!", date: "2023-11-05T21:45:00Z" },
      { id: 49, username: "Yasmine", text: "Incredible photo!", date: "2023-11-05T22:30:00Z" },
      { id: 50, username: "Zachary", text: "Wow, amazing!", date: "2023-11-05T23:15:00Z" },
    ],
  },
  {
    id: 11,
    username: "natalie_evans",
    title: "Wildlife Photography",
    description:
      "Capturing the beauty of nature's creatures in their natural habitat.",
    image: "wildlife_photography.jpg",
    link: "https://example.com/wildlife-photos",
    likes: 10,
    comments: [
      { id: 51, username: "Ava", text: "This is a masterpiece!", date: "2023-11-05T00:00:00Z" },
      { id: 52, username: "Benjamin", text: "Speechless!", date: "2023-11-05T00:45:00Z" },
      { id: 53, username: "Chloe", text: "Nature's beauty!", date: "2023-11-05T01:30:00Z" },
      { id: 54, username: "Daniel", text: "I'm in awe!", date: "2023-11-05T02:15:00Z" },
      { id: 55, username: "Emma", text: "Fantastic shot!", date: "2023-11-05T03:00:00Z" },
    ],
  },
  {
    id: 12,
    username: "steve_harris",
    title: "Car Enthusiast's Paradise",
    description: "Showcasing the latest additions to my car collection.",
    image: "car_collection.jpg",
    link: "https://example.com/car-enthusiast",
    likes: 10,
    comments: [
      { id: 56, username: "Finn", text: "I love this place!", date: "2023-11-05T03:45:00Z" },
      { id: 57, username: "Grace", text: "Nature's masterpiece!", date: "2023-11-05T04:30:00Z" },
      { id: 58, username: "Henry", text: "Absolutely stunning!", date: "2023-11-05T05:15:00Z" },
      { id: 59, username: "Isabel", text: "Unbelievable!", date: "2023-11-05T06:00:00Z" },
      { id: 60, username: "James", text: "I want to visit!", date: "2023-11-05T06:45" }
    ],
  },
  {
    id: 13,
    username: "grace_wilkins",
    title: "Fitness Journey",
    description: "My fitness transformation journey and workout tips.",
    image: "fitness_transformation.jpg",
    link: "https://example.com/fitness-blog",
    likes: 10,
    comments: [
      { id: 61, username: "Katherine", text: "Amazing view!", date: "2023-11-05T07:30:00Z" },
      { id: 62, username: "Landon", text: "This is paradise!", date: "2023-11-05T08:15:00Z" },
      { id: 63, username: "Mason", text: "I'm blown away!", date: "2023-11-05T09:00:00Z" },
      { id: 64, username: "Nora", text: "Incredible beauty!", date: "2023-11-05T09:45:00Z" },
      { id: 65, username: "Oliver", text: "I want to be there!", date: "2023-11-05T10:30:00Z" },
    ],
  },
  {
    id: 14,
    username: "will_thompson",
    title: "DIY Projects Galore",
    description: "Sharing my DIY creations and home improvement projects.",
    image: "diy_projects.jpg",
    link: "https://example.com/diy-creations",
    likes: 10,
    comments: [
      { id: 66, username: "Peyton", text: "Speechless!", date: "2023-11-05T11:15:00Z" },
      { id: 67, username: "Quincy", text: "Wow, just wow!", date: "2023-11-05T12:00:00Z" },
      { id: 68, username: "Riley", text: "I'm in love!", date: "2023-11-05T12:45:00Z" },
      { id: 69, username: "Sophia", text: "Nature's wonders!", date: "2023-11-05T13:30:00Z" },
      { id: 70, username: "Tristan", text: "Absolutely beautiful!", date: "2023-11-05T14:15:00Z" },
    ],
  },
  {
    id: 15,
    username: "laura_morris",
    title: "Fashion Trends",
    description:
      "Exploring the latest fashion trends and personal style journeys.",
    image: "fashion_trends.jpg",
    link: "https://example.com/fashion-inspiration",
    likes: 10,
    comments: [
      { id: 71, username: "Uma", text: "I'm amazed!", date: "2023-11-05T15:00:00Z" },
      { id: 72, username: "Victor", text: "I want to visit!", date: "2023-11-05T15:45:00Z" },
      { id: 73, username: "Willow", text: "I'm speechless!", date: "2023-11-05T16:30:00Z" },
      { id: 74, username: "Xander", text: "This is breathtaking!", date: "2023-11-05T17:15:00Z" },
      { id: 75, username: "Yara", text: "Unbelievable!", date: "2023-11-05T18:00:00Z" },
    ],
  },
  {
    id: 16,
    username: "james_hall",
    title: "Gaming Adventures",
    description: "Gaming highlights and reviews from my gaming world.",
    image: "gaming_highlights.jpg",
    link: "https://example.com/gaming-adventures",
    likes: 10,
    comments: [
      { id: 76, username: "Zane", text: "Nature's masterpiece!", date: "2023-11-05T18:45:00Z" },
      { id: 77, username: "Alice", text: "Breathtaking photo!", date: "2023-11-05T19:30:00Z" },
      { id: 78, username: "Bennett", text: "Incredible shot!", date: "2023-11-05T20:15:00Z" },
      { id: 79, username: "Clara", text: "I'm in awe!", date: "2023-11-05T21:00:00Z" },
      { id: 80, username: "Dominic", text: "Wow, what a place!", date: "2023-11-05T21:45:00Z" },
    ],
  },
  {
    id: 17,
    username: "sophia_parker",
    title: "Home Sweet Home",
    description: "Discovering cozy homes and interior design inspirations.",
    image: "cozy_homes.jpg",
    link: "https://example.com/home-inspo",
    likes: 10,
    comments: [
      { id: 81, username: "Evelyn", text: "I want to be there!", date: "2023-11-05T22:30:00Z" },
      { id: 82, username: "Felix", text: "Absolutely stunning!", date: "2023-11-05T23:15:00Z" },
      { id: 83, username: "Grace", text: "Nature's beauty!", date: "2023-11-05T00:00:00Z" },
      { id: 84, username: "Henry", text: "This is amazing!", date: "2023-11-05T00:45:00Z" },
      { id: 85, username: "Isabel", text: "I'm lost for words!", date: "2023-11-05T01:30:00Z" },
    ],
  },
  {
    id: 18,
    username: "sophia_parker",
    title: "Home Sweet Home",
    description: "Discovering cozy homes and interior design inspirations.",
    image: "cozy_homes.jpg",
    link: "https://example.com/home-inspo",
    likes: 10,
    comments: [
      { id: 86, username: "James", text: "This is a masterpiece!", date: "2023-11-05T02:15:00Z" },
      { id: 87, username: "Katherine", text: "Speechless!", date: "2023-11-05T03:00:00Z" },
      { id: 88, username: "Landon", text: "Nature's wonder!", date: "2023-11-05T03:45:00Z" },
      { id: 89, username: "Mason", text: "Incredible shot!", date: "2023-11-05T04:30:00Z" },
      { id: 90, username: "Nora", text: "Breathtaking!", date: "2023-11-05T05:15:00Z" },
    ],
  },
  {
    id: 19,
    username: "sophia_parker",
    title: "Home Sweet Home",
    description: "Discovering cozy homes and interior design inspirations.",
    image: "cozy_homes.jpg",
    link: "https://example.com/home-inspo",
    likes: 10,
    comments: [
      { id: 91, username: "Oliver", text: "This is magical!", date: "2023-11-05T06:00:00Z" },
      { id: 92, username: "Peyton", text: "Nature's beauty!", date: "2023-11-05T06:45:00Z" },
      { id: 93, username: "Quincy", text: "I'm in awe!", date: "2023-11-05T07:30:00Z" },
      { id: 94, username: "Riley", text: "This is paradise!", date: "2023-11-05T08:15:00Z" },
      { id: 95, username: "Sophia", text: "I want to visit!", date: "2023-11-05T09:00:00Z" },
      { id: 96, username: "Tristan", text: "Incredible beauty!", date: "2023-11-05T09:45:00Z" },
    ],
  },
  {
    id: 20,
    username: "sophia_parker",
    title: "Home Sweet Home",
    description: "Discovering cozy homes and interior design inspirations.",
    image: "cozy_homes.jpg",
    link: "https://example.com/home-inspo",
    likes: 10,
    comments: [
      { id: 96, username: "Tristan", text: "Incredible beauty!", date: "2023-11-05T09:45:00Z" },
      { id: 97, username: "Uma", text: "Absolutely beautiful!", date: "2023-11-05T10:30:00Z" },
      { id: 98, username: "Victor", text: "Wow, just wow!", date: "2023-11-05T11:15:00Z" },
      { id: 99, username: "Willow", text: "I'm amazed!", date: "2023-11-05T12:00:00Z" },
      { id: 100, username: "Xander", text: "This is breathtaking!", date: "2023-11-05T12:45:00Z" },
    ],
  },
];
export default samplePosts;
