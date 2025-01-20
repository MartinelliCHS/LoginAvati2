# Login AVATI

## Índice

1. [Introdução](#introdução)  
2. [Descrição do Projeto](#descrição-do-projeto)  
3. [Estrutura de Arquivos](#estrutura-de-arquivos)  
4. [Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [Estrutura do Código](#estrutura-do-código)  
   - [HTML](#html)  
   - [CSS](#css)  
   - [JavaScript](#javascript)  
6. [Funcionamento do Projeto](#funcionamento-do-projeto)  
7. [Instruções de Uso](#instruções-de-uso)  
8. [Melhorias Futuras](#melhorias-futuras)  

---

## Introdução

Este projeto é uma interface de login chamada **Login AVATI**, desenvolvida utilizando HTML, CSS (Tailwind) e JavaScript. Ele apresenta validações nos campos de entrada para garantir a consistência e usabilidade.

---

## Descrição do Projeto

O projeto consiste em uma página de login com validações básicas de formulário:
- **Email:** Verifica se o formato está correto utilizando expressão regular.
- **Senha:** Valida se possui pelo menos 6 caracteres.



## Tecnologias Utilizadas

- **HTML5:** Para estruturação semântica do documento.
- **CSS3 (Tailwind CSS):** Framework CSS para estilização responsiva e utilitária.
- **JavaScript:** Gerenciamento de validação e comportamento dinâmico.

---

## Estrutura do Código

### HTML

O arquivo `index.html` contém a estrutura principal da página:
- **Cabeçalho (`<head>`):** Define dados de relevância e importa fontes e estilos.
- **Corpo (`<body>`):**
  - **Coluna 1:** Exibe o logotipo centralizado.
  - **Coluna 2:** Contém o formulário de login.

### CSS

Utiliza o **Tailwind CSS** para estilização, com recursos como:
- Layout flexível e responsivo (`flex`, `grid`).
- Estilos de botão e campos de entrada (`bg-[#D3D3D3]`, `rounded-xl`).
- Responsividade com classes condicionais (`sm:`).

### JavaScript

O arquivo `script.js` gerencia a validação e funcionalidade do formulário:
- **Função `validateEmail`:** Verifica a formatação do email.
- **Função `validatePassword`:** Garante que a senha tenha no mínimo 6 caracteres.
- **Manipulação de Eventos:** Captura o evento de envio do formulário e impede o envio caso as validações falhem.

---

## Funcionamento do Projeto

1. O usuário preenche os campos de login: **Email** e **Senha**.
2. As validações são executadas:
   - Email: Verificado contra uma expressão regular.
   - Senha: Verificada quanto ao comprimento mínimo.
3. Mensagens de feedback:
   - Alerta para entradas inválidas.
   - Alerta de sucesso caso as validações sejam aprovadas.