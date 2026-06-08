import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import BannerDenunciar from '../assets/images/bannerDenunciar.png'
import ClipeSimbol from '../assets/images/anexos 1.png'

// Correção para os ícones do Leaflet no Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Componente para capturar o clique no mapa
function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
}

export default function Denunciar() {
  const [formData, setFormData] = useState({
    tipo: '',
    descricao: '',
    local: '',
    anonimo: false
  });

  const [denuncias, setDenuncias] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [mapPosition, setMapPosition] = useState([-23.6226, -45.4126]); // Caraguatatuba como centro do Litoral Norte
  const [markerPosition, setMarkerPosition] = useState(null);

  // Estados do Modal Customizado
  const [modal, setModal] = useState({
    show: false,
    title: '',
    message: '',
    type: 'success' // success ou delete
  });

  // Modal de confirmação de exclusão
  const [confirmModal, setConfirmModal] = useState({ show: false, id: null });

  const openModal = (title, message, type = 'success') => {
    setModal({ show: true, title, message, type });
  };

  const closeModal = () => {
    setModal({ ...modal, show: false });
  };

  const askDelete = (id) => setConfirmModal({ show: true, id });
  const cancelDelete = () => setConfirmModal({ show: false, id: null });

  // Carregar dados
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDenuncias();
  }, []);

  const fetchDenuncias = async () => {
    try {
      const response = await fetch(`http://localhost:3000/denuncia`);
      if (response.ok) {
        const data = await response.json();
        setDenuncias(data);
      }
    } catch (error) {
      console.error('Erro ao carregar denúncias:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value === 'true' : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId 
      ? `http://localhost:3000/denuncia/${editingId}` 
      : 'http://localhost:3000/denuncia';
    
    const method = editingId ? 'PATCH' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        openModal(
          editingId ? 'Atualizado!' : 'Enviado!',
          editingId ? 'Sua denúncia foi atualizada com sucesso.' : 'Obrigado por ajudar a proteger o meio ambiente!'
        );
        setEditingId(null);
        setFormData({
          tipo: '',
          descricao: '',
          local: '',
          anonimo: false
        });
        fetchDenuncias(); 
      } else {
        alert('Erro ao processar denúncia.');
      }
    } catch (error) {
      console.error('Erro:', error);
      openModal('Erro!', 'Não foi possível conectar ao servidor.', 'delete');
    }
  };

  const handleDelete = async (id) => {
    cancelDelete();
    try {
      const response = await fetch(`http://localhost:3000/denuncia/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        openModal('Excluído!', 'A denúncia foi removida do sistema.', 'delete');
        fetchDenuncias();
      }
    } catch (error) {
      console.error('Erro ao deletar:', error);
    }
  };

  const handleEdit = (denuncia) => {
    setEditingId(denuncia.id);
    setFormData({
      tipo: denuncia.tipo,
      descricao: denuncia.descricao,
      local: denuncia.local,
      anonimo: denuncia.anonimo
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    <section className="w-full bg-[#f8fafc] pb-6 overflow-x-hidden">

      {/* Banner Idêntico ao de Contato */}
      <div className="w-full h-32 relative">
        <img
          src={BannerDenunciar}
          alt="Banner Denunciar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">Denunciar</h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-5 md:p-8">

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* COLUNA ESQUERDA: FORMULÁRIO */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Dados da Denúncia</h2>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-xs text-gray-700">Tipo de infração:</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    required
                  >
                    <option value="">Selecione o tipo de crime ambiental...</option>
                    <option value="Descarte irregular de lixo doméstico">Descarte irregular de lixo</option>
                    <option value="Descarte de entulho (construção)">Entulho de construção</option>
                    <option value="Lixo em via pública">Lixo em via pública</option>
                    <option value="Descarte em área verde / mata">Descarte em área verde</option>
                    <option value="Poluição de rios / água">Poluição de rios ou lagos</option>
                    <option value="Queima de lixo">Queima de lixo ao ar livre</option>
                    <option value="Descarte de resíduos perigosos">Resíduos químicos ou perigosos</option>
                    <option value="Outro">Outro tipo de infração</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-bold text-xs text-gray-700">Descrição dos fatos:</label>
                  <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    placeholder="Descreva detalhadamente o que está acontecendo..."
                    className="w-full border border-gray-300 rounded-md p-2 h-24 text-sm"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-bold text-xs text-gray-700">Localização aproximada:</label>
                  <input
                    type="text"
                    name="local"
                    value={formData.local}
                    onChange={handleChange}
                    placeholder="Ex: Rua, número, bairro ou ponto de referência"
                    className="w-full border border-gray-300 rounded-md p-2 text-sm"
                    required
                  />
                </div>

                <div className="bg-gray-100 p-3 rounded-md">
                  <p className="text-xs font-bold mb-2">Deseja ser anônimo?</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1 text-xs">
                      <input
                        type="radio"
                        name="anonimo"
                        value="true"
                        checked={formData.anonimo === true}
                        onChange={handleChange}
                      /> Sim
                    </label>
                    <label className="flex items-center gap-1 text-xs">
                      <input
                        type="radio"
                        name="anonimo"
                        value="false"
                        checked={formData.anonimo === false}
                        onChange={handleChange}
                      /> Não
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white p-3 rounded-md font-bold text-sm uppercase"
                >
                  {editingId ? 'Salvar Alterações' : 'Enviar denúncia'}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setFormData({ tipo: '', descricao: '', local: '', anonimo: false });
                    }}
                    className="w-full mt-2 text-gray-500 text-xs font-bold uppercase hover:underline"
                  >
                    Cancelar Edição
                  </button>
                )}
              </div>
            </div>

            {/* COLUNA DIREITA */}
            <div className="flex flex-col gap-6 lg:pl-10 lg:border-l border-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900">Local e Anexos</h2>
              </div>

              <div className="space-y-4">
                <div className="w-full h-60 bg-gray-200 rounded-md overflow-hidden border border-gray-300">
                  <MapContainer 
                    center={mapPosition} 
                    zoom={10} 
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker position={markerPosition} setPosition={setMarkerPosition} />
                  </MapContainer>
                </div>
                <p className="text-[10px] text-gray-500 text-center italic mt-[-15px]">
                  Clique no mapa para marcar a localização exata da denúncia.
                </p>

                <div className="bg-gray-50 border border-gray-300 p-4 rounded-md text-center">
                  <button
                    type="button"
                    className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 px-4 py-2 rounded-md font-bold text-xs uppercase transition-all shadow-sm"
                  >
                    Anexar fotos
                  </button>
                </div>

                </div>
              </div>

          </form>
        </div>

        {/* SEÇÃO DE LISTAGEM (O "READ" DO CRUD) */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Minhas Denúncias (Histórico)</h2>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
              {denuncias.length} registros
            </span>
          </div>

          {denuncias.length === 0 ? (
            <div className="text-center py-10 text-gray-500 text-sm">
              Nenhuma denúncia encontrada no sistema.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {denuncias.map((item) => (
                <div key={item.id} className="border border-gray-100 rounded-2xl p-4 hover:border-green-200 transition-colors bg-gray-50/30">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest bg-white px-2 py-0.5 rounded-md shadow-sm border border-gray-100">
                      {item.tipo}
                    </span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEdit(item)}
                        className="p-1.5 hover:bg-green-100 text-green-700 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button 
                        onClick={() => askDelete(item.id)}
                        className="p-1.5 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                        title="Excluir"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{item.local}</h3>
                  <p className="text-gray-600 text-xs line-clamp-2 leading-relaxed">{item.descricao}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </section>

    {/* MODAL SIMPLIFICADO */}
    {modal.show && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Fundo com desfoque suave */}
        <div 
          className="absolute inset-0 bg-green-900/10 backdrop-blur-sm"
          onClick={closeModal}
        ></div>
        
        {/* Conteúdo */}
        <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-sm w-full text-center border-t-4 border-green-600 animate-in fade-in zoom-in duration-200">
          <h3 className="text-xl font-bold mb-2">{modal.title}</h3>
          <p className="text-gray-600 mb-6">{modal.message}</p>
          <button
            onClick={closeModal}
            className="bg-green-700 text-white px-6 py-2 rounded-md font-bold"
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
          <h3 className="text-xl font-bold mb-2">Excluir denúncia?</h3>
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
