import clsx from "clsx"
import { dados } from "./dados"

type CardThemeProps = {
    theme: 'spotify' | 'netflix' | 'instagram'
}

function CardTheme({ theme }: CardThemeProps) {
    return (
        <div className={clsx('cursor-pointer bg-gradient-to-br rounded-2xl p-6 sm:p-8 text-white transform hover:scale-105 transition-transform duration-300 shadow-xl', {
            'from-green-400 to-green-600': theme == 'spotify',
            'from-red-500 to-red-700': theme == 'netflix',
            'from-pink-500 to-purple-600': theme == 'instagram',
        })}>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                    {dados[theme].icon}
                </div>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">{dados[theme].title}</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                {dados[theme].descriptionList.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 justify-center">
                        {item.icon}
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardTheme