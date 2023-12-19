import { IconType } from "react-icons";

interface Props {
  pLeft: () => string;
  pRight: () => string;
  float: string;
  name: string;
  desc: string;
  Icon: IconType;
}

export const JobCard = ({ pLeft, pRight, float, name, desc, Icon }: Props) => {
  return (
    <div
      className="position-relative content text-center text-lg-start"
      style={{ paddingRight: pRight(), paddingLeft: pLeft() }}
    >
      {/* info */}
      <div className="d-flex infoParant" style={{ float: float }}>
        <div className="info p-5 ">
          <h2 style={{ color: "var(--hard2-color)" }}>{name}</h2>
          <p className="mb-0">{desc}</p>
        </div>
      </div>
      <div className="iconParant">
        {/* icon */}
        <div className="icon">
          <div
            className="rounded-circle d-flex justify-content-center align-items-center p-2"
            style={{ backgroundColor: "var(--med-color)" }}
          >
            <Icon size="1.7rem" color="var(--hard2-color)" />
          </div>
        </div>
      </div>
    </div>
  );
};
