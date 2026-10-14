import Image from 'next/image';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | Timon Stores Ltd',
  description: 'Get in touch with Timon Stores Ltd, a wholesale and retail distributor based in Oyugis, Homa Bay County. Call, WhatsApp, or send a message.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Contact Us</h1>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/branches/contact-branch.jpg"
                alt="Timon Stores wholesale and retail contact point in Oyugis, Homa Bay County"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <h2>Get in Touch</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:+254746480713"
                className="bg-gold text-navy font-semibold px-5 py-3 rounded-md hover:-translate-y-0.5 transition"
              >
                Call +254 746 480713
              </a>
              <a
                href="https://wa.me/254720873696"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy text-navy font-semibold px-5 py-3 rounded-md hover:-translate-y-0.5 transition"
              >
                WhatsApp +254 720 873696
              </a>
            </div>
            <p className="mt-6 opacity-85">
              The call line serves our Kendu Bay, Katito and Rodi branches.
            </p>
            <p className="mt-4">
              Email:{' '}
              <a href="mailto:timonstores@gmail.com" className="text-green hover:text-navy">
                timonstores@gmail.com
              </a>
            </p>
            <p className="mt-4">Business Hours: Sunday to Friday, 8am to 6pm</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}