export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto max-w-5xl flex items-center justify-between">
        <p className="text-xs text-secondary">
          © {new Date().getFullYear()} Trevor
        </p>
        <p className="text-xs tracking-widest uppercase text-dim">
          Design Engineer
        </p>
      </div>
    </footer>
  );
}
