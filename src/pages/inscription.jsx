import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RotatingLines } from "react-loader-spinner"

const Inscription = () => {
    return (
        <>
            <section>
                <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5] px-4">
                    <motion.div
                        className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm space-y-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-between">
                            <div className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-1">
                                🇨🇮
                                <select className="bg-transparent focus:outline-none">
                                    <option>Français</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://cdn.prod.website-files.com/62446230dcb514b828a6e237/677ed61188695f2316217fc5_Wave-2_0-logo-fullcolour-rgb.svg"
                                    alt="Logo Wave"
                                    className="w-20 h-20"
                                />
                            </div>
                            <div className="mt-6 text-sm cursor-pointer text-gray-500 flex items-center justify-center gap-1">
                                Se connecter
                            </div>
                        </div>

                        <div className="flex justify-center ">
                            <div className="text-xl">
                                <h1>
                                    Ouvrir un compte Wave
                                </h1>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Votre adresse email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus"
                            />

                            <div className="flex justify-center">
                                {/* button pour envoyer les donnees */}
                                <Button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-11 "
                                >
                                    Suivant
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
export default Inscription;