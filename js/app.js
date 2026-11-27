  const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  const characters = "01アイウエオカキクケコサシスセソ年に書かれた乱歩の最も有名な物語では、職人が自分で作った肘掛け椅子の中に隠れています。それは今でも、その椅子の中に隠れる最良の方法です";
  const fontSize = 17;

  let columns;
  let drops;

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    columns = Math.ceil(window.innerWidth / fontSize);

    drops = Array.from(
      { length: columns },
      () => Math.random() * -50
    );
  }

  function drawMatrix() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.fillStyle = "rgba(2, 4, 13, 0.08)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < columns; i++) {
      const char = characters[
        Math.floor(Math.random() * characters.length)
      ];

      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillStyle = "#00d9ff";
      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i] += 0.5;
    }

    requestAnimationFrame(drawMatrix);
  }

  resizeCanvas();
  drawMatrix();

  window.addEventListener("resize", resizeCanvas);








//   // About Section Scroll Animation

// const aboutSection = document.querySelector("#about");

// const aboutObserver = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");

//         aboutObserver.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.15
//   }
// );

// aboutObserver.observe(aboutSection);



// About Section Scroll Animation

const aboutSection = document.querySelector("#about");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        aboutObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

aboutObserver.observe(aboutSection);