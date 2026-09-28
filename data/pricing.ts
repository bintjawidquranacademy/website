export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  category: "30min" | "60min";
  badge?: string;
  popular?: boolean;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "plan-one",
    name: "Plan One",
    price: "£40",
    billing: "/month",
    category: "30min",
    badge: "30 Mins",
    features: [
      "5 Days a Week",
      "20 Classes a Month",
      "30 Minute Sessions",
    ],
  },
  {
    id: "plan-one-x2",
    name: "Plan One x2",
    price: "£80",
    billing: "/month",
    category: "60min",
    badge: "1 Hour (x2)",
    features: [
      "5 Days a Week",
      "20 Classes a Month",
      "One Hour Sessions",
    ],
  },
  {
    id: "plan-two",
    name: "Plan Two",
    price: "£35",
    billing: "/month",
    category: "30min",
    badge: "30 Mins",
    features: [
      "4 Days a Week",
      "16 Classes a Month",
      "30 Minute Sessions",
    ],
  },
  {
    id: "plan-two-x2",
    name: "Plan Two x2",
    price: "£70",
    billing: "/month",
    category: "60min",
    badge: "1 Hour (x2)",
    features: [
      "4 Days a Week",
      "16 Classes a Month",
      "One Hour Sessions",
    ],
  },
  {
    id: "plan-three",
    name: "Plan Three",
    price: "£30",
    billing: "/month",
    category: "30min",
    badge: "30 Mins",
    features: [
      "3 Days a Week",
      "12 Lessons a Month",
      "30 Minute Sessions",
    ],
  },
  {
    id: "plan-three-x2",
    name: "Plan Three x2",
    price: "£60",
    billing: "/month",
    category: "60min",
    badge: "1 Hour (x2)",
    features: [
      "3 Days a Week",
      "12 Classes a Month",
      "One Hour Sessions",
    ],
  },
  {
    id: "weekend-plan",
    name: "Weekend Plan",
    price: "£25",
    billing: "/month",
    category: "30min",
    badge: "Weekend",
    features: [
      "Sat-Sun Classes",
      "8 Lessons a Month",
      "30 Minute Sessions",
    ],
  },
  {
    id: "weekend-plan-x2",
    name: "Weekend Plan x2",
    price: "£40",
    billing: "/month",
    category: "60min",
    badge: "Weekend 1 Hr",
    features: [
      "Sat-Sun Classes",
      "8 Lessons a Month",
      "One Hour Sessions",
    ],
  },
  {
    id: "weekly-plan-one-day",
    name: "Weekly Plan for one day",
    price: "£20",
    billing: "/month",
    category: "30min",
    badge: "1 Day / Week",
    features: [
      "1 Class a Week",
      "4 Classes a Month",
      "30 Minute Sessions",
    ],
  },
];
