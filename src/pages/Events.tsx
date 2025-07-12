
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import { Calendar, Clock, Users, MapPin, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Events = () => {
  const { toast } = useToast();
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'English club',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop',
      category: 'Language',
      date: 'Dec 15',
      time: '2:00 PM',
      participants: 12,
      maxParticipants: 20,
      joined: false
    },
    {
      id: 2,
      title: 'Presentations',
      description: 'Business and academic presentation skills workshop for professionals.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop',
      category: 'Business',
      date: 'Dec 18',
      time: '6:00 PM',
      participants: 8,
      maxParticipants: 15,
      joined: false
    },
    {
      id: 3,
      title: 'Yoga and meditations',
      description: 'Learn various techniques for mindfulness and physical wellness.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=200&fit=crop',
      category: 'Wellness',
      date: 'Dec 20',
      time: '7:00 AM',
      participants: 15,
      maxParticipants: 25,
      joined: true
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      description: 'Intensive coding workshop covering HTML, CSS, and JavaScript fundamentals.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
      category: 'Technology',
      date: 'Dec 22',
      time: '10:00 AM',
      participants: 18,
      maxParticipants: 30,
      joined: false
    },
    {
      id: 5,
      title: 'Photography Workshop',
      description: 'Learn composition, lighting, and editing techniques from professional photographers.',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=200&fit=crop',
      category: 'Creative',
      date: 'Dec 25',
      time: '1:00 PM',
      participants: 10,
      maxParticipants: 20,
      joined: false
    },
    {
      id: 6,
      title: 'Cooking Masterclass',
      description: 'Master international cuisines and advanced cooking techniques.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop',
      category: 'Culinary',
      date: 'Dec 28',
      time: '3:00 PM',
      participants: 6,
      maxParticipants: 12,
      joined: false
    }
  ]);

  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    maxParticipants: ''
  });

  const handleCreateEvent = () => {
    if (!newEvent.title || !newEvent.description || !newEvent.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const event = {
      id: events.length + 1,
      ...newEvent,
      image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=400&h=200&fit=crop',
      participants: 0,
      maxParticipants: parseInt(newEvent.maxParticipants),
      joined: false
    };

    setEvents([...events, event]);
    setNewEvent({ title: '', description: '', category: '', date: '', time: '', maxParticipants: '' });
    setShowCreateEvent(false);
    
    toast({
      title: "Success!",
      description: "Event created successfully",
    });
  };

  const handleJoinEvent = (eventId) => {
    setEvents(events.map(event => 
      event.id === eventId 
        ? { ...event, joined: !event.joined, participants: event.joined ? event.participants - 1 : event.participants + 1 }
        : event
    ));
    
    const event = events.find(e => e.id === eventId);
    toast({
      title: event?.joined ? "Left Event" : "Joined Event!",
      description: event?.joined ? `You left ${event.title}` : `You joined ${event.title}`,
    });
  };

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 transition-all duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Events
          </h1>
          <Dialog open={showCreateEvent} onOpenChange={setShowCreateEvent}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200">
                <Plus className="mr-2 h-4 w-4" />
                Create event
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new event
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    placeholder="Enter event title"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    placeholder="Describe your event"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setNewEvent({...newEvent, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                      <SelectItem value="Creative">Creative</SelectItem>
                      <SelectItem value="Language">Language</SelectItem>
                      <SelectItem value="Wellness">Wellness</SelectItem>
                      <SelectItem value="Culinary">Culinary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="maxParticipants">Max Participants</Label>
                  <Input
                    id="maxParticipants"
                    type="number"
                    value={newEvent.maxParticipants}
                    onChange={(e) => setNewEvent({...newEvent, maxParticipants: e.target.value})}
                    placeholder="Enter max participants"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowCreateEvent(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateEvent}>
                  Create Event
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Select>
            <SelectTrigger className="h-12 border-2 hover:border-blue-300 transition-colors">
              <SelectValue placeholder="Event Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="past">Past Events</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 border-2 hover:border-blue-300 transition-colors">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="language">Language</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="wellness">Wellness</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 border-2 hover:border-blue-300 transition-colors">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="offline">In-Person</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 border-2 hover:border-blue-300 transition-colors">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="mb-4">
          <span className="text-gray-600 dark:text-gray-400">Showing {events.length} events</span>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-blue-200 dark:hover:border-blue-700">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className="absolute top-3 left-3 bg-white/90 text-black backdrop-blur-sm">
                  {event.category}
                </Badge>
                {event.joined && (
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                    Joined
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                    <Clock className="h-4 w-4 ml-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4" />
                    {event.participants}/{event.maxParticipants} participants
                  </div>
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                        onClick={() => handleLearnMore(event)}
                      >
                        Learn more
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{selectedEvent?.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <img
                          src={selectedEvent?.image}
                          alt={selectedEvent?.title}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        <p className="text-gray-600 dark:text-gray-300">{selectedEvent?.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Category:</strong> {selectedEvent?.category}
                          </div>
                          <div>
                            <strong>Date:</strong> {selectedEvent?.date}
                          </div>
                          <div>
                            <strong>Time:</strong> {selectedEvent?.time}
                          </div>
                          <div>
                            <strong>Participants:</strong> {selectedEvent?.participants}/{selectedEvent?.maxParticipants}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button 
                    size="sm" 
                    className={`flex-1 transition-all duration-200 ${
                      event.joined 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                    }`}
                    onClick={() => handleJoinEvent(event.id)}
                  >
                    {event.joined ? 'Leave event' : 'Join event'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
