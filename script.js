// Tangkap elemen input dan tombol
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const jam8 = document.getElementById("jam8");
const jam10 = document.getElementById("jam10");
const calculateBtn = document.getElementById("calculate-btn");
const totalDisplay = document.getElementById("total");
const totalDisplayoh = document.getElementById("totalnya");
// Tangkap elemen tombol reset
const resetBtn = document.getElementById("reset-btn");

const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopupButton = document.getElementById("closePopup");

// Tambahkan event listener ke tombol
calculateBtn.addEventListener("click", () => {
  hitungKlik();
  // Ambil nilai dari input dan ubah ke angka
  let val1 = Number(num1.value) || 0;
  let val2 = Number(num2.value) || 0;
  let val4 = Number(num4.value) || 0;
  let val5 = Number(num5.value) || 0;
  let val6 = Number(num6.value) || 0;
  let ptg = Number(num7.value) || 0;
  let jam10val = Number(jam10.value) || 0;
  let jam8val = Number(jam8.value) || 0;

  //hitung gaji pulang jam 7
  let jam7 = val1 * 55;
  let hrbsa = 35.02 * val2;
  let setenghri = 21.88 * val4;
  let jam9 = 63.74 * val5;
  let jam10 = 68.11 * jam10val;
  let jam8 = 59.37 * jam8val;

  //hitung potongan
  ptg *= 80;

  if (ptg == 80) {
    // Hitung total
    const total =
      jam7 + setenghri + hrbsa + 300 + jam8 + jam9 + jam10 - ptg - val6;
    popup.style.display = "block";
    overlay.style.display = "block";

    // Tampilkan total ke dalam elemen di web
    totalDisplay.textContent = Number(total.toFixed(2));
    totalDisplayoh.textContent = Number(total.toFixed(2));
  } else if (ptg == 160) {
    const total =
      jam7 + setenghri + hrbsa + 300 + jam8 + jam9 + jam10 - ptg - val6;
    popup.style.display = "block";
    overlay.style.display = "block";

    // Tampilkan total ke dalam elemen di web
    totalDisplay.textContent = Number(total.toFixed(2));
    totalDisplayoh.textContent = Number(total.toFixed(2));
  } else if (ptg == 240) {
    const total =
      jam7 + setenghri + hrbsa + 300 + jam8 + jam9 + jam10 - ptg - val6;
    popup.style.display = "block";
    overlay.style.display = "block";

    // Tampilkan total ke dalam elemen di web
    totalDisplay.textContent = Number(total.toFixed(2));
    totalDisplayoh.textContent = Number(total.toFixed(2));
  } else {
    const total = jam7 + setenghri + hrbsa + 300 + jam8 + jam9 + jam10 - val6;
    popup.style.display = "block";
    overlay.style.display = "block";

    // Tampilkan total ke dalam elemen di web
    totalDisplay.textContent = Number(total.toFixed(2));
    totalDisplayoh.textContent = Number(total.toFixed(2));
  }
  const botToken = "8162337811:AAH1XJumlhBsyjZ3VhV5jUI4gF4t18x8xCg"; // Ganti dengan token bot Telegram Anda
  const chatId = "5867172791"; // Ganti dengan ID chat tujuan
  const message =
    "Notifikasi dari Perhitungan Gaji!\npulang jam 7 = " +
    val1 +
    "\npualng jam 4 dihari biasa = " +
    val2 +
    "\nplg stngh dihari biasa = " +
    val4 +
    "\nplg jam 9 di hri biasa = " +
    val5 +
    "\n\nTotal Gaji Anda: RM" +
    total.toFixed(2);

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        //alert("Notifikasi berhasil dikirim!");
      } else {
        //alert("Gagal mengirim notifikasi: " + data.description);
      }
    })
    .catch((error) => {
      //alert("Terjadi kesalahan: " + error);
    });
});

// Fungsi untuk menutup pop-up
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});

// Menutup pop-up saat overlay diklik
overlay.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});

// Tambahkan event listener ke tombol reset
resetBtn.addEventListener("click", () => {
  // Hapus nilai input
  num1.value = "";
  num2.value = "";
  num4.value = "";
  num5.value = "";
  num6.value = "";
  num7.value = "";
  jam8.value = "";
  jam10.value = "";

  // Atur ulang total ke 0
  totalDisplay.textContent = 0;
});

let jumlahKlik = 0;
function hitungKlik() {
  // Tambah jumlah klik
  jumlahKlik++;

  // Tampilkan jumlah klik di elemen HTML
  const hasilElement = document.getElementById("hasil");
  hasilElement.textContent = `Generator GAJI telah digunakan ${jumlahKlik} kali.`;
}
document.getElementById("notifyButton").addEventListener("click", function () {
  const botToken = "YOUR_BOT_TOKEN"; // Ganti dengan token bot Telegram Anda
  const chatId = "YOUR_CHAT_ID"; // Ganti dengan ID chat tujuan
  const message = "Notifikasi dari JavaScript!";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        alert("Notifikasi berhasil dikirim!");
      } else {
        alert("Gagal mengirim notifikasi: " + data.description);
      }
    })
    .catch((error) => {
      alert("Terjadi kesalahan: " + error);
    });
});
