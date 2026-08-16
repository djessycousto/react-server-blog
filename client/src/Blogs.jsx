import { useState, useEffect } from "react";
import Blog from "./Blog";

const Blogs = ({ items, updateBlog, deleteBlog, isEdit }) => {
  // here we will use reduce to groupe the blogpost
  //  reduce to group

  const [visibleBlog, setVisibleBlog] = useState(5); // to show only 5 at time
  // const [hasMore, setHasMore] = useState(true);
  const visibleItems = items.slice(0, visibleBlog); //
  const hasMore = visibleBlog < items.length; //

  // why we don't use use effect
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
  const currentMonth = months[new Date().getMonth()]; // August
  const currentYear = new Date().getFullYear(); // 2026

  //  get carried away we dont need grouping here... to show in home
  // const grouped = visibleItems.reduce((acc, item) => {
  //   const year = item.date.split(", ")[1]; // 2024
  //   if (!acc[year]) acc[year] = [];
  //   acc[year].push(item); // push in the above new array can i add the logic of recent post and archive here

  //   return acc;
  // }, {});

  //Filtering post by month and year

  // recent post filter
  const recentPosts = visibleItems.filter((item) => {
    // const [month, year] = item.date.split(" ");// issue
    const [month, day, year] = item.date.replace(",", "").split(" ");
    return month === currentMonth && Number(year) === currentYear;
  });

  // old post filter

  const oldPosts = visibleItems.filter((item) => {
    // const [month, year] = item.date.split(" ");// issue
    const [month, day, year] = item.date.replace(",", "").split(" ");
    return !(month === currentMonth && Number(year) === currentYear);
  });
  return (
    <>
      {recentPosts.length > 0 && (
        <>
          <div className="block-post__container">
            <div className="block-post__container__tag">
              <div>
                <p>Recent Post</p>
              </div>
              <div className="line"></div>
            </div>
          </div>
          {recentPosts
            // .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map((item) => {
              return (
                <Blog
                  key={item.id}
                  item={item}
                  updateBlog={updateBlog}
                  deleteBlog={deleteBlog}
                  isEdit={isEdit}
                />
              );
            })}
        </>
      )}

      {oldPosts.length > 0 && (
        <>
          <div className="block-post__container">
            <div className="block-post__container__tag">
              <div>
                <p>Older Posts</p>
              </div>
              <div className="line"></div>
            </div>
          </div>
          {oldPosts.map((item) => {
            return (
              <Blog
                key={item.id}
                item={item}
                updateBlog={updateBlog}
                deleteBlog={deleteBlog}
                isEdit={isEdit}
              />
            );
          })}
        </>
      )}

      {/* btn  */}
      <div className="addMoreBtn-container">
        {hasMore && (
          <button className="addMoreBtn" onClick={handleLoadMore}>
            add more
          </button>
        )}
      </div>
    </>
  );
};
export default Blogs;
