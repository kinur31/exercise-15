//soal 9

function copyFirstHalf(arr) {
   const middleIndex = Math.floor(arr.length / 2);
   if (arr.length %2 == 0){
       return arr.slice(0, middleIndex)
   }
   else if( arr.length %2 == 1)
   return arr.slice(0, middleIndex + 1);
 }


//soal 10
function dayInMonth(month,year) {
   if (month <1 || month >12){
      return (`Inputan bulan tidak valid. Mohon input dari rentang 1 hingga 12`)
   }

   const proses = new Date(year,month,0);

   return proses.getDate();
}

//soal 11

function hariBerlalu(){
   const today = new Date();
   const awalTahun = new Date(today.getFullYear(),0,1)

   const bedaWaktu = today - awalTahun;
   const hariBerlalu = Math.floor(bedaWaktu/(24*60*60*1000))

   return hariBerlalu
}

//soal 12
function calculateAge(birthdate) {
   const birthdateDate = new Date(birthdate); // tanggal lahir
   const currentDate = new Date(); // tanggal sekarang
 
   // Calculate the difference in years
   let age = currentDate.getFullYear() - birthdateDate.getFullYear(); // ubah tanggal ambil tahunnya. currentDate.getFullYear()=2023 , 
   console.log(currentDate.getFullYear());
   // cek apa bulannya udah lewat tanggal sekarang apa belum
   if (
     currentDate.getMonth() < birthdateDate.getMonth() ||
     (currentDate.getMonth() === birthdateDate.getMonth() &&
       currentDate.getDate() < birthdateDate.getDate())
   ) {
     age--; // umur  kurangi 1, jika bulan lahirnya belum melewati bulan sekarang
   }
 
   return age;
 }


module.exports = {copyFirstHalf, dayInMonth, hariBerlalu, calculateAge}