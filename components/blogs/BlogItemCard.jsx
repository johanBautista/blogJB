import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import classes from "./BlogList.module.scss";
import profileImage from "../../images/johan_img.jpg";

const BlogItemCard = ({ post }) => {
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
      <Link className={classes.blogTitle} href={`/blogs/${post.slug}`}>
        <p>{post.frontmatter.title}</p>
      </Link>
      {post.frontmatter.date && (
        <p className={classes.blogDate}>
          {format(new Date(post.frontmatter.date), "PPP")}
        </p>
      )}
      {post.frontmatter.tags && (
        <p className={classes.tags}>
          Tags:{" "}
          {post.frontmatter.tags.map((tag, index, tags) => (
            <span key={tag}>
              {tag}
              {tags.length - 1 > index ? ", " : ""}
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

export default BlogItemCard;
