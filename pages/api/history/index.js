import nc from "next-connect";
import initDb from "../../../backend/db/connectDb";
import historyModel from "../../../backend/models/historyModel";
initDb();
const handler = nc()
  .get(async (req, res) => {
    try {
      const history = await historyModel.find({});
      res.send(history);
    } catch (error) {
      console.log(error);
    }
  })
  .post(async (req, res) => {
    const { bag_id, bag_name, bag_price, qty, date, history_type } =
      req.body;
    const newHistory = new historyModel({
      bag_id,
      bag_name,
      bag_price,
      qty,
      date,
      history_type,
    });
    try {
      await newHistory.save();
      res.json({ message: "New history added" });
    } catch (error) {
      console.log(error);
    }
  });

export default handler;
