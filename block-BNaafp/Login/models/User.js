var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:{type:String},
    email:{type:String,requerd:true},
    password:{type:String,requerd:true}
},{timestamps:true});

var User = mongoose.model('User',userSchema);

module.exports = User;

userSchema.pre("save", function (next) {
  if (this.password && this.isModified("password")) {
    bcrypt.hash(this.password, 10, (err, hashed) => {
      if (err) return next(err);
      this.password = hashed;
      return next();
    });
  } else {
    next();
  }
});