function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
	this.ringTone = function() {
		return this.brand+ " dzwoni ring ring ring";
	}
	
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". Phone size:"+this.size+" and  "+this.ringTone()+".");
		
}
Phone.prototype.foto = function() {
	alert("Uśmiechnij się!!! "+this.brand+ " własnie zrobił Ci zdjęcie ;) ");
}
var iPhone6S = new Phone("Apple", 2250, "silver",7);
var SamsungGalaxyS6 = new Phone("Samsung Galaxy", 2980, "navy blue",7.2);
var OnePlusOne = new Phone("OnePlus One", 1700, "white",5);
iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.foto();
OnePlusOne.printInfo();
