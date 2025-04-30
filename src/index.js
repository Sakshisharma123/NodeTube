const app = require("./app");
const connectDatabase = require("./db/database");
const dotenv = require("dotenv");

dotenv.config({
    path: "./.env"
})

connectDatabase()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MOngoDB connection Failed !!!", err);
})