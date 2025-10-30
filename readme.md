Visão Geral
O site é uma Single Page Application (SPA) que utiliza roteamento baseado em hash (window.location.hash) para carregar diferentes seções de conteúdo dinamicamente em JavaScript, sem a necessidade de recarregar a página.

As três seções principais são:

Início: Apresentação da ONG e chamada para ação (CTA) para voluntariado.

Como Ajudar: Detalhes sobre os projetos de voluntariado e o botão para doação via Pix (que aciona um modal).

Cadastro: Formulário completo para registro de novos voluntários.

Funcionalidades
Navegação SPA: Roteamento de cliente implementado em JavaScript puro.

Design Responsivo: Interface adaptável para desktops, tablets e celulares.

Alternador de Tema: Funcionalidade de Modo Claro (Light) e Modo Escuro (Dark), com persistência da preferência do usuário via localStorage.

Formulário de Voluntariado: Formulário com validação de campos (obrigatórios e por padrão/pattern) em JavaScript.

Modal de Doação: Modal acessível para exibição das informações de doação.

Requisitos Técnicos Atendidos
Este projeto cumpre rigorosamente os requisitos técnicos obrigatórios da atividade:

1. Controle de Versão (Git/GitHub)
GitFlow: O desenvolvimento seguiu a estratégia de branching GitFlow, utilizando main para produção estável, develop como base de integração e feature/* para desenvolvimento de novas funcionalidades.

Commits Semânticos: O histórico de commits foi mantido de forma organizada e semântica (ex: feat:, fix:, docs:, style:) para clareza.

Releases: O projeto utiliza tags e releases no GitHub para marcar versões estáveis, seguindo o Versionamento Semântico (SemVer).

Issues e PRs: Tarefas e bugs foram rastreados através de Issues, e todo código foi integrado à develop através de Pull Requests documentados.

2. Acessibilidade (WCAG 2.1 Nível AA)
Contraste de Cor: Toda a paleta de cores foi validada para garantir um contraste mínimo de 4.5:1 (Nível AA) para textos normais, tanto no modo claro quanto no escuro.

Navegação por Teclado: O site é 100% navegável utilizando apenas o teclado. Isso inclui a navegação pelos links, menus dropdown e, crucialmente, o focus trap implementado no modal de doação, que impede o foco de sair do modal enquanto ele estiver aberto.

Semântica e Leitores de Tela: Foi utilizada uma estrutura HTML5 semântica (<main>, <nav>, <header>, <article>) e atributos ARIA (aria-expanded, aria-modal, role="dialog", aria-live) para garantir uma experiência de usuário clara para leitores de tela.

Modo Escuro e Alto Contraste: O site oferece um modo escuro funcional e também respeita a preferência de sistema (prefers-contrast: more) para usuários que necessitam de maior contraste.

3. Otimização para Produção
Minificação: Os arquivos de código-fonte (.css e .js) foram minificados para a versão de produção, reduzindo o tamanho dos arquivos e o tempo de carregamento.

Compressão de Imagens: As imagens do projeto foram otimizadas e são servidas no formato .webp (utilizando a tag <picture>) para navegadores compatíveis, com fallback para .jpg.

Tecnologias Utilizadas
HTML5 Semântico

CSS3 (Variáveis CSS, Flexbox, Grid e Media Queries)

JavaScript (ES6+) (Vanilla JS, sem frameworks ou bibliotecas externas)
