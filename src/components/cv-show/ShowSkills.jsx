import { useAuthContext } from "@/context/AuthContext";

export default function ShowSkills() {
  const { skills } = useAuthContext();
  return (
    <div className="others-entry" style={{ display: skills.visible ? "block" : "none" }}>
      <h3 className="title">Skills</h3>
      <ul className="summary">
        {/* Summary separated with semicolor(;) are converted to a list(<li></li>) */}
        {skills.skills.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
