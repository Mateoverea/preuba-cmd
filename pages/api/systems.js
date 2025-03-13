/**
 * API Route: /api/systems
 * 
 * Provides data about hydroponic systems
 * In a real application, this would connect to a database
 */

// Mock data for demonstration purposes
// In a production environment, this would be fetched from a database
const systems = [
  { 
    id: 1, 
    name: 'NFT System A', 
    type: 'Nutrient Film Technique',
    status: 'active', 
    plants: 48, 
    health: 'good',
    metrics: {
      ph: 6.2,
      ec: 1.8,
      waterTemp: 21,
      airTemp: 24,
      humidity: 65,
      lightHours: 16
    },
    crops: [
      { id: 1, name: 'Lettuce', variety: 'Butterhead', count: 24, daysToHarvest: 12 },
      { id: 2, name: 'Basil', variety: 'Sweet', count: 12, daysToHarvest: 18 },
      { id: 3, name: 'Spinach', variety: 'Baby', count: 12, daysToHarvest: 15 }
    ],
    lastMaintenance: '2023-04-10T08:30:00Z'
  },
  { 
    id: 2, 
    name: 'DWC System B', 
    type: 'Deep Water Culture',
    status: 'warning', 
    plants: 36, 
    health: 'fair',
    metrics: {
      ph: 5.8,
      ec: 2.1,
      waterTemp: 22,
      airTemp: 25,
      humidity: 60,
      lightHours: 14
    },
    crops: [
      { id: 4, name: 'Kale', variety: 'Lacinato', count: 18, daysToHarvest: 22 },
      { id: 5, name: 'Chard', variety: 'Rainbow', count: 18, daysToHarvest: 25 }
    ],
    lastMaintenance: '2023-04-08T09:15:00Z'
  },
  { 
    id: 3, 
    name: 'Ebb & Flow C', 
    type: 'Ebb and Flow',
    status: 'inactive', 
    plants: 0, 
    health: 'n/a',
    metrics: {
      ph: 0,
      ec: 0,
      waterTemp: 0,
      airTemp: 23,
      humidity: 55,
      lightHours: 0
    },
    crops: [],
    lastMaintenance: '2023-04-01T10:00:00Z'
  },
];

export default function handler(req, res) {
  // Get the method from the request
  const { method } = req;

  switch (method) {
    // Handle GET requests
    case 'GET':
      // Check if a specific system ID is requested
      const { id } = req.query;
      
      if (id) {
        // Find the system with the matching ID
        const system = systems.find(s => s.id === parseInt(id));
        
        // If system is found, return it, otherwise return 404
        if (system) {
          res.status(200).json(system);
        } else {
          res.status(404).json({ message: 'System not found' });
        }
      } else {
        // Return all systems if no ID is specified
        res.status(200).json(systems);
      }
      break;
      
    // For all other HTTP methods, return 405 Method Not Allowed
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}