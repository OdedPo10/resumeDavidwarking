import "./style.css";
import { Link } from "react-router-dom";
const Inderdoction = () => {
  return (
    <div className="contianer-intro">
      <body className="d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h3 className="float-md-start mb-0">ResuMaker</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a
                  className="nav-link fw-bold py-1 px-0 active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a className="nav-link fw-bold py-1 px-0" href="#">
                  Features
                </a>
                <a className="nav-link fw-bold py-1 px-0" href="#">
                  Contact
                </a>
              </nav>
            </div>
          </header>

          <main className="px-3">
            <h1>Build your own resume</h1>
            <p className="lead">
              Using our brand new resume creator you can building simple and
              beautiful resume with minimum and max performance, just add your
              own beautiful personality and find the jox you were dreaming on.
            </p>
            <p className="lead">
              <Link to="/personal">
                <a className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                  Start building
                </a>
              </Link>
            </p>
          </main>

          <footer className="mt-auto text-white-50">
            <p>
              Cover template for{" "}
              <a href="https://getbootstrap.com/" className="text-white">
                Bootstrap
              </a>
              , by{" "}
              <a href="https://twitter.com/mdo" className="text-white">
                @mdo
              </a>
              .
            </p>
          </footer>
        </div>
      </body>
    </div>
  );
};

export default Inderdoction;
