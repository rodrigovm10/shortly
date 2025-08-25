'use client'

import QRCode from 'react-qr-code'
import { Copy, QrCodeIcon } from 'lucide-react'
import { Link } from '@/shared/types/database'
import { copyLink } from '../../utils/copy-link'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'

interface Props {
  link: Link
}

export function CopyLink({ link }: Props) {
  const qrCodeUrl = `${window.location.origin}/${link.short_code}`
  const handleCopy = () => {
    copyLink(link)
  }

  return (
    <Dialog>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <button className='cursor-pointer hover:opacity-70 transition-opacity '>
                <Copy size={14} />
              </button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy link</p>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={handleCopy}
            className='cursor-pointer'
          >
            <Copy size={14} /> Copy to clipboard
          </DropdownMenuItem>
          <DialogTrigger asChild>
            <DropdownMenuItem className='cursor-pointer'>
              <QrCodeIcon size={14} />
              Generate QR code
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col items-center justify-center  gap-4'>
          <QRCode
            value={qrCodeUrl}
            size={200}
            className='rounded-md shadow-md bg-muted p-4'
          />
          <p className='text-sm text-muted-foreground'>{qrCodeUrl}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
