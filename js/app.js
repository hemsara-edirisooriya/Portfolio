const canvas = document.getElementById("matrix-canvas");
  const ctx = canvas.getContext("2d");

  const characters = "01アイウエオカキクケコサシスセソ";
  const fontSize = 16;

  let columns;
  let drops;
  let animationId;

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    columns = Math.ceil(rect.width / fontSize);

    drops = Array.from(
      { length: columns },
      () => Math.random() * -50
    );
  }

  function drawMatrix() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Previous frame eka fade karanawa
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

      // Akuru pahala move karanawa
      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i] += 0.5;
    }

    animationId = requestAnimationFrame(drawMatrix);
  }

  resizeCanvas();
  drawMatrix();

  window.addEventListener("resize", resizeCanvas);