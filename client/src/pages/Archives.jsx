const Archives = () => {
  return (
    <>
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
