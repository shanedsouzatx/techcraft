/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type PricingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  cardTitle?: string;
};

const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  cardTitle,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [packageName, setPackageName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cardTitle) setPackageName(cardTitle);
  }, [cardTitle]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      phone,
      message,
      budget,
      packageName,
    };

    try {
      const response = await fetch(
        "https://redixtechnologies-4d715954081e.herokuapp.com/api/v1/budget-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        router.push("/thank-you"); // Navigate to Thank You page
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>
      <div
        ref={modalRef}
        className="bg-[#2e2e2e] rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 max-w-2xl w-full z-10 animate-slide-in"
        onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the backdrop
      >
        <div className=" py-5 relative">
          <button
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="px-10">
          <h2 className="text-center text-[1.8rem] text-white mt-5 font-bold">
            We would like to hear from you.
          </h2>
          <p className="text-center text-white text-base font-medium mt-3 ">
            Heads up! We require that you sign up for Weblogies services and
            packages. We make all your dreams come true in a successful project.
          </p>

          <form className="py-8" onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col md:flex-row space-x-4">
              <div className="w-full md:w-1/2 px-3 flex items-center border border-gray-400 rounded-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-3 text-base placeholder:text-slate-400 border-none bg-transparent focus:outline-none focus:ring-0 text-slate-400"
                  aria-label="Full Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 flex items-center border border-gray-400 rounded-full">
                <input
                  type="email"
                  id="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 text-base placeholder:text-slate-400 border-none bg-transparent focus:outline-none focus:ring-0 text-slate-400"
                  aria-label="Email"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col md:flex-row space-x-4">
              <div className="w-full md:w-1/2 px-3 flex items-center border border-gray-400 rounded-full">
                <input
                  type="text"
                  id="phone"
                  placeholder="Contact Number *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-3 text-base placeholder:text-slate-400 border-none bg-transparent focus:outline-none focus:ring-0 text-slate-400"
                  aria-label="Contact Number"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 flex items-center border border-gray-400 rounded-full">
                <select
                  id="budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full py-3 text-base placeholder:text-slate-400 border-none bg-transparent focus:outline-none focus:ring-0 text-slate-400"
                  aria-label="Budget"
                  required
                >
                  <option value="" disabled>
                    Budget range
                  </option>
                  <option value="Less than $1000">Less than $1000</option>
                  <option value="from $1000 to $5000">
                    from $1000 to $5000
                  </option>
                  <option value="from $5000 to $15000">
                    from $5000 to $15000
                  </option>
                  <option value="from $5000 to $15000">
                    from $15000 to $50000
                  </option>
                  <option value="from $50000 to $100000">
                    from $50000 to $100000
                  </option>
                  <option value="from $50000 to $100000">
                    more than $100000
                  </option>
                </select>
              </div>
            </div>
            <div className="w-full px-3 flex items-center border border-gray-400 rounded-full">
              <select
                name="packageName"
                id="packages"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                className="w-full py-3 text-base placeholder:text-slate-400 border-none bg-transparent focus:outline-none focus:ring-0 text-slate-400"
                aria-invalid="false"
                required
              >
                <option value="">Select Package</option>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option
                    value="Professional Website Development - $199.00"
                    data-pack_id="1"
                  >
                    Professional Website Development - $199.00
                  </option>
                  <option
                    value="Wordpress Website Development - $349.00"
                    data-pack_id="2"
                  >
                    Wordpress Website Development - $349.00
                  </option>
                  <option
                    value="E-commerce Website Development - $699.00"
                    data-pack_id="3"
                  >
                    E-commerce Website Development - $699.00
                  </option>
                  <option value="Elite Website Package - $1,494.00">
                    Elite Website Package - $1,494.00
                  </option>
                  <option value="Combo Package - $1,749.99">
                    Combo Package - $1,749.99
                  </option>
                  <option value="Corporate Website Package - $2,394.00">
                    Corporate Website Package - $2,394.00
                  </option>
                  <option value="Business Website Package - $2,999.00">
                    Business Website Package - $2,999.00
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Startup E-Commerce Package - $794.00">
                    Startup E-Commerce Package - $794.00
                  </option>
                  <option value="Professional E-Commerce Package - $1,394.00">
                    Professional E-Commerce Package - $1,394.00
                  </option>
                  <option value="Elite E-Commerce Package - $3,694.00">
                    Elite E-Commerce Package - $3,694.00
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Startup Video Package - $499.00">
                    Startup Video Package - $499.00
                  </option>
                  <option value="Classic Video Package - $999.00">
                    Classic Video Package - $999.00
                  </option>
                  <option value="Premium Video Package - $1,499.00">
                    Premium Video Package - $1,499.00{" "}
                  </option>
                  <option value="Unlimited Video Package - $2,299.00">
                    Unlimited Video Package - $2,299.00{" "}
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Startup Collateral Package - $99.00">
                    Startup Collateral Package - $99.00{" "}
                  </option>
                  <option value="Collateral Classic Package - $199.00">
                    Collateral Classic Package - $199.00
                  </option>
                  <option value="Premium Collateral Package - $399.00">
                    Premium Collateral Package - $399.00
                  </option>
                  <option value="Unlimited Collateral Package - $499.00">
                    Unlimited Collateral Package - $499.00{" "}
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Basic Logo Package - $44.00">
                    Basic Logo Package - $44.00{" "}
                  </option>
                  <option value="Start Up Logo Package - $84.00">
                    Start Up Logo Package - $84.00
                  </option>
                  <option value="Professional Logo Package - $124.00">
                    Professional Logo Package - $124.00
                  </option>
                  <option value="Elite Logo Package - $174.00">
                    Elite Logo Package - $174.00
                  </option>
                  <option value="Business Logo Package - $244.00">
                    Business Logo Package - $244.00
                  </option>
                  <option value="Gold Logo Package - $514.00">
                    Gold Logo Package - $514.00
                  </option>
                  <option value="3D Logo Package - $534.00">
                    3D Logo Package - $534.00
                  </option>
                  <option value="Professional Illustrative Package - $584.00">
                    Professional Illustrative Package - $584.00
                  </option>
                  <option value="Basic Illustrative Logo Package - $284.00">
                    Basic Illustrative Logo Package - $284.00
                  </option>
                  <option value="Startup Illustrative Logo Package - $384.00">
                    Startup Illustrative Logo Package - $384.00
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Startup Plan - $350.00">
                    Startup Plan - $350.00
                  </option>
                  <option value="Scaling Plan - $700.00">
                    Scaling Plan - $700.00
                  </option>
                  <option value="Venture Plan - $1200.00">
                    Venture Plan - $1200.00
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Business Website Package - $2,499.99">
                    Business Website Package - $2,499.99
                  </option>
                  <option value="Automated/Interactive Conferencing Portal Package - $4,999.99">
                    Automated/Interactive Conferencing Portal Package -
                    $4,999.99
                  </option>
                  <option value="Automated/Interactive E-Commerce Package - $7,999.99">
                    Automated/Interactive E-Commerce Package - $7,999.99
                  </option>
                </optgroup>
                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Custom Basic Website Package - $199.00">
                    Custom Basic Website Package - $199.00
                  </option>

                  <option value="Basic Logo Package - $35.00">
                    Basic Logo Package - $35.00
                  </option>
                  <option value="Economy Logo Package - $89.00">
                    Economy Logo Package - $89.00
                  </option>
                  <option value="Elite Logo Package - $159.00">
                    Elite Logo Package - $159.00
                  </option>
                  <option value="New Business Startup Package - $399.00">
                    New Business Startup Package - $399.00
                  </option>
                  <option value="Bundle Package - $599.00">
                    Bundle Package - $599.00
                  </option>
                  <option value="Starter Logo Package - $19.00">
                    Starter Logo Package - $19.00
                  </option>
                  <option value="LP - Custom Basic Website Package - $144.00">
                    Custom Basic Website Package - $144.00
                  </option>
                  <option value="LP - Basic Website Package - $199.00">
                    LP- Basic Website Package - $199.00
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Basic Combo Package - $569.99">
                    Basic Combo Package - $569.99
                  </option>
                  <option value="Startup Combo Package - $869.99">
                    Startup Combo Package - $869.99
                  </option>
                  <option value="Professional Combo Package - $1,249.99">
                    Professional Combo Package - $1,249.99
                  </option>
                  <option value="Identity Combo Package - $1,479.00">
                    Identity Combo Package - $1,479.00
                  </option>
                  <option value="Corporate Combo Package - $1,749.99">
                    Corporate Combo Package - $1,749.99
                  </option>
                  <option value="Elite Combo Package - $3,949.99">
                    Elite Combo Package - $3,949.99
                  </option>
                  <option value="Advance Combo Package - $4,979.00">
                    Advance Combo Package - $4,979.00
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Blog Post Package - $16.00">
                    Blog Post Package - $16.00
                  </option>

                  <option value="Articles Package - $16.00">
                    Articles Package - $16.00
                  </option>
                  <option value="Newsletter Content Package - $16.00">
                    Newsletter Content Package - $16.00
                  </option>

                  <option value="Web Content Writing Package - $16.00">
                    Web Content Writing Package - $16.00
                  </option>

                  <option value="Whitepapers Package - $49">
                    Whitepapers Package - $49
                  </option>

                  <option value="Product Descriptions Package - $25">
                    Product Descriptions Package - $25
                  </option>

                  <option value="Infograph Package - $200.00">
                    Infograph Package - $200.00
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="SOCIAL MEDIA PROFILE CREATION Package - $95">
                    SOCIAL MEDIA PROFILE CREATION Package - $95
                  </option>

                  <option value="SOCIAL MEDIA MANAGEMENT Package - $500">
                    SOCIAL MEDIA MANAGEMENT Package - $500
                  </option>

                  <option value="SOCIAL MEDIA ADVERTISING -CONSULTATION, SETUP &amp; EXECUTION Package - $1000">
                    SOCIAL MEDIA ADVERTISING -CONSULTATION, SETUP &amp;
                    EXECUTION Package - $1000
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="BASIC Package - $800">
                    BASIC Package - $800
                  </option>
                  <option value="Medium Package - $1200">
                    Medium Package - $1200
                  </option>
                  <option value="ENTERPRISE Package - $1600">
                    ENTERPRISE Package - $1600
                  </option>
                </optgroup>

                <optgroup
                  className="pack_select"
                  label="&nbsp;&nbsp;&nbsp;&nbsp;--------------------------------------------"
                >
                  <option value="Blog Post Package - $16.00">
                    Blog Post Package - $16.00
                  </option>
                  <option value="Articles Package - $16.00">
                    Articles Package - $16.00
                  </option>
                  <option value="Newsletter Content Package - $16.00">
                    Newsletter Content Package - $16.00
                  </option>
                  <option value="Web Content Writing Package - $16.00">
                    Web Content Writing Package - $16.00
                  </option>
                  <option value="Whitepapers Package - $49.00">
                    Whitepapers Package - $49.00
                  </option>
                  <option value="Product Descriptions Package - $25.00">
                    Product Descriptions Package - $25.00
                  </option>
                  <option value="Infograph Package - 200.00">
                    Infograph Package - 200.00
                  </option>
                </optgroup>
              </select>
            </div>

            <div className="w-full px-3 flex items-center border border-gray-400 rounded-2xl mt-5">
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full py-3 text-base placeholder:text-slate-400 border-none bg-transparent focus:outline-none focus:ring-0 text-slate-400 resize-none"
                placeholder="Please tell us briefly about your business or the services you provide"
                required
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className={`text-base font-semibold cursor-pointer py-3 mt-7 w-44 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-full uppercase ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  `Submit`
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PricingModal;
