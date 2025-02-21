/* eslint-disable react/no-unescaped-entities */
import { pricesHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import React from "react";

const TermsAndConditions = () => {
  return (
    <section>
      {/* Hero Section */}
      <div
        className="h-[50dvh] bg-no-repeat bg-cover flex items-center"
        style={{
          backgroundImage: `url(${pricesHeroImgSrc})`,
        }}
      >
        <div
          className="max-w-6xl flex-1 mx-auto px-4 mt-14 md:mt-20 md:px-6 lg:px-8 py-10 md:py-16 lg:py-20"
          data-aos="fade-right"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium">
            Terms And Conditions
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-16">
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">1. Terms</h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            By accessing this website, you are agreeing to be bound by these
            website Terms and Conditions of Use, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trade mark law.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            2. Use License
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            a. Permission is granted to temporarily download one copy of the
            materials (information or software) on TechCraft web site for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
          </p>

          <ol className="py-4 text-gray-500 font-semibold flex flex-col space-y-2">
            <li>i. Modify or copy the materials;</li>
            <li>
              ii. Use the materials for any commercial purpose, or for any
              public display (commercial or non-commercial);
            </li>
            <li>
              iii. Attempt to decompile or reverse engineer any software
              contained on TechCraft web site;
            </li>
            <li>
              iv. Remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              v. Transfer the materials to another person or "mirror" the
              materials on any other server.
            </li>
          </ol>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            b. This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by TechCraft at any time.
            Upon terminating your viewing of these materials or upon the
            termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed
            format.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            3. Limitations
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            In no event shall TechCraft or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption,) arising out of the use or
            inability to use the materials on TechCraft Internet site, even if
            TechCraft or a TechCraft authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            4. Disclaimer
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            The materials on TechCraft website are provided "as is". TechCraft
            makes no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties, including without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights. Further, TechCraft does not warrant or
            make any representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its Internet web site or
            otherwise relating to such materials or on any sites linked to this
            site.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            5. Revisions and Errata
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            The materials appearing on TechCraft website could include
            technical, typographical, or photographic errors. TechCraft does not
            warrant that any of the materials on its web site are accurate,
            complete, or current. TechCraft may make changes to the materials
            contained on its web site at any time without notice. TechCraft does
            not, however, make any commitment to update the materials.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            6. Site Terms of Use Modifications
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            TechCraft may revise these terms of use for its web site at any time
            without notice. By using this web site you are agreeing to be bound
            by the then current version of these Terms and Conditions of Use
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">7. Links</h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            TechCraft has not reviewed all of the sites linked to its Internet
            web site and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by
            TechCraft of the site. Use of any such linked web site is at the
            user's own risk.
          </p>
        </div>
        <div className="flex flex-col space-y-0">
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            8. Governing Law
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            Any claim relating to TechCraft website shall be governed by the
            laws of the State of Texas without regard to its conflict of law
            provisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
