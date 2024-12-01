import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock data for events
const mockEvents = [
  {
    id: 1,
    title: "Spring Championship",
    date: "2024-04-15",
    location: "Central Park Circuit",
    description: "Annual spring championship race featuring top riders.",
    image: "https://source.unsplash.com/random/800x400?cycling&1",
  },
  {
    id: 2,
    title: "Summer Series - Round 1",
    date: "2024-06-20",
    location: "Mountain View Track",
    description: "First round of the summer racing series.",
    image: "https://source.unsplash.com/random/800x400?cycling&2",
  },
];

const Events = () => {
  const [events, setEvents] = useState(mockEvents);
  const [date, setDate] = useState<Date>();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleCreateEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newEvent = {
      id: events.length + 1,
      title: formData.get("title") as string,
      date: date?.toISOString().split("T")[0] || "",
      location: formData.get("location") as string,
      description: formData.get("description") as string,
      image: `https://source.unsplash.com/random/800x400?cycling&${events.length + 1}`,
    };

    setEvents([...events, newEvent]);
    setIsCreateDialogOpen(false);
    toast({
      title: "Event Created",
      description: "Your new event has been successfully created.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-racing-black to-racing-gray">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Upcoming Events</h1>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-btn">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateEvent} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input id="title" name="title" required />
                </div>
                <div className="space-y-2">
                  <Label>Event Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" required />
                </div>
                <Button type="submit" className="gradient-btn w-full">
                  Create Event
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="glass card-hover group rounded-lg p-4"
            >
              <div className="aspect-video overflow-hidden rounded-md">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-gray-300">{event.date}</p>
                <p className="mt-1 text-sm text-gray-300">{event.location}</p>
                <p className="mt-2 line-clamp-2 text-gray-400">
                  {event.description}
                </p>
                <Button
                  className="gradient-btn mt-4 w-full"
                  onClick={() => {
                    toast({
                      title: "Coming Soon",
                      description: "Event details page will be available soon.",
                    });
                  }}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Events;