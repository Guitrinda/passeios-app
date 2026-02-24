📍 Places Manager – Angular

Uma aplicação desenvolvida em Angular (estrutura modular) com foco em aprendizado de arquitetura, autenticação e proteção de rotas.

O sistema permite o gerenciamento de categorias e lugares, incluindo cadastro, listagem com filtros inteligentes e exibição com avaliação visual em estrelas.

🚀 Tecnologias Utilizadas

Angular (arquitetura modular)

TypeScript

TailwindCSS (SCSS)

Angular Reactive Forms

Angular Router

Route Guards

Autenticação com Google

HTML

🔐 Autenticação

Ao acessar o sistema, o usuário é direcionado para a tela de login com Google.

A autenticação foi implementada via service dedicado, garantindo:

Controle de sessão

Proteção total de rotas com Guards

Bloqueio de navegação para usuários não autenticados

Todas as rotas da aplicação estão protegidas.

🗂️ Funcionalidades
📌 Cadastro de Categorias

Permite cadastrar categorias que serão utilizadas na criação dos lugares.

📍 Cadastro de Lugares

Ao cadastrar um local, o usuário informa:

Nome

Categoria (select com categorias já cadastradas)

URL da imagem

Avaliação (1 a 5)

Os formulários possuem validações obrigatórias (required) e feedback visual ao usuário.

🖼️ Galeria de Lugares

A galeria exibe todos os lugares cadastrados com:

Imagem carregada via URL

Nome

Categoria

Avaliação visual com estrelas ⭐

Exemplo:
Avaliação 4 → ⭐⭐⭐⭐☆

🔎 Filtro Inteligente

Na aba galeria é possível filtrar:

Por nome

Por categoria

Ou ambos

O filtro funciona por correspondência parcial, ou seja, mesmo digitando apenas parte do nome o sistema já encontra o local.

🎨 Estilização

O projeto utiliza TailwindCSS com SCSS, garantindo:

Layout moderno

Componentização limpa

Código organizado

Facilidade de manutenção


🧠 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

Praticar arquitetura modular no Angular

Implementar autenticação com Google

Trabalhar com Guards e controle de acesso

Desenvolver filtros dinâmicos

Criar um sistema simples porém estruturado

▶️ Como Executar
git clone https://github.com/seuusuario/seurepo.git
cd seurepo
npm install
ng serve
