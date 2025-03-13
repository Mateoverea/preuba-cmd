/**
 * MetricsCard Component
 * 
 * Displays a single metric with its value, change indicator, and trend
 * Used on the dashboard to show key performance indicators
 */
export default function MetricsCard({ metric }) {
  // Determine the trend color and icon
  const getTrendDetails = (trend) => {
    switch (trend) {
      case 'up':
        return {
          icon: (
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          ),
          textColor: 'text-green-500'
        };
      case 'down':
        return {
          icon: (
            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          ),
          textColor: 'text-red-500'
        };
      case 'stable':
      default:
        return {
          icon: (
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14"></path>
            </svg>
          ),
          textColor: 'text-gray-500'
        };
    }
  };

  const { icon, textColor } = getTrendDetails(metric.trend);

  return (
    <div className="card flex flex-col">
      <div className="text-sm font-medium text-gray-500 mb-1">{metric.title}</div>
      <div className="flex items-baseline">
        <div className="text-2xl font-semibold text-gray-900">{metric.value}</div>
        <div className={`ml-2 flex items-center text-sm ${textColor}`}>
          <span className="mr-1">{metric.change}</span>
          {icon}
        </div>
      </div>
    </div>
  );
}