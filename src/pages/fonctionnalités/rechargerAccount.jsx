import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const RechargerAccount = () => {
    const [changementDeComposent, setChangementDeComposent] = useState(
        <MethodRechargement
        />
    )
    return (
        <>
            {changementDeComposent}
        </>
    )
}

export default RechargerAccount;

const MethodRechargement = () => {
    return (
        <>
            <motion.div
                className="p-6 rounded-2xl space-y-6 bg-gray-50 shadow-lg max-w-xl mx-auto border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex">
                    <div className="">
                        <h1 className="text-xl font-bold text-gray-800">
                            Mehtode de payment
                        </h1>
                    </div>
                </div>

                <div className="space-y-4 rounded-xl bg-white p-6 shadow-sm">
                    <div className="space-x-4 cursor-pointer transition delay-150 duration-300 ease-in-out hover:border-blue-600 flex rounded-xl p-4 border">
                        <div className="mt-5">
                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT"
                                alt=""
                                width={70}
                                height={70}
                                srcset=""
                                className="border p-3 rounded-md"
                            />
                        </div>
                        <div className="">
                            <div className="text-[20px]">
                                Visa ending with 3443
                            </div>
                            <div className="text-[15px]">
                                <span>
                                    More than 3445B of cloud space
                                </span>
                            </div>
                            <div className="text-[15px] text-blue-600">
                                <span>
                                    Default card
                                </span>
                            </div>
                        </div>
                        {/* <div className="float-end">
                            <span>
                                hhs
                            </span>
                        </div> */}
                    </div>
                    <div className="space-x-4 cursor-pointer transition delay-150 duration-300 ease-in-out hover:border-blue-600 flex rounded-xl p-4 border">
                        <div className="mt-5">
                            <img src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg"
                                alt=""
                                width={70}
                                height={70}
                                srcset=""
                                className="border p-3 rounded-md"
                            />
                        </div>
                        <div className="">
                            <div className="text-[20px]">
                                Visa ending with 3443
                            </div>
                            <div className="text-[15px]">
                                <span>
                                    More than 3445B of cloud space
                                </span>
                            </div>
                            <div className="text-[15px] text-blue-600">
                                <span>
                                    Default card
                                </span>
                            </div>
                        </div>
                        {/* <div className="float-end">
                            <span>
                                hhs
                            </span>
                        </div> */}
                    </div>

                    <div className="text-center pt-2">
                        <Button
                            className="w-full py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg"
                        >
                        </Button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

const MethoPaymentAgree = () => {
    return (
        <>
            <motion.div
                className="p-6 rounded-2xl space-y-6 bg-gray-50 shadow-lg max-w-xl mx-auto border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-2xl font-bold text-gray-800 text-center">
                    Payments with this mehtod
                </h1>

                <div className="space-y-6 rounded-xl bg-white p-6 shadow-sm">
                    <div className="space-y-2">
                        <p className="text-sm text-gray-600">Envoyer à</p>
                        <div className="flex space-x-2">

                        </div>
                    </div>

                    <div className="space-y-4 text-center">
                        <p className="text-sm text-gray-600">Montant à envoyer</p>

                    </div>

                    <div className="text-center pt-2">
                        <Button
                            className="w-full py-4 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg"
                        >
                        </Button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}