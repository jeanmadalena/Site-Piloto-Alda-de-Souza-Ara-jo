import { Achievement, DocumentItem, EventItem, Testimonial, Opportunity, Metric, NewsPost } from '../types';

/* ==========================================================================
   DADOS INSTITUCIONAIS - E.M.E.F.I. Profª Alda de Souza Araújo
   São José dos Campos - SP
   ========================================================================== */

export const SCHOOL_INFO = {
  name: "E.M.E.F.I. Profª Alda de Souza Araújo",
  shortName: "EMEFI Alda de Souza Araújo",
  slogan: "Aprender é Voar Fora da Asa",
  city: "São José dos Campos - SP",
  address: "R. Barcelona, 90 - Jardim Mesquita, São José dos Campos - SP, 12229-490",
  phone: "3931-0417",
  formattedPhone: "(12) 3931-0417",
  whatsapp: "+55 12 98121-9915",
  whatsappRaw: "5512981219915",
  email: "emefaldaaraujo@sjc.sp.gov.br",
  cnpjPix: "47206039/0001-23",
  pixKeyClean: "47206039000123",
  customLogoUrl: "https://lh3.googleusercontent.com/d/1PubpTrkN5kzYPMnkcNzr3RdAv5dXWNwC",
  fachadaImageUrl: "https://lh3.googleusercontent.com/d/1pHk5PepvGq5WPqTTT1kfhL3go21hNA4A=s1600",
  fachadaDriveUrl: "https://drive.google.com/file/d/1pHk5PepvGq5WPqTTT1kfhL3go21hNA4A/view?usp=drive_link",
  instagramUrl: "https://www.instagram.com/emefialda/",
  driveUrl: "https://drive.google.com/drive/u/0/folders/1MvaJj_0dh_T0jhcXBKIf2x-u6J8Y9Q_I",
  calendarioPdfUrl: "https://drive.google.com/file/d/17q2IKtCQdKWs1kLAlgCdt7vnbY8kI8lJ/view?usp=drive_link",
  mapsUrl: "https://maps.google.com/?q=Rua+Barcelona+90+Jardim+Mesquita+Sao+Jose+dos+Campos+SP",
  openingHours: "Horário para Alunos: 07:00 às 19:45 | Secretaria: 08:00 às 11:00 e 13:00 às 15:00",
  secretariaHours: "08:00 às 11:00 e 13:00 às 15:00",
  alunosHours: "07:00 às 19:45",
};

/* ==========================================================================
   BIOGRAFIA DA PATRONA (HISTÓRIA OFICIAL)
   ========================================================================== */
export const BIOGRAFIA_PATRONA = [
  "A nova escola municipal leva o nome da educadora Alda de Souza Araújo, nascida em 1955 na cidade de São Paulo, chegou ao Vale do Paraíba ainda criança.",
  "Alda brincava de dar aulas para os irmãos mais novos, manifestando desde cedo o desejo de ser professora. Concluiu o Magistério em 1974, logo depois fez Pedagogia e ingressou na Educação Estadual, lecionando em cidades da região.",
  "Conhecida por ser calma, paciente e transmitir segurança aos alunos, ela mantinha contato e amizade até depois de concluírem o período escolar. A educadora se aposentou na rede municipal em 2015. Faleceu em abril de 2020 deixando grande legado como filha, irmã, amiga, religiosa e profissional."
];

/* ==========================================================================
   MISSÃO, VISÃO E VALORES
   ========================================================================== */
export const MISSAO_VISAO_VALORES = {
  missao: "Potencializar o desenvolvimento integral das pessoas em seus aspectos físico, psicológico, intelectual, social, afetivo emocional e cultural, aprimorando conhecimentos para o pleno exercício da cidadania.",
  visao: "Ser um ambiente de cooperação que prepare os educandos para a vida, em conjunto com as famílias, possibilitando acesso a oportunidades para alunos, professores e funcionários, contribuindo para o desenvolvimento pessoal e da comunidade escolar.",
  valores: [
    "Trabalho em equipe",
    "Diálogo constante",
    "Valorização das singularidades",
    "Empatia nas relações",
    "Escuta ativa",
    "Intervenção consciente e apropriada",
    "Apoio mútuo",
    "Unidade de propósito e direção comum"
  ]
};

/* ==========================================================================
   CONQUISTAS DA ESCOLA (Destaques da Home)
   ========================================================================== */
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "sprix-champion",
    title: "Campeã no SPRIX Campeonato 2025 – Brasil",
    category: "Tecnologia",
    year: "2025",
    description: "A EMEFI Profª Alda de Souza Araújo, localizada em São José dos Campos (SP), sagrou-se campeã no SPRIX Campeonato 2025 – Brasil. A competição nacional de programação e inovação tecnológica reuniu estudantes do Ensino Fundamental para o desenvolvimento de jogos digitais e projetos tecnológicos na plataforma QUREO.",
    badge: "Campeonato Nacional de Tecnologia",
    iconName: "Cpu",
  },
  {
    id: "obmep-ana-beatriz",
    title: "Medalhista de Ouro na OBMEP e PIC Federal",
    category: "OBMEP",
    year: "2026",
    description: "Aluna Ana Beatriz Pereira de Lima medalhista de ouro da OBMEP e representante do Vale do Paraíba no Programa Federal de Iniciação Científica - PIC e membro integrante do seleto grupo de 170 melhores estudantes da OBMEP no âmbito Nacional.",
    badge: "Ouro Nacional OBMEP",
    iconName: "Award",
  },
  {
    id: "embraer-technical-approvals",
    title: "Excelência em Aprovações no Colégio EMBRAER e Técnicos",
    category: "PreparaSJC",
    year: "2026",
    description: "A escola tem média de aprovação no Colégio EMBRAER de 3 alunos por ano. São mais de 50 alunos aprovados nos colégios técnicos, como UNIVAP, ETEC e Instituto Federal (IFSP). Mais de 80% dos alunos aprovados nos processos seletivos participam do PREPARA Cursinho.",
    badge: "Vestibulinhos Técnicos",
    iconName: "GraduationCap",
  },
  {
    id: "sports-achievements",
    title: "Títulos e Medalhas nos Esportes Escolares",
    category: "Esportes",
    year: "2026",
    description: "Bicampeã de futsal feminino na rede municipal; Vice-campeã de Handebol masculino; Campeã de queimada mista; e inúmeras medalhas no atletismo.",
    badge: "Campeãs no Esporte",
    iconName: "Trophy",
  },
];

/* ==========================================================================
   MÉTRICAS E DADOS INSTITUCIONAIS
   ========================================================================== */
export const INSTITUTIONAL_METRICS: Metric[] = [
  {
    label: "Escola 5.0 Inovadora",
    value: "1ª da Rede",
    description: "Primeira escola 5.0 da rede municipal de São José dos Campos com foco em tecnologia e inovação.",
    trend: "Inovação Tecnológica",
  },
  {
    label: "Aprovação Colégio EMBRAER",
    value: "3 / ano",
    description: "Média constante de alunos aprovados anualmente no Colégio EMBRAER.",
    trend: "Destaque Regional",
  },
  {
    label: "Aprovados Colégios Técnicos",
    value: "+50",
    description: "Alunos aprovados em colégios técnicos como UNIVAP, ETEC e Instituto Federal (IFSP).",
    trend: "UNIVAP / ETEC / IFSP",
  },
  {
    label: "PREPARA Cursinho",
    value: ">80%",
    description: "Mais de 80% dos alunos aprovados nos processos seletivos participam do PREPARA Cursinho.",
    trend: "Preparatório Municipal",
  },
];

/* ==========================================================================
   CRONOGRAMA / CALENDÁRIO ESCOLAR OFICIAL 2026
   ========================================================================== */
export const CRONOGRAMA_EVENTOS: EventItem[] = [
  {
    id: "crono-1",
    title: "SÁBADO LETIVO: Reunião de pais",
    date: "01/08/2026",
    category: "Reunião",
    description: "Sábado letivo dedicado à reunião de pais e responsáveis para acompanhamento do desempenho escolar e entregas pedagógicas.",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    location: "EMEFI Profª Alda de Souza Araújo",
  },
  {
    id: "crono-2",
    title: "Conselho de Escola e AAE",
    date: "02/09/2026",
    category: "Reunião",
    description: "Reunião ordinária do Conselho de Escola e da Associação de Amigos da Escola (AAE) para alinhamento de projetos e gestão transparente.",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    location: "Auditório da Escola",
  },
  {
    id: "crono-3",
    title: "Mostra Cultural",
    date: "26/09/2026",
    category: "Cultural",
    description: "Exposição de artes, trabalhos científicos, projetos de tecnologia e apresentação de alunos e oficinas de Educação Integral.",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    location: "Pátio e Quadra Poliesportiva",
  },
  {
    id: "crono-4",
    title: "SÁBADO LETIVO: Reunião de pais",
    date: "17/10/2026",
    category: "Reunião",
    description: "Encontro de integração entre comunidade e equipe escolar com avaliação do bimestre e alinhamento de metas.",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    location: "Salas de Aula da EMEFI",
  },
];

/* ==========================================================================
   LISTA DE DOCUMENTOS PARA MATRÍCULA
   ========================================================================== */
export const MATRICULA_DOCUMENTS: DocumentItem[] = [
  {
    id: "doc-certidao",
    name: "Certidão de Nascimento",
    description: "Cópia simples acompanhada do documento original do estudante para conferência.",
    required: true,
    notes: "Obrigatório para todos os anos.",
  },
  {
    id: "doc-rg-cpf",
    name: "RG e CPF do Estudante",
    description: "Documento oficial de identidade com foto e número do Cadastro de Pessoa Física.",
    required: true,
  },
  {
    id: "doc-rg-resp",
    name: "RG e CPF dos Pais ou Responsável Legal",
    description: "Documento com foto dos responsáveis cadastrados para assinatura dos termos escolares.",
    required: true,
  },
  {
    id: "doc-comprovante-residencia",
    name: "Comprovante de Residência Atualizado",
    description: "Conta de água, luz ou gás com prazo máximo de emissão de 90 dias em nome do responsável.",
    required: true,
    notes: "Preferencialmente no bairro Jardim Mesquita ou adjacências.",
  },
  {
    id: "doc-historico",
    name: "Histórico Escolar ou Declaração de Transferência",
    description: "Fornecido pela escola de origem contendo a situação de transferência do aluno.",
    required: true,
    notes: "Declaração de escolaridade válida por 30 dias até emissão do histórico definitivo.",
  },
  {
    id: "doc-vacinacao",
    name: "Carteira de Vacinação Atualizada",
    description: "Atestado ou folha de vacinas atualizadas conforme calendário vacinal do Estado de SP.",
    required: true,
  },
  {
    id: "doc-foto",
    name: "02 Fotos 3x4 Recentes",
    description: "Para confecção do prontuário escolar físico e carteirinha do estudante.",
    required: true,
  },
  {
    id: "doc-nis-bolsa",
    name: "Cartão do SUS e Comprovante do NIS (se houver)",
    description: "Número de Identificação Social para acompanhamento de programas sociais e saúde escolar.",
    required: false,
    notes: "Opcional porém recomendado.",
  },
];

/* ==========================================================================
   DEPOIMENTOS DE EX-ALUNOS
   ========================================================================== */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dep-1",
    name: "Guilherme Santos",
    graduationYear: "Turma de 2023",
    currentActivity: "Aprovado na ETEC e Estudante de Engenharia",
    quote: "A EMEFI Alda de Souza Araújo foi a base da minha trajetória. Os professores e as aulas do PREPARA Cursinho me deram a confiança e o conhecimento necessários para conquistar a vaga no colégio técnico.",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "dep-2",
    name: "Beatriz Oliveira",
    graduationYear: "Turma de 2024",
    currentActivity: "Aluna do Colégio EMBRAER Juarez Wanderley",
    quote: "O ensino em tempo integral com tecnologia e língua inglesa no Prepara Idiomas transformou meu jeito de aprender. 'Aprender é voar fora da asa' é o lema que guia nossa busca constante por superação.",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "dep-3",
    name: "Lucas Mendes",
    graduationYear: "Turma de 2025",
    currentActivity: "Classificado no IFSP - Câmpus São José dos Campos",
    quote: "As olimpíadas como a OBMEP e o incentivo permanente da direção e professores me fizeram enxergar longe. A aprovação no Instituto Federal foi o fruto dessa dedicação.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
];

/* ==========================================================================
   OPORTUNIDADES E PROCESSOS SELETIVOS
   ========================================================================== */
export const OPPORTUNITIES: Opportunity[] = [
  {
    id: "opp-preparasjc",
    title: "PREPARA Cursinho 2026 - Preparatório Municipal",
    institution: "Prefeitura de São José dos Campos",
    targetAudience: "Alunos matriculados no 9º ano",
    deadline: "Inscrições no início do semestre",
    description: "Aulas focadas na preparação para vestibulinhos de ETECs, IFSP, UNIVAP e Colégio EMBRAER. Mais de 80% dos alunos aprovados participam do PREPARA Cursinho.",
    status: "Abertas",
  },
  {
    id: "opp-embraer",
    title: "Processo Seletivo Colégio EMBRAER",
    institution: "Instituto EMBRAER",
    targetAudience: "Estudantes do 9º Ano da Rede Pública",
    deadline: "Prova Agosto de 2026",
    description: "A escola possui média contínua de aprovação de 3 alunos por ano no cobiçado Colégio EMBRAER.",
    status: "Abertas",
  },
  {
    id: "opp-ifsp",
    title: "Instituto Federal (IFSP - Campus SJC)",
    institution: "Instituto Federal (IFSP - Campus SJC)",
    targetAudience: "Estudantes do 9º Ano (Cursos Técnicos Integrados)",
    deadline: "Setembro a Outubro de 2026",
    description: "O processo seletivo para os cursos técnicos integrados ao Ensino Médio historicamente abre inscrições entre setembro e outubro, com seleção baseada em prova ou análise de histórico escolar (a definir no edital).",
    status: "Em breve",
  },
  {
    id: "opp-univap",
    title: "Colégio UNIVAP (Concurso de Bolsas e Vestibulinho)",
    institution: "Colégio UNIVAP",
    targetAudience: "Novos alunos do Ensino Médio",
    deadline: "Setembro a Outubro de 2026",
    description: "O concurso de bolsas e o vestibulinho para novos alunos do Ensino Médio costumam ocorrer entre setembro e outubro de 2026.",
    status: "Em breve",
  },
];

/* ==========================================================================
   PUBLICAÇÕES E NOTÍCIAS OFICIAIS (PAINEL ADMINISTRATIVO)
   ========================================================================== */
export const INITIAL_NEWS_POSTS: NewsPost[] = [
  {
    id: "comunicado-reuniao-pais-01082026",
    title: "Convocação: Reunião de Pais e Responsáveis - 01/08/2026",
    category: "Comunicado",
    summary: "Reunião de Pais em 01/08/2026. 8º e 9º Anos (8:30 às 9:50) e 6º e 7º Anos (10:10 às 11:30). Haverá venda de combos de coxinha e açaí no local!",
    content: "A EMEFI Prof.ª Alda de Souza Araújo convida cordialmente todos os pais e responsáveis para a nossa Reunião de Pais, que acontecerá no dia 01 de Agosto de 2026 (01/08/2026).\n\nLema: \"Aprender é voar fora da asa\"\n\n🕒 HORÁRIOS DAS REUNIÕES POR TURMA:\n• 8º e 9º Anos: das 08:30 às 09:50\n• 6º e 7º Anos: das 10:10 às 11:30\n\n🥟 ALIMENTAÇÃO NO LOCAL:\nHaverá venda de deliciosos combos de coxinha e açaí disponíveis no local durante o evento para recepção e integração de toda a comunidade escolar.\n\nA presença de todos os pais e responsáveis é de fundamental importância!",
    imageUrl: "/reuniao-pais-01082026.jpg",
    author: "Equipe Gestora",
    date: "2026-07-23",
    featured: true,
  },
  {
    id: "noticia-1",
    title: "Primeira Escola 5.0 da Rede Municipal de São José dos Campos",
    category: "Notícia",
    summary: "A EMEFI Prof.ª Alda de Souza Araújo torna-se referência com tecnologia de ponta, Sala Google e novos recursos pedagógicos digitais.",
    content: "Com imenso orgulho, nossa unidade escolar consolida o pioneirismo como a Primeira Escola 5.0 de São José dos Campos. A estrutura conta com conectividade em todas as salas, chromebooks para os estudantes, painéis interativos e formação continuada para nossos professores. Essa conquista fortalece a aprendizagem personalizada, estimulando a inovação e o pensamento crítico desde os primeiros anos do Ensino Fundamental.",
    imageUrl: "https://lh3.googleusercontent.com/d/1pqrJ9LTg3hBxcqg-F7CKBN4lIaOtsI-c=s1600",
    author: "Equipe Gestora",
    date: "2026-07-20",
    featured: true,
  },
  {
    id: "noticia-2",
    title: "Aluna Ana Beatriz é Selecionada entre os 160 Melhores do País",
    category: "Conquista",
    summary: "Estudante da EMEFI Alda de Souza Araújo garante vaga em projeto nacional de iniciação científica com grande destaque.",
    content: "Parabenizamos nossa querida aluna Ana Beatriz que, com muita dedicação, curiosidade e talento acadêmico, conquistou uma das 160 vagas nacionais para participar de um prestigiado programa de iniciação científica juvenil. Na foto comemorativa, vemos Ana Beatriz acompanhada de sua mãe, Dayse Jéssica. Toda a comunidade escolar celebra essa admirável vitória!",
    imageUrl: "https://lh3.googleusercontent.com/d/1V_i8FyiEiqmeLRmOSXYd6QLQ3M4ipcCn=s1600",
    author: "Coordenação Pedagógica",
    date: "2026-07-15",
    featured: true,
  },
  {
    id: "noticia-3",
    title: "Sala Google",
    category: "Notícia",
    summary: "Ambiente multifuncional permite aulas interativas, pesquisas guiadas e trabalhos colaborativos entre as turmas.",
    content: "A Sala Google é um dos espaços mais dinâmicos do nosso prédio. Equipada para receber turmas do Ensino Fundamental I e II, o espaço promove a metodologia ativa, onde os alunos aprendem criando apresentações, documentos compartilhados e robótica educacional em ambiente totalmente seguro e supervisionado.",
    imageUrl: "https://lh3.googleusercontent.com/d/1SGdwTQfIf5fb6jMR-G6QLT90nGVjUJYM=s1600",
    author: "Orientação Educacional",
    date: "2026-07-10",
    featured: false,
  },
];

