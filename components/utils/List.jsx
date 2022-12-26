import ItemCard from "./ItemCard";

import classes from "./Utils.module.scss";

const List = ({ posts, crumbs }) => {
  return (
    <div className={classes.container}>
      {posts?.map((post) => (
        <ItemCard key={post.slug} post={post} crumbs={crumbs} />
      ))}
    </div>
  );
};

export default List;
