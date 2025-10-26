import "./Couple.css";
import groomImg from "../../assets/profile/bride.jpg";
import brideImg from "../../assets/profile/groom.jpg";
import { useCsvI18n } from "../../i18n/csvI18n";

const FILE = "src/components/Couple/Couple.jsx";

const Couple = ({ language }) => {
  const { t } = useCsvI18n();

  const tr = (key, fallback) => t(FILE, key, language, fallback);

  const content = {
    title: tr("title", "Us"),
    groomName: tr("groomName", "Sean"),
    brideName: tr("brideName", "Ha"),
    groomNote: tr("groomNote", "Cat's dad"),
    brideNote: tr("brideNote", "Cat's mom"),
  };

  return (
    // Not a <section> to keep Navigation anchors aligned
    <div className="couple" aria-label={content.title}>
      <h2 className="section-title" style={{ color: "var(--white)" }}>
        {content.title}
      </h2>
      <div className="couple-grid">
        <div className="profile-card">
          <div className="avatar-wrap">
            <img className="avatar" src={groomImg} alt={content.groomName} />
          </div>
          <div className="card">
            <h3 className="name">{content.groomName}</h3>
            <p className="note">{content.groomNote}</p>
          </div>
        </div>

        <div className="profile-card">
          <div className="avatar-wrap">
            <img className="avatar" src={brideImg} alt={content.brideName} />
          </div>
          <div className="card">
            <h3 className="name">{content.brideName}</h3>
            <p className="note">{content.brideNote}</p>
          </div>
        </div>
      </div>
      <div className="heart-decor" aria-hidden="true">
        <svg viewBox="0 0 160 80" role="img" aria-label="hearts">
          <path
            className="heart-path"
            d="M30 50 L20 40 A12 12 0 1 1 40 28 A12 12 0 1 1 60 40 L50 50 Z"
          />
          <path
            className="heart-path"
            d="M100 50 L90 40 A12 12 0 1 1 110 28 A12 12 0 1 1 130 40 L120 50 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Couple;

