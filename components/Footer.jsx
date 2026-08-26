import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#16233d] text-sand pt-16 px-6 pb-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-lg mb-2">Timon Stores Ltd</h3>
          <p className="opacity-90">
            Trusted regional distributor and diversified investment company.
          </p>
        </div>

        <div>
          <h4 className="text-gold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 opacity-90">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/distribution">Distribution</Link>
            <Link href="/investors">Investors</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-gold mb-3">Branches</h4>
          <p className="opacity-90 mb-2">
            <strong>Kendu Bay</strong>
            <br />
            Phone / Address here
          </p>
          <p className="opacity-90">
            <strong>Katito</strong>
            <br />
            Phone / Address here
          </p>
        </div>

        <div>
          <h4 className="text-gold mb-3">Get in Touch</h4>
          <p className="opacity-90 mb-2">Email here</p>
          <p className="opacity-90 mb-4">WhatsApp here</p>
          <Link
            href="/request-quote"
            className="inline-block bg-gold text-navy font-semibold px-6 py-3 rounded-md"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="h-px bg-gold opacity-40 my-10 max-w-6xl mx-auto" />

      <p className="text-center text-sm opacity-70">
        &copy; {year} Timon Stores Ltd. Serving Homa Bay · Kisumu · Migori · Kisii · Nyamira.
      </p>
    </footer>
  );
}