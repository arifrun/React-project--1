import { IoIosStarHalf } from "react-icons/io";

const Product = () => {
  return (
    <section className="bg-[#CFA485] mt-6">
      <div className="container pt-14 pb-48 flex gap-16 ">
        <div className="relative">
          <h2 className="w-[437px] font-bold text-6xl text-[white] leading-snug">
            Best Seller <span className="text-[blue]"> Product</span>
          </h2>
          <p className="w-[457px] font-bold text-2xl text-[white] pt-11 pb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
            velit tortor quam at donec etiam bibendum sagittis. Libero tempor,
            lacus amet, scelerisque neque mauris odio risus nec. Nisl,
            parturient at morbi morbi sit arcu. At integer maecenas tortor non
            lectus.
          </p>
          <div>
            <button className="bg-[#000] text-[#fff] rounded-xl pt-6 pb-6 px-20  font-semibold text-2xl hover:bg-[red]">
              SHOP NOW
            </button>
          </div>   
          <div className="absolute -top-40 left-2/4 -translate-x-2/4 z-[-1]"> 
            <img src="/fashion-1.png" alt="" />
          </div>
        </div>

        <div className="flex gap-8 ">
         
          <div>  
          <img  src="/product-1.png" alt="" />
             <div className=" pt-3.5 pb-3 pl-5 bg-[white]"> 
             <div className="flex font-bold text-2xl gap-2 text-[blue]">
             <IoIosStarHalf /> 
             <IoIosStarHalf /> 
             <IoIosStarHalf /> 
             <IoIosStarHalf /> 
             <IoIosStarHalf />
             </div> 
             <p className="font-semibold text-2xl pt-1.5 pb-1.5">Sweater Shirt</p> 
              <div className="flex gap-14"> 
              <h2 className="font-normal text-2xl text-[#C4C4C4]">$35.99</h2> 
              <h2 className="font-normal text-2xl ">$75.99</h2> 
              </div> 

             </div>
          </div>
        
           <div> 
           <img src="/product-2.png" alt="" /> 
              <div className=" pt-3.5 pb-3 pl-5 bg-[white]">
              <div className="flex font-semibold text-2xl gap-2 text-[blue]">
             <IoIosStarHalf /> 
            <IoIosStarHalf /> 
             <IoIosStarHalf /> 
             <IoIosStarHalf /> 
             <IoIosStarHalf />
             </div> 
              <p className="font-semibold text-2xl pt-1.5 pb-1.5">Pants fashion</p> 
             <div className="flex gap-16"> 
                <h2 className="font-normal text-2xl text-[#C4C4C4]">$555</h2> 
                <h2 className="font-normal text-2xl">$369.99</h2>
             </div>
              </div>
           </div>
            
        </div>
      </div>
    </section>
  );
};
export default Product;
