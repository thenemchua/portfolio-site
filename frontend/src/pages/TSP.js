import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const TSP = () => {
  const [cities, setCities] = useState([]);
  const [algorithm, setAlgorithm] = useState('brute_force');
  const [numCities, setNumCities] = useState(10);
  const [result, setResult] = useState(null);

  const fetchCities = async () => {
    try {
      const response = await fetch(`/api/tsp/generate/?num_cities=${numCities}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCities(data.cities);
      setResult(null); // Réinitialiser le résultat
    } catch (error) {
      console.error("Error fetching cities:", error);
      alert("Failed to generate cities. Please try again.");
    }
  };

  const solveTSP = async () => {
    try {
      const response = await fetch('/api/tsp/solve/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cities, algorithm }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error solving TSP:", error);
      alert("Failed to solve TSP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#F2F2F2] p-6">
      <h1 className="text-4xl font-bold mb-6">Traveling Salesman Problem</h1>

      {/* Options */}
      <div className="mb-6 flex flex-col space-y-4">
        <label className="flex items-center space-x-4">
          <span className="text-lg">Number of Cities:</span>
          <input
            type="number"
            value={numCities}
            onChange={(e) => setNumCities(e.target.value)}
            className="p-2 border border-[#4A4A4A] rounded-lg bg-[#333] text-[#F2F2F2] focus:ring-2 focus:ring-[#56828C]"
          />
        </label>
        <label className="flex items-center space-x-4">
          <span className="text-lg">Algorithm:</span>
          <select
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
            className="p-2 border border-[#4A4A4A] rounded-lg bg-[#333] text-[#F2F2F2] focus:ring-2 focus:ring-[#56828C]"
          >
            <option value="brute_force">Brute Force</option>
            <option value="nearest_neighbor">Nearest Neighbor</option>
          </select>
        </label>
        <button
          onClick={fetchCities}
          className="bg-gradient-to-r from-[#56828C] to-[#395359] text-white py-2 px-4 rounded-lg hover:scale-105 transform transition duration-200 shadow-lg"
        >
          Generate Cities
        </button>
      </div>

      {/* Visualisation */}
      {cities.length > 0 && (
        <Plot
          data={[
            {
              x: cities.map((city) => city[0]),
              y: cities.map((city) => city[1]),
              mode: 'markers+text',
              text: cities.map((_, i) => `City ${i + 1}`),
              marker: { size: 12, color: '#56828C' },
            },
            result && {
              x: [...result.route.map((city) => city[0]), result.route[0][0]],
              y: [...result.route.map((city) => city[1]), result.route[0][1]],
              mode: 'lines',
              line: { color: '#F2F2F2', width: 2 },
            },
          ]}
          layout={{
            title: 'TSP Visualization',
            xaxis: { title: 'X Coordinate', gridcolor: '#4A4A4A' },
            yaxis: { title: 'Y Coordinate', gridcolor: '#4A4A4A' },
            plot_bgcolor: '#0D0D0D',
            paper_bgcolor: '#0D0D0D',
            font: { color: '#F2F2F2' },
          }}
        />
      )}

      {/* Résultat */}
      {result && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Result:</h2>
          <p>Distance: {result.distance.toFixed(2)}</p>
          <p>Route: {JSON.stringify(result.route)}</p>
        </div>
      )}

      {/* Résolution */}
      <button
        onClick={solveTSP}
        className="mt-6 bg-gradient-to-r from-[#56828C] to-[#395359] text-white py-2 px-4 rounded-lg hover:scale-105 transform transition duration-200 shadow-lg"
        disabled={cities.length === 0}
      >
        Solve TSP
      </button>
    </div>
  );
};

export default TSP;
