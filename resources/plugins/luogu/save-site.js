// ==UserScript==
// @name         洛谷保存站跳转
// @namespace    https://www.luogu.me/
// @version      0.1.0
// @description  更快捷地访问洛谷专栏文章和云剪贴板保存站，还有更多功能等你探索
// @author       liyuanchen2021
// @match        https://www.luogu.com.cn/*
// @match        https://www.luogu.com/article/*
// @match        https://www.luogu.com/paste/*
// @icon         https://www.luogu.com.cn/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var myInterval, articleInterval;
    var securityTips = "安全访问中心 - 洛谷";
    function mainFunction() {
        var newFrontEnd = Boolean(document.getElementsByClassName("top-bar").length != 0);
        if (newFrontEnd) {
            document.getElementsByClassName("nav-group on-expand")[0].getElementsByTagName("ul")[0].innerHTML = document.getElementsByClassName("nav-group on-expand")[0].getElementsByTagName("ul")[0].innerHTML + "<li data-v-40281d0d=\"\" data-v-6c9e83f4=\"\" title=\"洛谷保存站\"><a data-v-12b24cc3=\"\" data-v-40281d0d=\"\" href=\"https://www.luogu.me/\" class=\"\" disabled=\"false\"><!----><span data-v-40281d0d=\"\" class=\"title minor\">洛谷保存站</span></a></li>"; //新前端导航栏添加保存站链接
        } else {
            if (location.href == "https://www.luogu.com.cn/" || (location.href.indexOf("https://www.luogu.com.cn/user") == 0 && document.getElementsByClassName("wrapper wrapped lfe-body header-layout tiny").length != 0)) { //首页和用户主页顶栏添加保存站链接
                document.getElementsByClassName("link-container")[0].innerHTML = document.getElementsByClassName("link-container")[0].innerHTML + "<a data-v-0640126c=\"\" data-v-1d35343d=\"\" href=\"https://www.luogu.me/\" target=\"_blank\" colorscheme=\"none\" class=\"header-link color-none\">洛谷保存站</a>";
            }
            if (location.href == "https://www.luogu.com.cn/") { //修复主页 banner 的悬浮按钮会挡住侧边栏应用的弹出菜单的问题
                document.getElementsByClassName("am-prev")[0].style.zIndex = document.getElementsByClassName("am-next")[0].style.zIndex = "0";
            }
        }
    }
    function articleFunction() {
        if (document.head.innerHTML.indexOf(securityTips) == -1 && document.body.innerHTML.indexOf("找不到文章") == -1) { //专栏文章中添加保存站链接
            document.getElementsByClassName("metas")[0].innerHTML = document.getElementsByClassName("metas")[0].innerHTML + "<div data-v-076e399a=\"\" style=\"margin-left: 24px;\"><div data-v-076e399a=\"\" class=\"label\">保存站</div><div data-v-076e399a=\"\"><span data-v-076e399a=\"\"><a href=\"https://www.luogu.me/" + location.href.split("luogu.com.cn/")[1] + "\" target=\"_blank\">点击跳转</a></span><!----></div></div>";
        }
    }
    function getStatus(){
        var newSidebar = document.querySelector(".lside.nav-scrollbar");
        var oldFrontEnd = document.querySelector(".popup-button");
        if (newSidebar != null || oldFrontEnd != null) {
            clearInterval(myInterval);
            mainFunction();
        }
    }
    function getArticleStatus() {
        var articleStatus = document.querySelector(".metas").getElementsByTagName("div")[4].innerText;
        if (articleStatus.length > 0 && articleStatus[0] != " ") {
            clearInterval(articleInterval);
            articleFunction();
        }
    }
    if (location.href.indexOf("https://www.luogu.com/") == 0) { //luogu.com 上的专栏文章和剪贴板自动跳转至保存站
        var newWindow = window.open("https://www.luogu.me/" + location.href.split("luogu.com/")[1], "_self");
    } else if ((location.href.indexOf("https://www.luogu.com.cn/article/") == 0 || location.href.indexOf("https://www.luogu.com.cn/paste/") == 0) && document.head.innerHTML.indexOf(securityTips) != -1) { //出现安全提示时将跳转链接改为保存站
        document.getElementById("url").innerHTML = "https://www.luogu.me/" + location.href.split("luogu.com.cn/")[1];
        document.getElementsByClassName("card")[0].getElementsByTagName("a")[0].href = "https://www.luogu.me/" + location.href.split("luogu.com.cn/")[1];
        document.getElementsByTagName("h3")[0].innerHTML = "即将前往保存站";
        document.getElementsByTagName("p")[1].innerHTML = "插件已生效，请复制链接访问或点击按钮前往保存站。";
        document.getElementById("go").innerHTML = "前往保存站";
    } else {
        myInterval = setInterval(getStatus, 20);
        if (location.href.indexOf("https://www.luogu.com.cn/article/") == 0) {
            articleInterval = setInterval(getArticleStatus, 20);
        }
    }
})();
