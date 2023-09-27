import { MongoClient } from "mongodb";

export default async function connectToMongoDB() {
	const uri = process.env.MONGODB_URI;
	const client = new MongoClient(uri);
	await client.connect();
	const db = client.db('weddiego_db');
	return db;
}

// async function connectToMongoDB() {
// 	const uri = 'mongodb+srv://newton:HnbQDdlC7xdgPGsu@weddiegodb.0qbld3u.mongodb.net/?retryWrites=true&w=majority';
// 	const client = new MongoClient(uri);
// 	await client.connect();
// 	const db = client.db('weddiego_db');
// 	return db;
// }
// export { connectToMongoDB };

// READ
// const invitados = await invitadosCollection.find().toArray();

//WRITE
// const newUser = {
//   name: 'John Doe',
//   email: 'john.doe@example.com',
// };
// await invitadosCollection.insertOne(newUser);

//UPDATE
// const filter = { name: 'John Doe' };
// const update = { $set: { email: 'jane.doe@example.com' } };
// await invitadosCollection.updateOne(filter, update);

// import invitadosFile from '../files/invitados.json'
// console.log(invitadosFile)
// await invitadosCollection.insertMany(invitadosFile);


// <!-- <p>{sample}</p> -->
// <section>
// 	<!-- {invitados.map((invitado) => (
// 		<p>{invitado.codigo}</p>
// 	))} -->
// 	{invitados[0].personas.map((persona:string) => (
// 		<p>{persona}</p>
// 	))}
// </section>
