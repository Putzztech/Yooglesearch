// results.js - Simple database for search results
const searchResults = [
    {
        name: "Google",
        link: "https://www.google.com",
        description: "Mesin pencari global dengan berbagai layanan termasuk pencarian web, gambar, video, dan banyak fitur lainnya."
    },
    {
        name: "YouTube",
        link: "https://www.youtube.com",
        description: "Nikmati video dan musik yang Anda suka, unggah konten asli, dan bagikan semuanya dengan teman, keluarga, serta dunia di YouTube."
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com",
        description: "Terhubunglah dengan teman, keluarga, dan orang lain yang Anda kenal. Bagikan foto dan video, kirim pesan, dan dapatkan update."
    },
    {
        name: "Wikipedia",
        link: "https://www.wikipedia.org",
        description: "Wikipedia adalah ensiklopedia online gratis yang dibuat dan diedit oleh relawan di seluruh dunia dan dikelola oleh Wikimedia Foundation."
    },
    {
        name: "Tokopedia",
        link: "https://www.tokopedia.com",
        description: "Marketplace terbesar di Indonesia yang menghubungkan pembeli dan penjual dari seluruh nusantara."
    },
    {
        name: "Shopee",
        link: "https://shopee.co.id",
        description: "Platform e-commerce terkemuka di Asia Tenggara dan Taiwan dengan berbagai produk dan flash sale harian."
    },
    {
        name: "Bukalapak",
        link: "https://www.bukalapak.com",
        description: "Marketplace yang mendukung UMKM Indonesia dengan sistem pembayaran yang aman dan berbagai produk lokal."
    },
    {
        name: "Traveloka",
        link: "https://www.traveloka.com",
        description: "Superapp untuk pesan tiket pesawat, hotel, kereta api, dan berbagai kebutuhan perjalanan lainnya."
    },
    {
        name: "Gojek",
        link: "https://www.gojek.com",
        description: "Superapp dengan berbagai layanan transportasi, makanan, pembayaran, dan kebutuhan sehari-hari."
    },
    {
        name: "Kompas",
        link: "https://www.kompas.com",
        description: "Surat kabar online terpercaya dengan berita nasional dan internasional terkini."
    },
    // E-commerce
    {
        name: "Blibli",
        link: "https://www.blibli.com",
        description: "Marketplace terpercaya dengan produk original dan garansi resmi dari berbagai brand ternama"
    },
    {
        name: "JD.id",
        link: "https://www.jd.id",
        description: "E-commerce dengan pengiriman super cepat dan produk berkualitas langsung dari gudang"
    },
    {
        name: "Bhinneka",
        link: "https://www.bhinneka.com",
        description: "Toko online spesialis elektronik dan gadget dengan garansi resmi di Indonesia"
    },
    
    // Digital Services
    {
        name: "DANA",
        link: "https://www.dana.id",
        description: "Dompet digital dengan fitur lengkap untuk pembayaran, transfer, dan investasi"
    },
    {
        name: "LinkAja",
        link: "https://www.linkaja.id",
        description: "Layanan pembayaran digital hasil kolaborasi BUMN keuangan Indonesia"
    },
    {
        name: "Kredivo",
        link: "https://www.kredivo.com",
        description: "Pembayaran digital dengan cicilan tanpa kartu kredit dan proses cepat"
    },
    
    // Education
    {
        name: "Pijar Belajar",
        link: "https://www.pijarbelajar.id",
        description: "Platform pembelajaran online dengan konten kurikulum sekolah dan tryout"
    },
    {
        name: "CoLearn",
        link: "https://www.colearn.id",
        description: "Aplikasi belajar matematika dan sains dengan fitur tanya jawab langsung"
    },
    {
        name: "Kelaspintar",
        link: "https://www.kelaspintar.id",
        description: "Sekolah online dengan kurikulum nasional dan pengajar profesional"
    },
    
    // News
    {
        name: "Kumparan",
        link: "https://www.kumparan.com",
        description: "Platform berita dan konten kreator dengan berbagai topik aktual"
    },
    {
        name: "Suara.com",
        link: "https://www.suara.com",
        description: "Media online dengan fokus berita politik, ekonomi, dan hiburan"
    },
    {
        name: "IDN Times",
        link: "https://www.idntimes.com",
        description: "Media digital untuk generasi milenial dan Gen Z dengan berbagai konten"
    },
    
    // Travel
    {
        name: "Tiket.com",
        link: "https://www.tiket.com",
        description: "Platform pemesanan tiket pesawat, hotel, dan aktivitas wisata"
    },
    {
        name: "PegiPegi",
        link: "https://www.pegipegi.com",
        description: "Situs pemesanan hotel dan tiket dengan banyak promo menarik"
    },
    {
        name: "Traveloka Xperience",
        link: "https://www.traveloka.com",
        description: "Booking aktivitas wisata, atraksi, dan tiket event di seluruh Indonesia"
    },
    
    // Government
    {
        name: "BPJS Kesehatan",
        link: "https://www.bpjs-kesehatan.go.id",
        description: "Layanan resmi program jaminan kesehatan nasional Indonesia"
    },
    {
        name: "e-HAC",
        link: "https://ehab.kemkes.go.id",
        description: "Sistem Health Alert Card elektronik untuk perjalanan internasional"
    },
    {
        name: "PeduliLindungi",
        link: "https://pedulilindungi.id",
        description: "Aplikasi resmi penanganan COVID-19 dan sertifikat vaksin digital"
    },
    
    // Technology
    {
        name: "Dicoding",
        link: "https://www.dicoding.com",
        description: "Platform belajar coding dan pengembangan aplikasi berbasis kurikulum"
    },
    {
        name: "DQLab",
        link: "https://www.dqlab.id",
        description: "Tempat belajar data science dan artificial intelligence untuk pemula"
    },
    // E-Commerce
    {
        name: "Blibli",
        link: "https://www.blibli.com",
        description: "Online shopping mall terpercaya dengan produk original dari brand-brand ternama"
    },
    {
        name: "JD.id",
        link: "https://www.jd.id",
        description: "E-commerce dengan pengiriman same day untuk wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi"
    },
    
    // FinTech 
    {
        name: "DANA",
        link: "https://www.dana.id",
        description: "Dompet digital dengan fitur lengkap mulai dari bayar tagihan, transfer, hingga investasi reksa dana"
    },
    {
        name: "LinkAja",
        link: "https://www.linkaja.id",
        description: "Layanan keuangan digital yang didukung oleh BUMN Indonesia seperti Telkomsel, Bank Mandiri, BRI, BNI, dan Pertamina"
    },
    
    // HealthTech
    {
        name: "Halodoc",
        link: "https://www.halodoc.com",
        description: "Platform kesehatan terlengkap di Indonesia dengan layanan telemedicine, pembelian obat, dan tes lab ke rumah"
    },
    {
        name: "Alodokter",
        link: "https://www.alodokter.com",
        description: "Tanya jawab dengan dokter dan informasi kesehatan terpercaya dalam bahasa Indonesia"
    },
    
    // Education
    {
        name: "Ruangguru",
        link: "https://www.ruangguru.com",
        description: "Aplikasi belajar online dengan video beranimasi, latihan soal, dan les privat untuk siswa SD-SMA"
    },
    {
        name: "Zenius",
        link: "https://zenius.net",
        description: "Platform pembelajaran online dengan pendekatan konsep fundamental bukan hafalan"
    },
    
    // Travel
    {
        name: "Traveloka",
        link: "https://www.traveloka.com",
        description: "Booking tiket pesawat, hotel, kereta api, bus, dan aktivitas wisata dengan mudah"
    },
    {
        name: "Tiket.com",
        link: "https://www.tiket.com",
        description: "Pesan tiket pesawat dan hotel dengan beragam metode pembayaran termasuk cicilan"
    },
    
    // Government Services
    {
        name: "PeduliLindungi",
        link: "https://pedulilindungi.id",
        description: "Aplikasi resmi pemerintah untuk penanganan COVID-19 dan verifikasi sertifikat vaksin"
    },
    {
        name: "JKN Mobile",
        link: "https://jkn.kemkes.go.id",
        description: "Aplikasi resmi BPJS Kesehatan untuk cek kepesertaan, pembayaran iuran, dan fasilitas kesehatan"
    },
    
    // News
    {
        name: "Kompas",
        link: "https://www.kompas.com",
        description: "Surat kabar digital dengan berita terkini seputar politik, ekonomi, dan hiburan"
    },
    {
        name: "Detikcom",
        link: "https://www.detik.com",
        description: "Portal berita online dengan update informasi setiap 5 menit"
    },
    
    // Food Delivery
    {
        name: "GoFood",
        link: "https://www.gojek.com/gofood",
        description: "Pesan makanan dari restoran favorit dan diantar langsung oleh driver Gojek"
    },
    {
        name: "GrabFood",
        link: "https://www.grab.com/id/food/",
        description: "Layanan pesan-antar makanan dari berbagai restoran dengan promo menarik"
    },
    
    // Transportation
    {
        name: "Gojek",
        link: "https://www.gojek.com",
        description: "Super app dengan layanan transportasi, makanan, pembayaran, dan kebutuhan sehari-hari"
    },
    {
        name: "Grab",
        link: "https://www.grab.com/id/",
        description: "Transportasi online, pengiriman paket, dan layanan pembayaran digital"
    },
    
    // Agriculture
    {
        name: "TaniHub",
        link: "https://www.tanihub.com",
        description: "Platform pemasaran hasil pertanian langsung dari petani ke konsumen akhir"
    },
  // Technology & Software (20)
  {
    name: "GitHub",
    link: "https://github.com",
    description: "Platform hosting for software development and version control using Git"
  },
  {
    name: "GitLab",
    link: "https://gitlab.com",
    description: "Complete DevOps platform delivered as a single application"
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com",
    description: "Question and answer site for professional and enthusiast programmers"
  },
  {
    name: "Docker",
    link: "https://www.docker.com",
    description: "Platform to build, share, and run applications in containers"
  },
  {
    name: "Kubernetes",
    link: "https://kubernetes.io",
    description: "Open-source system for automating deployment of containerized applications"
  },
  {
    name: "Figma",
    link: "https://www.figma.com",
    description: "Cloud-based design tool for teams working on interface design"
  },
  {
    name: "Notion",
    link: "https://www.notion.so",
    description: "All-in-one workspace for notes, tasks, wikis and databases"
  },
  {
    name: "Slack",
    link: "https://slack.com",
    description: "Messaging platform for teams with channels, search and integrations"
  },
  {
    name: "Trello",
    link: "https://trello.com",
    description: "Visual collaboration tool using boards, lists and cards"
  },
  {
    name: "Jira",
    link: "https://www.atlassian.com/software/jira",
    description: "Project management tool for agile teams to plan, track and release software"
  },
  {
    name: "Postman",
    link: "https://www.postman.com",
    description: "Platform for building and using APIs with collaboration features"
  },
  {
    name: "Vercel",
    link: "https://vercel.com",
    description: "Platform for frontend frameworks and static sites with serverless functions"
  },
  {
    name: "DigitalOcean",
    link: "https://www.digitalocean.com",
    description: "Cloud infrastructure provider offering compute, storage and networking"
  },
  {
    name: "Cloudflare",
    link: "https://www.cloudflare.com",
    description: "Web infrastructure and security company providing CDN and DDoS protection"
  },
  {
    name: "npm",
    link: "https://www.npmjs.com",
    description: "Package manager for JavaScript and world's largest software registry"
  },
  {
    name: "PyPI",
    link: "https://pypi.org",
    description: "Python Package Index - repository of software for Python programming"
  },
  {
    name: "Unity",
    link: "https://unity.com",
    description: "Real-time development platform for 3D and 2D games and experiences"
  },
  {
    name: "Unreal Engine",
    link: "https://www.unrealengine.com",
    description: "3D creation tool for photoreal visuals and immersive experiences"
  },
  {
    name: "Blender",
    link: "https://www.blender.org",
    description: "Free and open-source 3D creation suite supporting modeling and animation"
  },
  {
    name: "OBS Studio",
    link: "https://obsproject.com",
    description: "Open-source software for video recording and live streaming"
  },

  // Business & Finance (15)
  {
    name: "Salesforce",
    link: "https://www.salesforce.com",
    description: "Cloud-based CRM platform for sales, service, marketing and more"
  },
  {
    name: "HubSpot",
    link: "https://www.hubspot.com",
    description: "Inbound marketing and sales software with CRM capabilities"
  },
  {
    name: "Shopify",
    link: "https://www.shopify.com",
    description: "E-commerce platform for online stores and retail point-of-sale systems"
  },
  {
    name: "QuickBooks",
    link: "https://quickbooks.intuit.com",
    description: "Accounting software for small businesses with financial management"
  },
  {
    name: "Xero",
    link: "https://www.xero.com",
    description: "Cloud-based accounting software for small businesses and accountants"
  },
  {
    name: "Square",
    link: "https://squareup.com",
    description: "Financial services and mobile payment company with POS solutions"
  },
  {
    name: "Stripe",
    link: "https://stripe.com",
    description: "Technology company building economic infrastructure for the internet"
  },
  {
    name: "PayPal",
    link: "https://www.paypal.com",
    description: "Online payment system supporting money transfers and online purchases"
  },
  {
    name: "Bloomberg",
    link: "https://www.bloomberg.com",
    description: "Financial news and data company providing business and markets coverage"
  },
  {
    name: "Reuters",
    link: "https://www.reuters.com",
    description: "International news organization providing business and financial news"
  },
  {
    name: "Crunchbase",
    link: "https://www.crunchbase.com",
    description: "Platform for finding business information about private and public companies"
  },
  {
    name: "AngelList",
    link: "https://angel.co",
    description: "Platform for startups to raise money and for job seekers to find opportunities"
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com",
    description: "Global freelancing platform connecting businesses with independent professionals"
  },
  {
    name: "Fiverr",
    link: "https://www.fiverr.com",
    description: "Online marketplace for freelance services starting at $5 per job"
  },
  {
    name: "Glassdoor",
    link: "https://www.glassdoor.com",
    description: "Platform where employees can anonymously review companies and salaries"
  },

  // Education & Learning (15)
  {
    name: "Coursera",
    link: "https://www.coursera.org",
    description: "Online learning platform offering courses from top universities and companies"
  },
  {
    name: "edX",
    link: "https://www.edx.org",
    description: "Massive open online course provider created by Harvard and MIT"
  },
  {
    name: "Udemy",
    link: "https://www.udemy.com",
    description: "Online learning marketplace with courses on various professional skills"
  },
  {
    name: "Khan Academy",
    link: "https://www.khanacademy.org",
    description: "Non-profit educational organization providing free online courses"
  },
  {
    name: "Duolingo",
    link: "https://www.duolingo.com",
    description: "Language-learning platform including free courses in 30+ languages"
  },
  {
    name: "Skillshare",
    link: "https://www.skillshare.com",
    description: "Online learning community with thousands of creative classes"
  },
  {
    name: "Codecademy",
    link: "https://www.codecademy.com",
    description: "Interactive platform offering coding classes in various programming languages"
  },
  {
    name: "freeCodeCamp",
    link: "https://www.freecodecamp.org",
    description: "Non-profit organization providing free coding curriculum and certifications"
  },
  {
    name: "Udacity",
    link: "https://www.udacity.com",
    description: "Online learning platform focused on technology and career advancement"
  },
  {
    name: "Brilliant",
    link: "https://brilliant.org",
    description: "Platform for interactive learning in math, science and computer science"
  },
  {
    name: "MasterClass",
    link: "https://www.masterclass.com",
    description: "Online classes taught by world-renowned experts in various fields"
  },
  {
    name: "FutureLearn",
    link: "https://www.futurelearn.com",
    description: "British digital education platform offering online courses from universities"
  },
  {
    name: "Pluralsight",
    link: "https://www.pluralsight.com",
    description: "Technology workforce development platform with expert-led courses"
  },
  {
    name: "DataCamp",
    link: "https://www.datacamp.com",
    description: "Interactive learning platform for data science and analytics"
  },
  {
    name: "Rosetta Stone",
    link: "https://www.rosettastone.com",
    description: "Language learning software using immersive methods without translation"
  },

  // News & Media (15)
  {
    name: "BBC",
    link: "https://www.bbc.com",
    description: "British public service broadcaster providing global news coverage"
  },
  {
    name: "CNN",
    link: "https://www.cnn.com",
    description: "American news-based pay television channel and website"
  },
  {
    name: "The New York Times",
    link: "https://www.nytimes.com",
    description: "American daily newspaper with worldwide influence and readership"
  },
  {
    name: "The Guardian",
    link: "https://www.theguardian.com",
    description: "British daily newspaper known for its progressive editorial stance"
  },
  {
    name: "Al Jazeera",
    link: "https://www.aljazeera.com",
    description: "Qatar-based news network providing global coverage with Middle East focus"
  },
  {
    name: "Reuters",
    link: "https://www.reuters.com",
    description: "International news organization providing business and financial news"
  },
  {
    name: "Associated Press",
    link: "https://apnews.com",
    description: "American not-for-profit news agency headquartered in New York"
  },
  {
    name: "The Wall Street Journal",
    link: "https://www.wsj.com",
    description: "American business-focused international daily newspaper"
  },
  {
    name: "Financial Times",
    link: "https://www.ft.com",
    description: "British daily newspaper focusing on business and economic news"
  },
  {
    name: "The Economist",
    link: "https://www.economist.com",
    description: "British weekly newspaper focusing on international business and politics"
  },
  {
    name: "Time",
    link: "https://time.com",
    description: "American news magazine known for its annual Person of the Year feature"
  },
  {
    name: "National Geographic",
    link: "https://www.nationalgeographic.com",
    description: "American magazine and media brand focused on science and exploration"
  },
  {
    name: "Wired",
    link: "https://www.wired.com",
    description: "Magazine focusing on how emerging technologies affect culture and society"
  },
  {
    name: "TechCrunch",
    link: "https://techcrunch.com",
    description: "Online publisher focusing on the tech industry and startup ecosystem"
  },
  {
    name: "The Verge",
    link: "https://www.theverge.com",
    description: "Technology news and media network operated by Vox Media"
  },

  // Science & Research (15)
  {
    name: "NASA",
    link: "https://www.nasa.gov",
    description: "United States government agency responsible for space exploration"
  },
  {
    name: "Nature",
    link: "https://www.nature.com",
    description: "International weekly journal publishing peer-reviewed research"
  },
  {
    name: "Science",
    link: "https://www.science.org",
    description: "Academic journal of the American Association for the Advancement of Science"
  },
  {
    name: "PubMed",
    link: "https://pubmed.ncbi.nlm.nih.gov",
    description: "Free search engine accessing primarily the MEDLINE database of biomedical literature"
  },
  {
    name: "arXiv",
    link: "https://arxiv.org",
    description: "Open-access repository of electronic preprints approved for posting"
  },
  {
    name: "CERN",
    link: "https://home.cern",
    description: "European research organization operating the largest particle physics laboratory"
  },
  {
    name: "National Institutes of Health",
    link: "https://www.nih.gov",
    description: "Primary agency of the US government responsible for biomedical research"
  },
  {
    name: "World Health Organization",
    link: "https://www.who.int",
    description: "Specialized agency of the UN responsible for international public health"
  },
  {
    name: "CDC",
    link: "https://www.cdc.gov",
    description: "US national public health agency for disease control and prevention"
  },
  {
    name: "ScienceDirect",
    link: "https://www.sciencedirect.com",
    description: "Website providing subscription-based access to scientific research"
  },
  {
    name: "JSTOR",
    link: "https://www.jstor.org",
    description: "Digital library of academic journals, books, and primary sources"
  },
  {
    name: "IEEE Xplore",
    link: "https://ieeexplore.ieee.org",
    description: "Digital library providing access to technical literature in engineering"
  },
  {
    name: "SpringerLink",
    link: "https://link.springer.com",
    description: "Platform providing access to scientific documents from various disciplines"
  },
  {
    name: "ResearchGate",
    link: "https://www.researchgate.net",
    description: "Social networking site for scientists and researchers to share papers"
  },
  {
    name: "Academia.edu",
    link: "https://www.academia.edu",
    description: "Platform for academics to share research papers and connect with colleagues"
  },

  // Government & Organizations (15)
  {
    name: "United Nations",
    link: "https://www.un.org",
    description: "International organization maintaining peace and security among nations"
  },
  {
    name: "World Bank",
    link: "https://www.worldbank.org",
    description: "International financial institution providing loans to developing countries"
  },
  {
    name: "IMF",
    link: "https://www.imf.org",
    description: "International organization working to foster global monetary cooperation"
  },
  {
    name: "WTO",
    link: "https://www.wto.org",
    description: "International organization dealing with global rules of trade between nations"
  },
  {
    name: "European Union",
    link: "https://europa.eu",
    description: "Political and economic union of 27 European member states"
  },
  {
    name: "UNESCO",
    link: "https://en.unesco.org",
    description: "UN specialized agency promoting world peace through education and culture"
  },
  {
    name: "UNICEF",
    link: "https://www.unicef.org",
    description: "UN program providing humanitarian aid to children worldwide"
  },
  {
    name: "Red Cross",
    link: "https://www.icrc.org",
    description: "Humanitarian organization protecting victims of conflicts and violence"
  },
  {
    name: "Amnesty International",
    link: "https://www.amnesty.org",
    description: "Non-governmental organization focused on human rights advocacy"
  },
  {
    name: "Greenpeace",
    link: "https://www.greenpeace.org",
    description: "Non-governmental environmental organization with global presence"
  },
  {
    name: "Doctors Without Borders",
    link: "https://www.doctorswithoutborders.org",
    description: "International humanitarian medical organization"
  },
  {
    name: "World Wildlife Fund",
    link: "https://www.worldwildlife.org",
    description: "International non-governmental organization for wilderness preservation"
  },
  {
    name: "OECD",
    link: "https://www.oecd.org",
    description: "Intergovernmental economic organization with 38 member countries"
  },
  {
    name: "G20",
    link: "https://www.g20.org",
    description: "International forum for governments and central bank governors"
  },
  {
    name: "NATO",
    link: "https://www.nato.int",
    description: "Intergovernmental military alliance between North American and European countries"
  },
  // Technology (30)
  {
    name: "Vimeo",
    link: "https://vimeo.com",
    description: "High-quality video hosting platform for creators and businesses"
  },
  {
    name: "SoundCloud",
    link: "https://soundcloud.com",
    description: "Audio distribution platform for music sharing and discovery"
  },
  {
    name: "Twitch",
    link: "https://www.twitch.tv",
    description: "Live streaming platform primarily for video game content"
  },
  {
    name: "Discord",
    link: "https://discord.com",
    description: "Voice, video and text communication platform for communities"
  },
  {
    name: "Telegram",
    link: "https://telegram.org",
    description: "Cloud-based instant messaging service with focus on speed and security"
  },
  {
    name: "Signal",
    link: "https://signal.org",
    description: "Encrypted messaging app focused on privacy and security"
  },
  {
    name: "Mozilla",
    link: "https://www.mozilla.org",
    description: "Open-source software community known for Firefox web browser"
  },
  {
    name: "Evernote",
    link: "https://evernote.com",
    description: "Note-taking app for organizing tasks and documents"
  },
  {
    name: "Dropbox",
    link: "https://www.dropbox.com",
    description: "Cloud storage service for file sharing and collaboration"
  },
  {
    name: "WeTransfer",
    link: "https://wetransfer.com",
    description: "File sharing service for sending large files"
  },
  {
    name: "Canva",
    link: "https://www.canva.com",
    description: "Graphic design platform with drag-and-drop tools"
  },
  {
    name: "Adobe Creative Cloud",
    link: "https://www.adobe.com/creativecloud.html",
    description: "Suite of creative software for design, photography and video"
  },
  {
    name: "Autodesk",
    link: "https://www.autodesk.com",
    description: "Software for 3D design, engineering and entertainment"
  },
  {
    name: "WordPress",
    link: "https://wordpress.org",
    description: "Open-source content management system for websites"
  },
  {
    name: "Wix",
    link: "https://www.wix.com",
    description: "Cloud-based web development platform"
  },
  {
    name: "Squarespace",
    link: "https://www.squarespace.com",
    description: "Website building and hosting platform with design templates"
  },
  {
    name: "Webflow",
    link: "https://webflow.com",
    description: "Visual web design platform with CMS capabilities"
  },
  {
    name: "Airtable",
    link: "https://airtable.com",
    description: "Hybrid spreadsheet-database collaboration tool"
  },
  {
    name: "Asana",
    link: "https://asana.com",
    description: "Web and mobile work management platform"
  },
  {
    name: "Basecamp",
    link: "https://basecamp.com",
    description: "Project management and team communication tool"
  },
  {
    name: "ClickUp",
    link: "https://clickup.com",
    description: "Productivity platform for task and project management"
  },
  {
    name: "Monday.com",
    link: "https://monday.com",
    description: "Work operating system for team collaboration"
  },
  {
    name: "Notion",
    link: "https://www.notion.so",
    description: "All-in-one workspace for notes, tasks and databases"
  },
  {
    name: "Zapier",
    link: "https://zapier.com",
    description: "Automation tool connecting different web applications"
  },
  {
    name: "IFTTT",
    link: "https://ifttt.com",
    description: "Web-based service to create chains of conditional statements"
  },
  {
    name: "LastPass",
    link: "https://www.lastpass.com",
    description: "Password manager storing encrypted passwords online"
  },
  {
    name: "1Password",
    link: "https://1password.com",
    description: "Password manager with secure digital vault"
  },
  {
    name: "Bitwarden",
    link: "https://bitwarden.com",
    description: "Open-source password management service"
  },
  {
    name: "Dashlane",
    link: "https://www.dashlane.com",
    description: "Password manager and digital wallet application"
  },
  {
    name: "KeePass",
    link: "https://keepass.info",
    description: "Free open-source password manager"
  },

  // Business & Finance (30)
  {
    name: "QuickBooks Online",
    link: "https://quickbooks.intuit.com",
    description: "Cloud-based accounting software for small businesses"
  },
  {
    name: "FreshBooks",
    link: "https://www.freshbooks.com",
    description: "Accounting software designed for small business owners"
  },
  {
    name: "Wave",
    link: "https://www.waveapps.com",
    description: "Free financial software for small businesses"
  },
  {
    name: "Zoho Books",
    link: "https://www.zoho.com/books",
    description: "Online accounting software for small businesses"
  },
  {
    name: "Xero",
    link: "https://www.xero.com",
    description: "Cloud-based accounting software platform"
  },
  {
    name: "Sage",
    link: "https://www.sage.com",
    description: "Accounting and payroll software for businesses"
  },
  {
    name: "Bench",
    link: "https://bench.co",
    description: "Online bookkeeping services for small businesses"
  },
  {
    name: "Kashoo",
    link: "https://www.kashoo.com",
    description: "Simple cloud accounting software"
  },
  {
    name: "Zoho Invoice",
    link: "https://www.zoho.com/invoice",
    description: "Online invoicing software for freelancers and businesses"
  },
  {
    name: "Harvest",
    link: "https://www.getharvest.com",
    description: "Time tracking and invoicing software"
  },
  {
    name: "Toggl",
    link: "https://toggl.com",
    description: "Time tracking tool for individuals and teams"
  },
  {
    name: "Clockify",
    link: "https://clockify.me",
    description: "Free time tracking software"
  },
  {
    name: "Time Doctor",
    link: "https://www.timedoctor.com",
    description: "Time tracking and productivity monitoring software"
  },
  {
    name: "RescueTime",
    link: "https://www.rescuetime.com",
    description: "Automatic time tracking and productivity tool"
  },
  {
    name: "Hubstaff",
    link: "https://hubstaff.com",
    description: "Time tracking and productivity monitoring software"
  },
  {
    name: "Everhour",
    link: "https://everhour.com",
    description: "Time tracking software that integrates with project tools"
  },
  {
    name: "Timely",
    link: "https://timelyapp.com",
    description: "Automatic time tracking software using AI"
  },
  {
    name: "Payoneer",
    link: "https://www.payoneer.com",
    description: "Online money transfer and digital payment services"
  },
  {
    name: "TransferWise (Wise)",
    link: "https://wise.com",
    description: "Online money transfer service with low fees"
  },
  {
    name: "Remitly",
    link: "https://www.remitly.com",
    description: "Digital remittance service for international money transfers"
  },
  {
    name: "WorldRemit",
    link: "https://www.worldremit.com",
    description: "Online money transfer service for international remittances"
  },
  {
    name: "OFX",
    link: "https://www.ofx.com",
    description: "International money transfer services"
  },
  {
    name: "CurrencyFair",
    link: "https://www.currencyfair.com",
    description: "Peer-to-peer currency exchange marketplace"
  },
  {
    name: "Revolut",
    link: "https://www.revolut.com",
    description: "Digital banking alternative with currency exchange"
  },
  {
    name: "N26",
    link: "https://n26.com",
    description: "Mobile banking platform with no hidden fees"
  },
  {
    name: "Monzo",
    link: "https://monzo.com",
    description: "Mobile-only banking platform"
  },
  {
    name: "Chime",
    link: "https://www.chime.com",
    description: "Mobile banking service with fee-free overdraft"
  },
  {
    name: "Varo",
    link: "https://www.varomoney.com",
    description: "Mobile banking app with no monthly fees"
  },
  {
    name: "Current",
    link: "https://current.com",
    description: "Mobile banking platform with early paycheck access"
  },
  {
    name: "Acorns",
    link: "https://www.acorns.com",
    description: "Micro-investing platform that rounds up purchases"
  },

  // Education & Learning (30)
  {
    name: "Coursera",
    link: "https://www.coursera.org",
    description: "Online learning platform offering courses from top universities"
  },
  {
    name: "Udacity",
    link: "https://www.udacity.com",
    description: "Online learning platform focused on technology skills"
  },
  {
    name: "edX",
    link: "https://www.edx.org",
    description: "Massive open online course provider created by Harvard and MIT"
  },
  {
    name: "FutureLearn",
    link: "https://www.futurelearn.com",
    description: "British digital education platform offering online courses"
  },
  {
    name: "Alison",
    link: "https://alison.com",
    description: "Free online learning platform with certificates"
  },
  {
    name: "Udemy Business",
    link: "https://www.udemy.com",
    description: "Corporate learning platform with business-relevant courses"
  },
  {
    name: "Pluralsight",
    link: "https://www.pluralsight.com",
    description: "Technology workforce development platform"
  },
  {
    name: "LinkedIn Learning",
    link: "https://www.linkedin.com/learning",
    description: "Online courses for business, technology and creative skills"
  },
  {
    name: "Skillsoft",
    link: "https://www.skillsoft.com",
    description: "Corporate digital learning platform"
  },
  {
    name: "DataCamp",
    link: "https://www.datacamp.com",
    description: "Interactive learning platform for data science"
  },
  {
    name: "Codecademy Pro",
    link: "https://www.codecademy.com",
    description: "Interactive coding platform with career paths"
  },
  {
    name: "Treehouse",
    link: "https://teamtreehouse.com",
    description: "Tech education platform with coding courses"
  },
  {
    name: "Egghead",
    link: "https://egghead.io",
    description: "Video tutorials for web developers"
  },
  {
    name: "Frontend Masters",
    link: "https://frontendmasters.com",
    description: "Advanced front-end development courses"
  },
  {
    name: "Scrimba",
    link: "https://scrimba.com",
    description: "Interactive coding tutorials with screencasts"
  },
  {
    name: "Educative",
    link: "https://www.educative.io",
    description: "Interactive coding courses with in-browser coding"
  },
  {
    name: "Brilliant",
    link: "https://brilliant.org",
    description: "Interactive learning for STEM subjects"
  },
  {
    name: "Khan Academy",
    link: "https://www.khanacademy.org",
    description: "Non-profit educational platform with free courses"
  },
  {
    name: "Memrise",
    link: "https://www.memrise.com",
    description: "Language learning platform using spaced repetition"
  },
  {
    name: "Babbel",
    link: "https://www.babbel.com",
    description: "Subscription-based language learning app"
  },
  {
    name: "Busuu",
    link: "https://www.busuu.com",
    description: "Language learning platform with community features"
  },
  {
    name: "Rosetta Stone",
    link: "https://www.rosettastone.com",
    description: "Language learning software using immersion method"
  },
  {
    name: "Pimsleur",
    link: "https://www.pimsleur.com",
    description: "Audio-based language learning method"
  },
  {
    name: "italki",
    link: "https://www.italki.com",
    description: "Language learning platform connecting students and teachers"
  },
  {
    name: "Verbling",
    link: "https://www.verbling.com",
    description: "Online language learning with professional tutors"
  },
  {
    name: "LingQ",
    link: "https://www.lingq.com",
    description: "Language learning through reading and listening"
  },
  {
    name: "FluentU",
    link: "https://www.fluentu.com",
    description: "Language learning with real-world videos"
  },
  {
    name: "Mango Languages",
    link: "https://mangolanguages.com",
    description: "Language learning software focusing on conversation"
  },
  {
    name: "Drops",
    link: "https://languagedrops.com",
    description: "Visual language learning app with 5-minute sessions"
  },
  {
    name: "HelloTalk",
    link: "https://www.hellotalk.com",
    description: "Language exchange app connecting native speakers"
  },

  // Health & Wellness (30)
  {
    name: "MyFitnessPal",
    link: "https://www.myfitnesspal.com",
    description: "Calorie counter and diet tracker"
  },
  {
    name: "Lose It!",
    link: "https://www.loseit.com",
    description: "Weight loss program and calorie counter"
  },
  {
    name: "Noom",
    link: "https://www.noom.com",
    description: "Psychology-based weight loss program"
  },
  {
    name: "WW (Weight Watchers)",
    link: "https://www.weightwatchers.com",
    description: "Weight loss program with point system"
  },
  {
    name: "Fitbit",
    link: "https://www.fitbit.com",
    description: "Fitness tracking devices and app"
  },
  {
    name: "Garmin Connect",
    link: "https://connect.garmin.com",
    description: "Fitness tracking platform for Garmin devices"
  },
  {
    name: "Strava",
    link: "https://www.strava.com",
    description: "Social network for athletes and fitness tracking"
  },
  {
    name: "Runkeeper",
    link: "https://runkeeper.com",
    description: "GPS running and fitness tracking app"
  },
  {
    name: "MapMyRun",
    link: "https://www.mapmyrun.com",
    description: "Running route tracker and fitness app"
  },
  {
    name: "Nike Training Club",
    link: "https://www.nike.com/ntc-app",
    description: "Free workout app from Nike"
  },
  {
    name: "Peloton",
    link: "https://www.onepeloton.com",
    description: "Interactive fitness platform with live classes"
  },
  {
    name: "Beachbody On Demand",
    link: "https://www.beachbodyondemand.com",
    description: "Streaming platform for workout programs"
  },
  {
    name: "Daily Burn",
    link: "https://www.dailyburn.com",
    description: "Streaming workout videos and fitness programs"
  },
  {
    name: "Glo",
    link: "https://www.glo.com",
    description: "Online yoga, meditation and pilates classes"
  },
  {
    name: "Down Dog",
    link: "https://www.downdogapp.com",
    description: "Customizable yoga, HIIT and meditation app"
  },
  {
    name: "Headspace",
    link: "https://www.headspace.com",
    description: "Meditation and mindfulness app"
  },
  {
    name: "Calm",
    link: "https://www.calm.com",
    description: "App for meditation, sleep and relaxation"
  },
  {
    name: "Insight Timer",
    link: "https://insighttimer.com",
    description: "Free meditation app with guided sessions"
  },
  {
    name: "Ten Percent Happier",
    link: "https://www.tenpercent.com",
    description: "Meditation app focused on skeptics"
  },
  {
    name: "Simple Habit",
    link: "https://www.simplehabit.com",
    description: "Meditation app for busy people"
  },
  {
    name: "Sleep Cycle",
    link: "https://www.sleepcycle.com",
    description: "Intelligent alarm clock and sleep tracker"
  },
  {
    name: "Pzizz",
    link: "https://www.pzizz.com",
    description: "App for sleep, naps and focus using psychoacoustics"
  },
  {
    name: "White Noise Lite",
    link: "https://www.tmsoft.com/white-noise",
    description: "Ambient noise generator for sleep and relaxation"
  },
  {
    name: "Noisli",
    link: "https://www.noisli.com",
    description: "Background noise generator for productivity"
  },
  {
    name: "MyTherapy",
    link: "https://www.mytherapyapp.com",
    description: "Medication reminder and health tracker"
  },
  {
    name: "Medisafe",
    link: "https://www.medisafe.com",
    description: "Medication management and reminder app"
  },
  {
    name: "Clue",
    link: "https://helloclue.com",
    description: "Period and ovulation tracking app"
  },
  {
    name: "Flo",
    link: "https://flo.health",
    description: "Women's health and period tracking app"
  },
  {
    name: "Glow",
    link: "https://glowing.com",
    description: "Fertility and pregnancy tracking app"
  },
  {
    name: "Ovia",
    link: "https://www.oviahealth.com",
    description: "Pregnancy and fertility tracking apps"
  },
  {
    name: "Fooducate",
    link: "https://www.fooducate.com",
    description: "Nutrition tracker and food education app"
  },

  // Travel & Transportation (25)
  {
    name: "Kayak",
    link: "https://www.kayak.com",
    description: "Travel search engine comparing flights, hotels and rental cars"
  },
  {
    name: "Skyscanner",
    link: "https://www.skyscanner.com",
    description: "Global travel search engine for flights, hotels and car rentals"
  },
  {
    name: "Momondo",
    link: "https://www.momondo.com",
    description: "Flight and travel comparison search engine"
  },
  {
    name: "Hopper",
    link: "https://www.hopper.com",
    description: "Mobile app predicting airfare and hotel prices"
  },
  {
    name: "Google Flights",
    link: "https://www.google.com/flights",
    description: "Airfare comparison service by Google"
  },
  {
    name: "Expedia",
    link: "https://www.expedia.com",
    description: "Full-service online travel agency"
  },
  {
    name: "Booking.com",
    link: "https://www.booking.com",
    description: "Online accommodation reservation service"
  },
  {
    name: "Agoda",
    link: "https://www.agoda.com",
    description: "Online travel agency specializing in Asia"
  },
  {
    name: "Hotels.com",
    link: "https://www.hotels.com",
    description: "Hotel booking website with rewards program"
  },
  {
    name: "Airbnb",
    link: "https://www.airbnb.com",
    description: "Online marketplace for lodging and experiences"
  },
  {
    name: "Vrbo",
    link: "https://www.vrbo.com",
    description: "Vacation rental marketplace for whole properties"
  },
  {
    name: "TripAdvisor",
    link: "https://www.tripadvisor.com",
    description: "Travel platform with reviews and bookings"
  },
  {
    name: "Lonely Planet",
    link: "https://www.lonelyplanet.com",
    description: "Travel guide publisher with online resources"
  },
  {
    name: "Rome2rio",
    link: "https://www.rome2rio.com",
    description: "Multimodal journey planning tool"
  },
  {
    name: "Omio",
    link: "https://www.omio.com",
    description: "Travel booking platform for trains, buses and flights"
  },
  {
    name: "Trainline",
    link: "https://www.thetrainline.com",
    description: "Rail and coach travel ticket booking service"
  },
  {
    name: "Rail Europe",
    link: "https://www.raileurope.com",
    description: "Train ticket booking service for European travel"
  },
  {
    name: "Eurail",
    link: "https://www.eurail.com",
    description: "Rail pass system for European train travel"
  },
  {
    name: "Interrail",
    link: "https://www.interrail.eu",
    description: "Rail pass for European residents traveling in Europe"
  },
  {
    name: "CruiseCritic",
    link: "https://www.cruisecritic.com",
    description: "Cruise review and information website"
  },
  {
    name: "Uber",
    link: "https://www.uber.com",
    description: "Ride-hailing and mobility services"
  },
  {
    name: "Lyft",
    link: "https://www.lyft.com",
    description: "Ride-hailing company with focus on US market"
  },
  {
    name: "Bolt",
    link: "https://bolt.eu",
    description: "European ride-hailing and mobility platform"
  },
  {
    name: "Free Now",
    link: "https://www.free-now.com",
    description: "European mobility service for taxis and rides"
  },
  {
    name: "Citymapper",
    link: "https://citymapper.com",
    description: "Urban transportation app for route planning"
  },

  // Food & Dining (20)
  {
    name: "Yelp",
    link: "https://www.yelp.com",
    description: "Platform for user reviews of local businesses"
  },
  {
    name: "Zomato",
    link: "https://www.zomato.com",
    description: "Restaurant discovery and food delivery platform"
  },
  {
    name: "OpenTable",
    link: "https://www.opentable.com",
    description: "Online restaurant reservation service"
  },
  {
    name: "Resy",
    link: "https://resy.com",
    description: "Restaurant reservation platform"
  },
  {
    name: "TheFork",
    link: "https://www.thefork.com",
    description: "European restaurant booking platform"
  },
  {
    name: "DoorDash",
    link: "https://www.doordash.com",
    description: "Food delivery service in US, Canada and Australia"
  },
  {
    name: "Grubhub",
    link: "https://www.grubhub.com",
    description: "Online and mobile food ordering platform"
  },
  {
    name: "Uber Eats",
    link: "https://www.ubereats.com",
    description: "Food delivery platform from Uber"
  },
  {
    name: "Deliveroo",
    link: "https://deliveroo.co.uk",
    description: "British online food delivery company"
  },
  {
    name: "Just Eat",
    link: "https://www.just-eat.co.uk",
    description: "Online food order and delivery service"
  },
  {
    name: "Seamless",
    link: "https://www.seamless.com",
    description: "Food delivery service in New York City area"
  },
  {
    name: "Postmates",
    link: "https://postmates.com",
    description: "On-demand delivery service for food and goods"
  },
  {
    name: "Caviar",
    link: "https://www.trycaviar.com",
    description: "Premium food delivery service"
  },
  {
    name: "Instacart",
    link: "https://www.instacart.com",
    description: "Grocery delivery and pick-up service"
  },
  {
    name: "HelloFresh",
    link: "https://www.hellofresh.com",
    description: "Meal kit delivery service"
  },
  {
    name: "Blue Apron",
    link: "https://www.blueapron.com",
    description: "Meal kit delivery service with pre-portioned ingredients"
  },
  {
    name: "Home Chef",
    link: "https://www.homechef.com",
    description: "Meal kit delivery service with flexible options"
  },
  {
    name: "Sun Basket",
    link: "https://sunbasket.com",
    description: "Organic and healthy meal kit delivery service"
  },
  {
    name: "Freshly",
    link: "https://www.freshly.com",
    description: "Prepared meal delivery service"
  },
  {
    name: "Daily Harvest",
    link: "https://www.daily-harvest.com",
    description: "Frozen organic smoothies and meals delivery"
  },

  // Entertainment (20)
  {
    name: "Spotify",
    link: "https://www.spotify.com",
    description: "Digital music streaming service with millions of songs"
  },
  {
    name: "Apple Music",
    link: "https://www.apple.com/apple-music",
    description: "Music and video streaming service by Apple"
  },
  {
    name: "Amazon Music",
    link: "https://music.amazon.com",
    description: "Music streaming platform by Amazon"
  },
  {
    name: "Tidal",
    link: "https://tidal.com",
    description: "High-fidelity music streaming service"
  },
  {
    name: "Deezer",
    link: "https://www.deezer.com",
    description: "Music streaming service with flow personalized recommendations"
  },
  {
    name: "Pandora",
    link: "https://www.pandora.com",
    description: "Music streaming and automated recommendation service"
  },
  {
    name: "iHeartRadio",
    link: "https://www.iheart.com",
    description: "Digital radio platform with live stations and podcasts"
  },
  {
    name: "SiriusXM",
    link: "https://www.siriusxm.com",
    description: "Satellite radio service with curated channels"
  },
  {
    name: "Audible",
    link: "https://www.audible.com",
    description: "Audiobook and podcast service owned by Amazon"
  },
  {
    name: "Libby",
    link: "https://www.overdrive.com/apps/libby",
    description: "App for borrowing digital books from libraries"
  },
  {
    name: "Hoopla",
    link: "https://www.hoopladigital.com",
    description: "Digital media service offered by public libraries"
  },
  {
    name: "Kanopy",
    link: "https://www.kanopy.com",
    description: "Streaming service for films and documentaries via libraries"
  },
  {
    name: "MUBI",
    link: "https://mubi.com",
    description: "Curated streaming service for independent films"
  },
  {
    name: "Criterion Channel",
    link: "https://www.criterionchannel.com",
    description: "Streaming service for classic and contemporary films"
  },
  {
    name: "Shudder",
    link: "https://www.shudder.com",
    description: "Subscription streaming service for horror films"
  },
  {
    name: "BritBox",
    link: "https://www.britbox.com",
    description: "Streaming service for British television programs"
  },
  {
    name: "Acorn TV",
    link: "https://acorn.tv",
    description: "Streaming service for British and international television"
  },
  {
    name: "Crunchyroll",
    link: "https://www.crunchyroll.com",
    description: "Anime streaming service with simulcast content"
  },
  {
    name: "Funimation",
    link: "https://www.funimation.com",
    description: "Anime streaming service with dubbed content"
  },
  {
    name: "VRV",
    link: "https://vrv.co",
    description: "Streaming bundle service for anime and geek culture"
  },

  // Shopping & Retail (20)
  {
    name: "Amazon",
    link: "https://www.amazon.com",
    description: "Multinational technology company focusing on e-commerce"
  },
  {
    name: "eBay",
    link: "https://www.ebay.com",
    description: "Multinational e-commerce corporation for consumer goods"
  },
  {
    name: "Etsy",
    link: "https://www.etsy.com",
    description: "E-commerce website focused on handmade or vintage items"
  },
  {
    name: "Walmart",
    link: "https://www.walmart.com",
    description: "Multinational retail corporation with online shopping"
  },
  {
    name: "Target",
    link: "https://www.target.com",
    description: "American retail corporation with e-commerce platform"
  },
  {
    name: "Best Buy",
    link: "https://www.bestbuy.com",
    description: "Electronics retailer with online shopping"
  },
  {
    name: "Newegg",
    link: "https://www.newegg.com",
    description: "Online retailer of computer hardware and consumer electronics"
  },
  {
    name: "Wayfair",
    link: "https://www.wayfair.com",
    description: "E-commerce company for home goods and furniture"
  },
  {
    name: "Overstock",
    link: "https://www.overstock.com",
    description: "Online retailer selling furniture, decor and more"
  },
  {
    name: "Houzz",
    link: "https://www.houzz.com",
    description: "Platform for home remodeling and design"
  },
  {
    name: "Zappos",
    link: "https://www.zappos.com",
    description: "Online shoe and clothing retailer"
  },
  {
    name: "ASOS",
    link: "https://www.asos.com",
    description: "British online fashion and cosmetic retailer"
  },
  {
    name: "Boohoo",
    link: "https://www.boohoo.com",
    description: "British online fashion retailer"
  },
  {
    name: "SHEIN",
    link: "https://www.shein.com",
    description: "Chinese online fast fashion retailer"
  },
  {
    name: "Farfetch",
    link: "https://www.farfetch.com",
    description: "Global marketplace for luxury fashion"
  },
  {
    name: "SSENSE",
    link: "https://www.ssense.com",
    description: "Canadian online retailer of high-end fashion"
  },
  {
    name: "Revolve",
    link: "https://www.revolve.com",
    description: "Online retailer of luxury apparel and accessories"
  },
  {
    name: "Nordstrom",
    link: "https://www.nordstrom.com",
    description: "American luxury department store chain"
  },
  {
    name: "Macy's",
    link: "https://www.macys.com",
    description: "American department store chain with online shopping"
  },
  {
    name: "Saks Fifth Avenue",
    link: "https://www.saksfifthavenue.com",
    description: "American luxury department store with e-commerce"
  },  // Productivity Tools (10)
  {
    name: "Notion",
    link: "https://www.notion.so",
    description: "All-in-one workspace for notes, tasks, wikis, and databases. Write, plan, collaborate." // From Notion homepage
  },
  {
    name: "Trello",
    link: "https://trello.com",
    description: "Trello helps teams work more collaboratively and get more done with boards, lists, and cards." // From Trello meta description
  },
  {
    name: "Asana",
    link: "https://asana.com",
    description: "Manage team projects and tasks in one place with Asana's work management platform." // From Asana homepage
  },
  
  // Developer Tools (15)
  {
    name: "Vercel",
    link: "https://vercel.com",
    description: "Develop, preview, ship React, Vue, Next.js and other frontend projects with zero configuration." // From Vercel homepage
  },
  {
    name: "DigitalOcean",
    link: "https://www.digitalocean.com",
    description: "Simple cloud infrastructure for developers with predictable pricing and robust documentation." // From DigitalOcean meta description
  },
  {
    name: "Postman",
    link: "https://www.postman.com",
    description: "Collaborate on API development with Postman's complete API development environment." // From Postman homepage
  },
  
  // Design (10)
  {
    name: "Figma",
    link: "https://www.figma.com",
    description: "Figma helps teams create, test, and ship better designs from start to finish." // From Figma homepage
  },
  {
    name: "Canva",
    link: "https://www.canva.com",
    description: "Design anything with easy-to-use tools and templates for social media, presentations, and more." // From Canva meta description
  },
  
  // Education (15)
  {
    name: "Duolingo",
    link: "https://www.duolingo.com",
    description: "Learn 30+ languages online with bite-size lessons based on science." // From Duolingo homepage
  },
  {
    name: "Brilliant",
    link: "https://brilliant.org",
    description: "Build quantitative skills in math, science, and computer science with fun, interactive problem-solving." // From Brilliant homepage
  },
  
  // Finance (10)
  {
    name: "Mint",
    link: "https://mint.intuit.com",
    description: "Manage your money, pay bills, track investments and check your credit score with Mint." // From Mint homepage
  },
  {
    name: "Revolut",
    link: "https://www.revolut.com",
    description: "One app for all things money: banking, transfers, exchanges, and crypto in 30+ currencies." // From Revolut homepage
  },
  
  // Health (10)
  {
    name: "MyFitnessPal",
    link: "https://www.myfitnesspal.com",
    description: "Track nutrition, count calories, and reach your health goals with our food diary app." // From MyFitnessPal homepage
  },
  {
    name: "Headspace",
    link: "https://www.headspace.com",
    description: "Meditation and sleep made simple through guided sessions and mindfulness techniques." // From Headspace meta description
  },
  
  // News (10)
  {
    name: "The Guardian",
    link: "https://www.theguardian.com",
    description: "Independent journalism with global coverage of news, sport, culture, and opinion." // From Guardian footer
  },
  {
    name: "Reuters",
    link: "https://www.reuters.com",
    description: "Trusted global news organization providing business, financial, and world news coverage." // From Reuters homepage
  },
  
  // Other Categories (20)
  {
    name: "IMDb",
    link: "https://www.imdb.com",
    description: "Find movie ratings, reviews, trailers, and industry news in the world's most popular movie database." // From IMDb meta description
  },
  {
    name: "Goodreads",
    link: "https://www.goodreads.com",
    description: "Discover and share books you love while tracking your reading progress and joining book clubs." // From Goodreads homepage
  },
  {
    name:"sora template",
    link:"https://www.soratemplates.com/",
    description:"Various types of if Various types of Blogger templates with beautiful themes"
  },
  {
    name: "Template Sederhana",
    link: "https://templatesederhana.blogspot.com/",
    description: "Template Blogger minimalis dan ringan untuk blog pribadi"
  },
  {
    name: "Gaya Hidup Sehat",
    link: "https://gayahidup-sehat.blogspot.com/",
    description: "Blog tentang tips kesehatan, makanan bergizi, dan pola hidup sehat"
  },
  {
    name: "Tekno Terkini",
    link: "https://teknoterkini.blogspot.com/",
    description: "Update berita teknologi, gadget, dan perkembangan IT terbaru"
  },
  {
    name: "Resep Masakan Nusantara",
    link: "https://resepnusantara.blogspot.com/",
    description: "Kumpulan resep masakan tradisional Indonesia dengan cara mudah"
  },
  {
    name:"Belajar Bahasa Inggris",
    link: "https://belajarbahasainggrismudah.blogspot.com/",
    description: "Panduan belajar bahasa Inggris dari dasar hingga mahir"
  },
  {
    name: "Traveling Murah",
    link: "https://travelingmurahmeriah.blogspot.com/",
    description: "Tips liburan hemat ke berbagai destinasi menarik"
  },
  {
    name: "Kumpulan Template Blogger" ,
    link: "https://kumpulantemplateblogger.blogspot.com/",
    description: "Berbagai template gratis untuk Blogger dengan desain modern"
  },
  {
    name: "Bisnis Online Sukses",
    link: "https://bisnisonlinesukses.blogspot.com/",
    description: "Strategi memulai dan mengembangkan bisnis online"
  },
  {
    name: "Review Gadget",
    link: "https://reviewgadgetterbaik.blogspot.com/",
    description: "Ulasan lengkap smartphone, laptop, dan gadget terbaru"
  },
  {
    name: "Cerita Inspiratif",
    link: "https://ceritainspiratif-hidup.blogspot.com/",
    description: "Kisah-kisah motivasi untuk memotivasi hidup"
  },
  {
    name: "Kumpulan Tutorial WordPress",
    link: "https://tutorialwordpresslengkap.blogspot.com/",
    description: "Panduan belajar WordPress dari pemula hingga mahir"
  },
  {
    name: "Tips Kecantikan Alami",
    link: "https://tipskecantikanalami.blogspot.com/",
    description: "Perawatan wajah dan tubuh menggunakan bahan alami"
  },
  {
    name:"Investasi Saham Pemula",
    link: "https://investasisahampemula.blogspot.com/",
    description: "Belajar investasi saham untuk pemula dengan risiko minimal"
  },
  {
    name: "Game Mobile Terbaru",
    link: "https://gamemobileterupdate.blogspot.com/",
    description: "Rekomendasi game Android & iOS terbaru dengan review"
  },
  {
    name: "Olahraga Fitness",
    link: "https://olahragafitnessdirumah.blogspot.com/",
    description: "Panduan latihan fitness tanpa alat di rumah"
  },
  {
    name: "Kumpulan Template PPT",
    link: "https://templatepptkeren.blogspot.com/",
    description: "Download template PowerPoint gratis untuk presentasi"
  },
  {
    name:" Kuliner Nusantara",
    link: "https://kulinernusantarakenyang.blogspot.com/",
    description: "Rekomendasi tempat makan enak di seluruh Indonesia"
  },
  {
    name: "Belajar Desain Grafis",
    link: "https://belajardesaingrafis.blogspot.com/",
    description: "Tutorial Photoshop, CorelDraw, dan Illustrator untuk pemula"
  },
  {
    name: "Tips Keuangan Keluarga",
    link: "https://keuangankeluargacemat.blogspot.com/",
    description: "Manajemen keuangan rumah tangga agar lebih hemat"
  },
  {
    name: "Film dan Series Terbaik",
    link: "https://film-seriesmenarik.blogspot.com/",
    description: "Rekomendasi film, drama, dan series terbaik dari berbagai platform"
  },// Add to your existing blog array
  {
    Lebel: "sponsor",
    name: "Yoogle.com",
    link: "https://yooglesearch-id.blogspot.com",
    description: "Pencarian yang banyak ditemukan di dunia dengan blog dari Yoogle.com Anda bisa mencari berbagai web di dunia ini"
  },
  // ... more blogs ...
];

// Find all sponsored content
const sponsoredContent = blogspotSites.filter(blog => blog.Lebel === "sponsor");
