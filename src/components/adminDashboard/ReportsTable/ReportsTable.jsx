"use client";

import useReports from "@/components/hooks/useReports";
import ReportsRow from "./ReportsRow/ReportsRow";
import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";

const ReportsTable = () => {
  const { reports, reportsLoading } = useReports();

  if (reportsLoading) {
    return <p>report loading ...</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <TitleDashboard title={"Manage Reports"} />

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th align="center"></th>
              <th align="center">Reported By</th>
              <th align="center">Reported To</th>
              <th align="center">Reason</th>
              <th align="center">Report Date</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reports?.map((report, index) => (
              <ReportsRow
                key={report._id}
                report={report}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsTable;
