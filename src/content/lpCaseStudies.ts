export type LpCaseStudy = {
  slug: string;
  category: string;
  productName: string;
  summary: string;
  image: string;
  imageAlt: string;
  conversionLift: string;
  aovLift: string;
  rpvLift: string;
  before: {
    theme: string;
    conversionRate: string;
    aov: string;
    rpv: string;
  };
  after: {
    theme: string;
    conversionRate: string;
    aov: string;
    rpv: string;
  };
};

export const lpCaseStudies: LpCaseStudy[] = [
  {
    slug: "louvered-pergola",
    category: "Outdoor · Architectural",
    productName: "Louvered Aluminum Pergola",
    summary:
      "A $4,499 product page rebuilt with financing, a live build price, and a guided configurator.",
    image: "/assets/lp/case-study-pergola.png",
    imageAlt:
      "Before and after comparison of the Louvered Aluminum Pergola product page on mobile: default theme versus custom-built with financing and configurator",
    conversionLift: "+50%",
    aovLift: "+27%",
    rpvLift: "+91%",
    before: {
      theme: "Default theme",
      conversionRate: "0.7%",
      aov: "$3,290",
      rpv: "$23.03",
    },
    after: {
      theme: "Custom-built",
      conversionRate: "1.05%",
      aov: "$4,180",
      rpv: "$43.89",
    },
  },
  {
    slug: "forever-highchair",
    category: "Mealtime · Ages 6mo–10yr",
    productName: "Wooden Baby Highchair",
    summary:
      "A generic baby-gear listing rebuilt around a growth-stage story, bundled accessories, and trust badges.",
    image: "/assets/lp/case-study-highchair.png",
    imageAlt:
      "Before and after comparison of the Wooden Baby Highchair product page on mobile: default theme versus custom-built with growth-stage story and bundles",
    conversionLift: "+84%",
    aovLift: "+26%",
    rpvLift: "+80%",
    before: {
      theme: "Default theme",
      conversionRate: "1.25%",
      aov: "$94.20",
      rpv: "$3.98",
    },
    after: {
      theme: "Custom-built",
      conversionRate: "2.3%",
      aov: "$118.70",
      rpv: "$7.18",
    },
  },
  {
    slug: "heavyweight-hoodie",
    category: "Apparel · Streetwear",
    productName: "Heavyweight Hoodie",
    summary:
      "A single-SKU hoodie page rebuilt with social proof, bundle pricing, and frequently-bought-together upsells.",
    image: "/assets/lp/case-study-hoodie.png",
    imageAlt:
      "Before and after comparison of the Heavyweight Hoodie product page on mobile: default theme versus custom-built with social proof and bundle pricing",
    conversionLift: "+47%",
    aovLift: "+26%",
    rpvLift: "+85%",
    before: {
      theme: "Default theme",
      conversionRate: "1.25%",
      aov: "$94.20",
      rpv: "$1.18",
    },
    after: {
      theme: "Custom-built",
      conversionRate: "1.84%",
      aov: "$118.70",
      rpv: "$2.18",
    },
  },
];
