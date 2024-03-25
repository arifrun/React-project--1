const Banner = () => {
  return (
    <section className="p-24 bg-[#FAE3B6]">
      <div className="conatiner flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 transition-all">
          <h1 className="w-full xl:w-[455px] font-bold text-6xl leading-snug">Find The Best <span className="text-[red]">Fashion</span> Style For You</h1>
          <p className="w-full xl:w-[531px] font-normal text-2xl pt-9 pb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
          <button className="bg-[#000] text-[#fff] rounded-xl pt-6 pb-6 px-20  font-semibold text-2xl hover:bg-[red]">
            SHOP NOW
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/banner.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Banner;
