
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import { Star, Users, BookOpen, TrendingUp, MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const recentActivities = [
    {
      id: 1,
      type: 'skill_request',
      user: 'Sarah Chen',
      skill: 'Graphic Design',
      time: '2 hours ago',
      avatar: '/placeholder.svg'
    },
    {
      id: 2,
      type: 'skill_learned',
      user: 'Mike Johnson',
      skill: 'Photography',
      time: '1 day ago',
      avatar: '/placeholder.svg'
    },
    {
      id: 3,
      type: 'review_received',
      user: 'Elena Rodriguez',
      skill: 'Digital Marketing',
      rating: 5,
      time: '2 days ago',
      avatar: '/placeholder.svg'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Design Workshop',
      date: 'Dec 15, 2024',
      time: '2:00 PM',
      participants: 12
    },
    {
      id: 2,
      title: 'Coding Bootcamp',
      date: 'Dec 18, 2024',
      time: '10:00 AM',
      participants: 25
    },
    {
      id: 3,
      title: 'Marketing Seminar',
      date: 'Dec 20, 2024',
      time: '6:00 PM',
      participants: 18
    }
  ];

  const stats = [
    { label: 'Skills Taught', value: '12', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Skills Learned', value: '8', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Active Swaps', value: '3', icon: Users, color: 'text-orange-600' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-gray-600">
            Ready to share your knowledge and learn something new today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest skill exchanges and interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar} alt={activity.user} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {activity.type === 'skill_request' && `${activity.user} requested to learn ${activity.skill}`}
                        {activity.type === 'skill_learned' && `You completed learning ${activity.skill} from ${activity.user}`}
                        {activity.type === 'review_received' && `${activity.user} rated your ${activity.skill} session`}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    {activity.rating && (
                      <div className="flex items-center gap-1">
                        {[...Array(activity.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" asChild>
                <Link to="/explore">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Skills
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/profile">
                  <Users className="mr-2 h-4 w-4" />
                  Update Profile
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/messages">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  View Messages
                </Link>
              </Button>
              <Button className="w-full justify-start" variant="outline" asChild>
                <Link to="/events">
                  <Calendar className="mr-2 h-4 w-4" />
                  Join Events
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events you're registered for</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/events">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold mb-2">{event.title}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {event.participants} participants
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {event.time}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
