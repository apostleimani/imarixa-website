/*!
 * IMARIXA — language and market switcher
 * Languages: English (en), Kiswahili (sw), Tagalog (tl)
 * Markets:   Tanzania (TZS) and Philippines (₱)
 * Text lives in the T object below. Elements opt in with data-i18n="key".
 */
(function () {
  'use strict';

  var WA = 'https://wa.me/639667536305';

  var PRICES = {
    tz: { cur: 'TZS', landing: '450,000', business: '950,000', pro: '1,450,000', store: '2,800,000', renew: '120,000' },
    ph: { cur: '₱', landing: '8,500', business: '18,000', pro: '32,000', store: '65,000', renew: '4,500' }
  };
  var NAMES = { landing: 'Landing', business: 'Business', pro: 'Business Pro', store: 'Online Store' };

  var T = {
 "en": {
  "nav.services": "Services",
  "nav.packages": "Packages",
  "nav.email": "Email",
  "nav.about": "About",
  "nav.payments": "Payments",
  "nav.contact": "Contact",
  "nav.m.email": "Professional Email",
  "nav.quote": "Get a Quote",
  "ui.language": "Language",
  "hero.title": "Building intelligent technology for a <span class=\"accent\">changing world</span>.",
  "hero.sub": "IMARIXA designs and develops modern websites, online stores, business software and AI-powered solutions that help businesses in Tanzania, the Philippines and beyond establish, grow, automate, and operate effectively online.",
  "hero.cta1": "Get Started",
  "hero.cta2": "Explore Our Services",
  "hero.t1": "Tanzania, Philippines &amp; international clients",
  "hero.t2": "Hosting &amp; domain included",
  "hero.t3": "Mobile-first &amp; SEO ready",
  "svc.kicker": "What we do",
  "svc.h2": "Technology services built around real business needs",
  "svc.p": "From your first website to a full business system — every service is designed to help you reach more customers and run more efficiently.",
  "svc.1.t": "Website Design &amp; Development",
  "svc.1.d": "Modern, responsive websites designed for businesses and organizations — built to load fast and work beautifully on every device.",
  "svc.2.t": "E-Commerce / Online Stores",
  "svc.2.d": "Professional online stores with products, shopping cart, order management, admin panel and payment integration.",
  "svc.3.t": "SEO &amp; Digital Growth",
  "svc.3.d": "Search-engine optimization and Google Business setup so more of the right customers can find you online.",
  "svc.4.t": "Professional Business Email",
  "svc.4.d": "Custom domain-based email addresses (jina@kampuni.co.tz) so your business communicates with credibility.",
  "svc.5.t": "AI &amp; Automation",
  "svc.5.d": "Intelligent workflows, AI-powered assistants and business automation that reduce repetitive manual work.",
  "svc.6.t": "Hosting &amp; Maintenance",
  "svc.6.d": "Reliable hosting, security updates, backups and ongoing technical maintenance for your website or app.",
  "svc.7.t": "Mobile App Development",
  "svc.7.d": "Full Android mobile apps from idea to Play Store, with API payment integration and an admin panel.",
  "svc.8.t": "Business Systems",
  "svc.8.d": "Microfinance, VICOBA, hospital, pharmacy, school, shop and M-PESA wakala management software, built to your workflow.",
  "pk.kicker": "Website packages",
  "pk.h2": "Choose the right package for your business",
  "pk.p": {
   "tz": "Every package includes hosting and domain for the first year. Prices are shown in Tanzanian Shillings (TZS).",
   "ph": "Every package includes hosting and domain for the first year. Prices are shown in Philippine Pesos (₱)."
  },
  "mk.tz": "🇹🇿 Tanzania · TZS",
  "mk.ph": "🇵🇭 Philippines · ₱",
  "mk.label": "Pricing region",
  "pk.badge": "Most chosen",
  "pk.from": "Starting from",
  "pk.from.opt": "from",
  "pk.f.landing1": "1 modern single page",
  "pk.f.landing2": "WhatsApp &amp; phone integration",
  "pk.f.seo": "Basic SEO",
  "pk.f.host": "Hosting &amp; domain (year 1)",
  "pk.f.biz1": "5–7 pages",
  "pk.f.biz2": "Contact form &amp; Google Maps",
  "pk.f.pro1": "Up to 10 pages + blog",
  "pk.f.pro2": "Business email (2 accounts)",
  "pk.f.pro3": "SEO &amp; Google Business setup",
  "pk.f.store1": "Products, cart &amp; orders",
  "pk.f.store2": {
   "tz": "Mobile &amp; card payments",
   "ph": "Card &amp; GCash payments"
  },
  "pk.f.store3": "Admin panel",
  "pk.choose": "Choose Package",
  "per.year": "/ year",
  "pk.renewline": "Hosting &amp; maintenance from year 2: <strong style=\"color:var(--gold)\">{renew}</strong>",
  "pk.renewbtn": "Ask about renewal",
  "pk.offer": "Launch offer: 15% discount for the first 10 customers.",
  "em.kicker": "Professional business email",
  "em.h2": "Build trust with a professional business email",
  "em.p": "Move on from Gmail and Yahoo. Use jina@kampuni.co.tz — an email address that carries your business name into every message you send.",
  "em.b1.t": "Official branding",
  "em.b1.d": "An email address carrying your company's own name.",
  "em.b2.t": "Strong security",
  "em.b2.d": "Spam and virus protection built in.",
  "em.b3.t": "Accessible anywhere",
  "em.b3.d": "Webmail and mobile access wherever you are.",
  "em.b4.t": "Fast support",
  "em.b4.d": "WhatsApp support when you need help.",
  "em.btn": "Get Professional Email",
  "ab.kicker": "About IMARIXA",
  "ab.p": "IMARIXA is a technology and innovation company focused on building intelligent digital solutions that transform ideas, solve real-world problems, and create meaningful impact.",
  "ab.vision.t": "Our Vision",
  "ab.vision.d": "To become a globally recognized technology company creating intelligent solutions that shape a better future.",
  "ab.mission.t": "Our Mission",
  "ab.mission.d": "To transform ideas into intelligent products and technologies that solve meaningful problems, empower people, and create measurable impact.",
  "ab.values": "Our Values",
  "val.1.t": "Innovation",
  "val.1.d": "Continuously seeking better ways to solve problems.",
  "val.2.t": "Integrity",
  "val.2.d": "Building with honesty, responsibility and transparency.",
  "val.3.t": "Excellence",
  "val.3.d": "Pursuing quality rather than simply speed.",
  "val.4.t": "Courage",
  "val.4.d": "Willing to explore difficult, unfamiliar problems.",
  "val.5.t": "Learning",
  "val.5.d": "Remaining students of technology and the world.",
  "val.6.t": "Impact",
  "val.6.d": "Measuring success by the value our work creates.",
  "why.kicker": "Why choose IMARIXA",
  "why.h2": "Practical technology, built for how you actually work",
  "why.1.t": "Mobile-first design",
  "why.1.d": "Every build is designed and tested for phones first, since that's how most customers browse.",
  "why.2.t": "SEO-ready from day one",
  "why.2.d": "Websites are structured so search engines can find and rank your business.",
  "why.3.t": "Security-conscious builds",
  "why.3.d": "We follow secure development practices and never expose sensitive credentials.",
  "why.4.t": "Scalable solutions",
  "why.4.d": "From a single landing page to a full business system, IMARIXA can grow with you.",
  "why.5.t": "Tanzania, Philippines &amp; international",
  "why.5.d": "We serve businesses in Tanzania, the Philippines and abroad, with payment options for each.",
  "why.6.t": "Responsive support",
  "why.6.d": "Reach us directly on WhatsApp for quick answers before and after your project.",
  "pay.kicker": "Payment options",
  "pay.h2": "Pay the way that works for you",
  "pay.p": "IMARIXA accepts mobile money, GCash, international card payments and bank transfer.",
  "pay.mpesa": "Send payment directly via M-PESA.",
  "pay.airtel": "Send payment directly via Airtel Money.",
  "pay.mixx": "Send payment directly via Mixx by Yas.",
  "pay.card": "Card payment through a secure payment gateway. <span class=\"badge\">Gateway configuration required</span>",
  "pay.gcash": "For clients paying from the Philippines and wider Asia.",
  "pay.wa.t": "WhatsApp Confirmation",
  "pay.wa.d": "Send your payment confirmation here to activate your order.",
  "pay.bank": "Bank Transfer",
  "pay.bank.bank": "Bank",
  "pay.bank.acc": "Account Number",
  "pay.bank.name": "Account Name",
  "pay.note1": "Card and mobile-money checkout is being connected to a secure payment gateway. Until configured, use the numbers above or contact us on WhatsApp to complete payment.",
  "pay.note2": "The payment numbers above are for sending money only. For any question, message us on WhatsApp — it works from anywhere in the world.",
  "q.kicker": "Request a quote",
  "q.h2": "Tell us about your project",
  "q.s1.t": "Fast response",
  "q.s1.d": "We reply to quote requests as quickly as we can, usually the same day.",
  "q.s2.t": "Prefer WhatsApp?",
  "q.s2.d": "Message us directly and skip the form entirely.",
  "q.wa": "Chat on WhatsApp",
  "f.name": "Full name",
  "f.company": "Company / business name",
  "f.phone": "WhatsApp number (with country code)",
  "f.email": "Email",
  "f.service": "Service required",
  "f.package": "Preferred package",
  "f.budget": "Budget (optional)",
  "f.method": "Preferred contact method",
  "f.desc": "Project description",
  "f.desc.ph": "Tell us a little about your business and what you need.",
  "f.budget.ph": {
   "tz": "e.g. TZS 1,000,000",
   "ph": "e.g. ₱20,000"
  },
  "o.s1": "Website Design &amp; Development",
  "o.s2": "E-Commerce / Online Store",
  "o.s3": "SEO &amp; Digital Marketing",
  "o.s4": "Professional Business Email",
  "o.s5": "AI / Automation Solutions",
  "o.s6": "Mobile App Development",
  "o.s7": "Business System",
  "o.s8": "Other",
  "o.pk.none": "Not sure yet",
  "o.email": "Email",
  "q.submit": "Request a Quote",
  "q.status": "This form is not yet connected to an email service. See <code>.env.example</code> for configuring Formspree, Resend or another form backend — until then, please also confirm your request on WhatsApp.",
  "ct.kicker": "Contact",
  "ct.h2": "Reach IMARIXA",
  "ct.social": "Social",
  "ct.lang": "Languages",
  "ct.cov.t": "Coverage",
  "ct.cov.d": "Tanzania, Philippines &amp; international",
  "faq.kicker": "FAQ",
  "faq.h2": "Common questions",
  "faq.1.q": "How long does a website take to build?",
  "faq.1.a": "Timelines depend on the package and how quickly content is provided. We'll confirm an estimated delivery date once your project is scoped.",
  "faq.2.q": "What's included in hosting &amp; domain?",
  "faq.2.a": "Every package includes hosting and domain registration for the first year. From year two, hosting and maintenance is {renew}.",
  "faq.3.q": "Can I upgrade my package later?",
  "faq.3.a": "Yes. Many clients start with Landing or Business and upgrade to Business Pro or Online Store as their needs grow.",
  "faq.4.q": "Do you work with clients outside Tanzania?",
  "faq.4.a": "Yes — IMARIXA serves clients in the Philippines and around the world, with GCash available for payments from the Philippines and Asia.",
  "cta.h2": "Build your website today.",
  "cta.p": "Tell us about your business and we'll help you choose the right package to get online.",
  "cta.b1": "Get a Quote",
  "cta.b2": "Message Us",
  "ft.brand": "Intelligence. Innovation. Impact. Building intelligent technology for a changing world.",
  "ft.quick": "Quick Links",
  "ft.home": "Home",
  "ft.services": "Services",
  "ft.s1": "Website Development",
  "ft.s2": "E-Commerce",
  "ft.s3": "SEO",
  "ft.s4": "Professional Email",
  "ft.s5": "Automation",
  "ft.s6": "Hosting &amp; Maintenance",
  "ft.pay": "Payment Methods",
  "ft.rights": "© 2026 IMARIXA. All Rights Reserved.",
  "meta.title": "IMARIXA — Intelligence. Innovation. Impact. | Website & Software Development, Africa & Asia",
  "meta.desc": "IMARIXA builds intelligent websites, e-commerce stores, business software and AI-powered digital solutions for businesses in Tanzania, the Philippines and beyond. Websites from TZS 450,000 or ₱8,500.",
  "wa.hello": "Hello IMARIXA, I'd like to know more about your services.",
  "wa.quote": "Hello IMARIXA, I would like a quote for a project."
 },
 "sw": {
  "nav.services": "Huduma",
  "nav.packages": "Vifurushi",
  "nav.email": "Email Rasmi",
  "nav.about": "Kuhusu Sisi",
  "nav.payments": "Malipo",
  "nav.contact": "Mawasiliano",
  "nav.m.email": "Email Rasmi ya Biashara",
  "nav.quote": "Pata Bei",
  "ui.language": "Lugha",
  "hero.title": "Tunajenga teknolojia mahiri kwa <span class=\"accent\">dunia inayobadilika</span>.",
  "hero.sub": "IMARIXA hubuni na kutengeneza tovuti za kisasa, maduka ya mtandaoni, programu za biashara na suluhisho zinazotumia AI zinazosaidia biashara nchini Tanzania, Ufilipino na kwingineko kuanzisha, kukua, kujiendesha kiotomatiki na kufanya kazi kwa ufanisi mtandaoni.",
  "hero.cta1": "Anza Sasa",
  "hero.cta2": "Tazama Huduma Zetu",
  "hero.t1": "Wateja wa Tanzania, Ufilipino na kimataifa",
  "hero.t2": "Hosting na domain vimejumuishwa",
  "hero.t3": "Inafaa simu na tayari kwa SEO",
  "svc.kicker": "Tunachofanya",
  "svc.h2": "Huduma za teknolojia zilizojengwa kulingana na mahitaji halisi ya biashara",
  "svc.p": "Kuanzia tovuti yako ya kwanza hadi mfumo kamili wa biashara — kila huduma imeundwa kukusaidia kufikia wateja zaidi na kuendesha biashara kwa ufanisi zaidi.",
  "svc.1.t": "Ubunifu na Utengenezaji wa Tovuti",
  "svc.1.d": "Tovuti za kisasa zinazofaa simu, zilizoundwa kwa ajili ya biashara na taasisi — zinapakia haraka na kufanya kazi vizuri kwenye kila kifaa.",
  "svc.2.t": "Biashara Mtandaoni / Maduka ya Mtandaoni",
  "svc.2.d": "Maduka ya kitaalamu mtandaoni yenye bidhaa, kikapu cha manunuzi, usimamizi wa oda, paneli ya usimamizi na uunganishaji wa malipo.",
  "svc.3.t": "SEO na Ukuaji wa Kidijitali",
  "svc.3.d": "Uboreshaji wa injini za utafutaji na usajili wa Google Business ili wateja sahihi zaidi wakupate mtandaoni.",
  "svc.4.t": "Email Rasmi ya Biashara",
  "svc.4.d": "Anwani za email zenye jina la kikoa chako (jina@kampuni.co.tz) ili biashara yako iwasiliane kwa uaminifu.",
  "svc.5.t": "AI na Uendeshaji Kiotomatiki",
  "svc.5.d": "Mtiririko wa kazi mahiri, wasaidizi wanaotumia AI na uendeshaji kiotomatiki wa biashara unaopunguza kazi za kurudia-rudia.",
  "svc.6.t": "Hosting na Matengenezo",
  "svc.6.d": "Hosting ya uhakika, masasisho ya usalama, hifadhi rudufu (backups) na matengenezo ya kiufundi yanayoendelea kwa tovuti au programu yako.",
  "svc.7.t": "Utengenezaji wa Programu za Simu",
  "svc.7.d": "Programu kamili za Android kutoka wazo hadi Play Store, pamoja na uunganishaji wa malipo kwa API na paneli ya usimamizi.",
  "svc.8.t": "Mifumo ya Biashara",
  "svc.8.d": "Programu za usimamizi wa microfinance, VICOBA, hospitali, famasia, shule, duka na M-PESA wakala, zilizojengwa kulingana na mfumo wako wa kazi.",
  "pk.kicker": "Vifurushi vya tovuti",
  "pk.h2": "Chagua kifurushi kinachofaa biashara yako",
  "pk.p": {
   "tz": "Kila kifurushi kinajumuisha hosting na domain kwa mwaka wa kwanza. Bei zinaonyeshwa kwa Shilingi za Kitanzania (TZS).",
   "ph": "Kila kifurushi kinajumuisha hosting na domain kwa mwaka wa kwanza. Bei zinaonyeshwa kwa Peso za Ufilipino (₱)."
  },
  "mk.tz": "🇹🇿 Tanzania · TZS",
  "mk.ph": "🇵🇭 Ufilipino · ₱",
  "mk.label": "Eneo la bei",
  "pk.badge": "Inayochaguliwa zaidi",
  "pk.from": "Kuanzia",
  "pk.from.opt": "kuanzia",
  "pk.f.landing1": "Ukurasa 1 wa kisasa",
  "pk.f.landing2": "Uunganishaji wa WhatsApp na simu",
  "pk.f.seo": "SEO ya msingi",
  "pk.f.host": "Hosting na domain (mwaka wa 1)",
  "pk.f.biz1": "Kurasa 5–7",
  "pk.f.biz2": "Fomu ya mawasiliano na Google Maps",
  "pk.f.pro1": "Hadi kurasa 10 + blogu",
  "pk.f.pro2": "Email ya biashara (akaunti 2)",
  "pk.f.pro3": "SEO na usajili wa Google Business",
  "pk.f.store1": "Bidhaa, kikapu na oda",
  "pk.f.store2": {
   "tz": "Malipo ya simu na kadi",
   "ph": "Malipo ya kadi na GCash"
  },
  "pk.f.store3": "Paneli ya usimamizi",
  "pk.choose": "Chagua Kifurushi",
  "per.year": "/ mwaka",
  "pk.renewline": "Hosting na matengenezo kuanzia mwaka wa 2: <strong style=\"color:var(--gold)\">{renew}</strong>",
  "pk.renewbtn": "Uliza kuhusu upyaisho",
  "pk.offer": "Ofa ya uzinduzi: punguzo la 15% kwa wateja 10 wa kwanza.",
  "em.kicker": "Email rasmi ya biashara",
  "em.h2": "Jenga uaminifu kwa email rasmi ya biashara",
  "em.p": "Achana na Gmail na Yahoo. Tumia jina@kampuni.co.tz — anwani ya email inayobeba jina la biashara yako kwenye kila ujumbe unaotuma.",
  "em.b1.t": "Chapa rasmi",
  "em.b1.d": "Anwani ya email yenye jina la kampuni yako.",
  "em.b2.t": "Usalama imara",
  "em.b2.d": "Ulinzi dhidi ya spam na virusi umejengwa ndani.",
  "em.b3.t": "Fikia popote",
  "em.b3.d": "Webmail na ufikiaji kwa simu popote ulipo.",
  "em.b4.t": "Msaada wa haraka",
  "em.b4.d": "Msaada kupitia WhatsApp unapohitaji.",
  "em.btn": "Pata Email Rasmi",
  "ab.kicker": "Kuhusu IMARIXA",
  "ab.p": "IMARIXA ni kampuni ya teknolojia na ubunifu inayojikita katika kujenga suluhisho mahiri za kidijitali zinazobadilisha mawazo, kutatua matatizo halisi na kuleta matokeo yenye maana.",
  "ab.vision.t": "Dira Yetu",
  "ab.vision.d": "Kuwa kampuni ya teknolojia inayotambulika kimataifa inayounda suluhisho mahiri zinazojenga mustakabali bora.",
  "ab.mission.t": "Dhamira Yetu",
  "ab.mission.d": "Kubadilisha mawazo kuwa bidhaa na teknolojia mahiri zinazotatua matatizo yenye maana, kuwawezesha watu na kuleta matokeo yanayopimika.",
  "ab.values": "Maadili Yetu",
  "val.1.t": "Ubunifu",
  "val.1.d": "Kutafuta kila mara njia bora za kutatua matatizo.",
  "val.2.t": "Uadilifu",
  "val.2.d": "Kujenga kwa uaminifu, uwajibikaji na uwazi.",
  "val.3.t": "Ubora",
  "val.3.d": "Kufuata ubora badala ya kasi peke yake.",
  "val.4.t": "Ujasiri",
  "val.4.d": "Kuwa tayari kuchunguza matatizo magumu yasiyojulikana.",
  "val.5.t": "Kujifunza",
  "val.5.d": "Kubaki wanafunzi wa teknolojia na dunia.",
  "val.6.t": "Matokeo",
  "val.6.d": "Kupima mafanikio kwa thamani inayotokana na kazi yetu.",
  "why.kicker": "Kwa nini uchague IMARIXA",
  "why.h2": "Teknolojia ya vitendo, iliyojengwa kulingana na jinsi unavyofanya kazi",
  "why.1.t": "Ubunifu unaoanza na simu",
  "why.1.d": "Kila mradi unaundwa na kujaribiwa kwenye simu kwanza, kwa kuwa ndivyo wateja wengi wanavyovinjari.",
  "why.2.t": "Tayari kwa SEO tangu siku ya kwanza",
  "why.2.d": "Tovuti hupangwa ili injini za utafutaji ziweze kupata na kupanga biashara yako.",
  "why.3.t": "Ujenzi unaozingatia usalama",
  "why.3.d": "Tunafuata mbinu salama za uendelezaji na hatufichui kamwe taarifa nyeti za siri.",
  "why.4.t": "Suluhisho zinazokua",
  "why.4.d": "Kuanzia ukurasa mmoja hadi mfumo kamili wa biashara, IMARIXA inaweza kukua nawe.",
  "why.5.t": "Tanzania, Ufilipino na kimataifa",
  "why.5.d": "Tunahudumia biashara nchini Tanzania, Ufilipino na nje ya nchi, kwa njia za malipo kwa kila eneo.",
  "why.6.t": "Msaada wa haraka",
  "why.6.d": "Wasiliana nasi moja kwa moja kwenye WhatsApp kwa majibu ya haraka kabla na baada ya mradi wako.",
  "pay.kicker": "Njia za malipo",
  "pay.h2": "Lipa kwa njia inayokufaa",
  "pay.p": "IMARIXA inapokea pesa za simu, GCash, malipo ya kadi za kimataifa na uhamisho wa benki.",
  "pay.mpesa": "Tuma malipo moja kwa moja kupitia M-PESA.",
  "pay.airtel": "Tuma malipo moja kwa moja kupitia Airtel Money.",
  "pay.mixx": "Tuma malipo moja kwa moja kupitia Mixx by Yas.",
  "pay.card": "Malipo ya kadi kupitia mfumo salama wa malipo. <span class=\"badge\">Mfumo wa malipo bado unasanidiwa</span>",
  "pay.gcash": "Kwa wateja wanaolipa kutoka Ufilipino na Asia kwa ujumla.",
  "pay.wa.t": "Uthibitisho kwa WhatsApp",
  "pay.wa.d": "Tuma uthibitisho wa malipo yako hapa ili kuwezesha oda yako.",
  "pay.bank": "Uhamisho wa Benki",
  "pay.bank.bank": "Benki",
  "pay.bank.acc": "Namba ya Akaunti",
  "pay.bank.name": "Jina la Akaunti",
  "pay.note1": "Malipo kwa kadi na pesa za simu yanaunganishwa na mfumo salama wa malipo. Hadi yatakapokamilika, tumia namba zilizo hapo juu au wasiliana nasi kupitia WhatsApp kukamilisha malipo.",
  "pay.note2": "Namba za malipo zilizo hapo juu ni za kutuma pesa tu. Kwa swali lolote, tutumie ujumbe kupitia WhatsApp — inafanya kazi popote duniani.",
  "q.kicker": "Omba bei",
  "q.h2": "Tuambie kuhusu mradi wako",
  "q.s1.t": "Majibu ya haraka",
  "q.s1.d": "Tunajibu maombi ya bei haraka iwezekanavyo, mara nyingi siku hiyo hiyo.",
  "q.s2.t": "Unapendelea WhatsApp?",
  "q.s2.d": "Tutumie ujumbe moja kwa moja na uruke fomu kabisa.",
  "q.wa": "Ongea nasi kwenye WhatsApp",
  "f.name": "Jina kamili",
  "f.company": "Jina la kampuni / biashara",
  "f.phone": "Namba ya WhatsApp (pamoja na msimbo wa nchi)",
  "f.email": "Barua pepe",
  "f.service": "Huduma unayohitaji",
  "f.package": "Kifurushi unachopendelea",
  "f.budget": "Bajeti (si lazima)",
  "f.method": "Njia unayopendelea ya mawasiliano",
  "f.desc": "Maelezo ya mradi",
  "f.desc.ph": "Tueleze kidogo kuhusu biashara yako na unachohitaji.",
  "f.budget.ph": {
   "tz": "mf. TZS 1,000,000",
   "ph": "mf. ₱20,000"
  },
  "o.s1": "Ubunifu na Utengenezaji wa Tovuti",
  "o.s2": "Biashara Mtandaoni / Duka la Mtandaoni",
  "o.s3": "SEO na Masoko ya Kidijitali",
  "o.s4": "Email Rasmi ya Biashara",
  "o.s5": "Suluhisho za AI / Uendeshaji Kiotomatiki",
  "o.s6": "Utengenezaji wa Programu za Simu",
  "o.s7": "Mfumo wa Biashara",
  "o.s8": "Nyingine",
  "o.pk.none": "Sina uhakika bado",
  "o.email": "Barua pepe",
  "q.submit": "Omba Bei",
  "q.status": "Fomu hii bado haijaunganishwa na huduma ya email. Tazama <code>.env.example</code> kusanidi Formspree, Resend au huduma nyingine — hadi wakati huo, tafadhali thibitisha ombi lako pia kupitia WhatsApp.",
  "ct.kicker": "Mawasiliano",
  "ct.h2": "Wasiliana na IMARIXA",
  "ct.social": "Mitandao ya kijamii",
  "ct.lang": "Lugha",
  "ct.cov.t": "Maeneo tunayohudumia",
  "ct.cov.d": "Tanzania, Ufilipino na kimataifa",
  "faq.kicker": "Maswali",
  "faq.h2": "Maswali yanayoulizwa mara nyingi",
  "faq.1.q": "Tovuti inachukua muda gani kutengenezwa?",
  "faq.1.a": "Muda hutegemea kifurushi na jinsi maudhui yanavyotolewa haraka. Tutakuthibitishia tarehe ya makadirio ya kukabidhi mara mradi wako utakapopangwa.",
  "faq.2.q": "Hosting na domain inajumuisha nini?",
  "faq.2.a": "Kila kifurushi kinajumuisha hosting na usajili wa domain kwa mwaka wa kwanza. Kuanzia mwaka wa pili, hosting na matengenezo ni {renew}.",
  "faq.3.q": "Naweza kuboresha kifurushi changu baadaye?",
  "faq.3.a": "Ndiyo. Wateja wengi huanza na Landing au Business na kuboresha hadi Business Pro au Online Store mahitaji yao yanapokua.",
  "faq.4.q": "Mnafanya kazi na wateja walio nje ya Tanzania?",
  "faq.4.a": "Ndiyo — IMARIXA inahudumia wateja wa Ufilipino na duniani kote, na GCash inapatikana kwa malipo kutoka Ufilipino na Asia.",
  "cta.h2": "Jenga website yako leo.",
  "cta.p": "Tuambie kuhusu biashara yako nasi tutakusaidia kuchagua kifurushi sahihi cha kuingia mtandaoni.",
  "cta.b1": "Pata Bei",
  "cta.b2": "Wasiliana Nasi",
  "ft.brand": "Intelligence. Innovation. Impact. Tunajenga teknolojia mahiri kwa dunia inayobadilika.",
  "ft.quick": "Viungo vya Haraka",
  "ft.home": "Nyumbani",
  "ft.services": "Huduma",
  "ft.s1": "Utengenezaji wa Tovuti",
  "ft.s2": "Biashara Mtandaoni",
  "ft.s3": "SEO",
  "ft.s4": "Email Rasmi",
  "ft.s5": "Uendeshaji Kiotomatiki",
  "ft.s6": "Hosting na Matengenezo",
  "ft.pay": "Njia za Malipo",
  "ft.rights": "© 2026 IMARIXA. Haki zote zimehifadhiwa.",
  "meta.title": "IMARIXA — Intelligence. Innovation. Impact. | Utengenezaji wa Tovuti na Programu, Afrika na Asia",
  "meta.desc": "IMARIXA hutengeneza tovuti mahiri, maduka ya mtandaoni, programu za biashara na suluhisho za kidijitali zinazotumia AI kwa biashara nchini Tanzania, Ufilipino na kwingineko. Tovuti kuanzia TZS 450,000 au ₱8,500.",
  "wa.hello": "Habari IMARIXA, ningependa kujua zaidi kuhusu huduma zenu.",
  "wa.quote": "Habari IMARIXA, ningependa kupata bei ya mradi."
 },
 "tl": {
  "nav.services": "Mga Serbisyo",
  "nav.packages": "Mga Package",
  "nav.email": "Email",
  "nav.about": "Tungkol sa Amin",
  "nav.payments": "Bayad",
  "nav.contact": "Makipag-ugnayan",
  "nav.m.email": "Propesyonal na Email",
  "nav.quote": "Humingi ng Quote",
  "ui.language": "Wika",
  "hero.title": "Bumubuo ng matalinong teknolohiya para sa <span class=\"accent\">nagbabagong mundo</span>.",
  "hero.sub": "Dinidisenyo at binubuo ng IMARIXA ang mga modernong website, online store, business software at AI-powered na solusyon na tumutulong sa mga negosyo sa Tanzania, Pilipinas at iba pang bansa na magsimula, lumago, mag-automate, at mahusay na mag-operate online.",
  "hero.cta1": "Magsimula Na",
  "hero.cta2": "Tingnan ang Aming Serbisyo",
  "hero.t1": "Mga kliyente sa Tanzania, Pilipinas at buong mundo",
  "hero.t2": "Kasama ang hosting at domain",
  "hero.t3": "Mobile-first at SEO-ready",
  "svc.kicker": "Ang Ginagawa Namin",
  "svc.h2": "Mga serbisyong teknolohiya na nakabatay sa tunay na pangangailangan ng negosyo",
  "svc.p": "Mula sa iyong unang website hanggang sa buong business system — bawat serbisyo ay idinisenyo para maabot mo ang mas maraming customer at mas maayos na mapatakbo ang negosyo.",
  "svc.1.t": "Disenyo at Pagbuo ng Website",
  "svc.1.d": "Mga modernong responsive na website para sa mga negosyo at organisasyon — mabilis mag-load at maganda sa bawat device.",
  "svc.2.t": "E-Commerce / Online Store",
  "svc.2.d": "Propesyonal na online store na may products, shopping cart, order management, admin panel at payment integration.",
  "svc.3.t": "SEO at Digital Growth",
  "svc.3.d": "Search-engine optimization at Google Business setup para mas maraming tamang customer ang makakita sa iyo online.",
  "svc.4.t": "Propesyonal na Business Email",
  "svc.4.d": "Email address na gamit ang sarili mong domain (juan@kumpanya.ph) para mas pinagkakatiwalaan ang iyong negosyo.",
  "svc.5.t": "AI at Automation",
  "svc.5.d": "Matatalinong workflow, AI-powered assistant at business automation na nagbabawas ng paulit-ulit na manu-manong trabaho.",
  "svc.6.t": "Hosting at Maintenance",
  "svc.6.d": "Maaasahang hosting, security updates, backups at tuloy-tuloy na technical maintenance para sa iyong website o app.",
  "svc.7.t": "Mobile App Development",
  "svc.7.d": "Buong Android mobile app mula ideya hanggang Play Store, may API payment integration at admin panel.",
  "svc.8.t": "Business Systems",
  "svc.8.d": "Management software para sa microfinance, VICOBA, ospital, botika, paaralan, tindahan at mobile-money agent, na ginawa ayon sa iyong workflow.",
  "pk.kicker": "Mga Website Package",
  "pk.h2": "Piliin ang tamang package para sa iyong negosyo",
  "pk.p": {
   "tz": "Kasama sa bawat package ang hosting at domain para sa unang taon. Ang mga presyo ay nasa Tanzanian Shillings (TZS).",
   "ph": "Kasama sa bawat package ang hosting at domain para sa unang taon. Ang mga presyo ay nasa Philippine Pesos (₱)."
  },
  "mk.tz": "🇹🇿 Tanzania · TZS",
  "mk.ph": "🇵🇭 Pilipinas · ₱",
  "mk.label": "Rehiyon ng presyo",
  "pk.badge": "Pinakapinipili",
  "pk.from": "Simula sa",
  "pk.from.opt": "simula sa",
  "pk.f.landing1": "1 modernong single page",
  "pk.f.landing2": "WhatsApp at phone integration",
  "pk.f.seo": "Basic SEO",
  "pk.f.host": "Hosting at domain (unang taon)",
  "pk.f.biz1": "5–7 pahina",
  "pk.f.biz2": "Contact form at Google Maps",
  "pk.f.pro1": "Hanggang 10 pahina + blog",
  "pk.f.pro2": "Business email (2 account)",
  "pk.f.pro3": "SEO at Google Business setup",
  "pk.f.store1": "Mga produkto, cart at order",
  "pk.f.store2": {
   "tz": "Mobile at card payments",
   "ph": "Card at GCash payments"
  },
  "pk.f.store3": "Admin panel",
  "pk.choose": "Piliin ang Package",
  "per.year": "/ taon",
  "pk.renewline": "Hosting at maintenance mula ikalawang taon: <strong style=\"color:var(--gold)\">{renew}</strong>",
  "pk.renewbtn": "Magtanong tungkol sa renewal",
  "pk.offer": "Launch offer: 15% diskwento para sa unang 10 customer.",
  "em.kicker": "Propesyonal na business email",
  "em.h2": "Magkaroon ng tiwala gamit ang propesyonal na business email",
  "em.p": "Iwanan na ang Gmail at Yahoo. Gamitin ang juan@kumpanya.ph — email address na dala ang pangalan ng iyong negosyo sa bawat mensaheng ipinapadala mo.",
  "em.b1.t": "Opisyal na branding",
  "em.b1.d": "Email address na dala ang pangalan ng iyong kumpanya.",
  "em.b2.t": "Matibay na seguridad",
  "em.b2.d": "May built-in na proteksyon laban sa spam at virus.",
  "em.b3.t": "Magagamit kahit saan",
  "em.b3.d": "Webmail at mobile access saan ka man naroroon.",
  "em.b4.t": "Mabilis na suporta",
  "em.b4.d": "WhatsApp support kapag kailangan mo ng tulong.",
  "em.btn": "Kumuha ng Propesyonal na Email",
  "ab.kicker": "Tungkol sa IMARIXA",
  "ab.p": "Ang IMARIXA ay kumpanya ng teknolohiya at inobasyon na nakatuon sa pagbuo ng matatalinong digital na solusyon na nagpapatupad ng mga ideya, lumulutas ng tunay na problema, at lumilikha ng makabuluhang epekto.",
  "ab.vision.t": "Aming Bisyon",
  "ab.vision.d": "Maging isang kilalang kumpanya ng teknolohiya sa buong mundo na lumilikha ng matatalinong solusyon para sa mas magandang kinabukasan.",
  "ab.mission.t": "Aming Misyon",
  "ab.mission.d": "Gawing matatalinong produkto at teknolohiya ang mga ideya na lumulutas ng makabuluhang problema, nagbibigay-kapangyarihan sa tao, at lumilikha ng masusukat na epekto.",
  "ab.values": "Aming mga Pagpapahalaga",
  "val.1.t": "Inobasyon",
  "val.1.d": "Patuloy na naghahanap ng mas mahusay na paraan para lutasin ang mga problema.",
  "val.2.t": "Integridad",
  "val.2.d": "Bumubuo nang may katapatan, pananagutan at transparency.",
  "val.3.t": "Kahusayan",
  "val.3.d": "Inuuna ang kalidad kaysa sa bilis lamang.",
  "val.4.t": "Katapangan",
  "val.4.d": "Handang harapin ang mahihirap at hindi pamilyar na problema.",
  "val.5.t": "Pagkatuto",
  "val.5.d": "Nananatiling estudyante ng teknolohiya at ng mundo.",
  "val.6.t": "Epekto",
  "val.6.d": "Sinusukat ang tagumpay sa halagang nalilikha ng aming gawa.",
  "why.kicker": "Bakit piliin ang IMARIXA",
  "why.h2": "Praktikal na teknolohiya, ginawa ayon sa tunay mong paraan ng pagtatrabaho",
  "why.1.t": "Mobile-first na disenyo",
  "why.1.d": "Bawat proyekto ay dinisenyo at sinusubukan muna sa cellphone, dahil iyon ang gamit ng karamihan ng customer.",
  "why.2.t": "SEO-ready mula pa sa simula",
  "why.2.d": "Nakaayos ang mga website para mahanap at mai-rank ng search engine ang iyong negosyo.",
  "why.3.t": "Ligtas na pagbuo",
  "why.3.d": "Sinusunod namin ang secure development practices at hindi kailanman inilalantad ang sensitibong credentials.",
  "why.4.t": "Scalable na solusyon",
  "why.4.d": "Mula sa isang landing page hanggang sa buong business system, kayang lumago ng IMARIXA kasama mo.",
  "why.5.t": "Tanzania, Pilipinas at buong mundo",
  "why.5.d": "Naglilingkod kami sa mga negosyo sa Tanzania, Pilipinas at sa ibang bansa, may payment option para sa bawat isa.",
  "why.6.t": "Mabilis na suporta",
  "why.6.d": "Makipag-usap sa amin nang direkta sa WhatsApp para sa mabilis na sagot bago at pagkatapos ng iyong proyekto.",
  "pay.kicker": "Mga paraan ng pagbabayad",
  "pay.h2": "Magbayad sa paraang bagay sa iyo",
  "pay.p": "Tumatanggap ang IMARIXA ng mobile money, GCash, international card payments at bank transfer.",
  "pay.mpesa": "Direktang magpadala ng bayad sa pamamagitan ng M-PESA.",
  "pay.airtel": "Direktang magpadala ng bayad sa pamamagitan ng Airtel Money.",
  "pay.mixx": "Direktang magpadala ng bayad sa pamamagitan ng Mixx by Yas.",
  "pay.card": "Card payment sa pamamagitan ng secure payment gateway. <span class=\"badge\">Kailangan pang i-configure ang gateway</span>",
  "pay.gcash": "Para sa mga kliyenteng nagbabayad mula sa Pilipinas at iba pang bahagi ng Asya.",
  "pay.wa.t": "Kumpirmasyon sa WhatsApp",
  "pay.wa.d": "Ipadala dito ang kumpirmasyon ng iyong bayad para ma-activate ang iyong order.",
  "pay.bank": "Bank Transfer",
  "pay.bank.bank": "Bangko",
  "pay.bank.acc": "Account Number",
  "pay.bank.name": "Pangalan ng Account",
  "pay.note1": "Kasalukuyang ikinakabit ang card at mobile-money checkout sa isang secure payment gateway. Hanggang hindi pa ito tapos, gamitin ang mga numero sa itaas o makipag-ugnayan sa amin sa WhatsApp para makumpleto ang bayad.",
  "pay.note2": "Ang mga numero ng bayad sa itaas ay para lamang sa pagpapadala ng pera. Para sa anumang tanong, mag-message sa amin sa WhatsApp — gumagana ito saanmang panig ng mundo.",
  "q.kicker": "Humingi ng quote",
  "q.h2": "Ikuwento sa amin ang iyong proyekto",
  "q.s1.t": "Mabilis na tugon",
  "q.s1.d": "Sinasagot namin agad ang mga quote request, kadalasan sa parehong araw.",
  "q.s2.t": "Mas gusto ang WhatsApp?",
  "q.s2.d": "Mag-message nang direkta sa amin at laktawan na ang form.",
  "q.wa": "Makipag-chat sa WhatsApp",
  "f.name": "Buong pangalan",
  "f.company": "Pangalan ng kumpanya / negosyo",
  "f.phone": "WhatsApp number (kasama ang country code)",
  "f.email": "Email",
  "f.service": "Serbisyong kailangan",
  "f.package": "Gustong package",
  "f.budget": "Budget (opsyonal)",
  "f.method": "Gustong paraan ng pakikipag-ugnayan",
  "f.desc": "Paglalarawan ng proyekto",
  "f.desc.ph": "Ikuwento sa amin nang kaunti ang tungkol sa iyong negosyo at ang kailangan mo.",
  "f.budget.ph": {
   "tz": "hal. TZS 1,000,000",
   "ph": "hal. ₱20,000"
  },
  "o.s1": "Disenyo at Pagbuo ng Website",
  "o.s2": "E-Commerce / Online Store",
  "o.s3": "SEO at Digital Marketing",
  "o.s4": "Propesyonal na Business Email",
  "o.s5": "AI / Automation Solutions",
  "o.s6": "Mobile App Development",
  "o.s7": "Business System",
  "o.s8": "Iba pa",
  "o.pk.none": "Hindi pa sigurado",
  "o.email": "Email",
  "q.submit": "Humingi ng Quote",
  "q.status": "Hindi pa nakakonekta ang form na ito sa email service. Tingnan ang <code>.env.example</code> para i-configure ang Formspree, Resend o ibang form backend — hanggang doon, pakikumpirma rin ang iyong request sa WhatsApp.",
  "ct.kicker": "Makipag-ugnayan",
  "ct.h2": "Abutin ang IMARIXA",
  "ct.social": "Social Media",
  "ct.lang": "Mga wika",
  "ct.cov.t": "Saklaw ng Serbisyo",
  "ct.cov.d": "Tanzania, Pilipinas at buong mundo",
  "faq.kicker": "FAQ",
  "faq.h2": "Mga madalas itanong",
  "faq.1.q": "Gaano katagal gawin ang isang website?",
  "faq.1.a": "Depende sa package at sa bilis ng pagbibigay ng content. Kukumpirmahin namin ang tinatayang petsa ng delivery kapag na-scope na ang iyong proyekto.",
  "faq.2.q": "Ano ang kasama sa hosting at domain?",
  "faq.2.a": "Kasama sa bawat package ang hosting at domain registration para sa unang taon. Mula ikalawang taon, ang hosting at maintenance ay {renew}.",
  "faq.3.q": "Puwede ko bang i-upgrade ang package ko sa hinaharap?",
  "faq.3.a": "Oo. Maraming kliyente ang nagsisimula sa Landing o Business at nag-a-upgrade sa Business Pro o Online Store habang lumalaki ang pangangailangan.",
  "faq.4.q": "Nagtatrabaho ba kayo sa mga kliyenteng nasa labas ng Tanzania?",
  "faq.4.a": "Oo — naglilingkod ang IMARIXA sa mga kliyente sa Pilipinas at sa buong mundo, at may GCash para sa mga bayad mula sa Pilipinas at Asya.",
  "cta.h2": "Buuin ang website mo ngayon.",
  "cta.p": "Ikuwento sa amin ang tungkol sa iyong negosyo at tutulungan ka naming pumili ng tamang package para makapag-online.",
  "cta.b1": "Humingi ng Quote",
  "cta.b2": "Mag-message sa Amin",
  "ft.brand": "Intelligence. Innovation. Impact. Bumubuo ng matalinong teknolohiya para sa nagbabagong mundo.",
  "ft.quick": "Mabilisang Link",
  "ft.home": "Home",
  "ft.services": "Mga Serbisyo",
  "ft.s1": "Website Development",
  "ft.s2": "E-Commerce",
  "ft.s3": "SEO",
  "ft.s4": "Propesyonal na Email",
  "ft.s5": "Automation",
  "ft.s6": "Hosting at Maintenance",
  "ft.pay": "Mga Paraan ng Pagbabayad",
  "ft.rights": "© 2026 IMARIXA. Lahat ng karapatan ay nakalaan.",
  "meta.title": "IMARIXA — Intelligence. Innovation. Impact. | Website at Software Development, Africa at Asya",
  "meta.desc": "Bumubuo ang IMARIXA ng matatalinong website, e-commerce store, business software at AI-powered na digital solutions para sa mga negosyo sa Tanzania, Pilipinas at iba pa. Website simula TZS 450,000 o ₱8,500.",
  "wa.hello": "Kumusta IMARIXA, gusto ko sanang malaman ang tungkol sa inyong mga serbisyo.",
  "wa.quote": "Kumusta IMARIXA, gusto ko sanang humingi ng quote para sa isang proyekto."
 }
};

  var lang = 'en';
  var market = 'tz';
  var marketChosen = false;

  function get(k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } }
  function put(k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  function qsa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  function money(m, k) {
    var p = PRICES[m];
    return m === 'ph' ? p.cur + p[k] : p.cur + ' ' + p[k];
  }

  function raw(key) {
    var v = T[lang] && T[lang][key];
    if (v === undefined) v = T.en[key];
    if (v && typeof v === 'object') v = v[market] || v.tz;
    return v;
  }

  function t(key) {
    var v = raw(key);
    if (typeof v !== 'string') return v;
    return v.replace(/\{renew\}/g, money(market, 'renew') + ' ' + raw('per.year'));
  }

  function detectLang() {
    var saved = get('imarixa_lang');
    if (saved && T[saved]) return saved;
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i] || '').toLowerCase();
      if (l.indexOf('sw') === 0) return 'sw';
      if (l.indexOf('fil') === 0 || l.indexOf('tl') === 0) return 'tl';
    }
    return 'en';
  }

  function marketFor(l) {
    if (l === 'tl') return 'ph';
    if (l === 'sw') return 'tz';
    var zone = '';
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* ignore */ }
    return zone === 'Asia/Manila' ? 'ph' : 'tz';
  }

  function apply() {
    document.documentElement.lang = lang;

    qsa('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (typeof v === 'string') el.innerHTML = v;
    });
    qsa('[data-i18n-ph]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-ph'));
      if (typeof v === 'string') el.setAttribute('placeholder', v);
    });
    qsa('[data-i18n-label]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n-label'));
      if (typeof v === 'string') el.setAttribute('aria-label', v);
    });

    qsa('.price-card[data-key]').forEach(function (card) {
      var k = card.getAttribute('data-key');
      var p = PRICES[market];
      var amount = card.querySelector('.price-amount');
      if (amount) amount.innerHTML = '<span class="cur">' + p.cur + '</span>' + (market === 'ph' ? '' : ' ') + p[k];
      card.setAttribute('data-price', (k === 'store' ? 'starting ' : '') + money(market, k));
    });

    qsa('option[data-pkg]').forEach(function (o) {
      var k = o.getAttribute('data-pkg');
      o.textContent = NAMES[k] + ' — ' + (k === 'store' ? t('pk.from.opt') + ' ' : '') + money(market, k);
    });

    document.title = t('meta.title');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));

    var cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = lang.toUpperCase();
    var lb = document.getElementById('langBtn');
    if (lb) lb.setAttribute('aria-label', t('ui.language'));

    qsa('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    qsa('[data-market]').forEach(function (b) {
      var on = b.getAttribute('data-market') === market;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    qsa('a[href^="' + WA + '"]').forEach(function (a) {
      var msg = t(a.getAttribute('data-wa') === 'quote' ? 'wa.quote' : 'wa.hello');
      a.setAttribute('href', WA + '?text=' + encodeURIComponent(msg));
    });
  }

  function setLang(l) {
    lang = l;
    put('imarixa_lang', l);
    if (!marketChosen) market = marketFor(l);
    apply();
  }

  function setMarket(m) {
    market = m;
    marketChosen = true;
    put('imarixa_market', m);
    apply();
  }

  function bind() {
    var btn = document.getElementById('langBtn');
    var menu = document.getElementById('langMenu');

    function closeMenu() {
      if (!menu) return;
      menu.hidden = true;
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    if (btn && menu) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = menu.hidden;
        menu.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      document.addEventListener('click', function (e) {
        if (!menu.hidden && !menu.contains(e.target)) closeMenu();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !menu.hidden) { closeMenu(); btn.focus(); }
      });
    }

    qsa('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        setLang(b.getAttribute('data-lang'));
        closeMenu();
      });
    });
    qsa('[data-market]').forEach(function (b) {
      b.addEventListener('click', function () { setMarket(b.getAttribute('data-market')); });
    });
  }

  function init() {
    lang = detectLang();
    var saved = get('imarixa_market');
    if (saved === 'tz' || saved === 'ph') { market = saved; marketChosen = true; }
    else { market = marketFor(lang); }
    apply();
    bind();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
