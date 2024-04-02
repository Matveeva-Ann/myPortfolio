import { CgEditBlackPoint } from "react-icons/cg";
import './Education.scss';

export default function EducationCard({ data }) {

  return (
    <li className="educationCard">
      <CgEditBlackPoint className="educationCard__point" />
      <h3 className="educationCard__title">
        <span>{data.specialty}</span>
        <span className="educationCard__title--color">{data.institution}</span>
      </h3>
      <p className="educationCard__time">{data.time}</p>
      <p className="educationCard__text">{data.description}</p>
    </li>
  );
}
