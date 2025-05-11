import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://OSuperErick:erick84233248@cluster0.l3wrkr4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyaula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
