const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// depodan oku
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (savedData.email) form.elements.email.value = savedData.email;
if (savedData.message) form.elements.message.value = savedData.message;

// input olayını dinle
form.addEventListener("input", () => {
  const data = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});

// submit olayı
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  console.log({ email, message });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
