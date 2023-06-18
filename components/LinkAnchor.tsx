import Link from 'next/link'
import React from 'react'

type Props = {
    route: string,
    title: string
}

export default function LinkAnchor({route, title}: Props) {
  return (
    <Link href={route}>
        {title}
    </Link>
  )
}