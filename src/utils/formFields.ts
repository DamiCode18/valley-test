type FormField = {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
  rules?: Record<string, string>;
};

export const formFields: FormField[] = [
  {
    name: "company_name",
    label: "Company's name",
    placeholder: "Sixteen Inc.",
    type: "text",
    rules: { required: "Company's name is required" },
  },
  {
    name: "company_website",
    label: "Company's website",
    placeholder: "https://sixteen.life/",
    type: "text",
    rules: { required: "Company's website is required" },
  },
  {
    name: "company_linkedin",
    label: "Company's Linkedin",
    placeholder: "https://www.linkedin.com/company/sixteenlife",
    type: "text",
    rules: { required: "Company's linkedin is required" },
  },
  {
    name: "company_industry",
    label: "Company's Industry",
    placeholder: "Digital Wellbeing",
    type: "text",
    rules: { required: "Company's industry is required" },
  },
  {
    name: "employee_count",
    label: "Employee Count",
    type: "number",
  },
  {
    name: "company_description",
    label: "Company's Description",
    placeholder: "Redesign your digital life, reduce your screen time",
    type: "text",
    rules: { required: "Company's description is required" },
  },
  {
    name: "company_goals",
    label: "Company's Goal",
    placeholder:
      "Help everyone to be more conscious of where they are spending their time",
    type: "text",
    rules: { required: "Company's Goal is required" },
  },
  {
    name: "headquarters",
    label: "Headquarters",
    placeholder: "Delhi, India",
    type: "text",
    rules: { required: "Headquarters is required" },
  },
  {
    name: "funding_round",
    label: "Funding Round",
    type: "text",
    rules: { required: "Funding round is required" },
  },
  {
    name: "faqs",
    label: "FAQs",
    placeholder: "https://sixteen.life/faq",
    type: "text",
    rules: { required: "FAQ is required" },
  },
];
