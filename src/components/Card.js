export default function Card(props) {
  return (
    <li className="card">
      <section className="image-container">
        <span className="image--tag">
          {props.imageTag ? <button>{props.imageTag}</button> : null}
        </span>
        <img src={props.image} alt="card img" />
      </section>

      <p className="ratingStar">
        {props.ratingStar} <span className="rating">{props.rating}</span>
      </p>

      <p className="card-text">{props.cardText}</p>
      <p className="card-price">
        <span className="bold-price">{props.cardPrice}</span> / person
      </p>
    </li>
  );
}
