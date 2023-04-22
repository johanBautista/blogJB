import Head from "next/head";
import Image from "next/image";
import { format } from "date-fns";

import classes from "./Utils.module.scss";

const ArticleHeader = ({ frontmatter }) => {
  return (
    <>
      <Head>
        <title>Johan_DEV</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <section>
        {frontmatter.bannerUrl && (
          <div className={classes.bannerImgArticle}>
            <Image src={frontmatter.bannerUrl} alt={frontmatter.title} objectFit="cover" layout="fill" />
          </div>
        )}
        {/* <h2>{frontmatter.title}</h2>
        {frontmatter.date && <p className={classes.blogDate}>{format(new Date(frontmatter.date), "PPP")}</p>}
        {frontmatter.tags && (
          <div className={classes.tags}>
            Tags:{" "}
            {frontmatter.tags.map((tag, index, tags) => (
              <span key={tag}>
                {tag}
                {tags.length - 1 > index ? ", " : ""}
              </span>
            ))}
          </div>
        )} 
        {frontmatter.description && <p className={classes.description}>Description: {frontmatter.description}</p>}
        */}
      </section>
    </>
  );
};

export default ArticleHeader;
