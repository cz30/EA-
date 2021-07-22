// 获取url上的参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
// 修改url上的参数
function replaceParamVal(paramName,replaceWith) {
    var oUrl = this.location.href.toString();
    var re=eval('/('+ paramName+'=)([^&]*)/gi');
    var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
    this.location = nUrl;
    window.location.href=nUrl
}

// 获取星期几
function getWeekDate(date) {
    var week = new Date(date).getDay();
    var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var str = arr[week];
    return str;
}