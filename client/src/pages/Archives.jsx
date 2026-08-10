const Archives = ({ items }) => {
  // grouping and sorting

  /* reduce */

  const grouped = items.reduce((acc, item) => {
    const year = item.date.split(",")[1];
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  return (
    <>
      {/* map  */}

      <main className="main">
        <section className="intro">
          <h2>Archives</h2>
          <p>
            A chronological collection of deep dives, contemplative essays, and
            brief notes. Exploring the intersections of technology, philosophy,
            and focus.
          </p>
          <div className="line"></div>
        </section>

        {/* body text */}
        {Object.entries(grouped).map(([year, posts]) => {
          // const numericYear = parseInt(year);
          // console.log(typeof numericYear);

          // const yearSorted = numericYear.sort(function (a, b) {
          //   a - b;
          // });

          // sort date

          // const yearSorted = [...year].map((yearS) => {
          //   return yearS.sort(function (a, b) {
          //     a - b;
          //   });
          // });

          // console.log(yearSorted);

          return posts.map((item) => {
            return (
              <article key={item.id}>
                <div className="text--container">
                  <p className="text__small-header-text"></p>
                  <div className="archives--content">
                    <p className="text__small-header-text">{year}</p>
                    <div className="archives--title--date">
                      <h3>{item.title}</h3>
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          });
        }, {})}
      </main>

      <main className="main">
        <section className="intro">
          <h2>Archives</h2>
          <p>
            A chronological collection of deep dives, contemplative essays, and
            brief notes. Exploring the intersections of technology, philosophy,
            and focus.
          </p>
        </section>
        {/* body text */}

        <div className="text--container">
          <p className="text__small-header-text">2024</p>
          <div className="archives--content">
            <p className="text__small-header-text">October</p>
            <div className="archives--title--date">
              <h3>Curating Silence in the Digital Age</h3>
              <p>october 14- 12min read</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Archives;
