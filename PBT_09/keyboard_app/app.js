const images = [
  "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/687957819_2299119827285369_1764254454843328899_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHTEuxv0YPARSRMMkdl5ZSvG3rXkAsmUgIbeteQCyZSAgWEHu-JBmopzn0RpjFkY3WB1XAQetQZW2d7QiUtvEM7&_nc_ohc=x8S8DMZbrPAQ7kNvwESy4sH&_nc_oc=Adp8kp7lx0CCIrRX2KK2K5-damfIYn63q21h5ujULX8NON9rj9OwzhPXZzOuh-PxJaY&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=CvFpDrAzhOYUl9BbvZ3u-A&_nc_ss=7b2a8&oh=00_Af7Dfh272AFznFsjzg7X-qAX2ftMP_FMasA04_DGHRh-lg&oe=6A20806D",
  "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/672689408_2286421685221850_7100752781151670953_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYBu85rujDMSRcmFCEZ5lv2Gu7WVD613_Ya7tZUPrXf_spzLWzj2yg69aPR9fBSr7G7CIbhepZDacmU-2_ac6U&_nc_ohc=4L4oQkOv8s8Q7kNvwHcgzoZ&_nc_oc=AdpRPjt1h9e-k7rBQvrU6YuxhBaqn-pWnV3aGS2UG5A_blBKmxxN6svAT6GiFSKKqNQ&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=5B9_hWQGfovmdbUKle5RBQ&_nc_ss=7b2a8&oh=00_Af6Ld3Y-Zd45YpBsgwgJNmpZGfJP0fuc28A4Bsq-zqLz6Q&oe=6A207A64",
  "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/690653633_2301620557035296_7949943771638160851_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEmUID1vxd9xDBy3nYNI68UEkKmRgxzircSQqZGDHOKt_eiGxN2G1vhkhg6rdU9FaLn8v5BYBzOEuOkX6n68Yyd&_nc_ohc=qmOyGNu6YJkQ7kNvwEqddUc&_nc_oc=AdrbBrt16qflidOxjj5nzqO-ta0wHunU-XegCyL2FaTJalPNLz47Wq68eCPt1PR-0wM&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=N0m4wbGEHW6jf3DXP6AHUg&_nc_ss=7b2a8&oh=00_Af4y-MdO6GKVPFDIDcrFPRlxucH6qFOWaL8na6M_B-Bczg&oe=6A208D50",
  "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/690366480_2301620420368643_8475847311847779347_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEOb9LE3VVCsE1gRcNFpJNnvjOiczDDsRu-M6JzMMOxGwCthcPcMcTnKvoRKnIqRbvLrR2fjqs8zsG8kIlH5Wuz&_nc_ohc=dSartthuyq0Q7kNvwHt7Gk0&_nc_oc=AdqMUMJ5oUGHzOdZWoxZ88ov1weKdnS86RRSkAw-Opy9Dv2PbmAWtKJbaHmsEWaShSI&_nc_zt=23&_nc_ht=scontent.fhan2-4.fna&_nc_gid=Q_BTHFH2Y6oACnauZ9M5Vg&_nc_ss=7b2a8&oh=00_Af66rEhuY3wsQPDPJtN8oMy3lDaz8JBzkemIwib1jdtmXg&oe=6A207EB5",
  "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/699256441_2307224656474886_423483955276039761_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG1wMMj5zwXAyBuA6zfNcXfvz2PiU-0rRS_PY-JT7StFICQutdVSspoLUQ3ywFroR5NR2Qr3CxpNUTh2jyXVIWc&_nc_ohc=GTY4n_cQFzMQ7kNvwHfUMv8&_nc_oc=AdqzjHOgpbrdaATlM0HOnnfELRQFCuJagc-AYXA-85Kly0WqC7d6b7-3kh4-bBzzQE4&_nc_zt=23&_nc_ht=scontent.fhan2-3.fna&_nc_gid=3iNOoTDrnOJrTdGtOhsOFw&_nc_ss=7b2a8&oh=00_Af7mgQi9Jy-ilSFbP_cMgebTSgiiFYSpGzS78VEbcWf_RA&oe=6A206446",
];

const commands = [
  "Open Gallery",
  "Next Image",
  "Previous Image",
  "Start Slideshow",
  "Stop Slideshow",
];

let currentIndex = 0;
let slideshow = null;

const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalImage = document.querySelector("#modalImage");

const palette = document.querySelector("#commandPalette");
const commandInput = document.querySelector("#commandInput");
const commandList = document.querySelector("#commandList");

renderGallery();
renderCommands(commands);

function renderGallery() {
  gallery.innerHTML = "";
  images.forEach((image, index) => {
    const card = document.createElement("div");
    card.className = "image-card";
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Image " + (index + 1);
    img.setAttribute("aria-label", "Image " + (index + 1));

    card.appendChild(img);
    card.addEventListener("click", () => {
      currentIndex = index;
      openModal();
    });
    gallery.appendChild(card);
  });
}

function openModal() {
  modal.classList.remove("hidden");
  modalImage.src = images[currentIndex];
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  modalImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImage.src = images[currentIndex];
}

function renderCommands(list) {
  commandList.innerHTML = "";
  list.forEach((command) => {
    const li = document.createElement("li");
    li.textContent = command;
    commandList.appendChild(li);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    palette.classList.remove("hidden");
    commandInput.focus();
  }

  if (e.key === "Escape") {
    modal.classList.add("hidden");
    palette.classList.add("hidden");
  }

  if (!modal.classList.contains("hidden")) {
    if (e.key === "ArrowRight") {
      nextImage();
    }
    if (e.key === "ArrowLeft") {
      prevImage();
    }
  }

  if (!isNaN(e.key) && e.key !== "0") {
    let index = Number(e.key) - 1;
    if (index < images.length) {
      currentIndex = index;
      openModal();
    }
  }

  if (e.code === "Space") {
    e.preventDefault();
    if (slideshow) {
      clearInterval(slideshow);
      slideshow = null;
    } else {
      slideshow = setInterval(() => {
        currentIndex++;
        if (currentIndex >= images.length) {
          currentIndex = 0;
        }
        modalImage.src = images[currentIndex];
      }, 2000);
    }
  }
});

commandInput.addEventListener("input", () => {
  const keyword = commandInput.value.toLowerCase();
  const filtered = commands.filter((command) =>
    command.toLowerCase().includes(keyword),
  );
  renderCommands(filtered);
});

commandInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && commandList.firstChild) {
    alert(commandList.firstChild.textContent);
    palette.classList.add("hidden");
  }
});

document.querySelector("#nextBtn").addEventListener("click", () => {
  openModal();
  nextImage();
});

document.querySelector("#prevBtn").addEventListener("click", () => {
  openModal();
  prevImage();
});
