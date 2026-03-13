function Footer() {
  return (
    <footer className="relative">
      <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[rgba(11,15,23,0.9)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 text-white/80">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
            <div className="space-y-4 text-sm font-normal">
              <img src="/brand/skyforge-logo-light.svg" alt="Skyforge Drones" className="h-12 w-auto" />
              <p className="max-w-xs text-sm font-normal text-white/60">
                Enterprise drone systems engineered for regulated, high-consequence environments.
              </p>
            </div>

            <div className="space-y-3 text-sm font-normal">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Company</p>
              <a className="block hover:text-white" href="#">About</a>
              <a className="block hover:text-white" href="#industries">Industries</a>
              <a className="block hover:text-white" href="#products">Products</a>
              <a className="block hover:text-white" href="#support-services">Support</a>
              <a className="block hover:text-white" href="#contact">Contact</a>
            </div>

            <div className="space-y-3 text-sm font-normal">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Solutions</p>
              <a className="block hover:text-white" href="#products">Autonomous Operations</a>
              <a className="block hover:text-white" href="#products">Enterprise Drones</a>
              <a className="block hover:text-white" href="#products">Payloads</a>
              <a className="block hover:text-white" href="#products">RTK & Precision</a>
            </div>

            <div className="space-y-3 text-sm font-normal">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Support</p>
              <a className="block hover:text-white" href="#support-services">Documentation</a>
              <a className="block hover:text-white" href="#support-services">Training</a>
              <a className="block hover:text-white" href="#support-services">Support Plans</a>
              <a className="block hover:text-white" href="#contact">Contact Support</a>
            </div>

            <div className="space-y-3 text-sm font-normal">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">Legal</p>
              <a className="block hover:text-white" href="#">Privacy Policy</a>
              <a className="block hover:text-white" href="#">Terms of Use</a>
              <a className="block hover:text-white" href="#">Compliance</a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs font-normal text-white/60">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Skyforge Drones. All rights reserved.</p>
              <p>Product imagery shown for demonstration purposes. Specifications subject to change.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
