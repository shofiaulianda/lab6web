
/* =====================================
   LATIHAN 1 - MENGUBAH KONTEN DOM
===================================== */
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";


/* =====================================
   LATIHAN 2 - EVENT KLIK
===================================== */
const tombolAksi = document.getElementById("tombolAksi");

tombolAksi.addEventListener("click", function () {
    pesan.textContent =
        "Tombol diklik pada " + new Date().toLocaleTimeString();
});


/* =====================================
   LATIHAN 3 - MENGUBAH GAYA
===================================== */
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});


/* =====================================
   LATIHAN 4 - MENGHITUNG KARAKTER
===================================== */
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});


/* =====================================
   LATIHAN 5 - VALIDASI FORM
===================================== */
const formPendaftaran = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

formPendaftaran.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent =
            "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.textContent =
            "Validasi berhasil. Form siap diproses.";
        formPendaftaran.reset();
    }
});


/* =====================================
   LATIHAN 6 - DAFTAR TUGAS
===================================== */
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const tombolSelesai = document.createElement("button");

    label.textContent = teks;
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";

    tombolSelesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        tombolSelesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    item.append(label, tombolSelesai);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas berhasil ditambahkan.";
});


/* =====================================
   MINI PROJECT - WORKSHOP
===================================== */
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const catatanWorkshop = document.getElementById("catatanWorkshop");

const errorNamaWorkshop = document.getElementById("errorNamaWorkshop");
const errorEmailWorkshop = document.getElementById("errorEmailWorkshop");
const errorSesiWorkshop = document.getElementById("errorSesiWorkshop");
const hasilWorkshop = document.getElementById("hasilWorkshop");
const jumlahCatatan = document.getElementById("jumlahCatatan");

const polaEmailWorkshop = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


/* Menghitung karakter catatan */
catatanWorkshop.addEventListener("input", function () {
    jumlahCatatan.textContent = catatanWorkshop.value.length;
});


/* Menampilkan sesi yang dipilih */
sesiWorkshop.addEventListener("change", function () {
    hasilWorkshop.textContent = sesiWorkshop.value
        ? "Sesi dipilih: " + sesiWorkshop.value
        : "";
    hasilWorkshop.style.color = "#28794c";
});


/* Validasi pendaftaran workshop */
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    errorNamaWorkshop.textContent = "";
    errorEmailWorkshop.textContent = "";
    errorSesiWorkshop.textContent = "";
    hasilWorkshop.textContent = "";

    let valid = true;

    if (namaWorkshop.value.trim().length < 3) {
        errorNamaWorkshop.textContent =
            "Nama wajib diisi minimal 3 karakter.";
        valid = false;
    }

    if (!polaEmailWorkshop.test(emailWorkshop.value.trim())) {
        errorEmailWorkshop.textContent =
            "Masukkan alamat email yang valid.";
        valid = false;
    }

    if (sesiWorkshop.value === "") {
        errorSesiWorkshop.textContent =
            "Silakan pilih sesi workshop.";
        valid = false;
    }

    if (!valid) {
        hasilWorkshop.textContent =
            "Pendaftaran gagal. Periksa kembali data kamu.";
        hasilWorkshop.style.color = "#c62828";
        return;
    }

    hasilWorkshop.textContent =
        "Pendaftaran berhasil! Sesi pilihan: " + sesiWorkshop.value;
    hasilWorkshop.style.color = "#28794c";
});


/* Reset form workshop */
formWorkshop.addEventListener("reset", function () {
    errorNamaWorkshop.textContent = "";
    errorEmailWorkshop.textContent = "";
    errorSesiWorkshop.textContent = "";
    hasilWorkshop.textContent = "";
    jumlahCatatan.textContent = "0";
});
