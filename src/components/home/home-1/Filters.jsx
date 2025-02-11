import { BiHome, BiDish, BiMap, BiMoney } from "react-icons/bi";

const Filters = () => {
  return (
    <div className="md:max-w-7xl px-4 w-full mx-auto relative -mt-8 sm:-mt-20">
      <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Location</h1>
            <div className="flex-align-center gap-x-2">
              <BiMap />
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Enter city or area"
              />
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Category</h1>
            <div className="flex-align-center gap-x-2">
              <BiHome />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option value="flats">Flats</option>
                <option value="pg-hostels">PG & Hostels</option>
                <option value="tiffin-service">Tiffin Service</option>
                <option value="food-centers">Food Centers</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Price range</h1>
            <div className="flex-align-center gap-x-2">
              <BiMoney />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option value="under-5k">Under ₹5000</option>
                <option value="5k-10k">₹5000 - ₹10,000</option>
                <option value="10k-15k">₹10,000 - ₹15,000</option>
                <option value="15k-20k">₹15,000 - ₹20,000</option>
                <option value="20k+">₹20,000+</option>
              </select>
            </div>
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold">Looking For</h1>
            <div className="flex-align-center gap-x-2">
              <BiDish />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark"
              >
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
                <option value="subscription">Subscription</option>
              </select>
            </div>
          </div>
        </div>
        <button className="w-full btn btn-primary md:w-fit">Search</button>
      </div>
    </div>
  );
};

export default Filters;
