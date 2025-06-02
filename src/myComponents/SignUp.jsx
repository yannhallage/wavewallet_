import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


const SignUp = () => {
    const [tester, setTester] = useState(false)
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
            <motion.div
                className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Logo */}
                <h1 className="text-2xl font-semibold mb-6 text-black">WaveWallet</h1>

                {/* Champ email */}
                <Input
                    placeholder="Email ou numéro de mobile"
                    className="mb-2"
                />
                {
                    tester ? (
                        <>
                            <Input
                                placeholder="Email ou numéro de mobile"
                                className="mb-2"
                            />
                        </>
                    ) : console.log('faux')
                }
                <div className="text-sm text-[#0070ba] text-left mb-4 cursor-pointer hover:underline">
                    Adresse email oubliée ?
                </div>

                {/* Bouton Suivant */}
                <Button className="bg-[#0070ba] w-full rounded-full hover:bg-[#005c9c] mb-4"
                    onClick={
                        () => {
                            setTester(!tester)
                            console.log(tester)
                        }
                    }
                >
                    Suivant
                </Button>

                {/* Séparateur */}
                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">ou</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                {/* Bouton secondaire */}
                <Button variant="outline" className="w-full rounded-full"

                >
                    Ouvrir un compte
                </Button>

                {/* Langue */}
                <div className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-1">
                    <span role="img" aria-label="flag">🇨🇮</span>
                    <select className="bg-transparent focus:outline-none">
                        <option>Français</option>
                        <option>English</option>
                    </select>
                </div>
            </motion.div>
        </div>
    )
}

export default SignUp
