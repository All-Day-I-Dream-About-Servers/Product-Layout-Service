  const express = require('express');
  const path = require('path');
  const morgan = require('morgan');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const router = require('./router.js');


  const server = express();
  const port = 3002;

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended : true}));
  server.use(morgan('dev'));
  server.use(cors());

  server.use('/api', router)
  server.use(express.static(path.join(__dirname,'../client/dist')));
  server.listen(port, () => console.log(`Connected to port: ${port}`)) 