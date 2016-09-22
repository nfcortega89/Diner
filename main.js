// contstructor function that takes name and dishes argument
function Diner(name, dishes) {
    this.name = name;
    this.dishes = dishes;
    this.totalDishes = function() {
        // gets the total of prices of the dishes
        var total = 0;
        // loop through all the prices of the dishes and compounds them to total
        for (var i = 0; i < this.dishes.length; i++) {
            total += this.dishes[i].price;
        }
        // return total
        return total;
    };
    // gets the total tax 
    this.tax = function() {
            var totalTax = this.totalDishes() * .08;
            return totalTax;
        }
        // gets the total tip for the dishes
    this.tip = function() {
        var totalTip = this.totalDishes() * .2;
        return totalTip
    }
}

// object literal dishes
var carbonara = {
    name: "Carbonara",
    price: 13
}
var ribeye = {
    name: "Ribeye",
    price: 17
}
var lobster = {
    name: "Lobster Mac & Cheese",
    price: 20
}

// create an array of diners and their choice of food
var diners = [
    new Diner("Nikko", [carbonara, lobster]),
    new Diner("Alison", [lobster, carbonara, lobster]),
    new Diner("Andrew", [ribeye])
]

// constructor function that dakes diners as an argment
function Bill(diners) {
    this.diners = diners;
    // get the total amount of the dishes and include the tax
    this.amount = function() {
            var total = 0;
            // loop over the diners and compound the price of their dishes inclusive of tax
            for (var i = 0; i < this.diners.length; i++) {
                total += this.diners[i].totalDishes() + this.diners[i].tax();
            }
            return total;
        }
        // gets the tip
    this.tip = function() {
        var justTheTip = 0;
        // iterate over diners and compounds the tip
        for (var i = 0; i < this.diners.length; i++) {
            console.log(this.diners[i].name + " " + this.diners[i].tip().toFixed(2));
            justTheTip += this.diners[i].tip();
        }
        return justTheTip;
    }
    this.print = function() {
        var owed = "";
        for (var i = 0; i < this.diners.length; i++) {
            owed += this.diners[i].name + " owes " + this.diners[i].totalDishes() + " plus tax: " + this.diners[i].tax() + " and tips " + this.diners[i].tip().toFixed(2) + ". " ;
        }
        return owed;

    }
}

var grubbing = new Bill(diners);


// console.log('Amount', grubbing.amount());
// console.log('total tips', grubbing.tip());
console.log(grubbing.print());
