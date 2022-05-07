import { useState } from "react";

const garageData = {
  brand: [
    { brand_id: 1, brand_name: "BMW" },
    { brand_id: 2, brand_name: "Ford" },
    { brand_id: 3, brand_name: "Nissan" },
  ],
  model: [
    { model_id: 1, model_name: "GTR" },
    { model_id: 2, model_name: "Fusion" },
    { model_id: 3, model_name: "Land Cruiser" },
  ],
  year: [
    { year_id: 1, model_year: 1997 },
    { year_id: 2, model_year: 2000 },
    { year_id: 3, model_year: 2020 },
  ],
};

export default function Garage() {
  const [savedCarState] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-6 gap-4 justify-center">
        <button className="rounded bg-chakikaLightGreen focus:outline-chakikaPurple">
          {savedCarState ? "remove" : "Save"}
        </button>
        <select className="rounded bg-chakikaGrey border border-chakikaDarkGreen focus:outline-chakikaPurple">
          <option selected disabled>
            BRAND
          </option>
          {garageData.brand.map((item) => {
            return <option key={item.brand_id}>{item.brand_name}</option>;
          })}
        </select>
        <select className="rounded bg-chakikaGrey border border-chakikaDarkGreen focus:outline-chakikaPurple">
          <option selected disabled>
            MODEL
          </option>
          {garageData.model.map((item) => {
            return <option key={item.model_id}>{item.model_name}</option>;
          })}
        </select>
        <select className="rounded bg-chakikaGrey border border-chakikaDarkGreen focus:outline-chakikaPurple">
          <option selected disabled>
            YEAR
          </option>
          {garageData.year.map((item) => {
            return (
              <option value={item.model_year} selected>
                {item.model_year}
              </option>
            );
          })}
        </select>
        <select className="rounded bg-chakikaGrey border border-chakikaDarkGreen focus:outline-chakikaPurple">
          <option selected disabled>
            CATEGORY
          </option>
          <option value="interior">interior</option>
          <option value="exterior">exterior</option>
          <option value="wheels">wheels</option>
        </select>
        <button className="rounded bg-chakikaLightGreen focus:outline-chakikaPurple">
          Search
        </button>
      </div>
    </div>
  );
}
