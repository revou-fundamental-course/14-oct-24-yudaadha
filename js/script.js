document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Cegah reload halaman

    // Ambil nilai input nama
    var name = document.getElementById("name").value;

    // Ganti teks 'Hi Harfi' dengan 'Hi [name]'
    document.getElementById("welcome-text").textContent =
      "Hi " + name + ", Welcome To Website";

    // Display data yang di-submit (opsional)
    document.getElementById("submitted-name").textContent = "Nama: " + name;
    document.getElementById("submitted-dob").textContent =
      "Tanggal Lahir: " + document.getElementById("dob").value;
    document.getElementById("submitted-gender").textContent =
      "Jenis Kelamin: " +
      document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("submitted-message").textContent =
      "Pesan: " + document.getElementById("message").value;
  });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const currentTimeElement = document.getElementById("current-time");
  const submittedNameElement = document.getElementById("submitted-name");
  const submittedDobElement = document.getElementById("submitted-dob");
  const submittedGenderElement = document.getElementById("submitted-gender");
  const submittedMessageElement = document.getElementById("submitted-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    // Display submitted data
    const currentTime = new Date().toLocaleString();
    currentTimeElement.textContent = `Current time: ${currentTime}`;
    submittedNameElement.textContent = `Nama: ${name}`;
    submittedDobElement.textContent = `Tanggal Lahir: ${dob}`;
    submittedGenderElement.textContent = `Jenis Kelamin: ${gender}`;
    submittedMessageElement.textContent = `Pesan: ${message}`;
  });
});
