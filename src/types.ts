export interface Achievement {
  id: string;
  title: string;
  category: 'OBMEP' | 'IDEB' | 'Tecnologia' | 'PreparaSJC' | 'Esportes';
  year: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  description: string;
  required: boolean;
  notes?: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  category: 'Pedagógico' | 'Cultural' | 'Esportivo' | 'Reunião' | 'Festivo';
  description: string;
  imageUrl: string; // CUSTOMIZÁVEL: insira a URL da imagem aqui
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  graduationYear: string;
  currentActivity: string; // Ex: Aprovado na ETEC / Estudante de Engenharia na UNESP
  quote: string;
  avatarUrl?: string;
}

export interface Opportunity {
  id: string;
  title: string;
  institution: string;
  targetAudience: string;
  deadline: string;
  description: string;
  link?: string;
  status: 'Abertas' | 'Em breve' | 'Encerrado';
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  trend?: string;
}
