const Counter = () => {
  return (
    <div className="flex-wrap justify-center gap-4 px-4 py-8 flex-align-center sm:justify-between bg-secondary">
      <div className="text-center">
        <h1 className="heading !text-slate-100">5k+</h1>
        <p className="text-slate-100">Rooms Rented</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">200+</h1>
        <p className="text-slate-100">Verified Owners</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">10k+</h1>
        <p className="text-slate-100">Tiffin Orders Delivered</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">98%</h1>
        <p className="text-slate-100">Customer Satisfaction</p>
      </div>
    </div>
  );
};

export default Counter;
