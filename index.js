function Scooter(year,color,model){
this.year=year;
this.color=color;
this.model=model;

}

function Driver(name,age,experience){
this.name=name;
this.age=age;
this.experience=experience;
}

function PickupLocation(address,city){
this.city=city;
this.address=address;
}

let newPickUpLocation=new PickupLocation("123 Broadway","New York City");