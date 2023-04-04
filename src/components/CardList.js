import Card from "./Card";

export default function CardList(props) {
  return (
    <ul className="card-list">
      {props.cardData
        .filter(card => card.isOn)
        .map(card => (
          <Card key={card.id} {...card} />
        ))}
    </ul>
  );
}
