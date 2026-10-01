import RequestQuoteForm from './RequestQuoteForm';

export const metadata = {
  title: 'Request a Quote | Timon Stores Ltd',
  description: 'Request a wholesale or retail quote from Timon Stores Ltd, serving Homa Bay, Kisumu, Migori, Kisii and Nyamira counties.',
  alternates: { canonical: '/request-quote' },
};

export default function RequestQuote() {
  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Request a Quote</h1>
        <p className="mt-2 opacity-85 max-w-xl mx-auto">
         Tell us what you need, and our team will respond within 24 hours.
        </p>
      </section>

      <RequestQuoteForm />
    </>
  );
}