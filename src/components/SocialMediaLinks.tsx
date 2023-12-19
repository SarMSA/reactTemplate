import { personalInfo } from "../constants";
interface Props {
  strongFontColor?: string;
  iconFontColor: string;
}

export const SocialMediaLinks = ({ strongFontColor, iconFontColor }: Props) => {
  return (
    <div className="d-flex align-item-center">
      <strong className={`me-5`} style={{ color: strongFontColor }}>
        Follow me :{" "}
      </strong>
      {personalInfo.socialMedia.map((media) => (
        <a
          key={media.id}
          href={media.link}
          className={`me-5`}
          style={{ color: iconFontColor }}
        >
          <media.icon size="1.3rem" />
        </a>
      ))}
    </div>
  );
};
