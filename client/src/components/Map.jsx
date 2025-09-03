import { useState } from "react";
import { Eye, Navigation } from "lucide-react";

const Map = () => {
  // Google Maps embed URL with business reviews
  const BUSINESS_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1016.148730578136!2d77.57551638402764!3d12.865021860695178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6aba9df7c0af%3A0xd9ac3eed2ad84745!2sPlatinum%20Lifestyle!5e0!3m2!1sen!2sin!4v1756830177796!5m2!1sen!2sin";

  // coordinates from business location
  const DEST_LAT = "12.865021860695178";
  const DEST_LNG = "77.57551638402764";

  // Optional: keep the short link for mobile/app opening
  const shortMapUrl = "https://maps.app.goo.gl/GB18aaAd8gPUVGSg8";

  // Build directions URL
  const buildDirectionsWeb = (sLat, sLng, dLat = DEST_LAT, dLng = DEST_LNG) =>
    sLat && sLng
      ? `https://www.google.com/maps/dir/${sLat},${sLng}/${dLat},${dLng}`
      : `https://www.google.com/maps/dir//${dLat},${dLng}`;

  const [iframeSrc, setIframeSrc] = useState(BUSINESS_EMBED_URL);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600 text-lg">
              Come see us in person at our modern downtown office
            </p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="w-[100%] relative">
              <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={iframeSrc}
                  title="Platinum Lifestyle Office Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full map-iframe"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button
                    onClick={() => window.open(shortMapUrl, "_blank")}
                    className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    title="View in Google Maps / Maps app"
                  >
                    <Eye className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => {
                      // open directions depending on device
                      const isMobile =
                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                          navigator.userAgent
                        );
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                          (position) => {
                            const { latitude, longitude } = position.coords;
                            if (isMobile) {
                              window.open(shortMapUrl, "_blank");
                              setTimeout(() => {
                                window.open(
                                  buildDirectionsWeb(latitude, longitude),
                                  "_blank"
                                );
                              }, 800);
                            } else {
                              window.open(
                                buildDirectionsWeb(latitude, longitude),
                                "_blank"
                              );
                            }
                          },
                          () => {
                            if (isMobile) {
                              window.open(shortMapUrl, "_blank");
                            } else {
                              window.open(buildDirectionsWeb(), "_blank");
                            }
                          },
                          {
                            enableHighAccuracy: true,
                            timeout: 10000,
                            maximumAge: 300000,
                          }
                        );
                      } else {
                        if (isMobile) {
                          window.open(shortMapUrl, "_blank");
                        } else {
                          window.open(buildDirectionsWeb(), "_blank");
                        }
                      }
                    }}
                    className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    title="Get Directions"
                  >
                    <Navigation className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="hidden absolute lg:flex bottom-2 left-16 gap-2">
                  <button
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                          (position) => {
                            const { latitude, longitude } = position.coords;
                            const newEmbed = `https://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`;
                            setIframeSrc(newEmbed);
                          },
                          () => {
                            alert(
                              "Unable to retrieve your location. Please enable location services."
                            );
                          }
                        );
                      } else {
                        alert("Geolocation is not supported by this browser");
                      }
                    }}
                    className="bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-600 text-sm font-medium"
                  >
                    My Location
                  </button>
                  <button
                    onClick={() => setIframeSrc(BUSINESS_EMBED_URL)}
                    className="bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-600 text-sm font-medium"
                  >
                    Business Location
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
