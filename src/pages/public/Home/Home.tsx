import { HiOutlineSparkles } from "react-icons/hi2";
import CardTheme from "../../../components/CardTheme/CardTheme";
import BenefitsSection from "../../../components/BenefitsSection/BenefitsSection";
import { dadosBenefitsSection } from "./dados";

function Home() {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
                {/* Hero Section */}
                <section className="py-8 px-4 flex w-full flex-col md:flex-row max-md:gap-4">
                    <div className="order-2 md:order-1 container mx-auto text-center w-full md:w-[55%] flex items-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                                Crie WebPages de momentos
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                                    {' '}únicos e inesquecíveis
                                </span>
                            </h2>
                            <p className="max-md:hidden text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
                                Transforme momentos especiais em experiências digitais incríveis.
                                Escolha entre temas do Spotify, Netflix e Instagram para criar
                                o cartão perfeito para quem você ama.
                            </p>
                            <button
                                // onClick={() => onNavigate('create')}
                                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <HiOutlineSparkles className="w-5 h-5" />
                                <span>Começar Agora</span>
                            </button>
                        </div>
                    </div>
                    <div className="self-center order-1 md:order-2 w-full max-md:max-w-[350px] md:w-[45%] h-[290px] md:h-[350px] lg:h-[500px]">
                        <img className="-rotate-12 w-full h-full" src="imagens/imagem1home.png" />
                    </div>
                </section>

                {/* Temas Section */}
                <section className="py-12 sm:py-16 px-4 bg-white">
                    <div className="container mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
                            Escolha seu tema favorito
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                            <CardTheme theme="spotify" />
                            <CardTheme theme="netflix" />
                            <CardTheme theme="instagram" />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
                    <div className="container mx-auto">
                        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
                            Por que escolher o MoMents?
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
                            {dadosBenefitsSection.map(({ icon, text, title }, index) => (
                                <BenefitsSection
                                    key={index}
                                    icon={icon}
                                    text={text}
                                    title={title}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <div className="container mx-auto text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                            Pronto para criar um cartão inesquecível?
                        </h3>
                        <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
                            Junte-se a milhares de pessoas que já criaram momentos únicos
                        </p>
                        <button
                            // onClick={() => onNavigate('create')}
                            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <HiOutlineSparkles className="w-5 h-5" />
                            <span>Criar Meu Cartão</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;