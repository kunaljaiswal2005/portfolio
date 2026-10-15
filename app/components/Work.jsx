'use client'
import { workData } from '@/assets/assets'
import Link from 'next/link'
import React, { useState, useMemo } from 'react'

// ═══════════════════════════════════════════════════════════════
//  HOW TO ADD A NEW PROJECT  →  open assets/assets.js
//  Add an object to workData — see the template comment there
// ═══════════════════════════════════════════════════════════════

const INITIAL_SHOW = 4

const TYPE_COLORS = {
  'Full Stack': 'bg-black text-white',
  'Frontend':   'bg-black text-white',
  'Backend':    'bg-black text-white',
}

const STATUS_COLORS = {
  'Completed':   'bg-green-100 text-green-700',
  'In Progress': 'bg-amber-100 text-amber-700',
  'Ongoing':     'bg-amber-100 text-amber-700',
  'Open Source': 'bg-blue-100 text-blue-700',
}

const EXT_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const GITHUB_SVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const Work = ({ isDarkMode }) => {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(workData.map(p => p.type).filter(Boolean)))],
    []
  )

  const [active,  setActive]  = useState('All')
  const [visible, setVisible] = useState(INITIAL_SHOW)

  const filtered = useMemo(() => {
    return active === 'All' ? workData : workData.filter(p => p.type === active)
  }, [active])

  const shown    = filtered.slice(0, visible)
  const remaining = filtered.length - visible

  const handleFilter = cat => {
    setActive(cat)
    setVisible(INITIAL_SHOW)
  }

  return (
    <div id="work" className="w-full px-[8%] py-20 scroll-mt-20">

      {/* ── Section number + heading */}
      <div className="mb-12">
        <p className={`text-sm font-mono mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>01</p>
        <h2 className={`text-4xl font-bold tracking-tight uppercase mb-0 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Featured Works
        </h2>
        <div className={`mt-3 h-px w-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
      </div>

      {/* ── Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(cat => {
          const count = cat === 'All' ? workData.length : workData.filter(p => p.type === cat).length
          return (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-4 py-1.5 text-sm font-medium border transition-all duration-200
                ${active === cat
                  ? isDarkMode
                    ? 'bg-white text-black border-white'
                    : 'bg-black text-white border-black'
                  : isDarkMode
                    ? 'border-white/20 text-white/50 hover:border-white/60 hover:text-white/80'
                    : 'border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700'
                }`}
            >
              {cat} ({count})
            </button>
          )
        })}
      </div>

      {/* ── Project list */}
      <div className="flex flex-col gap-0">
        {shown.map((project, i) => (
          <div
            key={project.slug || i}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 py-14 border-b
              ${isDarkMode ? 'border-white/10' : 'border-gray-200'}
              ${i === 0 ? `border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}` : ''}`}
          >
            {/* ── Left: text */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {project.type && (
                  <span className={`text-xs font-bold px-3 py-1 uppercase tracking-wider ${TYPE_COLORS[project.type] || 'bg-black text-white'}`}>
                    {project.type}
                  </span>
                )}
                {project.status && (
                  <span className={`text-xs font-semibold px-3 py-1 ${STATUS_COLORS[project.status] || 'bg-gray-100 text-gray-600'}`}>
                    {project.status}
                  </span>
                )}
              </div>

              {/* Title */}
              <Link href={project.slug ? `/projects/${project.slug}` : '#'}>
                <h3 className={`text-2xl font-bold mb-4 leading-snug hover:opacity-70 transition-opacity
                  ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
              </Link>

              {/* Description */}
              <p className={`text-sm leading-relaxed mb-6 ${isDarkMode ? 'text-white/55' : 'text-gray-500'}`}>
                {project.description}
              </p>

              {/* Highlight quote block */}
              {project.highlight && (
                <div className={`border-l-4 border-blue-500 pl-4 mb-6`}>
                  <p className={`text-sm font-mono leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-gray-500'}`}>
                    {project.highlight}
                  </p>
                </div>
              )}

              {/* Tags */}
              {project.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 font-medium uppercase tracking-wide
                        ${isDarkMode ? 'bg-white/10 text-white/60' : 'bg-gray-100 text-gray-500'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {project.slug && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all
                      ${isDarkMode
                        ? 'bg-white text-black hover:bg-white/90'
                        : 'bg-black text-white hover:bg-gray-800'}`}
                  >
                    Case Study
                  </Link>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all
                      ${isDarkMode
                        ? 'border-white/30 text-white hover:border-white'
                        : 'border-gray-300 text-gray-600 hover:border-gray-600'}`}
                  >
                    {EXT_SVG} Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-medium transition-opacity opacity-60 hover:opacity-100
                      ${isDarkMode ? 'text-white' : 'text-gray-600'}`}
                  >
                    {GITHUB_SVG} GitHub
                  </a>
                )}
              </div>
            </div>

            {/* ── Right: screenshot */}
            {project.bgImage && (
              <div className="lg:w-[48%] flex-shrink-0">
                <Link href={project.slug ? `/projects/${project.slug}` : '#'}>
                  <div
                    className={`relative w-full aspect-video overflow-hidden border group
                      ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.bgImage})` }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity border border-white px-4 py-2">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Load More button */}
      {remaining > 0 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisible(v => v + INITIAL_SHOW)}
            className={`flex items-center gap-3 px-10 py-4 text-sm font-bold uppercase tracking-widest border transition-all duration-200
              ${isDarkMode
                ? 'border-white/30 text-white hover:bg-white hover:text-black'
                : 'border-gray-400 text-gray-700 hover:bg-black hover:text-white hover:border-black'}`}
          >
            Load More ({remaining} remaining)
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default Work
