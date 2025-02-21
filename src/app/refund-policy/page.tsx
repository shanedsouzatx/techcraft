/* eslint-disable react/no-unescaped-entities */
import { pricesHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import React from "react";

const RefundPolicy = () => {
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
            Refund Policy
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-16">
        <div className="flex flex-col space-y-8">
          <p className="text-base text-gray-500 font-semibold md:text-md">
            We ensure 100% customer satisfaction for all our services. However,
            the refund policy is available to accommodate the customers'
            concerns. All refund requests will be fulfilled as per the following
            arrangement:
          </p>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            If request for refund is made after 12 hours of initial design
            samples delivery then you would not be eligible for any refund. No
            refund request will be entertained if you have posted revision on
            any of the initial design samples provided. All refund requests
            should be communicated to the support department.
            https://TechCrafttechnolgies.com, based on the violation of your
            user agreement reserves the right to approve/disapprove your request
            on an individual case to case basis. We ensure 100% customer
            satisfaction for all our services. However, the refund policy is
            available to accommodate the customers' concerns. All refund
            requests will be fulfilled as per the following arrangement: - You
            have chosen a special package. The primary design concept has been
            approved. - You have demanded revisions. - The cancellation has been
            made due to reasons non-related to the company. - The company has
            not been contacted for more than 2 weeks of project. - Company’s
            policies, or policy, have been violated. - Other company or designer
            has been approached for the same project. - The creative brief is
            lacking in required information. - A complete design change has been
            demanded. - The claim has crossed the given ‘request for refund’
            time span. - The business is closing or changing name or business. -
            Reasons such as ‘change of mind’, ‘disagreement with partner’ or
            other reasons that do not pertain to the service will not be subject
            to refund under any circumstances. - If a client subscribes for a
            service bundle and happens to be dissatisfied with a particular
            service, refund will only be applicable on that particular service
            and ‘not’ the entire bundle. - The client will not be entitled to
            any refunds after 15 days, from the date of purchase. - Services
            including but not limited to Social Media, SEO, Domain Registration
            and Web Hosting are not entitled to refunds under any circumstances.
            - In case of websites, refunds will not be entertained once the
            client has approved the design and the website is sent for
            development
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl my-6 text-slate-800">
            How to claim your refund
          </h2>
          <p className="text-base text-gray-500 font-semibold md:text-md">
            To assure your refund request is approved, please make sure you meet
            the following requirements: 1. Claim your refund specifying your
            concern by contacting us via any of the following three modes: i.
            Tollfree # (667) 423-5532 ii. Live Chat. Click here to start chat
            now iii. Email. Click Here to send us an email for a prompt response
            2. We will try to resolve your concern by virtue of our revision
            policy immediately or else will email you a refund request approval
            from our refund department. After the refund, your design rights
            would be obtained by https://TechCrafttechnologies.com and you would
            not be able to display any version of the design sent by company.
            Let us also specify that: i. Since the design rights would now be
            transferred to the company, you agree that you will have no right
            (direct or indirect) to use any response or other content, work
            product or media, nor will you have any ownership interest in or to
            the same. ii. Working in collaboration with the Government Copyright
            Agencies TechCrafttech.com would share Copyright Acquisition
            information for the refunded designs that would restrict the re-use
            of the designs as original designs in the future. If you have any
            questions or concerns about our Refund Policy, please contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
