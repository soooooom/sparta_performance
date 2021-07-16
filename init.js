import "./db.js";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Prfm";


const PORT = process.env.PORT || 5000;
const handleListening = () => {
    console.log(`Listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);
 