const MongoClient = require("mongodb").MongoClient;
const uri = "copyPasteFromAtlasHere";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  // perform actions on the collection objet

  client
    .db("school")
    .collection("student")
    .insertOne({ name: "Prem", age: 20, location: "Chennai" });

  client.close();
});
