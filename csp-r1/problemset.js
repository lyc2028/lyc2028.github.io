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
//试卷标题、难度、年份、类型、是否隐藏
var strlist = ["CSP-J1 2021", "CSP-S1 2021", "CSP-J1 2022", "CSP-S1 2022", "洛谷 SCP 2023 第一轮（初赛 J 组）模拟", "洛谷 SCP 2023 第一轮（初赛 S 组）模拟", "20240802S组初赛模拟", "20240808S组初赛模拟", "洛谷 SCP 2024 第一轮（初赛 J 组）模拟", "洛谷 SCP 2024 第一轮（初赛 S 组）模拟"];
var diff = [0, 1, 0, 1, 0, 1, 1, 1, 0, 1];
var yr = [2021, 2021, 2022, 2022, 2023, 2023, 2024, 2024, 2024, 2024];
var lx = [0, 0, 0, 0, 1, 1, 2, 2, 1, 1];
var hide = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//评测脚本
function get_judge_data() {
    if (now == "1001") {
        answer = "DBACDDCABBBACBBFFFTFBFTTBBCTFFACCDCCDBBDCBD";
        information = "洛谷有题：<a href=\"https://ti.luogu.com.cn/problemset/1036\" target=\"_blank\">1036</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15 || pid == 29 || pid == 30) sc[i] = 2.0;
            else if (pid >= 34) sc[i] = 3.0;
            else if (pid == 27) sc[i] = 3.5;
            else if (pid == 33) sc[i] = 4.0;
            else if (answer[i] == 'T' || answer == 'F') sc[i] = 1.5;
            else sc[i] = 3.0;
        }
    }
    if (now == "1002") {
        answer = "ABACCCCBDAACCCBTFFTDCTFFBCBFTFBDDDADCADADDC";
        information = "洛谷有题：<a href=\"https://ti.luogu.com.cn/problemset/1037\" target=\"_blank\">1037</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15 || pid == 19) sc[i] = 2.0;
            else if (pid >= 34) sc[i] = 3.0;
            else if (pid == 21) sc[i] = 2.5;
            else if (pid == 33) sc[i] = 4.0;
            else if (answer[i] == 'T' || answer == 'F') sc[i] = 1.5;
            else sc[i] = 3.0;
        }
    }
    if (now == "1003") {
        answer = "ACDCBBBCADDBCBBTFFFFBFTTCCBTTFFCBAABCDAABCDA";
        information = "题目下载：<a href=\"https://www.luogu.com.cn/fe/api/problem/downloadAttachment/phzgjv1c\">https://www.luogu.com.cn/fe/api/problem/downloadAttachment/phzgjv1c</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid == 16 || pid == 17 || pid == 18 || pid == 19 || pid == 20 || pid == 22 || pid == 23 || pid == 24 || pid == 28 || pid == 29 || pid == 30 || pid == 31) sc[i] = 1.5;
            else if (pid == 27) sc[i] = 4.0;
            else sc[i] = 3.0;
        }
    }
    if (now == "1004") {
        answer = "BADCABCBDACDBBBTFTDABFFTDDCFFTABBCBCCAACAAC";
        information = "题目下载：<a href=\"https://www.luogu.com.cn/fe/api/problem/downloadAttachment/c58wojwt\">https://www.luogu.com.cn/fe/api/problem/downloadAttachment/c58wojwt</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid == 17 || pid == 18 || pid == 22 || pid == 23 || pid == 24 || pid == 28 || pid == 29 || pid == 30) sc[i] = 1.5;
            else if (pid == 16) sc[i] = 1.0;
            else sc[i] = 3.0;
        }
    }
    if (now == "1005") {
        answer = "BCDBBBABAAABAACTFTTBCFTFTDCFTFBAAACDBDBBDAB";
        information = "题目下载：<a href=\"https://www.luogu.com.cn/fe/api/problem/downloadAttachment/06yy6w95\" target=\"_blank\">https://www.luogu.com.cn/fe/api/problem/downloadAttachment/06yy6w95</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid == 22 || pid == 29) sc[i] = 1.0;
            else if (pid == 31) sc[i] = 2.0;
            else if (answer[i] == 'T' || answer[i] == 'F') sc[i] = 2.0;
            else sc[i] = 3.0;
        }
    }
    if (now == "1006") {
        answer = "DABDBADDDDDAAAAFTFTDCFTFBAAFTFDDABBDABBBCBB";
        information = "题目下载：<a href=\"https://www.luogu.com.cn/fe/api/problem/downloadAttachment/q3zt92jh\" target=\"_blank\">https://www.luogu.com.cn/fe/api/problem/downloadAttachment/q3zt92jh</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid == 16 || pid == 23) sc[i] = 1.0;
            else if (pid == 25 || pid == 31) sc[i] = 2.0;
            else if (answer[i] == 'T' || answer[i] == 'F') sc[i] = 2.0;
            else sc[i] = 3.0;
        }
    }
    if (now == "1007") {
        answer = "BABBADACBCABBADTTBABTFABDTTTBBACABDCACAAB";
        information = "题目下载：<a href=\"https://www.luogu.com.cn/api/team/downloadFile/q4milg4j\">https://www.luogu.com.cn/api/team/downloadFile/q4milg4j</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid >= 32) sc[i] = 3.0;
            else if (answer[i] == 'T' || answer[i] == 'F') sc[i] = 2.0;
            else if (pid == 29) sc[i] = 2.0;
            else sc[i] = 3.0;
        }
    }
    if (now == "1008") {
        answer = "BBBCDBDDBADCABAFTFFCBTTFBACTFTAABDCCABACDDB";
        information = "题目下载：<a href=\"https://www.luogu.com.cn/fe/api/problem/downloadAttachment/33uuj7pv\">https://www.luogu.com.cn/fe/api/problem/downloadAttachment/33uuj7pv</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid == 16 || pid == 24) sc[i] = 2.0;
            else if (answer[i] == 'T' || answer[i] == 'F') sc[i] = 1.5;
            else sc[i] = 3.0;
        }
    }
    if (now == "1009") {
        answer = "CCABDADCCADBCADTTFADCFTTADCTFFDADABADCACDBD";
        information = "题目下载：<a href=\"https://www.luogu.com.cn/fe/api/problem/downloadAttachment/p3xcfoie\">https://www.luogu.com.cn/fe/api/problem/downloadAttachment/p3xcfoie</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid == 24) sc[i] = 1.0;
            else if (answer[i] == 'T' || answer[i] == 'F') sc[i] = 1.5;
            else sc[i] = 3.0;
        }
    }
    if (now == "1010") {
        answer = "BDBCDBABADCCCBCFFFTDATFFBCAFTTBBDADBACDABCB";
        information = "题目下载：<a href=\"https://hydro.ac/file/9120/2024%E6%B4%9B%E8%B0%B7SCP-S1.pdf\">https://hydro.ac/file/9120/2024%E6%B4%9B%E8%B0%B7SCP-S1.pdf</a>";
        for (var i = 0; i < answer.length; i++) {
            var pid = i + 1;
            if (pid <= 15) sc[i] = 2.0;
            else if (pid == 32) sc[i] = 4.0;
            else if (answer[i] == 'T' || answer[i] == 'F') sc[i] = 1.5;
            else sc[i] = 3.0;
        }
    }
}
