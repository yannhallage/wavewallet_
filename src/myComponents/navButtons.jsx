import { motion } from "framer-motion";

const navButtons = [
    {
        label: "Accueil",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.75L12 3l9 6.75v9.75A1.5 1.5 0 0 1 19.5 21H4.5A1.5 1.5 0 0 1 3 19.5V9.75z" />
            </svg>
        ),
    },
    {
        label: "Envoyer",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
        ),
    },
    {
        label: "Recharger",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.31 5.31l-2.12-2.12m-8.48 0l-2.12 2.12m12.72-12.72l-2.12 2.12m-8.48 0L5.69 4.69" />
            </svg>
        ),
    },
];

export function NavButtons() {
    return (
        <div className="flex space-x-4">
            {navButtons.map((btn, i) => (
                <motion.div
                    key={btn.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer backdrop-blur-md bg-white/10 hover:bg-white/20 text-gray-700 shadow-md transition"
                >
                    {btn.icon}
                    <span className="font-medium">{btn.label}</span>
                </motion.div>
            ))}
        </div>
    );
}
