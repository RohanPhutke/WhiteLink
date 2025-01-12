import { Button } from '@/app/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/app/components/ui/dialog'
import { CreateOrganization } from '@clerk/nextjs'
import { DialogTitle } from '@radix-ui/react-dialog'
import Image from 'next/image'

const EmptyOrg = () => {
  return (
    <div className='h-full flex flex-col items-center
    justify-center'>
        <Image
        src="/elements.svg"
        alt='empty'
        height={200}
        width={200}
        />
        <h2 className='text-2xl font-semibold mt-6'>
            Welcome to the Rohans Board
        </h2>
        <p className='text-muted-foreground text-sm mt-2'>
            Create an organization to get started
        </p>
        <div className='mt-6'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size="lg">
                        Create Organization
                    </Button>
                </DialogTrigger>
                <DialogContent className='p-2 bg-transparent border-none max-w-[446px]'>
                    <DialogTitle className="sr-only">Create Something!</DialogTitle>
                    <CreateOrganization/>
                </DialogContent>
            </Dialog>
        </div>
    </div>
  )
}

export default EmptyOrg