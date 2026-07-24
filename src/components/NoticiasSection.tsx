import React, { useState, useEffect } from 'react';
import {
  Newspaper,
  PlusCircle,
  Edit2,
  Trash2,
  Search,
  Tag,
  Calendar,
  User,
  X,
  Lock,
  Unlock,
  Sparkles,
  ExternalLink,
  Image as ImageIcon,
  Check,
  AlertCircle,
  Eye,
} from 'lucide-react';
import { NewsPost } from '../types';
import { INITIAL_NEWS_POSTS, SCHOOL_INFO } from '../data/schoolData';

const LOCAL_STORAGE_KEY = 'emefi_alda_noticias';
const ADMIN_PASSWORD = 'alda2026';

interface NoticiasSectionProps {
  isAdminLoggedIn?: boolean;
  onOpenRestrictedModal?: () => void;
}

export const NoticiasSection: React.FC<NoticiasSectionProps> = ({
  isAdminLoggedIn = false,
  onOpenRestrictedModal,
}) => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Estado de Autenticação do Admin Local
  const [isAdmin, setIsAdmin] = useState<boolean>(isAdminLoggedIn);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState<boolean>(false);
  const [adminPasswordInput, setAdminPasswordInput] = useState<string>('');
  const [adminLoginError, setAdminLoginError] = useState<string>('');

  // Modais de Criação/Edição e Visualização
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [viewingPost, setViewingPost] = useState<NewsPost | null>(null);

  // Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<NewsPost['category']>('Notícia');
  const [formSummary, setFormSummary] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formAuthor, setFormAuthor] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formFeatured, setFormFeatured] = useState(false);

  // Sincronizar prop externa de login se fornecida
  useEffect(() => {
    if (isAdminLoggedIn) {
      setIsAdmin(true);
    }
  }, [isAdminLoggedIn]);

  // Carregar notícias do localStorage ou do default
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed: NewsPost[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Mesclar novos posts iniciais que não estejam no localStorage
          const missingInitial = INITIAL_NEWS_POSTS.filter(
            (initPost) => !parsed.some((p) => p.id === initPost.id)
          );
          setPosts([...missingInitial, ...parsed]);
          return;
        }
      }
    } catch (e) {
      console.error('Erro ao carregar notícias do localStorage:', e);
    }
    setPosts(INITIAL_NEWS_POSTS);
  }, []);

  // Salvar no localStorage sempre que os posts mudarem
  const savePosts = (newPosts: NewsPost[]) => {
    setPosts(newPosts);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newPosts));
    } catch (e) {
      console.error('Erro ao salvar no localStorage:', e);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasswordInput.trim() === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminLoginModal(false);
      setAdminPasswordInput('');
      setAdminLoginError('');
    } else {
      setAdminLoginError('Senha incorreta! Digite a senha administrativa correta.');
    }
  };

  const handleOpenCreateForm = () => {
    const today = new Date().toISOString().split('T')[0];
    setEditingPost(null);
    setFormTitle('');
    setFormCategory('Notícia');
    setFormSummary('');
    setFormContent('');
    setFormImageUrl('');
    setFormAuthor('Equipe Gestora');
    setFormDate(today);
    setFormFeatured(false);
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (post: NewsPost) => {
    setEditingPost(post);
    setFormTitle(post.title);
    setFormCategory(post.category);
    setFormSummary(post.summary);
    setFormContent(post.content);
    setFormImageUrl(post.imageUrl || '');
    setFormAuthor(post.author);
    setFormDate(post.date);
    setFormFeatured(!!post.featured);
    setIsFormOpen(true);
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta publicação?')) {
      const updated = posts.filter((p) => p.id !== id);
      savePosts(updated);
    }
  };

  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) return;

    // Converter link comum do Google Drive para link direto de imagem se necessário
    let formattedImageUrl = formImageUrl.trim();
    if (formattedImageUrl.includes('drive.google.com/file/d/')) {
      const match = formattedImageUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        formattedImageUrl = `https://lh3.googleusercontent.com/d/${match[1]}=s1600`;
      }
    }

    if (editingPost) {
      // Editar
      const updated = posts.map((p) =>
        p.id === editingPost.id
          ? {
              ...p,
              title: formTitle,
              category: formCategory,
              summary: formSummary,
              content: formContent,
              imageUrl: formattedImageUrl,
              author: formAuthor,
              date: formDate,
              featured: formFeatured,
            }
          : p
      );
      savePosts(updated);
    } else {
      // Criar Novo
      const newPost: NewsPost = {
        id: `post-${Date.now()}`,
        title: formTitle,
        category: formCategory,
        summary: formSummary,
        content: formContent,
        imageUrl: formattedImageUrl,
        author: formAuthor || 'Equipe Gestora',
        date: formDate || new Date().toISOString().split('T')[0],
        featured: formFeatured,
      };
      savePosts([newPost, ...posts]);
    }

    setIsFormOpen(false);
  };

  const categories = ['Todas', 'Notícia', 'Comunicado', 'Conquista', 'Projeto', 'Evento'];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="noticias" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Newspaper className="w-4 h-4 text-blue-700" />
              <span>Informa EMEFI - Notícias & Postagens</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              Mural da Escola e Comunicados
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Acompanhe as últimas matérias, fotos, conquistas dos alunos e informes oficiais da EMEFI Prof.ª Alda de Souza Araújo.
            </p>
          </div>

          {/* Botões do Administrador */}
          <div className="flex items-center gap-3">
            {isAdmin ? (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 p-1.5 pl-3 rounded-2xl shadow-sm">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <Unlock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Modo Administrador Ativo</span>
                </span>
                <button
                  onClick={handleOpenCreateForm}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Nova Publicação</span>
                </button>
                <button
                  onClick={() => setIsAdmin(false)}
                  className="px-2.5 py-2 text-slate-500 hover:text-red-600 text-xs font-bold transition-colors"
                  title="Sair do Modo Admin"
                >
                  Sair
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  if (onOpenRestrictedModal) {
                    onOpenRestrictedModal();
                  } else {
                    setShowAdminLoginModal(true);
                  }
                }}
                className="px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-amber-300 font-bold text-xs rounded-xl border border-amber-400/40 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Acesso do Administrador (Postar)</span>
              </button>
            )}
          </div>
        </div>

        {/* Barra de Filtros e Busca */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Categorias */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-950 text-amber-300 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Campo de Busca */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar notícia ou assunto..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>
        </div>

        {/* Grid de Publicações */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <Newspaper className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-blue-950">Nenhuma publicação encontrada</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Tente selecionar outra categoria ou buscar por termos diferentes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group relative"
              >
                {/* Badge Destaque ou Categoria */}
                {post.imageUrl && (
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 bg-blue-950/90 text-amber-300 text-[11px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur-md border border-amber-400/40">
                      {post.category}
                    </span>

                    {post.featured && (
                      <span className="absolute top-3 right-3 bg-amber-400 text-blue-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow">
                        <Sparkles className="w-3 h-3 text-blue-950" />
                        <span>Destaque</span>
                      </span>
                    )}
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {!post.imageUrl && (
                      <div className="flex justify-between items-center">
                        <span className="bg-blue-100 text-blue-900 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                      </div>
                    )}

                    <h3 className="text-base font-bold text-blue-950 line-clamp-2 leading-snug group-hover:text-blue-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.summary || post.content}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5 font-medium text-[11px]">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.author}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* Botões de Ação Admin */}
                      {isAdmin && (
                        <div className="flex items-center gap-1 border-r border-slate-200 pr-2">
                          <button
                            onClick={() => handleOpenEditForm(post)}
                            className="p-1.5 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Editar Publicação"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Excluir Publicação"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      <button
                        onClick={() => setViewingPost(post)}
                        className="text-blue-900 hover:text-blue-700 font-bold text-xs flex items-center gap-1 group-hover:underline cursor-pointer"
                      >
                        <span>Ler mais</span>
                        <Eye className="w-3.5 h-3.5 text-amber-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Leitura de Matéria Completa */}
      {viewingPost && (
        <div
          onClick={() => setViewingPost(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-5 animate-scaleUp"
          >
            <button
              onClick={() => setViewingPost(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                {viewingPost.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-blue-950 leading-tight">
                {viewingPost.title}
              </h3>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-blue-800" />
                  {viewingPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-800" />
                  {viewingPost.date}
                </span>
              </div>
            </div>

            {viewingPost.imageUrl && (
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 max-h-80">
                <img
                  src={viewingPost.imageUrl}
                  alt={viewingPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {viewingPost.summary && (
              <div className="p-4 bg-blue-50 border-l-4 border-blue-800 rounded-r-xl text-slate-700 font-semibold text-sm">
                {viewingPost.summary}
              </div>
            )}

            <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-line space-y-3">
              {viewingPost.content}
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setViewingPost(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Fechar Matéria
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Formulário de Criação/Edição para Administradores */}
      {isFormOpen && (
        <div
          onClick={() => setIsFormOpen(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-5 animate-scaleUp"
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Painel de Postagem Administrativa</span>
              </div>
              <h3 className="text-2xl font-black text-blue-950">
                {editingPost ? 'Editar Publicação' : 'Nova Publicação / Matéria'}
              </h3>
              <p className="text-xs text-slate-500">
                Preencha os campos abaixo para publicar novidades no site oficial da escola.
              </p>
            </div>

            <form onSubmit={handleSavePost} className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase block">
                  Título da Notícia / Matéria: *
                </label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="ex: Projeto de Inovação nas Salas do 6º Ano"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase block">
                    Categoria:
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as NewsPost['category'])}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Notícia">Notícia</option>
                    <option value="Comunicado">Comunicado</option>
                    <option value="Conquista">Conquista</option>
                    <option value="Projeto">Projeto</option>
                    <option value="Evento">Evento</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase block">
                    Autor / Origem:
                  </label>
                  <input
                    type="text"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    placeholder="ex: Equipe Gestora"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase block">
                  Link da Imagem (URL ou Link do Google Drive):
                </label>
                <input
                  type="url"
                  value={formImageUrl}
                  onChange={(e) => setFormImageUrl(e.target.value)}
                  placeholder="https://drive.google.com/file/d/..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
                <p className="text-[11px] text-slate-500">
                  Dica: Você pode colar links diretos da internet ou de fotos do Google Drive.
                </p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase block">
                  Resumo / Subtítulo (Exibido no Card):
                </label>
                <input
                  type="text"
                  value={formSummary}
                  onChange={(e) => setFormSummary(e.target.value)}
                  placeholder="Breve resumo em poucas frases para atração..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase block">
                  Conteúdo Completo da Matéria: *
                </label>
                <textarea
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  rows={5}
                  placeholder="Escreva aqui todo o texto da publicação..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formFeatured}
                    onChange={(e) => setFormFeatured(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded focus:ring-amber-400"
                  />
                  <span className="text-xs font-bold text-slate-700">Destacar no topo do mural</span>
                </label>

                <div className="space-y-1">
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-900"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-amber-300 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Check className="w-4 h-4 text-amber-400" />
                  <span>{editingPost ? 'Salvar Alterações' : 'Publicar Matéria'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Login Rápido de Administrador (Caso acionado diretamente no botão do mural) */}
      {showAdminLoginModal && (
        <div
          onClick={() => setShowAdminLoginModal(false)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative space-y-5 animate-scaleUp"
          >
            <button
              onClick={() => setShowAdminLoginModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto font-bold">
                <Lock className="w-6 h-6 text-blue-800" />
              </div>
              <h3 className="text-2xl font-black text-blue-950">Acesso do Administrador</h3>
              <p className="text-xs text-slate-500">
                Digite a senha de acesso para liberar a criação e edição de matérias e notícias.
              </p>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              {adminLoginError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs font-semibold rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{adminLoginError}</span>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase block">
                  Senha Administrativa:
                </label>
                <input
                  type="password"
                  value={adminPasswordInput}
                  onChange={(e) => setAdminPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                  autoFocus
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Unlock className="w-4 h-4 text-amber-400" />
                <span>Entrar no Modo Admin</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
