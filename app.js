//  ! 1-misol

// function Avtomobil(brand, model, yil) {
//   this.brand = brand;
//   this.model = model;
//   this.yil = yil;

//   this.malumot = function () {
//     return `${this.brand} ${this.model}, ${this.yil}-yil`;
//   };

//   this.yosh = function () {
//     let hozirgiYil = new Date().getFullYear();
//     return hozirgiYil - this.yil;
//   };

//   this.yangilash = function (yangiModel, yangiYil) {
//     this.model = yangiModel;
//     this.yil = yangiYil;
//   };
// }

// let mashina = new Avtomobil("Chevrolet", "Malibu", 2018);

// console.log(mashina.malumot());

// console.log(`"${mashina.model}"ning ishlab chiqilganiga ${mashina.yosh()} yil bo'ldi`);

// mashina.yangilash("gentera", 2023);

// console.log(mashina.malumot());
// console.log(`"${mashina.model}"ning ishlab chiqilganiga ${mashina.yosh()} yil bo'ldi`);

// ? construktr 1-misol tugadi

// ? constructor 2-misol

// function dokon(nomi, mahsulotlar, ishlabChiqilganYil) {
//     this.nomi = nomi;
//     this.mahsulotlar = mahsulotlar;
//     this.ishlabChiqilganYil = ishlabChiqilganYil;
//     this.malumot = function () {
//         return `${this.nomi} ${this.mahsulotlar} ${this.ishlabChiqilganYil}-yil`;
//     };
//     this.yosh = function () {
//         let hozirgiYil = new Date().getFullYear();
//         return hozirgiYil - this.ishlabChiqilganYil;
//     };
//     this.yangilash = function (yangiNomi, yangiYil) {
//         this.nomi = yangiNomi;
//         this.ishlabChiqilganYil = yangiYil;
//     };
// }

// let dokon1 = new dokon("korzinka", "oziq-ovqat", 2023);

// console.log(dokon1.malumot());

// console.log(`"${dokon1.nomi}"ning ishlab chiqilganiga ${dokon1.yosh()} yil bo'ldi`);

// dokon1.yangilash("Uzum Market", 2022);

// console.log(dokon1.malumot());
// console.log(`"${dokon1.nomi}"ning ishlab chiqilganiga ${dokon1.yosh()} yil bo'ldi`);

// ? constructor 2-misol tugadi

// ? constructor 3-misol

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.getDetails = function() {
//         return `Ismi: ${this.name}, Yoshi: ${this.age}`;
//     };
// }

// const person1 = new Person('Olim', 25);
// const person2 = new Person('g'ulom', 30);

// console.log(person1.getDetails());
// console.log(person2.getDetails());

// ? constructor 3-misol tugadi

// ? constructor 4-misol

// function Product(name, price) {
//   this.name = name;
//   this.price = price;

//   this.getProductInfo = function () {
//     return `Mahsulot: ${this.name}, Narxi: ${this.price} so'm`;
//   };
// }

// const product1 = new Product("Telefon", 2000000);
// const product2 = new Product("Noutbuk", 7000000);

// console.log(product1.getProductInfo());
// console.log(product2.getProductInfo());

// //? constructor 4-misol tugadi

// ! 1-misol tugadi

// ! 2-misol

// class Avtomobil {
//   constructor(brand, model, yil, rang) {
//     this.brand = brand;
//     this.model = model;
//     this.yil = yil;
//     this.rang = rang;
//   }
//   malumot() {
//     return `${this.brand} ${this.model}, ${this.yil}-yil, ${this.rang} rangli`;
//   }
//   yosh() {
//     let hozirgiYil = new Date().getFullYear();
//     return hozirgiYil - this.yil;
//   }
//   yangilash(brand, yil) {}
// }

// let mashina = new Avtomobil("Chevrolet", "Malibu", 2018, "qora");

// console.log(mashina.malumot());

// console.log(
//   `"${mashina.model}"ning ishlab chiqilganiga ${mashina.yosh()} yil bo'ldi`
// );

// mashina.yangilash("gentera", 2023);

// console.log(mashina.malumot());
// console.log(
//   `"${mashina.model}"ning ishlab chiqilganiga ${mashina.yosh()} yil bo'ldi`
// );

// ? class misol 1 tugadi

// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     getDetails() {
//         return `Ismi: ${this.name}, Yoshi: ${this.age}, Bahosi: ${this.grade}`;
//     }
// }

// const student1 = new Student('muhammad', 16, '5');
// const student2 = new Student('laziz', 16, '5');

// console.log(student1.getDetails());
// console.log(student2.getDetails());

// ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    incapsulation

// class BankHisobi {
//     #balans;

//     constructor(egasi, boshlangichBalans) {
//         this.egasi = egasi;
//         this.#balans = boshlangichBalans;
//     }

//     balansniKorish() {
//         return `Hisob egasi: ${this.egasi}, Balans: ${this.#balans} so'm`;
//     }

//     balansniToldirish(miqdor) {
//         if (miqdor > 0) {
//             this.#balans += miqdor;
//             return `Balans yangilandi. Hozirgi balans: ${this.#balans} so'm`;
//         } else {
//             return `Xato: Noto'g'ri miqdor kiritildi!`;
//         }
//     }

//     pulYechish(miqdor) {
//         if (miqdor > 0 && miqdor <= this.#balans) {
//             this.#balans -= miqdor;
//             return `Pul yechildi. Qolgan balans: ${this.#balans} so'm`;
//         } else {
//             return `Xato: Yetarli mablag' mavjud emas yoki noto'g'ri miqdor!`;
//         }
//     }
// }

// const hisob = new BankHisobi('Ali', 100000);

// console.log(hisob.balansniKorish());
// console.log(hisob.balansniToldirish(50000));
// console.log(hisob.pulYechish(70000));

// ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>       Abstracktion

// class TolovTizimi {
//   constructor(foydalanuvchi, balans) {
//     this.foydalanuvchi = foydalanuvchi;
//     this.balans = balans;
//   }

//   balansniKorish() {
//     return `Foydalanuvchi: ${this.foydalanuvchi}, Balans: ${this.balans} so'm`;
//   }

//   tolovniAmalgaOshirish(miqdor) {
//     if (this.balansYetarlimi(miqdor)) {
//       this.balans -= miqdor;
//       return `To'lov amalga oshirildi. Qolgan balans: ${this.balans} so'm`;
//     } else {
//       return `Xato: Balans yetarli emas!`;
//     }
//   }

//   balansYetarlimi(miqdor) {
//     return this.balans >= miqdor;
//   }
// }

// const tolov = new TolovTizimi("Ali", 200000);

// console.log(tolov.balansniKorish());
// console.log(tolov.tolovniAmalgaOshirish(50000));
// console.log(tolov.tolovniAmalgaOshirish(300000));

// ? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INheritance

// class Hayvon {
//     constructor(nomi, turi) {
//         this.nomi = nomi;
//         this.turi = turi;
//     }

//     ovozChiqar() {
//         return `${this.nomi} ovoz chiqarmoqda.`;
//     }
// }

// class It extends Hayvon {
//     constructor(nomi, zot) {
//         super(nomi, 'It');
//         this.zot = zot;
//     }

//     ovozChiqar() {
//         return `${this.nomi} vov-vov qiladi.`;
//     }
// }

// class Mushuk extends Hayvon {
//     constructor(nomi, yoshi) {
//         super(nomi, 'Mushuk');
//         this.yoshi = yoshi;
//     }

//     ovozChiqar() {
//         return `${this.nomi} miyov-miyov qiladi.`;
//     }
// }

// const it = new It('olapar', 'Ovchi iti');
// const mushuk = new Mushuk('Tom', 3);

// console.log(it.ovozChiqar());
// console.log(mushuk.ovozChiqar());

// ? >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.........poliparmhism

class Hayvon {
    constructor(nomi) {
        this.nomi = nomi;
    }

    ovozChiqar() {
        return `${this.nomi} qandaydir ovoz chiqarmoqda.`;
    }
}

class It extends Hayvon {
    ovozChiqar() {
        return `${this.nomi} vov-vov qiladi.`;
    }
}

class Mushuk extends Hayvon {
    ovozChiqar() {
        return `${this.nomi} miyov-miyov qiladi.`;
    }
}

class Qush extends Hayvon {
    ovozChiqar() {
        return `${this.nomi} chiy-chiy qiladi.`;
    }
}

const hayvonlar = [
    new It('Layka'),
    new Mushuk('Tom'),
    new Qush('Bulbul')
];

hayvonlar.forEach(hayvon => {
    console.log(hayvon.ovozChiqar());
});



// ! 2-misol tugadi
