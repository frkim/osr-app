'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // Get request details
  const request = getRequestDetails(params.id);

  if (!request) {
    notFound();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Redirect or show success message
    } catch (err) {
      setError('Failed to update request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  defaultValue={request.type}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
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
                  defaultValue={request.priority}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                defaultValue={request.subject}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                defaultValue={request.location}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                defaultValue={request.description}
                className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="flex justify-end space-x-3">
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