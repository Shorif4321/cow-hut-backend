import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
  try{
     await mongoose.connect(config.database_url as string);
     console.log("daatabase connected successfully")

     app.listen(config.path, () => {
      console.log(`Cow hut bakend runing on port ${config.path}`)
    })
  }
  catch(error){
    console.log("Failed to connected Database",error)
  }
}


bootstrap()