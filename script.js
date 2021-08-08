function buttonOpen(buttonValue) {

    searchquery = document.getElementById("searchquery").value;
    switch (searchquery.substring(0, 1)) {
        case "#":
            hashtagSearch(searchquery, buttonValue);
            break;
        default:
            keywordSearch(searchquery, buttonValue);
    }

}


function hashtagSearch(searchquery, buttonValue)

{
    hashtag = searchquery.replace("#", "");
    const links = [];
    links["Facebook"] = "https://www.facebook.com/hashtag/" + hashtag;
    links["Instagram"] = "https://www.instagram.com/explore/tags/" + hashtag;
    links["Vkontakte"] = "https://vk.com/search?c%5Bq%5D=%23" + hashtag + "&c%5Bsection%5D=statuses";
    links["myMail"] = "https://my.mail.ru/hashtag/" + hashtag;
    links["Pinterest"] = "https://www.pinterest.com/search/pins/?q=%23" + hashtag + "&rs=typed&term_meta[]=%23" + hashtag + "%7Ctyped";
    links["Tumblr"] = "https://www.tumblr.com/search/%23" + hashtag;
    links["Twitter"] = "https://twitter.com/search?q=%23" + hashtag + "&src=typed_query&f=live";
    links["Telegram"] = "https://lyzem.com/search?q=%23" + hashtag;
    links["Reddit"] = "https://www.reddit.com/search/?q=%23" + hashtag;
    links["Clubhouse"] = "https://clubhousedb.com/search-clubs?q=%23" + hashtag;
    links["Youtube"] = "https://www.youtube.com/hashtag/" + hashtag;
    links["Twitch"] = "https://www.twitch.tv/search?term=%23" + hashtag;
    links["Medium"] = "https://medium.com/search?q=%23" + hashtag;
    links["Livejournal"] = "https://www.livejournal.com/rsearch?tags=" + hashtag + "&searchArea=post";
    links["Yandexzen"] = "https://zen.yandex.ru/search?query=%23" + hashtag;
    links["Baidutieba"] = "https://tieba.baidu.com/f/search/res?qw=%23" + hashtag + "&sm=2&cf=1&ie=utf-8";
    links["Weibo"] = "https://s.weibo.com/weibo?q=%23" + hashtag + "&Refer=index";
    links["Yycom"] = "https://www.yy.com/search-#" + hashtag;
    links["Myspace"] = "https://myspace.com/search?q=%23" + hashtag;
    links["Skyrock"] = "https://www.skyrock.com/search/articles/?q=%23" + hashtag + "#gsc.tab=0&gsc.q=%23" + hashtag + "&gsc.page=1";
    links["Thriller"] = "https://triller.co/search?search=%23" + hashtag;
    links["Likee"] = "https://likee.video/search/%23" + hashtag;
    links["Fark"] = "https://www.fark.com/hlsearch?qq=%23" + hashtag + "&undefined=Go&is_using_js=1";
    links["Devianart"] = "https://www.deviantart.com/search?q=%23" + hashtag;
    links["Reverbnation"] = "https://www.reverbnation.com/main/search?q=%23" + hashtag;
    links["Wattpad"] = "https://www.wattpad.com/search/%23" + hashtag;
    links["Soundcloud"] = "https://soundcloud.com/search?q=%23" + hashtag;
    links["Flickr"] = "https://www.flickr.com/search/?text=%23" + hashtag;
    links["Digg"] = "https://digg.com/search?q=%23" + hashtag;
    links["Hubpages"] = "https://discover.hubpages.com/search?query=%23" + hashtag;
    links["Snapchat"] = "https://story.snapchat.com/search?q=" + hashtag;
    links["Quora"] = "https://www.quora.com/search?q=%23" + hashtag;
    links["Tiktok"] = "https://www.tiktok.com/tag/" + hashtag + "?lang=en";
    links["Vimeo"] = "https://vimeo.com/search?q=%23" + hashtag;
    links["Douban"] = "https://www.douban.com/search?source=suggest&q=%23" + hashtag;
    links["Douyin"] = "https://www.douyin.com/search/%23" + hashtag + "?source=normal_search&aid=ae28cade-2fa5-4e16-bc8f-7f06ead531b2&enter_from=main_page";
    links["Kuaishou"] = "https://www.kuaishou.com/search/video?searchKey=%23" + hashtag;
    links["Piscart"] = "https://picsart.com/search?q=%23" + hashtag;
    links["Girlsaskguys"] = "https://www.girlsaskguys.com/search?q=%23" + hashtag;
    links["Producthunt"] = "https://www.producthunt.com/search?q=%23" + hashtag;
    links["Kikstarter"] = "https://www.kickstarter.com/discover/advanced?ref=nav_search&term=%23" + hashtag;
    links["Fotki"] = "https://search.fotki.com/?q=%23" + hashtag;
    links["Bilibili"] = "https://search.bilibili.com/all?keyword=%23" + hashtag + "&from_source=webtop_search";
    links["Ixigua"] = "https://www.ixigua.com/search/%23" + hashtag;
    links["Huya"] = "https://www.huya.com/search?hsk=%23" + hashtag;
    links["Meipai"] = "https://www.meipai.com/search/all?q=%23" + hashtag;
    links["Gofundme"] = "https://www.gofundme.com/s?q=%23" + hashtag;
    links["Dribbble"] = "https://dribbble.com/search/#" + hashtag;
    links["Houzz"] = "https://www.houzz.com/products/query/" + hashtag;
    links["Dronestagram"] = "https://www.dronestagr.am/?s=%23" + hashtag;
    links["Shutterfly"] = "https://www.shutterfly.com/sitesearch/" + hashtag;
    links["Howcast"] = "https://www.howcast.com/search?query=%23" + hashtag;
    links["Lastfm"] = "https://www.last.fm/search?q=%23" + hashtag;
    links["Funnyordie"] = "https://www.funnyordie.com/search?q=%23" + hashtag;
    links["Bandcamp"] = "https://bandcamp.com/search?q=%23" + hashtag;
    links["Letterboxd"] = "https://letterboxd.com/search/%23" + hashtag;
    links["Kroogi"] = "http://kroogi.com/search/content?q=%23" + hashtag;
    links["Slashdots"] = "https://slashdot.org/index2.pl?fhfilter=%23" + hashtag;
    links["Catster"] = "https://www.catster.com/?s=%23" + hashtag;
    links["Dogster"] = "https://www.dogster.com/?s=%23" + hashtag;
    links["Ameba"] = "https://search.ameba.jp/search/%23" + hashtag + ".html";
    links["Miarroba"] = "https://buscar.miarroba.com/#!q=%23" + hashtag;
    links["Hatena"] = "https://www.hatena.ne.jp/o/search/top?q=%23" + hashtag;
    links["Wizelife"] = "https://wizelife.de/suche/%23" + hashtag + "/alle/nach-relevanz";
    links["Ello"] = "https://ello.co/search?terms=%23" + hashtag;
    links["Eyeem"] = "https://www.eyeem.com/search/pictures/" + hashtag;
    links["Bucketlist"] = "https://bucketlist.org/search/?q=" + hashtag;
    links["Steemit"] = "https://steemit.com/search?q=" + hashtag;
    links["Zhihu"] = "https://www.zhihu.com/search?type=content&q=%23" + hashtag;
    links["Toutiao"] = "https://m.toutiao.com/search?keyword=%23" + hashtag;
    links["Partyflock"] = "https://partyflock.nl/search?enc=%F0%9F%A5%B0&TERMS="+hashtag+"&ELEMENT=";
    links["Networkhu"] = "http://network.hu/kereses/kozosseg/q/%23"+hashtag;
    links["Flixster"] = "https://www.flixster.com/#search=%23"+hashtag;
    links["Blurtit"] = "https://www.blurtit.com/search/?search-query=%23"+hashtag+"&filter=all_activity";
    links["Answerscom"] = "https://www.answers.com/search?q=%23"+hashtag;
    links["Funadvice"] = "https://www.funadvice.com/advice/"+hashtag;
    links["Theanswersbank"] = "https://www.theanswerbank.co.uk/search/?q1=%23"+hashtag;
    links["Askdeb"] = "https://www.askdeb.com/index.php?s=%23"+hashtag;
    links["Superuser"] = "https://superuser.com/search?q=+%23"+hashtag;
    links["Askubuntu"] = "https://askubuntu.com/search?q=%23"+hashtag;
    links["Pixiv"] = "https://www.pixiv.net/en/tags/"+hashtag;
    links["Discogs"] = "https://www.discogs.com/search/?q=%23"+hashtag+"&type=all";
    window.open(links[buttonValue]);
}

function keywordSearch(searchquery, buttonValue)

{
    const links = [];
    links["Facebook"] = "https://www.facebook.com/search/top?q=" + searchquery;
    links["Instagram"] = "https://www.instagram.com/explore/tags/" + searchquery;
    links["Vkontakte"] = "https://vk.com/search?c%5Bper_page%5D=40&c%5Bq%5D=" + searchquery + "&c%5Bsection%5D=auto";
    links["myMail"] = "https://my.mail.ru/hashtag/" + searchquery;
    links["Pinterest"] = "https://www.pinterest.com/search/pins/?q=" + searchquery + "&rs=typed&term_meta[]=" + searchquery + "%7Ctyped";
    links["Tumblr"] = "https://www.tumblr.com/search/" + searchquery;
    links["Twitter"] = "https://twitter.com/search?q=" + searchquery + "&src=typed_query&f=live";
    links["Telegram"] = "https://lyzem.com/search?q=" + searchquery;
    links["Reddit"] = "https://www.reddit.com/search/?q=" + searchquery;
    links["Clubhouse"] = "https://clubhousedb.com/search-clubs?q=" + searchquery;
    links["Youtube"] = "https://www.youtube.com/results?search_query=" + searchquery;
    links["Twitch"] = "https://www.twitch.tv/search?term=" + searchquery;
    links["Medium"] = "https://medium.com/search?q=" + searchquery;
    links["Livejournal"] = "https://www.livejournal.com/rsearch?tags=" + searchquery + "&searchArea=post";
    links["Yandexzen"] = "https://zen.yandex.ru/search?query=" + searchquery;
    links["Baidutieba"] = "https://tieba.baidu.com/f/search/res?qw=" + searchquery + "&sm=2&cf=1&ie=utf-8";
    links["Weibo"] = "https://s.weibo.com/weibo?q=" + searchquery + "&Refer=index";
    links["Yycom"] = "https://www.yy.com/search-" + searchquery;
    links["Myspace"] = "https://myspace.com/search?q=" + searchquery;
    links["Skyrock"] = "https://www.skyrock.com/search/articles/?q=" + searchquery + "#gsc.tab=0&gsc.q=" + searchquery + "&gsc.page=1";
    links["Thriller"] = "https://triller.co/search?search=" + searchquery;
    links["Likee"] = "https://likee.video/search/" + searchquery;
    links["Fark"] = "https://www.fark.com/hlsearch?qq=" + searchquery + "&undefined=Go&is_using_js=1";
    links["Devianart"] = "https://www.deviantart.com/search?q=" + searchquery;
    links["Reverbnation"] = "https://www.reverbnation.com/main/search?q=" + searchquery;
    links["Wattpad"] = "https://www.wattpad.com/search/" + searchquery;
    links["Soundcloud"] = "https://soundcloud.com/search?q=" + searchquery;
    links["Flickr"] = "https://www.flickr.com/search/?text=" + searchquery;
    links["Digg"] = "https://digg.com/search?q=" + searchquery;
    links["Hubpages"] = "https://discover.hubpages.com/search?query=" + searchquery;
    links["Snapchat"] = "https://story.snapchat.com/search?q=" + searchquery;
    links["Quora"] = "https://www.quora.com/search?q=" + searchquery;
    links["Tiktok"] = "https://www.tiktok.com/search?q=" + searchquery;
    links["Vimeo"] = "https://vimeo.com/search?q=" + searchquery;
    links["Douban"] = "https://www.douban.com/search?source=suggest&q=%23" + searchquery;
    links["Douyin"] = "https://www.douyin.com/search/" + searchquery + "?source=normal_search&aid=ae28cade-2fa5-4e16-bc8f-7f06ead531b2&enter_from=main_page";
    links["Kuaishou"] = "https://www.kuaishou.com/search/video?searchKey=" + searchquery;
    links["Piscart"] = "https://picsart.com/search?q=" + searchquery;
    links["Girlsaskguys"] = "https://www.girlsaskguys.com/search?q=" + searchquery;
    links["Producthunt"] = "https://www.producthunt.com/search?q=" + searchquery;
    links["Kikstarter"] = "https://www.kickstarter.com/discover/advanced?ref=nav_search&term=" + searchquery;
    links["Fotki"] = "https://search.fotki.com/?q=" + searchquery;
    links["Bilibili"] = "https://search.bilibili.com/all?keyword=" + searchquery + "&from_source=webtop_search";
    links["Ixigua"] = "https://www.ixigua.com/search/" + searchquery;
    links["Huya"] = "https://www.huya.com/search?hsk=" + searchquery;
    links["Meipai"] = "https://www.meipai.com/search/all?q=" + searchquery;
    links["Gofundme"] = "https://www.gofundme.com/s?q=" + searchquery;
    links["Dribbble"] = "https://dribbble.com/search/" + searchquery;
    links["Houzz"] = "https://www.houzz.com/products/query/" + searchquery;
    links["Dronestagram"] = "https://www.dronestagr.am/?s=" + searchquery;
    links["Shutterfly"] = "https://www.shutterfly.com/sitesearch/" + searchquery;
    links["Howcast"] = "https://www.howcast.com/search?query=" + searchquery;
    links["Lastfm"] = "https://www.last.fm/search?q=" + searchquery;
    links["Funnyordie"] = "https://www.funnyordie.com/search?q=" + searchquery;
    links["Bandcamp"] = "https://bandcamp.com/search?q=" + searchquery;
    links["Letterboxd"] = "https://letterboxd.com/search/" + searchquery;
    links["Kroogi"] = "http://kroogi.com/search/content?q=" + searchquery;
    links["Slashdots"] = "https://slashdot.org/index2.pl?fhfilter=" + searchquery;
    links["Catster"] = "https://www.catster.com/?s=" + searchquery;
    links["Dogster"] = "https://www.dogster.com/?s=" + searchquery;
    links["Ameba"] = "https://search.ameba.jp/search/" + searchquery + ".html";
    links["Miarroba"] = "https://buscar.miarroba.com/#!q=" + searchquery;
    links["Hatena"] = "https://www.hatena.ne.jp/o/search/top?q=" + searchquery;
    links["Wizelife"] = "https://wizelife.de/suche/" + searchquery + "/alle/nach-relevanz";
    links["Ello"] = "https://ello.co/search?terms=" + searchquery;
    links["Eyeem"] = "https://www.eyeem.com/search/pictures/" + searchquery;
    links["Bucketlist"] = "https://bucketlist.org/search/?q=" + searchquery;
    links["Steemit"] = "https://steemit.com/search?q=" + searchquery;
    links["Zhihu"] = "https://www.zhihu.com/search?type=content&q=" + searchquery;
    links["Toutiao"] = "https://m.toutiao.com/search?keyword=" + searchquery;
    links["Partyflock"] = "https://partyflock.nl/search?enc=%F0%9F%A5%B0&TERMS="+searchquery+"&ELEMENT=";
    links["Networkhu"] = "http://network.hu/kereses/kozosseg/q/"+searchquery;
    links["Flixster"] = "https://www.flixster.com/#search="+searchquery;
    links["Blurtit"] = "https://www.blurtit.com/search/?search-query="+searchquery+"&filter=all_activity";
    links["Answerscom"] = "https://www.answers.com/search?q="+searchquery;
    links["Funadvice"] = "https://www.funadvice.com/advice/"+searchquery;
    links["Theanswersbank"] = "https://www.theanswerbank.co.uk/search/?q1="+searchquery;
    links["Askdeb"] = "https://www.askdeb.com/index.php?s="+searchquery;
    links["Superuser"] = "https://superuser.com/search?q=+"+searchquery;
    links["Askubuntu"] = "https://askubuntu.com/search?q=%23"+searchquery;
    links["Pixiv"] = "https://www.pixiv.net/en/tags/"+searchquery;
    links["Discogs"] = "https://www.discogs.com/search/?q="+searchquery+"&type=all";

    window.open(links[buttonValue]);


}
