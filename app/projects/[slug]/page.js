'use client'
import { workData } from '@/assets/assets'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// ── icons ──────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15,3 21,3 21,9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0 text-green-500">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 text-amber-500">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 text-purple-500">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

// Status badge color
const STATUS_COLORS = {
  'Completed':    'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'In Progress':  'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  'Open Source':  'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
}

// ── Lightbox ─────────────────────────────────────────────────────
const Lightbox = ({ src, onClose }) => (
  <div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <button
      onClick={onClose}
      className="absolute top-5 right-5 text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
    >
      ✕
    </button>
    <img
      src={src}
      alt="screenshot"
      className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
      onClick={e => e.stopPropagation()}
    />
  </div>
)

// ── Section block ─────────────────────────────────────────────────
const Section = ({ title, icon, children }) => (
  <div>
    <h2 className="flex items-center gap-2 text-xl font-Ovo font-semibold mb-4 dark:text-white">
      {icon} {title}
    </h2>
    {children}
  </div>
)

// ── Bullet list ───────────────────────────────────────────────────
const BulletList = ({ items, icon }) => (
  <ul className="flex flex-col gap-3">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-white/70 text-sm leading-relaxed">
        {icon}
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

// ─────────────────────────────────────────────────────────────────
export default function ProjectDetailPage() {
  const { slug }  = useParams()
  const router    = useRouter()
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const project = workData.find(p => p.slug === slug)

  // Find prev / next projects
  const idx  = workData.findIndex(p => p.slug === slug)
  const prev = idx > 0                  ? workData[idx - 1] : null
  const next = idx < workData.length - 1 ? workData[idx + 1] : null

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 dark:bg-darkTheme dark:text-white">
        <p className="text-5xl">🔍</p>
        <h1 className="text-2xl font-Ovo">Project not found</h1>
        <Link href="/#work" className="text-sm underline hover:opacity-70">← Back to portfolio</Link>
      </div>
    )
  }

  const descriptions = Array.isArray(project.longDescription)
    ? project.longDescription
    : project.longDescription
      ? [project.longDescription]
      : [project.description]

  // All screenshots: hero + extras
  const allScreenshots = [project.bgImage, ...(project.screenshots || [])].filter(Boolean)

  return (
    <div className="min-h-screen dark:bg-darkTheme dark:text-white">
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}

      {/* ── Hero banner ─────────────────────────────────────────── */}
      <div className="relative w-full h-72 sm:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${project.bgImage})` }}>
        <div className="absolute inset-0 bg-black/60" />

        {/* Back button */}
        <Link
          href="/#work"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-sm transition bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft /> Back to Work
        </Link>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-[12%] pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.type && (
              <span className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                {project.type}
              </span>
            )}
            {project.status && (
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${STATUS_COLORS[project.status] || 'bg-gray-100 text-gray-600'}`}>
                {project.status}
              </span>
            )}
            {project.duration && (
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70">
                ⏱ {project.duration}
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-Ovo text-white font-semibold drop-shadow-md">
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="px-6 sm:px-[12%] py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left col — main detail */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags?.map(tag => (
                <span key={tag} className="text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/60">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <Section title="About This Project" icon="📌">
              <div className="flex flex-col gap-4">
                {descriptions.map((para, i) => (
                  <p key={i} className="text-gray-600 dark:text-white/70 leading-relaxed text-sm">
                    {para}
                  </p>
                ))}
              </div>
            </Section>

            {/* Features */}
            {project.features?.length > 0 && (
              <Section title="Key Features" icon="✨">
                <BulletList items={project.features} icon={<CheckIcon />} />
              </Section>
            )}

            {/* Challenges */}
            {project.challenges?.length > 0 && (
              <Section title="Challenges Faced" icon="⚡">
                <BulletList items={project.challenges} icon={<LightningIcon />} />
              </Section>
            )}

            {/* Learnings */}
            {project.learnings?.length > 0 && (
              <Section title="What I Learned" icon="🎓">
                <BulletList items={project.learnings} icon={<StarIcon />} />
              </Section>
            )}

            {/* Screenshots */}
            {allScreenshots.length > 1 && (
              <Section title="Screenshots" icon="🖼️">
                <div className="grid grid-cols-2 gap-4">
                  {allScreenshots.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxSrc(src)}
                      className="relative aspect-video rounded-xl overflow-hidden cursor-zoom-in group border border-gray-100 dark:border-white/10"
                    >
                      <img src={src} alt={`screenshot ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition bg-black/50 px-3 py-1 rounded-full">
                          Click to expand
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </div>

          {/* Right col — sidebar */}
          <div className="flex flex-col gap-6">

            {/* Action buttons */}
            <div className="flex flex-col gap-3 p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-white/40 uppercase tracking-widest mb-1">Links</h3>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  <ExternalIcon /> View Live
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-100 dark:bg-white/5 text-gray-400 text-sm rounded-xl cursor-not-allowed">
                  No live link yet
                </div>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 dark:border-white/10 text-sm font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition dark:text-white"
                >
                  <GithubIcon /> View on GitHub
                </a>
              )}
            </div>

            {/* Project meta */}
            <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-white/40 uppercase tracking-widest mb-4">Project Info</h3>
              <dl className="flex flex-col gap-3 text-sm">
                {project.type && (
                  <div className="flex justify-between">
                    <dt className="text-gray-400 dark:text-white/40">Category</dt>
                    <dd className="font-medium dark:text-white">{project.type}</dd>
                  </div>
                )}
                {project.duration && (
                  <div className="flex justify-between">
                    <dt className="text-gray-400 dark:text-white/40">Duration</dt>
                    <dd className="font-medium dark:text-white">{project.duration}</dd>
                  </div>
                )}
                {project.status && (
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-400 dark:text-white/40">Status</dt>
                    <dd>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${STATUS_COLORS[project.status] || ''}`}>
                        {project.status}
                      </span>
                    </dd>
                  </div>
                )}
                {project.tags?.length > 0 && (
                  <div className="pt-2 border-t border-gray-100 dark:border-white/10">
                    <dt className="text-gray-400 dark:text-white/40 mb-2">Tech Stack</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {project.tags.map(t => (
                        <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/60">
                          {t}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Share */}
            <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-white/40 uppercase tracking-widest mb-3">Share</h3>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Link copied!')
                }}
                className="w-full py-2.5 text-sm border border-gray-200 dark:border-white/10 rounded-xl hover:bg-gray-50 dark:hover:bg-white/10 transition dark:text-white flex items-center justify-center gap-2"
              >
                🔗 Copy Link
              </button>
            </div>
          </div>
        </div>

        {/* ── Prev / Next navigation ──────────────────────────── */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white transition"
            >
              <span className="text-xs text-gray-400 dark:text-white/40 flex items-center gap-1"><ArrowLeft /> Previous</span>
              <span className="text-sm font-medium dark:text-white group-hover:underline line-clamp-1">{prev.title}</span>
            </Link>
          ) : <div />}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white transition text-right ml-auto w-full"
            >
              <span className="text-xs text-gray-400 dark:text-white/40 flex items-center gap-1 justify-end">Next →</span>
              <span className="text-sm font-medium dark:text-white group-hover:underline line-clamp-1">{next.title}</span>
            </Link>
          ) : <div />}
        </div>

        {/* Back to all projects */}
        <div className="flex justify-center mt-10">
          <Link
            href="/#work"
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-white/50 hover:text-black dark:hover:text-white transition"
          >
            <ArrowLeft /> All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}
