'use client'

import { useState } from 'react'
import CheckoutModal from './CheckoutModal'

interface SoftwareTier {
  label: string
  price: string
  period: string
  description: string
  features: string[]
  priceId: string
  highlight?: boolean
}

const softwareTiers: SoftwareTier[] = [
  {
    label: 'Recruiting Only',
    price: '$199',
    period: '/terminal/mo',
    description: 'Self-managed version of our recruiting platform.',
    features: [
      'Apply form builder',
      'Applicant tracking',
      'Basic AI outreach tools',
      'Pipeline dashboard',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_RECRUITING_ONLY!,
  },
  {
    label: 'Starter Ops',
    price: '$299',
    period: '/terminal/mo',
    description: 'Recruiting + onboarding for growing operations.',
    features: [
      'Everything in Recruiting Only',
      'Onboarding Kanban',
      'Document collection',
      'Driver app access',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER!,
  },
  {
    label: 'Operator',
    price: '$549',
    period: '/terminal/mo',
    description: 'Full operations platform for serious ISP operators.',
    features: [
      'Everything in Starter Ops',
      'Operations Dashboard (DSW, DRO)',
      'Safety & Compliance module',
      'CEBS / Customer Case management',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_OPERATOR!,
    highlight: true,
  },
  {
    label: 'Command',
    price: '$899',
    period: '/terminal/mo',
    description: 'Complete platform for large multi-terminal operations.',
    features: [
      'Everything in Operator',
      'Multi-terminal enterprise view',
      'Advanced analytics',
      'Priority support + SLA',
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_COMMAND!,
  },
]

const ACCOUNTING_PRICE_ID = process.env.NEXT_PUBLIC_STRIPE_PRICE_ACCOUNTING_ONLY!

export default function SoftwareSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activePriceId, setActivePriceId] = useState('')
  const [activePlanLabel, setActivePlanLabel] = useState('')

  function openModal(priceId: string, planLabel: string) {
    setActivePriceId(priceId)
    setActivePlanLabel(planLabel)
    setModalOpen(true)
  }

  return (
    <>
      {/* ── Software Plans ───────────────────────────────── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-2">
              Software Plans
            </h2>
            <p className="text-gray-500">
              Prefer to run it yourself? Get access to Mission Control directly.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {softwareTiers.map((tier) => (
              <div
                key={tier.label}
                className={`bg-white rounded-xl border p-6 relative flex flex-col ${
                  tier.highlight
                    ? 'border-amber-500 shadow-md ring-1 ring-amber-500'
                    : 'border-gray-200'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                    {tier.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-navy-800">{tier.price}</span>
                    <span className="text-gray-400 text-xs">{tier.period}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">{tier.description}</p>
                </div>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(tier.priceId, tier.label)}
                  className={`block w-full text-center font-bold text-xs px-4 py-2.5 rounded transition-colors ${
                    tier.highlight
                      ? 'bg-amber-500 hover:bg-amber-400 text-navy-950'
                      : 'bg-navy-800 hover:bg-navy-700 text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Add-on */}
          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-1">
                Add-on · Available on any plan
              </p>
              <h3 className="text-lg font-bold text-navy-800">
                Accounting Module{' '}
                <span className="text-sm font-normal text-gray-500 ml-1">+$149/mo</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                FedEx ISP chart of accounts, GF statement import, driver settlement, and ISP-specific P&amp;L.
              </p>
            </div>
            <button
              onClick={() => openModal(ACCOUNTING_PRICE_ID, 'Accounting Module')}
              className="shrink-0 bg-navy-800 hover:bg-navy-700 text-white font-bold text-sm px-5 py-2.5 rounded transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {modalOpen && (
        <CheckoutModal
          priceId={activePriceId}
          planLabel={activePlanLabel}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  )
}
