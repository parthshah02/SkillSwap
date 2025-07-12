
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Send, Search, MoreVertical, Phone, Video, Paperclip, Smile } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useToast } from '@/hooks/use-toast';

const Messages = () => {
  const { toast } = useToast();
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Emily Cooper',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Sounds great! When would you like to start with the Figma lessons?',
      timestamp: '2m ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'I can help you with Python basics this weekend',
      timestamp: '1h ago',
      unread: 0,
      online: false,
    },
    {
      id: 3,
      name: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      lastMessage: 'Thanks for the photography tips!',
      timestamp: '3h ago',
      unread: 1,
      online: true,
    },
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Emily Cooper',
      content: 'Hi! I saw your request to learn Figma. I\'d be happy to help you get started!',
      timestamp: '10:30 AM',
      isOwnMessage: false,
    },
    {
      id: 2,
      sender: 'You',
      content: 'That would be amazing! I\'ve been wanting to learn UI design for a while now.',
      timestamp: '10:32 AM',
      isOwnMessage: true,
    },
    {
      id: 3,
      sender: 'Emily Cooper',
      content: 'Perfect! In exchange, I\'d love to learn some React basics from you. I\'ve seen your portfolio and it\'s impressive!',
      timestamp: '10:35 AM',
      isOwnMessage: false,
    },
    {
      id: 4,
      sender: 'You',
      content: 'Definitely! That sounds like a fair trade. I can teach you React fundamentals.',
      timestamp: '10:37 AM',
      isOwnMessage: true,
    },
    {
      id: 5,
      sender: 'Emily Cooper',
      content: 'Sounds great! When would you like to start with the Figma lessons?',
      timestamp: '10:40 AM',
      isOwnMessage: false,
    },
  ]);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate real-time messaging
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly add messages from other users
      if (Math.random() < 0.1) { // 10% chance every 5 seconds
        const randomResponses = [
          "That's a great point!",
          "I'm available for a session tomorrow.",
          "Let me know when you're free to practice.",
          "Thanks for the helpful feedback!",
          "I've shared some resources with you.",
        ];
        
        const newMsg = {
          id: messages.length + Math.random(),
          sender: 'Emily Cooper',
          content: randomResponses[Math.floor(Math.random() * randomResponses.length)],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isOwnMessage: false,
        };
        
        setMessages(prev => [...prev, newMsg]);
        
        // Update conversation list
        setConversations(prev => prev.map(conv => 
          conv.id === selectedChat 
            ? { ...conv, lastMessage: newMsg.content, timestamp: 'now', unread: conv.unread + 1 }
            : conv
        ));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length, selectedChat]);

  // Simulate typing indicator
  useEffect(() => {
    let typingTimeout;
    if (newMessage.length > 0) {
      setIsTyping(true);
      typingTimeout = setTimeout(() => setIsTyping(false), 1000);
    } else {
      setIsTyping(false);
    }
    
    return () => clearTimeout(typingTimeout);
  }, [newMessage]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const msg = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwnMessage: true,
      };
      
      setMessages([...messages, msg]);
      
      // Update conversation
      setConversations(prev => prev.map(conv => 
        conv.id === selectedChat 
          ? { ...conv, lastMessage: newMessage, timestamp: 'now' }
          : conv
      ));
      
      console.log('Sending message:', newMessage);
      setNewMessage('');
      
      toast({
        title: "Message Sent",
        description: "Your message has been delivered",
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 transition-all duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
            {/* Conversations List */}
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl border-2 border-indigo-100 dark:border-indigo-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-indigo-700 dark:text-indigo-300">Messages</CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 border-2 hover:border-indigo-300 focus:border-indigo-400 transition-colors"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => {
                        setSelectedChat(conversation.id);
                        // Mark as read
                        setConversations(prev => prev.map(conv => 
                          conv.id === conversation.id ? { ...conv, unread: 0 } : conv
                        ));
                      }}
                      className={`flex items-center space-x-3 p-4 cursor-pointer transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 ${
                        selectedChat === conversation.id
                          ? 'bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/70 dark:to-purple-900/70 border-r-4 border-indigo-500 transform scale-[1.02]'
                          : ''
                      }`}
                    >
                      <div className="relative">
                        <Avatar className="h-12 w-12 ring-2 ring-indigo-200 dark:ring-indigo-700">
                          <AvatarImage src={conversation.avatar} alt={conversation.name} />
                          <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-purple-400 text-white">
                            {conversation.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs animate-pulse">
                          {conversation.unread}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chat Area */}
            <Card className="lg:col-span-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl flex flex-col border-2 border-purple-100 dark:border-purple-800">
              {/* Chat Header */}
              <CardHeader className="pb-4 border-b-2 border-purple-100 dark:border-purple-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12 ring-2 ring-purple-200 dark:ring-purple-700">
                      <AvatarImage src={selectedConversation?.avatar} alt={selectedConversation?.name} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                        {selectedConversation?.name.split(' ').map(n => n[0]).join('') || 'EC'}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">{selectedConversation?.name}</h3>
                      <p className="text-sm text-green-600 dark:text-green-400 flex items-center">
                        {selectedConversation?.online ? (
                          <>
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                            Online
                          </>
                        ) : (
                          'Offline'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-purple-50/30 to-pink-50/30 dark:from-purple-900/20 dark:to-pink-900/20">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isOwnMessage ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom duration-300`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                          message.isOwnMessage
                            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                            : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600'
                        } transform hover:scale-105 transition-transform duration-200`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.isOwnMessage ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 dark:bg-gray-700 px-4 py-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t-2 border-purple-100 dark:border-purple-800 p-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/30 dark:to-pink-900/30">
                <div className="flex space-x-2 items-end">
                  <Button variant="ghost" size="icon" className="hover:bg-purple-100 dark:hover:bg-purple-900">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="min-h-[44px] resize-none border-2 hover:border-purple-300 focus:border-purple-400 transition-colors rounded-2xl pr-12"
                    />
                    <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2 hover:bg-purple-100 dark:hover:bg-purple-900">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button 
                    onClick={sendMessage} 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-2xl transform hover:scale-105 transition-all duration-200"
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
