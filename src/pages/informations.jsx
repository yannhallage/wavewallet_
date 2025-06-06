

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { RotatingLines } from "react-loader-spinner"
import toast, { Toaster } from 'react-hot-toast';
// import { DrawerDemo } from "../myComponents/DrawerDemo"


const Informations = () => {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [numero, setNumero] = useState("")
    const [motDePasse, setMotDePasse] = useState("")
    const [motDePasseConfirm, setmotDePasseConfirm] = useState("")
    const navigate = useNavigate()
    const [tstButton] = useState("Suivant")

    const handleSubmit = () => {
        console.log(
            numero, nom, prenom, motDePasse
        )
        axios.post('http://192.168.57.65:8080/users/register', {
            nom: nom,
            prenom: prenom,
            numero: numero,
            motDePasse:motDePasse,
        })
            .then(response => {
                console.log(response.data)
                toast.success('Compte créé avec succès !');
                setTimeout(() => navigate('/myaccount'), 500);
            })
            .catch(error => {
                toast.error("Erreur lors de la création du compte.");
                console.log("Erreur backend :", error);
            })
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
                            placeholder="numero"
                            className="w-full"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Crée un mot de passe "
                            className="w-full"
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Confirmez le mot de passe"
                            className="w-full"
                            value={motDePasseConfirm}
                            onChange={(e) => setmotDePasseConfirm(e.target.value)}
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
