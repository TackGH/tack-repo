import { NextResponse } from 'next/server'
import { execSync } from 'child_process'

export async function POST(req: Request) {
  try {
    const { q } = await req.json()
    if (!q || q.trim().length === 0) return NextResponse.json([])

    // Run qmd query with JSON output. Fallback to search if query fails.
    try {
      const out = execSync(`qmd query ${JSON.stringify(q)} -n 5 --json`, { encoding: 'utf8', stdio: ['pipe','pipe','ignore'] })
      const parsed = JSON.parse(out)
      return NextResponse.json(parsed)
    } catch (e) {
      // fallback to qmd search
      try {
        const out2 = execSync(`qmd search ${JSON.stringify(q)} -n 5 --json`, { encoding: 'utf8', stdio: ['pipe','pipe','ignore'] })
        const parsed2 = JSON.parse(out2)
        return NextResponse.json(parsed2)
      } catch (e2) {
        return NextResponse.json([])
      }
    }
  } catch (err) {
    return NextResponse.json([], { status: 500 })
  }
}
