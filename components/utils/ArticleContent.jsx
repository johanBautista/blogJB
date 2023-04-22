import { MDXRemote } from "next-mdx-remote";

import classes from "./Utils.module.scss";
import { format } from "date-fns";

const ArticleContent = ({ mdxSource, frontmatter }) => {
  const { title, date, tags } = frontmatter;
  return (
    <section>
      <h1>{title}</h1>
      {date && <p className={classes.blogDate}>{format(new Date(date), "PPP")}</p>}

      {tags && (
        <div>
          {tags.map((tag) => (
            <span key={tag} className={classes.tags}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <MDXRemote {...mdxSource} lazy />
    </section>
  );
};

export default ArticleContent;
