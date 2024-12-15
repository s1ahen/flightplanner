const map = document.getElementById('map');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Fixed dimensions for the map
const mapWidth = 3300; // Original width of the map image
const mapHeight = 2550; // Original height of the map image
const displayMapWidth = 800; // Displayed width of the map
const displayMapHeight = 600; // Displayed height of the map

// Predefined airports and waypoints with coordinates
const points = {
    airports: {
        isau: { x: 334, y: 1953 }, // Example coordinates
        tvo: { x: 430, y: 1211 },
        igrv: { x: 401, y: 1148 },
        itko: { x: 1419, y: 392 },
        idcs: { x: 1490, y: 49 },
        ipph: { x: 2107, y: 687 },
        shv: { x: 2301, y: 680 },
        ilkl: { x: 2264, y: 797 },
        iscm: { x: 2649, y: 1099 },
        ijaf: { x: 2944, y: 1242 },
        izol: { x: 2895, y: 1333 },
        iskp: { x: 2349, y: 1579 },
        ihen: { x: 2115, y: 2329 },
        iiab: { x: 2286, y: 2298 },
        ibar: { x: 2408, y: 2228 },
        ipap: { x: 2524, y: 2126 },
        ilar: { x: 2236, y: 2090 },
        ibth: { x: 1790, y: 1115 },
        irfd: { x: 1550, y: 1759 },
        itrn: { x: 1569, y: 2028 },
        igar: { x: 1178, y: 1850 },
        iblt: { x: 1311, y: 1692 },
        imlr: { x: 1083, y: 1621 },
  
  
  
    },
    waypoints: {
      bully: { x: 698, y: 450 },
      froot: { x: 521, y: 649 },
      eurad: { x: 878, y: 705 },
      bobos: { x: 338, y: 812 },
      blank: { x: 950, y: 860 },
      thenr: { x: 518, y: 901 },
      acres: { x: 209, y: 953 },
      youth: { x: 726, y: 1004 },
      ezydb: { x: 961, y: 1120 },
      hawkin: { x: 514, y: 1076 },
      uwais: { x: 65, y: 1083 },
      frank: { x: 82, y: 1288 },
      golden: { x: 278, y: 1174 },
      celar: { x: 585, y: 1373 },
      thacc: { x: 78, y: 1510 },
      shrek: { x: 332, y: 1534 },
      space: { x: 595, y: 1581 },
      hacke: { x: 114, y: 1775 },
      georg: { x: 351, y: 1845 },
      seeks: { x: 598, y: 1920 },
      kroten: { x: 191, y: 1886 },
      hecks: { x: 56, y: 2036 },
      packt: { x: 256, y: 2088 },
      waste: { x: 239, y: 2310 },
      stack: { x: 520, y: 2180 },
      hoggs: { x: 803, y: 2285 },
      robux: { x: 682, y: 2503 },
      alder: { x: 842, y: 2121 },
      barnie: { x: 560, y: 2040 },
      ender: { x: 1069, y: 1257 },
      sunst: { x: 920, y: 1374 },
      kened: { x: 1308, y: 1336 },
      bucfa: { x: 1083, y: 1469 },
      sawpe: { x: 854, y: 1523 },
      kunav: { x: 1310, y: 1487 },
      sethr: { x: 1726, y: 1439 },
      hawfa: { x: 1409, y: 1540 },
      ictam: { x: 1257, y: 1566 },
      beans: { x: 870, y: 1738 },
      logan: { x: 1065, y: 1779 },
      mogta: { x: 1315, y: 1853 },
      queen: { x: 1568, y: 1649 },
      lavno: { x: 1695, y: 1701 },
      atpev: { x: 1782, y: 1669 },
      jamsi: { x: 1878, y: 1827 },
      pepul: { x: 1393, y: 1997 },
      emjay: { x: 1215, y: 2190 },
      odoku: { x: 1526, y: 2189 },
      godlu: { x: 1725, y: 1958 },
      lazer: { x: 1859, y: 2011 },
      death: { x: 1094, y: 2494 },
      treln: { x: 1344, y: 2439 },
      reapr: { x: 1593, y: 2398 },
      blades: { x: 1413, y: 1632 },
      grass: { x: 2159, y: 1916 },
      rents: { x: 2374, y: 1822 },
      kindle: { x: 2491, y: 1967 },
      jacki: { x: 2614, y: 2015 },
      debug: { x: 2984, y: 2014 },
      bobux: { x: 2777, y: 2171 },
      nuber: { x: 3211, y: 2210 },
      jazzr: { x: 2980, y: 2351 },
      muone: { x: 2742, y: 2350 },
      altrs: { x: 2652, y: 2532 },
      masev: { x: 2425, y: 2537 },
      hunter: { x: 2496, y: 2281 },
      aqwrt: { x: 2080, y: 2196 },
      force: { x: 2211, y: 2532 },
      director: { x: 2001, y: 2403 },
      foria: { x: 1832, y: 2350 },
      candle: { x: 1926, y: 2273 },
      chain: { x: 3212, y: 1737 },
      justy: { x: 2739, y: 1660 },
      billo: { x: 2984, y: 1532 },
      absrs: { x: 3213, y: 1415 },
      doggo: { x: 2671, y: 1430 },
      cyril: { x: 2407, y: 1249 },
      tresin: { x: 2648, y: 1256 },
      dizzier: { x: 3028, y: 1358 },
      morrd: { x: 3083, y: 1183 },
      llime: { x: 3169, y: 1016 },
      rosmo: { x: 2777, y: 984 },
      dunks: { x: 2455, y: 1078 },
      hotdog: { x: 2661, y: 1116 },
      camel: { x: 2255, y: 1069 },
      cawze: { x: 2189, y: 1439 },
      delivery: { x: 2448, y: 1537 },
      clearance: { x: 2228, y: 1631 },
      anyms: { x: 2061, y: 1721 },
      silva: { x: 2128, y: 1278 },
      oceen: { x: 1962, y: 1378 },
      gavin: { x: 1813, y: 1274 },
      index: { x: 1462, y: 1221 },
      resurge: { x: 1636, y: 1130 },
      vonarx: { x: 1967, y: 1120 },
      romens: { x: 1895, y: 952 },
      diner: { x: 1748, y: 974 },
      welsh: { x: 1308, y: 1118 },
      probe: { x: 1424, y: 960 },
      joopy: { x: 1579, y: 829 },
      rendr: { x: 1308, y: 857 },
      gerld: { x: 1193, y: 831 },
      zesta: { x: 2962, y: 620 },
      squid: { x: 2679, y: 547 },
      wagon: { x: 2888, y: 443 },
      wotan: { x: 2618, y: 357 },
      kella: { x: 2621, y: 740 },
      sista: { x: 2566, y: 902 },
      talis: { x: 2383, y: 929 },
      noonu: { x: 2480, y: 733 },
      brainstorm: { x: 2339, y: 714 },
      wells: { x: 2354, y: 543 },
      croisnoób: { x: 2086, y: 516 },
      croisnoob: { x: 2086, y: 516 },
      crazy: { x: 2175, y: 309 },
      tindr: { x: 1950, y: 646 },
      strax: { x: 1999, y: 779 },
      orange: { x: 2184, y: 834 },
      allry: { x: 1832, y: 758 },
      knife: { x: 1692, y: 584 },
      honda: { x: 1836, y: 309 },
      chily: { x: 1755, y: 165 },
      letse: { x: 1522, y: 309 },
      onder: { x: 1491, y: 628 },
      piper: { x: 1275, y: 575 },
      tudep: { x: 1197, y: 756 },
      guleg: { x: 1032, y: 555 },
      astro: { x: 1215, y: 427 },
      shiba: { x: 1138, y: 242 },
      nikon: { x: 1315, y: 121 },
      shell: { x: 911, y: 171 },
  },
};

// Adjust canvas size to match the fixed map dimensions
function initializeCanvas() {
  canvas.width = displayMapWidth;
  canvas.height = displayMapHeight;
  canvas.style.left = map.offsetLeft + 'px';
  canvas.style.top = map.offsetTop + 'px';
}

// Convert original coordinates to displayed coordinates
function scaleCoordinates(originalX, originalY) {
  const scaleX = displayMapWidth / mapWidth; // Scale X based on fixed map width
  const scaleY = displayMapHeight / mapHeight; // Scale Y based on fixed map height
  return {
    x: originalX * scaleX,
    y: originalY * scaleY,
  };
}

// Create a point (airport or waypoint) on the map
function createPoint(x, y, color) {
  const { x: scaledX, y: scaledY } = scaleCoordinates(x, y);
  ctx.beginPath();
  ctx.arc(scaledX, scaledY, 5, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  
}

// Draw a line between two points
function drawLine(x1, y1, x2, y2, color = 'yellow') {
  const { x: scaledX1, y: scaledY1 } = scaleCoordinates(x1, y1);
  const { x: scaledX2, y: scaledY2 } = scaleCoordinates(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(scaledX1, scaledY1);
  ctx.lineTo(scaledX2, scaledY2);
  ctx.stroke();
}

// Generate the route and draw points and lines
document.getElementById('generate').addEventListener('click', () => {
  const departure = document.getElementById('departure').value.trim().toLowerCase();
  const arrival = document.getElementById('arrival').value.trim().toLowerCase();
  const waypointInput = document.getElementById('waypoints').value.trim().toLowerCase();
  const waypoints = waypointInput ? waypointInput.split(',').map((w) => w.trim()) : [];

  if (!points.airports[departure] || !points.airports[arrival]) {
    alert('Invalid departure or arrival airport.');
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let prevPoint = points.airports[departure];
  drawPoints();

  waypoints.forEach((waypoint) => {
    if (points.waypoints[waypoint]) {
      drawLine(prevPoint.x, prevPoint.y, points.waypoints[waypoint].x, points.waypoints[waypoint].y);
      prevPoint = points.waypoints[waypoint];
    }
  });

  drawLine(prevPoint.x, prevPoint.y, points.airports[arrival].x, points.airports[arrival].y);
});

// Draw all points (airports and waypoints)
function drawPoints() {
  for (const { x, y } of Object.values(points.airports)) {
    createPoint(x, y, 'red'); // Airports in red
  }
  for (const { x, y } of Object.values(points.waypoints)) {
    createPoint(x, y, 'blue'); // Waypoints in blue
  }
}

// Initialize canvas and draw points
initializeCanvas();
drawPoints();
