import { MDXRemote } from "next-mdx-remote";
import React from "react";
import classes from "./Article.module.scss";

const components = {  }

const ArticleContent = ({ mdxSource }) => {
  return (
    <div className={classes.containerContent}>
      <h1>ArticleContent</h1>
      <MDXRemote {...mdxSource} lazy />

    </div>
  );
};

export default ArticleContent;
