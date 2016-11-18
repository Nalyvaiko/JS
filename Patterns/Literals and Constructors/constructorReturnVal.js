function User(name) {
  // Если конструктор вызван без ключевого слова new, this это window.
  // в таком случае вызывается этот же конструктор но с ключевым словом new
  if(!(this instanceof User)) {
    return new User(name);
  }

  this.name = name;
}

User.prototype.say = function() {
  alert("Hello! My name is " + this.name);
}

// Если методов нету для прототипа - то хватит просто функции возвр. обьект
function User(name) {
  var that = {};
  that.name = name;
  return that;
}
