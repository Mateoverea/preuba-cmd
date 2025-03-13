import Head from 'next/head';
import { useState } from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout';
import SystemOverview from '../components/dashboard/SystemOverview';
import RecentActivity from '../components/dashboard/RecentActivity';
import MetricsCard from '../components/dashboard/MetricsCard';

// Mock data for demonstration
const mockSystems = [
  { id: 1, name: 'NFT System A', status: 'active', plants: 48, health: 'good' },
  { id: 2, name: 'DWC System B', status: 'warning', plants: 36, health: 'fair' },
  { id: 3, name: 'Ebb & Flow C', status: 'inactive', plants: 0, health: 'n/a' },
];

const mockMetrics = [
  { id: 1, title: 'Total Plants', value: '84', change: '+12%', trend: 'up' },
  { id: 2, title: 'Average pH', value: '6.2', change: '-0.1', trend: 'stable' },
  { id: 3, title: 'Water Temp', value: '21°C', change: '+1°C', trend: 'up' },
  { id: 4, title: 'Nutrient Level', value: '720 PPM', change: '-30 PPM', trend: 'down' },
];

const mockActivities = [
  { id: 1, type: 'alert', message: 'pH level in System B needs attention', time: '10 minutes ago' },
  { id: 2, type: 'info', message: 'Nutrient solution replaced in System A', time: '2 hours ago' },
  { id: 3, type: 'success', message: 'Harvested 5kg of lettuce from System A', time: '1 day ago' },
  { id: 4, type: 'info', message: 'New seedlings added to System A', time: '2 days ago' },
];

export default function Home() {
  const [systems, setSystems] = useState(mockSystems);
  const [metrics, setMetrics] = useState(mockMetrics);
  const [activities, setActivities] = useState(mockActivities);

  return (
    <DashboardLayout>
      <Head>
        <title>HydroTrack - Dashboard</title>
        <meta name="description" content="Hydroponics management dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
        
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric) => (
            <MetricsCard key={metric.id} metric={metric} />
          ))}
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Systems Overview */}
          <div className="lg:col-span-2">
            <SystemOverview systems={systems} />
          </div>
          
          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <RecentActivity activities={activities} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}