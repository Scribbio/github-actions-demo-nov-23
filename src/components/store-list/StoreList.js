import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreCard from "../store-card/StoreCard";

function StoreList() {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHouses = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://www.anapioficeandfire.com/api/houses"
        );
        setHouses(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading houses</div>;

  return (
    <div className="store-list">
      <h2>Game of Thrones Houses</h2>
      {houses.map((house, index) => (
        <StoreCard key={index} address={house.region} name={house.name} />
      ))}
    </div>
  );
}

export default StoreList;
