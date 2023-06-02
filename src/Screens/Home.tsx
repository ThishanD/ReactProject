import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-native";

interface componentData {
  name: string;
  age: number;
}

const Home: React.FC = () => {
  const [number, Setnumber] = useState<number>(0);
  const [test, Settest] = useState<number>(0);

  useEffect(() => console.log("use effect called!!"), [test]);
  const handleIncrement = () => {
    Settest(test + 1);
  };
  const handleClick = () => {
    Setnumber(number + 1);
  };

  return (
    <div className="container">
      <h2 className="text-start ms-1 ps-1 custom-page-title">All Blogs</h2>
      <div className="row">
        <div className="col-md-4 col-xm-12 col-sm-6 mb-5 mb-5" style={{ textAlign: "center" }}>
          <div className="card border-success shadow p-3 mb-5 bg-white rounded">
            <div className="card-body pb-0">
              <h5 className="card-title mb-3">Special title treatment</h5>
              <div className="form-outline mb-2 mt-2">
                <textarea
                  className="form-control"
                  id="textAreaExample3"
                  rows={2}
                ></textarea>
              </div>

              <div>
                <button className="custom-btn-view">View Full Blog</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
