import Desktop from "../images/Desktop.png";
import "../style.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container-images-about">
          <img src={Desktop} alt="Desktop" />
        </div>
        <div className="container-texts">
          <h1>
            About <span> Me</span>
          </h1>
          <h5>
            <span>Full-Stack</span> Developer
          </h5>
          <p>
            {" "}
            <span>Hello!</span> I'm a passionate web developer with a{" "}
            <span>background in accounting and business management</span> .
            After spending seven years in sales management at a company, I moved
            to Germany to pursue my interest in coding and learn the German
            language. While studying and working as a cashier for a year and a
            half, I  <span> discovered my love for web development</span> and
            decided to take it seriously. I enrolled in WBS Coding School and{" "}
            <span>completed</span> their full web stack development course,
            honing my skills in HTML, CSS, JavaScript, and more. Now, I'm
            excited to take the next step in my career as{" "}
            <span>a junior front-end developer</span> . I'm eager to apply my
            skills and experience to{" "}
            <span>create amazing websites and apps</span> that solve problems.
            If you're looking for a dedicated, detail-oriented developer with{" "}
            <span>a passion for learning</span> and a drive to succeed, I'd love
            to chat.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
