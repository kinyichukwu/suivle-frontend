import Transition from "../transitions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractTransactionHash } from "../../utils";
import worlddextop from "../../../assets/landing-page/WeBuildSolutionsForWeb3/WorldDextop.png";
import worldTablet from "../../../assets/landing-page/WeBuildSolutionsForWeb3/World.svg";
import imageGroup from "../../../assets/landing-page/WeBuildSolutionsForWeb3/groupImageDextop.svg";

const WeBuildSolutionsForWeb3 = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [network, setNetwork] = useState("mainnet");

  const handleSearch = (e) => {
    e.preventDefault();
    const extractedHash = extractTransactionHash(txHash);
    if (extractedHash) {
      navigate(`/graph/${network}/${extractedHash}`);
      setShowModal(false);
    } else {
      navigate(`/graph/${network}/demo`);
      setShowModal(false);
    }
  };

  return (
    <Transition>
      <div className="text-white bg-gradient-to-r from-gradient-blue-start via-gradient-blue-mid to-gradient-purple-end w-full flex justify-center items-center mb-24 py-10 lg:py-[4.5rem] relative px-4 overflow-hidden max-w-[100rem]">
        <img
          src={worlddextop}
          alt="World background"
          className="absolute -z-0 opacity-100 left-0 hidden md:block"
        />
        <img
          src={worldTablet}
          alt="World background"
          className="absolute -z-0 opacity-100 left-0 md:hidden h-full"
        />
        <div className="max-w-[100rem] flex flex-col justify-center items-center md:flex-row lg:gap-[3rem] gap-10 sm:gap-4 lg:px-20">
          <div className="flex flex-col w-full">
            <button className="bg-white/[0.1] rounded-lg py-2 px-3 flex justify-center items-center text-white gap-3 w-fit tracking-widest font-light mb-6 flex-col">
              OUR MISSION
            </button>

            <div className="font-semibold text-[3.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] text-white leading-[0.85] tracking-tighter">
              We build <br /> transaction tools <br /> for Sui blockchain
            </div>
          </div>

          <div className="flex flex-col w-full gap-10">
            <p className="font-thin lg:text-[1.25rem]">
              Suivle is dedicated to helping users understand Sui blockchain
              transactions through interactive graph visualizations and advanced
              analytics. We bridge the gap between complex blockchain data and
              user-friendly insights.
            </p>

            <button
              onClick={() => setShowModal(true)}
              className={`bg-white cursor-pointer shadow-lg rounded-lg px-4 lg:px-6 py-2 flex justify-center
              items-center gap-2 w-fit transition-all z-10 hover:scale-105`}
            >
              <div
                className="font-semibold bg-gradient-to-tr from-blue-400 to-purple-600 bg-clip-text
              text-transparent tracking-tighter text-[1.25rem] lg:text-[1.5rem]"
              >
                Start Visualizing
              </div>
              <img
                src={imageGroup}
                alt="button-image"
                className="max-md:w-[3.2rem]"
              />
            </button>
          </div>
        </div>

        {/* Search Modal */}
        {showModal && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
              onClick={() => setShowModal(false)}
            />

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[201] w-[90vw] max-w-2xl">
              <div className="bg-[#011829]/95 backdrop-blur-xl p-6 sm:p-8 rounded-xl shadow-2xl border border-white/20">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white/50 hover:text-white text-3xl leading-none transition-colors"
                >
                  ×
                </button>

                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3 text-center">
                  Visualize Transaction
                </h2>
                <p className="text-white/70 text-sm sm:text-base mb-6 text-center">
                  Select network and enter transaction hash or paste explorer URL
                </p>

                <form onSubmit={handleSearch}>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <select
                        value={network}
                        onChange={(e) => setNetwork(e.target.value)}
                        className="px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:border-sui-blue focus:bg-white/15 transition-all text-sm lg:text-base cursor-pointer appearance-none bg-no-repeat bg-right pr-10"
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
                        placeholder="Enter transaction hash or paste explorer URL..."
                        className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-sui-blue focus:bg-white/15 transition-all text-sm lg:text-base"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-ful cursor-pointer px-8 py-4 bg-gradient-to-r from-[#3DB3FC] via-[#5C80FA] to-[#936BF9] text-white rounded-lg font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                      Visualize
                    </button>
                  </div>

                  <p className="text-white/50 text-xs sm:text-sm text-center mt-4">
                    Or{" "}
                    <button
                      type="button"
                      onClick={() => {
                        navigate(`/graph/${network}/demo`);
                        setShowModal(false);
                      }}
                      className="text-sui-blue cursor-pointer hover:text-sui-blue-dark underline transition-colors"
                    >
                      try a demo transaction
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </Transition>
  );
};

export default WeBuildSolutionsForWeb3;
