chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'CLEANED') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'Clipboard Cleaner',
      message: `Texto limpo! ${msg.original} → ${msg.cleaned} caracteres`
    });
  }
});
