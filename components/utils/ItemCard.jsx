import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

import classes from "./Utils.module.scss";

const ItemCard = ({ post, crumbs }) => {
  const { bannerUrl, title, date, info, tags, description } = post.frontmatter;
  return (
    <article className={classes.item}>
      {bannerUrl && (
        <div className={classes.bannerImg}>
          <Image src={bannerUrl} alt={title} objectFit="cover" layout="fill" />
        </div>
      )}
      <Link className={classes.blogTitle} href={`/${crumbs}/${post.slug}`}>
        <p>{title}</p>
      </Link>
      {date && <p className={classes.blogDateCard}>{format(new Date(date), "PPP")}</p>}
      {info ? <p className={classes.info}>{info}</p> : ""}
      {tags && (
        <div>
          {
            <>
              {tags.map((tag, index, tags) => (
                <span key={tag} className={classes.tags}>
                  {tag}
                </span>
              ))}
            </>
          }
        </div>
      )}
      {description && <p className={classes.description}>{description}</p>}
    </article>
  );
};

export default ItemCard;
