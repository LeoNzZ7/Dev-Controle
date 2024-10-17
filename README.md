# Dev Controle

Dev Controle é um sistema avançado de gerenciamento onde usuários prestadores de serviços ou clientes cadastrados podem criar e gerenciar chamados para solucionar problemas variados. Esta plataforma oferece uma solução completa para o acompanhamento e resolução de questões técnicas e de suporte.

## Demonstração do Projeto
Abaixo está uma demonstração visual do projeto em funcionamento:  
![Devcontrolegif](https://github.com/LeoNzZ7/Dev-Controle/blob/master/dev-controle.gif)

## Acesso ao Projeto Implantado
O Dev Controle está disponível online e pode ser acessado através do seguinte link:  [Dev Controle](https://dev-controle-orcin.vercel.app/)  
Sinta-se à vontade para explorar as funcionalidades e a interface do sistema neste ambiente de produção.

## Tecnologias Utilizadas
O Dev Controle foi desenvolvido utilizando um conjunto robusto de tecnologias modernas:
- **Next.js**: Framework React para renderização híbrida, oferecendo excelente performance e SEO.
- **TypeScript**: Superset tipado de JavaScript, melhorando a qualidade e manutenibilidade do código.
- **Axios**: Cliente HTTP baseado em Promises para realizar requisições.
- **Firebase**: Plataforma de desenvolvimento de aplicativos móveis e web.
- **HTML2Canvas**: Biblioteca para capturar screenshots de elementos DOM.
- **React Hook Form**: Biblioteca eficiente para gerenciamento de formulários.
- **Zod**: Biblioteca de validação de esquema TypeScript-first.
- **NextAuth**: Solução completa de autenticação para Next.js, incluindo autenticação Google.
- **Tailwind CSS**: Framework CSS utilitário para design rápido e responsivo.
- **Prisma**: ORM moderno para Node.js e TypeScript, utilizado com MongoDB.
- **React Hot Toast**: Biblioteca para notificações em React.
- **Headless UI**: Componentes de UI totalmente acessíveis e sem estilo.
- **React Icons**: Biblioteca de ícones populares para React.

## Estrutura do Projeto
O Dev Controle utiliza a arquitetura moderna do Next.js com o diretório app router, permitindo uma combinação eficiente de renderização no lado do cliente e do servidor. Principais aspectos da estrutura:
- **App Router**: Utiliza o novo sistema de roteamento do Next.js para uma navegação mais eficiente.
- **API Routes**: A pasta `api` é dedicada à criação de rotas backend, permitindo a construção de uma API robusta dentro do mesmo projeto.
- **Componentes**: Organizados de forma modular para máxima reutilização e manutenibilidade.
- **Estilos**: Utiliza Tailwind CSS para estilização, permitindo um design consistente e responsivo.
- **Autenticação**: Implementada com NextAuth, garantindo um processo seguro de login e gerenciamento de sessões.

## Configuração do Ambiente de Desenvolvimento
Siga estes passos para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd dev-controle
2. Instale as dependências:

    ```
    npm install
3. Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis (substitua os valores conforme necessário):    
    ```
    DATABASE_URL=sua_url_do_mongodb
    NODE_ENV=development
    NEXTAUTH_URL=http://localhost:3000
    HOST_URL=http://localhost:3000
    NEXTAUTH_SECRET=seu_nextauth_secret
    GOOGLE_CLIENT_ID=seu_google_client_id
    GOOGLE_CLIENT_SECRET=seu_google_client_secret

    NEXT_PUBLIC_FIREBASE_API_KEY=sua_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=seu_firebase_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=seu_firebase_measurement_id
Certifique-se de não compartilhar este arquivo ".env", pois ele contém informações sensíveis.

## Executando o Projeto Localmente
Para iniciar o servidor de desenvolvimento:

    npm run dev

O aplicativo estará disponível em http://localhost:3000. As alterações no código serão refletidas automaticamente graças ao hot-reloading do Next.js.

## Produção
Para criar uma versão otimizada para produção:
    
    npm run build
    npm start

Isso irá gerar uma versão otimizada do aplicativo e iniciá-lo em modo de produção.

## Processo de Deploy

O Dev Controle está atualmente hospedado na Vercel, uma plataforma otimizada para aplicações Next.js. O processo de deploy é automatizado através de integração contínua:

- Cada push para a branch principal (main/master) do repositório desencadeia um novo deploy.
- A Vercel automaticamente constrói e implanta a aplicação, considerando as configurações do Next.js.
- Variáveis de ambiente são gerenciadas através do painel da Vercel, garantindo segurança e facilidade de configuração.

Para realizar um deploy manual ou configurar seu próprio ambiente de produção, consulte a documentação oficial da Vercel ou da plataforma de hospedagem de sua escolha.

Contribuição
Contribuições são muito bem-vindas e podem ajudar a melhorar o Dev Controle. Se você deseja contribuir:

1. Faça um fork do repositório.

2. Crie uma branch para sua feature: 

  ```
  git checkout -b feature/AmazingFeature
  ```
3. Faça commit das suas mudanças:

```
    git commit -m 'Add some AmazingFeature'
```
4. Push para a branch:

```
  git push origin feature/AmazingFeature
```

## Contato do Criador
### Leonardo Nunes Martinha

- <a href="https://github.com/LeoNzZ7" >GitHub<a/>
- <a href="https://www.linkedin.com/in/leonardo-nunes-martinha/">LinkedIn<a/>
- leonardo.digitalengine@gmail.com

Para questões, sugestões ou colaborações, sinta-se à vontade para entrar em contato através de qualquer um dos canais acima.