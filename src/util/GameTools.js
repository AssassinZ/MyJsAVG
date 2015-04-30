/**
 * Created by ZhaoZhao on 2015/4/28.
 */
var GT = GT || {};

GT.getStringAllLength = function (str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (this.isChineseChars(str.charCodeAt(i))) {
            len += 2;
        } else {
            len++;
        }
    }
    return len;
};


GT.isChineseChars = function (num) {
    return (num >= 11904 && num <= 65519);
};





