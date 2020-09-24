var mobiles = [{
    name: "Lenovo A6000",
    price: 9000,
    features: {
        OS: "Android 4.4",
        Storage:"8GB"
    },
    brand: "Lenovo",
    accessories: ["Earphones", "Charger"],
},
{
    name: "Samsung Galaxy J7",
    price:13000,
    features: {
        Front_Camera :"5MP",
        Rear_Camera:"13MP"
    },
    brand: "Samsung",
    accessories: ["Charger", "Bluetooh"],

},
{
    name: "Redmi Note 5 ",
    price:30000,
    features: {
        Display:"5.99-inch",
        OS: "Android 7.0"
    },
    brand: "Xiaomi",
    accessories: ["Earphones", "Charger"],

}
];
mobiles.forEach(a=>console.log(a));