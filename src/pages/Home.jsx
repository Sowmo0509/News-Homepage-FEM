import React from "react";

const Home = () => {
  const cHeadlineHover = "cursor-pointer hover:text-[#e9ab53]";
  const cNavLinkHover = "cursor-pointer hover:text-[#f15e50]";

  return (
    <div className="main w-full h-screen py-8 container mx-auto">
      {/* navbar */}
      <div className="navbar grid grid-cols-12 gap-8 items-center py-8">
        <div className="logo col-start-2">
          <img src="/images/logo.svg" alt="logo" className="w-16" />
        </div>
        <div className="menu col-span-4 col-end-12">
          <ul className="flex gap-x-8 justify-end text-xl text-gray-500">
            <li className={cNavLinkHover}>Home</li>
            <li className={cNavLinkHover}>New</li>
            <li className={cNavLinkHover}>Popular</li>
            <li className={cNavLinkHover}>Trending</li>
            <li className={cNavLinkHover}>Categories</li>
          </ul>
        </div>
      </div>
      {/* body */}
      <div className="mainbody">
        <div className="hero-content grid grid-cols-12 gap-8 grid-rows-4 grid-flow-col">
          <div className="leftdiv col-start-2 col-end-9 row-span-6">
            <img src="/images/image-web-3-desktop.jpg" alt="" className="" />
            <div className="hero-text flex gap-x-12 pt-8">
              <h1 className="text-7xl font-black w-1/2">The Bright Future of Web 3.0?</h1>
              <div className=" w-1/2 flex flex-col justify-between items-start">
                <p className="text-gray-400 text-xl">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className="cursor-pointer bg-[#f15e50] hover:bg-black text-white px-8 py-3 font-medium trackercustom">READ MORE</button>
              </div>
            </div>
          </div>
          <div className="rightdiv col-start-9 col-end-12 bg-black row-span-6 px-8 py-8">
            <div className="new h-full">
              <div className="news-cards-all flex flex-col h-full">
                <h2 className="text-[#e9ab53] text-5xl py-4 font-bold">New</h2>
                <div className="flex flex-col flex-1 justify-between py-4">
                  <div className="news-card text-white">
                    <h4 className="text-[22px] font-bold mb-3 text-gray-200 cursor-pointer hover:text-[#e9ab53]">Hydrogen VS Electric Cars</h4>
                    <p className="text-lg text-gray-300">Will hydrogen-fueled cars ever catch up to EVs?</p>
                  </div>
                  <hr className="my-4" />
                  <div className="news-card text-white">
                    <h4 className="text-[22px] font-bold mb-3 text-gray-200 cursor-pointer hover:text-[#e9ab53]">The Downsides of AI Artistry</h4>
                    <p className="text-lg text-gray-300">What are the possible adverse effects of on-demand AI image generation?</p>
                  </div>
                  <hr className="my-4" />
                  <div className="news-card text-white">
                    <h4 className="text-[22px] font-bold mb-3 text-gray-200 cursor-pointer hover:text-[#e9ab53]">Is VC Funding Drying Up?</h4>
                    <p className="text-lg text-gray-300">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom grid grid-cols-12 gap-8 grid-flow-col pt-16">
          <div className="hero-news-bottom flex gap-x-12 col-start-2 col-end-12">
            <div className="bottom-card flex items-center gap-x-8">
              <img src="/images/image-retro-pcs.jpg" alt="" className="h-32" />
              <div className="texts">
                <h3 className="text-4xl font-extrabold opacity-20">01</h3>
                <h4 className="text-xl font-extrabold my-3 text-gray-800 cursor-pointer hover:text-[#f15e50]">Reviving Retro PCs</h4>
                <p className="text-lg text-gray-600">What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>
            <div className="bottom-card flex items-center gap-x-8">
              <img src="/images/image-top-laptops.jpg" alt="" className="h-32" />
              <div className="texts">
                <h3 className="text-4xl font-extrabold opacity-20">02</h3>
                <h4 className="text-xl font-extrabold my-3 text-gray-800 cursor-pointer hover:text-[#f15e50]">Top 10 Laptops of 2022</h4>
                <p className="text-lg text-gray-600">Our best picks for various needs and budgets.</p>
              </div>
            </div>
            <div className="bottom-card flex items-center gap-x-8">
              <img src="/images/image-gaming-growth.jpg" alt="" className="h-32" />
              <div className="texts">
                <h3 className="text-4xl font-extrabold opacity-20">03</h3>
                <h4 className="text-xl font-extrabold my-3 text-gray-800 cursor-pointer hover:text-[#f15e50]">The Growth of Gaming</h4>
                <p className="text-lg text-gray-600">How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
