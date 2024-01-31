function StoreCard({ name, address }) {
  return (
    <div className="store-card">
      <h3>{name}</h3>
      <p>Region: {address}</p>
    </div>
  );
}

export default StoreCard;
