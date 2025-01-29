export function MultiSpectral() {
    const tableData = [
        ["Parameters", "Range", "Applications"],
        ["Spectral Resolution", "15 bands: VNIR: 10 bands (400-1000 nm), SWIR: 4 bands (1000-2500 nm), Other (Thermal IR): 1 band (>8000 nm)", "Monitoring large-scale crop patterns, deforestation, vegetation changes, and heat stress detection"],
        ["Spacial Resolution", "25 m per pixel", "Region-level agricultural assessments"],
        ["Swath Width", "120 km", "Broad coverage for tracking trends across extensive areas"],
        ["Revisit Time", "Daily", "Frequent data updates for wide-area monitoring"],
        ["Orbit", "Slightly inclined SSO", "Prioritized coverage for specific regions like India"]
    ];
  
    return (
      <div className="min-h-screen pt-16">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-white">Multi-Spectral Imaging Satellites</h2>
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