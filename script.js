// 切り替える画像のリスト
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg"
];

let index = 0;

// 次の画像へ
function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("gallery-image").src = images[index];
}

// 前の画像へ
function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("gallery-image").src = images[index];
}
