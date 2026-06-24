import ATSSSvg from '@/assets/books/atss.svg?react'
import LionWomenSvg from '@/assets/books/lion-women.svg?react'
import MaliceSvg from '@/assets/books/malice.svg?react'

export function ATSS({ className = '' }: { className?: string }) {
  return <ATSSSvg className={className} />
}

export function LionWomen({ className = '' }: { className?: string }) {
  return <LionWomenSvg className={className} />
}

export function Malice({ className = '' }: { className?: string }) {
  return <MaliceSvg className={className} />
}
