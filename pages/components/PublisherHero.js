const PublisherHero = () => {
  return (
    <>
      <div
        id="home"
        style={{ marginTop: "-70px", paddingTop: "100px" }}
        className="bg-black"
      >
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24 bg-black">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-extrabold leading-tight">
              Interested in getting your published work to more users?
            </h1>
            <p className="mt-5 sm:mt-10 text-gray-600 font-normal text-center text-lg sm:text-lg">
              Epic Table allows you to import your content and make it a digital
              asset that your following and other potential users can start
              playing with immediately. With multiple ways of generating income,
              you can sell your content and allow players to use it within
              minutes.
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
          </div>
        </div>
      </div>
      <div
        id="home"
        style={{ marginTop: "-70px", paddingTop: "100px" }}
        className="bg-black"
      >
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24 bg-black">
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-extrabold leading-tight">
              Ways to make money with our platform
            </h1>
            <div className="w-full flex text-center mt-8 text-white">
              <div className="w-4/12">
                <h4 className="font-3xl"> Sell Books Online </h4>
                <span>
                  {" "}
                  Once you upload a new book or reference material, you can
                  include the entire work on our system. Things like Classes,
                  Stories, Hooks, Items and so much more can be easily imported
                  to character sheets, and stories.{" "}
                </span>
              </div>
              <div className="w-4/12">
                <h4> Sell Premium Items </h4>
                <span>
                  {" "}
                  If you want to include just one item, ie that new custom
                  Ranger class you just built, you can easily create that and
                  allow users to purchase this as an one-off purchase{" "}
                </span>
              </div>
              <div className="w-4/12">
                <h4> Sell Memberships* </h4>
                <span>
                  {" "}
                  We are working on a system, that would allow an user to be
                  able to follow your work and get updates based on a membership
                  option. Stay tuned for more information.{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublisherHero;
