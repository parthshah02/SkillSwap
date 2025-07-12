
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import { Camera, Plus, X, Star, MessageCircle, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('Interests');
  const [skillsOffered, setSkillsOffered] = useState([
    'UI/UX Design', 'React', 'Python', 'Photography', 
    'Digital Marketing', 'Content Writing', 'Figma', 'Adobe Creative Suite'
  ]);
  
  const [skillsWanted, setSkillsWanted] = useState([
    'Machine Learning', 'Data Analysis', 'Public Speaking', 'Video Editing'
  ]);

  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [showAddWantedSkill, setShowAddWantedSkill] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [newWantedSkill, setNewWantedSkill] = useState('');

  const [profileData, setProfileData] = useState({
    name: 'Emily Cooper',
    title: 'UI web and mobile designer and flutter',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    yearsExperience: 5,
    location: 'San Francisco, CA',
    rating: 4.8,
    completedSwaps: 24,
    activeSwaps: 3,
    bio: 'Passionate designer with 5+ years of experience in creating beautiful and functional digital experiences.'
  });

  const skillLevels = [
    { name: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces', level: 'Advanced', progress: 90 },
    { name: 'React Development', description: 'Building modern web applications with React', level: 'Advanced', progress: 85 },
    { name: 'Python Programming', description: 'Backend development and data analysis', level: 'Intermediate', progress: 70 },
    { name: 'Photography', description: 'Portrait and landscape photography', level: 'Intermediate', progress: 60 }
  ];

  const connections = [
    {
      id: 1,
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      skills: ['Graphic Design', 'Branding'],
      mutualSkills: 2,
      status: 'Connected'
    },
    {
      id: 2,
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      skills: ['Photography', 'Video Editing'],
      mutualSkills: 1,
      status: 'Connected'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      skills: ['Digital Marketing', 'SEO'],
      mutualSkills: 3,
      status: 'Connected'
    }
  ];

  const tabs = ['Interests', 'Connections', 'You want to learn'];

  const handleEditProfile = () => {
    toast({
      title: "Profile Updated!",
      description: "Your profile has been successfully updated.",
    });
    setShowEditProfile(false);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkillsOffered([...skillsOffered, newSkill.trim()]);
      setNewSkill('');
      setShowAddSkill(false);
      toast({
        title: "Skill Added!",
        description: `${newSkill} has been added to your skills.`,
      });
    }
  };

  const handleAddWantedSkill = () => {
    if (newWantedSkill.trim()) {
      setSkillsWanted([...skillsWanted, newWantedSkill.trim()]);
      setNewWantedSkill('');
      setShowAddWantedSkill(false);
      toast({
        title: "Learning Goal Added!",
        description: `${newWantedSkill} has been added to your learning goals.`,
      });
    }
  };

  const removeSkill = (skill, type) => {
    if (type === 'offered') {
      setSkillsOffered(skillsOffered.filter(s => s !== skill));
    } else {
      setSkillsWanted(skillsWanted.filter(s => s !== skill));
    }
    toast({
      title: "Skill Removed",
      description: `${skill} has been removed.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="mb-8 border-2 border-purple-100 dark:border-purple-800 shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image and Basic Info */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-4">
                  <Avatar className="h-32 w-32 ring-4 ring-purple-200 dark:ring-purple-700">
                    <AvatarImage src={profileData.avatar} alt={profileData.name} />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-purple-400 to-pink-400 text-white">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="text-center md:text-left">
                  <h1 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {profileData.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{profileData.title}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {profileData.rating} • {profileData.completedSwaps} swaps completed
                  </div>
                  <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200">
                    {profileData.yearsExperience} years experience
                  </Badge>
                  <Dialog open={showEditProfile} onOpenChange={setShowEditProfile}>
                    <DialogTrigger asChild>
                      <Button className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200">
                        Edit profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Update your profile information
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="title">Title</Label>
                          <Input
                            id="title"
                            value={profileData.title}
                            onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            value={profileData.bio}
                            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setShowEditProfile(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleEditProfile}>
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              {/* Stats */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg border-2 border-blue-100 dark:border-blue-800">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{profileData.completedSwaps}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Completed Swaps</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-lg border-2 border-green-100 dark:border-green-800">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{profileData.activeSwaps}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Swaps</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-lg border-2 border-yellow-100 dark:border-yellow-800">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{profileData.rating}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b-2 border-purple-100 dark:border-purple-800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 text-sm font-medium border-b-2 transition-all duration-200 ${
                activeTab === tab
                  ? 'border-purple-500 text-purple-600 dark:text-purple-400 transform scale-105'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'Interests' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Offered */}
            <Card className="border-2 border-purple-100 dark:border-purple-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-700 dark:text-purple-300">Skills I Can Teach</CardTitle>
                <CardDescription>Areas where you can help others learn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skillsOffered.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1 bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors">
                      {skill}
                      <X 
                        className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors" 
                        onClick={() => removeSkill(skill, 'offered')}
                      />
                    </Badge>
                  ))}
                </div>
                <Dialog open={showAddSkill} onOpenChange={setShowAddSkill}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="hover:bg-purple-50 dark:hover:bg-purple-900 border-purple-200 dark:border-purple-700">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Skill
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Skill</DialogTitle>
                      <DialogDescription>
                        Add a skill you can teach to others
                      </DialogDescription>
                    </DialogHeader>
                    <div>
                      <Label htmlFor="skill">Skill Name</Label>
                      <Input
                        id="skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Enter skill name"
                      />
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setShowAddSkill(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddSkill}>
                        Add Skill
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Your Skills Detail */}
            <Card className="border-2 border-blue-100 dark:border-blue-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-blue-700 dark:text-blue-300">Your skills</CardTitle>
                <CardDescription>Detailed breakdown of your expertise levels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillLevels.map((skill, index) => (
                  <div key={index} className="p-4 border rounded-lg border-blue-100 dark:border-blue-800 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{skill.description}</p>
                      </div>
                      <Badge variant={skill.level === 'Advanced' ? 'default' : 'secondary'} className={skill.level === 'Advanced' ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200' : ''}>
                        {skill.level}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>Progress</span>
                      <span>{skill.progress}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'Connections' && (
          <Card className="border-2 border-green-100 dark:border-green-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">Your Connections</CardTitle>
              <CardDescription>People you've connected with on SkillSwap</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {connections.map((connection) => (
                  <div key={connection.id} className="flex items-center justify-between p-4 border rounded-lg border-green-100 dark:border-green-800 hover:border-green-200 dark:hover:border-green-700 transition-all duration-200 hover:shadow-md">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 ring-2 ring-green-200 dark:ring-green-700">
                        <AvatarImage src={connection.avatar} alt={connection.name} />
                        <AvatarFallback className="bg-gradient-to-br from-green-400 to-blue-400 text-white">
                          {connection.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{connection.name}</h3>
                        <div className="flex gap-2 mt-1 mb-1">
                          {connection.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{connection.mutualSkills} mutual skills</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="hover:bg-green-50 dark:hover:bg-green-900">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white">
                        <Users className="h-4 w-4 mr-1" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'You want to learn' && (
          <Card className="border-2 border-orange-100 dark:border-orange-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-700 dark:text-orange-300">Skills I Want to Learn</CardTitle>
              <CardDescription>Areas where you're looking for mentors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {skillsWanted.map((skill, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1 border-orange-200 text-orange-700 dark:border-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900 transition-colors">
                    {skill}
                    <X 
                      className="h-3 w-3 cursor-pointer hover:text-red-500 transition-colors" 
                      onClick={() => removeSkill(skill, 'wanted')}
                    />
                  </Badge>
                ))}
              </div>
              <Dialog open={showAddWantedSkill} onOpenChange={setShowAddWantedSkill}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-900 border-orange-200 dark:border-orange-700">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Skill
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add Learning Goal</DialogTitle>
                    <DialogDescription>
                      Add a skill you want to learn
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <Label htmlFor="wantedSkill">Skill Name</Label>
                    <Input
                      id="wantedSkill"
                      value={newWantedSkill}
                      onChange={(e) => setNewWantedSkill(e.target.value)}
                      placeholder="Enter skill you want to learn"
                    />
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowAddWantedSkill(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddWantedSkill}>
                      Add Skill
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Profile;
