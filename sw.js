const CACHE_NAME = "malazem-cache-v1";
const urlsToCache = [
  "/",             // الصفحة الرئيسية
  "/index.html"    // ملف موقعك (غيرها إذا اسمه مختلف)
  const CACHE_NAME = "malazem-cache-v1";
const BASE = "/-/"; // غيّر repo-name باسم مستودعك على GitHub

const urlsToCache = [
  BASE + "index.html",
  BASE + "sw.js", // اختياري لتخزين ملف SW نفسه
  BASE + "files/Boolean_AlgebreLecture_2.pdf",
  BASE + "files/HTML.pdf",
  BASE + "files/LEC1_DEF_COM_ARC.pdf",
  BASE + "files/LEC2_IAS_COMPUTER_component.pdf",
  BASE + "files/leture2.pdf",
  BASE + "files/letur3.pdf",
  BASE + "files/LEC3_COMPUTER_FUNCT.pdff",
  BASE + "files/LEC4_COM_MEM_SYS.pdf",
  BASE + "files/LEC5_INTERNAL_memory.pdf",
  BASE + "files/LEC6_AL_UNIT_CU.pdf",
  BASE + "files/LEC7_IO_Device.pdf",
  BASE + "files/Lecture1_Physics_Course.pdf",
  BASE + "files/Logic_Design_Introduction.pdf",
  BASE + "files/Statistics_and_Probability_053030.pdf",
  BASE + "files/lecture1_103636.pdf",
  BASE + "files/lecture_one_week_one.pdf",
  // أضف كل ملفات الملازم هنا بنفس الطريقة
];

];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(cacheNames.map((name) => {
        if (name !== CACHE_NAME) return caches.delete(name);
      }))
    )
  );
});
