# Gerador de Ticket — Coding Conference 2025

Um mini-projeto front-end que permite ao usuário **gerar um ticket personalizado** para a Coding Conference 2025.  
O usuário envia um avatar, insere seus dados e é redirecionado para outra página com o ticket gerado, utilizando **LocalStorage** para armazenar temporariamente as informações.

---

## Funcionalidades

### Upload e pré-visualização do avatar
- Aceita JPG ou PNG
- Mostra a imagem instantaneamente
- Valida tamanho máximo do arquivo
- Salva a imagem no `localStorage`

### Validação de e-mail
- Apenas envia se o e-mail estiver preenchido
- Exibe aviso visual caso esteja inválido

### Armazenamento dos dados no LocalStorage
- Nome
- E-mail
- Foto de perfil (URL temporária)

### Redirecionamento automático
Após validação, o formulário:
- Mostra alerta de sucesso
- Salva dados no navegador
- Redireciona para `card.html`

---

## 🗂️ Estrutura do Projeto

