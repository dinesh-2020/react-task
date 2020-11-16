import React from "react";
import data from "./data/data.json";
import "./bootstrap/css/bootstrap.min.css";
import logo1 from "./p1.jpg";
import logo2 from "./p2.jpg";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Resume from "./Resume.js";
import Resume2 from "./Resume2.js";

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/resume1" component={Resume} />
        <Route exact path="/resume2" component={Resume2} />
        <Route exact path="/" component={Home1} />
      </BrowserRouter>
    );
  }
}

function Home1() {
  return (
    <div className="row display-flex">
      <div className="card col-md-4 offset-2 mt-4" style={{ width: "10rem" }}>
        <img className="card-img-top" src={logo1} />
        <div>
          <h2>{data.id1.name}</h2>
          <h2>{data.id1.phone}</h2>
          <h2>{data.id1.email}</h2>
          <Link to="/Resume1" className="btn btn-primary">
            Click
          </Link>
        </div>
      </div>
      <div className="card col-md-4 mt-4" style={{ width: "20rem" }}>
        <img className="card-img-top" src={logo2} />
        <div>
          <h2>{data.id2.name}</h2>
          <h2>{data.id2.phone}</h2>
          <h2>{data.id2.email}</h2>
          <Link to="/Resume2" className="btn btn-primary">
            Click
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
