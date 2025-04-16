# How to run
# 🚀 Projeto Frontend com Vite + pnpm

Este é um projeto frontend moderno utilizando [Vite](https://vitejs.dev/) para build rápido e eficiente, e [pnpm](https://pnpm.io/) como gerenciador de pacotes.

## 📦 Tecnologias

- [Vite](https://vitejs.dev/)
- [pnpm](https://pnpm.io/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## ▶️ Como rodar localmente

1. **Clone o repositório**

```bash
git clone https://github.com/StefanoDPCarraro/MartizCurricular-Frontend.git
cd MartizCurricular-Frontend
```

Instale as dependências

```bash
pnpm install
```

Rode o projeto

```bash
pnpm dev
```
## 📁 Estrutura básica do projeto


```bash
src/
├── api/              # Chamadas de API
├── assets/           # Arquivos estáticos (imagens, ícones, fontes)
├── components/       # Componentes reutilizáveis
├── context/          # Contextos globais (React)
├── dtos/             # Data Transfer Objects
├── features/         # Funcionalidades isoladas do sistema
├── mocks/            # Dados mockados para testes ou desenvolvimento
├── pages/            # Páginas da aplicação
├── router/           # Configuração de rotas
├── styles/           # Estilos globais e variáveis SCSS
└── utils/constants/  # Utilitários e constantes compartilhadas
```

## 💡 Observações
Certifique-se de ter o pnpm instalado. Se não tiver:

```bash
npm install -g pnpm
```
