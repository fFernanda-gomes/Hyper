# padronização 
  -- folder components
      componentes que serão usados em mais de um lugar na aplicação, componentes globais
  -- folder pages
      paginas da aplicação, cada pasta corresponde a uma tela do site/aplicação, dentro da pasta há o arquivo "html" e o css 
        todos possuem o mesmo nome "index" e o "style"
        a função possui o nome da tela então é rederizado o componente com esse respectivo nome
  -- folder assets
      onde está todas as img da aplicação

  -- possiveis folder
      hook
      utils
      algo pra api
  
  -- folder que vai ser criado
      routes --> vai ser onde as rotas da aplicação vão estar

## Instalação do ESLINT
    npm i -D eslint @rocketseat/eslint-config

    -- .eslintrc.json
        {
            "extends": "@rocketseat/eslint-config/react"
        }
             