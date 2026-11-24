/*!
 * 𝐈𝐦𝐚𝐫𝐢𝐱𝐚𝐓𝐞𝐜𝐡 - language and market switcher
 * Languages: English (en), Kiswahili (sw)
 * Markets:   Tanzania (TZS) and Philippines (₱)
 * Text lives in the T object below. Elements opt in with data-i18n="key".
 */
(function () {
  'use strict';

  var WA = 'https://wa.me/255749256665';

  var PRICES = {
    tz: { cur: 'TZS', landing: '450,000', business: '950,000', pro: '1,450,000', store: '2,800,000', renewLB: '150,000', renewPro: '280,000', renewStore: '600,000' },
    ph: { cur: '₱', landing: '8,500', business: '18,000', pro: '32,000', store: '65,000' }
  };
  var NAMES = { landing: 'Landing', business: 'Business', pro: 'Business Pro', store: 'Online Store' };

  var T = {
 "en": {
  "nav.services": "Services",
  "nav.packages": "Packages",
  "nav.about": "About",
  "nav.payments": "Payments",
  "nav.contact": "Contact",
  "nav.quote": "Get a Quote",
  "ui.language": "Language",
  "hero.title": "Building intelligent technology for a <span class=\"accent\">changing world</span>.",
  "hero.sub": "ImarixaTech designs and develops modern websites, online stores, business software and AI-powered solutions that help businesses in Tanzania, the Philippines and beyond establish, grow, automate, and operate effectively online.",
  "hero.cta1": "Get Started",
  "hero.cta2": "Explore Our Services",
  "hero.t1": "Tanzania, Philippines &amp; international clients",
  "hero.t2": "Hosting &amp; domain included",
  "hero.t3": "Mobile-first &amp; SEO ready",
  "nm.kicker": "Happy New Month",
  "nm.h2": "Welcome to November 2026",
  "nm.p": "It is the 11th month of 2026. Invest, grow and enjoy.",
  "nm.wa": "Chat on WhatsApp",
  "svc.kicker": "What we do",
  "svc.h2": "Technology services built around real business needs",
  "svc.p": "From your first website to a full business system, every service is designed to help you reach more customers and run more efficiently.",
  "svc.1.t": "Website Design &amp; Development",
  "svc.1.d": "Modern, responsive websites designed for businesses and organizations, built to load fast and work beautifully on every device.",
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
  "pk.renew.title": "Hosting &amp; Maintenance (Year 2+):",
  "pk.renew.lb": "Landing / Business",
  "pk.renew.pro": "Business Pro",
  "pk.renew.store": "Online Store",
  "pk.renew.ask": "Ask us",
  "per.yr": "/yr",
  "pk.offer": "Launch offer: 15% discount for the first 10 customers.",
  "ab.kicker": "About ImarixaTech",
  "ab.p": "ImarixaTech is a technology and innovation company focused on building intelligent digital solutions that transform ideas, solve real-world problems, and create meaningful impact.",
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
  "why.kicker": "Why choose ImarixaTech",
  "why.h2": "Practical technology, built for how you actually work",
  "why.1.t": "Mobile-first design",
  "why.1.d": "Every build is designed and tested for phones first, since that's how most customers browse.",
  "why.2.t": "SEO-ready from day one",
  "why.2.d": "Websites are structured so search engines can find and rank your business.",
  "why.3.t": "Security-conscious builds",
  "why.3.d": "We follow secure development practices and never expose sensitive credentials.",
  "why.4.t": "Scalable solutions",
  "why.4.d": "From a single landing page to a full business system, ImarixaTech can grow with you.",
  "why.5.t": "Tanzania, Philippines &amp; international",
  "why.5.d": "We serve businesses in Tanzania, the Philippines and abroad, with payment options for each.",
  "why.6.t": "Responsive support",
  "why.6.d": "Reach us directly on WhatsApp for quick answers before and after your project.",
  "pay.kicker": "Payment options",
  "pay.h2": "Pay the way that works for you",
  "pay.p": "ImarixaTech accepts mobile money, GCash, international card payments and bank transfer.",
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
  "pay.note2": "The payment numbers above are for sending money only. For any question, message us on WhatsApp, it works from anywhere in the world.",
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
  "q.status": "This form is not yet connected to an email service. See <code>.env.example</code> for configuring Formspree, Resend or another form backend, until then, please also confirm your request on WhatsApp.",
  "ct.kicker": "Contact",
  "ct.h2": "Reach ImarixaTech",
  "ct.email": "Email",
  "ct.web": "Website",
  "ct.social": "Social",
  "ct.lang": "Languages",
  "ct.cov.t": "Coverage",
  "ct.cov.d": "Tanzania, Philippines &amp; international",
  "faq.kicker": "FAQ",
  "faq.h2": "Common questions",
  "faq.1.q": "How long does a website take to build?",
  "faq.1.a": "Timelines depend on the package and how quickly content is provided. We'll confirm an estimated delivery date once your project is scoped.",
  "faq.2.q": "What's included in hosting &amp; domain?",
  "faq.2.a": {"tz": "Every package includes hosting and domain registration for the first year. From year two, hosting and maintenance is TZS 150,000/year for Landing and Business, TZS 280,000/year for Business Pro and TZS 600,000/year for Online Store.", "ph": "Every package includes hosting and domain registration for the first year. From year two, message us on WhatsApp for hosting and maintenance pricing."},
  "faq.3.q": "Can I upgrade my package later?",
  "faq.3.a": "Yes. Many clients start with Landing or Business and upgrade to Business Pro or Online Store as their needs grow.",
  "faq.4.q": "Do you work with clients outside Tanzania?",
  "faq.4.a": "Yes, ImarixaTech serves clients in the Philippines and around the world, with GCash available for payments from the Philippines and Asia.",
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
  "ft.s5": "Automation",
  "ft.s6": "Hosting &amp; Maintenance",
  "ft.pay": "Payment Methods",
  "ft.rights": "© 2026 ImarixaTech. All Rights Reserved.",
  "meta.title": "ImarixaTech - Intelligence. Innovation. Impact. | Website & Software Development, Africa & Asia",
  "meta.desc": "ImarixaTech builds intelligent websites, e-commerce stores, business software and AI-powered digital solutions for businesses in Tanzania, the Philippines and beyond. Websites from TZS 450,000 or ₱8,500.",
  "wa.hello": "Hello ImarixaTech, I'd like to know more about your services.",
  "wa.quote": "Hello ImarixaTech, I would like a quote for a project.",
  "ab2.h2": "Intelligence. Innovation. Impact.",
  "ab2.p": "ImarixaTech is a technology-driven brand focused on delivering innovative digital solutions that help individuals, entrepreneurs, startups, businesses and organizations operate more effectively in an increasingly digital world. Operating under ANARIXA, its parent corporate identity, ImarixaTech combines technology, creativity and intelligent innovation to develop practical solutions that address real-world challenges.",
  "ab2.tag": "<strong>Technology for Today. Intelligence for Tomorrow.</strong>",
  "ab2.vision": "To become a recognized technology brand delivering intelligent, innovative and impactful digital solutions that empower businesses, transform opportunities and contribute to a more connected and technologically advanced world.",
  "ab2.mission": "To empower individuals, businesses and organizations through accessible, reliable and innovative technology solutions that improve efficiency, support digital transformation and create meaningful opportunities for growth.",
  "ab2.corp.t": "Corporate Structure",
  "ab2.corp.d": "<strong>ANARIXA</strong> is the parent company, representing the broader corporate vision, ownership identity and long-term strategic direction. <strong>ImarixaTech</strong> is the operating technology brand responsible for technology services, digital products, software development, AI solutions and digital innovation.",
  "ab2.phil.t": "Our Philosophy",
  "ab2.phil.d": "Intelligence drives innovation, and innovation creates impact.",
  "val.1.t": "Innovation",
  "val.1.d": "We embrace new ideas, emerging technologies and creative approaches to solving problems.",
  "val.2.t": "Intelligence",
  "val.2.d": "We use knowledge, data and technology strategically to develop smarter solutions.",
  "val.3.t": "Integrity",
  "val.3.d": "We value honesty, transparency, accountability and professionalism in our business relationships.",
  "val.4.t": "Excellence",
  "val.4.d": "We strive for quality, reliability and continuous improvement in everything we deliver.",
  "val.5.t": "Customer Focus",
  "val.5.d": "We prioritize understanding our clients’ needs and developing solutions that address their objectives.",
  "val.6.t": "Impact",
  "val.6.d": "We value the positive difference technology creates for people, businesses and communities.",
  "val.7.t": "Adaptability",
  "val.7.d": "We remain open to technological developments and evolve to meet changing digital needs.",
  "ws.kicker": "Who we serve",
  "ws.h2": "Technology for every kind of business",
  "ws.p": "ImarixaTech aims to serve a diverse range of clients and industries.",
  "ws.1.t": "Entrepreneurs and Startups",
  "ws.1.d": "Digital foundations and online presence for emerging businesses.",
  "ws.2.t": "Small and Medium-Sized Enterprises",
  "ws.2.d": "Websites, digital platforms and practical technology solutions.",
  "ws.3.t": "Corporate Organizations",
  "ws.3.d": "Digital development aligned with organizational objectives.",
  "ws.4.t": "Professional Individuals",
  "ws.4.d": "Online identities for consultants, creatives, freelancers and professionals.",
  "ws.5.t": "Educational Institutions",
  "ws.5.d": "Technology for communication, learning and institutional operations.",
  "ws.6.t": "NGOs and Institutions",
  "ws.6.d": "Digital communication, engagement and operational solutions.",
  "ws.7.t": "Retail and E-commerce Businesses",
  "ws.7.d": "Online selling platforms and digital customer experiences.",
  "ap.kicker": "Our approach",
  "ap.h2": "Successful projects begin with understanding the client",
  "ap.p": "Our approach follows five key stages.",
  "ap.1.t": "01 · Discovery and Consultation",
  "ap.1.d": "We understand the client’s business, objectives, challenges and requirements.",
  "ap.2.t": "02 · Planning and Strategy",
  "ap.2.d": "We identify suitable solutions, define project requirements and plan delivery.",
  "ap.3.t": "03 · Design and Development",
  "ap.3.d": "We transform ideas into practical digital solutions through structured design and development.",
  "ap.4.t": "04 · Testing and Delivery",
  "ap.4.d": "We evaluate functionality, usability, responsiveness and agreed requirements before delivery.",
  "ap.5.t": "05 · Support and Improvement",
  "ap.5.d": "We provide appropriate technical assistance, improvements and future development opportunities.",
  "ph.kicker": "Our technology philosophy",
  "ph.h2": "Purposeful, intelligent and accessible",
  "ph.p": "Three interconnected principles define our identity and guide our commitment to technological advancement.",
  "ph.1.t": "Intelligence",
  "ph.1.d": "Using knowledge, creativity, data and emerging technologies to make better decisions and develop smarter solutions.",
  "ph.2.t": "Innovation",
  "ph.2.d": "Transforming ideas into practical digital products, services and experiences that address real challenges.",
  "ph.3.t": "Impact",
  "ph.3.d": "Creating meaningful value through technology by improving productivity, enabling opportunities and supporting sustainable business development.",
  "wc.1.t": "Innovation-Driven Thinking",
  "wc.1.d": "We look beyond conventional approaches to identify opportunities for smarter digital solutions.",
  "wc.2.t": "Customer-Centered Development",
  "wc.2.d": "We prioritize understanding individual business requirements rather than applying a single solution to every client.",
  "wc.3.t": "Modern Technology",
  "wc.3.d": "We embrace relevant technological developments, including artificial intelligence and modern software solutions.",
  "wc.4.t": "Professional Approach",
  "wc.4.d": "We value clear communication, structured project development and responsible delivery.",
  "wc.5.t": "Flexible Solutions",
  "wc.5.d": "We recognize that businesses have different needs, operational requirements and budgets.",
  "wc.6.t": "Future-Oriented Vision",
  "wc.6.d": "We develop our capabilities with an understanding that technology continuously evolves.",
  "pm.kicker": "Payment",
  "pm.h2": "Pay online or by bank transfer",
  "pm.p": "Pay securely with mobile money (M-Pesa, Airtel Money, Mixx, Halotel), card or QR, or request our bank details on WhatsApp.",
  "pm.online.t": "Pay Online",
  "pm.online.d": "Choose your package and request a secure payment link. Pay with mobile money (M-Pesa, Airtel Money, Mixx, Halotel) or card.",
  "pm.pkg": "Package",
  "pm.name": "Full name",
  "pm.link": "Request payment link",
  "pm.opt.store": "Online Store - from TZS 2,800,000",
  "pm.bank.d": "For your security, we do not publish our bank account details on this website. Message us on WhatsApp and we will send them to you directly.",
  "pm.details": "Request payment details",
  "pm.after": "After you pay, please send your payment confirmation on WhatsApp (+255 749 256 665) so we can activate your order."
 },
 "sw": {
  "nav.services": "Huduma",
  "nav.packages": "Vifurushi",
  "nav.about": "Kuhusu Sisi",
  "nav.payments": "Malipo",
  "nav.contact": "Mawasiliano",
  "nav.quote": "Pata Bei",
  "ui.language": "Lugha",
  "hero.title": "Tunajenga teknolojia mahiri kwa <span class=\"accent\">dunia inayobadilika</span>.",
  "hero.sub": "ImarixaTech hubuni na kutengeneza tovuti za kisasa, maduka ya mtandaoni, programu za biashara na suluhisho zinazotumia AI zinazosaidia biashara nchini Tanzania, Ufilipino na kwingineko kuanzisha, kukua, kujiendesha kiotomatiki na kufanya kazi kwa ufanisi mtandaoni.",
  "hero.cta1": "Anza Sasa",
  "hero.cta2": "Tazama Huduma Zetu",
  "hero.t1": "Wateja wa Tanzania, Ufilipino na kimataifa",
  "hero.t2": "Hosting na domain vimejumuishwa",
  "hero.t3": "Inafaa simu na tayari kwa SEO",
  "nm.kicker": "Heri ya Mwezi Mpya",
  "nm.h2": "Karibu Novemba 2026",
  "nm.p": "Huu ni mwezi wa 11 wa mwaka 2026. Wekeza, kua na ufurahie.",
  "nm.wa": "Wasiliana nasi WhatsApp",
  "svc.kicker": "Tunachofanya",
  "svc.h2": "Huduma za teknolojia zilizojengwa kulingana na mahitaji halisi ya biashara",
  "svc.p": "Kuanzia tovuti yako ya kwanza hadi mfumo kamili wa biashara, kila huduma imeundwa kukusaidia kufikia wateja zaidi na kuendesha biashara kwa ufanisi zaidi.",
  "svc.1.t": "Ubunifu na Utengenezaji wa Tovuti",
  "svc.1.d": "Tovuti za kisasa zinazofaa simu, zilizoundwa kwa ajili ya biashara na taasisi, zinapakia haraka na kufanya kazi vizuri kwenye kila kifaa.",
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
  "pk.renew.title": "Hosting na Matengenezo (Mwaka wa 2+):",
  "pk.renew.lb": "Landing / Business",
  "pk.renew.pro": "Business Pro",
  "pk.renew.store": "Online Store",
  "pk.renew.ask": "Uliza",
  "per.yr": "/mwaka",
  "pk.offer": "Ofa ya uzinduzi: punguzo la 15% kwa wateja 10 wa kwanza.",
  "ab.kicker": "Kuhusu ImarixaTech",
  "ab.p": "ImarixaTech ni kampuni ya teknolojia na ubunifu inayojikita katika kujenga suluhisho mahiri za kidijitali zinazobadilisha mawazo, kutatua matatizo halisi na kuleta matokeo yenye maana.",
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
  "why.kicker": "Kwa nini uchague ImarixaTech",
  "why.h2": "Teknolojia ya vitendo, iliyojengwa kulingana na jinsi unavyofanya kazi",
  "why.1.t": "Ubunifu unaoanza na simu",
  "why.1.d": "Kila mradi unaundwa na kujaribiwa kwenye simu kwanza, kwa kuwa ndivyo wateja wengi wanavyovinjari.",
  "why.2.t": "Tayari kwa SEO tangu siku ya kwanza",
  "why.2.d": "Tovuti hupangwa ili injini za utafutaji ziweze kupata na kupanga biashara yako.",
  "why.3.t": "Ujenzi unaozingatia usalama",
  "why.3.d": "Tunafuata mbinu salama za uendelezaji na hatufichui kamwe taarifa nyeti za siri.",
  "why.4.t": "Suluhisho zinazokua",
  "why.4.d": "Kuanzia ukurasa mmoja hadi mfumo kamili wa biashara, ImarixaTech inaweza kukua nawe.",
  "why.5.t": "Tanzania, Ufilipino na kimataifa",
  "why.5.d": "Tunahudumia biashara nchini Tanzania, Ufilipino na nje ya nchi, kwa njia za malipo kwa kila eneo.",
  "why.6.t": "Msaada wa haraka",
  "why.6.d": "Wasiliana nasi moja kwa moja kwenye WhatsApp kwa majibu ya haraka kabla na baada ya mradi wako.",
  "pay.kicker": "Njia za malipo",
  "pay.h2": "Lipa kwa njia inayokufaa",
  "pay.p": "ImarixaTech inapokea pesa za simu, GCash, malipo ya kadi za kimataifa na uhamisho wa benki.",
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
  "pay.note2": "Namba za malipo zilizo hapo juu ni za kutuma pesa tu. Kwa swali lolote, tutumie ujumbe kupitia WhatsApp, inafanya kazi popote duniani.",
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
  "q.status": "Fomu hii bado haijaunganishwa na huduma ya email. Tazama <code>.env.example</code> kusanidi Formspree, Resend au huduma nyingine, hadi wakati huo, tafadhali thibitisha ombi lako pia kupitia WhatsApp.",
  "ct.kicker": "Mawasiliano",
  "ct.h2": "Wasiliana na ImarixaTech",
  "ct.email": "Barua pepe",
  "ct.web": "Tovuti",
  "ct.social": "Mitandao ya kijamii",
  "ct.lang": "Lugha",
  "ct.cov.t": "Maeneo tunayohudumia",
  "ct.cov.d": "Tanzania, Ufilipino na kimataifa",
  "faq.kicker": "Maswali",
  "faq.h2": "Maswali yanayoulizwa mara nyingi",
  "faq.1.q": "Tovuti inachukua muda gani kutengenezwa?",
  "faq.1.a": "Muda hutegemea kifurushi na jinsi maudhui yanavyotolewa haraka. Tutakuthibitishia tarehe ya makadirio ya kukabidhi mara mradi wako utakapopangwa.",
  "faq.2.q": "Hosting na domain inajumuisha nini?",
  "faq.2.a": {"tz": "Kila kifurushi kinajumuisha hosting na usajili wa domain kwa mwaka wa kwanza. Kuanzia mwaka wa pili, hosting na matengenezo ni TZS 150,000/mwaka kwa Landing na Business, TZS 280,000/mwaka kwa Business Pro na TZS 600,000/mwaka kwa Online Store.", "ph": "Kila kifurushi kinajumuisha hosting na usajili wa domain kwa mwaka wa kwanza. Kuanzia mwaka wa pili, tuandikie WhatsApp kupata bei za hosting na matengenezo."},
  "faq.3.q": "Naweza kuboresha kifurushi changu baadaye?",
  "faq.3.a": "Ndiyo. Wateja wengi huanza na Landing au Business na kuboresha hadi Business Pro au Online Store mahitaji yao yanapokua.",
  "faq.4.q": "Mnafanya kazi na wateja walio nje ya Tanzania?",
  "faq.4.a": "Ndiyo, ImarixaTech inahudumia wateja wa Ufilipino na duniani kote, na GCash inapatikana kwa malipo kutoka Ufilipino na Asia.",
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
  "ft.s5": "Uendeshaji Kiotomatiki",
  "ft.s6": "Hosting na Matengenezo",
  "ft.pay": "Njia za Malipo",
  "ft.rights": "© 2026 ImarixaTech. Haki zote zimehifadhiwa.",
  "meta.title": "ImarixaTech - Intelligence. Innovation. Impact. | Utengenezaji wa Tovuti na Programu, Afrika na Asia",
  "meta.desc": "ImarixaTech hutengeneza tovuti mahiri, maduka ya mtandaoni, programu za biashara na suluhisho za kidijitali zinazotumia AI kwa biashara nchini Tanzania, Ufilipino na kwingineko. Tovuti kuanzia TZS 450,000 au ₱8,500.",
  "wa.hello": "Habari ImarixaTech, ningependa kujua zaidi kuhusu huduma zenu.",
  "wa.quote": "Habari ImarixaTech, ningependa kupata bei ya mradi.",
  "ab2.h2": "Akili. Ubunifu. Matokeo.",
  "ab2.p": "ImarixaTech ni chapa inayoongozwa na teknolojia, inayojikita katika kutoa suluhisho bunifu za kidijitali zinazowasaidia watu binafsi, wajasiriamali, kampuni changa (startups), biashara na mashirika kufanya kazi kwa ufanisi zaidi katika dunia inayozidi kuwa ya kidijitali. Ikifanya kazi chini ya ANARIXA, utambulisho wake mkuu wa kampuni, ImarixaTech inaunganisha teknolojia, ubunifu na uvumbuzi mahiri ili kuendeleza suluhisho za vitendo zinazoshughulikia changamoto halisi za maisha.",
  "ab2.tag": "<strong>Teknolojia ya Leo. Akili ya Kesho.</strong>",
  "ab2.vision": "Kuwa chapa ya teknolojia inayotambulika inayotoa suluhisho za kidijitali mahiri, bunifu na zenye matokeo chanya zinazowawezesha wafanyabiashara, kubadilisha fursa na kuchangia katika dunia iliyounganishwa zaidi na yenye maendeleo ya kiteknolojia.",
  "ab2.mission": "Kuwawezesha watu binafsi, biashara na mashirika kupitia suluhisho za teknolojia zinazopatikana kwa urahisi, za kuaminika na bunifu zinazoboresha ufanisi, kusaidia mageuzi ya kidijitali na kuunda fursa zenye maana za ukuaji.",
  "ab2.corp.t": "Muundo wa Kampuni",
  "ab2.corp.d": "<strong>ANARIXA</strong> ni kampuni mama, inayowakilisha maono mapana ya kampuni, utambulisho wa umiliki na mwelekeo wa kimkakati wa muda mrefu. <strong>ImarixaTech</strong> ni chapa ya teknolojia inayofanya kazi, inayohusika na huduma za teknolojia, bidhaa za kidijitali, uundaji wa programu, suluhisho za AI na ubunifu wa kidijitali.",
  "ab2.phil.t": "Falsafa Yetu",
  "ab2.phil.d": "Akili huchochea ubunifu, na ubunifu huleta matokeo.",
  "val.1.t": "Ubunifu",
  "val.1.d": "Tunakumbatia mawazo mapya, teknolojia zinazoibuka na mbinu bunifu za kutatua matatizo.",
  "val.2.t": "Akili",
  "val.2.d": "Tunatumia maarifa, data na teknolojia kimkakati kuunda suluhisho mahiri zaidi.",
  "val.3.t": "Uadilifu",
  "val.3.d": "Tunathamini uaminifu, uwazi, uwajibikaji na weledi katika mahusiano yetu ya kibiashara.",
  "val.4.t": "Ubora",
  "val.4.d": "Tunajitahidi kufikia ubora, uaminifu na uboreshaji endelevu katika kila tunachotoa.",
  "val.5.t": "Kumjali Mteja",
  "val.5.d": "Tunatoa kipaumbele kuelewa mahitaji ya wateja wetu na kuunda suluhisho zinazotimiza malengo yao.",
  "val.6.t": "Matokeo",
  "val.6.d": "Tunathamini tofauti chanya ambayo teknolojia huleta kwa watu, biashara na jamii.",
  "val.7.t": "Kubadilika",
  "val.7.d": "Tunabaki wazi kwa maendeleo ya kiteknolojia na kujiendeleza ili kukidhi mahitaji ya kidijitali yanayobadilika.",
  "ws.kicker": "Tunaowahudumia",
  "ws.h2": "Teknolojia kwa kila aina ya biashara",
  "ws.p": "ImarixaTech inalenga kuhudumia wateja na sekta mbalimbali.",
  "ws.1.t": "Wajasiriamali na Kampuni Changa",
  "ws.1.d": "Misingi ya kidijitali na uwepo mtandaoni kwa biashara changa.",
  "ws.2.t": "Biashara Ndogo na za Kati",
  "ws.2.d": "Tovuti, majukwaa ya kidijitali na suluhisho za teknolojia za vitendo.",
  "ws.3.t": "Mashirika ya Kampuni",
  "ws.3.d": "Maendeleo ya kidijitali yanayoendana na malengo ya shirika.",
  "ws.4.t": "Wataalamu Binafsi",
  "ws.4.d": "Utambulisho mtandaoni kwa washauri, wabunifu, wafanyakazi huru na wataalamu.",
  "ws.5.t": "Taasisi za Elimu",
  "ws.5.d": "Teknolojia kwa mawasiliano, ujifunzaji na uendeshaji wa taasisi.",
  "ws.6.t": "Mashirika Yasiyo ya Kiserikali na Taasisi",
  "ws.6.d": "Mawasiliano ya kidijitali, ushirikishwaji na suluhisho za uendeshaji.",
  "ws.7.t": "Biashara za Rejareja na Mtandaoni",
  "ws.7.d": "Majukwaa ya kuuza mtandaoni na uzoefu wa kidijitali kwa wateja.",
  "ap.kicker": "Mbinu yetu",
  "ap.h2": "Miradi yenye mafanikio huanza kwa kumwelewa mteja",
  "ap.p": "Mbinu yetu ina hatua tano kuu.",
  "ap.1.t": "01 · Ugunduzi na Ushauri",
  "ap.1.d": "Tunaelewa biashara ya mteja, malengo, changamoto na mahitaji yake.",
  "ap.2.t": "02 · Mipango na Mkakati",
  "ap.2.d": "Tunabainisha suluhisho zinazofaa, kufafanua mahitaji ya mradi na kupanga utoaji.",
  "ap.3.t": "03 · Usanifu na Uundaji",
  "ap.3.d": "Tunabadilisha mawazo kuwa suluhisho za kidijitali za vitendo kupitia usanifu na uundaji uliopangwa.",
  "ap.4.t": "04 · Majaribio na Makabidhiano",
  "ap.4.d": "Tunatathmini utendaji kazi, urahisi wa matumizi, uitikiaji wa vifaa mbalimbali na mahitaji yaliyokubaliwa kabla ya kukabidhi.",
  "ap.5.t": "05 · Msaada na Uboreshaji",
  "ap.5.d": "Tunatoa msaada wa kiufundi unaofaa, maboresho na fursa za maendeleo ya baadaye.",
  "ph.kicker": "Falsafa yetu ya teknolojia",
  "ph.h2": "Yenye kusudi, mahiri na inayopatikana kwa wote",
  "ph.p": "Kanuni tatu zinazohusiana hufafanua utambulisho wetu na kuongoza dhamira yetu ya maendeleo ya kiteknolojia.",
  "ph.1.t": "Akili",
  "ph.1.d": "Kutumia maarifa, ubunifu, data na teknolojia zinazoibuka kufanya maamuzi bora na kuunda suluhisho mahiri zaidi.",
  "ph.2.t": "Ubunifu",
  "ph.2.d": "Kubadilisha mawazo kuwa bidhaa, huduma na uzoefu wa kidijitali wa vitendo unaoshughulikia changamoto halisi.",
  "ph.3.t": "Matokeo",
  "ph.3.d": "Kuleta thamani yenye maana kupitia teknolojia kwa kuboresha tija, kuwezesha fursa na kusaidia maendeleo endelevu ya biashara.",
  "wc.1.t": "Fikra Zinazoongozwa na Ubunifu",
  "wc.1.d": "Tunatazama zaidi ya mbinu za kawaida kutambua fursa za suluhisho mahiri zaidi za kidijitali.",
  "wc.2.t": "Uundaji Unaomlenga Mteja",
  "wc.2.d": "Tunatoa kipaumbele kuelewa mahitaji ya kila biashara badala ya kutumia suluhisho moja kwa kila mteja.",
  "wc.3.t": "Teknolojia ya Kisasa",
  "wc.3.d": "Tunakumbatia maendeleo muhimu ya kiteknolojia, ikiwemo akili bandia (AI) na suluhisho za kisasa za programu.",
  "wc.4.t": "Mtazamo wa Kitaalamu",
  "wc.4.d": "Tunathamini mawasiliano wazi, uundaji wa mradi uliopangwa na ukabidhi unaowajibika.",
  "wc.5.t": "Suluhisho Zinazobadilika",
  "wc.5.d": "Tunatambua kuwa biashara zina mahitaji, mahitaji ya uendeshaji na bajeti tofauti.",
  "wc.6.t": "Maono Yanayoangalia Mbele",
  "wc.6.d": "Tunakuza uwezo wetu tukitambua kuwa teknolojia hubadilika kila wakati.",
  "pm.kicker": "Malipo",
  "pm.h2": "Lipa mtandaoni au kwa uhamisho wa benki",
  "pm.p": "Lipa kwa usalama kwa pesa za simu (M-Pesa, Airtel Money, Mixx, Halotel), kadi au QR, au omba taarifa zetu za benki kupitia WhatsApp.",
  "pm.online.t": "Lipa Mtandaoni",
  "pm.online.d": "Chagua kifurushi chako na uombe kiungo salama cha malipo. Lipa kwa pesa za simu (M-Pesa, Airtel Money, Mixx, Halotel) au kadi.",
  "pm.pkg": "Kifurushi",
  "pm.name": "Jina kamili",
  "pm.link": "Omba kiungo cha malipo",
  "pm.opt.store": "Online Store - kuanzia TZS 2,800,000",
  "pm.bank.d": "Kwa usalama wako, hatuchapishi taarifa za akaunti yetu ya benki kwenye tovuti hii. Tutumie ujumbe kwenye WhatsApp nasi tutakutumia moja kwa moja.",
  "pm.details": "Omba taarifa za malipo",
  "pm.after": "Baada ya kulipa, tafadhali tuma uthibitisho wa malipo yako kupitia WhatsApp (+255 749 256 665) ili tuwezeshe oda yako."
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
    return v;
  }

  function detectLang() {
    var saved = get('imarixa_lang');
    if (saved && T[saved]) return saved;
    var list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var l = String(list[i] || '').toLowerCase();
      if (l.indexOf('sw') === 0) return 'sw';
    }
    return 'en';
  }

  function marketFor(l) {
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

    qsa('[data-renew]').forEach(function (el) {
      var k = el.getAttribute('data-renew');
      el.textContent = PRICES[market][k] ? money(market, k) + t('per.yr') : t('pk.renew.ask');
    });

    qsa('option[data-pkg]').forEach(function (o) {
      var k = o.getAttribute('data-pkg');
      o.textContent = NAMES[k] + ' - ' + (k === 'store' ? t('pk.from.opt') + ' ' : '') + money(market, k);
    });

    document.title = t('meta.title');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));

    var cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = (lang === 'sw') ? 'Swahili' : 'English';
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
