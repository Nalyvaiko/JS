var obj = {
    name: 'Vitalii',
    printName: function() {
        console.log('My name is ' + this.name + '.');
    }
};

obj.printName();
setTimeout(obj.printName.bind({name: 'Mike'}), 1000);
