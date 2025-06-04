import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { DonneesInscription } from "../context/authContext"

export function SelectDemoSend() {
    const { ajouterNumero } = React.useContext(DonneesInscription)

    React.useEffect(() => {
        console.log(ajouterNumero)
    }, [ajouterNumero])
    return (
        <Select>
            <SelectTrigger className="w-[400px]">
                <SelectValue placeholder="Numéro" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Numero de téléphone</SelectLabel>
                    {
                        ajouterNumero.length ? ajouterNumero.map((item, index) => {
                            return (
                                <SelectItem value={index}>{item}</SelectItem>
                            )
                        }) : (
                            <span className="text-[15px] ml-[110px] text-[#ccc]">
                                aucun numero
                            </span>
                        )
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
