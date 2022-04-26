// Reusable Function
// Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable. Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.

// Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. Kami percaya, dengan memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri sesuai kebutuhan.

// Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada di JavaScript. Khususnya beberapa Higher-Order Function yang dimiliki array, seperti map, filter, dan forEach.

// Array Map
// Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });
// Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });
// Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback function-nya. Karena callback function dapat mengakses item array, biasanya developer menggunakannya untuk menghasilkan nilai baru.

// main.js
// 1
// const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});
// 2
// ​
// 3
// console.log(newArray);
// 4
// ​
// 5
// /**
// 6
//  * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
// 7
//  *
// 8
//  */

// Array Filter
// Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan.

// Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.

// Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

// Contoh penggunaan ketika Anda ingin menghilangkan seluruh nilai falsy pada array:

// main.js
// 1
// const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
// 2
// ​
// 3
// console.log(truthyArray);
// 4
// ​
// 5
// /**
// 6
//  * output:
// 7
//  * [ 1, 'Hallo', 'Harry', 14 ]
// 8
//  *
// 9
//  */

// Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.

// main.js
// 1
// const students = [
// 2
//   {
// 3
//     name: 'Harry',
// 4
//     score: 60,
// 5
//   },
// 6
//   {
// 7
//     name: 'James',
// 8
//     score: 88,
// 9
//   },
// 10
//   {
// 11
//     name: 'Ron',
// 12
//     score: 90,
// 13
//   },
// 14
//   {
// 15
//     name: 'Bethy',
// 16
//     score: 75,
// 17
//   }
// 18
// ];
// 19
// ​
// 20
// const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
// 21
// ​
// 22
// console.log(eligibleForScholarshipStudents);
// 23
// ​
// 24
// /**
// 25
//  * output:
// 26
//  * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
// 27
//  *
// 28
//  */
// 29

// Array Reduce
// Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk mengeksekusi nilai pada setiap elemen dan menampilkan dalam sebuah nilai saja.

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
// Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

// Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa:

// main.js
// 1
// const students = [
// 2
//   {
// 3
//     name: 'Harry',
// 4
//     score: 60,
// 5
//   },
// 6
//   {
// 7
//     name: 'James',
// 8
//     score: 88,
// 9
//   },
// 10
//   {
// 11
//     name: 'Ron',
// 12
//     score: 90,
// 13
//   },
// 14
//   {
// 15
//     name: 'Bethy',
// 16
//     score: 75,
// 17
//   }
// 18
// ];
// 19
// ​
// 20
// const totalScore = students.reduce((acc, student) => acc + student.score, 0);
// 21
// ​
// 22
// console.log(totalScore);
// 23
// ​
// 24
// /**
// 25
//  * output:
// 26
//  * 313
// 27
//  *
// 28
//  */

// Array some
// array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.

// arr.some(callback(element[, index[, array]])[, thisArg])
// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.

// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka terdapat angka genap.

// main.js
// 1
// const array = [1, 2, 3, 4, 5];
// 2
// const even = array.some(element => element % 2 === 0);
// 3
// ​
// 4
// console.log(even);
// 5
// ​
// 6
// /**
// 7
// output true
// 8
// **/

// Array find
// Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function.

// Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.

// arr.find(callback(element[, index[, array]])[, thisArg])
// Sebagai contoh, misalkan kita akan mencari siswa dengan nama `James`.

// main.js
// 1
// const students = [
// 2
//   {
// 3
//     name: 'Harry',
// 4
//     score: 60,
// 5
//   },
// 6
//   {
// 7
//     name: 'James',
// 8
//     score: 88,
// 9
//   },
// 10
//   {
// 11
//     name: 'Ron',
// 12
//     score: 90,
// 13
//   },
// 14
//   {
// 15
//     name: 'Bethy',
// 16
//     score: 75,
// 17
//   }
// 18
// ];
// 19
// ​
// 20
// const findJames = students.find(student => student.name === 'James');
// 21
// console.log(findJames);
// 22
// ​
// 23
// /**
// 24
// output
// 25
// { name: 'James', score: 88 }
// 26
// **/

// Array sort
// array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

// arr.sort([compareFunction])
// Contoh sederhananya adalah sebagai berikut:

// main.js
// 1
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// 2
// months.sort();
// 3
// console.log(months);
// 4
// // output: [ 'Dec', 'Feb', 'Jan', 'March' ]
// 5
// ​
// 6
// const array1 = [1, 30, 4, 1000, 101, 121];
// 7
// array1.sort();
// 8
// console.log(array1);
// 9
// // output: [ 1, 1000, 101, 121, 30, 4 ]

// Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string. Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.

// main.js
// 1
// const array1 = [1, 30, 4, 1000];
// 2
// ​
// 3
// const compareNumber = (a, b) => {
// 4
//   return a - b;
// 5
// };
// 6
// const sorting = array1.sort(compareNumber);
// 7
// console.log(sorting);
// 8
// ​
// 9
// /**
// 10
// output
// 11
// [ 1, 4, 30, 1000 ]
// 12
// **/

// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

// Jika, negative maka `a` akan diletakan sebelum `b`
// Jika, positive maka `b` akan diletakan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.

// Array every
// array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.

// arr.every(callback(element[, index[, array]])[, thisArg])
// Sebagai contoh, kita akan mengecek apakah seorang siswa telah lulus semua uji materi:

// main.js
// 1
// const scores = [70,85,90];
// 2
// const minimumScore = 65;
// 3
// ​
// 4
// const examPassed = scores.every(score => score >= minimumScore);
// 5
// console.log(examPassed);
// 6
// ​
// 7
// /**
// 8
// output
// 9
// true
// 10
// **/

// Array forEach
// Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

// Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi deklaratif.

// Cara imperatif
// Cara deklaratif
// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// for(let i = 0; i < names.length; i++) {
//   console.log(`Hello, ${names[i]}!`);
// }

// /**
//  * output:
//  * Hello, Harry!
//  * Hello, Ron!
//  * Hello, Jeff!
//  * Hello, Thomas!
//  *
//  */
// Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map dan filter.

// const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// for(let i = 0; i < names.length; i++) {
//   if(names[i] === 'Jeff') continue; // Bisa!

//   console.log(`Hello, ${names[i]}!`);
// }

// names.forEach((name) => {
//   if(names[i] === 'Jeff') continue; // Tidak Bisa!
//   console.log(`Hello, ${name}`);
// });
