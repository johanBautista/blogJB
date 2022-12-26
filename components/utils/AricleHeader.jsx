import Head from "next/head";
import Image from "next/image";
import { format } from 'date-fns';

import classes from './Utils.module.scss';


const AricleHeader = ({frontmatter}) => {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <div>
        {frontmatter.bannerUrl && (
          <div className={classes.bannerImgArticle}>
            <Image
              src={frontmatter.bannerUrl}
              alt={frontmatter.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
        )}
        <h2>{frontmatter.title}</h2>
        {frontmatter.date && (
          <p className={classes.blogDate}>
            {format(new Date(frontmatter.date), "PPP")}
          </p>
        )}
        {frontmatter.tags && (
          <p className={classes.tags}>
            Tags:{" "}
            {frontmatter.tags.map((tag, index, tags) => (
              <span key={tag}>
                {tag}
                {tags.length - 1 > index ? ", " : ""}
              </span>
            ))}
          </p>
        )}
        {frontmatter.description && (
          <p className={classes.description}>
            Description: {frontmatter.description}
          </p>
        )}
      </div>
    </>
  );
};

export default AricleHeader;
