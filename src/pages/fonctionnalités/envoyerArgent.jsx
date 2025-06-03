import { SelectDemo } from "../../myComponents/SelectDemo";
import { useState } from "react";
import { motion } from "framer-motion";


const EnvoyerArgent = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    return (
        <>
            <motion.div className="p-6 rounded-md space-y-5 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-xl font-semibold text-gray-800">
                    Envoyer de l'argent
                </h1>

                <div className="p-6 space-y-5 rounded-md border bg-white">
                    <div className="flex justify-center items-center space-x-2">
                        <div>
                            <SelectDemo
                                placeholder="De"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                        </div>
                        <span className="text-sm">à</span>
                        <div>
                            <SelectDemo
                                placeholder="Vers"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="text-center space-y-3">
                        <p className="text-[14px]">Entrer le montant</p>

                        <input
                            type="number"
                            className="text-2xl text-center border rounded-md p-2 w-full"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                        <BalanceDisponible />

                        <Proposition onSelect={(val) => setAmount(val)} />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default EnvoyerArgent;

const BalanceDisponible = () => {
    return <p className="text-sm text-gray-600">Balance disponible : 1000.00</p>;
};


const Proposition = ({ onSelect }) => {
    const amounts = ["10.00", "50.00", "100.00", "250.00"];

    return (
        <div className="flex justify-center space-x-3 pt-2">
            {amounts.map((amt) => (
                <div
                    key={amt}
                    className="border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100"
                    onClick={() => onSelect(amt)}
                >
                    <p>{amt} €</p>
                </div>
            ))}
        </div>
    );
};
