	var http = require('http');
var request = require('request');
var us = require('underscore');
var qs = require('querystring');
//Default config
var defaultConfig = {
	method: 'GET',
	uri: '',
	body: {
		s: 'Default',
		limit: 3
	},
	headers: {
		'Origin': 'http://music.163.com',
		'Referer': 'http://music.163.com/',
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};
//加密
var enc = function (key) {
	var newkey = key;
	return newkey;
};
//获取URL
var _get163Url = {
	search: function (key) {
		return 'http://music.163.com/api/search/suggest/web';
	},
	artist: function (key) {
		return 'http://music.163.com/api/artist/albums/' + key;
	},
	album: function (key) {
		return 'http://music.163.com/api/album/' + key;
	},
	load: function (key) {
		return 'http://m1.music.126.net/' + key + '/' + enc();
	}
};
//
var setConfig = function (c) {
	c = us.extend(us.clone(defaultConfig), c);
	var method = c.method
	,	body   = c.body;
	body = qs.encode(body);
	if (!method || method === 'GET') uri += body;	
	if (method === 'POST') 
	console.log(c);
	return c;
};
//request music.163.com API
var apiReq = function (config) {
	request(config, function (error, response, body) {
		if (error) return console.error(error);
		if (response.statusCode === 200) {
			console.log( JSON.parse(body) );
			return JSON.parse(body);
		}
	});
};

var api = function (restype, method, key) {
	var c = setConfig({
		restype: restype,
		key: key,
		method: method,
		uri: _get163Url[restype](key)
	});
	return apiReq(c);
};


us.extend( exports, {
	search: function (key) {
		return api('search', 'POST', key);
	},
	id: function (restype, key) {
		return api(restype, undefined, key);
	},
	load: function (key) {
		return api('load', undefined, key);
	}
});