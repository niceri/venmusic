venmusic
========

一个音乐搜索node模块

## 这个模块的API

- api.search(keywords, callback [,args(*Object*)]);
    - keywords: 字符串（歌名，歌手名，专辑名...
    - callback(err, res, body) 参数意义同request，原因就不说了,以下复制于 https://www.npmjs.org/package/request
        1. An error when applicable (usually from http.ClientRequest object)
        2. An http.IncomingMessage object
        3. The third is the response body (String or Buffer, or JSON object if the json option is supplied)
    - args: 参数，例如limit: 数量， offset: 分页

- api.id(id, resType, callback [,args(*Object*)]);
    - id: 歌曲，歌手，专辑等ID
    - resType: ID类型
        1. song: 歌曲
        2. artist: 歌手
        3. album: 专辑
        4. mv:  MV
        5. lyc: 歌词
    - callback(err, res, body) 同上
    - args 同上，具体可见下面API分析




## 网易云音乐PC客户端API

### header
    {
        'Origin': 'http://music.163.com',
        'Referer': 'http://music.163.com/',
        'Content-Type': 'application/x-www-form-urlencoded'
    }

### search
    url: http://music.163.com/api/search/suggest/web
    method: POST
    s: keyword
    limit: number

### song
    url: http://music.163.com/api/song/detail?ids=%5B这里是ID%5D
    method: GET

### lyc
    url: http://music.163.com/api/song/lyric?id=这里是ID&lv=-1
    method: GET

### artist
    url: http://music.163.com/api/artist/这里是ID
    method: GET

### album
    url: http://music.163.com/api/album/这里是ID [?limit=这里是歌曲数]
    method: GET

###  mv
    url: http://music.163.com/api/mv/detail?id=这里是ID [&type=MV格式]
    method: GET

## 实例
    api.search('年度之歌', callback); 

    {
        "result": {
            "mvs": [
                {
                    "id": 356223,
                    "cover": "http://p3.music.126.net/eet4MaSZtkTL1wLCtElFUg==/3245758325197242.jpg",
                    "name": "Ruby(루비) 第27届金唱片颁奖典礼 13/01/20 现场版",
                    "playCount": 453,
                    "briefDesc": "",
                    "desc": null,
                    "artistName": "T-ara",
                    "artistId": 127815,
                    "duration": 95000,
                    "mark": 0,
                    "subed": false
                },
                {
                    "id": 5038,
                    "cover": "http://p4.music.126.net/Csl0_9gsDgyTokLWg4LCQA==/6060508092301403.jpg",
                    "name": "Ruby",
                    "playCount": 228,
                    "briefDesc": "",
                    "desc": null,
                    "artistName": "Kaiser Chiefs",
                    "artistId": 95274,
                    "duration": 211000,
                    "mark": 0,
                    "subed": false
                }
            ],
            "order": [
                "songs",
                "playlists",
                "artists",
                "albums",
                "mvs"
            ],
            "songs": [
                {
                    "id": 5390014,
                    "name": "Rubystar",
                    "artists": [
                        {
                            "id": 127538,
                            "name": "Rubystar",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        }
                    ],
                    "album": {
                        "id": 528992,
                        "name": "맑음 때때로 흐리고 비",
                        "artist": {
                            "id": 0,
                            "name": "",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        },
                        "publishTime": 1283184000000,
                        "size": 5,
                        "copyrightId": 0,
                        "status": 1
                    },
                    "duration": 241841,
                    "copyrightId": 0,
                    "status": 1,
                    "alias": [],
                    "mvid": 0
                },
                {
                    "id": 21793796,
                    "name": "Ruby's Arms",
                    "artists": [
                        {
                            "id": 44268,
                            "name": "Tom Waits",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        }
                    ],
                    "album": {
                        "id": 2004987,
                        "name": "Heartattack And Vine",
                        "artist": {
                            "id": 0,
                            "name": "",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        },
                        "publishTime": 1315843200000,
                        "size": 9,
                        "copyrightId": 5003,
                        "status": 1
                    },
                    "duration": 334848,
                    "copyrightId": 7002,
                    "status": 1,
                    "alias": [],
                    "mvid": 0
                },
                {
                    "id": 29535571,
                    "name": "Ruby (Original Mix)",
                    "artists": [
                        {
                            "id": 177598,
                            "name": "Cirez D",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        }
                    ],
                    "album": {
                        "id": 3029913,
                        "name": "Ruby ",
                        "artist": {
                            "id": 0,
                            "name": "",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        },
                        "publishTime": 1413129600007,
                        "size": 1,
                        "copyrightId": 0,
                        "status": 0
                    },
                    "duration": 561684,
                    "copyrightId": 0,
                    "status": 0,
                    "alias": [],
                    "mvid": 0
                },
                {
                    "id": 4078204,
                    "name": "Ruby",
                    "artists": [
                        {
                            "id": 92856,
                            "name": "Foster The People",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        }
                    ],
                    "album": {
                        "id": 412351,
                        "name": "Broken Jaw / Ruby",
                        "artist": {
                            "id": 0,
                            "name": "",
                            "picUrl": null,
                            "alias": [],
                            "albumSize": 0,
                            "picId": 0,
                            "trans": null
                        },
                        "publishTime": 1335024000007,
                        "size": 2,
                        "copyrightId": 5003,
                        "status": 1
                    },
                    "duration": 358635,
                    "copyrightId": 5003,
                    "status": 1,
                    "alias": [],
                    "mvid": 0
                }
            ],
            "playlists": []
        },
        "code": 200
    }

·





