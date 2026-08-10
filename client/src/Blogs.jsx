import { useState, useEffect } from "react";
import Blog from "./Blog";

const Blogs = ({ items, updateBlog, deleteBlog, isEdit }) => {
  // here we will use reduce to groupe the blogpost
  //  reduce to group

  const [visibleBlog, setVisibleBlog] = useState(5);
  // const [hasMore, setHasMore] = useState(true);
  const visibleItems = items.slice(0, visibleBlog);
  const hasMore = visibleBlog < items.length; // how this work

  // why we dont use use eefect
  // useEffect(() => {
  //   setHasMore(visibleBlog > items.length);
  // }, [visibleBlog, items.length]); sorry i am confused

  const handleLoadMore = () => {
    if (!hasMore) {
      return;
    }
    setVisibleBlog((prev) => prev + 5);
  };
  // trying to add recent on same year and month blog

  // logic
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const recentDateMonth = months[new Date().getMonth()]; // august

  const grouped = visibleItems.reduce((acc, item) => {
    const year = item.date.split(", ")[1]; // 2024
    if (!acc[year]) acc[year] = [];
    acc[year].push(item); // push in the above new array can i add the logic of recent post and archive here

    return acc;
  }, {});

  return (
    <>
      <div className="count">{visibleItems.length}</div>
      {Object.entries(grouped)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => {
          // how if i remove array bracket pots is like an index, but with bracket i have the blog array???
          return posts.map((item) => {
            return (
              <Blog
                key={item.id}
                item={item}
                updateBlog={updateBlog}
                deleteBlog={deleteBlog}
                isEdit={isEdit}
                recentDateMonth={recentDateMonth}
                year={year}
              />
            );
          });
        })}
      {/* btn to add more post */}
      {hasMore && <button onClick={handleLoadMore}>add more</button>}
      <div className="count">{visibleItems.length}</div>
    </>
  );
};
export default Blogs;
