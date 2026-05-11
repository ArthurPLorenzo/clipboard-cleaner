function updateUI(enabled) {
  const pill = document.getElementById('statusPill');
  const toggle = document.getElementById('toggleSwitch');
  toggle.checked = enabled;
  pill.textContent = enabled ? 'Ativo' : 'Inativo';
  pill.className = 'status-pill ' + (enabled ? 'on' : 'off');
}

document.getElementById('toggleSwitch').addEventListener('change', (e) => {
  const newState = e.target.checked;
  chrome.storage.local.set({ enabled: newState }, () => {
    updateUI(newState);
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, { type: 'SET_ENABLED', enabled: newState }, () => {
          void chrome.runtime.lastError;
        });
      });
    });
  });
});

document.getElementById('cleanBtn').addEventListener('click', () => {
  const text = document.getElementById('input').value;
  const cleaned = text.replace(/[\\/:*?"<>|]/g, '').replace(/\s+/g, ' ').trim().substring(0, 255);
  const res = document.getElementById('result');
  res.textContent = cleaned ? `✓ "${cleaned}" (${cleaned.length} chars)` : '';
  navigator.clipboard.writeText(cleaned);
});

const collapseBtn = document.getElementById('collapseBtn');
const collapseSection = document.getElementById('collapseSection');

chrome.storage.local.get({ enabled: true, collapsed: false }, (result) => {
  updateUI(result.enabled);
  if (result.collapsed) {
    collapseSection.classList.add('collapsed');
    collapseBtn.classList.add('collapsed');
  }
});

collapseBtn.addEventListener('click', () => {
  const isCollapsed = collapseSection.classList.toggle('collapsed');
  collapseBtn.classList.toggle('collapsed', isCollapsed);
  chrome.storage.local.set({ collapsed: isCollapsed });
});
