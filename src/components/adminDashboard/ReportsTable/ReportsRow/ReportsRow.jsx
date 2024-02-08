"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import toast from "react-hot-toast";

import useReports from "@/components/hooks/useReports";

const ReportsRow = ({ report, index }) => {
  const { _id, reportedBy, reportedTo, reason, reportDate } = report;
  const axiosSecure = useAxiosSecure();
  const { refetch } = useReports();

  const handleRejectReport = async () => {
    try {
      const res = await axiosSecure.delete(
        `/api/v1/reports/deleteReport/${_id}`
      );

      if (res.data.success) {
        toast.success("Rejected");
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr key={index}>
      <th align="center">{index + 1}</th>
      <td align="center">{reportedBy}</td>
      <td align="center">{reportedTo}</td>
      <td align="center">{reason}</td>
      <td align="center">{reportDate}</td>
      <td
        className="space-x-3 "
        align="center">
        <button className="btn btn-outline btn-success ">Accept</button>

        <button
          onClick={handleRejectReport}
          className="btn  btn-error">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default ReportsRow;
