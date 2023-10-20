import React from "react";
const Abou = () => {
  return (
    <div className="hidden md:flex md:flex-col md:min-h-screen  bg-[#151515] pt-[5rem]">
      <div className="md:flex md:flex-row w-full bg-[#151515]">
        <div className="w-full flex flex-col pt-4">
          <div className=" h-auto p-6  pt-8 flex flex-row justify-start gap-4 pb-0 border-l-8 border-[rgb(140,254,62)]">
            <div className="leading-[75px] lg:leading-[100px] ">
              <span className="pl-[3rem] text-[75px] lg:text-[100px] leading-[100px] font-bold text-white ">
                Explore
                <br />
              </span>
              <span className="pl-[2.9rem] text-[135px] lg:text-[180px] font-bold  text-limee">
                Startups
              </span>
            </div>
            <div className="absolute p-0 left-[25rem] lg:left-[45rem] z-[0]">
              <svg
                className="lg:h-[333px] h-[150px]"
                viewBox="0 0 499 499"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    d="M495.609 85.7849C495.597 84.9259 495.341 84.0881 494.87 83.3696C494.399 82.6511 493.734 82.0817 492.951 81.7281C440.819 57.8237 305.243 81.1589 223.585 136.433C209.038 146.198 195.371 157.212 182.737 169.351C161.978 163.418 140.56 160.913 121.051 165.295C65.9657 177.872 39.9552 233.347 31.0075 257.642C30.5095 258.971 30.3266 260.396 30.4729 261.807C30.6192 263.218 31.0909 264.576 31.8508 265.773C32.6108 266.971 33.6382 267.976 34.8524 268.71C36.0665 269.443 37.4343 269.885 38.8481 270L122.129 276.701C121.004 282.861 120.193 289.073 119.699 295.315C119.293 299.638 120.413 303.966 122.866 307.548L148.382 345.131C150.802 348.735 154.403 351.381 158.566 352.612C164.511 354.462 170.547 356.008 176.649 357.246L152.025 436.971C151.61 438.326 151.514 439.76 151.745 441.159C151.976 442.557 152.528 443.884 153.358 445.033C154.188 446.183 155.272 447.125 156.527 447.785C157.782 448.445 159.172 448.806 160.59 448.838C186.404 449.642 247.674 446.101 279.668 399.594C290.978 383.105 296.63 362.399 298.862 341.035C314.857 333.815 330.193 325.215 344.695 315.334C426.548 260.204 497.726 145.744 495.609 85.7849ZM291.85 220.601C286.783 213.125 284.048 204.314 283.99 195.283C283.931 186.252 286.553 177.407 291.522 169.866C296.492 162.325 303.586 156.427 311.908 152.919C320.23 149.41 329.405 148.448 338.274 150.155C347.142 151.862 355.305 156.161 361.73 162.508C368.155 168.855 372.554 176.964 374.369 185.811C376.185 194.658 375.335 203.845 371.929 212.209C368.523 220.573 362.712 227.739 355.233 232.801C350.271 236.166 344.695 238.52 338.823 239.728C332.952 240.936 326.899 240.974 321.012 239.841C315.125 238.708 309.52 236.426 304.516 233.125C299.512 229.823 295.208 225.568 291.85 220.601Z"
                    fill="#F4F4F4"
                  />
                  <path
                    d="M141.842 367.536C135.736 371.679 127.142 372.098 116.931 371.905C94.0007 371.415 78.0879 348.456 86.3961 326.779C89.5563 318.563 96.3539 307.502 99.6953 305.239C100.423 304.757 100.981 304.057 101.289 303.239C101.596 302.422 101.639 301.528 101.409 300.685C101.18 299.842 100.691 299.092 100.012 298.543C99.3328 297.994 98.4977 297.672 97.6254 297.625C84.9176 296.754 72.2837 300.16 61.7353 307.3C35.5463 325.051 17.777 406.202 17.777 406.202C17.777 406.202 99.7729 419.833 125.962 402.082C136.533 394.95 144.396 384.467 148.283 372.321C149.38 368.483 145.073 365.243 141.842 367.536Z"
                    fill="#F4F4F4"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-row justify-between  px-0 pl-5">
            <div className="p-16 pr-0 flex flex-col justify-center">
              <div className="pb-4">
                <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">
                  What are{" "}
                </span>
                <span className="text-slate-500 text-5xl font-normal font-['Google Sans'] leading-10">
                  {" "}
                </span>
                <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">
                  Startups ?
                </span>
              </div>
              <div className="pb-4">
                <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">
                  Startup Lifecycle
                </span>
              </div>
              <div className="pb-4">
                <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">
                  Market Research
                </span>
              </div>
              <div className="pb-4">
                <span className="text-white text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">
                  How to Pitch?
                </span>
              </div>
              <div className="pb-4">
                <span className="text-white  text-start text-2xl lg:text-4xl font-normal font-['Google Sans'] leading-10">
                  How to get startup ideas?
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center pr-4 bg-[#151515] pb-8">
              {/* <img className="w-96 h-96 rounded-full bg-[#b7b7b7]" src="/dinesh.png" /> */}
              <img
                className=" overflow-hidden h-80 w-100"
                src="/Dine.png"
                alt=""
              />
              <div className="w-96 h-14 p-4 text-white text-center text-3xl lg:text-4xl font-bold">
                Dinesh Nalam
              </div>
              <div className="text-center  z-20 relative">
                <span className="text-[rgb(140,254,62)] p-0 z-20 text-lg lg:text-xl font-semibold leading-10">
                  Lead, GDSC MLRIT
                  <br />
                </span>
                <span className="text-[rgb(235,235,235)] text-md lg:text-lg font-normal leading-3">
                  EY Scholarship Finalist
                  <br />
                  State Level Pitch Fest winner
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[48px] px-12 pt-[20rem] justify-center ">
          <p className="-rotate-90 text-[rgb(140,254,62)] text-6xl lg:text-8xl  font-bold font-['Google Sans']">
            SPEAKER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abou;
