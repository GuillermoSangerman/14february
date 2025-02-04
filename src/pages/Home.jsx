import { useState } from "react";
import JSConfetti from "js-confetti";
import { random } from "../utils/API";
function Home() {

    const jsConfetti = new JSConfetti()
    const [randomValor, setRandomValor] = useState({})

    const [imagenCargada, setImagenCargada] = useState(false);
    const [agrandar, setAgrandar] = useState(45)

    const [valueSi, setValueSi] = useState(false)

    const randomResponse = () => {
        let index = Math.floor(Math.random() * 11);
        console.log(random[index])
        if (agrandar <= 500) {
            setAgrandar(agrandar + 10)
        }
        setRandomValor(random[index]);
    }

    const handleImageLoad = () => {
        setImagenCargada(true);
    }
    return (
        <main id="canvas" className="fondo w-full min-h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
            {
                !valueSi ? (
                    <div className="p-5 mt-5">
                        <h1 className="text-white font-bold text-5xl text-center font-serif">¿Quieres ser mi San Valentin?</h1>
                        <img src={Object.keys(randomValor).length === 0 ?
                            "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" : randomValor.img}
                            alt="San Valentin" className="mx-auto" width={400} height={400} />
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
                            <button onClick={() => {
                                setValueSi(true)

                                jsConfetti.addConfetti({
                                    emojis: ['😍', '🥰', '❤️', '😘'],
                                    emojiSize: 70,
                                    confettiNumber: 80,
                                })

                            }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`}
                                style={{ height: agrandar }}>
                                Si
                            </button>
                            <button
                                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                                onClick={randomResponse}
                                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
                            >
                                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                                <span
                                    hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}

                                </span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center flex-col space-y-10 mt-5">
                        <h1 className="text-2xl md:text-4xl text-white font-bold font-serif">Sabia que dirias que si ❤️!</h1>
                        <img src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif"
                            alt="gif abrazados" className="mx-auto" />
                        <span hidden>{document.title = 'Sabia que dirias que si ❤️!'}</span>
                    </div>
                )
            }
        </main>
    )
}

export { Home }