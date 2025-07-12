
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import Navigation from '@/components/Navigation';
import { Shield, Users, MessageSquare, AlertTriangle, BarChart3, Settings, Eye, Ban, CheckCircle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('Overview');
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);

  const [settings, setSettings] = useState({
    userRegistration: true,
    contentModeration: true,
    maintenanceMode: false,
    emailNotifications: true,
    autoApproval: false
  });

  const stats = [
    { title: 'Total Users', value: '1,247', icon: Users, color: 'text-blue-600', change: '+12%' },
    { title: 'Active Swaps', value: '89', icon: MessageSquare, color: 'text-green-600', change: '+8%' },
    { title: 'Pending Reports', value: '3', icon: AlertTriangle, color: 'text-red-600', change: '-2%' },
    { title: 'Monthly Growth', value: '+12%', icon: BarChart3, color: 'text-purple-600', change: '+3%' }
  ];

  const [users, setUsers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      status: 'Active', 
      joinDate: '2024-01-15',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      skills: ['React', 'JavaScript'],
      swaps: 12,
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      status: 'Active', 
      joinDate: '2024-01-14',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      skills: ['Design', 'Photography'],
      swaps: 8,
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      email: 'mike@example.com', 
      status: 'Suspended', 
      joinDate: '2024-01-13',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      skills: ['Writing', 'Marketing'],
      swaps: 3,
      rating: 3.2
    }
  ]);

  const [reports, setReports] = useState([
    { 
      id: 1, 
      type: 'Spam', 
      reporter: 'Alice Brown', 
      reported: 'Bob Wilson', 
      status: 'Pending',
      date: '2024-01-20',
      description: 'User is sending unsolicited promotional messages',
      severity: 'Medium'
    },
    { 
      id: 2, 
      type: 'Inappropriate Content', 
      reporter: 'Carol Davis', 
      reported: 'David Lee', 
      status: 'Under Review',
      date: '2024-01-19',
      description: 'Posted inappropriate content in skill description',
      severity: 'High'
    },
    { 
      id: 3, 
      type: 'Harassment', 
      reporter: 'Emma Wilson', 
      reported: 'Frank Moore', 
      status: 'Resolved',
      date: '2024-01-18',
      description: 'User reported harassment in private messages',
      severity: 'High'
    }
  ]);

  const tabs = ['Overview', 'Users', 'Reports', 'Settings'];

  const handleUserAction = (userId, action) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        const newStatus = action === 'suspend' ? 'Suspended' : 'Active';
        toast({
          title: `User ${action === 'suspend' ? 'Suspended' : 'Activated'}`,
          description: `${user.name} has been ${action === 'suspend' ? 'suspended' : 'activated'}`,
          variant: action === 'suspend' ? 'destructive' : 'default'
        });
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  const handleReportAction = (reportId, action) => {
    setReports(reports.map(report => {
      if (report.id === reportId) {
        let newStatus = 'Pending';
        let toastMessage = '';
        
        switch (action) {
          case 'resolve':
            newStatus = 'Resolved';
            toastMessage = 'Report has been resolved';
            break;
          case 'dismiss':
            newStatus = 'Dismissed';
            toastMessage = 'Report has been dismissed';
            break;
          case 'escalate':
            newStatus = 'Escalated';
            toastMessage = 'Report has been escalated';
            break;
        }
        
        toast({
          title: 'Report Updated',
          description: toastMessage,
        });
        
        return { ...report, status: newStatus };
      }
      return report;
    }));
  };

  const handleSettingChange = (setting, value) => {
    setSettings({ ...settings, [setting]: value });
    toast({
      title: 'Setting Updated',
      description: `${setting.replace(/([A-Z])/g, ' $1').toLowerCase()} has been ${value ? 'enabled' : 'disabled'}`,
    });
  };

  const viewUserDetails = (user) => {
    setSelectedUser(user);
    setShowUserDetails(true);
  };

  const viewReportDetails = (report) => {
    setSelectedReport(report);
    setShowReportDetails(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-900 dark:to-orange-900 transition-all duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <Badge variant="destructive" className="ml-2">Administrator</Badge>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b-2 border-red-100 dark:border-red-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-all duration-200 ${
                activeTab === tab
                  ? 'border-red-500 text-red-600 dark:text-red-400 transform scale-105'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-2 hover:border-red-200 dark:hover:border-red-700 transition-colors hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</p>
                          <p className="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
                        </div>
                        <Icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-100 dark:border-blue-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-700 dark:text-blue-300">Recent Users</CardTitle>
                  <CardDescription>Latest user registrations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.slice(0, 3).map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-400 text-white">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                          </div>
                        </div>
                        <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                          {user.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 dark:border-orange-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-orange-700 dark:text-orange-300">Recent Reports</CardTitle>
                  <CardDescription>User reports requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reports.slice(0, 3).map((report) => (
                      <div key={report.id} className="p-3 border rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <Badge variant="outline" className="border-orange-200 text-orange-700 dark:border-orange-700 dark:text-orange-300">
                            {report.type}
                          </Badge>
                          <Badge variant={
                            report.status === 'Resolved' ? 'default' : 
                            report.status === 'Under Review' ? 'secondary' : 'outline'
                          }>
                            {report.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">{report.reporter}</span> reported{' '}
                          <span className="font-medium">{report.reported}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'Users' && (
          <Card className="border-2 border-green-100 dark:border-green-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">User Management</CardTitle>
              <CardDescription>Manage platform users and their access</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg hover:border-green-200 dark:hover:border-green-700 transition-colors hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 ring-2 ring-green-200 dark:ring-green-700">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-400 text-white">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">{user.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500">Joined: {user.joinDate}</p>
                        <div className="flex gap-1 mt-1">
                          {user.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={user.status === 'Active' ? 'default' : 'destructive'}>
                        {user.status}
                      </Badge>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => viewUserDetails(user)}
                        className="hover:bg-green-50 dark:hover:bg-green-900"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button 
                        variant={user.status === 'Active' ? 'destructive' : 'default'}
                        size="sm"
                        onClick={() => handleUserAction(user.id, user.status === 'Active' ? 'suspend' : 'activate')}
                      >
                        {user.status === 'Active' ? (
                          <>
                            <Ban className="h-4 w-4 mr-1" />
                            Suspend
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Activate
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'Reports' && (
          <Card className="border-2 border-yellow-100 dark:border-yellow-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-yellow-700 dark:text-yellow-300">User Reports</CardTitle>
              <CardDescription>Review and moderate user reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="p-4 border rounded-lg hover:border-yellow-200 dark:hover:border-yellow-700 transition-colors hover:shadow-md">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex gap-2 mb-2">
                          <Badge variant="outline" className="border-yellow-200 text-yellow-700 dark:border-yellow-700 dark:text-yellow-300">
                            {report.type}
                          </Badge>
                          <Badge variant={
                            report.severity === 'High' ? 'destructive' :
                            report.severity === 'Medium' ? 'secondary' : 'outline'
                          }>
                            {report.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-medium">{report.reporter}</span> reported{' '}
                          <span className="font-medium">{report.reported}</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{report.date}</p>
                      </div>
                      <Badge variant={
                        report.status === 'Resolved' ? 'default' :
                        report.status === 'Under Review' ? 'secondary' : 'outline'
                      }>
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => viewReportDetails(report)}
                        className="hover:bg-yellow-50 dark:hover:bg-yellow-900"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      {report.status === 'Pending' && (
                        <>
                          <Button 
                            variant="default" 
                            size="sm"
                            onClick={() => handleReportAction(report.id, 'resolve')}
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Resolve
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleReportAction(report.id, 'escalate')}
                          >
                            Take Action
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleReportAction(report.id, 'dismiss')}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Dismiss
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'Settings' && (
          <Card className="border-2 border-purple-100 dark:border-purple-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-700 dark:text-purple-300">Platform Settings</CardTitle>
              <CardDescription>Configure platform-wide settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(settings).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 border rounded-lg hover:border-purple-200 dark:hover:border-purple-700 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {key === 'userRegistration' && 'Allow new users to register'}
                        {key === 'contentModeration' && 'Automatic content filtering'}
                        {key === 'maintenanceMode' && 'Temporarily disable platform access'}
                        {key === 'emailNotifications' && 'Send email notifications to users'}
                        {key === 'autoApproval' && 'Automatically approve skill listings'}
                      </p>
                    </div>
                    <Switch
                      checked={value}
                      onCheckedChange={(checked) => handleSettingChange(key, checked)}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* User Details Dialog */}
      <Dialog open={showUserDetails} onOpenChange={setShowUserDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              Detailed information about {selectedUser?.name}
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback>
                    {selectedUser.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                  <Badge variant={selectedUser.status === 'Active' ? 'default' : 'destructive'}>
                    {selectedUser.status}
                  </Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Join Date:</strong> {selectedUser.joinDate}
                </div>
                <div>
                  <strong>Completed Swaps:</strong> {selectedUser.swaps}
                </div>
                <div>
                  <strong>Rating:</strong> {selectedUser.rating}/5
                </div>
                <div>
                  <strong>Skills:</strong> {selectedUser.skills.join(', ')}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Report Details Dialog */}
      <Dialog open={showReportDetails} onOpenChange={setShowReportDetails}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Report Details</DialogTitle>
            <DialogDescription>
              Detailed information about the report
            </DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Type:</strong> {selectedReport.type}
                </div>
                <div>
                  <strong>Severity:</strong> {selectedReport.severity}
                </div>
                <div>
                  <strong>Reporter:</strong> {selectedReport.reporter}
                </div>
                <div>
                  <strong>Reported User:</strong> {selectedReport.reported}
                </div>
                <div>
                  <strong>Date:</strong> {selectedReport.date}
                </div>
                <div>
                  <strong>Status:</strong> {selectedReport.status}
                </div>
              </div>
              <div>
                <strong>Description:</strong>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {selectedReport.description}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            {selectedReport?.status === 'Pending' && (
              <div className="flex gap-2">
                <Button 
                  variant="default"
                  onClick={() => {
                    handleReportAction(selectedReport.id, 'resolve');
                    setShowReportDetails(false);
                  }}
                >
                  Resolve
                </Button>
                <Button 
                  variant="destructive"
                  onClick={() => {
                    handleReportAction(selectedReport.id, 'escalate');
                    setShowReportDetails(false);
                  }}
                >
                  Take Action
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => {
                    handleReportAction(selectedReport.id, 'dismiss');
                    setShowReportDetails(false);
                  }}
                >
                  Dismiss
                </Button>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPanel;
