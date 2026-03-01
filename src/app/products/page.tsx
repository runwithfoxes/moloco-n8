import Link from "next/link";
import ProductWindow from "@/components/ProductWindow";
import AnimatedStats from "@/components/AnimatedStats";

export default function Products() {
  return (
    <>
      {/* Hero: Full-bleed image */}
      <section className="hero-image-section min-h-[70vh] relative overflow-hidden">
        <div className="hero-image-wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-products.png"
            alt="Illustrated scene of a man standing on a rooftop overlooking a dense cityscape"
          />
        </div>

        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(180deg, rgba(15,31,21,0.7) 0%, rgba(15,31,21,0.35) 40%, rgba(15,31,21,0.2) 60%, rgba(15,31,21,0.6) 100%)'
        }} />

        <div className="relative z-[2] max-w-[1280px] mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-16 md:pb-24 flex flex-col min-h-[70vh] justify-end">
          <div className="max-w-[720px]">
            <p className="text-[0.75rem] font-medium text-white/40 uppercase tracking-[0.08em] mb-5">
              Products
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight mb-7 text-white">
              Built for outcomes, powered by{" "}
              <span className="text-white/65">deep learning</span>
            </h1>
            <p className="text-[clamp(1.0625rem,1.4vw,1.1875rem)] leading-relaxed text-white/70">
              Three platforms that share a common foundation: planet-scale
              machine learning optimized for real performance, not vanity
              metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Moloco Ads */}
      <section className="bg-bg-cream py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-start">
            <div>
              <span className="tag-badge mb-5 inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-orange" />
                Moloco Ads
              </span>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-text-primary mb-5">
                Reach 2 billion daily users
              </h2>
              <p className="text-[1rem] text-text-secondary leading-relaxed mb-5">
                The advertising platform built for app marketers. Grow your app
                with ads in 3 million independent apps. Connect with high-value
                users with AI-driven performance and massive incremental reach.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  "90% of spend optimized for ROAS and CPA goals",
                  "Re-engagement costs 3.4x less than new acquisition",
                  "685% greater ROAS on re-engagement campaigns",
                  "Full-screen video and interactive ad formats",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] text-text-secondary">
                    <span className="text-orange mt-0.5 text-[0.5rem]">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-text-primary hover:text-text-secondary transition-colors no-underline"
              >
                Learn more about Moloco Ads &rarr;
              </Link>
            </div>
            <AnimatedStats
              stats={[
                { target: 2, suffix: "B+", label: "Daily active users", accent: "text-orange" },
                { target: 3, suffix: "M+", label: "Independent apps", accent: "text-orange" },
                { target: 250, suffix: "K+", label: "Advertisers globally", accent: "text-orange" },
              ]}
            />
          </div>
        </div>
      </section>

      <div className="divider-line" />

      {/* Commerce Media — keeps the ProductWindow */}
      <section className="bg-bg-cream py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 lg:gap-10 items-start">
            <div>
              <ProductWindow variant="optimize" />
            </div>
            <div>
              <span className="tag-badge mb-5 inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-blue" />
                Commerce Media
              </span>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-text-primary mb-5">
                Real-time AI that delivers what legacy systems can&apos;t
              </h2>
              <p className="text-[1rem] text-text-secondary leading-relaxed mb-5">
                AI-powered onsite ads for retailers. Deep learning models
                deliver personalized ads that seamlessly blend with shopping
                journeys. Performance improves with every single impression.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  "Personalized ads using deep-learning models",
                  "Seamlessly blends with shopping journeys",
                  "Automated campaigns with self-serve controls",
                  "Industry-leading transparency and control",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] text-text-secondary">
                    <span className="text-blue mt-0.5 text-[0.5rem]">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-text-primary hover:text-text-secondary transition-colors no-underline"
              >
                Learn more about Commerce Media &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-line" />

      {/* Streaming Monetization */}
      <section className="bg-bg-cream py-16 md:py-24 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 md:gap-16 items-start">
            <div>
              <span className="tag-badge mb-5 inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full border-2 border-violet" />
                Streaming Monetization
              </span>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium tracking-tight text-text-primary mb-5">
                The AI-native ad stack for streaming
              </h2>
              <p className="text-[1rem] text-text-secondary leading-relaxed mb-5">
                Built for large streaming providers who need to make the most of
                every ad impression. Full-funnel advertising business support
                with advanced budget pacing and frequency control.
              </p>
              <ul className="space-y-3 mb-7">
                {[
                  "Full-funnel advertising business support",
                  "High ad concurrency and budget pacing",
                  "Advanced frequency control",
                  "Automated campaigns with self-serve advertiser controls",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] text-text-secondary">
                    <span className="text-violet mt-0.5 text-[0.5rem]">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-text-primary hover:text-text-secondary transition-colors no-underline"
              >
                Learn more about Streaming &rarr;
              </Link>
            </div>
            <AnimatedStats
              stats={[
                { target: 685, suffix: "%", label: "ROAS on re-engagement", accent: "text-violet" },
                { target: 3, suffix: ".4x", label: "Lower acquisition cost", accent: "text-violet" },
                { target: 90, suffix: "%", label: "Spend optimized for goals", accent: "text-violet" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bg-dark text-text-on-dark py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="text-[0.8125rem] font-medium text-text-on-dark-tertiary uppercase tracking-[0.08em] mb-4">
              How it works
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-medium tracking-tight">
              Three steps to <span className="text-text-on-dark-tertiary">growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "Upload your data",
                desc: "Upload first-party data to power our machine learning models. Your data stays secure and private.",
              },
              {
                step: "02",
                title: "Set your objectives",
                desc: "Define campaign objectives, budget, and upload creatives. Our AI handles the complexity.",
              },
              {
                step: "03",
                title: "Launch and optimize",
                desc: "Launch with AI optimization that improves with every impression. Monitor results in real time.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border border-border-dark-medium rounded-lg p-8 md:p-9"
              >
                <p className="text-[2rem] font-medium text-text-on-dark-tertiary mb-4 font-[family-name:var(--font-jetbrains)]">
                  {item.step}
                </p>
                <h3 className="text-[1.125rem] font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.9375rem] text-text-on-dark-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-cream py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-medium tracking-tight text-text-primary mb-5">
            Start growing with Moloco
          </h2>
          <p className="text-[1rem] text-text-secondary mb-10 max-w-[480px] mx-auto">
            Less than 1% of our total addressable market is using Moloco today.
            There&apos;s room for everyone.
          </p>
          <Link
            href="#"
            className="inline-block px-7 py-3.5 bg-text-primary text-bg-cream rounded-lg text-[0.9375rem] font-semibold hover:bg-grey-700 transition-colors no-underline"
          >
            Get started
          </Link>
        </div>
      </section>
    </>
  );
}
