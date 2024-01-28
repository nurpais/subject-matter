'use client'
import { CommonProps } from '@/@types/common'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// green: '#397C49',
// pink: '#F090A1',
// blue: '#007E94',
// yellow: '#D6DE31',
// orange: '#F26135',

type Tags = { name: string }

interface WorkCardProps extends CommonProps {
  title: string
  desc: string
  tags: Tags[]
  img: string
  link: string
  color?: string
}

const isUrl = (string: string) => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i',
  )

  return !!urlPattern.test(string)
}

const WorkCard = (props: WorkCardProps) => {
  const { title, tags, img, link, desc, color = '#F26135' } = props

  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-[10px] border border-dark p-2.5 md:p-5">
      {/* Circles */}
      <div
        aria-hidden="true"
        className="absolute right-3 top-4 z-10 h-6 w-6 rounded-[60px] transition-all duration-200 ease-in-out will-change-auto group-hover:right-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:rounded-[10px] md:right-5 md:top-5"
        style={{ backgroundColor: color }}
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
          <span key={tag.name} className="rounded-full border border-dark px-2 py-1 text-xs">
            {tag.name}
          </span>
        ))}
      </div>

      <Image
        src={img}
        width="1000"
        height="1000"
        alt={title}
        className="relative z-20 w-full flex-1 object-cover transition-transform group-hover:scale-75"
      />

      <p className="mt-4 text-sm">{desc}</p>

      <p className="absolute bottom-5 left-5 z-20 opacity-0 transition-opacity group-hover:opacity-100 group-hover:delay-100">
        {isUrl(link) ? 'Visit' : 'View project'}
      </p>

      {isUrl(link) ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 block">
          &nbsp;
        </a>
      ) : (
        <Link href={link} className="absolute inset-0 z-20 block">
          &nbsp;
        </Link>
      )}
    </div>
  )
}

export default WorkCard
