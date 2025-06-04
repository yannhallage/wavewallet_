import { SelectDemo } from "../../myComponents/SelectDemo";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from 'react-hot-toast';
// import { toast } from "sonner"; // Ou ton système de toast
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
      className="p-6 rounded-lg space-y-6 bg-gray-50 shadow-md max-w-xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl font-semibold text-gray-800 text-center">
        Envoyer de l'argent
      </h1>

      <div className="space-y-6 rounded-md border bg-white p-6 shadow-sm">
        
        <div className="flex justify-center items-center space-x-4">
        
          {/* <span className="text-sm text-gray-500">à</span> */}
          <div className="w-1/2 flex space-x-2">
            <SelectDemoSend
              placeholder="Vers"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <Addnumber />
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">Entrer le montant</p>
          <input
            type="number"
            className="text-2xl text-center border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <BalanceDisponible />
          <Proposition onSelect={(val) => setAmount(val)} />
        </div>

        {/* Bouton */}
        <div className="text-center">
          <Button
            className="w-full py-4 font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
            onClick={handleTransfer}
          >
            {loadingContent}
          </Button>
        </div>
      </div>

      {/* Dialog + Drawer */}
      <DialogDemo open={dialogOpen} onOpenChange={setDialogOpen} />
      <DrawerMoney tester={justTest} />
    </motion.div>
  );
};

export default EnvoyerArgent;

// ----------------------

const BalanceDisponible = () => (
  <p className="text-sm text-gray-600">Balance disponible : 1000.00</p>
);

const Proposition = ({ onSelect }) => {
  const amounts = ["1000", "5000", "10000", "25000"];
  return (
    <div className="flex justify-center flex-wrap gap-2 pt-2">
      {amounts.map((amt) => (
        <button
          key={amt}
          className="border px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition"
          onClick={() => onSelect(amt)}
        >
          {amt}
        </button>
      ))}
    </div>
  );
};
