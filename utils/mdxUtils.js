import path from "path";
import fs from "fs";

//  Export posts data folder
export const postsPath = path.join(process.cwd(), "posts");
export const postFileNames = fs
  .readdirSync(postsPath)
  .filter((postPath) => /\.mdx?$/.test(postPath));

//  Export experiences data folder
export const experiencesPath = path.join(process.cwd(), "experiences");
export const experienceFileNames = fs
  .readdirSync(experiencesPath)
  .filter((experiencePath) => /\.mdx?$/.test(experiencePath));
