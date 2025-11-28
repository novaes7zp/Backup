import { useState } from "react"



function Colors() {

    const colors = [

        { id: 'blue', name: 'Titânio Azul', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },

        {  id: 'silver', name: 'Titânio Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-300' },

        {  id: 'orange', name: 'Titânio Laranja', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500' }

    ]

    const models = [

        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', baterry: '33h de video', weight: '221g' },

        {  name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', baterry: '29h de video', weight: '199g' }
    ]

    const [selectColor, setSelectColor] = useState('blue')

    return (
        
        <section className="bg-black py-20 px-8" id="colors">

            <div className="max-w-7xl max-auto">

                <div className="text-center mb-16">

                    <h2 className="text-5xl md:text-6xl font-bold mb-4">Escolha sua cor</h2>

                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio lindos</p>
                </div>

                <div className="flex justify-center mb-12">

                    <div className="relative w-full max-w-3xl">

                        <div className="relative flex items-center justify-center min-h-[500px]">

                            <img src={colors.find(color => color.id === selectColor).image}
                                className="max-w-full max-h-[600px] mx-auto"
                            ></img>
                        </div>

                        <div className="absolute bottom-8 left-0 right-0 text-center">

                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">

                                <h3 className="text-2xl font-semibold">{colors.find(color => color.id === selectColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-8">

                    {colors.map(color => (
                        <button key={color.id} onClick={() => setSelectColor(color.id)}

                            className={`relative transition-all duration-300 cursor-pointer`}
                        >
                            <div className={`w-16 h-16 rounded-full border-4 ${color.colorClass} ${selectColor === color.id ? 'border-white' : 'border-gray-600'}`}></div>
                        </button>
                    ))}
                </div>
                
                <div>

                    
                </div>
            </div>
        </section>
    )
}

export default Colors