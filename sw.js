const CACHE_NAME = "malazem-v1";
const FILES_TO_CACHE = [
  "/", 
  "/index.html",
  "/lecture_one_week_one.pdf",
  "/leture2.pdf",
  "/letur3.pdf",
  "/Statistics_and_Probability_053030.pdf",
  "/LEC1_DEF_COM_ARC.pdf",
  "/LEC2_IAS_COMPUTER_component.pdf",
  "/LEC3_COMPUTER_FUNCT.pdf",
  "/LEC4_COM_MEM_SYS.pdf",
  "/LEC5_INTERNAL_memory.pdf",
  "/LEC6_AL_UNIT_CU.pdf",
  "/LEC7_IO_Device.pdf",
  "/HTML.pdf",
  "/Logic_Design_Introduction.pdf",
  "/Boolean_AlgebreLecture_2.pdf",
  "/lecture1_103636.pdf",
  "/Lecture1_Physics_Course.pdf"
];

// تثبيت الكاش أول مرة
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("📥 Caching files...");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// تفعيل (تنظيف الكاش القديم)
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

// جلب الملفات من الكاش أولاً
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedFile => {
      return cachedFile || fetch(event.request);
    })
  );
});
