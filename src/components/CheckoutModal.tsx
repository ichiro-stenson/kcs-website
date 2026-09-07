'use client'

import { useState, useEffect } from 'react'

interface Props {
  priceId: string
  planLabel: string
  onClose: () => void
}

const TERMINAL_OPTIONS = ['1', '2–3', '4–5', '6+']

export default function CheckoutModal({ priceId, planLabel, onClose }: Props) {
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [email, setEmail] = useState('')
  const [csaCodes, setCsaCodes] = useState('')
  const [terminalCount, setTerminalCount] = useState('1')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, companyName, contactName, email, csaCodes, terminalCount }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        setError(data.error ?? 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      window.location.href = data.url
    } catch {
      setError('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-navy-900 rounded-t-2xl px-6 py-5 flex items-start justify-between">
          <div>
            <p className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-0.5">
              {planLabel}
            </p>
            <h2 id="checkout-modal-title" className="text-white text-xl font-bold">
              Get started with Mission Control
            </h2>
            <p className="text-navy-300 text-sm mt-1">
              Fill in your info — we&apos;ll set up your account and send you a login link.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 shrink-0 text-navy-400 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1" htmlFor="co-name">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id="co-name"
              type="text"
              required
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              placeholder="Stenson Transport LLC"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
            />
          </div>

          {/* Your Name */}
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1" htmlFor="contact-name">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={contactName}
              onChange={e => setContactName(e.target.value)}
              placeholder="Josh Stenson"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="josh@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
            />
          </div>

          {/* FedEx CSA Codes */}
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1" htmlFor="csa-codes">
              FedEx CSA Code(s){' '}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              id="csa-codes"
              type="text"
              value={csaCodes}
              onChange={e => setCsaCodes(e.target.value)}
              placeholder="e.g. 309059, 310011"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
            />
            <p className="text-xs text-gray-400 mt-1">
              Find your CSA code in PowerSuite. Separate multiple codes with commas.
            </p>
          </div>

          {/* Number of Terminals */}
          <div>
            <label className="block text-sm font-semibold text-navy-800 mb-1" htmlFor="terminals">
              Number of Terminals
            </label>
            <select
              id="terminals"
              value={terminalCount}
              onChange={e => setTerminalCount(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent bg-white"
            >
              {TERMINAL_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-amber-300 text-navy-950 font-bold text-sm px-6 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Setting up checkout…
              </>
            ) : (
              'Continue to Payment →'
            )}
          </button>

          <p className="text-center text-xs text-gray-400">
            Secured by Stripe · Cancel anytime · No contracts
          </p>
        </form>
      </div>
    </div>
  )
}
