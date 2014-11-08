venmusic
========

一个调用API的音乐搜索node模块

## header
    {
        'Origin': 'http://music.163.com',
        'Referer': 'http://music.163.com/',
        'Content-Type': 'application/x-www-form-urlencoded'
    }

## search
    url: http://music.163.com/api/search/suggest/web
    method: POST
    s: keyword
    limit: number

## song
    url: http://music.163.com/api/song/detail?ids=%5B这里是ID%5D
    method: GET

## lyc
    url: http://music.163.com/api/song/lyric?id=这里是ID&lv=-1
    method: GET

## artist
    url: http://music.163.com/api/artist/这里是ID
    method: GET

## album
    url: http://music.163.com/api/album/这里是ID [?limit=这里是歌曲数]
    method: GET

##  mv
    url: http://music.163.com/api/mv/detail?id=这里是ID [&type=MV格式]
    method: GET