TASK- NODEJS SCRIPT TO SCRAPE THE FOLLOWING PAGE

https://news.ycombinator.com/

NPM PACKAGES USED.

1. Cheerio - Cheerio is a popular library for parsing and manipulating HTML and XML documents in Node.js.

2. Axios- Axios is used to make HTTP requests to retrieve the HTML content of the web page you want to scrape. In the provided code, Axios is responsible for sending an HTTP GET request to the Hacker News website and fetching the HTML content.


3. fs Module - The fs module (short for "file system") is used to perform file operations in Node.js. In the provided code, the fs module is used for writing the scraped data to a JSON file on your local file system. 




STEPS TO RUN THE FILE.

1. CLONE THE PROJECT FROM GITHIB    -- GIT CLONE 'https://github.com/Syedahmedsh3009/NODEJS-SCRAPPER.git'
2. CD scrapper
3. TO INSTALL THE REQUIRED DEPEDENCIES USE COMMAND
'NPM INSTALL'
4. TO RUN THE SCRIPT AND GENERATE A JSON FILE WITH THE DATA.
NODE scrapper.js


JSON OUTPUT SAMPLE DATA- CAPTURED AT 21.31. 09.11.2023 
{
  "0-100": [
    {
      "title": "Servo announces grant from the NLnet Foundationservo.org",
      "link": "https://servo.org/blog/2023/11/06/nlgrant-announcement/",
      "authorName": "puzzlingcaptcha",
      "comments": 48,
      "points": 178,
      "time": "2 hours ago"
    },
    {
      "title": "Benchmarking GPT-4 Turbo – A Cautionary Talementat.ai",
      "link": "https://blog.mentat.ai/benchmarking-gpt-4-turbo-a-cautionary-tale",
      "authorName": "ja3k",
      "comments": 58,
      "points": 120,
      "time": "2 hours ago"
    },
    {
      "title": "Zelda the Movie Shows Nintendo Has Learned Its Lessonsbloomberg.com",
      "link": "https://www.bloomberg.com/opinion/articles/2023-11-08/zelda-the-movie-shows-nintendo-has-learned-its-lesson",
      "authorName": "jhunter1016",
      "comments": 13,
      "points": 15,
      "time": "1 hour ago"
    },
    {
      "title": "Las Vegas Sphere reports $98.4M loss; CFO quitslasvegassun.com",
      "link": "https://lasvegassun.com/news/2023/nov/08/las-vegas-sphere-reports-984-million-loss-cfo-quit/",
      "authorName": "hubraumhugo",
      "comments": 5,
      "points": 16,
      "time": "22 minutes ago"
    },
    {
      "title": "CLion Nova Explodes onto the C and C++ Development Scenejetbrains.com",
      "link": "https://blog.jetbrains.com/clion/2023/11/clion-nova/",
      "authorName": "3dsboy08",
      "comments": 0,
      "points": 32,
      "time": "34 minutes ago"
    },
    {
      "title": "Sharing Screen with GPT 4 visionloom.com",
      "link": "https://www.loom.com/share/9458bcbf79784162aa62ffb8dd66201b",
      "authorName": "Suneel478",
      "comments": 41,
      "points": 105,
      "time": "5 hours ago"
    },
    {
      "title": "You Win or You Learnthreads.net",
      "link": "https://www.threads.net/@waxpancake/post/CzbS-cVuGgn",
      "authorName": "Tomte",
      "comments": 0,
      "points": 9,
      "time": "1 hour ago"
    },
    {
      "title": "The Netwide Assembler (NASM)nasm.us",
      "link": "https://www.nasm.us/",
      "authorName": "gjvc",
      "comments": 11,
      "points": 44,
      "time": "4 hours ago"
    },
    {
      "title": "Olive oil soars, and thieves go after century-old trees in the Mediterraneanlatimes.com",
      "link": "https://www.latimes.com/world-nation/story/2023-11-08/olive-oil-price-soars-thieves-target-old-trees",
      "authorName": "aa_is_op",
      "comments": 17,
      "points": 41,
      "time": "1 hour ago"
    },
    {
      "title": "Show HN: QBasic 4.5 on Androidgithub.com/ianatha",
      "link": "https://github.com/ianatha/bababasic",
      "authorName": "thatha7777",
      "comments": 40,
      "points": 94,
      "time": "6 hours ago"
    },
    {
      "title": "Using GPT-4 Vision with Vimium to browse the webgithub.com/ishan0102",
      "link": "https://github.com/ishan0102/vimGPT",
      "authorName": "wvoch235",
      "comments": 97,
      "points": 318,
      "time": "13 hours ago"
    },
    {
      "title": "Ploomber (YC W22) Is Hiring Software Engineersycombinator.com",
      "link": "https://www.ycombinator.com/companies/ploomber",
      "authorName": "",
      "comments": 0,
      "points": 0,
      "time": "3 hours ago"
    },
    {
      "title": "Researchers uncover the fastest semiconductor yetieee.org",
      "link": "https://spectrum.ieee.org/semiconductor",
      "authorName": "g0xA52A2A",
      "comments": 53,
      "points": 120,
      "time": "10 hours ago"
    },
    {
      "title": "i386 Assembly Language trick for storing data in .textratfactor.com",
      "link": "https://ratfactor.com/cards/asm-data-in-text",
      "authorName": "ingve",
      "comments": 56,
      "points": 93,
      "time": "9 hours ago"
    },
    {
      "title": "Show HN: I built a tool to get \"Your app was approved/rejected \" alerts on Slackstatused.com",
      "link": "https://statused.com",
      "authorName": "rogerluan",
      "comments": 14,
      "points": 44,
      "time": "6 hours ago"
    },
    {
      "title": "Researchers analysed novels to reveal six story typesbbc.com",
      "link": "https://www.bbc.com/culture/article/20180525-every-story-in-the-world-has-one-of-these-six-basic-plots",
      "authorName": "yamrzou",
      "comments": 54,
      "points": 44,
      "time": "2 hours ago"
    },
    {
      "title": "Design Guidelines for Domain Specific Languagesarxiv.org",
      "link": "https://arxiv.org/abs/1409.2378",
      "authorName": "lr0",
      "comments": 32,
      "points": 106,
      "time": "13 hours ago"
    },
    {
      "title": "Microservices – State of Developer Ecosystem 2022 (JetBrains)jetbrains.com",
      "link": "https://www.jetbrains.com/lp/devecosystem-2022/microservices/",
      "authorName": "nullxone",
      "comments": 8,
      "points": 30,
      "time": "2 hours ago"
    },
    {
      "title": "Show HN: Sipgo (SIP in GO) new relase added dialog supportgithub.com/emiago",
      "link": "https://github.com/emiago/sipgo",
      "authorName": "emiago123",
      "comments": 0,
      "points": 17,
      "time": "5 hours ago"
    },
    {
      "title": "Nuclear Energy Project in Idaho Is Cancelednytimes.com",
      "link": "https://www.nytimes.com/2023/11/08/business/energy-environment/nuclear-energy-idaho-nuscale.html",
      "authorName": "watchdogtimer",
      "comments": 2,
      "points": 23,
      "time": "3 hours ago"
    },
    {
      "title": "Scandinavian spy drama: An intelligence chief who came under state surveillancetheguardian.com",
      "link": "https://www.theguardian.com/world/2023/oct/02/scandinavian-spy-drama-the-intelligence-chief-who-came-under-state-surveillance",
      "authorName": "danielovichdk",
      "comments": 56,
      "points": 109,
      "time": "7 hours ago"
    },
    {
      "title": "System76's Lemur Pro Laptop Is Just a Nice Linux Laptopwired.com",
      "link": "https://www.wired.com/review/system-76-lemur-pro-laptop/",
      "authorName": "pbui",
      "comments": 49,
      "points": 50,
      "time": "2 hours ago"
    },
    {
      "title": "Curves and L-Systemsapieceofthepi.substack.com",
      "link": "https://apieceofthepi.substack.com/p/curves-and-l-systems",
      "authorName": "todsacerdoti",
      "comments": 7,
      "points": 60,
      "time": "12 hours ago"
    },
    {
      "title": "Hoppscotch desktop applicationhoppscotch.com",
      "link": "https://hoppscotch.com/blog/introducing-hoppscotch-desktop-application",
      "authorName": "0xedb",
      "comments": 47,
      "points": 53,
      "time": "5 hours ago"
    },
    {
      "title": "Ask HN: As a first-time solopreneur how would you go about hiring the first team",
      "link": "item?id=38203128",
      "authorName": "_448",
      "comments": 71,
      "points": 72,
      "time": "5 hours ago"
    }
  ],
  "101-200": [
    {
      "title": "Sony announces a9 III: first full-frame global shutter cameradpreview.com",
      "link": "https://www.dpreview.com/news/7271416294/sony-announces-a9-iii-world-s-first-full-frame-global-shutter-camera",
      "authorName": "ksec",
      "comments": 111,
      "points": 206,
      "time": "11 hours ago"
    },
    {
      "title": "Interesting Bugs Caught by ESLint's no-constant-binary-expression (2022)eslint.org",
      "link": "https://eslint.org/blog/2022/07/interesting-bugs-caught-by-no-constant-binary-expression/",
      "authorName": "CharlesW",
      "comments": 135,
      "points": 313,
      "time": "19 hours ago"
    }
  ],
  "201-300": [
    {
      "title": "SciPy builds for Python 3.12 on Windows are a minor miraclequansight.org",
      "link": "https://labs.quansight.org/blog/building-scipy-with-flang",
      "authorName": "todsacerdoti",
      "comments": 225,
      "points": 424,
      "time": "19 hours ago"
    }
  ],
  "301-n": [
    {
      "title": "Omegle 2009-2023omegle.com",
      "link": "https://www.omegle.com/",
      "authorName": "liamcottle",
      "comments": 819,
      "points": 2016,
      "time": "15 hours ago"
    },
    {
      "title": "Home Assistant blocked from integrating with Garage Door opener APIhome-assistant.io",
      "link": "https://www.home-assistant.io/blog/2023/11/06/removal-of-myq-integration/",
      "authorName": "eamonnsullivan",
      "comments": 579,
      "points": 1081,
      "time": "1 day ago"
    }
  ]
}
