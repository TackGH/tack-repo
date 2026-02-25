import React from 'react'
import SearchClient from './components/SearchClient'

export const metadata = {
  title: 'Mission Control',
}

const jobs = [
  { name: 'Support Crawl', status: 'Idle', lastRun: 'Today 13:45', action: 'Run' },
  { name: 'QMD Update', status: 'Completed', lastRun: 'Today 13:50', action: 'Run' },
  { name: 'Codex Sync', status: 'Waiting', lastRun: 'Pending key', action: 'Setup' },
]

const tasks = [
  'Review latest Tack product crawl',
  'Draft marketing snippet for Tack GPS Plus',
  'Plan heartbeat automation checklist',
]

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="bg-slate-800 border-b border-slate-700 px-8 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">Mission</p>
          <h1 className="text-2xl font-semibold">Tack Operations Dashboard</h1>
        </div>
        <div className="flex gap-4 items-center text-sm text-slate-300">
          <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Heartbeat OK</div>
          <div className="px-3 py-1 rounded-full bg-slate-700 text-xs">Model: gpt-5-mini</div>
        </div>
      </div>

      <div className="grid grid-cols-[260px_auto_320px] gap-6 px-8 py-6">
        <aside className="bg-slate-850 rounded-2xl p-5 border border-slate-700">
          <h2 className="text-sm uppercase tracking-wide text-slate-400">Navigation</h2>
          <nav className="mt-4 space-y-3 text-slate-200 text-sm">
            <a className="flex items-center gap-2 hover:text-white" href="#">Dashboard</a>
            <a className="flex items-center gap-2 hover:text-white" href="/files/">Knowledge</a>
            <a className="flex items-center gap-2 hover:text-white" href="#jobs">Jobs</a>
            <a className="flex items-center gap-2 hover:text-white" href="#tasks">Tasks</a>
            <a className="flex items-center gap-2 hover:text-white" href="#codex">Codex</a>
          </nav>

          <div className="mt-8" id="tasks">
            <h3 className="text-sm uppercase tracking-wide text-slate-400">Task Stack</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-200">
              {tasks.map((task) => (
                <li key={task} className="bg-slate-800/70 border border-slate-700 rounded-xl px-3 py-2">{task}</li>
              ))}
            </ul>
          </div>
        </aside>

        <section className="space-y-6">
          <div className="bg-slate-850 rounded-2xl border border-slate-700 p-5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Knowledge</p>
                <h2 className="text-xl font-semibold">Quick Links</h2>
              </div>
              <div className="text-sm text-slate-400">Updated: Today</div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <a className="bg-slate-800/70 border border-slate-700 rounded-xl px-4 py-3 hover:border-slate-500" href="/files/TACK_OVERVIEW.md">Tack Overview</a>
              <a className="bg-slate-800/70 border border-slate-700 rounded-xl px-4 py-3 hover:border-slate-500" href="/files/TACK_SPECS.md">Specs Registry</a>
              <a className="bg-slate-800/70 border border-slate-700 rounded-xl px-4 py-3 hover:border-slate-500" href="/files/">Support Articles</a>
            </div>
          </div>

          <div className="bg-slate-850 rounded-2xl border border-slate-700 p-5" id="jobs">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Automation</p>
                <h2 className="text-xl font-semibold">Job Runner</h2>
              </div>
              <button className="px-3 py-1 rounded-full bg-slate-700 text-xs">New Job</button>
            </div>
            <div className="mt-4 space-y-3">
              {jobs.map((job) => (
                <div key={job.name} className="flex items-center justify-between bg-slate-800/70 border border-slate-700 rounded-xl px-4 py-3 text-sm">
                  <div>
                    <div className="font-medium text-white">{job.name}</div>
                    <div className="text-slate-400 text-xs">Last run: {job.lastRun}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${job.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300' : job.status === 'Idle' ? 'bg-slate-700 text-slate-200' : 'bg-amber-500/20 text-amber-300'}`}>{job.status}</span>
                    <button className="px-3 py-1 rounded-full bg-indigo-500 text-xs">{job.action}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-850 rounded-2xl border border-slate-700 p-5" id="codex">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Research</p>
                <h2 className="text-xl font-semibold">Semantic Search (QMD)</h2>
                <p className="text-sm text-slate-400">Local knowledge retrieval</p>
              </div>
            </div>
            <SearchClient />
          </div>
        </section>

        <aside className="space-y-6">
          <div className="bg-slate-850 rounded-2xl border border-slate-700 p-5">
            <p className="text-xs uppercase tracking-widest text-slate-400">Highlights</p>
            <h2 className="text-lg font-semibold">Marketing Signals</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="border border-slate-700 rounded-xl px-3 py-2">Top Support Topic: Tack GPS Plus coverage</li>
              <li className="border border-slate-700 rounded-xl px-3 py-2">Upcoming deliverable: Tack feature blog (Fri)</li>
              <li className="border border-slate-700 rounded-xl px-3 py-2">Latest PR quote saved in TACK_OVERVIEW</li>
            </ul>
          </div>

          <div className="bg-slate-850 rounded-2xl border border-slate-700 p-5">
            <p className="text-xs uppercase tracking-widest text-slate-400">System</p>
            <h2 className="text-lg font-semibold">Environment</h2>
            <ul className="mt-4 text-sm text-slate-200 space-y-2">
              <li>Codex setup: pending key</li>
              <li>Heartbeat: running every 30 min</li>
              <li>Next crawl: scheduled tonight</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}
