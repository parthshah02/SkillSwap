import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import { Camera, Plus, X, Star, MessageCircle, Users, Mail, MapPin, Calendar, Briefcase, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Skill {
  name: string;
  level: number;
}

interface Connection {
  id: number;
  name: string;
  role: string;
  avatar: string;
  skills: string[];
  mutualSkills: number;
}

interface ProfileData {
  name: string;
  title: string;
  avatar: string;
  coverImage: string;
  location: string;
  email: string;
  experience: number;
  rating: number;
  completedSwaps: number;
  activeSwaps: number;
  bio: string;
}

const Profile = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('skills');
  const [skillsOffered, setSkillsOffered] = useState([
    { name: 'UI/UX Design', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Photography', level: 60 },
  ]);
  
  const [skillsWanted, setSkillsWanted] = useState([
    'Machine Learning', 'Data Analysis', 'Public Speaking', 'Video Editing'
  ]);

  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkill, setNewSkill] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState(50);
  const [profileData, setProfileData] = useState({
    name: 'Emily Cooper',
    title: 'Senior UI/UX Designer & Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    coverImage: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?w=1200&h=300&fit=crop',
    location: 'San Francisco, CA',
    email: 'emily.cooper@example.com',
    experience: 5,
    rating: 4.8,
    completedSwaps: 24,
    activeSwaps: 3,
    bio: 'Passionate UI/UX designer and frontend developer with 5+ years of experience in creating beautiful and functional digital experiences. I love mentoring others and sharing my knowledge about design systems and component libraries.'
  });

  const connections = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Graphic Designer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      skills: ['Graphic Design', 'Branding'],
      mutualSkills: 2
    },
    {
      id: 2,
      name: 'Mike Johnson',
      role: 'Photographer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      skills: ['Photography', 'Video Editing'],
      mutualSkills: 1
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      skills: ['Digital Marketing', 'SEO'],
      mutualSkills: 3
    }
  ];

  const handleEditProfile = () => {
    toast({
      title: 'Profile Updated!',
      description: 'Your profile has been successfully updated.',
    });
    setShowEditProfile(false);
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkillsOffered([...skillsOffered, { name: newSkill.trim(), level: newSkillLevel }]);
      setNewSkill('');
      setNewSkillLevel(50);
      setShowAddSkill(false);
      toast({
        title: 'Skill Added!',
        description: `${newSkill} has been added to your skills.`,
      });
    }
  };

  const removeSkill = (skillName: string) => {
    setSkillsOffered(skillsOffered.filter(s => s.name !== skillName));
    toast({
      title: 'Skill Removed',
      description: `${skillName} has been removed from your skills.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Cover Photo */}
      <div className="relative h-48 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="container mx-auto px-4 h-full flex items-end relative z-10">
              <div className="flex flex-col md:flex-row md:items-end w-full pb-6">
                <div className="flex -mb-12 md:mb-0">
                  <div className="relative group">
                    <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                      <AvatarImage src={profileData.avatar} alt={profileData.name} />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl text-white">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <button className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors shadow-lg">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="md:ml-6 mt-4 md:mt-0 text-white">
                  <h1 className="text-2xl font-bold">{profileData.name}</h1>
                  <p className="text-indigo-100">{profileData.title}</p>
                  <div className="flex items-center mt-2 flex-wrap gap-2">
                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-0">
                      {profileData.experience}+ years experience
                    </Badge>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{profileData.rating}</span>
                      <span className="mx-1">•</span>
                      <span>{profileData.completedSwaps} swaps</span>
                    </div>
                  </div>
                </div>
                <div className="ml-auto mt-4 md:mt-0">
                  <Dialog open={showEditProfile} onOpenChange={setShowEditProfile}>
                    <DialogTrigger asChild>
                      <Button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20">
                        Edit Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                        <DialogDescription>
                          Update your profile information
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              value={profileData.name}
                              onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="title">Job Title</Label>
                            <Input
                              id="title"
                              value={profileData.title}
                              onChange={(e) => setProfileData({...profileData, title: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            value={profileData.bio}
                            onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                            rows={4}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setShowEditProfile(false)}>Cancel</Button>
                        <Button onClick={handleEditProfile}>Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

      <div className="container mx-auto px-4 py-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* About Card */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-sm font-medium">{profileData.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="text-sm font-medium">{profileData.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="text-sm font-medium">{profileData.experience}+ years</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Member since</p>
                    <p className="text-sm font-medium">January 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Button */}
            <Button className="w-full" size="lg">
              <MessageCircle className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio Card */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Bio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{profileData.bio}</p>
              </CardContent>
            </Card>

            {/* Skills & Experience */}
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-xs">
                <TabsTrigger value="skills" onClick={() => setActiveTab('skills')}>
                  Skills Offered
                </TabsTrigger>
                <TabsTrigger value="learning" onClick={() => setActiveTab('learning')}>
                  Learning Goals
                </TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="mt-6">
                <Card className="border-0 shadow-sm">
                  <CardHeader className="pb-0">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">My Skills</CardTitle>
                      <Dialog open={showAddSkill} onOpenChange={setShowAddSkill}>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4 mr-1" /> Add Skill
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add New Skill</DialogTitle>
                            <DialogDescription>
                              Add a skill you'd like to offer to others
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <Label htmlFor="skill">Skill Name</Label>
                              <Input
                                id="skill"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder="e.g., Graphic Design"
                              />
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <Label htmlFor="skill-level">Proficiency Level</Label>
                                <span className="text-sm text-gray-500">{newSkillLevel}%</span>
                              </div>
                              <div className="space-y-2">
                                <input
                                  type="range"
                                  id="skill-level"
                                  min="0"
                                  max="100"
                                  value={newSkillLevel}
                                  onChange={(e) => setNewSkillLevel(parseInt(e.target.value))}
                                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="flex justify-between text-xs text-gray-500">
                                  <span>Beginner</span>
                                  <span>Expert</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setShowAddSkill(false)}>Cancel</Button>
                            <Button onClick={handleAddSkill}>Add Skill</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {skillsOffered.map((skill: Skill, index: number) => (
                        <div key={index} className="group">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button 
                                onClick={() => removeSkill(skill.name)}
                                className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Progress value={skill.level} className="h-2" />
                            <span className="text-xs text-gray-500 w-10">{skill.level}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learning" className="mt-6">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold">Skills I Want to Learn</CardTitle>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-1" /> Add Goal
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillsWanted.map((skill: string, index: number) => (
                        <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Connections */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg font-semibold">Connections</CardTitle>
                    <CardDescription>People you've connected with</CardDescription>
                  </div>
                  <Button asChild>
                    <Link to="/connections" className="text-indigo-600 hover:bg-indigo-50">
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {connections.map((connection: Connection) => (
                    <div key={connection.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-12 w-12 border">
                          <AvatarImage src={connection.avatar} alt={connection.name} />
                          <AvatarFallback className="bg-gray-100">
                            {connection.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{connection.name}</h4>
                          <p className="text-sm text-gray-500">{connection.role}</p>
                          <div className="flex items-center mt-1">
                            <Users className="h-3 w-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500">{connection.mutualSkills} mutual skills</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Users className="h-4 w-4 mr-1" />
                          Connect
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
