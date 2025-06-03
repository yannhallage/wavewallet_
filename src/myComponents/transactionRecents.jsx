import { useState } from "react";
import { motion } from "framer-motion";


const TransactionRecents = () => {
    const [test] = useState(true)
    return (
        <div className="p-6 rounded-md space-y-5 bg-gray-50">
            <h1 className="text-xl font-semibold text-gray-800">Transactions récentes</h1>

            <div className="space-y-3">
                {
                    test ? (
                        [...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm"
                            >
                                <motion.div
                                    className="flex items-center space-x-3"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <img
                                        src="https://grafikart.fr/images/default.png"
                                        width={40}
                                        height={40}
                                        alt="Avatar"
                                        className="rounded-full"
                                    />
                                    <div className="text-gray-800">
                                        <span className="block font-medium text-base">Yann Hallage</span>
                                        <span className="text-xs text-gray-500">Transaction réussie</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="text-right text-gray-700"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="block font-semibold text-base">50 000 FCFA</span>
                                    <span className="text-xs text-gray-500">
                                        {new Date().toLocaleDateString('fr-FR')}
                                    </span>
                                </motion.div>
                            </div>
                        ))
                    ) : (
                        <DonneesNonTrouvees />
                    )
                }
            </div>
        </div>
    )
}

export default TransactionRecents;



const DonneesNonTrouvees = () => {
    return (
        <>
            <div className="text-center text-[#ccc] mt-[100px]">
                Suivez les crédits et les débits. <br /> Vous trouverez ici votre activité Wave récente
            </div>
        </>
    )
}