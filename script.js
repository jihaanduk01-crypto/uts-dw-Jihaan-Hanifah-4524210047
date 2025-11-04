document.addEventListener("DOMContentLoaded", () => {

  const namaJurus = document.querySelector('#namaJurus');
  const tingkatKesulitan = document.querySelector('#tingkatKesulitan');
  const deskripsi = document.querySelector('#deskripsi');
  const langkah = document.querySelector('#langkah');
  const previewBtn = document.querySelector('#previewBtn');

  const previewNama = document.querySelector('#previewNama');
  const previewDeskripsi = document.querySelector('#previewDeskripsi');
  const previewKesulitan = document.querySelector('#previewKesulitan');
  const previewLangkah = document.querySelector('#previewLangkah');

  function updatePreview() {
    previewNama.textContent = namaJurus.value.trim() || "NAMA JURUS AKAN MUNCUL DI SINI";
    previewDeskripsi.textContent = deskripsi.value.trim() || "Deskripsi jurus akan tampil di sini.";
    previewKesulitan.textContent = tingkatKesulitan.value || "-";
    previewLangkah.innerHTML = langkah.value.trim()
      ? langkah.value.replace(/\n/g, "<br>")
      : "Belum ada langkah yang dimasukkan.";
  }

  previewBtn.addEventListener('click', updatePreview);
});
