//Server configuration

import App from "./app";

require("dotenv/config");

App.listen(process.env.PORTA);
