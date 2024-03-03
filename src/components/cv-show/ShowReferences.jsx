import { useAuthContext } from "@/context/AuthContext";

export default function ShowReferences() {
  const { references } = useAuthContext();

  return (
    <div className="eduEx references">
      <h2 className="title">References</h2>
      <div className="eduEx-list-top">
        {references.map((refs) => (
          <div className={`${!refs.visible && "hidden"} eduEx-list`} key={refs.id}>
            <div className="title-sub">
              <h3 className="title">{refs.referer}</h3>
              <em>{refs.title}</em>
              <p className="mob">{refs.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
