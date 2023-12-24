import PropTypes from "prop-types";
import { useState } from "react";
  
SectionHeading.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        current: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
  
export default function SectionHeading({ tabs }) {

    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const handleClick = (tabName) => () => {
        setActiveTab(tabName);
    };

    const classNames = (isActive, baseStyles) => {
        if (isActive) {
          return `border-indigo-500 text-indigo-600 ${baseStyles}`;
        }
        return `border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 ${baseStyles}`;
      };

    return (
      <div className="border-b border-gray-200 pb-5 sm:pb-0">
            <div className="mt-3 sm:mt-4">
                {/* Small Screen */}
                <div className="sm:hidden">
                    <label htmlFor="current-tab" className="sr-only">
                        Select a tab
                    </label>
                    <select
                        id="current-tab"
                        name="current-tab"
                        className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue={tabs.find((tab) => tab.current).name}
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                {/* Big Screen */}
                <div className="hidden sm:block">
                    <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            onClick={handleClick(tab.name)}
                            className={classNames(tab.name === activeTab, 'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium')}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </a>
                    ))}
                    </nav>
                </div>
          </div>
      </div>
    );
}
  