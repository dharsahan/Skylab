import React, { useState } from 'react';
import { Satellite } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type TableData = string[][];

export function Technology() {
  const [selectedTech, setSelectedTech] = useState<number | null>(null);
  const navigate = useNavigate();

  const techDetails = [
    {
      title: "Hyper-Spectral Imaging Satellites",
      tableData: [
        ["Parameters", "Range", "Applications"],
        ["Spectral Resolution", "120 bands: VNIR: 60 bands (400-1000 nm), SWIR: 50 bands (1000-2500 nm), Other (UV/Blue): 10 bands (300-400 nm)", "Identifying crop health, pest detection, soil nutrient mapping, and atmospheric studies"],
        ["Spacial Resolution", "3 m per pixel", "Precise field-level monitoring"],
        ["Swath Width", "20 km", "Detailed crop stress analysis over specific regions"],
        ["Revist Time", "Daily", "Timely insights for precision agriculture"],
        ["Orbit", "Upper LEO (700 km)", "High-resolution imagery with improved coverage area"]
      ]
    },
    {
      title: "Multi-Spectral Imaging Satellites",
      tableData: [
        ["Parameters", "Range", "Applications"],
        ["Spectral Resolution", "15 bands: VNIR: 10 bands (400-1000 nm), SWIR: 4 bands (1000-2500 nm), Other (Thermal IR): 1 band (>8000 nm)", "Monitoring large-scale crop patterns, deforestation, vegetation changes, and heat stress detection"],
        ["Spacial Resolution", "25 m per pixel", "Region-level agricultural assessments"],
        ["Swath Width", "120 km", "Broad coverage for tracking trends across extensive areas"],
        ["Revisit Time", "Daily", "Frequent data updates for wide-area monitoring"],
        ["Orbit", "Slightly inclined SSO", "Prioritized coverage for specific regions like India"]
      ]
    },
    {
      title: "Synthetic Aperture Radar",
      tableData: [
        ["Parameters", "Range", "Applications"],
        ["Spectral Resolution", "X Band: 8-12 GHz, C Band: 4-8 GHz. L Band: 1-2 GHz", "Soil moisture analysis, biomass estimation, disaster management, and waterlogging detection"],
        ["Spacial Resolution", "15 m per pixel", "Mid-range resolution for detailed terrain and structure analysis"],
        ["Swath Width", "240 km", "Large-scale monitoring under all weather conditions"],
        ["Revist Time", "Every 2 days", "Rapid updates for dynamic and critical changes in monitored areas"],
        ["Orbit", "LEO (500 km)", "Efficient radar-based monitoring with less power consumption"]
      ]
    }
  ];

  const technologies = [
    {
      icon: <Satellite className="w-8 h-8 mb-4" />,
      title: "Hyper-Spectral Imaging Satellites",
      description: "High-resolution spectral data for detailed crop analysis",
      path: "/technology/hyperspectral"
    },
    {
      icon: <Satellite className="w-8 h-8 mb-4" />,
      title: "Multi-Spectral Imaging Satellites",
      description: "Wide area coverage for agricultural monitoring",
      path: "/technology/multispectral"
    },
    {
      icon: <Satellite className="w-8 h-8 mb-4" />,
      title: "Synthetic Aperture Radar",
      description: "All-weather monitoring capabilities",
      path: "/technology/sar"
    }
  ];

  const renderTable = (tableData: TableData) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg max-w-4xl w-full mx-4">
          <div className="flex justify-end mb-4">
            <button onClick={() => setSelectedTech(null)} className="text-gray-400 hover:text-white">✕</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead>
                <tr>
                  {tableData[0].map((header, index) => (
                    <th key={index} className="p-3 bg-gray-700 border border-gray-600 font-bold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="p-3 border border-gray-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Proposed Solution</h1>
          </div>
          <div className="mb-16 text-start">
            <p className="text-gray-300 text-xl mx-auto">
              A satellite constellation comprising of remote sensing,
              hyperspectral imaging, and SAR satellite. These satellites provide
              real-time monitoring. The Synthetic aperture radar [SAR] satellites
              provide all weather monitoring, whereas the Hyperspectral Imaging
              satellites provide high resolution hyperspectral data. The remote
              sensing satellites consists of a Multispectral Imager which provides
              coverage over a long area along with the SAR satellite. The large
              amount of data produced is processed in space itself using complex
              AI algorithms. The satellites provide lot of data which ranges from
              chlorophyl content of plants to the fertility and moisture content
              of the soil below the plants
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                onClick={() => navigate(tech.path)}
                className="cursor-pointer bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {tech.icon}
                  <h3 className="text-xl font-semibold mb-2 text-white">{tech.title}</h3>
                  <p className="text-gray-400 text-center">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-start">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Capabilities of the Satellites</h1>
          </div>
          <div className="mb-16 text-start">
            <p className="text-gray-300 text-xl mx-auto">
              • The satellite constellation consists of a network of Earth Observation Satellites which comprises of
              12 Hyperspectral Imaging satellites and 4 Multispectral Imaging satellites positioned in Low Earth
              Orbit and 2 Synthetic Aperture Radar satellites positioned in Sun Synchronous Orbit.
            </p>
            <p className="text-gray-300 text-xl mx-auto">
              • The Synthetic Aperture Radar satellites provide all weather coverage since it uses radar waves,
              these enables it to find the Soil Moisture Content by penetrating the soil
            </p>
            <p className="text-gray-300 text-xl mx-auto">
              • The Multispectral Imaging satellites provide a medium resolution wide area coverage. These are very
              important to calculate NDVI, EVI and other indices and the water content in the plants etc by
              analysing the spectral data.
            </p>
            <p className="text-gray-300 text-xl mx-auto">
              • The Hyperspectral Imaging satellites provide the highest resolution compared to the other satellites,
              which generate a lot of Hyperspectral data. This data will be processed by advanced AI models
              which then provide details about nutrient deficiencies, and diseases of crops by detecting changes in
              chlorophyll content and pigments.
            </p>
            <p className="text-gray-300 text-xl mx-auto">
              • This data can also be used to determine soil composition, moisture, organic matter content and
              mineral content of the soil by analysing VNIR (400–1000 nm) and SWIR (1000–2500 nm) spectrums
            </p>
          </div>
        </div>
      </section>
      {selectedTech !== null && renderTable(techDetails[selectedTech].tableData)}
    </div>
  );
}