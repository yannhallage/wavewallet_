import { SelectDemo } from "../../myComponents/SelectDemo";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { motion } from "framer-motion";
import { DialogDemo } from "../../myComponents/DialogDemo";
import { RotatingLines } from "react-loader-spinner"
import toast, { Toaster } from 'react-hot-toast';
import { DrawerMoney } from "../../myComponents/DrawerMoney";


const EnvoyerArgent = () => {
    // const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [justTest, setJustTest] = useState(false)
    const [amount, setAmount] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    const [justePourleChargement, setJustePourleChargement] = useState("Continuez")

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
                        <div className="border px-4 py-2 rounded-md cursor-pointer hover:bg-gray-100">
                            {/* <SelectDemo
                                placeholder="De"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            /> */}
                            <span>
                                Moi
                            </span>
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
                        <p className="text-[14px] text-gray-600">Entrer le montant</p>

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

                    <div className="text-center">
                        <Button className="w-full p-5 font-medium text-white bg-blue-600 hover:bg-blue-700 transition "
                            onClick={
                                () => {
                                    if (amount) {
                                        // console.log("remplis")
                                        // toast.success('Transfert reussis')
                                        setJustePourleChargement(<RotatingLines />)
                                        setTimeout(() => {
                                            setJustePourleChargement("continuez");
                                            setDialogOpen(true)
                                            setAmount('')
                                        }, 200)
                                    } else {
                                        toast.error("Veuillez remplis les champs!")
                                    }
                                }
                            }
                        >
                            {
                                justePourleChargement
                            }
                        </Button>
                    </div>

                    <DialogDemo
                        open={dialogOpen} onOpenChange={setDialogOpen}
                    />

                    <DrawerMoney 
                    tester={justTest}
                    />
                </div>
            </motion.div>

            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    )
}

export default EnvoyerArgent;

const BalanceDisponible = () => {
    return <p className="text-sm text-gray-600">Balance disponible : 1000.00</p>;
};


const Proposition = ({ onSelect }) => {
    const amounts = ["1000.00", "5000.00", "10000.00", "25000.00"];

    return (
        <div className="flex justify-center space-x-3 pt-2">
            {amounts.map((amt) => (
                <div className="border px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100"
                    key={amt}
                    // className="border px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100"
                    onClick={() => onSelect(amt)}
                >
                    <p>{amt}</p>
                </div>
            ))}
        </div>
    );
};   