import type { Post } from "../types/post";

export const posts: Post[] = [
  { 
    id: 1, 
    title: "How to Cook Pancakes", 
    content: "A simple and quick recipe for delicious homemade pancakes for your perfect morning.", 
    author: "Anna Green", 
    category: "Cooking" 
  },
  { 
    id: 2, 
    title: "Morning Routine Tips", 
    content: "Small habits like drinking water and stretching can make your whole day much better.", 
    author: "Ben Taylor", 
    category: "Lifestyle" 
  },
  { 
    id: 3, 
    title: "Introduction to TypeScript", 
    content: "Learn the basics of TypeScript, static typing, and how it improves your JavaScript code.", 
    author: "Chris Evans", 
    category: "Technology" 
  },
  { 
    id: 4, 
    title: "Best Travel Destinations 2026", 
    content: "Discover amazing and affordable places to visit this year, from beaches to mountains.", 
    author: "Diana Prince", 
    category: "Travel" 
  },
  { 
    id: 5, 
    title: "Easy Home Workouts", 
    content: "Stay fit with this 15-minute full-body workout routine that requires zero equipment.", 
    author: "Ethan Hunt", 
    category: "Fitness" 
  }
];