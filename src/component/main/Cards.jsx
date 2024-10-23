import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Cards = ({ handleCookBtn }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("chef.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card) => (
        <div key={card.recipe_id} className="card border p-6">
          <figure>
            <img className="rounded-xl" src={card.recipe_image} alt="Shoes" />
          </figure>
          <div className="">
            <h2 className="card-title mt-6 mb-4">{card.recipe_name}</h2>
            <p className="text-gray-500 mb-5">{card.short_description}</p>
            <hr />

            <ul className="mt-6 mb-4">
              <h3 className="font-medium text-lg mb-4">
                Ingredients:{card.ingredients.length}
              </h3>
              {card.ingredients.map((ingredient, idx) => (
                <li className="list-disc ml-8 text-gray-500" key={idx}>
                  {ingredient}
                </li>
              ))}
            </ul>
            <hr />
            <div className="flex gap-8 mt-4 text-gray-700">
              <p>
                <i className="fa-regular fa-clock mr-2"></i>{" "}
                {card.preparing_time}
              </p>
              <p className="">
                <i className="fa-solid fa-fire-flame-curved mr-2"></i>
                {card.calories}
              </p>
            </div>
            <div className="card-actions mt-4">
              <button
                onClick={() => handleCookBtn(card)}
                className="btn bg-primary px-6 rounded-full"
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
Cards.propTypes = {
  handleCookBtn: PropTypes.func.isRequired,
};
export default Cards;
