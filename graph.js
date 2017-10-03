const express                = require('express');
const { jsonGraphqlExpress } = require('json-graphql-server');
const cors                   = require('cors');
const data                 = {
  posts: [
    {
      id: 1,
      title: "Lorem Ipsum",
      views: 254,
      user_id: 123,
    },
    {
      id: 2,
      title: "Sic Dolor amet",
      views: 65,
      user_id: 456,
    },
  ],
  users: [
    {
      id: 123,
      name: "John Doe",
    },
    {
      id: 456,
      name: "Jane Doe",
    },
  ],
  comments: [
    {
      id: 987,
      post_id: 1,
      body: "Consectetur adipiscing elit",
      date: new Date('2017-07-03'),
    },
    {
      id: 995,
      post_id: 1,
      body: "Nam molestie pellentesque dui",
      date: new Date('2017-08-17'),
    },
  ],
};

const PORT = 3000;
const app  = express();

//FIXES CORS ERROR
const whitelist   = [
  'http://localhost:8081',
];
const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};
app.use(cors(corsOptions));

function corsHandler(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
  res.setHeader('Access-Control-Max-Age', '1000');
  if (req.method === 'OPTIONS') {
    console.log('!OPTIONS');
    var headers = {};
    // IE8 does not allow domains to be specified, just the *
    // headers["Access-Control-Allow-Origin"] = req.headers.origin;
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = false;
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
    res.writeHead(200, headers);
    res.end();
  }
  return next();
}
app.use('*',corsHandler);
app.use('/', jsonGraphqlExpress(data));
app.listen(PORT);