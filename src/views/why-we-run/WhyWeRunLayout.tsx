import { Link } from "react-router-dom";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function WhyWeRunLayout({ title, children }: Props) {
  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-12 py-4 bg-white border-b border-neutral-200 shadow-sm">
        <Link
          to="/"
          className="text-neutral-600 hover:text-neutral-900 text-sm font-medium flex items-center gap-2"
          aria-label="메인으로 돌아가기"
        >
          <span aria-hidden>←</span> 그런 GRun
        </Link>
        <span className="text-neutral-500 text-sm">Why We Run</span>
      </header>
      <div className="container mx-auto px-6 md:px-12 py-10 md:py-16">
        <h1 className="text-2xl md:text-4xl font-bold text-neutral-800 mb-8">
          {title}
        </h1>
        {children}
      </div>
    </main>
  );
}
