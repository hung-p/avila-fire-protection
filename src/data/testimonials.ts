export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Homeowner",
    content:
      "The team was professional and efficient. They fixed our leak quickly and left everything spotless. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Business Owner",
    content:
      "We've been using their commercial plumbing services for years. Always reliable and professional. Great service!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    id: 3,
    name: "Mike Wilson",
    role: "Property Manager",
    content:
      "Their emergency service is outstanding. They arrived within 30 minutes and solved our issue. Excellent work!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Restaurant Owner",
    content:
      "Outstanding fire sprinkler installation service. They worked after hours to minimize disruption to our business.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];
