const server = require("./server")
const sequelize = require("./database/dbconfig")

async () => sequelize.authenticate();
sequelize.sync({alter:true});

server.port = 8080
server.listen()