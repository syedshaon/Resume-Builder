import { useAuthContext } from "@/context/AuthContext";

export default function ShowOthers() {
  const { otherInfo } = useAuthContext();

  return (
    <>
      {otherInfo &&
        otherInfo.map((oth, index) => (
          <div className={`${!oth.visible && "hidden"} others-entry`} key={index}>
            <h3 className="title">{oth.title}</h3>
            <ul className="summary">
              {/* Summary separated with semicolons are converted to a list */}
              {oth.summary.map((element, i) => (
                <li key={i}>{element}</li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
}
