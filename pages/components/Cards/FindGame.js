import savedGames from "../../data/gameInfo";

const FindGame = ({ myGames }) => {
  return myGames ? (
    <div className="flex flex-col card">
      {myGames.length > 0 ? (
        <>
          <h2> My Games </h2>
          <div className="mt-6">
            {myGames.map((game) =>
              savedGames.map((map1) => {
                if (map1.name === game) {
                  return (
                    <a
                      href={game.link}
                      style={{
                        width: "31%",
                        float: "left",
                        marginRight: "10px",
                        height: "200px",
                        backgroundSize: "cover",
                        background: `url(${map1.background}`,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(0,0,0,0.4)",
                          height: "100%",
                          color: "white",
                          display: "flex",
                          paddingBottom: "50px",
                          alignItems: "flex-end",
                          justifyContent: "center",
                        }}
                      >
                        <h2>{map1.name} </h2>
                      </div>
                    </a>
                  );
                }
              })
            )}
            <a
              href="/"
              style={{
                width: "31%",
                float: "left",
                marginRight: "10px",
                height: "200px",
                background: "#FFD789",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "black",
                paddingBottom: "50px",
                fontWeight: "700",
              }}
            >
              See All Games
            </a>
          </div>
        </>
      ) : (
        <>
          <h2> Find your game </h2>
          <span className="mt-4 mb-4">
            {" "}
            We are constantly adding new games. So if you don't see one that fit
            your TTRPG then, let us <a href="#"> know.</a>{" "}
          </span>

          <button
            style={{
              width: "35%",
            }}
            className="btn mt-5 btn-primary"
          >
            Find a game
          </button>
        </>
      )}
    </div>
  ) : null;
};

export default FindGame;
