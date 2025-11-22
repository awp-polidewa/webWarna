// membuat tombol ubah warna
const tombolUbahWarna = document.getElementById("tombolUbahWarna");

tombolUbahWarna.addEventListener("click", () => {
  document.body.classList.toggle("bg-body1");
});

const buttonBaru = document.createElement("button");
const isiButtonBaru = document.createTextNode("Ubah Warna");

buttonBaru.appendChild(isiButtonBaru);
buttonBaru.setAttribute("type", "button");
tombolUbahWarna.after(buttonBaru);

buttonBaru.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

// membuat range warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ketika cursor digerakkan maka brubah warna
document.body.addEventListener("mousemove", (geser) => {
  const geserMousX = Math.round((geser.clientX / window.innerWidth) * 255);
  const geserMousY = Math.round((geser.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor =
    "rgb(" + geserMousX + "," + geserMousY + ",100)";
});
