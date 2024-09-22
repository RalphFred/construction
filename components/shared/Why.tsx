export default function Why() {
  return (
    <div id="about" className="wrapper flex-between flex-col lg:flex-row gap-8 py-32">
      <div className="lg:w-1/2">
        <h2 className="text-4xl lg:text-5xl font-semibold">
          Why Choose us for best construction experience
        </h2>
      </div>
      <div className="lg:w-1/2">
        <p className="text-lg text-slate-600 mb-8 lg:mb-4">
        Buildora welcomes innovation and integrity, ensuring every project is completed with unmatched expertise.
        </p>
        <button className="w-[180px] py-3 text-white bg-blue-1 rounded-tl-[36px] rounded-tr-sm rounded-br-[36px] rounded-bl-sm">
          Explore
        </button>
      </div>
    </div>
  );
}
