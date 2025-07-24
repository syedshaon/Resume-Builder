import { useAuthContext } from "@/context/AuthContext";

export default function ShowSkills() {
  const { skills } = useAuthContext();
  return (
    <div className="others-entry" style={{ display: skills.visible ? "block" : "none" }}>
      <h3 className="title">Skills</h3>
      <ul className="summary">
        {skills.skills.map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
