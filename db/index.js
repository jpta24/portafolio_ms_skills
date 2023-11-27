const connectMongoDB = require('./mongoDB/mongodb.utils');
const connectSQL = require('./sql/sql.utils');

const connectDBs = async () => {
	await connectMongoDB();
	// await connectSQL();
};

module.exports = {
	connectDBs,
};
