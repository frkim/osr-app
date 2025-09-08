import React from 'react';
import { notFound } from "next/navigation";
import Link from "next/link";

// This would normally come from a database
const requestDetails = {
  id: "REQ-001",
  subject: "Computer not booting",
  description:
    "My computer won't boot past the initial startup screen. I've tried restarting multiple times but it's stuck on the logo screen.",
  type: "Hardware Issue",
  location: "Building A, Room 201",
  status: "Open",
  priority: "High",
  submittedBy: "John Doe",
  submittedDate: "2025-09-07",
  contactInfo: "john.doe@example.com",
  lastUpdated: "2025-09-07",
  comments: [
    {
      id: "comment-1",
      text: "I'll be at your location in 30 minutes to check the issue.",
      author: "Tech Support",
      timestamp: "2025-09-07T10:30:00",
    },
  ],
};

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

export default function RequestDetailsPage({ params }: { params: { id: string } }) {
  // Use the id directly from params
  // This is a server component, but for future Next.js compatibility
  // we should adapt to the appropriate pattern
  const id = params.id;

  // In a real app, you would fetch the request details based on id
  const request = requestDetails;

  if (!request) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Link href="/dashboard" className="text-blue-600 hover:text-blue-800">
                  &larr; Back to Dashboard
                </Link>
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                Request: {request.id} - {request.subject}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getStatusColor(
                  request.status
                )}`}
              >
                {request.status}
              </span>
              <span
                className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${getPriorityColor(
                  request.priority
                )}`}
              >
                {request.priority}
              </span>
              <Link
                href={`/request/${id}/edit`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
              >
                Edit Request
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500">Request Type</h2>
                <p className="mt-1 text-gray-900">{request.type}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Location</h2>
                <p className="mt-1 text-gray-900">{request.location}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Submitted By</h2>
                <p className="mt-1 text-gray-900">{request.submittedBy}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Contact Info</h2>
                <p className="mt-1 text-gray-900">{request.contactInfo}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500">Submitted Date</h2>
                <p className="mt-1 text-gray-900">{request.submittedDate}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Last Updated</h2>
                <p className="mt-1 text-gray-900">{request.lastUpdated}</p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500">Assigned To</h2>
                <p className="mt-1 text-gray-900">Tech Support Team</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-3">Description</h2>
            <div className="bg-gray-50 p-4 rounded-md text-gray-700">{request.description}</div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-3">Communication</h2>
            <div className="space-y-4">
              {request.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-gray-800">{comment.author}</p>
                    <span className="text-sm text-gray-500">{comment.timestamp}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-md font-medium text-gray-800 mb-2">Add Comment</h3>
              <textarea
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Type your comment here..."
              ></textarea>
              <div className="mt-2 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors">
                  Submit Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
