import {
  PricingTier,
  PricingTierFrequency,
} from "@/data/config/pricingDataInterface";

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    id: "tier-1",
    href: "/signup",
    discountPrice: { "1": "", "2": "" },
    price: { "1": "$0", "2": "$0" },
    description:
      "Try out the app for free, no credit card required. Get as much out of it as you want.",
    features: [
      "Task prioritization",
      "Multiple workspaces",
      "AI planning",
      "AI document analysis",
      "Generative AI",
    ],
    featured: false,
    highlighted: false,
    cta: "Sign up",
  },
  {
    name: "Pro (limited offer)",
    id: "tier-2",
    href: "/signup",
    discountPrice: { "1": "", "2": "" },
    price: { "1": "$9.95", "2": "$99.50" },
    description:
      "OneTask helps you save time and money by managing your tasks on your behalf.",
    features: [
      "Task prioritization",
      "Multiple workspaces",
      "AI planning",
      "AI document analysis",
      "Generative AI",
      "Custom Features",
      "Priority support",
    ],
    featured: false,
    highlighted: true,
    cta: "Get started",
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: "bc1f35fd-8da4-44b7-b39c-86e36d8fbeeb",
    value: "1",
    label: "Monthly",
    priceSuffix: "/month",
  },
  {
    id: "09c3ebe8-c080-426a-9dfe-85a9f3af2279",
    value: "2",
    label: "Annually",
    priceSuffix: "/year",
  },
];
