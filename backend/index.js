/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const { SerialPort, ReadlineParser } = require('serialport')


const dotenv = require("dotenv");

const app = express();
dotenv.config();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// const path= `\\.\COM3`

const sPort = new SerialPort( {path: `/dev/ttyS2`, baudRate: 9600});
// SerialPort.binding.list().then(a => console.log(a))

// SerialPort.list().then(a => console.log(a))

const parser = sPort.pipe(new ReadlineParser({ delimiter: '\n' }));

sPort.on('open', function() {
  console.log("Arduino ON!")
})

sPort.on('error', function(err) {
  console.log('Error while opening port: ', err.message)
})

sPort.open(function (err) {
  if (err) {
    return console.log('Error opening port: ', err.message)
  }

  sPort.write('main screen turn on')
})

parser.on('data', (data) => {
  console.log('Datos desde el puerto serial:', data);
});

app.get("/", (Request, Response) => {
  Response.json({ msg: "Hello :)" });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
