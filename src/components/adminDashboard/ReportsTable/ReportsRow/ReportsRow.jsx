"use client";

import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useReports from "@/components/hooks/useReports";
import useAuth from "@/components/hooks/useAuth";
import formateDate from "@/util/formateDate";

const ReportsRow = ({ report, index }) => {
  const { userId, _id, reportedBy, reportedTo, reason, reportDate } = report;
  const axiosSecure = useAxiosSecure();
  const { refetch } = useReports();
  const { user: admin } = useAuth();

  const formattedDate = formateDate(reportDate);

  const handleAcceptReport = async () => {
    try {
      const banInfo = {
        userId,
        reportedTo,
        bannedBy: admin.email,
        reason,
        bannedFrom: new Date().toLocaleDateString("en-UK"),
      };

      const res = await axiosSecure.post(
        `/api/v1/reports/accept/${_id}`,
        banInfo
      );

      if (res.data.success) {
        toast.success("Report Accepted");
        refetch();
      }
    } catch (error) {
      console.error(error);
    }
  };

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
      <td align="center">{formattedDate}</td>
      <td
        className="space-x-3 "
        align="center">
        <button
          onClick={handleAcceptReport}
          className="btn btn-outline btn-success ">
          Accept
        </button>

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
