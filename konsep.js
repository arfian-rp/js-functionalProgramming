// Konsep-Konsep Functional Programming
// Setelah Anda memiliki sedikit gambaran tentang bagaimana paradigma FP dapat membuat kode yang Anda tuliskan lebih mudah dibaca dan ringkas, kini saatnya Anda ketahui, apa saja konsep-konsep dasar yang ada di dalam paradigma FP.

// Di sini kita akan membahas 4 konsep besar yang ada di FP. Yakni Pure Function, Immutability, Recursive, dan High-Order Function.

// Pure Function
// Salah satu konsep besar dari paradigma FP adalah Pure Function. Apa artinya? Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya. Sehingga mau seperti apa keadaanya, fungsi yang dibuat selalu menghasilkan sesuatu yang sama, terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.

const hitungLuasLingkaranPure = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingkaranPure(4)); // 50.24

//yg impure(kebalikan)

let PI = 3.14;

const hitungLuasLingkaranImpure = (jariJari) => {
  return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaranImpure(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaranImpure(4)); // 80
