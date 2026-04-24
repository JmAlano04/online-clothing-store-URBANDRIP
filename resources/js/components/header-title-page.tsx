function HeaderHomepage({pageTitle}: {pageTitle: string}) {

    return (
        <div className="mt-10 text-center bg-gray-100 w-full pt-10 pb-10">
            <h1 className="text-3xl text-gray-800 font-syncopate font-bold">URBANDRIP - {pageTitle}</h1>
       </div>
    );
}

export default HeaderHomepage;