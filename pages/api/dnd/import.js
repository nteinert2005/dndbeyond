import fetch from "node-fetch";
import connectDB from "../../../middleware/connectDB";

const handler = async (req, res) => {
  const { id } = req.body;

  async function getData() {
    try {
      const response = await fetch(
        `http://www.dndbeyond.com/character/${id}/json`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //console.log(response);
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }

  getData()
    .then((response) => {
      res.send({
        error: false,
        data: response,
      });
    })
    .catch((err) => {
      res.send({
        error: true,
        data: "error message",
      });
    });
};

export default connectDB(handler);
