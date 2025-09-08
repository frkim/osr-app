export type RequestType = 'hardware' | 'software' | 'network' | 'other';
export type RequestPriority = 'low' | 'medium' | 'high' | 'critical';
export type RequestStatus = 'open' | 'in-progress' | 'resolved' | 'closed';

export interface SupportRequest {
  id: string;
  subject: string;
  description: string;
  type: RequestType;
  priority: RequestPriority;
  status: RequestStatus;
  location: string;
  contactInfo: string;
  submittedBy: string;
  submittedDate: Date;
  assignedTo?: string;
  lastUpdated: Date;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  text: string;
  author: string;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'requester' | 'technician' | 'admin';
  department?: string;
}
