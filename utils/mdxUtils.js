import path from "path";
import fs from "fs";

//  Export posts data folder
export const postsPath = path.join(process.cwd(), "./md/posts");
export const postFileNames = fs.readdirSync(postsPath).filter((postPath) => /\.mdx?$/.test(postPath));
console.log("ruta", postsPath, "otro", postFileNames);

//  Export experiences data folder
export const experiencesPath = path.join(process.cwd(), "./md/experiences");
export const experienceFileNames = fs
  .readdirSync(experiencesPath)
  .filter((experiencePath) => /\.mdx?$/.test(experiencePath));
