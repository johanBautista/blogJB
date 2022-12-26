import Link from "next/link";
import React from "react";
import AricleHeader from "./AricleHeader";
import ArticleContent from "./ArticleContent";
import classes from './Article.module.scss'

const Article = ({ mdxSource, frontmatter }) => {
  console.log("md", mdxSource, "fm", frontmatter);
  return (
    <main>
        <Link href='/' className={classes.link}>Go to Home -- </Link>
      <AricleHeader frontmatter={frontmatter} />
      <ArticleContent mdxSource={mdxSource} />
    </main>
  );
};

export default Article;
