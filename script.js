/* const book1 = {
    title: 'abc',
    author: "Rob Bob",
    year: '2022',
    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};
console.log(book1.getSumary())


const book2 = {
    title: 'cba',
    author: "Bor Bob",
    year: '2010',
    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
};
console.log(Object.values(book2))
console.log(Object.keys(book2)) */
/* 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSumary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }

}
const book1 = new Book('abc', "Rob Bob", '2022')
const book2 = new Book('cba', "Bor Bob", '2010')

console.log(book2.getSumary()) */

/* 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

Book.prototype.getSumary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} yers old`;
}


Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book('abc', "Rob Bob", '2022')
const book2 = new Book('cba', "Bor Bob", '2010')

console.log(book2.getAge());
book2.revise('2020');
console.log(book2) */

/* 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

}

Book.prototype.getSumary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);
const mag1 = new Magazine('Mag one', "qwe FKkd", '2013', "March");

Magazine.prototype.constructor = Magazine;

console.log(mag1) */

/* const bookProtos = {
    getSumary: function() {
        return `${this.title} is ${years} yers old`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} yers old`;
    }

}

const book1 = Object.create(bookProtos, {
    title: { value: "ERT" },
    author: { value: "DF ddF" },
    year: { value: "2123" },
});
console.log(book1) */


/* class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSumary() {
        return `${this.title} is ${this.year} yers old ${this.author}`;
    }

}



class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}
const mag1 = new Magazine('Mag old', 'ada ', '2312', "march");
console.log(mag1.getSumary()) */

function createPerson(name, age) {
    var obj = {
        name: name,
        age: age,
        walk: function() {
            console.log(` ${ this .name } идет! `);
        },
    };
    // здесь другой код для управления нашим объектом 
    return obj;
}
console.log(createPerson('Lohn', 32))