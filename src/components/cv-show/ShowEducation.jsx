import { useAuthContext } from "@/context/AuthContext";

export default function ShowEducation() {
  const { education } = useAuthContext();
  return (
    education.some((item) => item.visible) && (
      <div className="eduEx education">
        <h2 className="title">Education</h2>
        {education.map((edu) =>
          !edu.break ? (
            <div key={`edu-${edu.id}`} className={`${!edu.visible && "hidden"} eduEx-list`}>
              <div className="eduEx-list-top">
                <div className="title-sub">
                  <h3 className="title">{edu.school}</h3>
                  <em>{edu.degree}</em>
                </div>
                <div className="year-loc">
                  <p className="year">
                    {edu.startDate} {edu.startDate && "-"} {edu.endDate}
                  </p>
                  <p className="location">{edu.location}</p>
                </div>
              </div>
              {edu.result && <em className="result">Result: {edu.result}</em>}
              <ul className="summary">
                {/* Summary separated with semicolor(;) are converted to a list(<li></li>) */}
                {edu.summary.map((element, i) => element && <li key={i}>{element}</li>)}
              </ul>
            </div>
          ) : (
            <div key={`edu-${edu.id}`} className={`h-[120px] ${!edu.visible && "hidden"}`}></div>
          )
        )}
      </div>
    )
  );
}
