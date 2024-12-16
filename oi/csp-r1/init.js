/*
MIT License

Copyright (c) 2024 lyc2028

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
if (typeof (Storage) === "undefined") alert("该浏览器不支持存储数据，可能影响您的使用。\n推荐使用 Chorme 浏览器。");
var answer = "", sc = [], savearr = [], best = [], tim = [], rec1 = [], rec2 = [], rec3 = [], rec4 = [];
if (localStorage.getItem("liyuanchen2021-chusai") == null) localStorage.setItem("liyuanchen2021-chusai", "");
if (localStorage.getItem("liyuanchen2021-chusai1") == null) localStorage.setItem("liyuanchen2021-chusai1", "");
if (localStorage.getItem("liyuanchen2021-chusai9") == null) localStorage.setItem("liyuanchen2021-chusai9", "");
if (localStorage.getItem("liyuanchen2021-chusai11") == null) localStorage.setItem("liyuanchen2021-chusai11", "");
if (localStorage.getItem("liyuanchen2021-chusai12") == null) localStorage.setItem("liyuanchen2021-chusai12", "");
if (localStorage.getItem("liyuanchen2021-chusai13") == null) localStorage.setItem("liyuanchen2021-chusai13", "");
if (localStorage.getItem("liyuanchen2021-chusai14") == null) localStorage.setItem("liyuanchen2021-chusai14", "");
if (localStorage.getItem("liyuanchen2021-chusai") != "") savearr = localStorage.getItem("liyuanchen2021-chusai").split(',');
if (localStorage.getItem("liyuanchen2021-chusai1") != "") best = localStorage.getItem("liyuanchen2021-chusai1").split(',');
if (localStorage.getItem("liyuanchen2021-chusai9") != "") tim = localStorage.getItem("liyuanchen2021-chusai9").split(',');
if (localStorage.getItem("liyuanchen2021-chusai11") != "") rec1 = localStorage.getItem("liyuanchen2021-chusai11").split(',');
if (localStorage.getItem("liyuanchen2021-chusai12") != "") rec2 = localStorage.getItem("liyuanchen2021-chusai12").split(',');
if (localStorage.getItem("liyuanchen2021-chusai13") != "") rec3 = localStorage.getItem("liyuanchen2021-chusai13").split(',');
if (localStorage.getItem("liyuanchen2021-chusai14") != "") rec4 = localStorage.getItem("liyuanchen2021-chusai14").split(',');
records = localStorage.getItem("liyuanchen2021-chusai2");
