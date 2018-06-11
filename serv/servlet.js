import SourceMapSupport from 'source-map-support';
import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

SourceMapSupport.install();

const app = express();
app.use(express.static('public'));

app.listen(3000, function() {
	console.log('App started on port 3000');
});