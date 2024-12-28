import React from "react";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { postFileNames, postsPath } from "../../utils/mdxUtils";

//import HeroSection from "../../components/home/HerSection";
import BlogList from "../../components/utils/List";

import styles from "../../styles/Home.module.css";

export default function ListBlogs({ posts }) {
  return (
    <>
      <main className={styles.main}>
        {/* <HeroSection /> */}
        <BlogList posts={posts} crumbs="blogs" />
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
