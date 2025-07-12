
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { Search, MapPin, Star, MessageSquare, Plus, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Explore = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewListing, setShowNewListing] = useState(false);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [messageContent, setMessageContent] = useState('');
  const [newListing, setNewListing] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    tags: ''
  });

  const [skillMatches, setSkillMatches] = useState([
    {
      id: 1,
      name: 'Team-working',
      instructor: 'Celia Powell',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 4.8,
      students: 24,
      reviews: 12,
      location: 'Remote',
      description: 'UI web and mobile designer, both international domain objects cat ut aliquip ex commodo consequat.',
      tags: ['Team Work', 'Voice', 'Consulting']
    },
    {
      id: 2,
      name: 'English language teacher',
      instructor: 'Emma Smith',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 4.9,
      students: 18,
      reviews: 8,
      location: 'London',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      tags: ['English', 'Teaching', 'Books']
    },
    {
      id: 3,
      name: 'High school math',
      instructor: 'John Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 4.7,
      students: 31,
      reviews: 15,
      location: 'New York',
      description: 'Mathematics teacher with experience in elementary and high school level math and programming for beginners.',
      tags: ['Math', 'Teaching', 'Programming']
    }
  ]);

  const filteredMatches = skillMatches.filter(match =>
    match.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    match.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleNewListing = () => {
    if (!newListing.title || !newListing.description || !newListing.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const listing = {
      id: skillMatches.length + 1,
      name: newListing.title,
      instructor: 'You',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 0,
      students: 0,
      reviews: 0,
      location: 'Remote',
      description: newListing.description,
      tags: newListing.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    setSkillMatches([listing, ...skillMatches]);
    setNewListing({ title: '', description: '', category: '', level: '', tags: '' });
    setShowNewListing(false);
    
    toast({
      title: "Success!",
      description: "Your listing has been created successfully",
    });
  };

  const handleMessage = (match) => {
    setSelectedMatch(match);
    setShowMessageDialog(true);
  };

  const handleSendMessage = () => {
    if (!messageContent.trim()) {
      toast({
        title: "Error",
        description: "Please enter a message",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: `Your message has been sent to ${selectedMatch?.instructor}`,
    });
    
    setMessageContent('');
    setShowMessageDialog(false);
    setSelectedMatch(null);
  };

  const handleSendRequest = (match) => {
    toast({
      title: "Request Sent!",
      description: `Your skill swap request has been sent to ${match.instructor}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-green-900 dark:to-blue-900 transition-all duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Explore
          </h1>
          <Dialog open={showNewListing} onOpenChange={setShowNewListing}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200">
                <Plus className="mr-2 h-4 w-4" />
                New listing
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Listing</DialogTitle>
                <DialogDescription>
                  Share your skills with the community
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Skill Title</Label>
                  <Input
                    id="title"
                    value={newListing.title}
                    onChange={(e) => setNewListing({...newListing, title: e.target.value})}
                    placeholder="e.g., Web Development, Photography"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newListing.description}
                    onChange={(e) => setNewListing({...newListing, description: e.target.value})}
                    placeholder="Describe what you can teach"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setNewListing({...newListing, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="language">Language</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="level">Level</Label>
                  <Select onValueChange={(value) => setNewListing({...newListing, level: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input
                    id="tags"
                    value={newListing.tags}
                    onChange={(e) => setNewListing({...newListing, tags: e.target.value})}
                    placeholder="e.g., HTML, CSS, JavaScript"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowNewListing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleNewListing}>
                  Create Listing
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search skills, instructors..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 h-12 border-2 hover:border-green-300 focus:border-green-400 transition-colors"
            />
          </div>
          
          <Select>
            <SelectTrigger className="h-12 border-2 hover:border-green-300 transition-colors">
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 border-2 hover:border-green-300 transition-colors">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="h-12 border-2 hover:border-green-300 transition-colors">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="business">Business</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">
              Showing {filteredMatches.length} of {skillMatches.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </span>
          </div>

          {filteredMatches.map((match) => (
            <Card key={match.id} className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-200 dark:hover:border-green-700">
              <div className="flex gap-6">
                <Avatar className="h-16 w-16 ring-4 ring-green-200 dark:ring-green-700">
                  <AvatarImage src={match.avatar} alt={match.instructor} />
                  <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-400 text-white text-lg">
                    {match.instructor.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{match.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{match.instructor}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {match.rating}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        {match.students} students • {match.reviews} reviews
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{match.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {match.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-700 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="hover:bg-green-50 dark:hover:bg-green-900 border-green-200 dark:border-green-700"
                        onClick={() => handleMessage(match)}
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white transform hover:scale-105 transition-all duration-200"
                        onClick={() => handleSendRequest(match)}
                      >
                        <Send className="h-4 w-4 mr-1" />
                        Send request
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {filteredMatches.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No results found</p>
              <p className="text-gray-400 dark:text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Message Dialog */}
      <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Message to {selectedMatch?.instructor}</DialogTitle>
            <DialogDescription>
              Send a message about "{selectedMatch?.name}"
            </DialogDescription>
          </DialogHeader>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowMessageDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4 mr-1" />
              Send Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Explore;
