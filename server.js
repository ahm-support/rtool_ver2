
const path = require('path');
const Express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');
const cors = require('cors');

const app = new Express();
const port = 3001;

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});


//var oneDay = 86400000;
/*app.use(compression());
app.use('/global-search/static', Express.static('public', {maxAge: oneDay}));
app.use('/global-search/static', Express.static('dist', {maxAge: oneDay}));
app.use('/global-search/coverage', Express.static('coverage', {maxAge: oneDay}));*/

/*process.title = process.argv[2];
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';*/

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

//app.use(cors());
// Use cookie parser to get client side cookies
/*app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(device.capture());*/

app.use(Express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/dist/index.html')
});


console.log('server.js: ', 'before invoking routeHandler');
// Invoke routes
//app.use(require('./routeHandler'));
app.listen(port, (error) => {
    if (error) {
        console.log('server.js > Error starting server: ', error);
        console.error(error);
    } else {
        console.log('server.js > Started server Listening on port 3001', '');
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
