import React from "react";
import logo2 from "./p2.jpg";
import ramres from "./data/ramesh_resume.json";

function Resume2() {
  return (
    <div className="row display-flex">
      <div className="card col-md-3  mt-2">
        <img className="card-img-top" src={logo2} />
        <div>
          <h4>{ramres.details.name}</h4>
          <h4>{ramres.details.number}</h4>
          <h4>{ramres.details.email}</h4>
          <h4>{ramres.details.address}</h4>
          <br></br>
          <h5>Technical Skills:</h5>
          <li>{ramres.technicalskills[0]}</li>
          <li>{ramres.technicalskills[1]}</li>
          <li>{ramres.technicalskills[2]}</li>
          <h5>Hobbies:</h5>
          <li>{ramres.hobbies[0]}</li>
          <li>{ramres.hobbies[1]}</li>
        </div>
      </div>
      <div className="card col-md-9 mt-2">
        <div>
          <h4>Career Objective:</h4>
          <p>{ramres.careerobjective.info}</p>
          <h4>Acadamic Details:</h4>
          <table border="1px solid creamson">
            <tr>
              <th>S.No</th>
              <th>Qualification</th>
              <th>College Name</th>
              <th>year of passout</th>
              <th>Percentage</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{ramres.education[0].degree}</td>
              <td>{ramres.education[0].institute}</td>
              <td>{ramres.education[0].passoutyear}</td>
              <td>{ramres.education[0].percentage}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{ramres.education[1].degree}</td>
              <td>{ramres.education[1].institute}</td>
              <td>{ramres.education[1].passoutyear}</td>
              <td>{ramres.education[1].percentage}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{ramres.education[2].degree}</td>
              <td>{ramres.education[2].institute}</td>
              <td>{ramres.education[2].passoutyear}</td>
              <td>{ramres.education[2].percentage}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{ramres.education[3].degree}</td>
              <td>{ramres.education[3].institute}</td>
              <td>{ramres.education[3].passoutyear}</td>
              <td>{ramres.education[3].percentage}</td>
            </tr>
          </table>
          <h4>Decleration:</h4>
          <p>{ramres.declaration}</p>
          <br></br>
          <div className="row dispaly-flex">
            <div className="col-md-8">
              <p>Chittoor</p>
              <p>Date:</p>
            </div>
            <div className="">
              <p>(Ramesh)</p>
              <p>Signature</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume2;
