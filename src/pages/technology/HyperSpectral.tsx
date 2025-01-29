export function HyperSpectral() {
    const tableData = [
      ["Parameters", "Range", "Applications"],
      ["Spectral Resolution", "120 bands: VNIR: 60 bands (400-1000 nm), SWIR: 50 bands (1000-2500 nm), Other (UV/Blue): 10 bands (300-400 nm)", "Identifying crop health, pest detection, soil nutrient mapping, and atmospheric studies"],
      ["Spacial Resolution", "3 m per pixel", "Precise field-level monitoring"],
      ["Swath Width", "20 km", "Detailed crop stress analysis over specific regions"],
      ["Revist Time", "Daily", "Timely insights for precision agriculture"],
      ["Orbit", "Upper LEO (700 km)", "High-resolution imagery with improved coverage area"]
    ];
  
    return (
      <div className="min-h-screen pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-white">Hyper-Spectral Imaging Satellites</h2>
            
            <div className="mb-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src="https://i0.wp.com/spacenews.com/wp-content/uploads/2018/10/Webp.net-resizeimage.jpg?w=879&quality=89&ssl=1" 
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