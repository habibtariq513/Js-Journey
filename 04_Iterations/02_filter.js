// const coding = ["js", "cpp", "java", "python"]

// const values = coding.forEach((item) => {
//     // console.log(item);    
//     return item;
// })

// // console.log(values); // undefined

// -------------- Filters --------------
// const numArr = [1,2,3,4,5,6,7]
// console.log(numArr.filter(
//     (num) => num > 5
// ));

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Books with genre = History
// console.log("Books with History Genre:\n", books.filter((bk) => bk.genre === 'History'));

// Books after 2000 edition
// console.log("Books after 2000 edition:\n", books.filter((bk) => bk.edition >= 2000 && bk.genre === 'History'));


// -------------- Maps --------------
// Books after 2000 edition and History genre and the book title only
console.log(books.filter(
    (bk) => bk.edition >= 2000 && bk.genre === 'History'
).map(
    (bk) => bk.title
));
