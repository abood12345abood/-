const CACHE_NAME = "malazem-cache-v2";

// ضع كل ملفات الملازم هنا بالضبط كما هي في المستودع
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
  // أضف أي ملفات ملازم جديدة بنفس الطريقة هنا
];

// 🌙 تثبيت Service Worker وتخزين الملفات في الكاش
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// 🌙 التعامل مع الطلبات أثناء Offline + حل مشكلة PDF على الموبايل
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // لو الملف PDF، نعيده كـ Blob لتعمل على الموبايل
        if (event.request.url.endsWith(".pdf")) {
          return response.blob().then((blob) => new Response(blob, { headers: { "Content-Type": "application/pdf" } }));
        }
        return response;
      }
      return fetch(event.request);
    })
  );
});

// 🌙 حذف الكاش القديم عند التحديث تلقائيًا
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      )
    )
  );
});
