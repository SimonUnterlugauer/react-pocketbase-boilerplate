import PageHeading from "../subcomponents/headings/PageHeading";
import SectionHeading from "../subcomponents/headings/SectionHeading"

const tabs = [
    { name: 'Account', href: '#', current: true },
    { name: 'Billing', href: '#', current: false },
]

export default function Settings() {
    return (
        <div>
            <PageHeading heading="Settings"/>

            <SectionHeading tabs={tabs}/>
        </div>
    )
}