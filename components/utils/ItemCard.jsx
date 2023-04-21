import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import classes from "./Utils.module.scss";

const ItemCard = ({ post, crumbs }) => {
  return (
    <div className={classes.item}>
      {post.frontmatter.bannerUrl && (
        <div className={classes.bannerImg}>
          <Image
            src={post.frontmatter.bannerUrl}
            alt={post.frontmatter.title}
            objectFit="cover"
            layout="fill"
          />
        </div>
      )}
      <Link className={classes.blogTitle} href={`/${crumbs}/${post.slug}`}>
        <p>{post.frontmatter.title}</p>
      </Link>
      {post.frontmatter.date && (
        <p className={classes.blogDate}>
          {format(new Date(post.frontmatter.date), "PPP")}
        </p>
      )}
      {post.frontmatter.tags && (
        <p className={classes.tag}>
          Tagse:{" "}
          {post.frontmatter.tags.map((tag, index, tags) => (
            <span key={tag} className={classes.tags}>
              {tag}
              {/* {tags.length - 1 > index ? ", " : ""} */}
            </span>
          ))}
        </p>
      )}
      {post.frontmatter.description && (
        <p className={classes.description}>{post.frontmatter.description}</p>
      )}
    </div>
  );
};

export default ItemCard;
