import "./Couple.css";
import groomImg from "../../assets/profile/bride.jpg";
import brideImg from "../../assets/profile/groom.jpg";

const Couple = ({ language }) => {
  const content = {
    en: {
      title: "Us",
      groomName: "Sean",
      brideName: "Ha",
      groomNote: "Cat's dad",
      brideNote: "Cat's mom",
    },
    "zh-TW": {
      title: "我們",
      groomName: "Sean",
      brideName: "Ha",
      groomNote: "貓的爸爸",
      brideNote: "貓的媽媽",
    },
    vi: {
      title: "Chúng tôi",
      groomName: "Sơn",
      brideName: "Hà",
      groomNote: "Ba của mèo",
      brideNote: "Mẹ của mèo",
    },
    ja: {
      title: "私たち",
      groomName: "ショーン",
      brideName: "ハ",
      groomNote: "ねこのお父さん",
      brideNote: "ねこのお母さん",
    },
  };

  const t = content[language] || content["en"];

  return (
    // Not a <section> to keep Navigation anchors aligned
    <div className="couple" aria-label={t.title}>
      <h2 className="section-title" style={{ color: "var(--white)" }}>
        {t.title}
      </h2>
      <div className="couple-grid">
        <div className="profile-card">
          <div className="avatar-wrap">
            <img className="avatar" src={groomImg} alt={t.groomName} />
          </div>
          <div className="card">
            <h3 className="name">{t.groomName}</h3>
            <p className="note">{t.groomNote}</p>
          </div>
        </div>

        <div className="profile-card">
          <div className="avatar-wrap">
            <img className="avatar" src={brideImg} alt={t.brideName} />
          </div>
          <div className="card">
            <h3 className="name">{t.brideName}</h3>
            <p className="note">{t.brideNote}</p>
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


