import FAQItem from "./FAQItem";
import { FAQ_DATA } from "../../../assets/data";

const FAQSection = () => (
  <section className="px-6 py-12 bg-gray-bg">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-normal text-text-primary mb-6">
        Frequently asked questions
      </h2>
      <div className="divide-y divide-gray-border">
        {FAQ_DATA.map((item, index) => (
          <FAQItem
            key={index}
            question={item.q}
            answer={item.a}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
