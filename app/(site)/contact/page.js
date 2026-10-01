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
            <p><strong>Kendu Bay</strong><br />+254 746 480713</p>
            <p className="mt-4"><strong>Katito</strong><br />+254 746 480713</p>
            <p className="mt-4"><strong>Rodi</strong><br />+254 746 480713</p>
            <p className="mt-4">Email: timonstores@gmail.com</p>
            <a href="https://wa.me/254720873696" target="_blank" rel="noopener noreferrer" className="text-green hover:text-navy">
              WhatsApp: +254 720 873696
            </a>
            <p className="mt-4">Business Hours: Sunday to Friday, 8am to 6pm</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}