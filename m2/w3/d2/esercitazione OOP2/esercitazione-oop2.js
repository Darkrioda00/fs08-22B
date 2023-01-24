class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(otherPerson) {
      if (this.age > otherPerson.age) {
        return this.name + `è più grande di` + otherPerson.name;
      } else if (this.age < otherPerson.age) {
        return this.name + `è più piccolo di otherPerson.name` + otherPerson.name;
      } else {
        return this.name + `ha la stessa età di otherPerson.name` + otherPerson.name;
      }
    }
}
  
const p1 = new Person("Dario", 22);
const p2 = new Person("Mario", 25);
const p3 = new Person("Luigi", 22);
  
console.log(p1.compareAge(p2)); // Dario è più piccola di Mario
console.log(p1.compareAge(p3)); // Dario ha la stessa età di Luigi
  
class Pagination {
  constructor(items = [], pageSize = 10){
    this.items = items;
    this.pageSize = pageSize;
  }
  
  paginate(pageNumber) {
    const start = (pageNumber - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.items.slice(start, end);
  }
}
  
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const pagination = new Pagination(items, 5);
  
console.log(pagination.paginate(1));
console.log(pagination.paginate(3)); 
  