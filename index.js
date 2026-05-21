const form = document.querySelector("form");
const grid = document.querySelector("#card-grid");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const src = document.querySelector("#src").value;
  const description = document.querySelector("#description").value;
  const card = document.createElement("div");
  card.className = "bg-white rounded-xl shadow-lg overflow-hidden hover:scale-125 transition-transform duration-300";
  card.innerHTML = `
    <img src="${src}" alt="${title}" class="w-full h-48 object-cover">
    <div class="p-4 ">
      <h3 class="text-xl font-bold text-gray-800 mb-2">${title}</h3>
      <p class="text-gray-600 text-sm">${description}</p>
    </div>
  `;
  grid.appendChild(card);
  form.reset();
}