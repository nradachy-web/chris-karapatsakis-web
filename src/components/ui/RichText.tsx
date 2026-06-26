import Link from "next/link";

/**
 * Renders a string with inline markdown links [label](href) as real links.
 * Internal hrefs (starting with /) use next/link; others open in a new tab.
 */
export default function RichText({ text }: { text: string }) {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    const cls = "font-medium text-clay-deep underline decoration-clay/40 underline-offset-2 transition-colors hover:text-clay hover:decoration-clay";
    if (href.startsWith("/")) {
      parts.push(
        <Link key={i++} href={href} className={cls}>
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a key={i++} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
