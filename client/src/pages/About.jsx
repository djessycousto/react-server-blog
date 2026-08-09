import "./about.css";
const About = () => {
  return (
    <>
      <main className="main">
        <section className="intro">
          <h2>Deep focus through editorial clarity.</h2>
          <p>
            We believe the world is loud enough. Minimalist Journal is a
            sanctuary for ideas that require time, patience, and absolute focus.
          </p>
        </section>
        {/* body text */}

        <div className="text--container">
          <p className="text__small-header-text">THE MISSION</p>
          <h3>Curating Silence in the Digital Age</h3>
          <p>
            In an era of infinite scroll and rapid-fire content, we have lost
            the art of the long- form thought. Our mission is to provide a
            platform where words are given the space they deserve. We strip away
            the sidebars, the pop-ups, and the noise to leave only what matters:
            the message.
          </p>

          <p>
            Editorial clarity isn't just about aesthetics; it's about cognitive
            load. By designing for deep focus, we allow readers to engage with
            complex subjects without the constant pull of digital distraction.
          </p>
        </div>
      </main>
      {/* image */}
      <img src="" alt="" />

      <main className="main">
        {/* body text 2*/}

        <div className="text--container">
          <p className="text__small-header-text">OUR HISTORY</p>
          <h3>From a Simple Idea to a Global Forum</h3>
          <p>
            Founded in 2024, Minimalist Journal began as a reaction to the
            cluttered state of modern publishing. We saw a growing community of
            writers and readers who were exhausted by the "attention economy"
            and were seeking something more deliberate.
          </p>

          <p>
            What started as a small personal project for deep thinking has
            evolved into a global community. Today, we host thousands of essays
            from diverse voices, all unified by a commitment to quality over
            quantity and depth over speed.
          </p>
        </div>

        {/* contact and info  */}
        <p className="text__small-header-text">INQUIRIES</p>
        <h3>General Contact</h3>
        <p>Have a question or a story to share? We’d love to hear from you. </p>
        <p className="contact">hello@minimalistjournal.com</p>

        {/* right  */}

        <p className="text__small-header-text">SUBMISSIONS</p>
        <h3>Write with Us</h3>
        <p>
          We are always looking for insightful essays that challenge the status
          quo.
        </p>
        <p className="contact">Submission Guidelines</p>
      </main>
    </>
  );
};
export default About;
