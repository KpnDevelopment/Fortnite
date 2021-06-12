import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function ShopDetails(match) {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetchitemsDeatils();
    console.log(match);
  }, []);

  const fetchitemsDeatils = async () => {
    const fetchitemsDeatils = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=6138b589-a11a-4cd9-8a42-077e12bd754e`
      //url doesnt wrks dynamicallyy.,...
      //   refer cross roads video and dev ed
    );
    const item = await fetchitemsDeatils.json();
    console.log(item);
  };

  return (
    <div>
      <h1>details</h1>
    </div>
  );
}

export default ShopDetails;
