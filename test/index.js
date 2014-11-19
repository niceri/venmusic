var api = require('./node_modules/musicapi');
var callback =  function (err, res, body) {
	if (err) console.error(err);
	if (res.statusCode === 200) console.log(JSON.parse(body));
}

api.search('年度之歌', callback);
//api.id(2497699, 'album', callback);
//api.id(16705, 'artist', callback);
//api.id(26434317, 'song', callback);
//api.id(325145, 'mv', callback);
//api.id(26434317, 'lyc', callback, {lv: -1});