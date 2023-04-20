import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { postFileNames, postsPath } from "../../utils/mdxUtils";
import rehypeHighlight from "rehype-highlight";

import Article from "../../components/utils/Article";

const BlogPage = ({ MdxSource, frontmatter }) => {
  return <Article mdxSource={MdxSource} frontmatter={frontmatter} />;
};

export default BlogPage;

export async function getStaticProps({ params }) {
  const { slug } = params;
  console.log("SLUG", slug);
  const filePath = path.join(postsPath, `${slug}.mdx`);
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
      slug,
      MdxSource,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    },
  };
}

export async function getStaticPaths() {
  const postsPaths = postFileNames.map((slug) => {
    console.log("slug-posts", slug);
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
