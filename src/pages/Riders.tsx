import { useState } from "react";
import Navigation from "../components/Navigation";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Search } from "lucide-react";

const Riders = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - in a real app this would come from an API
  const riders = [
    { id: 1, name: "Alex Thompson", number: "44", nationality: "USA", points: 125, team: "SpeedKids Racing" },
    { id: 2, name: "Emma Rodriguez", number: "21", nationality: "Spain", points: 118, team: "Mini Racers" },
    { id: 3, name: "Lucas Chen", number: "7", nationality: "China", points: 98, team: "Balance Pros" },
    { id: 4, name: "Sophie Martin", number: "15", nationality: "France", points: 87, team: "Junior Speedsters" },
    { id: 5, name: "James Wilson", number: "33", nationality: "UK", points: 76, team: "PushBike Elite" },
  ];

  const filteredRiders = riders.filter((rider) =>
    rider.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-racing-black to-racing-gray">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="glass rounded-lg p-6 animate-fade-up">
          <h1 className="text-3xl font-bold text-white mb-6">Riders</h1>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search riders..."
              className="pl-10 bg-white/10 text-white placeholder:text-gray-400 border-white/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/20">
                  <TableHead className="text-white">Number</TableHead>
                  <TableHead className="text-white">Name</TableHead>
                  <TableHead className="text-white">Nationality</TableHead>
                  <TableHead className="text-white">Team</TableHead>
                  <TableHead className="text-white text-right">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRiders.map((rider) => (
                  <TableRow 
                    key={rider.id} 
                    className="border-white/20 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <TableCell className="text-racing-red font-bold">{rider.number}</TableCell>
                    <TableCell className="text-white font-medium">{rider.name}</TableCell>
                    <TableCell className="text-gray-300">{rider.nationality}</TableCell>
                    <TableCell className="text-gray-300">{rider.team}</TableCell>
                    <TableCell className="text-white font-medium text-right">{rider.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Riders;