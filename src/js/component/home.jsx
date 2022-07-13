import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center mt-5">
      <div className="container text-center p-1 m-1 hoja">
        <div className="input-group w-75">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient"
			readonly
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div>
        <ul className="list-group">
          <li className="list-group-item Anch">An item</li>
          <li className="list-group-item Anch">A second item</li>
          <li className="list-group-item Anch">A third item</li>
          <li className="list-group-item Anch">A fourth item</li>
          <li className="list-group-item Anch">And a fifth one</li>
        </ul>
      </div>
      <div className="hoja1"></div>
      <div className="hoja2"></div>
      <div className="hoja3"></div>
      <div className="hoja4"></div>
    </div>
  );
};

export default Home;
