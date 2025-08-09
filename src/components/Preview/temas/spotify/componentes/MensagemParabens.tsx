import { FaRegCommentDots } from "react-icons/fa";

type MensagemParabensProps = {
  model: {
    autor?: string
    mensagem: string
  }
}

function MensagemParabens({ model }: MensagemParabensProps) {
  return (
    <div className="text-white">
      {/* Card da mensagem */}
      <div>
        {/* Nome e ícone */}
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center font-semibold">
            {model.autor?.slice(0,1)}
          </div>
          <span className="font-medium">{model.autor}</span>
        </div>

        {/* Mensagem */}
        <p className="text-gray-200">
          {model.mensagem}
        </p>
      </div>
    </div>
  );
}

export default MensagemParabens;