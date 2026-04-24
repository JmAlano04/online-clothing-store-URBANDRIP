function HeaderHomepage({pageTitle}: {pageTitle: string}) {

    return (
        <div className="mt-10 text-center bg-gray-300 w-full pt-5 pb-5">
            <h1 className="text-5xl text-gray-800 font-syncopate font-bold">URBANDRIP - {pageTitle}</h1>
            <p className="text-gray-500 mt-6 text-xl">Here are our {pageTitle.toLowerCase()} for you!</p>
        </div>
    );
}

export default HeaderHomepage;