import TopBar from '../../components/topBar/TopBar';
import './home.scss';

const Home = () => {
  return (
    <div className="home" id="accueil">
      <div className="home_wrapper">
        <TopBar />
        <section className="home_container">
          <div className="banner">
            <div className="banner_content">
              <h1 className="banner_title">Bienvenue dans notre univers</h1>
              <p className="banner_text">
                Découvrez des solutions sur mesure adaptées à vos besoins. Nous transformons vos idées en réalité.
              </p>
              <div className="banner_buttons">
                <a href="#contact" className="btn btn_primary">Nous Contacter</a>
                <a href="#about" className="btn btn_secondary">En Savoir Plus</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
