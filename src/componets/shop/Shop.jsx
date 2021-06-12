import axios from "axios";
import React, { useEffect, useState } from "react";
import { getItemsUrl } from "../../utils/url";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    fetchitems();
  }, []);

  const fetchitems = async () => {
    const response = await axios.get(getItemsUrl);
    console.log(response.data.data);
    setitems(response.data.data);
  };

  return (
    <div>
      {items.map((items) => {
        return (
          <div className="items" key={items.itemId}>
            <Link to={`/shop/${items.itemId}`}>
              <h2>{items.item.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
