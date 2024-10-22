function replaceName() {
  let name = prompt("halo, siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

document.getElementById("tombol").addEventListener("click", function () {
  replaceName();
});
