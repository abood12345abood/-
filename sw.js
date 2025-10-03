const CACHE_NAME = "malazem-cache-v1";

// ضع هنا كل الملفات التي تريد أن تعمل أوفلاين
const urlsToCache = [
  "index.html",
  "sw.js",
  "lecture_one_week_one.pdf",
  "leture2.pdf",
  "leture3.pdf",
  "Statistics_and_Probability_053030.pdf",
  "LEC1_DEF_COM_ARC.pdf",
  "LEC2_IAS_COMPUTER_component.pdf",
  "LEC3_COMPUTER_FUNCT.pdf",
  "HTML.pdf",
  "Logic_Design_Introduction.pdf",
  "Boolean_AlgebreLecture_2.pdf",
  "lecture1_103636.pdf",
  "Lecture1_Physics_Course.pdf",
  "LEC4_COM_MEM_SYS.pdf",
  "LEC5_INTERNAL_memory.pdf",
  "LEC6_AL_UNIT_CU.pdf",
  "LEC7_IO_Device.pdf"
];

// تثبيت Service Worker وتخزين الملفات
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// التعامل مع الطلبات أثناء Offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// حذف الكاش القديم عند التحديث
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});
