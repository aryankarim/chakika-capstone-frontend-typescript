import { useState } from "react";

const garageData = {
  brand: [
    { brand_id: 1, brand_name: "BMW" },
    { brand_id: 2, brand_name: "Ford" },
    { brand_id: 3, brand_name: "Nissan" },
  ],
  model: [
    { model_id: 1, model_name: "Sonata" },
    { model_id: 2, model_name: "G6" },
    { model_id: 3, model_name: "Land Cruiser" },
  ],
  year: [
    { year_id: 1, model_year: 1997 },
    { year_id: 2, model_year: 2000 },
    { year_id: 3, model_year: 2020 },
  ],
};

export default function Garage() {
  const [savedCarState, setSavedCarState] = useState(false);

  return (
    <div>
      <div>
        <div>
          {savedCarState ? <button>remove</button> : <button>Save</button>}
        </div>
        <div>
          <select>
            <option selected disabled>
              BRAND
            </option>
            {garageData.brand.map((item) => (
              <option key={item.brand_id}>{item.brand_name}</option>
            ))}
          </select>
        </div>
        <div>
          <select>
            <option selected disabled>
              MODEL
            </option>
            {garageData.model.map((item) => (
              <option key={item.model_id}>{item.model_name}</option>
            ))}
          </select>
        </div>
        <div>
          <select>
            <option selected disabled>
              YEAR
            </option>
            {garageData.year.map((item) => {
              <option value={item.model_year} selected>
                {item.model_year}
              </option>;
            })}
          </select>
        </div>
        <div>
          <select>
            <option selected disabled>
              CATEGORY
            </option>
            <option value="interior">interior</option>
            <option value="exterior">exterior</option>
            <option value="wheels">wheels</option>
          </select>
        </div>
        <div>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
