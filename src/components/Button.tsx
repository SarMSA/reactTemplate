interface Props {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
}
export const Button = ({ color, backgroundColor, borderColor }: Props) => {
  return (
    <button
      type="button"
      className={`btn me-4`}
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: borderColor,
      }}
    >
      Hire me
    </button>
  );
};
