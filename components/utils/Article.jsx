import Link from "next/link";
import ArticleHeader from "./ArticleHeader";
import ArticleContent from "./ArticleContent";

import classes from './Utils.module.scss'

const Article = ({ mdxSource, frontmatter }) => {
  return (
    <main>
      <Link href='/' className={classes.link}>Go to Home -- </Link>
      <ArticleHeader frontmatter={frontmatter} />
      <ArticleContent mdxSource={mdxSource} />
    </main>
  );
};

export default Article;
