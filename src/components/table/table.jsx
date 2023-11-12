
import { useTable,useSortBy,usePagination,useGlobalFilter } from "react-table"


const TableComponent = ({tableData,columns,sortBy}) => {

console.log("tabledata",tableData,"sort by",sortBy)  


    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      pageIndex,
      page,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      pageCount,
      gotoPage,
      
      setPageSize: setTablePageSize,
      state: { pageIndex: tablePageIndex, pageSize: tablePageSize, },
      state,
      setGlobalFilter,
    } =useTable(
      {
        columns,
        data: tableData,
        initialState: {
          sortBy: [
            {
              id: sortBy, 
              desc: true,
            },
          ],
        },
      },
      useGlobalFilter, 
      useSortBy,
      usePagination
    );
    const { globalFilter, } = state;
    const paginationProps = {
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      pageCount,
      gotoPage,
      pageIndex,
      tablePageIndex
    };

  return (
    <div className=" mx-1 shadow-xl  ">
    <div className="flex justify-between p-2">
<p className="font-bold">Recruit Rating</p>
<div className='border-2 rounded-md flex p-1'>
          <p className='text-gray-500'> Time period:</p>
          <select className='border-none'>
            <option value='dataForJanJune'>January-June</option>
            <option value='dataForJulyDec'>July-December</option>
          </select>
        </div>
    </div>

    <div className="   h-fit">
      <div className=" flex flex-col justify-center ">
        <div className="flex">
      </div>
        <table  
          className="w-full  bg-white border-collapse border  border-1 border-gray-300  divide-y   text-gray-900"
          {...getTableProps()}

        >
          <thead className="bg-gray-100 relative text-black text-xs ">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                  <th className="h-8 font-serif border border-10">
                
                    <input type="checkbox" />
                  </th>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="h-8 font-serif border  border-10 "
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </th>
                ))}
               
              </tr>
            ))}
          </thead>
          <tbody
            className="divide-y divide-gray-200"
            {...getTableBodyProps()}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                   <td className="font-normal p-1 border border-1 text-center border-gray-200">
                   
                      <input type="checkbox" />
                    </td>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="  font-normal p-1  border  border-1 text-center border-gray-200"
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

  
  
      </div>
    </div>
  </div>
 
  )
}

export default TableComponent