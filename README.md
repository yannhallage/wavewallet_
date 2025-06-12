# 💸 Application de Portefeuille Mobile – Envoi, Réception, Rechargement

Cette application permet à un utilisateur de **gérer son portefeuille mobile** : envoyer de l'argent, recevoir des fonds, et recharger son compte via E-Recharge. Le projet est construit avec **React** côté client, et **Node.js + MongoDB** côté serveur.

---

## 🚀 Fonctionnalités principales

### 📤 1. Envoi d'argent

- Saisie du numéro du destinataire et du montant
- Validation côté frontend (montant minimum requis, format de numéro)
- Mise à jour du solde de l’expéditeur
- Enregistrement d’une transaction dans la base de données (type `"envoi"`)

### 📥 2. Réception d'argent

- Le destinataire reçoit une transaction avec son numéro
- Son solde est crédité automatiquement si nécessaire
- Une ligne de type `"reception"` est créée dans la base de données
- Ces données sont consultables via l’historique des transactions

### 💳 3. Rechargement de compte (E-Recharge)

- Choix d’une méthode de paiement (ex: E-Recharge)
- Saisie du montant
- Envoi d’une requête à l’API backend
- Crédit du compte et ajout d'une transaction `"rechargement"`

---

## 🖥️ Frontend – React

### Composants clés :

#### `RechargerAccount.jsx`

- Gère les étapes de rechargement : choix du mode de paiement, saisie du montant
- Utilise le contexte `DonneesInscription` pour récupérer le numéro utilisateur

#### `MethodRechargement.jsx`

- Permet de choisir une méthode de paiement (E-Recharge ou carte bancaire)
- Passe à l'étape suivante après sélection

#### `MethodPaymentAgree.jsx`

- Affiche le numéro de téléphone
- Permet de saisir un montant à recharger
- Envoie une requête `POST /api/recharge`

#### Liste des transactions

Affiche un historique :
- Si `type_transaction === "reception"` → affichage : `Reçu de [expéditeur]`
- Si `type_transaction === "envoi"` → affichage : `Envoyé à [destinataire]`
- Si `type_transaction === "rechargement"` → affichage : `Rechargé par E-recharge`

---

## 🔙 Backend – Node.js / Express / MongoDB

### 🔁 API pour le rechargement (`POST /api/recharge`)

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
