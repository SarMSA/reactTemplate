import { JobCard } from "./JobCard";
import { Serv } from "../constants";

import { useState, useEffect } from "react";

export const Services = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center text-center py-5 ">
        <h1 className="mb-4" style={{ color: "var(--hard2-color)" }}>
          What do I help
        </h1>
        <p className="blockquote w-75" style={{ color: "var(--fontColor)" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          ratione delectus nisi accusantium. Voluptates iste neque quis atque
          magnam autem commodi sunt distinctio, sint natus tenetur, harum eum
          eos? Laboriosam?
        </p>
      </div>
      <div className="jobCard position-relative d-flex flex-column">
        <div
          className="centerLine"
          style={{ backgroundColor: "var(--med-color)" }}
        ></div>
        {Serv.map((item) => (
          <JobCard
            pLeft={() => {
              if (windowWidth < 992) {
                return "20px";
              } else {
                if (item.id % 2 !== 0) {
                  return "20px";
                } else {
                  return `20rem`;
                }
              }
            }}
            pRight={() => {
              if (windowWidth < 992) {
                return "20px";
              } else {
                if (item.id % 2 !== 0) {
                  return `20rem`;
                } else {
                  return "20px";
                }
              }
            }}
            float={item.id % 2 !== 0 ? "left" : "right"}
            name={item.name}
            desc={item.desc}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};
