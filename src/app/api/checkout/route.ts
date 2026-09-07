import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-08-26.dahlia' })
}

const PRICE_TO_PLAN: Record<string, string> = {
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_RECRUITING_ONLY ?? '']: 'recruiting-only',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_ACCOUNTING_ONLY ?? '']: 'accounting-only',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER ?? '']: 'starter',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_OPERATOR ?? '']: 'operator',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_COMMAND ?? '']: 'command',
}

function getPlanKeyFromPriceId(priceId: string): string {
  return PRICE_TO_PLAN[priceId] ?? 'starter'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { priceId, companyName, contactName, email, csaCodes, terminalCount } = body

    if (!priceId || !companyName || !contactName || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const stripe = getStripe()
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kingcapital.services'

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: {
        company_name: companyName,
        contact_name: contactName,
        csa_codes: csaCodes ?? '',
        terminal_count: String(terminalCount ?? '1'),
        plan_key: getPlanKeyFromPriceId(priceId),
      },
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[api/checkout] Error creating session:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
