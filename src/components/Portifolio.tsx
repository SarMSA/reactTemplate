import { Serv } from "../constants";
import { useState } from "react";

export const Portifolio = () => {
  const [selectedItem, setSelectedItem] = useState(-1);
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex flex-column flex-xl-row align-items-center justify-content-between my-5">
        <h2 style={{ color: "var(--hard2-color)" }}>My recent projects</h2>
        <div className="buttons d-flex flex-wrap mt-4 my-xl-0 justify-content-center justify-content-xl-right">
          <button
            className={`btn me-2 my-1 ${selectedItem === -1 ? "active" : ""}`}
            onClick={() => {
              setSelectedItem(-1);
            }}
          >
            All
          </button>
          {Serv.map((item, index) => (
            <button
              className={`btn my-1 ${index !== Serv.length - 1 ? "me-3" : ""}
              ${selectedItem === index ? "active" : ""}`}
              onClick={() => {
                setSelectedItem(index);
                console.log(item.name);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="row text-center">
          {selectedItem === -1
            ? // for (all) button
              Serv.map((item) =>
                item.pic.map((sItem) => (
                  <div className="mb-3 col-12 col-md-6 col-lg-4">
                    <div
                      className="imageContainer"
                      style={{
                        backgroundColor: "var(--med-color)",
                        padding: "25px",
                        height: "100%",
                        borderRadius: "20px",
                      }}
                    >
                      <img
                        src={sItem.name}
                        alt={`pic${sItem.id}`}
                        className="img-fluid h-100"
                      />
                    </div>
                  </div>
                ))
              )
            : // for the other buttons
              Serv[selectedItem].pic.map((sItem) => (
                <div className="mb-3 col-12 col-md-6 col-lg-4">
                  <div
                    className="imageContainer"
                    style={{
                      backgroundColor: "var(--med-color)",
                      padding: "25px",
                      height: "100%",
                      borderRadius: "20px",
                    }}
                  >
                    <img
                      src={sItem.name}
                      alt={`pic${sItem.id}`}
                      className="img-fluid h-100"
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
