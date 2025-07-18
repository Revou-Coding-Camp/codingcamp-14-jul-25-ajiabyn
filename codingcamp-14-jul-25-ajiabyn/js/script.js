// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('user-name').innerHTML = userName;
    }
}
document.getElementById("msgForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  // Ambil nilai input
  const name = document.getElementById("name").value;
  const birth = document.getElementById("birth").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value || "";
  const message = document.getElementById("message").value;

  // Tampilkan tanggal hari ini
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID");

  // Tampilkan ke kolom hasil
  document.getElementById("current-date").textContent = formattedDate;
  document.getElementById("out-name").textContent = name;
  document.getElementById("out-birth").textContent = birth;
  document.getElementById("out-gender").textContent = gender;
  document.getElementById("out-message").textContent = message;

  // Tampilkan notifikasi
  alert("✅ Data berhasil dikirim!");

  // Kosongkan form setelah submit
  document.getElementById("msgForm").reset();
});
