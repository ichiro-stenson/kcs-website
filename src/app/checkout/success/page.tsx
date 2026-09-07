import Link from 'next/link'
import Stripe from 'stripe'

const PLAN_LABELS: Record<string, string> = {
  'recruiting-only': 'Recruiting Only',
  'accounting-only': 'Accounting Module',
  starter: 'Starter Ops',
  operator: 'Operator',
  command: 'Command',
}

export const metadata = {
  title: "You're in — King Capital Services",
  description: 'Your Mission Control account is set up. Check your email for your login link.',
}

export default async function CheckoutSuccessPage(props: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const searchParams = await props.searchParams
  const sessionId = searchParams.session_id

  let planLabel = ''
  let customerEmail = ''

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2026-08-26.dahlia' })
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      const planKey = session.metadata?.plan_key ?? ''
      planLabel = PLAN_LABELS[planKey] ?? planKey
      customerEmail = session.customer_details?.email ?? ''
    } catch {
      // Session fetch failed — show generic success, don't error the page
    }
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="min-h-[70vh] bg-navy-900 flex items-center justify-center py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-6">🎉</div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            You&apos;re in — check your email.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed mb-3">
            We&apos;ve set up your Mission Control account
            {planLabel && (
              <>
                {' '}on the{' '}
                <span className="text-amber-400 font-semibold">{planLabel}</span> plan
              </>
            )}.
          </p>

          <p className="text-navy-200 text-lg leading-relaxed mb-10">
            You&apos;ll receive a login link
            {customerEmail && (
              <> at <span className="text-amber-400">{customerEmail}</span></>
            )}{' '}
            within a few minutes. Click it to access your dashboard — no password needed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://kingcapital.services"
              className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
            >
              Back to King Capital Services
            </Link>
            <Link
              href="https://mc.kingcapitalgrp.com"
              className="border border-navy-500 hover:border-white text-white font-semibold px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
            >
              Open Mission Control
            </Link>
          </div>
        </div>
      </section>

      {/* ── What happens next ────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-navy-800 mb-8">What happens next</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { step: '1', title: 'Check your inbox', body: 'A magic login link is on its way from Mission Control. Click it — no password required.' },
              { step: '2', title: 'Set up your workspace', body: 'Connect your FedEx CSA code, invite your team, and explore your dashboard.' },
              { step: '3', title: 'Go live', body: 'Start running recruiting, onboarding, or operations modules — whatever your plan includes.' },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-3">
                <div className="shrink-0 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-navy-950 font-bold text-sm">
                  {step}
                </div>
                <div>
                  <p className="font-bold text-navy-800 text-sm mb-1">{title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
