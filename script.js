const music = document.getElementById("music");
const opening = document.getElementById("opening");
const content = document.getElementById("content");
let isPlaying = false;

function openInvitation() {
  opening.style.display = "none";
  content.classList.remove("hidden");
  music.play();
  isPlaying = true;
  countdown();
}

function toggleMusic() {
  isPlaying ? music.pause() : music.play();
  isPlaying = !isPlaying;
}

// COUNTDOWN
function countdown() {
  const target = new Date("2026-02-08T11:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const sisa = target - now;

    document.getElementById("hari").innerText = Math.floor(sisa / (1000*60*60*24));
    document.getElementById("jam").innerText = Math.floor((sisa / (1000*60*60)) % 24);
    document.getElementById("menit").innerText = Math.floor((sisa / (1000*60)) % 60);
    document.getElementById("detik").innerText = Math.floor((sisa / 1000) % 60);
  }, 1000);
}

// RSVP
function kirimRSVP() {
  const nama = document.getElementById("nama").value;
  const hadir = document.getElementById("kehadiran").value;
  const pesan = `Assalamualaikum,%0ASaya ${nama} menyatakan ${hadir} di pernikahan Rahma & Akmal.`;
  window.open(`https://wa.me/62812XXXXXXX?text=${pesan}`, "_blank");
}