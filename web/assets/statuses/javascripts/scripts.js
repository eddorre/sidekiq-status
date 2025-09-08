document.getElementById("sidekiq-status-select-status-name").addEventListener("change", handleSelectChange);
document.getElementById("sidekiq-status-select-per-page").addEventListener("change", handleSelectChange);

function handleSelectChange(select) {
  window.location = select.options[select.selectedIndex].getAttribute("data-url");
}
