import { BRAND } from "@/lib/brand";

export const FAQS = {
  home: [
    {
      question: "What makes City Vada Pav and Chai different?",
      answer:
        "We focus on authentic Mumbai flavor, fast service, and a consistent, hygienic process designed for repeat cravings."
    },
    {
      question: "Do you offer delivery?",
      answer:
        "Yes. We support delivery via major platforms and phone orders for quick pickup."
    },
    {
      question: "Where do you serve?",
      answer: `We currently serve ${BRAND.serviceArea} with plans to expand to more cities.`
    },
    {
      question: "Can I enquire about a franchise?",
      answer:
        "Absolutely. Use the franchise form to receive details about the model, investment, and next steps."
    }
  ],
  menu: [
    {
      question: "Is the menu vegetarian?",
      answer:
        "Yes. The menu is vegetarian and inspired by Mumbai street-food staples."
    },
    {
      question: "Do you have different spice levels?",
      answer:
        "Yes. Items are labeled mild, medium, or hot so you can pick the heat level you prefer."
    },
    {
      question: "What are the most popular items?",
      answer:
        "Classic Vada Pav, Fiery Garlic Vada Pav, Cutting Chai, and Chura Pav are consistent customer favorites."
    },
    {
      question: "Do prices vary for delivery?",
      answer:
        "Delivery pricing can vary by platform and location. In-store prices are shown on the menu."
    }
  ],
  franchise: [
    {
      question: "What is the franchise investment range?",
      answer:
        "Investment varies by location size and format. We share the full breakdown after your enquiry."
    },
    {
      question: "What support do franchise partners receive?",
      answer:
        "You receive menu SOPs, setup guidance, brand assets, and an operations playbook for launch and daily execution."
    },
    {
      question: "How long does it take to launch?",
      answer:
        "Timelines depend on location readiness. Most partners can open within a few weeks after approval."
    },
    {
      question: "Is delivery part of the model?",
      answer:
        "Yes. The menu and packaging are designed for delivery performance from day one."
    }
  ],
  about: [
    {
      question: "Where did the brand start?",
      answer:
        "We started with a simple goal: bring authentic Mumbai street-food taste to Mohali with consistency and hygiene."
    },
    {
      question: "What is the brand promise?",
      answer:
        "Hot, fresh, and reliable flavor — every order, every day."
    },
    {
      question: "Do you use fresh ingredients?",
      answer:
        "Yes. We prioritize fresh prep cycles to keep flavor and texture consistent."
    }
  ],
  contact: [
    {
      question: "What are your operating hours?",
      answer: `${BRAND.hours}.`
    },
    {
      question: "Do you take bulk or catering orders?",
      answer:
        "Yes. Share your requirement via the contact form or WhatsApp for the fastest response."
    },
    {
      question: "How can I reach you quickly?",
      answer:
        "WhatsApp is the fastest channel, followed by phone and email."
    }
  ]
};
