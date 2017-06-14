var User = require("./user.js");

/**
 * 批量插入
 */
function insert(n) {
    for (var i = 0; i < n; i++) {
        var user = new User({
            username: ramName(6),
            userpwd: ramPwd(),
            userage: ramAge(),
            logindate: new Date()
        });
        user.save(callback);
    }
}

insert(100);
/**
 * 更新
 */
function update() {
    var wherestr = { 'username': 'ruilip' };
    var updatestr = { 'userpwd': 'zzzz' };

    User.update(wherestr, updatestr, callback)
}

//update()

/**
 * findByIdAndUpdate
 */
function findByIdAndUpdate() {
    var id = "59410d6b53df5a20b03791bb";
    var updatestr = { 'userpwd': '540721' };
    User.findByIdAndUpdate(id, updatestr, callback)
}

//findByIdAndUpdate();

/**
 * 删除
 */
function del() {
    var wherestr = { 'username': 'ruilip' };
    User.remove(wherestr, callback)
}

//del();
function callback(err, res) {
    if (err) {
        console.log("Error:" + err);
    }
}
//随机生成Name
function ramName(len){
    var name=""
    var len=len||6;
    var char='abcdefghijklmnopqrstuvwxyz';
    var charLen=char.length;
    for(var i=0;i<len;i++){
        name=name+char.charAt(Math.floor(Math.random()*26));
    }
    return name;
}
//随机生成age
function ramAge(){
    return Math.floor(Math.random()*100);
}
//随机生成6~12位密码
function ramPwd(){
    var pwd=""
    var len=Math.floor(6+Math.random()*7)
    var char='abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM~!@#$%^&*';
    var charLen=char.length;
    for(var i=0;i<len;i++){
        pwd=pwd+char.charAt(Math.floor(Math.random()*charLen));
    }
    return pwd;
}
