/* eslint-disable react/no-unescaped-entities */
import { pricesHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="h-[75dvh] bg-no-repeat bg-cover flex items-center"
        style={{
          backgroundImage: `url(${pricesHeroImgSrc})`,
        }}
      >
        <div
          className="max-w-6xl flex-1 mx-auto px-4 mt-14 md:mt-20 md:px-6 lg:px-8 py-10 md:py-16 lg:py-20"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-5">
            Privacy Policy
          </h2>
          <p className="font-medium max-w-2xl text-base">
            This Privacy Policy governs the manner in which TechCraft collects,
            uses, maintains and discloses information collected from users
            (each, a "User") of the https:// https://TechCrafttechnologies.com/
            website ("Site"). This privacy policy applies to the Site and all
            products and services offered by TechCraft.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-16">
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Personal identification information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We may collect personal identification information from Users in a
            variety of ways, including, but not limited to, when Users visit our
            site, register on the site, place an order, subscribe to the
            newsletter, respond to a survey, fill out a form, and in connection
            with other activities, services, features or resources we make
            available on our Site. Users may be asked for, as appropriate, name,
            email address, mailing address, phone number, and credit card
            information. Users may, however, visit our Site anonymously. We will
            collect personal identification information from Users only if they
            voluntarily submit such information to us. Users can always refuse
            to supply personally identification information, except that it may
            prevent them from engaging in certain Site related activities.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Non-personal identification information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We may collect non-personal identification information about Users
            whenever they interact with our Site. Non-personal identification
            information may include the browser name, the type of computer and
            technical information about Users means of connection to our Site,
            such as the operating system and the Internet service providers’
            utilized and other similar information.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Collection of personal and non-personal identification information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We may collect the following categories of personal identification
            information from Users: name, email address, mailing address, IP
            address, telephone number, signature, account name, social security
            number, driver’s license or other state identification number,
            passport number and credit card information.
            <br />
            <br />
            We may also collect non-personal information about Users’ internet
            activity, including: browser name, type of computer and technical
            information, operating system, internet provider, browsing history,
            search history and other information regarding a User’s interaction
            with a website or application.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Web browser cookies
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Our Site may use "cookies" to enhance User experience. User's web
            browser places cookies on their hard drive for record-keeping
            purposes and sometimes to track information about them. User may
            choose to set their web browser to refuse cookies, or to alert you
            when cookies are being sent. If they do so, note that some parts of
            the Site may not function properly.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            How we protect your information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We adopt appropriate data collection, storage and processing
            practices and security measures to protect against unauthorized
            access, alteration, disclosure or destruction of your personal
            information, username, password, transaction information and data
            stored on our Site.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Sharing your personal information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We do not sell, trade, or rent Users personal identification
            information to others. We may share generic aggregated demographic
            information not linked to any personal identification information
            regarding visitors and users with our business partners, trusted
            affiliates and advertisers for the purposes outlined above. We may
            use third party service providers to help us operate our business
            and the Site or administer activities on our behalf, such as sending
            out newsletters or surveys. We may share your information with these
            third parties for those limited purposes provided that you have
            given us your permission.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Compliance with children's online privacy protection act
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Protecting the privacy of the very young is especially important.
            For that reason, we never collect or maintain information at our
            Site from those we actually know are under 13, and no part of our
            website is structured to attract anyone under 13.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            How we use collected information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            TechCraft collects and uses Users’ personal information for the
            following purposes:
          </p>
          <ol className="pt-4 text-gray-500 font-semibold flex flex-col space-y-2">
            <li>To improve customer service</li>
            <li>
              Information you provide helps us respond to your customer service
              requests and support needs more efficiently.
            </li>
            <li>To personalize user experience</li>
            <li>
              We use information in the aggregate to understand how our Users as
              a group use the services and resources provided on our Site.
            </li>
            <li>To improve our Site</li>
            <li>
              We use feedback you provide to improve our products and services.
            </li>
            <li>To process payments</li>
            <li>
              We use the information Users provide about themselves when placing
              an order only to provide service to that order. We do not share
              this
            </li>
            <li>
              information with outside parties except to the extent necessary to
              provide the service.
            </li>
            <li>To run a promotion, contest, survey or other Site feature</li>
            <li>
              To send Users information they agreed to receive about topics we
              think will be of interest to them.
            </li>
            <li>To send periodic emails</li>
            <li>
              We may use the email address to send User information and updates
              pertaining to their order. It could also be used to respond to
              their
            </li>
            <li>
              inquiries, questions and/or other requests. If User decides to
              opt-in to our mailing list, they will receive emails that may
              include company
            </li>
            <li>
              inquiries, questions and/or other requests. If User decides to
              opt-in to our mailing list, they will receive emails that may
              include company
            </li>
            <li>
              news, updates, related product or service information, etc. If at
              any time the User would like to unsubscribe from receiving future
              emails, we include detailed unsubscribe instructions at the bottom
              of each email or the User may contact us via our Site.
            </li>
          </ol>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Compliance with the California Consumer Privacy Act (CCPA)
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            This Privacy Statement for Users in California supplements the
            information contained in the Privacy Policy above. The following
            Statement is in compliance with the California Consumer Privacy Act
            (CCPA) and applies solely to Users who reside in the State of
            California.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Third parties
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We sometimes use third-party service providers to help us operate
            our business on our behalf, such as sending out newsletters or
            surveys. We may share your information with these third parties for
            those limited purposes provided that you have given us your
            permission. However, outside of that, we do not sell, share, rent,
            trade or disclose your personal information with any third-party
            companies.
            <br />
            <br />
            <p>
              Users provide this information directly to our business or
              automatically through interaction with our Site. We collect
              personal identification information for the business and
              commercial purposes described in the “How we use collected
              information” section above
            </p>
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Right to access your personal information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            You have the right to access the personal information we hold about
            you. You also have the right to request a copy of the personal
            information we hold. If you want to access this data, send a
            description of the information you want us to share to
            info@TechCrafttechnologies.com.
            <br />
            <br />
            <p>
              Personal information does not include “publicly available”
              information. Publicly available information is not covered by the
              CCPA.
            </p>
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Right to be forgotten
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            At any time, you may contact us at info@TechCrafttechnologies.com to
            request that we delete all personal data. Users are, however,
            individually responsible for ensuring that their personal data is
            deleted from other sources.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Right to non-discrimination for exercise of privacy rights
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Users have the right to refuse to supply personal identification
            information without the risk of discrimination, except that it may
            prevent you from engaging in certain Site related activities.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Do-not-track (DNT) requests
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            At this time, we do not currently respond to “do-not-track” requests
            from our Users’ browsers.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Do not sell my personal information
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We do not sell, trade or rent Users personal identification
            information to others and have not done so in the past 12 months.
            However, Users can still opt-out and request that we do not sell
            their personal information in the future.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Compliance with the General Data Protection Regulation (GDPR)
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            This Privacy Notice for Users in the European Union (E.U.)
            supplements the information contained in the Privacy Policy above.
            The following Notice is in compliance with the General Data
            Protection Regulation (GDPR) and applies solely to data subjects
            (“Users”) who reside in the E.U.
            <br />
            <br />
            TechCraft is the data controller for the personal information Users
            provide. For general data protection queries, please get in touch
            with us at info@TechCrafttechnologies.com. For further information
            about TechCraft, please visit info@TechCrafttechnologies.com.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Why we collect and store personal data
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We collect and use Users’ personal data for the purposes listed in
            the “How we use collected information” section above, provided we
            have your consent or are otherwise legally empowered to do so.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            When we collect personal data
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md mb-4">
            TechCraft will only collect and use Users’ personal information in
            the following circumstances:
            <ul className="list-disc pl-5 mt-3 flex flex-col space-y-2">
              <li>
                Where you have given us consent to process personal data for a
                specified purpose
              </li>
              <li>
                Where we require your data to perform the contract we shall
                enter into or have already entered into with you
              </li>
              <li>
                Where it is necessary for our legitimate interests or those of a
                third party, provided your interests or fundamental rights do
                not legally overrule these
              </li>
              <li>
                Where we require your data to comply with a legal obligation
              </li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            How you provide consent
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Users provide consent by filling out contact forms on our Site. This
            consent allows us to share your information with our sister company,
            Rize Ideas, Inc.
            <br />
            <br />
            We store all collected information for 90 days. We use this
            information for marketing purposes, to contact Users about our
            services. Thereafter, we will delete your information.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Transferring data internationally
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            TechCraft is a U.S.-based company located outside of the European
            Economic Area (EEA). As such, we share data with a third party, Rize
            Reviews, Inc., that also lies outside the EEA.
            <br />
            <br />
            During all international data transfers, we will comply with the
            Data Protection Act 1998. Our collection, storage and use of
            personal data collected from Users in the E.U. will be governed by
            the GDPR practices outlined in this Privacy Notice.
            <br />
            <br />
            By using our Site and providing your consent, you also consent to
            the transfer of your personal data to data processors located in
            countries outside the EEA.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            GDPR data protection rights
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Users have eight (8) rights under the GDPR. Every User located in
            the E.U. is entitled to the following data protection rights:
            <ul className="list-disc pl-5 mt-3 flex flex-col space-y-2">
              <li>
                Right to be informed: Anyone processing a User’s personal data
                must make clear what data is being processed, why and who else
                this data may be shared with.
              </li>
              <li>
                Right to access: Users have the right to see what personal
                information is being held.
              </li>
              <li>
                Right to rectification: A user’s data must be able to be
                corrected or amended if incorrect information is being held by
                the company.
              </li>
              <li>
                Right to erasure: Also called the “Right to be Forgotten,” this
                right dictates that, at any time, Users may contact us at
                info@TechCrafttechnologies.com to request that we delete all
                personal data.
              </li>
              <li>
                Right to restrict processing: Users have the right to request a
                temporary halt to the processing of personal data, such as in
                the case of data being corrected or a dispute in a legal case
                concluded.
              </li>
              <li>
                Right to data portability: Users may request any personal data
                supplied to the company be provided back to them in a simple,
                structured and machine-readable format.
              </li>
              <li>
                Right to object to processing: A User has the right to object to
                any further data processing that falls outside the parameters of
                the primary purpose for which the data was collected.
              </li>
              <li>
                Right to avoid automated decision-making: Users may not be
                subject to any decision based solely on automated processing,
                including profiling.
              </li>
            </ul>
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Withdrawing your consent
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Where we rely on your consent as the legal basis for processing your
            personal information, you may withdraw your consent at any time by
            contacting us at info@TechCrafttechnologies.com.
            <br />
            <br />
            If you have provided consent for your details to be shared with a
            third party and you wish to withdraw this consent, please contact
            the third party directly to do so.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Contacting the appropriate authority
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Should you have any concerns or complaints about our company or the
            Site that you feel have not been addressed in a satisfactory manner,
            you may contact the Information Commissioner’s Office (ICO) agent
            here.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Your acceptance of these terms
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            By using this Site, you signify your acceptance of this policy. If
            you do not agree to this policy, please do not use our Site. Your
            continued use of the Site following the posting of changes to this
            policy will be deemed your acceptance of those changes.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Changes to this privacy policy
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            TechCraft has the discretion to update this privacy policy at any
            time. When we do, we will revise the updated date at the bottom of
            this page. We encourage Users to frequently check this page for any
            changes to stay informed about how we are helping to protect the
            personal information we collect.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Your acceptance of these terms
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            By using this Site, you signify your acceptance of this policy. If
            you do not agree to this policy, please do not use our Site. Your
            continued use of the Site following the posting of changes to this
            policy will be deemed your acceptance of those changes.
          </p>
        </div>

        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            Contacting us
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            If you have any questions about this Privacy Policy, the practices
            of this site, or your dealings with this site, please contact us at:
          </p>
          <address className="text-base text-gray-500 font-semibold md:text-md pt-3 not-italic">
            TechCraft
            <br />
            <br />
            2841 Valley Pl, San Diego,
            <br />
            CA 92113, United States
            <br />
            <br />
            +1(667) 423-5532
            <br />
            <br />
            info@TechCrafttechnologies.com
          </address>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
