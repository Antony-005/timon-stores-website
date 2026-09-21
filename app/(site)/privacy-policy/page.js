export const metadata = {
  title: 'Privacy Policy | Timon Stores Ltd',
  description: 'How Timon Stores Ltd collects, uses and protects personal information submitted through this website.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-navy text-white text-center py-16 px-6">
        <h1>Privacy Policy</h1>
        <p className="mt-4 max-w-xl mx-auto opacity-85">
          Last updated: September 2026
        </p>
      </section>

      <section className="bg-sand py-16 px-6">
        <div className="max-w-3xl mx-auto grid gap-10">
          <div>
            <h2>Introduction</h2>
            <p>
              Timon Stores Ltd operates the website found at timonstores.co.ke.
              This policy explains what personal information we collect through
              the website, how we use it, and the choices available to you. We
              handle personal data in line with the Data Protection Act, 2019
              of Kenya.
            </p>
          </div>

          <div>
            <h2>Information We Collect</h2>
            <p>
              When you submit the contact form or request a quote through this
              website, we collect the information you provide, which may
              include your name, phone number, email address, and the details
              of your message or product request.
            </p>
            <p className="mt-4">
              We also use Google Analytics to understand how visitors use the
              site. This collects general information such as pages viewed,
              approximate location, and the type of device and browser used.
              This information does not identify you personally.
            </p>
          </div>

          <div>
            <h2>How We Use Your Information</h2>
            <p>
              We use the information you submit to respond to your inquiry or
              quote request, to communicate with you about products and
              services, and to improve how our website works. We do not use
              your information for purposes unrelated to these.
            </p>
          </div>

          <div>
            <h2>Cookies</h2>
            <p>
              This website uses cookies through Google Analytics to measure
              website traffic. You can disable cookies through your browser
              settings at any time. Doing so will not prevent you from using
              the website, though some analytics features will no longer work
              on your visit.
            </p>
          </div>

          <div>
            <h2>How We Protect Your Information</h2>
            <p>
              Information submitted through this website is stored securely
              and is only accessible to authorised Timon Stores Ltd staff. We
              take reasonable steps to protect your information from
              unauthorised access, loss, or misuse.
            </p>
          </div>

          <div>
            <h2>Sharing of Information</h2>
            <p>
              We do not sell or rent your personal information to third
              parties. We may share information with service providers who
              help us operate the website, such as our hosting provider, or
              where required by law.
            </p>
          </div>

          <div>
            <h2>How Long We Keep Your Information</h2>
            <p>
              We keep the information you submit for as long as necessary to
              respond to your inquiry and maintain our business records, or as
              required by law.
            </p>
          </div>

          <div>
            <h2>Your Rights</h2>
            <p>
              Under the Data Protection Act, 2019, you have the right to know
              what personal information we hold about you, to request that it
              be corrected or deleted, and to object to how it is used. You
              may also lodge a complaint with the Office of the Data
              Protection Commissioner if you believe your rights have been
              violated.
            </p>
          </div>

          <div>
            <h2>Contact Us</h2>
            <p>
              If you have any question about this policy or how your
              information is handled, contact us at timonstores@gmail.com or
              +254 720 873696.
            </p>
          </div>

          <div>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will
              be posted on this page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}