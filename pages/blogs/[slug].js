import React from "react";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
// import rehypeHighlight from 'rehype-highlight';
import { postFileNames, postsPath } from "../../utils/mdxUtils";
import Article from "../../components/article/Article";
import rehypeHighlight from "rehype-highlight";

const BlogPage = ({MdxSource, frontmatter}) => {
  return <Article mdxSource={MdxSource} frontmatter={frontmatter} />
};

export default BlogPage;

export async function getStaticProps({ params }) {
  console.log("PARAMS", params);
  const { slug } = params;
  const filePath = path.join(postsPath, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data: frontmatter } = matter(fileContent);
  // const MdxSource = await serialize(content);
  const MdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });
  return {
    props: {
      params,
      slug,
      MdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    },
  };
}

export async function getStaticPaths() {
  const postsPaths = postFileNames.map((slug) => {
    return {
      params: {
        slug: slug.replace(/\.mdx?$/, ""),
      },
    };
  });

  return {
    paths: postsPaths,
    fallback: false,
  };
}
