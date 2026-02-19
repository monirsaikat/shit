import { useHello } from "./hooks/useHello";

function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-950/60">
      <div className="p-4 border-b border-slate-800">
        <div className="text-lg font-semibold">shit (slack clone)</div>
        <div className="text-xs text-slate-400">workspace: local</div>
      </div>

      <div className="p-3">
        <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">
          Channels
        </div>

        <div className="space-y-1">
          {["general", "random", "dev"].map((c) => (
            <button
              key={c}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-800/60 text-slate-200"
            >
              <span className="text-slate-500">#</span> {c}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

function Topbar() {
  return (
    <header className="h-14 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-950/40">
      <div className="font-medium"># general</div>
      <div className="text-xs text-slate-400">online</div>
    </header>
  );
}

function ChatArea() {
  const helloQ = useHello();

  return (
    <div className="flex flex-col h-full">
      <Topbar />

      <main className="flex-1 p-4 overflow-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-4">
          <div className="text-sm text-slate-400">Backend connectivity</div>

          <div className="mt-2 text-slate-200">
            {helloQ.isLoading
              ? "loading..."
              : helloQ.isError
              ? helloQ.error.message
              : helloQ.data.message}
          </div>

          <div className="mt-4 text-sm text-slate-400">
            Next: channels list + messages + realtime.
          </div>
        </div>
      </main>

      <footer className="p-4 border-t border-slate-800 bg-slate-950/40">
        <div className="flex gap-2">
          <input
            className="flex-1 rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3 outline-none focus:ring-2 focus:ring-slate-600"
            placeholder="Message #general"
          />
          <button className="rounded-xl px-4 py-3 bg-slate-200 text-slate-950 font-semibold hover:bg-white">
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex">
      <Sidebar />
      <div className="flex-1">
        <ChatArea />
      </div>
    </div>
  );
}
