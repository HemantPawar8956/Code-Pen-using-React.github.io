import React from 'react'

function Result({srcCode}) {
    return (
        <div className='w-[100%] h-[100%] box-border'>
            <div className="bg-[white] shadow rounded-lg h-[100%]">
                <h2
                    className="text-md px-3  font-semibold border-b-2 border-indigo-600 text-indigo-600">
                    Result
                </h2>
                <iframe
                    className="w-full h-[90%] "
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result