import '../style.css'
import skills from '../images/skills.png'
const Skills = () => {
  return (
    <>
       <section className="Skills">
              <div className="container-skills">
                     <h1><span>MY </span> Skills</h1>
                     <div className="content-skills">
                            <div className="skill"><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-color-tal-revivo.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/color/48/null/css3.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/dusk/64/null/javascript-logo.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/color/48/null/bootstrap.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/officel/40/null/react.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/3d-fluency/94/null/github.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/dusk/64/null/sql.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/color/48/null/nodejs.png"/></div>
                            <div className="skill"><img src="https://img.icons8.com/color/48/null/mongodb.png"/></div>
                     </div>
              </div>
              <div className="container-images-skills">
                     <img src={skills} alt="skills" />
              </div>
       </section>
    </> 
  )
}

export default Skills