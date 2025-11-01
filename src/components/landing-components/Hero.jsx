import { useNavigate } from "react-router-dom";
import { useState } from "react";
import zigzag from "../../../assets/landing-page/Zigzag.png";
import zigzag2 from "../../../assets/landing-page/Zigzag2.png";

const Hero = () => {
  const navigate = useNavigate();
  const [txHash, setTxHash] = useState("");
  const [network, setNetwork] = useState("mainnet");

  const handleSearch = (e) => {
    e.preventDefault();
    if (txHash.trim()) {
      navigate(`/graph/${network}/${txHash.trim()}`);
    } else {
      navigate(`/graph/${network}/demo`);
    }
  };

  return (
    <div className="relative w-full">
      {/* Hero Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-sui-blue/15 via-sui-blue-dark/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#936BF9]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#3DB3FC]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <section className="w-full text-white flex flex-col justify-center items-center pb-24 md:pb-32 z-10 px-4 relative">
        <h1 className="flex flex-col justify-center items-center text-center lg:text-7xl xl:text-8xl text-[3rem] sm:text-[4rem] font-bold sm:px-3 tracking-tighter leading-[1.05] pt-24 md:pt-32 lg:pt-36">
          <span className="text-sui-blue">Visualize</span> <span className="text-white">Sui</span> <br />
          <div className="flex gap-3 justify-center flex-wrap">
            <span className="text-white">
              Blockchain
            </span>
            <span className="text-sui-blue">Transactions</span>
          </div>
        </h1>
        <p className="text-center pt-6 pb-8 sm:pt-6 text-base lg:text-lg z-10 text-white/70 max-w-3xl">
          <span className="text-white">Suivle</span> is dedicated to helping users understand <span className="text-sui-blue">Sui blockchain transactions</span> through interactive <span className="text-white">graph visualizations</span> and analytics
        </p>

        <form onSubmit={handleSearch} className="w-full max-w-2xl px-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch flex-1">
              <select
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
                className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-sui-blue focus:bg-white/15 transition-all text-sm lg:text-base cursor-pointer appearance-none bg-no-repeat bg-right pr-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.5)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundSize: '1.5rem',
                  backgroundPosition: 'right 0.75rem center',
                  minWidth: '140px'
                }}
              >
                <option value="mainnet" className="bg-[#011829] text-white">Mainnet</option>
                <option value="testnet" className="bg-[#011829] text-white">Testnet</option>
                <option value="devnet" className="bg-[#011829] text-white">Devnet</option>
              </select>
              <input
                type="text"
                value={txHash}
                onChange={(e) => setTxHash(e.target.value)}
                placeholder="Enter transaction hash to visualize..."
                className="flex-1 w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-sui-blue focus:bg-white/15 transition-all text-sm lg:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer sm:w-auto px-8 py-4 bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] text-white rounded-full font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all whitespace-nowrap"
            >
              Visualize
            </button>
          </div>
          <p className="text-white/50 text-xs sm:text-sm text-center mt-3">
            Or{" "}
            <button
              type="button"
              onClick={() => navigate(`/graph/${network}/demo`)}
              className="text-sui-blue hover:text-sui-blue-dark underline transition-colors"
            >
              try a demo transaction
            </button>
          </p>
        </form>
      </section>
      <img
        src={zigzag}
        alt="Decorative zigzag pattern element"
        className="zig-float top-[21rem] lg:top-[30rem] h-24 md:h-28 lg:h-32 min-[1200px]:h-40 absolute left-[6%] md:left-[18%] lg:left-[10%] min-[1200px]:left-[15%] z-[5]"
      />
      <img
        src={zigzag2}
        alt="Decorative zigzag pattern element"
        className="zig-float-2 top-[16.5rem] sm:top-[18rem] lg:top-[24rem] h-14 md:h-20 lg:h-24 min-[1200px]:h-32 absolute right-[10%] md:right-[15%] lg:right-[10%] z-[5]"
      />
    </div>
  );
};

export default Hero;
