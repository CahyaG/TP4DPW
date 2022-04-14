function Table({ tableData }) {
    return (
        <table className="table mt-5">
        <thead>
            <tr>
                <th className="w-25">Label</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
        {
                tableData.map((data, index)=>{
                    return(
                        <tr key={index}>
                            <td>{data.label}</td>
                            <td>{data.value}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}

export default Table;