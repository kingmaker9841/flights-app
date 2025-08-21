import { ChevronDownIcon } from "../../common/Icons";

const FAQItem = ({ question, answer, index }) => (
  <details key={index} className="group">
    <summary className="list-none cursor-pointer py-6 flex items-start justify-between gap-4 hover:bg-gray-bg transition-colors">
      <span className="text-text-primary font-medium">{question}</span>
      <ChevronDownIcon className="w-5 h-5 text-text-secondary flex-shrink-0 mt-0.5 group-open:rotate-180 transition-transform duration-300 ease-out" />
    </summary>
    <div className="pb-6 pr-8 text-sm text-text-secondary leading-relaxed animate-fadeIn">
      {answer}
    </div>
  </details>
);

export default FAQItem;
