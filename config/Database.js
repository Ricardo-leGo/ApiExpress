const {MongoClient}= require('mongodb');

module.exports = async () => {
    const client = await MongoClient.connect("mongodb://localhost:27017/MainBase",{useUnifiedTopology: true,useNewUrlParser:true});
    const db = await client.db();
    return db;
}