import React from "react";
import { OverviewData } from "../../utils/overviewData";

const OverAllData = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 items-center justify-items-stretch my-2">
      {OverviewData.map((item, index) => {
        return (
            <div className="border-2 rounded-md  ">
          <div className="  p-2  ">
            <div className="flex " >
             <p className="flex"> {item?.icon}<span className="ml-3">{item?.total}</span> </p>
            </div>
            <div className="flex justify-between">
              <p className="text-2xl font-bold">

              {item?.count}
              </p>
           {item?.percentage && <p className="text-xs text-green-500 bg-green-100 p-1 rounded-md m-1">

              {item?.percentage}
              </p>}
            </div>
          </div>
            <div className="flex text-xs border-t-2 p-2">
                update {item?.update}
            </div>
            </div>
        );
      })}
    </div>
  );
};

export default OverAllData;
