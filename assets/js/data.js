/* All site copy lives here, in two languages.
   Static text uses data-i18n="key" in the HTML; lists are read by the page scripts. */

window.I18N = {
  pt: {
    "meta.title": "Felipe Saraiva · Desenvolvedor full-stack com foco em backend",
    "meta.desc": "Desenvolvedor full-stack com foco em backend e mais de 5 anos de experiência. Projetos públicos com testes, ADRs e deploy.",
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.about": "Sobre",
    "nav.stack": "Stack",
    "nav.contact": "Contato",
    "hero.eyebrow": "FULL-STACK · FOCO EM BACKEND · DADOS",
    "hero.h1": "Backend que se explica sozinho.",
    "hero.lead": "Desenvolvedor full-stack com foco em backend e mais de 5 anos de experiência entre pesquisa aplicada, estágio e produção, sendo 3+ no grupo NewFields. Cada projeto aqui é um repositório público com testes, ADRs e deploy.",
    "hero.cta": "Ver projetos",
    "hero.avail": "Aberto a vagas remotas internacionais e a boas oportunidades no Brasil · fuso BRT",
    "hero.photo": "[FOTO PROFISSIONAL]",
    "hero.caption": "Felipe Saraiva · [Cidade], Brasil",
    "ex.title": "Teste a API",
    "ex.hint": "Exemplos baseados no orbitdesk-api. Clique num endpoint.",
    "feat.title": "Projetos em destaque",
    "feat.all": "Todos os projetos →",
    "status.done": "Concluído",
    "status.wip": "Em andamento",
    "status.acad": "Acadêmico",
    "p1": "API REST de tarefas com JWT manual (access + refresh), paginação, testes de integração e CI/CD.",
    "p2": "Workspace de tarefas multi-tenant com RBAC, tarefas confidenciais e trilha de auditoria.",
    "p3": "Ferramenta web de equações de chuva para o Rio Grande do Sul, do grupo GPHidro (UFPel). Mais de 11 mil equações.",
    "prog.title": "Em andamento: orbitdesk-api",
    "how.title": "Como eu trabalho com IA",
    "how.lead": "A IA acelera, mas quem decide e responde pelo resultado sou eu. Clique em uma etapa para ver a divisão.",
    "how.decide": "EU DECIDO",
    "how.ai": "A IA AJUDA",
    "how.validate": "COMO EU VALIDO",
    "how.example": "Exemplo real:",
    "footer.note": "felipe.saraiva · 2026",
    lists: {
      progDone: "feito",
      progNext: "próximo",
      progSteps: [
        "Modelagem multi-tenant e migração",
        "Registro com organização",
        "RBAC por permissões",
        "POST /tasks com checagem de papel",
        "Listagem, edição e exclusão com regras",
        "Auditoria, RLS, cache e fila"
      ],
      progDoneCount: 4,
      examples: [
        { label: "POST /auth/register", status: "201 Created",
          body: '{\n  "user_id": "3f1c…",\n  "email": "ana@acme.com",\n  "organization": {\n    "id": "9b7a…",\n    "name": "Acme"\n  }\n}\n\n// quem registra vira owner da nova organização' },
        { label: "POST /tasks (member)", status: "201 Created",
          body: 'Headers:\n  Authorization: Bearer <access>\n  X-Organization-Id: 9b7a…\n\n{\n  "title": "Revisar contrato",\n  "type": "standard"\n}' },
        { label: "POST /tasks (confidential)", status: "403 Forbidden",
          body: '{\n  "detail": "Missing permission: task.create_confidential"\n}\n\n// member não cria tarefa confidencial; admin e owner sim' }
      ],
      flow: [
        { l: "Problema", d: "Defino o objetivo, o escopo e o que fica de fora.", a: "Ajuda a mapear o código e a levantar dúvidas.", v: "Questiono as conclusões antes de agir.", e: "o README do tasklane-api declara o escopo do projeto." },
        { l: "Trade-offs", d: "Defino os critérios e comparo pelo menos duas alternativas.", a: "Levanta opções e discute prós e contras comigo.", v: "Peço a prática do mercado e o custo de retrabalho antes de escolher.", e: "ADR 0003 (HS256 vs RS256) e ADR 0009 (offset vs cursor)." },
        { l: "Decisão (ADR)", d: "Escrevo o ADR antes do código, com riscos aceitos e próximos passos.", a: "Serve de interlocutora. A decisão é minha.", v: "Aprovo cada decisão e registro o que ficou de fora.", e: "ADRs 0001 a 0004 commitados antes das rotas." },
        { l: "Implementação", d: "Quebro em passos pequenos, uma camada por vez.", a: "Acelera a escrita do código.", v: "Só entra o que eu consigo ler, entender e explicar.", e: "commits em camadas: models, auth, schemas, rotas." },
        { l: "Testes", d: "Defino o que precisa ser provado: isolamento, auth, validação.", a: "Ajuda a escrever e a rodar a suíte.", v: "Fecho as lacunas que os meus próprios ADRs apontam.", e: "26 testes; test_user_cannot_* prova o isolamento entre usuários." },
        { l: "Revisão", d: "Decido o que é aceitável em segurança e desempenho.", a: "Revisa em modo leitura e aponta riscos.", v: "Cada achado fica pendente até eu corrigir ou aceitar por escrito.", e: "404 em vez de 403 (ADR 0006); teto de paginação e índice composto." },
        { l: "CI/CD", d: "Defino a pipeline e o que bloqueia um deploy. Deploy é comigo.", a: "Ajuda a diagnosticar falhas.", v: "O CI roda a suíte num Postgres real a cada push.", e: "uma dependência não declarada foi pega no primeiro run do CI." }
      ]
    }
  },

  en: {
    "meta.title": "Felipe Saraiva · Full-stack developer, backend focus",
    "meta.desc": "Full-stack developer with a backend focus and 5+ years of experience. Public projects with tests, ADRs and deploys.",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.contact": "Contact",
    "hero.eyebrow": "FULL-STACK · BACKEND FOCUS · DATA",
    "hero.h1": "Backend that explains itself.",
    "hero.lead": "Full-stack developer with a backend focus and 5+ years of experience across applied research, an internship and production work, 3+ of them in the NewFields group. Every project here is a public repository with tests, ADRs and a deploy.",
    "hero.cta": "View projects",
    "hero.avail": "Open to international remote roles and strong opportunities in Brazil · BRT timezone",
    "hero.photo": "[PROFESSIONAL PHOTO]",
    "hero.caption": "Felipe Saraiva · [City], Brazil",
    "ex.title": "Try the API",
    "ex.hint": "Examples based on orbitdesk-api. Click an endpoint.",
    "feat.title": "Featured projects",
    "feat.all": "All projects →",
    "status.done": "Completed",
    "status.wip": "In progress",
    "status.acad": "Academic",
    "p1": "Task REST API with a hand-written JWT flow (access + refresh), pagination, integration tests and CI/CD.",
    "p2": "Multi-tenant task workspace with RBAC, confidential tasks and an audit trail.",
    "p3": "Web tool for rainfall equations in Rio Grande do Sul, from the GPHidro group (UFPel). Over 11,000 equations.",
    "prog.title": "In progress: orbitdesk-api",
    "how.title": "How I work with AI",
    "how.lead": "AI speeds things up, but I decide and I answer for the result. Click a step to see the split.",
    "how.decide": "I DECIDE",
    "how.ai": "AI HELPS",
    "how.validate": "HOW I VALIDATE",
    "how.example": "Real example:",
    "footer.note": "felipe.saraiva · 2026",
    lists: {
      progDone: "done",
      progNext: "next",
      progSteps: [
        "Multi-tenant data model and migration",
        "Registration with organization",
        "Permission-based RBAC",
        "POST /tasks with role check",
        "List, edit and delete with rules",
        "Audit, RLS, cache and queue"
      ],
      progDoneCount: 4,
      examples: [
        { label: "POST /auth/register", status: "201 Created",
          body: '{\n  "user_id": "3f1c…",\n  "email": "ana@acme.com",\n  "organization": {\n    "id": "9b7a…",\n    "name": "Acme"\n  }\n}\n\n// the registering user becomes owner of the new organization' },
        { label: "POST /tasks (member)", status: "201 Created",
          body: 'Headers:\n  Authorization: Bearer <access>\n  X-Organization-Id: 9b7a…\n\n{\n  "title": "Review contract",\n  "type": "standard"\n}' },
        { label: "POST /tasks (confidential)", status: "403 Forbidden",
          body: '{\n  "detail": "Missing permission: task.create_confidential"\n}\n\n// members cannot create confidential tasks; admin and owner can' }
      ],
      flow: [
        { l: "Problem", d: "I set the goal, the scope and what stays out.", a: "Helps map the code and raise open questions.", v: "I question the conclusions before acting.", e: "the tasklane-api README states the project's scope." },
        { l: "Trade-offs", d: "I set the criteria and compare at least two alternatives.", a: "Lays out options and debates pros and cons with me.", v: "I ask for industry practice and rework cost before choosing.", e: "ADR 0003 (HS256 vs RS256) and ADR 0009 (offset vs cursor)." },
        { l: "Decision (ADR)", d: "I write the ADR before the code, with accepted risks and next steps.", a: "Acts as a sounding board. The decision is mine.", v: "I approve each decision and record what was left out.", e: "ADRs 0001 to 0004 committed before the routes." },
        { l: "Implementation", d: "I break the work into small steps, one layer at a time.", a: "Speeds up writing the code.", v: "Only what I can read, understand and explain gets in.", e: "layered commits: models, auth, schemas, routes." },
        { l: "Tests", d: "I define what must be proven: isolation, auth, validation.", a: "Helps write and run the suite.", v: "I close the gaps my own ADRs point out.", e: "26 tests; test_user_cannot_* proves isolation between users." },
        { l: "Review", d: "I decide what is acceptable for security and performance.", a: "Reviews in read-only mode and flags risks.", v: "Each finding stays open until I fix it or accept it in writing.", e: "404 instead of 403 (ADR 0006); pagination cap and composite index." },
        { l: "CI/CD", d: "I define the pipeline and what blocks a deploy. Deploys are mine.", a: "Helps diagnose failures.", v: "CI runs the suite on a real Postgres on every push.", e: "an undeclared dependency was caught on the first CI run." }
      ]
    }
  }
};
