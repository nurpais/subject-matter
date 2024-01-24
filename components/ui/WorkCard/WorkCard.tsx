'use client'
import { CommonProps } from '@/@types/common'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Colors = 'green' | 'pink' | 'blue' | 'yellow' | 'orange'

interface WorkCardProps extends CommonProps {
  title: string
  desc: string
  tags: string[]
  img: string
  link: string
  color?: Colors
}

const WorkCard = (props: WorkCardProps) => {
  const { title, tags, img, link, desc, color = 'orange' } = props

  const bgColor = () => {
    let colors = {
      green: '#397C49',
      pink: '#F090A1',
      blue: '#007E94',
      yellow: '#D6DE31',
      orange: '#F26135',
    }
    return colors[color]
  }

  return (
    <div className="group relative overflow-hidden rounded-[10px] border border-dark p-2.5 md:p-5">
      {/* Circles */}
      <div
        aria-hidden="true"
        className="absolute right-3 top-4 z-10 h-6 w-6 rounded-[60px] transition-all duration-200 ease-in-out group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:rounded-[10px] md:right-5 md:top-5"
        style={{ backgroundColor: bgColor() }}
      ></div>
      <div
        aria-hidden="true"
        className="absolute right-3 top-4 z-20 h-6 w-6 rounded-full bg-dark opacity-0 transition-opacity group-hover:opacity-100 md:right-5 md:top-5"
      ></div>

      {/* Heading */}
      <h2 className="relative z-20 mb-12 font-tobias text-[35px] font-light leading-none tracking-[-0.35px] md:text-[45px] md:tracking-[-0.45px]">
        {title}
      </h2>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-[5px] md:gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-dark px-2 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>

      <Image
        src={img}
        width="1000"
        height="1000"
        alt={title}
        className="relative z-20 w-full transition-transform group-hover:scale-75"
      />

      <p className="mt-4 text-sm">{desc}</p>

      <p className="absolute bottom-5 left-5 z-20 opacity-0 transition-opacity group-hover:opacity-100 group-hover:delay-100">
        View project
      </p>

      <Link href={link} className="absolute inset-0 z-20 block">
        &nbsp;
      </Link>
    </div>
  )
}

export default WorkCard
