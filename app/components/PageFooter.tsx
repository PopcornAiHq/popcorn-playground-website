import Image from "next/image";
import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className="w-full pb-8 sm:pb-[60px] pt-8 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Mobile + Tablet: Stacked (below lg) */}
        <div className="flex flex-col items-center gap-6 lg:hidden">
          <Link href="/" className="inline-flex items-center justify-center">
            <Image
              src="/assets/popcorn-wordmark.png"
              alt="Popcorn"
              width={300}
              height={105}
              className="h-auto w-[180px] md:w-[220px]"
            />
          </Link>

          <div className="flex items-center gap-10 text-base font-bold">
            <div className="flex items-center gap-5">
              <a
                href="https://x.com/popcornaihq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Follow us on X"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/popcorn-ai-hq/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Follow us on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <Link className="hover:underline underline-offset-4" href="/about">
              About the Team
            </Link>
          </div>

          <div className="flex gap-10 text-base font-bold">
            <Link className="hover:underline underline-offset-4" href="/tos">
              Terms of Service
            </Link>
            <Link className="hover:underline underline-offset-4" href="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Desktop: Horizontal (lg and up) */}
        <div className="hidden lg:flex flex-col items-center gap-1">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center justify-center">
              <Image
                src="/assets/popcorn-wordmark.png"
                alt="Popcorn"
                width={150}
                height={52}
                className="h-auto"
              />
            </Link>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-8 lg:gap-12 text-base lg:text-[18px] font-bold pl-[60px]">
              <div className="flex items-center gap-6">
                <a
                  href="https://x.com/popcornaihq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Follow us on X"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/popcorn-ai-hq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <Link className="hover:underline underline-offset-4" href="/about">
                About the Team
              </Link>
            </div>

            <div className="flex gap-8 lg:gap-12 text-base lg:text-[18px] font-bold">
              <Link className="hover:underline underline-offset-4" href="/tos">
                Terms of Service
              </Link>
              <Link className="hover:underline underline-offset-4" href="/privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
