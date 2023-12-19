import { Button } from "./Button";
import { SocialMediaLinks } from "./SocialMediaLinks";
import { personalInfo } from "../constants";

export const Footer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 mb-5 col-lg-6">
          <h2 style={{ color: "var(--med2-color)", marginBottom: "3rem" }}>
            Do you want to make beautiful <br />
            products?
          </h2>
          <Button
            color="var(--med2-color)"
            borderColor="2px solid var(--med2-color)"
          />
        </div>
        <div className="col-12 mb-5 col-lg-6">
          <p className="blockquote mb-5" style={{ color: "var(--fontColor)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab
            cupiditate necessitatibus ipsam alias vitae tenetur laudantium quia
            hic enim placeat nobis recusandae exercitationem, fuga provident.
            Enim ipsum dolorum possimus.
          </p>
          <SocialMediaLinks
            iconFontColor="var(--med2-color)"
            strongFontColor="var(--med2-color)"
          />
        </div>
        <div
          className="col-12 text-center mt-4"
          style={{ color: "var(--med2-color)" }}
        >
          <strong>Copywrite 2023 developed by {personalInfo.name}</strong>
        </div>
      </div>
    </div>
  );
};
