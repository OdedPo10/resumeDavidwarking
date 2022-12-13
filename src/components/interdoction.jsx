import { Link } from "react-router-dom";

const Inderdoction = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <main className="px-3">
        <h1>Build your own resume</h1>
        <p className="lead" style={{ paddingLeft: "20vw", paddingRight: "20vw" }}>
          Using our brand new resume creator you can building simple and
          beautiful resume with minimum and max performance, just add your
          own beautiful personality and find the jox you were dreaming on.
        </p>
        <p className="lead" >
          <Link to="/personal">
            <a className="btn btn-lg btn-secondary fw-bold border-white bg-white">
              Start building
            </a>
          </Link>
        </p>
      </main>


    </div>


  );
};

export default Inderdoction;
