# 💰 Rechargement de Compte avec E-Recharge

Cette fonctionnalité permet à un utilisateur de **sélectionner un mode de paiement** (comme E-recharge), d’**entrer un montant**, puis d’**effectuer un rechargement de son solde**. Elle est développée en **React (frontend)** et **Node.js / Express (backend)** avec une base de données **MongoDB**.

---

## 🔧 Technologies utilisées

- ⚛️ React (Frontend)
- 💾 MongoDB (Mongoose)
- 🔙 Node.js / Express (Backend API)
- 💳 E-Recharge (fictif pour démo)
- 🧪 react-hot-toast, react-loader-spinner, framer-motion

---

## 🚀 Fonctionnalité : Recharger son compte

### Étapes utilisateur :

1. **Choix de la méthode de paiement** (`MethodRechargement`)
2. **Saisie du montant** (`MethodPaymentAgree`)
3. **Validation et envoi de la demande au serveur**
4. **Réception d'une confirmation / erreur**

---

## 🖥️ Frontend – `RechargerAccount.jsx`

### ✅ Composants

#### `RechargerAccount`

- Récupère le numéro de téléphone via le contexte `DonneesInscription`
- Charge le composant `MethodRechargement` au départ
- Bascule ensuite vers `MethodPaymentAgree` une fois la méthode choisie

#### `MethodRechargement`

- Affiche les moyens de paiement disponibles (actuellement E-Recharge, MasterCard)
- Permet de sélectionner une méthode et de continuer

#### `MethodPaymentAgree`

- Affiche le numéro de l’utilisateur (pré-rempli)
- Permet de saisir un **montant** ou de cliquer sur un **montant prédéfini**
- Valide le formulaire et envoie une requête `POST` vers l'API `/api/recharge`

---

## 🧠 Backend – Exemple d’API recharge

### Route `POST /api/recharge`

```js
const UpdateServerRechargeAccount = async (req, res) => {
    try {
        const { numeroTel, montant } = req.body;
        const numTel = Number(numeroTel);
        const rechargeMontant = Number(montant);

        if (isNaN(numTel)) {
            return res.status(400).json({ message: "Le numéro doit être valide." });
        }

        if (isNaN(rechargeMontant) || rechargeMontant < 500) {
            return res.status(400).json({ message: "Le montant doit être supérieur ou égal à 500." });
        }

        const user = await AccountWave.findOne({ numeroTel: numTel });
        if (!user) {
            return res.status(404).json({ message: "Le compte n'existe pas." });
        }

        user.sold += rechargeMontant;
        await user.save();

        const dateTransaction = new Date();

        const rechargeTransaction = new ErechargeWave({
            numero_expediteur: "E-recharge",
            numero_destinataire: numTel,
            type_transaction: "rechargement",
            montant: rechargeMontant,
            dateTransaction,
        });

        await rechargeTransaction.save();

        return res.status(200).json({ message: "Recharge effectuée avec succès.", newSold: user.sold });
    } catch (error) {
        console.error("Erreur lors de la recharge de compte :", error);
        return res.status(500).json({ message: "Erreur interne serveur." });
    }
};
