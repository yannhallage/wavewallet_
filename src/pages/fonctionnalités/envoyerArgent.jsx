import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EnvoyerArgent = () => {
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <motion.div
            className="p-6 rounded-md space-y-6 bg-gray-50 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1 className="text-xl font-semibold text-gray-800">Envoyer de l'argent</h1>

            <div className="p-6 space-y-5 rounded-md border bg-white">
                {/* Numéro du destinataire */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-600">Numéro de téléphone du destinataire</label>
                    <Input
                        type="tel"
                        placeholder="+221 77 123 45 67"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                {/* Montant */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-600">Entrer le montant</label>
                    <Input
                        type="number"
                        placeholder="0.00"
                        className="text-xl text-center"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <BalanceDisponible />

                <Proposition onSelect={(val) => setAmount(val)} />

                {/* Bouton continuer */}
                <Button className="w-full p-5 font-medium text-white bg-blue-600 hover:bg-blue-700 transition rounded-full">
                    Continuer
                </Button>
            </div>
        </motion.div>
    );
};

export default EnvoyerArgent;

// Composant BalanceDisponible
const BalanceDisponible = () => {
    return <p className="text-sm text-gray-500">Balance disponible : 1000.00</p>;
};

// Composant Proposition
const Proposition = ({ onSelect }) => {
    const amounts = ["1000.00", "5000.00", "10000.00", "25000.00"];

    return (
        <div className="flex flex-wrap justify-center gap-3 pt-3">
            {amounts.map((amt) => (
                <button
                    key={amt}
                    onClick={() => onSelect(amt)}
                    className="border px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm"
                >
                    {amt}
                </button>
            ))}
        </div>
    );
};
