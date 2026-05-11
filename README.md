# Clipboard Cleaner

Extensão para Chrome que limpa automaticamente o clipboard ao copiar com Ctrl+C.

Remove caracteres inválidos para nomes de arquivo no Windows (`\ / : * ? " < > |`) e limita o texto a 255 caracteres.

---

## Download e instalação

### 1 — Baixar

Clique no botão verde **`<> Code`** → **`Download ZIP`** e extraia a pasta.

### 2 — Abrir extensões do Chrome

Na barra de endereço do Chrome, cole e pressione Enter:

```
chrome://extensions
```

### 3 — Ativar Modo Desenvolvedor

No canto superior direito da página, ative a chave **"Modo do desenvolvedor"**.

### 4 — Carregar a extensão

Clique em **"Carregar sem compactação"** e selecione a pasta extraída (`clipboard-cleaner-master`).

### 5 — Fixar na barra

Clique no ícone 🧩 no canto superior direito do Chrome e fixe o **Clipboard Cleaner**.

---

## Como usar

| Ação | Resultado |
|------|-----------|
| Ctrl+C com extensão **Ativa** | Texto copiado já sai limpo |
| Ctrl+C com extensão **Inativa** | Copia normalmente, sem alteração |
| Seção de teste manual | Limpa e copia um texto específico sem precisar selecionar na página |

O estado (ativo/inativo e minimizado) é salvo automaticamente entre sessões.
