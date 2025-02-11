import { brands } from "../../../data/dummyData";

const Brands = () => {
  return (
    <div className="pt-6 pb-10">
      <div className="text-center max-w-[400px] mx-auto">
        <h1 className="mx-auto sub-heading">brands</h1>
        <h1 className="heading">our brands</h1>
        <p>
          We collaborate with top-tier brands to deliver excellence and quality
          in every project. Our trusted partners help us achieve innovation and
          success.
        </p>
      </div>
      <div className="flex-wrap p-4 mt-8 flex-center-center gap-x-16 gap-y-5">
        {brands.map((image, i) => (
          <div className="group" key={i}>
            <img
              src={image}
              alt="Brand Logo"
              className="w-20 group-hover:scale-125 transition-a"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
