const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const preview = document.getElementById("preview");
const themeToggle = document.getElementById("theme-toggle");

let timeoutId;

function updatePreview() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    const code = `
      <html>
        <head><style>${css.value}</style></head>
        <body>
          ${html.value}
          <script>${js.value}<\/script>
        </body>
      </html>
    `;
    preview.srcdoc = code;
  }, 300);
}

[html, css, js].forEach((el) => el.addEventListener("input", updatePreview));

// Pre-fill demo content
html.value = "<h1>Hello, dude!</h1>";
css.value = `
  body {
    background-color: #121212;
    color: #00f7ff;
    text-align: center;
    font-size: 2.5rem;
    font-family: 'Segoe UI', sans-serif;
    margin-top: 10vh;
  }
`;
js.value = `console.log('Hello from your custom code editor!');`;
updatePreview();

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkMode = document.body.classList.contains("dark");
  themeToggle.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});
