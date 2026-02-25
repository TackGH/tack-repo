"use client"
import React, { useState } from 'react'

export default function SearchClient() {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  async function runSearch(e?: React.FormEvent) {
    if (e) e.preventDefault()
    if (!q || q.trim().length === 0) return
    setLoading(true)
    try {
      const res = await fetch('/api/search', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ q }) })
      const data = await res.json()
      setResults(Array.isArray(data) ? data : [])
    } catch (err) {
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form onSubmit={runSearch} className="mt-3 flex gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." className="flex-1 border px-3 py-2 rounded" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{loading ? 'Searching...' : 'Search'}</button>
      </form>

      <div className="mt-4">
        {results.length === 0 && !loading && <div className="text-gray-600">No results</div>}
        {results.length > 0 && (
          <ul>
            {results.map((r, i) => (
              <li key={i} className="mb-3 p-2 border rounded">
                <div className="text-sm text-gray-500">{r.file}</div>
                <div className="font-medium">{r.title}</div>
                <div className="text-sm text-gray-700">{r.snippet}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
