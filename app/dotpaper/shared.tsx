/**
 * Application content shared by the server page and the client hero window.
 * Everything here is wording about what each application does.
 * There are no sample numbers, names, invoices or records.
 */

export const applications = [
  {
    id: "service",
    name: "Service Desk",
    short: "Service",
    description:
      "Keep every job moving. Manage requests, work orders, approvals and service history in one place.",
    covers: ["Requests", "Work orders", "Approvals", "Service history"],
  },
  {
    id: "finance",
    name: "Financials",
    short: "Finance",
    description:
      "Understand the money coming in and going out. Keep estimates, invoices and payments connected.",
    covers: ["Estimates", "Invoices", "Payments"],
  },
  {
    id: "customers",
    name: "Customers",
    short: "Customers",
    description:
      "Keep customer details, conversations, enquiries and follow-ups together. Give your team the full picture.",
    covers: ["Customer details", "Conversations", "Enquiries", "Follow-ups"],
  },
  {
    id: "inventory",
    name: "Inventory",
    short: "Inventory",
    description:
      "Know what you have, where it is and what needs attention. Connect stock movements to everyday work.",
    covers: ["What you have", "Where it is", "What needs attention", "Stock movements"],
  },
] as const;

export type ApplicationId = (typeof applications)[number]["id"];