import '../style.css';
import Personal from '../images/Personal.png'
import ShapeImg from '../images/Shape.png'
const Home = () => {
  return (
    <>
    <section className="home" id="Home">
      <nav>
        <h2>That's my<span> Personal Portfolio</span></h2>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About Me</a></li>
          <li><a href="#Services">Service</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact Me</a></li>
        </ul>

        <a href="#" className="btn">Subscribe</a>
      </nav>
      <div className="content">
        <div className="container-texts">
          <h4>Hello, my name is</h4>
          <h1>Momtaz <span>Asmar</span></h1>
          <h3>I'm a <span>Full Stack</span> Junior <span>Developer</span></h3>
          <a href="#" className="btn">Download CV</a>

          <div className="social">
            <a href="https://www.linkedin.com/in/momtaz-asmar/" target="_blank"><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"/></a>
            <a href="https://github.com/Momtaz1992" target="_blank"><img src="https://img.icons8.com/color/48/null/github--v1.png"/></a>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><img src="https://img.icons8.com/external-others-inmotus-design/67/null/external-Gmail-virtual-keyboard-others-inmotus-design.png"/></a>
            <a href="https://www.facebook.com/momtazasmar/" target="_blank" ><img src="https://img.icons8.com/fluency/48/null/facebook-new.png"/></a>
          </div>
        </div>
        <div className="container-images">
            <img src={ShapeImg} alt="shape" className="shape" />
            <img src={Personal} alt="img"  className="pic" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Home