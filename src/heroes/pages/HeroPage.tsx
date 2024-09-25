import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //const { id, ...rest } = useParams();
  //console.log(id, rest);
  const hero = useMemo(() => getHeroById(id), [id]);
  //console.log(hero);

  const onNavigateBack = () => {
    navigate(-1); //can be more eleborate
  };

  if (!hero) {
    //return <>404 - Not found</>;
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt- animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>Apparience:</b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          ..Back
        </button>
      </div>
    </div>
  );
};
