import Link from 'next/link'
import React from 'react'

const ClassesPage = () => {
  return (
    <>
        <div>Classes Page 101,102,103</div>
        <Link href={'/classes/101'}> Class 101 </Link>
        <Link href={'/classes/102'}> Class 102 </Link>
        <Link href={'/classes/103'}> Class 103 </Link>
    </>
  )
}

export default ClassesPage