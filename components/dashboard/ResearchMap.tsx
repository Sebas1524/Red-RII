"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

interface CountryData {
    name: string;
    nivel: number;
    lat: number;
    lng: number;
    instituto: string;
    hito: string;
    bandera: string;
    investigadores: string[];
    ciudad: string;
    convenios: string[];
    publicaciones: string[];
    web: string;
}

function getHeatColor(nivel: number): string {
    if (nivel >= 8) return "#ef4444";
    if (nivel >= 6) return "#f97316";
    if (nivel >= 4) return "#eab308";
    if (nivel >= 3) return "#22c55e";
    return "#3b82f6";
}

function getHeatGlow(nivel: number): string {
    if (nivel >= 8) return "0 0 18px rgba(239,68,68,0.7)";
    if (nivel >= 6) return "0 0 14px rgba(249,115,22,0.6)";
    if (nivel >= 4) return "0 0 12px rgba(234,179,8,0.5)";
    if (nivel >= 3) return "0 0 10px rgba(34,197,94,0.4)";
    return "0 0 8px rgba(59,130,246,0.4)";
}

function getMarkerSize(nivel: number): number {
    return Math.max(10, nivel * 2 + 4);
}

const paises: CountryData[] = [
    { name: "Ecuador", nivel: 10, lat: -0.23, lng: -78.52, instituto: "Universidad San Francisco · IA", hito: "Sede principal · 12 proyectos", bandera: "🇪🇨", investigadores: ["Dra. Lucía Montes (IA)", "Dr. Andrés Paz (Astrofísica)"], ciudad: "Quito", convenios: ["Colombia", "España", "México", "Argentina"], publicaciones: ["IA en fronteras (2026)", "Redes neuronales (2025)"], web: "usfq.edu.ec" },
    { name: "Colombia", nivel: 8, lat: 4.57, lng: -74.30, instituto: "Universidad de los Andes", hito: "CAISEB 2026 · 8 proyectos", bandera: "🇨🇴", investigadores: ["Dr. Carlos Rueda (Biotec)"], ciudad: "Bogotá", convenios: ["Ecuador", "Venezuela", "España", "Chile"], publicaciones: ["Biotecnología andina (2025)"], web: "uniandes.edu.co" },
    { name: "España", nivel: 5, lat: 40.42, lng: -3.70, instituto: "CSIC · Madrid", hito: "Robótica · 5 investigadores", bandera: "🇪🇸", investigadores: ["Dr. Javier Mora (Robótica)"], ciudad: "Madrid", convenios: ["Ecuador", "Colombia", "México", "Portugal"], publicaciones: ["Robótica colaborativa (2025)"], web: "csic.es" },
    { name: "México", nivel: 3, lat: 19.43, lng: -99.13, instituto: "UNAM", hito: "Química · 3 colaboradores", bandera: "🇲🇽", investigadores: ["Dra. Sofía Reyes (Química)"], ciudad: "Ciudad de México", convenios: ["Ecuador", "España", "Colombia"], publicaciones: ["Química sustentable (2025)"], web: "unam.mx" },
    { name: "Argentina", nivel: 2, lat: -34.60, lng: -58.38, instituto: "CONICET", hito: "Física · 2 proyectos", bandera: "🇦🇷", investigadores: ["Dr. Martín López (Física)"], ciudad: "Buenos Aires", convenios: ["Ecuador", "Chile", "Uruguay"], publicaciones: ["Física teórica (2025)"], web: "conicet.gov.ar" },
    { name: "Chile", nivel: 4, lat: -33.45, lng: -70.67, instituto: "Universidad de Chile", hito: "Astronomía · ALMA", bandera: "🇨🇱", investigadores: ["Dra. Carolina Muñoz (Astronomía)"], ciudad: "Santiago", convenios: ["Colombia", "Argentina", "Perú"], publicaciones: ["Astronomía ALMA (2026)"], web: "uchile.cl" },
    { name: "Perú", nivel: 2, lat: -12.05, lng: -77.04, instituto: "Pontificia Universidad Católica", hito: "Arqueología andina", bandera: "🇵🇪", investigadores: ["Dr. Mario Vargas (Arqueología)"], ciudad: "Lima", convenios: ["Ecuador", "Chile", "Bolivia"], publicaciones: ["Cultura Moche (2025)"], web: "pucp.edu.pe" },
    { name: "Brasil", nivel: 3, lat: -23.55, lng: -46.63, instituto: "Universidade de São Paulo", hito: "Biodiversidad", bandera: "🇧🇷", investigadores: ["Dra. Ana Silva (Biodiversidad)"], ciudad: "São Paulo", convenios: ["Colombia", "Argentina", "Portugal"], publicaciones: ["Amazonía sostenible (2026)"], web: "usp.br" },
    { name: "Venezuela", nivel: 3, lat: 10.48, lng: -66.90, instituto: "IVIC", hito: "Energía", bandera: "🇻🇪", investigadores: ["Dr. José Hernández (Energía)"], ciudad: "Caracas", convenios: ["Colombia", "Brasil", "España"], publicaciones: ["Energías alternativas (2025)"], web: "ivic.gob.ve" },
    { name: "Portugal", nivel: 4, lat: 38.72, lng: -9.14, instituto: "Universidade de Lisboa", hito: "Ciencias del mar", bandera: "🇵🇹", investigadores: ["Dra. Sofia Martins (Oceanografía)"], ciudad: "Lisboa", convenios: ["España", "Brasil"], publicaciones: ["Océano Atlántico (2026)"], web: "ulisboa.pt" },
    { name: "Uruguay", nivel: 3, lat: -34.90, lng: -56.18, instituto: "Universidad de la República", hito: "Bioinformática", bandera: "🇺🇾", investigadores: ["Dr. Federico López (Bioinformática)"], ciudad: "Montevideo", convenios: ["Argentina", "Brasil"], publicaciones: ["Bioinformática clínica (2025)"], web: "udelar.edu.uy" },
    { name: "Bolivia", nivel: 2, lat: -16.50, lng: -68.15, instituto: "Universidad Mayor de San Andrés", hito: "Antropología", bandera: "🇧🇴", investigadores: ["Dra. Juana Quispe (Antropología)"], ciudad: "La Paz", convenios: ["Perú", "Argentina"], publicaciones: ["Culturas andinas (2025)"], web: "umsa.bo" },
    { name: "Paraguay", nivel: 2, lat: -25.28, lng: -57.63, instituto: "Universidad Nacional", hito: "Ingeniería", bandera: "🇵🇾", investigadores: ["Dr. Ernesto Rojas (Ingeniería)"], ciudad: "Asunción", convenios: ["Argentina", "Brasil"], publicaciones: ["Ingeniería sostenible (2026)"], web: "una.py" },
    { name: "Panamá", nivel: 2, lat: 8.98, lng: -79.52, instituto: "Universidad de Panamá", hito: "Biotecnología", bandera: "🇵🇦", investigadores: ["Dra. Ana Gasteazoro (Biotec)"], ciudad: "Ciudad de Panamá", convenios: ["Colombia", "México"], publicaciones: ["Biotecnología tropical (2025)"], web: "up.ac.pa" },
    { name: "Costa Rica", nivel: 2, lat: 9.93, lng: -84.09, instituto: "Universidad de Costa Rica", hito: "Ecología", bandera: "🇨🇷", investigadores: ["Dr. Luis Solís (Ecología)"], ciudad: "San José", convenios: ["Panamá", "México"], publicaciones: ["Bosques nubosos (2025)"], web: "ucr.ac.cr" },
    { name: "Puerto Rico", nivel: 2, lat: 18.47, lng: -66.11, instituto: "Universidad de Puerto Rico", hito: "Ciencias ambientales", bandera: "🇵🇷", investigadores: ["Dra. Carmen Díaz (Ambiental)"], ciudad: "San Juan", convenios: ["España", "México"], publicaciones: ["Cambio climático (2026)"], web: "upr.edu" }
];

const PULSE_STYLE = `
@keyframes pulse-ring {
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(2.2); opacity: 0; }
    100% { transform: scale(1); opacity: 0; }
}
@keyframes pulse-dot {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}
.pulse-marker-ring {
    animation: pulse-ring 2.5s ease-out infinite;
}
.pulse-marker-dot {
    animation: pulse-dot 2.5s ease-in-out infinite;
}
.leaflet-container { background: #0f172a !important; }
`;

export default function ResearchMap({ className = "h-[600px]" }: { className?: string }) {
    const mapRef = useRef<HTMLDivElement>(null);
    const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
    const [mapInstance, setMapInstance] = useState<any>(null);

    useEffect(() => {
        if (!mapRef.current || typeof window === "undefined") return;
        if (mapInstance) return;

        import("leaflet").then((L) => {

            // @ts-ignore
            if (mapRef.current?._leaflet_id) return;

            const southWest = L.latLng(-60, -140);
            const northEast = L.latLng(65, 50);
            const bounds = L.latLngBounds(southWest, northEast);

            const map = L.map(mapRef.current!, {
                center: [8, -40],
                zoom: 3,
                minZoom: 3,
                maxZoom: 7,
                zoomControl: false,
                attributionControl: false,
                maxBounds: bounds,
                maxBoundsViscosity: 1.0,
            });


            L.control.zoom({ position: 'bottomright' }).addTo(map);

            setMapInstance(map);


            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
                attribution: '',
                subdomains: 'abcd',
                maxZoom: 19,
                opacity: 0.85,
            }).addTo(map);


            fetch('https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/world-countries.json')
                .then(r => r.json())
                .then(geoData => {
                    L.geoJSON(geoData as any, {
                        style: function (feature: any) {
                            const nombre = feature.properties.name;
                            const pais = paises.find(p => p.name === nombre);
                            if (pais) {
                                const heatColor = getHeatColor(pais.nivel);
                                return {
                                    fillColor: heatColor,
                                    fillOpacity: 0.25 + (pais.nivel / 10) * 0.35,
                                    weight: 1.5,
                                    color: heatColor,
                                    opacity: 0.5,
                                };
                            } else {
                                return {
                                    fillColor: '#1e293b',
                                    fillOpacity: 0.15,
                                    weight: 0.5,
                                    color: '#334155',
                                    opacity: 0.15,
                                };
                            }
                        },
                        onEachFeature: function (feature: any, layer: any) {
                            const nombre = feature.properties.name;
                            const pais = paises.find(p => p.name === nombre);
                            if (pais) {
                                layer.on({
                                    mouseover: function (e: any) {
                                        const l = e.target;
                                        const hc = getHeatColor(pais.nivel);
                                        l.setStyle({ fillOpacity: 0.7, weight: 2.5, color: '#fff' });
                                        l.bringToFront();
                                    },
                                    mouseout: function (e: any) {
                                        const l = e.target;
                                        const p2 = paises.find(p2 => p2.name === feature.properties.name);
                                        if (p2) {
                                            const hc = getHeatColor(p2.nivel);
                                            l.setStyle({
                                                fillColor: hc,
                                                fillOpacity: 0.25 + (p2.nivel / 10) * 0.35,
                                                weight: 1.5,
                                                color: hc
                                            });
                                        }
                                    },
                                    click: function () {
                                        setSelectedCountry(pais);
                                    }
                                });
                            }
                        }
                    }).addTo(map);


                    paises.forEach(p => {
                        const sz = getMarkerSize(p.nivel);
                        const hc = getHeatColor(p.nivel);
                        const glow = getHeatGlow(p.nivel);

                        const icon = L.divIcon({
                            html: `<div style="position:relative;width:${sz}px;height:${sz}px;">
                                <div class="pulse-marker-ring" style="position:absolute;inset:0;border-radius:50%;background:${hc};opacity:0.4;"></div>
                                <div class="pulse-marker-dot" style="position:absolute;inset:0;border-radius:50%;background:${hc};box-shadow:${glow};border:2px solid rgba(255,255,255,0.8);"></div>
                            </div>`,
                            className: '',
                            iconSize: [sz, sz],
                            iconAnchor: [sz / 2, sz / 2],
                        });

                        const marker = L.marker([p.lat, p.lng], { icon }).addTo(map);


                        marker.bindTooltip(
                            `<div style="text-align:center;">
                                <strong>${p.bandera} ${p.name}</strong><br/>
                                <span style="font-size:11px;opacity:0.8">${p.instituto}</span>
                            </div>`,
                            {
                                direction: 'top',
                                offset: [0, -(sz / 2 + 4)],
                                className: 'custom-tooltip',
                                permanent: false,
                            }
                        );

                        marker.on('click', () => setSelectedCountry(p));
                    });


                    const connections = new Set();
                    paises.forEach(p => {
                        p.convenios.forEach(dest => {
                            const destino = paises.find(p2 => p2.name === dest);
                            if (destino) {
                                const id = [p.name, dest].sort().join('-');
                                if (!connections.has(id)) {
                                    connections.add(id);


                                    const midLat = (p.lat + destino.lat) / 2;
                                    const midLng = (p.lng + destino.lng) / 2;
                                    const dist = Math.sqrt(Math.pow(p.lat - destino.lat, 2) + Math.pow(p.lng - destino.lng, 2));
                                    const curveFactor = dist * 0.15;

                                    const dx = destino.lng - p.lng;
                                    const dy = destino.lat - p.lat;
                                    const norm = Math.sqrt(dx * dx + dy * dy) || 1;
                                    const offsetLat = midLat + (dx / norm) * curveFactor;
                                    const offsetLng = midLng - (dy / norm) * curveFactor;

                                    const points: [number, number][] = [];
                                    const steps = 20;
                                    for (let i = 0; i <= steps; i++) {
                                        const t = i / steps;
                                        const lat = (1 - t) * (1 - t) * p.lat + 2 * (1 - t) * t * offsetLat + t * t * destino.lat;
                                        const lng = (1 - t) * (1 - t) * p.lng + 2 * (1 - t) * t * offsetLng + t * t * destino.lng;
                                        points.push([lat, lng]);
                                    }

                                    L.polyline(points, {
                                        color: '#60a5fa',
                                        weight: 1.2,
                                        opacity: 0.25,
                                        smoothFactor: 1,
                                        lineCap: 'round',
                                    }).addTo(map);
                                }
                            }
                        });
                    });
                });
        });
    }, [mapInstance]);


    useEffect(() => {
        if (selectedCountry && mapInstance) {
            mapInstance.flyTo([selectedCountry.lat, selectedCountry.lng], 5, { duration: 0.8 });
        }
    }, [selectedCountry, mapInstance]);

    const sortedCountries = [...paises].sort((a, b) => b.nivel - a.nivel).slice(0, 8);

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: PULSE_STYLE }} />
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-tooltip {
                    background: rgba(15,23,42,0.95) !important;
                    color: #f1f5f9 !important;
                    border: 1px solid rgba(99,102,241,0.3) !important;
                    border-radius: 10px !important;
                    padding: 8px 14px !important;
                    font-size: 13px !important;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.4) !important;
                    backdrop-filter: blur(12px) !important;
                }
                .custom-tooltip::before {
                    border-top-color: rgba(15,23,42,0.95) !important;
                }
                .leaflet-control-zoom a {
                    background: rgba(15,23,42,0.9) !important;
                    color: #94a3b8 !important;
                    border-color: rgba(51,65,85,0.5) !important;
                    backdrop-filter: blur(12px) !important;
                }
                .leaflet-control-zoom a:hover {
                    background: rgba(30,41,59,0.95) !important;
                    color: #e2e8f0 !important;
                }
            ` }} />

            <div className={`relative w-full bg-[#0b1120] rounded-3xl overflow-hidden border border-slate-700/40 shadow-[0_0_60px_rgba(0,0,0,0.5)] flex ${className}`}>


                <div className="absolute top-4 left-4 z-[900] w-64 bg-[#0f172a]/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl hidden lg:block overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-700/40">
                        <h3 className="text-sm font-bold text-slate-200 tracking-wide flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            Ranking de Actividad
                        </h3>
                    </div>
                    <div className="p-2 space-y-0.5 max-h-[380px] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#334155 transparent' }}>
                        {sortedCountries.map((c, idx) => {
                            const hc = getHeatColor(c.nivel);
                            return (
                                <div
                                    key={c.name}
                                    onClick={() => setSelectedCountry(c)}
                                    className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-800/60 rounded-xl cursor-pointer transition-all duration-200 group"
                                >
                                    <span className="text-[10px] font-bold text-slate-500 w-4 text-center">{idx + 1}</span>
                                    <span className="text-lg leading-none">{c.bandera}</span>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-semibold text-slate-300 group-hover:text-white truncate transition-colors">{c.name}</div>
                                        <div className="w-full h-1 bg-slate-800 rounded-full mt-1">
                                            <div
                                                className="h-full rounded-full transition-all duration-500"
                                                style={{
                                                    width: `${(c.nivel / 10) * 100}%`,
                                                    background: `linear-gradient(90deg, ${hc}, ${hc}dd)`,
                                                    boxShadow: `0 0 6px ${hc}66`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold tabular-nums" style={{ color: hc }}>{c.nivel}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="absolute top-4 right-4 z-[900] flex gap-2 hidden lg:flex">
                    {[
                        { value: "86", label: "Investigadores", color: "#ef4444" },
                        { value: "23", label: "Convenios", color: "#eab308" },
                        { value: "16", label: "Países", color: "#3b82f6" },
                    ].map((m) => (
                        <div key={m.label} className="bg-[#0f172a]/85 backdrop-blur-xl px-4 py-2 rounded-xl border border-slate-700/40 text-xs font-semibold text-slate-300 shadow-lg">
                            <span style={{ color: m.color }} className="mr-1 font-bold">{m.value}</span>
                            {m.label}
                        </div>
                    ))}
                </div>


                <div ref={mapRef} className="w-full h-full z-0" />


                <div className="absolute bottom-5 left-5 z-[1000] bg-[#0f172a]/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/40 text-sm text-slate-300 hidden lg:block shadow-xl">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Nivel de Actividad</div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-500">Bajo</span>
                        <div className="flex h-2.5 rounded-full overflow-hidden" style={{ width: '120px' }}>
                            <div className="flex-1" style={{ background: '#3b82f6' }} />
                            <div className="flex-1" style={{ background: '#22c55e' }} />
                            <div className="flex-1" style={{ background: '#eab308' }} />
                            <div className="flex-1" style={{ background: '#f97316' }} />
                            <div className="flex-1" style={{ background: '#ef4444' }} />
                        </div>
                        <span className="text-[10px] text-slate-500">Alto</span>
                    </div>
                </div>


                {selectedCountry && (
                    <div className="absolute top-16 right-4 w-80 z-[1000] bg-[#0f172a]/95 backdrop-blur-2xl p-5 rounded-2xl border border-slate-700/40 text-white shadow-2xl"
                        style={{ animation: 'fadeInUp 0.3s ease-out' }}
                    >
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes fadeInUp {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                            }
                        ` }} />

                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">{selectedCountry.bandera}</span>
                                <div>
                                    <h2 className="text-lg font-bold leading-tight">{selectedCountry.name}</h2>
                                    <div className="text-[11px] text-slate-400 mt-0.5">{selectedCountry.instituto}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedCountry(null)}
                                className="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors text-sm font-bold"
                            >
                                ×
                            </button>
                        </div>


                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold"
                                style={{
                                    background: `${getHeatColor(selectedCountry.nivel)}20`,
                                    color: getHeatColor(selectedCountry.nivel),
                                    border: `1px solid ${getHeatColor(selectedCountry.nivel)}30`,
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ background: getHeatColor(selectedCountry.nivel) }} />
                                Nivel {selectedCountry.nivel}
                            </div>
                            <span className="text-xs text-slate-400">{selectedCountry.hito}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-3 pt-3 border-t border-slate-800/60">
                            <div>
                                <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 font-bold">Investigadores</h4>
                                <ul className="text-[11px] space-y-1 text-slate-300">
                                    {selectedCountry.investigadores.map((i, idx) => (
                                        <li key={idx} className="flex items-start gap-1"><span className="text-slate-500">•</span> {i}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 font-bold">Convenios</h4>
                                <ul className="text-[11px] space-y-1 text-slate-300">
                                    {selectedCountry.convenios.slice(0, 4).map((c, idx) => (
                                        <li key={idx} className="flex items-start gap-1"><span className="text-blue-400">→</span> {c}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-slate-800/60">
                            <h4 className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5 font-bold">Publicaciones</h4>
                            <ul className="text-[11px] space-y-1 text-slate-300">
                                {selectedCountry.publicaciones.map((p, idx) => (
                                    <li key={idx} className="flex items-start gap-1"><span className="text-yellow-400">◆</span> {p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
