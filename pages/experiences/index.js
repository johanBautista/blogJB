import React from "react";
import fs from "fs";
import path from "path";
import * as matter from "gray-matter";
import { experienceFileNames, experiencesPath } from "../../utils/mdxUtils";

import BlogList from "../../components/utils/List";
import HeroSection from "../../components/home/HerSection";

import styles from "../../styles/Home.module.css";

const ExperiencesPage = ({ experiences }) => {
  return (
    <>
      <main className={styles.main}>
        <HeroSection />
        <BlogList posts={experiences} crumbs="experiences" />
      </main>
    </>
  );
};

export default ExperiencesPage;

export async function getStaticProps() {
  const experiences = experienceFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(experiencesPath, `${slug}`));
    const { data } = matter(content);

    return {
      frontmatter: data,
      slug: slug.replace(/\.mdx?$/, ""),
    };
  });

  return {
    props: {
      experiences: JSON.parse(JSON.stringify(experiences)),
    },
  };
}
