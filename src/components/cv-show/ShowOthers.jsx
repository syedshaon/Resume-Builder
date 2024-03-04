import { useAuthContext } from "@/context/AuthContext";

export default function ShowOthers() {
  const { otherInfo } = useAuthContext();

  console.log(otherInfo.some((item) => item.visible));

  return (
    otherInfo.some((item) => item.visible) &&
    otherInfo.map((other, index) => (
      <div className={`${!other.visible && "hidden"} others-entry`} key={index}>
        <h3 className="title">{other.title}</h3>
        <ul className="summary">
          {/* Summary separated with semicolons are converted to a list */}
          {other.summary.map((element, i) => element && <li key={i}>{element}</li>)}
        </ul>
      </div>
    ))
  );
}
