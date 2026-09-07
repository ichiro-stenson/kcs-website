import Link from 'next/link'

export const metadata = {
  title: 'Checkout Cancelled — King Capital Services',
}

export default function CheckoutCancelPage() {
  return (
    <section className="min-h-[70vh] bg-navy-900 flex items-center justify-center py-20">
      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <div className="text-5xl mb-6">👋</div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          No worries — your spot is still here.
        </h1>

        <p className="text-navy-200 text-lg leading-relaxed mb-10">
          Whenever you&apos;re ready, just head back to the pricing page and pick up where you left off.
          Nothing was charged.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/pricing"
            className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
          >
            Back to Pricing
          </Link>
          <a
            href="mailto:josh@kingcapitalgrp.com?subject=Question about Mission Control pricing"
            className="border border-navy-500 hover:border-white text-white font-semibold px-8 py-3 rounded transition-colors w-full sm:w-auto text-center"
          >
            Talk to Josh
          </a>
        </div>
      </div>
    </section>
  )
}
