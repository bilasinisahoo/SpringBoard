//Create blog.mjs that imports the Post class. Create an instance, and call the publish method to simulate posting.

import Post from "./Post.mjs";

const myPost = new Post("Hello !!!", "This is my first post.");
myPost.publish();