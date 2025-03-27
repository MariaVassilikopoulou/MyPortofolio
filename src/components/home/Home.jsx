import { useNavigate } from "react-router-dom";
import "./Home.css";
import ProfilePicture from "../card/ProfilePicture";
import Navbar from "../Navbar";

function Home() {
  const navigate = useNavigate();
  const handleNavigation = (section) => {
    navigate(`/main#${section}`);
  };
  return (
    <section className="homebody">
      <Navbar onNavigate={handleNavigation} />
      <div className="home">
        <ProfilePicture />
        <h1>Maria Vassilikopoulou</h1>

        <p>Creating Web Applications</p>

        <button onClick={() => handleNavigation("main")}>
          Explore My Work
        </button>
      </div>
    </section>
  );
}

export default Home;
