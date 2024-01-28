'use client'
import { CommonProps } from '@/@types/common'
import React, { useState } from 'react'

interface PartnersProps extends CommonProps {
  works: any
}

const Partners = ({ works }: PartnersProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }
  return (
    <section>
      <h2 className="font-tobias text-[64px] leading-none">Who We Work With</h2>

      <ul className="mt-20 space-y-2 md:mt-[160px] md:space-y-0 lg:mt-[244px]">
        {works.map((work: any, index: number) => (
          <li key={work._id}>
            <div
              className="group relative flex w-full flex-col gap-y-2 py-1.5 text-current no-underline transition-opacity will-change-auto lg:flex-row lg:justify-between"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                opacity: hoveredIndex === null || hoveredIndex === index ? '1' : '.5',
              }}
            >
              <a target="_blank" rel="noopener noreferrer" href={work.projectLink} className="absolute inset-0">
                &nbsp;
              </a>
              <div className="flex flex-col gap-y-1 md:flex-row md:items-center">
                <span className="inline-block min-w-[285px]">{work.title}</span>

                <ul className="flex flex-wrap items-center gap-2">
                  {work.tags.map((tag: any) => (
                    <li key={tag.name} className="inline-block rounded-full border border-current px-2 py-0.5 text-xs ">
                      {tag.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-1/4 items-center transition-opacity will-change-auto group-hover:opacity-100 lg:justify-between lg:opacity-0">
                <span className="whitespace-nowrap text-xs font-medium md:text-sm">Visit Site</span>
                <span className="hidden lg:ml-[192px] lg:inline-block">
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.000149012 7.54553L15.8687 7.54553" stroke="#FAFAFA" strokeWidth="1.5" />
                    <path d="M9.45424 0.999987L15.9998 7.54553L9.45424 14.0911" stroke="#FAFAFA" strokeWidth="1.5" />
                  </svg>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Partners
