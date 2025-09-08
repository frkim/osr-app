import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON body
    const body = await request.json();

    // In a real application, you would save this to a database
    // For now, we'll just log it and return a success response
    console.log('New support request received:', body);

    // Generate a random ID for the request
    const requestId = `REQ-${Math.floor(Math.random() * 1000)}`;

    return NextResponse.json({ 
      success: true, 
      message: 'Support request created successfully',
      requestId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating support request:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to create support request' 
    }, { status: 500 });
  }
}

export async function GET() {
  // In a real application, you would fetch this from a database
  // For now, we'll return mock data
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

  return NextResponse.json({ requests });
}
