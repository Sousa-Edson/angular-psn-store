### Angular PSN Store

O **Angular PSN Store** é um projeto desenvolvido durante um curso da **Digital Innovation One (DIO)**, com o objetivo de aprender e aplicar conceitos fundamentais do **Angular**. Após concluir as aulas, o projeto foi refeito e aprimorado com a adição do framework de estilização **Tailwind CSS**, proporcionando um design moderno e responsivo.

---

### 🛠️ **Tecnologias Utilizadas**

- **Angular**: Framework para desenvolvimento de aplicações web.
- **Tailwind CSS**: Framework de estilização baseado em utilitários para criação de interfaces elegantes.
- **Docker Compose**: Configuração para execução da aplicação em um ambiente containerizado.
- **Apache HTTP Server**: Servidor web leve usado para hospedar os arquivos do projeto.

---

### 🌟 **Destaques do Projeto**

- Construção de uma interface responsiva e estilizada com **Tailwind CSS**.
- Organização e modularização do código seguindo boas práticas do Angular.
- Configuração de ambiente com **Docker Compose**, facilitando o deploy local.

---

### 🚀 **Como Executar**

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Sousa-Edson/angular-psn-store.git
   cd angular-psn-store
   ```

2. **Gere o Build da Aplicação**
   Certifique-se de que o Angular CLI está instalado e execute:

   ```bash
   ng build --configuration production
   ```

3. **Inicie a Aplicação com Docker Compose**
   Use o comando abaixo para rodar a aplicação em um contêiner:

   ```bash
   docker-compose up --build
   ```

4. **Acesse no Navegador**
   Acesse a aplicação em [http://localhost:8083](http://localhost:8083).

---

### 🗂️ **Estrutura do Projeto**

- **`src/`**: Código-fonte da aplicação Angular.
- **`dist/`**: Arquivos gerados pelo build da aplicação.
- **`docker-compose.yml`**: Configuração para execução com Docker Compose.
- **`tailwind.config.js`**: Configuração personalizada do Tailwind CSS.

---

### 📘 **Aprendizados**

- Integração de **Angular** com **Tailwind CSS** para criar interfaces modernas.
- Uso do **Docker Compose** para gerenciar contêineres e simplificar o desenvolvimento local.
- Melhoria da organização do projeto, seguindo boas práticas ensinadas no curso da **DIO**.

---

## Comandos para build e deploy

### Comandos para build

```bash
ng build
```

### Comandos para instalar cli de github pages

```bash
npm install -g angular-cli-ghpages
```

### Comandos para deploy

```bash
ng deploy --base-href="/angular-psn-store/"
```
