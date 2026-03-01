export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Trevor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
