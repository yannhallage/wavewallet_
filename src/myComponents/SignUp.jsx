import { motion } from "framer-motion"
import toast, { Toaster } from 'react-hot-toast';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RotatingLines } from "react-loader-spinner"

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [textForButton, setTextForButton] = useState('Suivant')
    // const [justAnText, setJustAnText] = useState('')
    // les valeurs normalemnt des champs 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const notify = (justAnText) => toast(justAnText, {
        icon: '❌',
    })

    const handleClick = () => {
        setIsLoading(true)

        VerificationDesChamps();
        setTimeout(() => {
            setIsLoading(false)
            setShowPassword(true)
            // setTextForButton('Connexion')
        }, 2000)
    }

    const VerificationDesChamps = () => {
        if (email.trim() === '' || password.trim() === '') {
            // setJustAnText('Veuillez remplir tous les champs')
            notify(
                'Veuillez remplir tous les champs '
            );
        } else {
            console.log(email, password)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5] px-4">
            <motion.div
                className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-2xl font-semibold mb-6 text-black">WaveWallet</h1>

                <Input
                    placeholder="Email ou numéro de mobile"
                    className="mb-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Votre mot de passe"
                    className="mb-2"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="text-sm text-[#0070ba] text-left mb-4 cursor-pointer hover:underline">
                    Adresse email oubliée ?
                </div>

                <Button
                    className="bg-[#0070ba] w-full rounded-full hover:bg-[#005c9c] mb-4 flex justify-center items-center gap-2"
                    onClick={handleClick}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <RotatingLines
                            visible={true}
                            height="20"
                            width="20"
                            color="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="spinner"
                        />
                    ) : (
                        textForButton
                    )}
                </Button>

                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">ou</span>
                    <div className="flex-1 h-px bg-gray-300" />
                </div>

                <Button variant="outline" className="w-full rounded-full">
                    Ouvrir un compte
                </Button>

                <div className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-1">
                    <span role="img" aria-label="flag">🇨🇮</span>
                    <select className="bg-transparent focus:outline-none">
                        <option>Français</option>
                        <option>English</option>
                    </select>
                </div>

                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
            </motion.div>
        </div>
    )
}

export default SignUp
