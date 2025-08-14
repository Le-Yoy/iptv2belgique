export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center gradient-text">
          🐼 PandaStreamTV
        </h1>
        <p className="text-center mt-4 text-text-secondary">
          Ready for Claude Opus to build something amazing!
        </p>
        <div className="text-center mt-8">
          <div className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
            ✅ Development Environment Ready
          </div>
        </div>
      </div>
    </main>
  );
}
