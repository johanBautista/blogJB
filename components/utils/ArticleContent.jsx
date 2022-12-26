import { MDXRemote } from "next-mdx-remote";

import classes from "./Utils.module.scss";

const ArticleContent = ({ mdxSource }) => {
  return (
    <div className={classes.containerContent}>
      <h1>ArticleContent</h1>
      <MDXRemote {...mdxSource} lazy />

    </div>
  );
};

export default ArticleContent;
