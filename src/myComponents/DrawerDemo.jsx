"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { InputOTPDemo } from "./InputOTPDemo"

export function DrawerDemo({ tester }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(50)

    React.useEffect(() => {
        if (tester) {
            setOpen(true)
        }
    }, [tester])

    // const handleSliderChange = (newValue) => {
    //     setValue(newValue[0])
    // }

    // const handleInputChange = (e) => {
    //     const newValue = parseInt(e.target.value) || 0
    //     setValue(newValue)
    // }

    const handleSubmit = () => {
        console.log("Valeur sélectionnée :", value)
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
