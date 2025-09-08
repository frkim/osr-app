import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import EditForm from './edit-form';

// This would normally come from a database - for demo purposes only
const getRequestDetails = (id: string) => {
  // Here we're just hardcoding the data for demo, but in a real app
  // you would fetch this from an API based on the ID
  if (id === 'REQ-001') {
    return {
      id: 'REQ-001',
      subject: 'Computer not booting',
      description: "My computer won't boot past the initial startup screen. I've tried restarting multiple times but it's stuck on the logo screen.",
      type: 'hardware',
      location: 'Building A, Room 201',
      status: 'Open',
      priority: 'high',
      submittedBy: 'John Doe',
      submittedDate: '2025-09-07',
      contactInfo: 'john.doe@example.com',
      lastUpdated: '2025-09-07',
    };
  }

  // Generic request for other IDs
  return {
    id: id,
    subject: `Support Request ${id}`,
    description: 'Details about this support request.',
    type: 'other',
    location: 'Main Building',
    status: 'Open',
    priority: 'medium',
    submittedBy: 'User',
    submittedDate: '2025-09-08',
    contactInfo: 'user@example.com',
    lastUpdated: '2025-09-08',
  };
};

export default function EditRequestPage({ params }: { params: { id: string } }) {
  // Get request details
  const request = getRequestDetails(params.id);

  if (!request) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Link href={`/request/${params.id}`} className="text-blue-600 hover:text-blue-800">
                &larr; Back to Request Details
              </Link>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                Edit Request: {params.id}
              </h1>
            </div>
          </div>

          <EditForm request={request} id={params.id} />
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Link href={`/request/${id}`} className="text-blue-600 hover:text-blue-800">
                &larr; Back to Request Details
              </Link>
              <h1 className="text-2xl font-bold text-gray-800 mt-4">
                Edit Request: {id}
              </h1>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">
                  Request Type
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  defaultValue={request.type}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="hardware">Hardware Issue</option>
                  <option value="software">Software Issue</option>
                  <option value="network">Network Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  defaultValue={request.priority}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                defaultValue={request.status}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={request.location}
                placeholder="Building and room number"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                defaultValue={request.subject}
                placeholder="Brief description of the issue"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                defaultValue={request.description}
                placeholder="Detailed description of the issue"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Information
              </label>
              <input
                type="text"
                id="contactInfo"
                name="contactInfo"
                defaultValue={request.contactInfo}
                placeholder="Phone number or email"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex justify-end gap-4">
              <Link
                href={`/request/${params.id}`}
                className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
