// === versi perbaikan (client-side) ===
// Ambil elemen DOM (elemen tetap dinamai 'el...' supaya tidak bentrok)
const elNum1 = document.getElementById("num1");
const elNum2 = document.getElementById("num2");
const elNum4 = document.getElementById("num4");
const elNum5 = document.getElementById("num5");
const elNum6 = document.getElementById("num6");
const elNum7 = document.getElementById("num7");
const elJam8 = document.getElementById("jam8");
const elJam10 = document.getElementById("jam10");
const calculateBtn = document.getElementById("calculate-btn");
const totalDisplay = document.getElementById("total");
const totalDisplayoh = document.getElementById("totalnya");
const resetBtn = document.getElementById("reset-btn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopupButton = document.getElementById("closePopup");

let jumlahKlik = 0;

function hitungKlik() {
  jumlahKlik++;
  const hasilElement = document.getElementById("hasil");
  hasilElement.textContent = `Generator GAJI telah digunakan ${jumlahKlik} kali.`;
}

function showPopupAndDisplay(total) {
  popup.style.display = "block";
  overlay.style.display = "block";
  totalDisplay.textContent = Number(total.toFixed(2));
  totalDisplayoh.textContent = Number(total.toFixed(2));
}

calculateBtn.addEventListener("click", () => {
  hitungKlik();

  // Ambil nilai input
  const val1 = Number(elNum1.value) || 0;
  const val2 = Number(elNum2.value) || 0;
  const val4 = Number(elNum4.value) || 0;
  const val5 = Number(elNum5.value) || 0;
  const val6 = Number(elNum6.value) || 0;
  const ptgInput = Number(elNum7.value) || 0;
  const jam10val = Number(elJam10.value) || 0;
  const jam8val = Number(elJam8.value) || 0;

  // Hitung komponen gaji
  const jam7Pay = val1 * 55;
  const hrBiasa = 35.02 * val2;
  const setengahHr = 21.88 * val4;
  const jam9Pay = 63.74 * val5;
  const jam10Pay = 68.11 * jam10val;
  const jam8Pay = 59.37 * jam8val;

  // Potongan
  const potongAmount = ptgInput * 80;

  // Hitung total sekali (sederhanakan, semua path sama)
  const total =
    jam7Pay +
    setengahHr +
    hrBiasa +
    300 +
    jam8Pay +
    jam9Pay +
    jam10Pay -
    potongAmount -
    val6;

  // tampilkan popup dan total
  showPopupAndDisplay(total);

  // --- Kirim notifikasi TELEGRAM ---
  // Jangan taruh BOT token di client-side! Gunakan server untuk memproksi request.
  // Contoh: POST ke /api/sendTelegram dengan payload { message, chatId }.
  // Berikut contoh fetch ke endpoint server (server-lah yang memilik token).
  const payload = {
    text:
      "Notifikasi dari Perhitungan Gaji!\n" +
      "pulang jam 7 = " +
      val1 +
      "\n" +
      "pulang jam 4 dihari biasa = " +
      val2 +
      "\n" +
      "plg stngh dihari biasa = " +
      val4 +
      "\n" +
      "plg jam 9 di hri biasa = " +
      val5 +
      "\n\n" +
      "Total Gaji Anda: RM" +
      total.toFixed(2),
  };

  // contoh: endpoint server yang memanggil Telegram API (lebih aman).
  fetch("/api/sendTelegram", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => {
    // gagal mengirim notifikasi — jangan crash UI
    console.warn("Gagal mengirim notifikasi (client-side):", err);
  });
});

// Tutup popup
closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});
overlay.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";
});

// Reset
resetBtn.addEventListener("click", () => {
  elNum1.value = "";
  elNum2.value = "";
  elNum4.value = "";
  elNum5.value = "";
  elNum6.value = "";
  elNum7.value = "";
  elJam8.value = "";
  elJam10.value = "";
  totalDisplay.textContent = 0;
});
