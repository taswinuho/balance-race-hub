import Navigation from "../components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

const Rankings = () => {
  // Mock data - in a real app this would come from an API
  const championshipStandings = [
    { position: 1, name: "Alex Thompson", points: 125, wins: 3 },
    { position: 2, name: "Emma Rodriguez", points: 118, wins: 2 },
    { position: 3, name: "Lucas Chen", points: 98, wins: 1 },
    { position: 4, name: "Sophie Martin", points: 87, wins: 1 },
    { position: 5, name: "James Wilson", points: 76, wins: 0 },
  ];

  const teamStandings = [
    { position: 1, name: "SpeedKids Racing", points: 243, wins: 5 },
    { position: 2, name: "Mini Racers", points: 198, wins: 3 },
    { position: 3, name: "Balance Pros", points: 167, wins: 2 },
    { position: 4, name: "Junior Speedsters", points: 145, wins: 1 },
    { position: 5, name: "PushBike Elite", points: 132, wins: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-racing-black to-racing-gray">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="glass rounded-lg p-6 animate-fade-up">
          <h1 className="text-3xl font-bold text-white mb-6">Rankings</h1>
          
          <Tabs defaultValue="riders" className="w-full">
            <TabsList className="glass-dark w-full justify-start mb-6">
              <TabsTrigger 
                value="riders"
                className="text-white data-[state=active]:bg-racing-red data-[state=active]:text-white"
              >
                Riders Championship
              </TabsTrigger>
              <TabsTrigger 
                value="teams"
                className="text-white data-[state=active]:bg-racing-red data-[state=active]:text-white"
              >
                Teams Championship
              </TabsTrigger>
            </TabsList>

            <TabsContent value="riders" className="animate-fade-up">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="text-white">Position</TableHead>
                    <TableHead className="text-white">Rider</TableHead>
                    <TableHead className="text-white text-right">Points</TableHead>
                    <TableHead className="text-white text-right">Wins</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {championshipStandings.map((rider) => (
                    <TableRow 
                      key={rider.position}
                      className="border-white/20 hover:bg-white/5 transition-colors"
                    >
                      <TableCell className="text-racing-red font-bold">{rider.position}</TableCell>
                      <TableCell className="text-white font-medium">{rider.name}</TableCell>
                      <TableCell className="text-white font-medium text-right">{rider.points}</TableCell>
                      <TableCell className="text-white font-medium text-right">{rider.wins}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="teams" className="animate-fade-up">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="text-white">Position</TableHead>
                    <TableHead className="text-white">Team</TableHead>
                    <TableHead className="text-white text-right">Points</TableHead>
                    <TableHead className="text-white text-right">Wins</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamStandings.map((team) => (
                    <TableRow 
                      key={team.position}
                      className="border-white/20 hover:bg-white/5 transition-colors"
                    >
                      <TableCell className="text-racing-red font-bold">{team.position}</TableCell>
                      <TableCell className="text-white font-medium">{team.name}</TableCell>
                      <TableCell className="text-white font-medium text-right">{team.points}</TableCell>
                      <TableCell className="text-white font-medium text-right">{team.wins}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Rankings;