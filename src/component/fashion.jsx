const Fashion = () => {
  return (
    <section className="pb-32">
      <div className="container flex  pb-48 gap-28">
        <div className="w-1/2 relative">
          <img src="/fashion.png" alt="" />
          <div>
            <img
              className="absolute -top-8 left-3/4 -translate-y-8 z-[-1]"
              src="/fashion-1.png"
              alt=""
            />
          </div>

          <div className="flex gap-11 pt-20  pb-20 pl-20  bg-[#FEECC8] rounded-3xl absolute left-3/4 top-3/4 z-[-1] mt-24">
            <div>
              <h2 className="font-bold text-6xl">2010</h2>
              <p className="mt-6 font-medium text-2xl">Founded</p>
            </div>
            <div className="h-[100px] border-2 border-black"></div>

            <div>
              <h2 className="font-bold text-6xl">5000+</h2>
              <p className="mt-6 font-medium text-2xl">Product Sold</p>
            </div>
            <div className="h-[100px] border-2 border-black"></div>
            <div>
              <h2 className="font-bold text-6xl">4500+</h2>
              <p className="mt-6 font-medium text-2xl"> Reviews</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 mt-20">
          <h2 className="w-[437px] font-bold text-6xl leading-snug">
            Best Fashion Since 2010
          </h2>
          <p className="w-[443px] font-semibold text-2xl mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Fashion;
