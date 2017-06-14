/**
 * Schema是mongoose里会用到的一种数据模式，可以理解为表结构的定义；每个schema会映射到mongodb中的一个collection，它不具备操作数据库的能力
 */
/**
 * 用户信息
 */
var mongoose=require('./db.js'),
Schema=mongoose.Schema;

var UserSchema=new Schema({
    username:{type:String},
    userpwd:{type:String},
    userage:{type:Number},
    logindate:{type:Date}
});

module.exports=mongoose.model('User',UserSchema);