const Hero = () => {
  return (
    <div
      style={{ marginTop: "-70px", paddingTop: "100px" }}
      className="bg-black"
    >
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24 bg-black">
        <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-extrabold leading-tight">
            The Freedom to Create the
            <span className="text-red-700"> Characters </span>
            You Want
          </h1>
          <p className="mt-5 sm:mt-10 text-gray-600 font-normal text-center text-lg sm:text-lg">
            A place where you can upload, create and design your ideal character
            for your favorite TTRPG games. You have the freedom to export, use,
            redesign, share them as you wish.
          </p>
        </div>
        <div className="flex w-7/12 md:w-7/12 lg:w-5/12 justify-center items-center flex-col md:flex-row">
          <a
            href="https://discord.gg/G2xshESdZZ"
            target="_blank"
            rel="noreferrer"
            className="w-full text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900 bg-discordblue text-white transition duration-150 ease-in-out  rounded px-4 sm:px-10 py-2 sm:py-4 text-sm"
          >
            Join Us On Discord
          </a>
          <button className="w-full mt-2 md:mt-0 ml-0 md:ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-white transition duration-150 ease-in-out rounded border border-indigo-700 text-red-900 px-4 sm:px-10 py-2 sm:py-4 text-sm">
            Get Notifications
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
