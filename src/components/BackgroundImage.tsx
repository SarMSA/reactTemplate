import backgroundImage from "../assets/backgroundImage.svg";

interface Props {
  filter: string;
}
export const BackgroundImage = ({ filter }: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: "0",
        top: "33%",
        left: "5%",
        transform: "rotate(37deg)",
      }}
    >
      <img
        src={backgroundImage}
        alt=""
        style={{
          filter: filter,
          width: "50%",
          height: "50%",
          transform: "rotateX(180deg) rotate(-90deg)",
        }}
      />
    </div>
  );
};
