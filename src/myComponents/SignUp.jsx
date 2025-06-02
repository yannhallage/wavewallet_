import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc"
import { Context } from "../context/authContext"
import { useContext } from "react"
import SignIn from "./signIn"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const SignUp = () => {
    const { setUtilisation_context } = useContext(Context)
    return (
        <>
            <motion.div
                className="w-1/2 flex justify-center items-center p-6 bg-white h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="cursor-pointer">
                    <Carousel className="cursor-pointer">
                        <CarouselPrevious />
                        {/* Tu peux aussi mettre ici les éléments à faire défiler */}
                    </Carousel>
                </div>

                <Card className="w-full max-w-md shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl text-[#1f1f1f]">
                            Creer votre compte d'Administrateur
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-4">
                        <Button variant="outline" className="w-full flex gap-2">
                            <FcGoogle className="text-xl" />
                            Se connecter avec Google
                        </Button>

                        <div className="flex items-center gap-4">
                            <Separator className="flex-1" />
                            <span className="text-sm text-muted-foreground">ou se connecter avec un email</span>
                            <Separator className="flex-1" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Nom</Label>
                            <Input id="text" placeholder="Nom" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Prenom</Label>
                            <Input id="text" placeholder="Prenom" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="votremail@example.com" />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password">Mot de passe</Label>
                                {/* <a href="#" className="text-sm text-muted-foreground hover:underline">Oublié ?</a> */}
                            </div>
                            <Input id="password" type="password" placeholder="Mot de passe" />
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4">
                        <Button className="w-full bg-[#FF6C37] hover:bg-[#e65c28] text-white font-semibold">
                            Se connecter
                        </Button>
                        <p className="text-sm text-muted-foreground text-center">
                            Vous avez deja compte ? <a href="#" className="hover:underline text-[#FF6C37]"
                                onClick={() => {
                                    setUtilisation_context(
                                        <SignIn />
                                    )
                                }}
                            >Connectez-vous</a>
                        </p>
                    </CardFooter>
                </Card>
            </motion.div>
        </>
    )
}
export default SignUp;