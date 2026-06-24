import ATSSSvg from '@/assets/books/atss.svg'
import LionWomenSvg from '@/assets/books/lion-women.svg'
import MaliceSvg from '@/assets/books/malice.svg'

export function ATSS({ className = '' }: { className?: string }) {
  return <ATSSSvg className={className} />
}

export function LionWomen({ className = '' }: { className?: string }) {
  return <LionWomenSvg className={className} />
}

export function Malice({ className = '' }: { className?: string }) {
  return <MaliceSvg className={className} />
}
