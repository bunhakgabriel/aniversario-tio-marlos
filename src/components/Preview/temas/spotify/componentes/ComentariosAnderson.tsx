import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Import FaTrashAlt for delete icon
import { FaRegCommentDots } from 'react-icons/fa6';

// --- Definições de Tipos ---
interface Resposta {
    id: number;
    autor: string;
    mensagem: string;
}

interface Comentario {
    id: number;
    autor: string;
    mensagem: string;
    curtidas: number;
    curtido: boolean;
    respostas: Resposta[];
}

function ComentariosAnderson() {
    const [comentarios, setComentarios] = useState<Comentario[]>([
        {
            id: 1,
            autor: 'Marida',
            mensagem: 'Feliz Dia dos Pais, meu parceiro de vida. Juntos, estamos construindo uma família linda, com amor e alegria, vc com esse seu jeito sério e piruquento de sempre mais quando abre o sorriso tudo fica leve e feliz e eu não trocaria isso por nada nesse mundo. Que possamos continuar escrevendo esta história incrível juntos. Amo você! Marida',
            curtidas: 56,
            curtido: false,
            respostas: [],
        },
        {
            id: 2,
            autor: 'Teteus',
            mensagem: 'Feliz dia dos pais para o melhor pai do mundo, quero que tenha um bolo de aniversario de morango do dia dos pais, te amo muito',
            curtidas: 56,
            curtido: false,
            respostas: [],
        },
        {
            id: 3,
            autor: 'Gabriel',
            mensagem: 'Feliz dia dos pais para o meu herói da infância, adolescência e agora da vida adulta, ja são 23 dia dos pais juntos, guardo todos com muito carinho, assim como todos os momentos em que estamos juntos, que a nossa relação, parceria e amizade se fortaleça cada vez mais, saiba que eu sempre te admirei, te admiro e vou de admirar para sempre, um feliz dia dos pais, te amo!',
            curtidas: 56,
            curtido: false,
            respostas: [],
        }
    ]);

    const handleCurtir = (id: number): void => {
        setComentarios((prevComentarios) =>
            prevComentarios.map((comentario) =>
                comentario.id === id
                    ? {
                        ...comentario,
                        curtidas: comentario.curtido ? comentario.curtidas - 1 : comentario.curtidas + 1,
                        curtido: !comentario.curtido,
                    }
                    : comentario
            )
        );
    };

    return (
        <div className="text-gray-100"> {/* Added min-h-screen and bg-gray-900 here for overall background */}
            <div className="flex items-center space-x-2 mb-4">
                <FaRegCommentDots className="text-green-500 text-xl" />
                <h2 className="text-xl sm:text-2xl font-semibold">Comentarios</h2>
            </div>


            <div className='flex flex-col gap-4'>
                {/* Seção de Comentários Existentes */}
                <div className="space-y-6">
                    {comentarios.map((comentario) => (
                        <div key={comentario.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <div className="flex items-start mb-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                                    {comentario.autor.slice(0,1)}
                                </div>
                                <div>
                                    <p className="font-semibold text-lg mb-1">{comentario.autor}</p>
                                    <p className="text-gray-300 leading-relaxed">{comentario.mensagem}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 text-gray-400 text-sm mt-4">
                                <button onClick={() => handleCurtir(comentario.id)} className="flex items-center space-x-1 hover:text-gray-100">
                                    {comentario.curtido ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
                                    <span>{comentario.curtidas}</span>
                                </button>
                            </div>

                            {/* Seção de Respostas */}
                            {comentario.respostas.length > 0 && (
                                <div className="ml-14 mt-4 space-y-4 border-l border-gray-700 pl-4">
                                    {comentario.respostas.map((resposta) => (
                                        <div key={resposta.id} className="bg-gray-700 p-4 rounded-lg">
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-3">
                                                    RP
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-base mb-1">{resposta.autor}</p>
                                                    <p className="text-gray-300 text-sm leading-relaxed">{resposta.mensagem}</p>
                                                </div>
                                            </div>
                                            {/* Respostas não podem ser curtidas nem respondidas, nem excluídas aqui */}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComentariosAnderson;