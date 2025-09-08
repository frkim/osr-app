import React from 'react';

type StatusType = 'open' | 'in-progress' | 'resolved' | 'closed';
type PriorityType = 'low' | 'medium' | 'high' | 'critical';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    
    if (statusLower === 'open') return 'bg-yellow-100 text-yellow-800';
    if (statusLower === 'in-progress' || statusLower === 'in progress') return 'bg-blue-100 text-blue-800';
    if (statusLower === 'resolved') return 'bg-green-100 text-green-800';
    if (statusLower === 'closed') return 'bg-gray-100 text-gray-800';
    
    return 'bg-gray-100 text-gray-800'; // default
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getStatusColor(status)} ${className}`}
    >
      {status}
    </span>
  );
}

interface PriorityBadgeProps {
  priority: string;
  className?: string;
}

export function PriorityBadge({ priority, className = '' }: PriorityBadgeProps) {
  const getPriorityColor = (priority: string) => {
    const priorityLower = priority.toLowerCase();
    
    if (priorityLower === 'low') return 'bg-gray-100 text-gray-800';
    if (priorityLower === 'medium') return 'bg-blue-100 text-blue-800';
    if (priorityLower === 'high') return 'bg-orange-100 text-orange-800';
    if (priorityLower === 'critical') return 'bg-red-100 text-red-800';
    
    return 'bg-gray-100 text-gray-800'; // default
  };

  return (
    <span
      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${getPriorityColor(priority)} ${className}`}
    >
      {priority}
    </span>
  );
}
