import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo } from "../components"
import { Link } from "react-router-dom"


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p> 'm baby venmo tofu activated charcoal kitsch,
            lyft franzen paleo locavore. Vaporware next level hashtag,
            asymmetrical man braid shaman raw denim.
            Fanny pack yuccie vegan literally YOLO seitan pickled man bun.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}




export default Landing
