import { useAuthContext } from "@/context/AuthContext";

export default function ShowExperience() {
  const { experience } = useAuthContext();
  return (
    <div className="eduEx experience">
      <h2 className="title">Experiences</h2>
      {experience.map((exp) => (
        <div key={exp.id} className={`${!exp.visible && "hidden"} eduEx-list`}>
          <div className="eduEx-list-top">
            <div className="title-sub">
              <h3 className="title">{exp.company}</h3>
              <em>{exp.jobTitle}</em>
            </div>
            <div className="year-loc">
              <p className="year">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="location">{exp.location}</p>
            </div>
          </div>
          <ul className="summary">
            {/* Summary separated with semicolor(;) are converted to a list(<li></li>) */}
            {exp.summary.map((element, i) => element && <li key={i}>{element}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
