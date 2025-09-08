import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | OSR System",
  description: "View and manage your on-site support requests",
};

// Dummy data for support requests
const requests = [
  {
    id: "REQ-001",
    subject: "Computer not booting",
    type: "Hardware Issue",
    location: "Building A, Room 201",
    status: "Open",
    priority: "High",
    submittedDate: "2025-09-07",
  },
  {
    id: "REQ-002",
    subject: "Software installation required",
    type: "Software Issue",
    location: "Building B, Room 102",
    status: "In Progress",
    priority: "Medium",
    submittedDate: "2025-09-06",
  },
  {
    id: "REQ-003",
    subject: "Network connectivity issues",
    type: "Network Issue",
    location: "Building C, Room 305",
    status: "Resolved",
    priority: "Critical",
    submittedDate: "2025-09-05",
  },
  {
    id: "REQ-004",
    subject: "Printer not working",
    type: "Hardware Issue",
    location: "Building A, Room 110",
    status: "Open",
    priority: "Low",
    submittedDate: "2025-09-04",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Open":
      return "bg-yellow-100 text-yellow-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Resolved":
      return "bg-green-100 text-green-800";
    case "Closed":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "Low":
      return "bg-gray-100 text-gray-800";
    case "Medium":
      return "bg-blue-100 text-blue-800";
    case "High":
      return "bg-orange-100 text-orange-800";
    case "Critical":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Support Request Dashboard</h1>
            <Link
              href="/request/new"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
            >
              + New Request
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <DashboardCard title="Total Requests" value="4" color="bg-blue-50 border-blue-200" />
            <DashboardCard title="Open" value="2" color="bg-yellow-50 border-yellow-200" />
            <DashboardCard title="In Progress" value="1" color="bg-purple-50 border-purple-200" />
            <DashboardCard title="Resolved" value="1" color="bg-green-50 border-green-200" />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Submitted
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-900">{request.id}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{request.subject}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">{request.type}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">{request.location}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                          request.status
                        )}`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getPriorityColor(
                          request.priority
                        )}`}
                      >
                        {request.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">{request.submittedDate}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">
                      <Link
                        href={`/request/${request.id}`}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        View
                      </Link>
                      <Link
                        href={`/request/${request.id}/edit`}
                        className="text-green-600 hover:text-green-900"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`rounded-lg border p-4 ${color}`}>
      <h2 className="text-gray-600 text-sm font-medium">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
