import { string, PropTypes } from "prop-types"

Table.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.shape({
            colOne: string,
            colTwo: string,
            colThree: string,
            colFour: string,
            colFive: string, 
            colSix: string,
        })
    ),
    listHeader: string, 
    listDescription: string,
    listButton: string, 
    listButtonLink: string,
}
  
export default function Table({listItems, listHeader, listDescription, listButton, listButtonLink}) {

    return (
        <div className="">
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">{listHeader}</h1>
            <p className="mt-2 text-sm text-gray-700">
                {listDescription}
            </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <a
                href={listButtonLink}
                className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {listButton}
            </a>
            </div>
        </div>
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Edit</span>
                    </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {listItems.map((item) => (
                        <tr key={item.colTwo}>
                            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                            <div className="flex items-center">
                                <div className="h-11 w-11 flex-shrink-0">
                                    <img 
                                        className="h-11 w-11 rounded-full" 
                                        src={`http://127.0.0.1:8090/api/files/${item.colFive}/${item.colSix}/${item.colOne}`} 
                                        alt=""
                                    />
                                </div>
                            </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <div className="text-gray-900">{item.colTwo}</div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    {item.colThree}
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{item.colFour}</td>
                            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                Edit<span className="sr-only">, {item.name}</span>
                            </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    )
}
  