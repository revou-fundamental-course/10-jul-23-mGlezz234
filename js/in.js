function hitungBMI() {
  // Mengambil nilai input dari form
  var nama = document.getElementById('nama').value;
  var umur = document.getElementById('umur').value;
  var tinggi = document.getElementById('tinggi').value;
  var berat = document.getElementById('berat').value;

  if (nama === "" || umur === "" || tinggi === "" || berat === "") {
    alert("mohon lengkapi semua form");
    return;
  }

  // Menghitung BMI
  var tinggiMeter = tinggi / 100; // Mengonversi tinggi dari cm ke meter
  var bmi = berat / (tinggiMeter * tinggiMeter);

  // Menampilkan hasil BMI
  var hasilElement = document.getElementById('hasil');
  hasilElement.innerHTML = "Hasil BMI: " + bmi.toFixed(2);

  // Menentukan kategori BMI
  var kategoriElement = document.getElementById('kategori');
  var kategori = '';
  if (bmi < 18.5) {
    kategori = 'Berat badan kurang <br>perbanyak asupan kalori dan gizimu';
  } else if (bmi >= 18.5 && bmi < 25) {
    kategori = 'Berat badan normal <br>bagus pertahankan kondisimu dan tetap terus rutin olahraga';
  } else if (bmi >= 25 && bmi < 30) {
    kategori = 'Kelebihan berat badan <br>anda dalam kategori overweight cara terbaik untuk menurunkan berat badan adalah mengukur kalori makanan yang anda makan dan berolahraga';
  } else {
    kategori = 'Obesitas <br>Gawat! segera konsultasikan dirimmu';
  }

  var hasil = document.getElementById('hasil');
  hasil.innerHTML = 'Hasil BMI: ' + bmi.toFixed(2) + '<br>Kategori: ' + kategori;

  var downloadLink = document.createElement('a');
  downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(hasil.innerHTML);
  downloadLink.download = 'hasil_bmi.html';
  downloadLink.innerHTML = '<br>Download Hasil BMI';

  hasil.appendChild(downloadLink);

  // Melakukan scroll otomatis ke hasil
  var hasilSection = document.getElementById('hasilBMI');
  hasilSection.scrollIntoView({ behavior: 'smooth' });
}

function redirectToForm() {
  var formElement = document.getElementById("form");
  formElement.scrollIntoView({ behavior: "smooth" });
}
