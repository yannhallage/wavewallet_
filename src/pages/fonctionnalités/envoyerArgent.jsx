import { SelectDemo } from "../../myComponents/SelectDemo";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
import { RotatingLines } from "react-loader-spinner";
import { DialogDemo } from "../../myComponents/DialogDemo";
import { DrawerMoney } from "../../myComponents/DrawerMoney";
import { Addnumber } from "../../myComponents/Addnumber";
import { SelectDemoSend } from "../../myComponents/SelectDemoSend";

const EnvoyerArgent = () => {
  const [from] = useState("Moi");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [loadingContent, setLoadingContent] = useState("Continuer");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [justTest, setJustTest] = useState(false);

  const handleTransfer = () => {
    if (!amount) {
      toast.error("Veuillez remplir tous les champs !");
      return;
    }

    setLoadingContent(<RotatingLines strokeColor="#fff" width="24" />);
    setTimeout(() => {
      setLoadingContent("Continuer");
      setDialogOpen(true);
      setAmount("");
    }, 100);
  };

  return (
    <motion.div
      className="p-6 rounded-2xl space-y-6 bg-gray-50 shadow-lg max-w-xl mx-auto border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-gray-">
        Envoyer de l'argent
      </h1>

      <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Envoyer à</p>
          <div className="flex space-x-2">
            <SelectDemoSend
              placeholder="Choisir un contact"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <Addnumber />
          </div>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-sm text-gray-600">Montant à envoyer</p>
          <input
            type="number"
            className="text-2xl text-center border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <BalanceDisponible />
          <Proposition onSelect={(val) => setAmount(val)} />
        </div>

        <div className="text-center pt-2">
          <Button
            className="w-full py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg"
            onClick={handleTransfer}
          >
            {loadingContent}
          </Button>
        </div>
      </div>

      <DialogDemo open={dialogOpen} onOpenChange={setDialogOpen} />
      <DrawerMoney tester={justTest} />
    </motion.div>

  );
};

export default EnvoyerArgent;


const BalanceDisponible = () => (
  <p className="text-sm text-gray-500">
    Balance disponible : <span className="font-semibold text-gray-700">1 000.00 FCFA</span>
  </p>
);

const Proposition = ({ onSelect }) => {
  const amounts = ["1 000", "5 000", "10 000", "25 000"];
  return (
    <div className="flex justify-center flex-wrap gap-2 pt-2">
      {amounts.map((amt) => (
        <button
          key={amt}
          className="border border-gray-300 px-4 py-2 rounded-full text-sm bg-gray-50 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition"
          onClick={() => onSelect(amt.replace(/\s/g, ""))}
        >
          {amt} FCFA
        </button>
      ))}
    </div>
  );
};

