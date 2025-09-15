# Wicomm Teste – Landing Page ReactJS

Projeto desenvolvido como teste técnico para a Wicomm, utilizando ReactJS e Vite, com foco em componentização, pixel perfect e boas práticas de SEO. O layout segue fielmente o Figma fornecido, priorizando a versão desktop.

## 🖥️ Tecnologias Utilizadas
- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Google Fonts – Sora](https://fonts.google.com/specimen/Sora)

## 📦 Estrutura do Projeto
```
src/
	components/      # Componentes React reutilizáveis
	assets/          # Imagens e SVGs
	styles/          # CSS global
	App.jsx          # Composição principal da página
	main.jsx         # Ponto de entrada
public/
	...              # Assets públicos
index.html         # SEO e metatags
```

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
- Node.js (v18 ou superior recomendado)
- npm ou yarn

### Instalação
1. Clone este repositório:
	 ```
	 git clone https://github.com/joaoluis17/wicomm-teste.git
	 cd wicomm-teste
	 ```
2. Instale as dependências:
	 ```
	 npm install
	 # ou
	 yarn
	 ```

### Rodando em modo desenvolvimento
```
npm run dev
# ou
yarn dev
```
Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção
```
npm run build
# ou
yarn build
```
Os arquivos otimizados ficarão em `/dist`.

### Preview do build
```
npm run preview
# ou
yarn preview
```

## 🔎 SEO e Acessibilidade
- O projeto possui metatags, Open Graph, Twitter Card e Schema.org no `index.html`.
- Todas as imagens possuem `alt` e elementos interativos usam `aria-label`.

## 📋 Observações
- O layout é focado em desktop, mas há responsividade básica.
- Todos os textos, imagens e interações seguem o Figma fornecido.
- O formulário de newsletter é visual, sem integração real.

## 👨‍💻 Autor
- [João Luis Prado](https://github.com/joaoluis17)

---
