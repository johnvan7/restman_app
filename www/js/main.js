function postRequest(url, params) {
    var xhr = new XMLHttpRequest();
    var host = localStorage.getItem("host");
    xhr.open("POST", "https://" + host + url, false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
    return xhr.responseText;
}
function getJson(url, args) {
    var obj = JSON.parse(postRequest("/restman/api/" + url, args));
    return obj.Results[0];
}

function getMe() {
    return getJson("getMe");
}

function login(username, password) {
    return getJson("login", "userName=" + username + "&userPass=" + password);
}

function getRestName(){
    return getJson("getRestName");
}

function getTable(tableNumber){
    return getJson("getTable", "tableNumber="+tableNumber);
}

function getAlimentCategories(){
    return getJson("getAlimentCategories");
}

function getAlimentsFilterByCategoryId(categoryId){
    return getJson("getAlimentsFilterByCategoryId", "categoryId=" + categoryId);
}

function getAliments() {
    return getJson("getAliments");
}

function getTables(){
    return getJson("getTables");
}

function printBillToThermal(table){
    return getJson("printBillToThermal", "table=" + JSON.stringify(table));
}

function delTable(tableNumber){
    return getJson("delTable", "tableNumber=" + tableNumber);
}

function getCoverPrice(){
    return getJson("getCoverPrice");
}