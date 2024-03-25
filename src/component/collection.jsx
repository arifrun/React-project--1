const Collection = () =>{ 
    return( 
       <section className="pt-56 pb-48"> 
         <div className="container">  
            <h2 className="text-center font-bold text-6xl"><span className="text-[red]">New</span> Collection</h2>   

            <div className="flex gap-24 mt-32">   
               <div className="w-1/3 relative"> 
                  <img className="w-full" src="/collection-1.png" alt="" />  
                  <div className="w-10/12 h-14 bg-white text-center absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl hover:bg-[yellow] cursor-pointer"> 
                     <p className="leading-[56px] text-2xl">Sweater</p> 
                  </div>
               </div> 
               <div className="w-1/3 relative"> 
                  <img className="w-full" src="/collection-2.png" alt="" /> 
                  <div className="w-10/12 h-14 bg-white text-center absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl hover:bg-[blue] cursor-pointer"> 
                     <p className="leading-[56px] text-2xl">Denim</p>
                  </div>
               </div> 
               <div className="w-1/3 relative"> 
                  <img className="w-full" src="/collection-1.png" alt="" />  
                  <div className="w-10/12 h-14 bg-white text-center absolute bottom-6 left-1/2 -translate-x-1/2 rounded-xl hover:bg-[red] cursor-pointer"> 
                     <p className="leading-[56px] text-2xl">Sweater</p>
                  </div>
               </div> 
            </div>
         </div>
       </section>
    );
};
export default Collection 