let enabled = true;

function syncState() {
  chrome.storage.local.get({ enabled: true }, (r) => {
    enabled = r.enabled;
  });
}

syncState();
setInterval(syncState, 500);

function cleanText(text) {
  return text
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 255);
}

document.addEventListener('copy', (e) => {
  if (!enabled) return;
  const selected = window.getSelection().toString();
  if (!selected) return;
  const cleaned = cleanText(selected);
  if (cleaned !== selected) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', cleaned);
    chrome.runtime.sendMessage({ type: 'CLEANED', original: selected.length, cleaned: cleaned.length });
  }
});
