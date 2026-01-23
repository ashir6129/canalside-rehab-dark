import { ShieldCheck, Heart, Users } from "lucide-react";

const pillars = [
  {
    title: "Excellence",
    description: "We are committed to continuous improvement, staff development, and evidence-informed practice to ensure the highest quality of care.",
    icon: <ShieldCheck className="text-[var(--accent)]" size={40} />,
  },
  {
    title: "Respect",
    description: "We value each person's uniqueness, autonomy, and capacity for change, offering personalised care that honours their lived experience.",
    icon: <Heart className="text-[var(--accent)]" size={40} />,
  },
  {
    title: "Community",
    description: "We foster a sense of belonging and support through peer relationships, group engagement, and connection to 12-step fellowships.",
    icon: <Users className="text-[var(--accent)]" size={40} />,
  },
];

const ValuePillars = () => {
  return (
    <section className="py-24 bg-[#f4f7f6]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-[var(--accent)]">
              <div className="mb-6">{pillar.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-[var(--primary)]">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;