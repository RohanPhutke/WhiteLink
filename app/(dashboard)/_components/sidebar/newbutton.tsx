"use client"

import { Hint } from "@/app/components/hint"
import { Dialog,DialogContent,DialogTrigger,DialogTitle } from "@/app/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"
import { Plus } from "lucide-react"

const NewButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <div className="aspect-square">
                <Hint 
                label="Create Organization"
                side="right"
                align="start"
                sideOffset={18}
                >
                <button  className="bg-white/25 h-full w-full rounded-md flex
                 items-center justify-center opacity-60 hover:opacity-100 transition ">
                    <Plus className="text-white"/>
                </button>
                </Hint>
            </div>
        </DialogTrigger>
        <DialogContent className="p-2 bg-transparent border-none
        max-w-[446px]">
             <DialogTitle className="sr-only">Create Organization</DialogTitle>
            <CreateOrganization />
        </DialogContent>

    </Dialog>
  )
}

export default NewButton