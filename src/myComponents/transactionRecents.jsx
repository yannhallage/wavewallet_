import { useState } from "react";
import { motion } from "framer-motion";


const TransactionRecents = () => {
    const [test] = useState(true)
    return (
        <div className="p-6 bg-white shadow-xl rounded-2xl space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Transactions récentes</h1>

            <div className="space-y-4">
                {
                    test ? (
                        [...Array(10)].map((_, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition rounded-xl shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="https://grafikart.fr/images/default.png"
                                        alt="Avatar"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-gray-800 font-medium text-base">Yann Hallage</p>
                                        <span className="text-xs inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                                            Transaction réussie
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-green-600 font-semibold text-lg">50 000 FCFA</p>
                                    <p className="text-xs text-gray-500">{new Date().toLocaleDateString('fr-FR')}</p>
                                </div>
                            </motion.div>
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