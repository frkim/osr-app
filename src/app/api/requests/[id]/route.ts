import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  // In a real application, you would fetch this from a database based on the ID
  // For now, we'll return mock data
  if (id === 'REQ-001') {
    return NextResponse.json({
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
    });
  }

  // Return a generic response for other IDs
  return NextResponse.json({
    id,
    subject: `Support Request ${id}`,
    description: "Details about this support request.",
    type: "Other",
    location: "Main Building",
    status: "Open",
    priority: "Medium",
    submittedBy: "User",
    submittedDate: "2025-09-08",
    contactInfo: "user@example.com",
    lastUpdated: "2025-09-08",
    comments: [],
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  
  try {
    // Parse the JSON body
    const body = await request.json();

    // In a real application, you would update this in a database
    console.log(`Updating request ${id} with:`, body);

    return NextResponse.json({ 
      success: true, 
      message: 'Support request updated successfully',
      id 
    });
  } catch (error) {
    console.error(`Error updating support request ${id}:`, error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to update support request' 
    }, { status: 500 });
  }
}
