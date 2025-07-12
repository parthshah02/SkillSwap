import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import { Star, Users, BookOpen, TrendingUp, MessageSquare, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const recentActivities = [
    {
      id: 1,
      type: 'skill_request',
      user: 'Sarah Chen',
      skill: 'Graphic Design',
      time: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      type: 'skill_learned',
      user: 'Mike Johnson',
      skill: 'Photography',
      time: '1 day ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      type: 'review_received',
      user: 'Elena Rodriguez',
      skill: 'Digital Marketing',
      rating: 5,
      time: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Design Workshop',
      date: 'Dec 15, 2024',
      time: '2:00 PM',
      participants: 12,
      category: 'Design'
    },
    {
      id: 2,
      title: 'Coding Bootcamp',
      date: 'Dec 18, 2024',
      time: '10:00 AM',
      participants: 25,
      category: 'Development'
    },
    {
      id: 3,
      title: 'Marketing Seminar',
      date: 'Dec 20, 2024',
      time: '6:00 PM',
      participants: 18,
      category: 'Marketing'
    }
  ];

  const stats = [
    { 
      label: 'Skills Taught', 
      value: '12', 
      icon: BookOpen, 
      color: 'from-indigo-500 to-purple-500',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      text: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-100 dark:bg-indigo-800/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    },
    { 
      label: 'Skills Learned', 
      value: '8', 
      icon: TrendingUp, 
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-100 dark:bg-emerald-800/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400'
    },
    { 
      label: 'Active Swaps', 
      value: '3', 
      icon: Users, 
      color: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      text: 'text-amber-600 dark:text-amber-400',
      iconBg: 'bg-amber-100 dark:bg-amber-800/50',
      iconColor: 'text-amber-600 dark:text-amber-400'
    },
    { 
      label: 'Average Rating', 
      value: '4.8', 
      icon: Star, 
      color: 'from-rose-500 to-pink-500',
      bg: 'bg-rose-50 dark:bg-rose-900/20',
      text: 'text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-100 dark:bg-rose-800/50',
      iconColor: 'text-rose-600 dark:text-rose-400',
      fill: 'fill-amber-400 dark:fill-amber-300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Welcome back, John! <span className="text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Here's what's happening with your skill exchange journey today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-xl ${stat.iconBg} ${stat.iconColor} shadow-inner`}>
                      {stat.label === 'Average Rating' ? (
                        <Icon className={`h-6 w-6 ${stat.fill}`} fill="currentColor" />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                      style={{ width: `${(parseInt(stat.value) / 15) * 100}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-0 shadow-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                  <CardDescription>Your latest skill exchanges and interactions</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-indigo-600 hover:bg-indigo-50" asChild>
                  <Link to="/activity">
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                    <Avatar className="h-10 w-10 border border-gray-200">
                      <AvatarImage src={activity.avatar} alt={activity.user} />
                      <AvatarFallback className="bg-gray-100">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.type === 'skill_request' && (
                          <>{activity.user} requested to learn <span className="text-indigo-600">{activity.skill}</span></>
                        )}
                        {activity.type === 'skill_learned' && (
                          <>You completed learning <span className="text-indigo-600">{activity.skill}</span> from {activity.user}</>
                        )}
                        {activity.type === 'review_received' && (
                          <>{activity.user} rated your <span className="text-indigo-600">{activity.skill}</span> session</>
                        )}
                      </p>
                      <div className="flex items-center mt-1">
                        <p className="text-xs text-gray-500">{activity.time}</p>
                        {activity.rating && (
                          <div className="flex items-center ml-3">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${i < activity.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-sm bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-between group" variant="outline" asChild>
                <Link to="/explore" className="group-hover:translate-x-1 transition-transform">
                  <span className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4 text-indigo-600" />
                    Browse Skills
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                </Link>
              </Button>
              <Button asChild>
                <Link to="/profile" className="w-full justify-between group group-hover:translate-x-1 transition-transform border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                  <span className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-indigo-600" />
                    Update Profile
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                </Link>
              </Button>
              <Button asChild>
                <Link to="/messages" className="w-full justify-between group group-hover:translate-x-1 transition-transform border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                  <span className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 text-indigo-600" />
                    View Messages
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                </Link>
              </Button>
              <Button asChild>
                <Link to="/events" className="w-full justify-between group group-hover:translate-x-1 transition-transform border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                  <span className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-indigo-600" />
                    Join Events
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
                <CardDescription>Events you're registered for</CardDescription>
              </div>
              <Button asChild>
                <Link to="/events" className="ml-auto flex items-center border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  View All Events <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="p-5 border border-gray-100 rounded-lg hover:shadow-md transition-all duration-200 bg-white"
                >
                  <Badge 
                    variant="outline" 
                    className={`mb-3 ${
                      event.category === 'Design' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      event.category === 'Development' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {event.category}
                  </Badge>
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{event.participants} participants</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View Details
                  </Button>
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
