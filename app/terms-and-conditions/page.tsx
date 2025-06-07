// app/terms-and-conditions/page.tsx

import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-orange dark:prose-invert">
      <h1 className="text-4xl font-bold mb-6 animate-slide-up">
        Terms and Conditions
      </h1>

      <p>
        Welcome to <strong>Ecocee</strong>! These Terms and Conditions govern your use of our website{" "}
        <a href="https://ecocee.in" className="underline text-primary hover:text-primary-foreground" target="_blank" rel="noreferrer">
          ecocee.in
        </a>{" "}
        and the services we provide. By accessing or using our services, you agree to be bound by these terms.
      </p>

      <section>
        <h2>1. Company Information</h2>
        <p>
          <strong>Company Name:</strong> Ecocee
          <br />
          <strong>Business Model:</strong> Product & Service-based technology solutions and support
          <br />
          <strong>Registered Address:</strong> Kodungallur, Thrissur, Kerala, India
          <br />
          <strong>Email for Support & Legal:</strong>{" "}
          <a href="mailto:info@ecocee.in" className="underline text-primary hover:text-primary-foreground">
            info@ecocee.in
          </a>
          <br />
          <strong>Website:</strong>{" "}
          <a href="https://ecocee.in" className="underline text-primary hover:text-primary-foreground" target="_blank" rel="noreferrer">
            https://ecocee.in
          </a>
        </p>
      </section>

      <section>
        <h2>2. Use of Our Website and Services</h2>
        <p>
          You agree to use our website and services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment.
        </p>
        <ul>
          <li>You must not misuse our services by knowingly introducing viruses or harmful code.</li>
          <li>You agree not to attempt unauthorized access to our systems or data.</li>
          <li>You will not use the services to transmit any unlawful, harmful, defamatory, or offensive content.</li>
        </ul>
      </section>

      <section>
        <h2>3. Account Registration and Security</h2>
        <p>
          Some of our services may require you to create an account. You are responsible for maintaining the confidentiality of your login details and for all activities that occur under your account.
        </p>
        <p>
          You must notify us immediately if you suspect any unauthorized use of your account or security breach.
        </p>
      </section>

      <section>
        <h2>4. Products and Services</h2>
        <p>
          Ecocee offers a range of products and services, both physical and digital. Product availability, specifications, and pricing are subject to change without notice.
        </p>
        <p>
          We make reasonable efforts to provide accurate product information, but we do not guarantee the completeness or accuracy of such information.
        </p>
      </section>

      <section>
        <h2>5. Orders and Payments</h2>
        <p>
          By placing an order through our website, you agree to provide accurate and complete information. All payments must be made using the available payment methods.
        </p>
        <p>
          We reserve the right to refuse or cancel any order for reasons including but not limited to product availability, errors in pricing or product information, or suspected fraud.
        </p>
      </section>

      <section>
        <h2>6. Shipping and Delivery</h2>
        <p>
          Shipping times and delivery charges vary depending on your location and the products ordered. While we strive to meet delivery estimates, we are not liable for delays beyond our control.
        </p>
      </section>

      <section>
        <h2>7. Refunds and Returns</h2>
        <p>
          Please note that <strong>Ecocee currently does not offer refunds, returns, or replacements</strong> for products or services purchased unless required by applicable law.
        </p>
        <p>
          We encourage you to contact us at{" "}
          <a href="mailto:info@ecocee.in" className="underline text-primary hover:text-primary-foreground">
            info@ecocee.in
          </a>{" "}
          if you have any concerns or questions.
        </p>
      </section>

      <section>
        <h2>8. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, and intellectual property displayed on our website are owned by or licensed to Ecocee. You may not use any of our intellectual property without prior written consent.
        </p>
      </section>

      <section>
        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Ecocee shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use our services.
        </p>
      </section>

      <section>
        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless Ecocee, its affiliates, and employees from and against any claims, damages, liabilities, losses, and expenses arising out of your violation of these Terms or your use of the services.
        </p>
      </section>

      <section>
        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms and Conditions at any time by posting the new version on this page. Your continued use of our website after changes signifies your acceptance of the updated terms.
        </p>
        <p><strong>Effective Date:</strong> June 7, 2025</p>
      </section>

      <section>
        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India, without regard to its conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Kerala, India.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          For any questions regarding these Terms and Conditions, please contact us at: <br />
          <strong>Email:</strong>{" "}
          <a href="mailto:info@ecocee.in" className="underline text-primary hover:text-primary-foreground">
            info@ecocee.in
          </a>
          <br />
          <strong>Address:</strong> Kodungallur, Thrissur, Kerala, India
        </p>
      </section>
    </main>
  );
};

export default TermsAndConditionsPage;
