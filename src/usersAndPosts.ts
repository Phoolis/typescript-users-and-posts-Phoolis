import { User } from "./types/User";
import { Post } from "./types/Post";

/*
 * Part 1: read the data from the JSON files. The User type has already been defined
 * but the Post type is still empty.
 *
 * Below, you can see how to read the data from the JSON files and how to cast it to
 * the User and Post arrays:
 */
let users = require("../data/users.json") as User[];
let posts = require("../data/posts.json") as Post[];

// Part 2: write your logic for printing the names of the users and the titles of their posts
// in the correct order.

function printUserName(user: User) {
  return `# ${user.firstName} ${user.lastName}\n\n`;
}

function getUserPosts(user: User, posts: Post[]) {
  return posts.filter((post) => post.userId === user.id);
}

function printPostTitles(posts: Post[]) {
  let titles = "";
  posts.forEach((post) => (titles += `-   ${post.title}\n`));
  return titles;
}

let printOut = "";

users.forEach((user) => {
  printOut += printUserName(user);
  let userPosts = getUserPosts(user, posts);
  printOut += printPostTitles(userPosts);
  printOut += "\n";
});

console.log(printOut);
