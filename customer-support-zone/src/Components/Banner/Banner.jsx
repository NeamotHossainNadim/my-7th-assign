import React from "react";
import img1 from "../../assets/vector1.png";
import img2 from "../../assets/vector2.png";

const Banner = ({ inProgress = 0, resolved = 0 }) =>{
  const cardBase =
    "relative flex flex-col items-center justify-center rounded-lg p-8 text-white shadow-md overflow-hidden";

  // renders img1 on left & img2 on right
  const TwoSideVectors = () => (
    <>
      {/* Left side decorative image */}
      <img
        src={img1}
        alt=""
        className="pointer-events-none absolute left-0 top-1/2 w-1/3 max-w-[140px] -translate-y-1/2 object-contain opacity-100"
      />
      {/* Right side decorative image */}
      <img
        src={img2}
        alt=""
        className="pointer-events-none absolute right-0 top-1/2 w-1/3 max-w-[140px] -translate-y-1/2 object-contain opacity-100"
      />
    </>
  );

  return (
    <section className="w-full bg-gray-50 py-8">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        {/* In-Progress Card */}
        <div
          className={cardBase}
          style={{
            background: "linear-gradient(135deg, #7B2FF7 0%, #A700FF 100%)",
          }}
        >
          <TwoSideVectors />
          <h2 className="relative text-lg font-medium">In-Progress</h2>
          <p className="relative mt-2 text-5xl font-bold">{inProgress}</p>
        </div>

        {/* Resolved Card */}
        <div
          className={cardBase}
          style={{
            background: "linear-gradient(135deg, #2ECF72 0%, #00875A 100%)",
          }}
        >
          <TwoSideVectors />
          <h2 className="relative text-lg font-medium">Resolved</h2>
          <p className="relative mt-2 text-5xl font-bold">{resolved}</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;