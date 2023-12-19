import { personalInfo } from "../constants";
import { Button } from "./Button";
import { SocialMediaLinks } from "./SocialMediaLinks";
// import { BackgroundImage } from "./BackgroundImage";

export const About = () => {
  return (
    <div
      className=" row about py-5 justify-content-between flex-column flex-lg-row "
      style={{ color: "var(--fontColor)" }}
    >
      {/* info section */}
      {/* <BackgroundImage filter="var(--leafColor)" /> */}
      <div className=" col-12 col-lg-6 col-xl-7 info my-5 d-flex flex-column justify-content-between position-relative z-1">
        <div>
          <h2 className="mb-3">Hello Welcome</h2>
          <h1>
            Iam <strong>{personalInfo.name}</strong>
          </h1>
          <h1 className="mb-3">{personalInfo.job}</h1>
        </div>
        <div className="buttons">
          <Button
            backgroundColor="var(--hard-color)"
            color="var(--fontColor)"
            borderColor="2px solid var(--hard-color"
          />
          <a className="aboutLink" href="">
            See Portifolio
          </a>
        </div>
        <p className=" blockquote w-lg-75 pe-5">{personalInfo.summury}</p>
        <SocialMediaLinks iconFontColor="var(--hard2-color)" />
      </div>
      {/* image section */}
      <div className=" col-12 col-lg-6 col-xl-5 my-5 d-flex align-items-end position-relative parent">
        <div
          className="image d-flex mx-auto justify-content-center align-items-end position-relative"
          style={{
            background: "var(--gradientBack)",
          }}
        >
          <div className="borderPerson"></div>
          <img
            src={personalInfo.img}
            alt="logo"
            className="img-fluid"
            style={{ filter: "var(--filterColor)" }}
          />
        </div>
      </div>
    </div>
  );
};
