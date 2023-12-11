import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const runSever =(port: number, server: http.Server) =>{
    server.listen(port, () => {
        console.log(`Runnig at PORT ${port}`);
    })
}

const regularServer = http.createServer(app)
if(process.env.NODE_ENV === 'production'){
    // Configar SSL
    //Rodar server na 80 e 443
}else {
    const serverPort: number = process.env.PORT ? parseInt(process.env.PORT) : 9000
    runSever(serverPort, regularServer);
}