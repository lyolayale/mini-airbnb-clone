import group from "../resources/images/group.png";

export default function Hero(props) {
  return (
    <section className="hero">
      <div className="img-wrapper">
        <img className="hero--img" src={group} alt="" />
      </div>
    </section>
  );
}
