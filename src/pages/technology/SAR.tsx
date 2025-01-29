export function SAR() {
    const tableData = [
        ["Parameters", "Range", "Applications"],
        ["Spectral Resolution", "X Band: 8-12 GHz, C Band: 4-8 GHz. L Band: 1-2 GHz", "Soil moisture analysis, biomass estimation, disaster management, and waterlogging detection"],
        ["Spacial Resolution", "15 m per pixel", "Mid-range resolution for detailed terrain and structure analysis"],
        ["Swath Width", "240 km", "Large-scale monitoring under all weather conditions"],
        ["Revist Time", "Every 2 days", "Rapid updates for dynamic and critical changes in monitored areas"],
        ["Orbit", "LEO (500 km)", "Efficient radar-based monitoring with less power consumption"]
    ];
  
    return (
      <div className="min-h-screen pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-white">Synthetic Aperture Radar Satellites</h2>
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="https://earthdata.nasa.gov/s3fs-public/styles/hds_large/public/2024-06/sar-flight-path-geometry_data.png?VersionId=PNlEFFlP9ZdFLuw5O8Q1yKtM.aP1LEpW&itok=VG8uibMt" 
                    alt="Hyper-Spectral Imaging Satellite"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <table className="w-full text-gray-300">
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-4 border border-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }