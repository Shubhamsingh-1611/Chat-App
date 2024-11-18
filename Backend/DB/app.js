import mongoose from "mongoose";

const DBConect = async()=>{
    try {
      await mongoose.connect(process.env.MONGO_DB);
      console.log("Connected to DB")
    } catch(err){
     console.log(err);
    }
}
export default DBConect;