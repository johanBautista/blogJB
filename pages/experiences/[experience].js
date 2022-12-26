import React from "react";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import { experienceFileNames, experiencesPath } from "../../utils/mdxUtils";

import Article from "../../components/utils/Article";

const ExperiencePage = ({ MdxSource, frontmatter }) => {
  return <Article mdxSource={MdxSource} frontmatter={frontmatter} />;
};

export default ExperiencePage;

export async function getStaticProps({ params }) {
  const { experience } = params;
  const filePath = path.join(experiencesPath, `${experience}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data: frontmatter } = matter(fileContent);
  const MdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return {
    props: {
      params,
      experience,
      MdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    },
  };
}

export async function getStaticPaths() {
  const experiencesPaths = experienceFileNames.map((experience) => {
    console.log("experience-experiences", experience);
    return {
      params: {
        experience: experience.replace(/\.mdx?$/, ""),
      },
    };
  });

  return {
    paths: experiencesPaths,
    fallback: false,
  };
}
