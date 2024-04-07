import { useId } from 'react'
import clsx from 'clsx'
import ocmLogo from '@/images/back.png'
import ocmLogoTwo from '@/images/front.svg'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="h-8">
      <Image src={ocmLogoTwo} height={100} />
    </div>
  )
}
