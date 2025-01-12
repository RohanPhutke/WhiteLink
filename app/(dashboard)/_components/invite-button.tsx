import { Contact } from "lucide-react"
import { OrganizationProfile} from "@clerk/nextjs"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/app/components/ui/dialog"
import {Button} from '@/app/components/ui/button'


export const InviteButton = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">
                <Contact className="h-4 w-4 mr-2"/>
                Invite Members
            </Button>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent
        border-none max-w-[880px]">
            <DialogTitle className="sr-only">Invite Members</DialogTitle>
            <OrganizationProfile routing="hash"/>
        </DialogContent>
    </Dialog>
  )
}
