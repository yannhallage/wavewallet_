

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
import toast, { Toaster } from 'react-hot-toast';
// import { DrawerDemo } from "../myComponents/DrawerDemo"


const Informations = () => {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [ville, setVille] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const navigate = useNavigate()
    const [tstButton, setTstButton] = useState("Suivant")

    const handleSubmit = () => {
        if (nom === "" || prenom === "" || ville === "" || password === "" ) {
            toast.error('Veuillez remplir tous les champs !')
        }
    }

    return (
        <section>
            <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5] px-4">
                <motion.div
                    className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-between items-start">
                        <Button variant="ghost" onClick={() => navigate('/inscription')}>
                            ←
                        </Button>

                        <img
                            src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg"
                            alt="Logo Wave"
                            className="w-20 h-20 ml-11"
                        />

                        <div className="text-sm text-gray-500 flex items-center gap-1">
                            🇨🇮
                            <select className="bg-transparent focus:outline-none">
                                <option>Français</option>
                                <option>English</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-center text-xl">
                        Configuration du profil
                    </div>

                    <div className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Votre Nom"
                            className="w-full"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Votre Prenom"
                            className="w-full"
                            value={prenom}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="ville"
                            className="w-full"
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Crée un mot de passe "
                            className="w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Confirmez le mot de passe"
                            className="w-full"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />

                        <Button
                            className="bg-blue-500 hover:bg-blue-700 w-full"
                            onClick={handleSubmit}
                        >
                            {
                                tstButton
                            }
                        </Button>
                    </div>
                </motion.div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </section>
    )
}

export default Informations
