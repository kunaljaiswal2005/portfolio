'use client'
import { workData } from '@/assets/assets'
import Link from 'next/link'
import React, { useState, useMemo } from 'react'

// ═══════════════════════════════════════════════════════════════
//  HOW TO ADD A NEW PROJECT  →  open assets/assets.js
//  Add an object to workData — see the template comment there
// ═══════════════════════════════════════════════════════════════

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

const STATUS_COLORS = {
  'Completed':   'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'In Progress': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Open Source': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
}

const ITEMS_PER_PAGE = 6

const Work = ({ isDarkMode }) => {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(workData.map(p => p.type).filter(Boolean)))],
    []
  )

  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')
  const [page,   setPage]   = useState(1)
  const [sortBy, setSortBy] = useState('default')

  const filtered = useMemo(() => {
    let list = active === 'All' ? workData : workData.filter(p => p.type === active)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
      )
    }
    if (sortBy === 'az') list = [...list].sort((a, b) => a.title.localeCompare(b.title))
    if (sortBy === 'za') list = [...list].sort((a, b) => b.title.localeCompare(a.title))
    return list
  }, [active, search, sortBy])

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paged      = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleFilter = cat => { setActive(cat); setPage(1) }
  const handleSearch = e   => { setSearch(e.target.value); setPage(1) }

  return (
    <div id="work" className="w-full px-[12%] py-16 scroll-mt-20">
      {/* Heading */}
      <p className="text-center text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2 font-Outfit">My portfolio</p>
      <h2 className="text-center text-5xl font-Ovo mb-4">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mb-10 font-Ovo text-gray-500 dark:text-white/60">
        A collection of projects showcasing my expertise in frontend &amp; full-stack development.
      </p>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                ${active === cat
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                  : 'border-gray-300 text-gray-500 hover:border-black hover:text-black dark:border-white/20 dark:text-white/60 dark:hover:border-white dark:hover:text-white'}`}
            >
              {cat}
              <span className="ml-1.5 text-[10px] opacity-60">
                ({cat === 'All' ? workData.length : workData.filter(p => p.type === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Search + Sort */}
        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-full border text-sm
            ${isDarkMode ? 'border-white/20 bg-white/5 text-white' : 'border-gray-200 bg-white text-gray-700'}`}>
            <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              value={search}
              onChange={handleSearch}
              placeholder="Search projects…"
              className="bg-transparent outline-none w-36 placeholder-gray-400 dark:placeholder-white/30"
            />
            {search && (
              <button onClick={() => { setSearch(''); setPage(1) }} className="opacity-40 hover:opacity-100 transition">✕</button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={e => { setSortBy(e.target.value); setPage(1) }}
            className={`text-sm px-3 py-2 rounded-full border outline-none cursor-pointer
              ${isDarkMode ? 'border-white/20 bg-white/5 text-white' : 'border-gray-200 bg-white text-gray-700'}`}
          >
            <option value="default">Default</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>
      </div>

      {/* Result count */}
      {search && (
        <p className="text-sm text-gray-400 dark:text-white/40 mb-5">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{search}"
        </p>
      )}

      {/* Grid */}
      {paged.length === 0 ? (
        <div className="text-center py-24 text-gray-400 dark:text-white/30">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-Ovo text-lg">No projects match your search.</p>
          <button
            onClick={() => { setSearch(''); setActive('All') }}
            className="mt-4 text-sm underline hover:opacity-70"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {paged.map((project, i) => (
            <div
              key={project.slug || i}
              className={`group flex flex-col rounded-2xl overflow-hidden border hover:-translate-y-1 transition-all duration-300
                ${isDarkMode
                  ? 'bg-[#1a0030] border-white/10 hover:border-white/30'
                  : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm hover:shadow-md'}`}
            >
              {/* Thumbnail — clicking goes to detail page */}
              <Link href={`/projects/${project.slug}`} className="block">
                <div
                  className="relative w-full h-48 bg-cover bg-center bg-no-repeat overflow-hidden"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium border border-white/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
                      View Case Study →
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.type && (
                      <span className="bg-black/60 text-white text-[11px] px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                        {project.type}
                      </span>
                    )}
                    {project.status && (
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium backdrop-blur-sm ${STATUS_COLORS[project.status] || ''}`}>
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <Link href={`/projects/${project.slug}`} className="hover:underline">
                  <h3 className="font-semibold text-base mb-1 dark:text-white">{project.title}</h3>
                </Link>
                <p className="text-sm text-gray-500 dark:text-white/50 mb-4 flex-1 line-clamp-2">{project.description}</p>

                {/* Tags */}
                {project.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium
                        ${isDarkMode ? 'bg-white/10 text-white/70' : 'bg-gray-100 text-gray-500'}`}>
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] text-gray-400 dark:text-white/30">+{project.tags.length - 4}</span>
                    )}
                  </div>
                )}

                {/* Footer row */}
                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-100 dark:border-white/10">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-purple-600 dark:text-purple-400 hover:underline">
                      {EXT_SVG} Live
                    </a>
                  ) : (
                    <span className="text-xs text-gray-300 dark:text-white/20">No live link</span>
                  )}

                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white transition">
                      {GITHUB_SVG} Code
                    </a>
                  )}

                  {/* Detail page link */}
                  {project.slug && (
                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto text-xs font-medium text-gray-400 dark:text-white/30 hover:text-black dark:hover:text-white transition"
                    >
                      Case Study →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 text-sm disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-white/10 transition"
          >
            ← Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-9 h-9 rounded-full text-sm transition
                ${n === page
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'border border-gray-300 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10'}`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-white/20 text-sm disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-white/10 transition"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}

export default Work
