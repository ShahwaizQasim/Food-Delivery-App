import { app } from "./app";
import { ENV } from "./constant.js";
import { ConnectDB } from "./db/dbConnect.js";

ConnectDB()
  .then(() => {
    app.listen(ENV.PORT || 3000, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
