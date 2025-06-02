import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RotatingLines } from "react-loader-spinner"
// import toast, { Toaster } from 'react-hot-toast';
import { DrawerDemo } from "../myComponents/DrawerDemo"


const NumberPhone = () => {
    const [email, setEmail] = useState("")
    const [justTest, setJustTest] = useState(false)
    const navigate = useNavigate()
    const [tstButton, setTstButton] = useState("Suivant")

    const handleSubmit = () => {
        if (email.trim() === "") {
            alert("Veuillez entrer un numero .")
            return
        }

        setTstButton(<RotatingLines />)
        setTimeout(() => {
            console.log("Email:", email)
            setJustTest(true)
            setTstButton('Suivant')
        }, 2000)
        setJustTest(false)

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
                        Numéro de téléphone
                    </div>

                    <div className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Numéro de téléphone"
                            className="w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
            </div>

            <DrawerDemo
                tester={justTest}
            />
        </section>
    )
}

export default NumberPhone
