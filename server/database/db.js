import mongoose from 'mongoose';

async function Connection(username, password) {
    const dbURL = "mongodb://" + username + ":" + password + "@ac-bk4t79y-shard-00-00.g1zdfyb.mongodb.net:27017,ac-bk4t79y-shard-00-01.g1zdfyb.mongodb.net:27017,ac-bk4t79y-shard-00-02.g1zdfyb.mongodb.net:27017/?ssl=true&replicaSet=atlas-1482n2-shard-0&authSource=admin&retryWrites=true&w=majority";
    try {
        await mongoose.connect(dbURL);
        console.log("Database connected successfully.")
    } catch (e) {
        console.log("ERR-DB:", e.message);
    }
}

export default Connection;