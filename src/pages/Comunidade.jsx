import { useState, useEffect } from 'react';

import Lupa from "../assets/images/pesquisa-de-lupa 1.png"
import Imagem from "../assets/images/image.png"
import Like from "../assets/images/like.png"
import Comentar from "../assets/images/comentar.png"
import Favoritar from "../assets/images/favoritar.png"
import Republicar from "../assets/images/republicar.png"
import Trespontinhos from "../assets/images/trespontinhos.png"


export default function BlogComunidade() {
    const posts = [
        {
            nome: 'VerdeVivo',
            usuario: '@verdevivo',
            tempo: '2h',
            texto: 'Plantamos 20 mudas nativas hoje na nossa comunidade. Pequenas ações, grandes transformações.',
            imagem: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop',
            curtidas: 128,
            comentarios: 12,
            compartilhamentos: 45,
            hashtag: '#Reflorestar #Natureza #Sustentabilidade',
            avatar: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=300&auto=format&fit=crop',
        },
        {
            nome: 'Recicla Aí',
            usuario: '@reciclaai',
            tempo: '4h',
            texto: 'Separar o lixo corretamente ainda é um desafio. Vamos fazer diferente?',
            imagem: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1200&auto=format&fit=crop',
            curtidas: 96,
            comentarios: 8,
            compartilhamentos: 32,
            hashtag: '#Reciclagem #ConsumoConsciente',
            avatar: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=300&auto=format&fit=crop',
        },
        {
            nome: 'Planeta em Ação',
            usuario: '@planetaemacao',
            tempo: '6h',
            texto: 'Seca extrema em várias regiões do país. Precisamos falar sobre mudanças climáticas agora!',
            imagem: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1200&auto=format&fit=crop',
            curtidas: 153,
            comentarios: 21,
            compartilhamentos: 67,
            hashtag: '#Clima #Urgente #Planeta',
            avatar: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=300&auto=format&fit=crop',
        },
    ];

    const comunidades = ['Meio Ambiente', 'Reciclagem', 'Mudas & Plantas', 'Energia Limpa'];
    const trends = ['#Sustentabilidade', '#MeioAmbiente', '#Reciclagem', '#MudançasClimáticas', '#ConsumoConsciente'];

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [dbPosts, setDbPosts] = useState([]);
    const [form, setForm] = useState({ titulo: '', conteudo: '', imagem: '' });
    const [editingId, setEditingId] = useState(null);
    const [showImageInput, setShowImageInput] = useState(false);
    const [activeTab, setActiveTab] = useState('Para você');

    // Modal de feedback (igual ao Denunciar)
    const [modal, setModal] = useState({ show: false, title: '', message: '', type: 'success' });
    // Modal de confirmação de exclusão
    const [confirmModal, setConfirmModal] = useState({ show: false, id: null });

    const openModal = (title, message, type = 'success') => {
        setModal({ show: true, title, message, type });
    };
    const closeModal = () => setModal(m => ({ ...m, show: false }));

    const askDelete = (id) => setConfirmModal({ show: true, id });
    const cancelDelete = () => setConfirmModal({ show: false, id: null });

    useEffect(() => {
        const userStr = localStorage.getItem('usuario');
        if (userStr) {
            try {
                const parsed = JSON.parse(userStr);
                setIsLoggedIn(true);
                setCurrentUser(parsed);
            } catch (e) {
                console.error("Erro ao analisar usuário:", e);
            }
        }
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const res = await fetch('http://localhost:3000/publicacao');
            if (res.ok) {
                const data = await res.json();
                setDbPosts(data);
            }
        } catch (error) {
            console.error('Erro ao buscar publicações:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.titulo || !form.conteudo) {
            openModal('Campos obrigatórios', 'Por favor, preencha o título e o conteúdo da publicação.', 'error');
            return;
        }
        const url = editingId ? `http://localhost:3000/publicacao/${editingId}` : 'http://localhost:3000/publicacao';
        const method = editingId ? 'PATCH' : 'POST';
        try {
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo: form.titulo, conteudo: form.conteudo, imagem: form.imagem || '', userId: currentUser?.id ?? null })
            });
            if (res.ok) {
                setForm({ titulo: '', conteudo: '', imagem: '' });
                setEditingId(null);
                setShowImageInput(false);
                fetchPosts();
                openModal(
                    editingId ? 'Atualizado!' : 'Publicado!',
                    editingId ? 'Sua publicação foi atualizada com sucesso.' : 'Sua publicação foi compartilhada na comunidade!'
                );
            } else {
                openModal('Erro!', 'Não foi possível salvar a publicação.', 'error');
            }
        } catch (error) {
            console.error('Erro ao salvar publicação:', error);
            openModal('Erro!', 'Não foi possível conectar ao servidor.', 'error');
        }
    };

    const handleLike = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/publicacao/${id}/like`, { method: 'POST' });
            if (res.ok) fetchPosts();
        } catch (error) {
            console.error('Erro ao curtir:', error);
        }
    };

    const handleEdit = (pub) => {
        setEditingId(pub.id);
        setForm({ titulo: pub.titulo, conteudo: pub.conteudo, imagem: pub.imagem || '' });
        if (pub.imagem) setShowImageInput(true);
        window.scrollTo({ top: 150, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        cancelDelete();
        try {
            const res = await fetch(`http://localhost:3000/publicacao/${id}`, { method: 'DELETE' });
            if (res.ok) {
                fetchPosts();
                openModal('Excluído!', 'A publicação foi removida da comunidade.', 'delete');
            }
        } catch (error) {
            console.error('Erro ao deletar:', error);
        }
    };

    const displayedDbPosts = activeTab === 'Minhas postagens'
        ? dbPosts.filter(p => p.userId === (currentUser?.id ?? null))
        : dbPosts;

    const tabs = isLoggedIn
        ? ['Para você', 'Mais recentes', 'Minhas postagens']
        : ['Para você', 'Mais recentes'];

    return (
        <>
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 xl:grid-cols-[260px_1fr_280px] gap-7">

                {/* LEFT SIDEBAR */}
                <aside className="space-y-4">
                    {/* Profile Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="w-20 h-20 rounded-full bg-green-800 flex items-center justify-center text-3xl mx-auto mb-4 text-white font-bold select-none">
                            {isLoggedIn && currentUser ? currentUser.nome.charAt(0).toUpperCase() : '🌿'}
                        </div>
                        <div className="text-center">
                            <h2 className="font-bold text-lg text-gray-900">
                                {isLoggedIn && currentUser ? currentUser.nome : 'EcoDenúncia'}
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">
                                {isLoggedIn && currentUser ? `@${currentUser.nome.toLowerCase().replace(/\s+/g, '')}` : '@ecodenuncia'}
                            </p>
                        </div>

                        <div className="grid grid-cols-3 text-center mt-5 pt-5 border-t border-gray-100 gap-1">
                            <div>
                                <p className="font-bold text-sm text-gray-900">
                                    {isLoggedIn && currentUser ? dbPosts.filter(p => p.userId === currentUser.id).length : dbPosts.length}
                                </p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">Posts</p>
                            </div>
                            <div>
                                <p className="font-bold text-base text-gray-900">{isLoggedIn && currentUser ? '1' : '532'}</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">Seguidores</p>
                            </div>
                            <div>
                                <p className="font-bold text-base text-gray-900">{isLoggedIn && currentUser ? '0' : '243'}</p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">Seguindo</p>
                            </div>
                        </div>

                        {isLoggedIn && (
                            <button
                                onClick={() => document.getElementById('post-title-input')?.focus()}
                                className="w-full mt-5 bg-green-700 hover:bg-green-800 transition-colors text-white py-2.5 rounded-lg font-semibold text-sm cursor-pointer"
                            >
                                Nova publicação
                            </button>
                        )}
                    </div>

                    {/* Communities */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Comunidades</h3>
                        <div className="space-y-1">
                            {comunidades.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-3 py-2.5 cursor-pointer transition-colors">
                                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-base">🌿</div>
                                    <div>
                                        <p className="font-semibold text-sm">{item}</p>
                                        <p className="text-xs text-gray-400">8k membros</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* FEED */}
                <section>
                    {/* Create Post */}
                    {isLoggedIn ? (
                        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                            <h3 className="font-semibold text-base text-gray-600 mb-4">
                                {editingId ? '✏️ Editar publicação' : '🌱 Compartilhar na comunidade'}
                            </h3>
                            <form onSubmit={handleSubmit} className="flex gap-3">
                                <div className="w-11 h-11 rounded-full bg-green-700 text-white flex items-center justify-center font-bold uppercase text-base select-none flex-shrink-0">
                                    {currentUser?.nome ? currentUser.nome.charAt(0) : 'E'}
                                </div>
                                <div className="flex-1 space-y-3">
                                    <input
                                        id="post-title-input"
                                        type="text"
                                        placeholder="Título da publicação..."
                                        value={form.titulo}
                                        onChange={e => setForm({ ...form, titulo: e.target.value })}
                                        className="w-full bg-gray-50 rounded-lg px-4 py-2.5 outline-none border border-gray-200 focus:border-green-500 text-sm font-medium transition-colors"
                                        required
                                    />
                                    <textarea
                                        rows="3"
                                        placeholder="O que você está pensando, EcoColega?"
                                        value={form.conteudo}
                                        onChange={e => setForm({ ...form, conteudo: e.target.value })}
                                        className="w-full bg-gray-50 rounded-lg px-4 py-2.5 outline-none resize-none border border-gray-200 focus:border-green-500 text-sm transition-colors"
                                        required
                                    />

                                    {showImageInput && (
                                        <input
                                            type="text"
                                            placeholder="URL da imagem (opcional)..."
                                            value={form.imagem}
                                            onChange={e => setForm({ ...form, imagem: e.target.value })}
                                            className="w-full bg-gray-50 rounded-lg px-4 py-2.5 outline-none border border-gray-200 focus:border-green-500 text-sm transition-colors"
                                        />
                                    )}

                                    <div className="flex items-center justify-between gap-3 pt-1">
                                        <button
                                            type="button"
                                            onClick={() => setShowImageInput(!showImageInput)}
                                            className="text-sm text-green-700 hover:text-green-900 flex items-center gap-1.5 font-medium transition-colors"
                                        >
                                            <img src={Imagem} alt="imagem" className="w-5 h-5 object-contain" />
                                            {showImageInput ? 'Remover imagem' : 'Adicionar imagem'}
                                        </button>

                                        <div className="flex gap-2">
                                            {editingId && (
                                                <button
                                                    type="button"
                                                    onClick={() => { setEditingId(null); setForm({ titulo: '', conteudo: '', imagem: '' }); setShowImageInput(false); }}
                                                    className="text-sm text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-200 rounded-lg font-medium transition-colors"
                                                >
                                                    Cancelar
                                                </button>
                                            )}
                                            <button
                                                type="submit"
                                                className="text-sm bg-green-700 hover:bg-green-800 transition-colors text-white px-6 py-2 rounded-lg font-semibold"
                                            >
                                                {editingId ? 'Salvar' : 'Publicar'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6 text-center">
                            <span className="text-4xl">🌱</span>
                            <h3 className="font-bold text-lg text-gray-900 mt-3">Faça parte da comunidade!</h3>
                            <p className="text-gray-500 text-sm mt-2 mb-5">Entre para publicar dicas e interagir com outros membros.</p>
                            <a href="/login" className="inline-block bg-green-700 hover:bg-green-800 transition-colors text-white px-6 py-2.5 rounded-lg font-semibold text-sm">
                                Entrar / Cadastrar-se
                            </a>
                        </div>
                    )}

                    {/* Tabs */}
                    <div className="flex gap-1 mb-6 bg-white border border-gray-200 rounded-xl p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-colors ${activeTab === tab ? 'bg-green-700 text-white' : 'text-gray-500 hover:text-gray-800'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Posts */}
                    <div className="space-y-4">
                        {/* DB Posts */}
                        {displayedDbPosts.map((post) => (
                            <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center font-bold text-white uppercase text-lg select-none flex-shrink-0">
                                                {post.titulo ? post.titulo.charAt(0) : 'P'}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="font-bold text-base text-gray-900">{post.titulo}</h3>
                                                    <span className="text-green-700 text-xs bg-green-50 px-2 py-0.5 rounded font-medium">
                                                        @comunidade
                                                    </span>
                                                    <span className="text-gray-400 text-xs">
                                                        {new Date(post.criadoEm).toLocaleDateString('pt-BR')}
                                                    </span>
                                                </div>
                                                <p className="mt-2 text-gray-700 leading-relaxed">{post.conteudo}</p>
                                            </div>
                                        </div>

                                        {isLoggedIn && (
                                            <div className="flex gap-1.5 flex-shrink-0">
                                                <button
                                                    onClick={() => handleEdit(post)}
                                                    className="p-1.5 hover:bg-green-50 text-green-700 rounded-lg transition-colors cursor-pointer"
                                                    title="Editar"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => askDelete(post.id)}
                                                    className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors cursor-pointer"
                                                    title="Excluir"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                    {post.imagem && (
                                        <div className="rounded-lg overflow-hidden mt-5">
                                            <img src={post.imagem} alt={post.titulo} className="w-full max-h-96 object-cover" />
                                        </div>
                                    )}

                                    <div className="flex items-center gap-6 mt-5 pt-5 border-t border-gray-100 text-gray-400 text-sm">
                                        <button className="hover:text-gray-600 transition-colors flex items-center gap-2 font-medium cursor-pointer">
                                            <img src={Comentar} alt="comentar" className="w-5 h-5 object-contain opacity-50" />
                                            <span>0</span>
                                        </button>
                                        <button className="hover:text-gray-600 transition-colors flex items-center gap-2 font-medium cursor-pointer">
                                            <img src={Republicar} alt="republicar" className="w-5 h-5 object-contain opacity-50" />
                                            <span>0</span>
                                        </button>
                                        <button
                                            onClick={() => handleLike(post.id)}
                                            className="hover:text-pink-500 transition-colors flex items-center gap-2 font-bold text-pink-500 cursor-pointer"
                                        >
                                            <img src={Like} alt="like" className="w-5 h-5 object-contain" />
                                            <span>{post.likes}</span>
                                        </button>
                                        <button className="hover:text-gray-600 transition-colors flex items-center gap-2 font-medium cursor-pointer ml-auto">
                                            <img src={Favoritar} alt="favoritar" className="w-5 h-5 object-contain opacity-50" />
                                            <span>Salvar</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}

                        {/* Static Example Posts */}
                        {activeTab !== 'Minhas postagens' && posts.map((post, index) => (
                            <article key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex gap-3">
                                            <img src={post.avatar} alt={post.nome} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="font-bold text-base text-gray-900">{post.nome}</h3>
                                                    <span className="text-gray-400 text-xs">{post.usuario}</span>
                                                    <span className="text-gray-300 text-xs">· {post.tempo}</span>
                                                </div>
                                                <p className="mt-2 text-gray-700 leading-relaxed">{post.texto}</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-300 hover:text-gray-500 cursor-pointer flex-shrink-0">
                                            <img src={Trespontinhos} alt="opções" className="w-4 h-4 object-contain" />
                                        </button>
                                    </div>

                                    <div className="rounded-lg overflow-hidden mt-4">
                                        <img src={post.imagem} alt={post.nome} className="w-full h-72 object-cover" />
                                    </div>

                                    <p className="text-green-600 mt-3 text-xs font-medium">{post.hashtag}</p>

                                    <div className="flex items-center gap-6 mt-5 pt-5 border-t border-gray-100 text-gray-400 text-sm">
                                        <button className="hover:text-gray-600 transition-colors flex items-center gap-2 font-medium cursor-pointer">
                                            <img src={Comentar} alt="comentar" className="w-5 h-5 object-contain opacity-50" />
                                            <span>{post.comentarios}</span>
                                        </button>
                                        <button className="hover:text-gray-600 transition-colors flex items-center gap-1.5 font-medium cursor-pointer">
                                            <img src={Republicar} alt="republicar" className="w-4 h-4 object-contain opacity-50" />
                                            <span>{post.compartilhamentos}</span>
                                        </button>
                                        <button className="hover:text-pink-500 transition-colors flex items-center gap-1.5 font-medium text-pink-400 cursor-pointer">
                                            <img src={Like} alt="like" className="w-4 h-4 object-contain" />
                                            <span>{post.curtidas}</span>
                                        </button>
                                        <button className="hover:text-gray-600 transition-colors flex items-center gap-1.5 font-medium cursor-pointer ml-auto">
                                            <img src={Favoritar} alt="favoritar" className="w-4 h-4 object-contain opacity-50" />
                                            <span>Salvar</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}

                        {displayedDbPosts.length === 0 && activeTab === 'Minhas postagens' && (
                            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
                                <p className="text-gray-400 text-sm">Você ainda não tem publicações.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* RIGHT SIDEBAR */}
                <aside className="space-y-4">
                    {/* Search */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <div className="relative">
                            <img src={Lupa} alt="Buscar" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className="w-full bg-gray-50 text-gray-800 py-2 pl-9 pr-3 rounded-lg border border-gray-200 outline-none focus:border-green-500 text-sm transition-colors"
                            />
                        </div>
                    </div>

                    {/* Trends */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Tópicos em alta</h3>
                        <div className="space-y-3">
                            {trends.map((trend, index) => (
                                <div key={index} className="hover:bg-gray-50 rounded-lg px-2 py-2 cursor-pointer transition-colors">
                                    <p className="font-semibold text-green-700">{trend}</p>
                                    <p className="text-xs text-gray-400">2.3 mil publicações</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Who to follow */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Quem seguir</h3>
                        <div className="space-y-4">
                            {['Instituto Verde', 'Mundo Sustentável', 'Eco Inspira'].map((item, index) => (
                                <div key={index} className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-lg">🌱</div>
                                        <div>
                                            <p className="font-semibold">{item}</p>
                                            <p className="text-xs text-gray-400">@{item.toLowerCase().replace(/ /g, '')}</p>
                                        </div>
                                    </div>
                                    <button className="bg-green-700 hover:bg-green-800 transition-colors text-white px-3 py-1 rounded-lg text-xs font-semibold">
                                        Seguir
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Events */}
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-4">Eventos & Ações</h3>
                        <div className="space-y-4">
                            {['Mutirão de Limpeza', 'Plantio de Árvores', 'Debate Climático'].map((evento, index) => (
                                <div key={index} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="bg-green-50 text-green-800 rounded-lg px-3 py-2 text-center min-w-[48px]">
                                        <p className="font-bold text-sm">25</p>
                                        <p className="text-[10px] font-semibold">MAI</p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-semibold">{evento}</p>
                                        <p className="text-xs text-gray-400">São Paulo</p>
                                    </div>
                                    <button className="bg-green-700 hover:bg-green-800 transition-colors text-white px-3 py-1 rounded-lg text-xs font-semibold">
                                        Ir
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </section>
        </main>

        {/* MODAL DE FEEDBACK - igual ao Denunciar */}
        {modal.show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="absolute inset-0 bg-green-900/10 backdrop-blur-sm"
                    onClick={closeModal}
                />
                <div className={`relative bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center border-t-4 ${modal.type === 'delete' ? 'border-red-500' : modal.type === 'error' ? 'border-orange-500' : 'border-green-600'}`}>
                    <h3 className="text-xl font-bold mb-2">{modal.title}</h3>
                    <p className="text-gray-600 mb-6">{modal.message}</p>
                    <button
                        onClick={closeModal}
                        className="bg-green-700 text-white px-6 py-2 rounded-md font-bold hover:bg-green-800 transition-colors"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        )}

        {/* MODAL DE CONFIRMAÇÃO DE EXCLUSÃO */}
        {confirmModal.show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="absolute inset-0 bg-green-900/10 backdrop-blur-sm"
                    onClick={cancelDelete}
                />
                <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center border-t-4 border-red-500">
                    <h3 className="text-xl font-bold mb-2">Excluir publicação?</h3>
                    <p className="text-gray-600 mb-6">Essa ação não pode ser desfeita.</p>
                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={cancelDelete}
                            className="text-gray-600 border border-gray-300 px-5 py-2 rounded-md font-bold hover:bg-gray-50 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => handleDelete(confirmModal.id)}
                            className="bg-red-600 text-white px-5 py-2 rounded-md font-bold hover:bg-red-700 transition-colors"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    );
}
