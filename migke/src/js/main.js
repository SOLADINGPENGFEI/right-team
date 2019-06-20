/*** 
    created by lee
    目前默认以1200 / 720 为分界线 
    需要自行设置html fontSize  100px
    请使用rem em 
***/


;
(function(win, doc, undefined) {
    let resizeWid = 'orientationchange' in win ? 'orientationchange' : 'resize',
        reSize = function() {
            let docEle = doc.documentElement,
                docWid = Number(window.innerWidth);
            if (docWid === undefined) return;
            (docWid > 750 & docWid < 1200) ? docEle.style.fontSize = `${docWid / 1200 * 100}px`: false;
            (docWid > 1200) ? docEle.style.fontSize = `100px`: false;
            (docWid < 750) ? docEle.style.fontSize = `${docWid / 750 * 100}px`: false;
        };
    win.addEventListener(resizeWid, reSize, false);
    doc.addEventListener('DOMContentLoaded', reSize, false);
})(window, document);



// ; (function (win, doc, Size, undefined) {
//     let resizeWid = 'orientationchange' in win ? 'orientationchange' : 'resize',
//         reSize = function () {
//             let docEle = doc.documentElement,
//                 docWid = Number(window.innerWidth) || document.body.clientWidth;
//             if (docWid === undefined) return;
//             (docWid <= Size) ? docEle.style.fontSize = `${docWid / Size * 100}px` : docEle.style.fontSize = '100px';
//         };
//     win.addEventListener(resizeWid, reSize, false);
//     doc.addEventListener('DOMContentLoaded', reSize, false);
// })(window, document, 1200);

(function(win) {
    let fn = function() {
        win.scrollTo(0, 0);
    }
    win.addEventListener("beforeunload", fn);
})(window);