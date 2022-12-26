import fs from "fs";
import path from "path";
import * as matter from "gray-matter";

import { postFileNames, postsPath } from "../utils/mdxUtils";
import HeroSection from "../components/home/HerSection";

import styles from "../styles/Home.module.css";
import BlogList from "../components/blogs/BlogList";


export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <h1>ol</h1>
        <BlogList posts={posts} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = postFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, `${slug}`));
    const { data } = matter(content);

    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    };
  });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
