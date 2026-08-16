import "./archives.css";
import { useState } from "react";

const Archives = ({ items }) => {
  // states

  const [visibleBlog, setVisibleBlog] = useState(5);

  // limit page to 5 blogs
  const visibleItems = items.slice(0, visibleBlog); //
  const hasMore = visibleBlog < items.length; // how this work

  // handle load more

  const handleLoadMore = () => {
    if (!hasMore) {
      return;
    }
    setVisibleBlog((prev) => prev + 5);
  };
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

  // trying to get only moth for blogs

  const yearlyBlogs = visibleItems.filter((item) => {
    const [month, day, year] = item.date.replace(",", "").split(" ");
    // return month that does not match this month and year

    return !(month === currentMonth && Number(year) === currentYear); // all except 2026 of this moth
  });

  // grouping and sorting

  /* reduce */

  // const grouped = items.reduce((acc, item) => {
  //   const year = item.date.split(",")[1]; //2022
  //   if (!acc[year]) acc[year] = [];
  //   acc[year].push(item);
  //   // console.log(acc);

  //   return acc;
  // }, {});

  // archives is all old pots

  const grouped = visibleItems.reduce((acc, item) => {
    const [month, day, year] = item.date.replace(",", "").split(" ");
    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = [];
    acc[year][month].push(item);
    return acc;
  }, {});

  return (
    <>
      <main className="main ">
        <section className="intro">
          <h2>Archives</h2>
          <p>
            A chronological collection of deep dives, contemplative essays, and
            brief notes. Exploring the intersections of technology, philosophy,
            and focus.
          </p>
          <div className="line"></div>
        </section>

        {/* the grouping  */}

        {/* {yearlyBlogs > 0 && ( THIS IS HOW I STRUGGLED FOR THIS */}
        <>
          {/* body text */}
          {Object.entries(grouped).map(([year, months]) => {
            // console.log(year, "year");
            // console.log(months, "months");

            return (
              <section className="archive-container" key={year}>
                <div className="archive__yearBlock">
                  <p className="text__small-header-text">{year} </p>
                </div>

                {Object.entries(months).map(([month, posts]) => {
                  return posts.map((item) => {
                    return (
                      <article key={item.id}>
                        <div className="text--container">
                          {/* <p className="text__small-header-text">{year}</p> */}
                          <div className="archives--content">
                            <p className="text__small-header-text">{month}</p>
                            <div className="archives--title--date">
                              <h3>{item.title}</h3>
                              <p>{item.date}</p>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  });
                })}
              </section>
            );
          })}
          {/* // end of the year */}
        </>
        {/* // )} */}

        {hasMore && (
          <button className="addMoreBtn" onClick={handleLoadMore}>
            load more
          </button>
        )}
      </main>
    </>
  );
};
export default Archives;
