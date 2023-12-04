const Card = ({ horoscope }) => {
  console.log();
  return (
    <div className="card">
      <div className="title">
        <h3>{horoscope.title}</h3>
      </div>
      <img src={horoscope.image} alt={horoscope.title} />
      <div className="card__over">
        <h2>{horoscope.desc}</h2>
      </div>
      <div className="card__date">
        <p>{horoscope.date}</p>
      </div>
    </div>
  );
};

export default Card;
