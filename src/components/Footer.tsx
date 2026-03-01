import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-text-on-dark-secondary border-t border-border-dark">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src="/logo-tight.png" alt="Moloco" width={904} height={155} className="h-[24px] w-auto" />
            </div>
            <p className="text-[0.8125rem] leading-relaxed text-text-on-dark-tertiary">
              Grow, scale, and monetize with AI advertising.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-text-on-dark-tertiary mb-4 font-[family-name:var(--font-dm-sans)]">
              Products
            </h4>
            <ul className="space-y-2.5 list-none p-0">
              <li>
                <Link
                  href="/products"
                  className="text-[0.875rem] text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
                >
                  Moloco Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[0.875rem] text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
                >
                  Commerce Media
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-[0.875rem] text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
                >
                  Streaming Monetization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-text-on-dark-tertiary mb-4 font-[family-name:var(--font-dm-sans)]">
              Company
            </h4>
            <ul className="space-y-2.5 list-none p-0">
              <li>
                <Link
                  href="/about"
                  className="text-[0.875rem] text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-[0.875rem] text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[0.875rem] text-text-on-dark-secondary hover:text-text-on-dark transition-colors no-underline"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.08em] text-text-on-dark-tertiary mb-4 font-[family-name:var(--font-dm-sans)]">
              Contact
            </h4>
            <p className="text-[0.875rem] text-text-on-dark-secondary leading-relaxed">
              601 Marshall Street
              <br />
              Redwood City, CA 94063
            </p>
            <p className="text-[0.875rem] text-text-on-dark-secondary mt-2">
              info@moloco.com
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.75rem] text-text-on-dark-tertiary">
            &copy; 2025 Moloco, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[0.75rem] text-text-on-dark-tertiary hover:text-text-on-dark-secondary transition-colors no-underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-[0.75rem] text-text-on-dark-tertiary hover:text-text-on-dark-secondary transition-colors no-underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
