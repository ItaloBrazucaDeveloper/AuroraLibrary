# 📚 Aurora Library - React

[![GitHub license](https://img.shields.io/github/license/ItaloBrazucaDeveloper/aurora_library)](https://github.com/ItaloBrazucaDeveloper/aurora_library/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/ItaloBrazucaDeveloper/aurora_library)](https://github.com/ItaloBrazucaDeveloper/aurora_library/issues)
[![GitHub forks](https://img.shields.io/github/forks/ItaloBrazucaDeveloper/aurora_library)](https://github.com/ItaloBrazucaDeveloper/aurora_library/network)
[![GitHub stars](https://img.shields.io/github/stars/ItaloBrazucaDeveloper/aurora_library)](https://github.com/ItaloBrazucaDeveloper/aurora_library/stargazers)
[![GitHub contributors](https://img.shields.io/github/contributors/ItaloBrazucaDeveloper/aurora_library)](https://github.com/ItaloBrazucaDeveloper/aurora_library/graphs/contributors)

## 📝 Sobre o projeto
Este projeto é um sistema para a biblioteca _Aurora Library_. Ele foi desenvolvido para atender as necessidades de registrar e gerenciar empréstimos de livros. Este é projeto _front-end_, para ver o projeto _back-end_, acesse o este [repositório](https://github.com/Dev-Benicio/aurora-library-project). 

## 🚀 Como iniciar o projeto   

### ⛔🐋 Sem docker   
> **Certifique-se de ter instalado o ['node.js'](https://nodejs.org/pt) e o gerenciador de pacote ['pnpm'](https://nodejs.org/pt)**

1. Faça clone do projeto usando o git
```bash
  git clone --branch master https://github.com/ItaloBrazucaDeveloper/aurora_library.git
```

2. Abra o projeto no seu editor de código favorito
```bash
  # Se estiver usando o Visual Studio Code, abra o projeto usando o comando abaixo
  cd aurora_library
  code .

  # Se estiver usando Cursor - com a ferramenta de linha de comando 'cursor', abra o projeto usando o comando abaixo
  cd aurora_library
  cursor .
```

3. Configure o proxy do Vite no arquivo [vite.config.ts](./vite.config.ts)
  ```typescript
    export default defineConfig({
      // Código existente...
      server: {
        proxy: {
          '/lib_api': {
            target: 'BASE_URL_API', // Troque o valor para a BASE URL da sua api
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/lib_api/, ''),
          },
        },
      },
    });
  ```

4. Instale todas as depedêndicas do projeto
```bash
  pnpm install
```

5. Execute o projeto e abra no navegador
```bash
  pnpm run dev
```

### ✅🐳 Com Docker
> **Certifique-se de ter instalado o ['docker'](https://www.docker.com/get-started)**

1. Faça clone do projeto usando o git
```bash
  git clone --branch master https://github.com/ItaloBrazucaDeveloper/aurora_library.git
```

2. Configure o proxy do Vite no arquivo [vite.config.ts](./vite.config.ts)
  ```typescript
    export default defineConfig({
      // Código existente...
      server: {
        proxy: {
          '/lib_api': {
            target: 'BASE_URL_API', // Troque o valor para a BASE URL da sua api
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/lib_api/, ''),
          },
        },
      },
    });
  ```

3. Entre na pasta do projeto
```bash
  cd aurora_library
```

4. Execute o comando para construir o docker
```bash
  docker build -t aurora_library .
```

5. Execute o comando para executar o docker
```bash
  docker run -p 5173:5173 aurora_library
```

## Licença

MIT license