"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle
} from "@/components/ui/drawer"
import { InputOTPDemo } from "./InputOTPDemo"

export function DrawerMoney({ tester }) {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        if (tester) {
            setOpen(true)
        }
    }, [tester])

    const handleSubmit = () => {
        console.log("Code validé")
        setOpen(false)
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {/* Pas de bouton ici, déclencheur externe */}
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Connexion avec un code à usage unique</DrawerTitle>
                        <DrawerDescription>
                            Code envoyé a votre numéro.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="p-4 space-y-4 ml-11">
                        <InputOTPDemo />
                    </div>

                    <DrawerFooter>
                        <Button onClick={handleSubmit}>Valider</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Annuler</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
