
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import { Search, MessageCircle, UserPlus, UserCheck, UserX, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Connections = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [selectedConnection, setSelectedConnection] = useState(null);
  const [messageContent, setMessageContent] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  const [connections, setConnections] = useState([
    {
      id: 1,
      name: 'Brooks Richards',
      skills: ['Programming', 'Coding', 'Design'],
      status: 'online',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      connectionStatus: 'connected',
      mutualConnections: 5,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Marvin McKinney',
      skills: ['Marketing', 'Social Media', 'Branding'],
      status: 'offline',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      connectionStatus: 'pending',
      mutualConnections: 3,
      rating: 4.6
    },
    {
      id: 3,
      name: 'Devon Lane',
      skills: ['Photography', 'Editing', 'Design'],
      status: 'online',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      connectionStatus: 'connected',
      mutualConnections: 8,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Jerome Bell',
      skills: ['Writing', 'Content', 'SEO'],
      status: 'offline',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      connectionStatus: 'not_connected',
      mutualConnections: 2,
      rating: 4.7
    },
    {
      id: 5,
      name: 'Esther Howard',
      skills: ['Consulting', 'Business', 'Strategy'],
      status: 'online',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      connectionStatus: 'connected',
      mutualConnections: 12,
      rating: 4.8
    },
    {
      id: 6,
      name: 'Kathryn Murphy',
      skills: ['Teaching', 'Education', 'Training'],
      status: 'offline',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      connectionStatus: 'not_connected',
      mutualConnections: 1,
      rating: 4.5
    }
  ]);

  const tabs = ['All', 'Connected', 'Pending', 'Requests'];

  const getFilteredConnections = () => {
    let filtered = connections;

    // Filter by tab
    if (activeTab === 'Connected') {
      filtered = filtered.filter(conn => conn.connectionStatus === 'connected');
    } else if (activeTab === 'Pending') {
      filtered = filtered.filter(conn => conn.connectionStatus === 'pending');
    } else if (activeTab === 'Requests') {
      filtered = filtered.filter(conn => conn.connectionStatus === 'requested');
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(conn =>
        conn.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conn.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by status
    if (filterBy === 'online') {
      filtered = filtered.filter(conn => conn.status === 'online');
    } else if (filterBy === 'offline') {
      filtered = filtered.filter(conn => conn.status === 'offline');
    }

    return filtered;
  };

  const handleConnect = (connectionId) => {
    setConnections(connections.map(conn => {
      if (conn.id === connectionId) {
        const newStatus = conn.connectionStatus === 'connected' ? 'not_connected' : 
                         conn.connectionStatus === 'not_connected' ? 'pending' : 'connected';
        
        toast({
          title: newStatus === 'pending' ? 'Request Sent!' : 
                 newStatus === 'connected' ? 'Connected!' : 'Disconnected',
          description: newStatus === 'pending' ? `Connection request sent to ${conn.name}` :
                      newStatus === 'connected' ? `You are now connected with ${conn.name}` :
                      `You disconnected from ${conn.name}`,
        });
        
        return { ...conn, connectionStatus: newStatus };
      }
      return conn;
    }));
  };

  const handleMessage = (connection) => {
    setSelectedConnection(connection);
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
      description: `Your message has been sent to ${selectedConnection?.name}`,
    });
    
    setMessageContent('');
    setShowMessageDialog(false);
    setSelectedConnection(null);
  };

  const getConnectionButtonText = (status) => {
    switch (status) {
      case 'connected': return 'Connected';
      case 'pending': return 'Pending';
      case 'requested': return 'Accept';
      default: return 'Connect';
    }
  };

  const getConnectionButtonIcon = (status) => {
    switch (status) {
      case 'connected': return UserCheck;
      case 'pending': return UserX;
      case 'requested': return UserCheck;
      default: return UserPlus;
    }
  };

  const filteredConnections = getFilteredConnections();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-cyan-900 dark:to-blue-900 transition-all duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Connections
          </h1>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search connections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 border-2 hover:border-cyan-300 focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b-2 border-cyan-100 dark:border-cyan-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-all duration-200 ${
                activeTab === tab
                  ? 'border-cyan-500 text-cyan-600 dark:text-cyan-400 transform scale-105'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab}
              {tab === 'Pending' && connections.filter(c => c.connectionStatus === 'pending').length > 0 && (
                <Badge className="ml-2 bg-orange-500 text-white text-xs">
                  {connections.filter(c => c.connectionStatus === 'pending').length}
                </Badge>
              )}
            </button>
          ))}
          <div className="ml-auto">
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-32 border-2 hover:border-cyan-300 transition-colors">
                <Filter className="h-4 w-4 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Connections List */}
        <div className="space-y-4">
          {filteredConnections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No connections found</p>
              <p className="text-gray-400 dark:text-gray-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredConnections.map((connection) => {
              const ButtonIcon = getConnectionButtonIcon(connection.connectionStatus);
              return (
                <Card key={connection.id} className="p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-cyan-200 dark:hover:border-cyan-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-16 w-16 ring-4 ring-cyan-200 dark:ring-cyan-700">
                          <AvatarImage src={connection.avatar} alt={connection.name} />
                          <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-blue-400 text-white text-lg">
                            {connection.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {connection.status === 'online' && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{connection.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            ⭐ {connection.rating}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-2 mb-2">
                          {connection.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-800 dark:text-cyan-200 hover:bg-cyan-200 dark:hover:bg-cyan-700 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {connection.mutualConnections} mutual connections • {connection.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="hover:bg-cyan-50 dark:hover:bg-cyan-900 border-cyan-200 dark:border-cyan-700 transform hover:scale-105 transition-all duration-200"
                        onClick={() => handleMessage(connection)}
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                      <Button 
                        size="sm" 
                        className={`transform hover:scale-105 transition-all duration-200 ${
                          connection.connectionStatus === 'connected' 
                            ? 'bg-green-500 hover:bg-green-600 text-white' 
                            : connection.connectionStatus === 'pending'
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                        }`}
                        onClick={() => handleConnect(connection.id)}
                      >
                        <ButtonIcon className="h-4 w-4 mr-1" />
                        {getConnectionButtonText(connection.connectionStatus)}
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>

      {/* Message Dialog */}
      <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send Message to {selectedConnection?.name}</DialogTitle>
            <DialogDescription>
              Send a private message to connect and discuss skill exchange opportunities
            </DialogDescription>
          </DialogHeader>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="Hi! I'd love to connect and explore skill exchange opportunities..."
              rows={4}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowMessageDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSendMessage}>
              <MessageCircle className="h-4 w-4 mr-1" />
              Send Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Connections;
