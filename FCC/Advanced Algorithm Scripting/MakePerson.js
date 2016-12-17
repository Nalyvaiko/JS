var Person = function(firstAndLast) {
    var _firstName = firstAndLast.split(' ')[0];
    var _lastName = firstAndLast.split(' ')[1];

    this.getFirstName = function() {
        return _firstName;
    };
    this.getLastName = function() {
        return _lastName;
    };
    this.getFullName = function() {
        return _firstName + ' ' + _lastName;
    };
    this.setFirstName = function(first) {
        _firstName = first;
    };
    this.setLastName = function(last) {
        _lastName = last;
    };
    this.setFullName = function(firstAndLast) {
        _firstName = firstAndLast.split(' ')[0];
        _lastName = firstAndLast.split(' ')[1];
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();

var Person = function(firstAndLast) {
    var space = firstAndLast.indexOf(' ');
    this._firstName = firstAndLast.substring(0, space) || '';
    this._lastName = firstAndLast.substring(space + 1, firstAndLast.length) || '';
};

Person.prototype.getFirstName = function() {
    return this._firstName;
};

Person.prototype.getLastName = function() {
    return this._lastName;
};

Person.prototype.getFullName = function() {
    return this._firstName + ' ' + this._lastName;
};

Person.prototype.setFirstName = function(first) {
    this._firstName = first;
};

Person.prototype.setLastName = function(last) {
    this._lastName = last;
};

Person.prototype.setFullName = function(firstAndLast) {
    var space = firstAndLast.indexOf(' ');
    this._firstName = firstAndLast.substring(0, space) || '';
    this._lastName = firstAndLast.substring(space + 1, firstAndLast.length) || '';
};

var bob = new Person('Bob Ross');
bob.getFullName();
