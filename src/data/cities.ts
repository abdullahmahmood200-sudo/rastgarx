// City landing pages at /locations/<slug>. Each city has its own copy so the
// pages are not duplicates of each other. Rastup works with every city remotely
// from its Islamabad studio, so no page claims a local office.

export interface City {
  slug: string;
  name: string;
  province: string;
  intro: string;      // Opening paragraph, answer-first.
  context: string;    // What the local business scene looks like.
  industries: string[];
  nearby: string[];   // Slugs of related cities for internal links.
}

export const cities: City[] = [
  {
    slug: 'karachi',
    name: 'Karachi',
    province: 'Sindh',
    intro: 'Rastup builds animated, high-converting websites, ad creatives and SEO for Karachi businesses that want more customers from the web, not just a page that exists.',
    context: 'Karachi is Pakistan’s largest city, its financial centre and its main seaport. Competition for attention is fierce, from retail brands in Clifton and DHA to importers and logistics firms around the port, so a slow or generic website loses customers to the next result on Google.',
    industries: ['Retail and e-commerce', 'Import, export and logistics', 'Textiles and garments', 'Real estate', 'Restaurants and food'],
    nearby: ['hyderabad', 'sukkur', 'quetta', 'lahore'],
  },
  {
    slug: 'lahore',
    name: 'Lahore',
    province: 'Punjab',
    intro: 'Rastup is a web design, website development and digital marketing partner for Lahore brands that want a site and ads people remember, and that turn visits into orders and bookings.',
    context: 'Lahore is the capital of Punjab and Pakistan’s second-largest city, known for its food, fashion and education. Local customers compare brands on Instagram and Google before they buy, so design quality and search visibility decide who gets the order.',
    industries: ['Fashion and clothing brands', 'Restaurants and cafés', 'Schools and academies', 'Real estate', 'Clinics and healthcare'],
    nearby: ['sheikhupura', 'gujranwala', 'faisalabad', 'sahiwal'],
  },
  {
    slug: 'islamabad',
    name: 'Islamabad',
    province: 'Islamabad Capital Territory',
    intro: 'Rastup’s studio is in Islamabad. We design and develop animated websites, create ad campaigns and handle SEO for businesses across the capital.',
    context: 'Islamabad is Pakistan’s planned federal capital, home to government offices, embassies, universities and a growing tech and startup scene. Clients here often sell to international buyers or institutions, so a polished, fast website is part of how they are judged.',
    industries: ['Tech startups and software houses', 'Consultancies and NGOs', 'Clinics and healthcare', 'Real estate', 'Education'],
    nearby: ['rawalpindi', 'abbottabad', 'peshawar', 'mardan'],
  },
  {
    slug: 'rawalpindi',
    name: 'Rawalpindi',
    province: 'Punjab',
    intro: 'Rastup builds websites, ad creatives and SEO for Rawalpindi businesses, working from our studio next door in Islamabad.',
    context: 'Rawalpindi is Islamabad’s twin city and one of the busiest trading centres in the north, with markets like Raja Bazaar and Saddar. Many shops and service businesses still rely on walk-ins and word of mouth, so a strong website and local search presence is an easy edge over competitors.',
    industries: ['Retail and wholesale', 'Real estate', 'Clinics and healthcare', 'Schools and academies', 'Home services'],
    nearby: ['islamabad', 'abbottabad', 'gujrat', 'peshawar'],
  },
  {
    slug: 'faisalabad',
    name: 'Faisalabad',
    province: 'Punjab',
    intro: 'Rastup designs and develops websites, ad creatives and SEO for Faisalabad manufacturers and brands that sell to buyers in Pakistan and abroad.',
    context: 'Faisalabad is Pakistan’s textile capital, often called the Manchester of Pakistan, and one of its largest cities. Mills and exporters are judged by international buyers online long before a sample is sent, so a professional website is part of winning the order.',
    industries: ['Textile mills and exporters', 'Home textiles', 'Manufacturing', 'Wholesale trade', 'Education'],
    nearby: ['lahore', 'sargodha', 'sahiwal', 'sheikhupura'],
  },
  {
    slug: 'multan',
    name: 'Multan',
    province: 'Punjab',
    intro: 'Rastup builds websites, ad campaigns and SEO for Multan businesses that want to reach customers beyond South Punjab.',
    context: 'Multan, the City of Saints, is the commercial centre of South Punjab, known for its mangoes, cotton and blue pottery. Local producers and craft businesses can sell across Pakistan and overseas once they have a site and ads that show their products properly.',
    industries: ['Agriculture and agri-trade', 'Handicrafts and blue pottery', 'Retail', 'Clinics and healthcare', 'Education'],
    nearby: ['bahawalpur', 'sahiwal', 'rahim-yar-khan', 'faisalabad'],
  },
  {
    slug: 'peshawar',
    name: 'Peshawar',
    province: 'Khyber Pakhtunkhwa',
    intro: 'Rastup designs websites, creates ads and handles SEO for Peshawar businesses, working remotely from our Islamabad studio.',
    context: 'Peshawar is the capital of Khyber Pakhtunkhwa and one of the oldest cities in South Asia, long a trading gateway towards Afghanistan and Central Asia. Traders, restaurants and service businesses here are moving online, and those who do it well early stand out.',
    industries: ['Trading and wholesale', 'Restaurants and food', 'Real estate', 'Clinics and healthcare', 'Education'],
    nearby: ['mardan', 'islamabad', 'abbottabad', 'rawalpindi'],
  },
  {
    slug: 'sialkot',
    name: 'Sialkot',
    province: 'Punjab',
    intro: 'Rastup builds export-ready websites, product ad creatives and SEO for Sialkot manufacturers who sell to buyers around the world.',
    context: 'Sialkot is known worldwide for sports goods, footballs, surgical instruments and leather products, and most of its manufacturers sell abroad. Overseas buyers check a supplier’s website first, so a fast, credible site with clear product pages directly affects enquiries.',
    industries: ['Sports goods exporters', 'Surgical instruments', 'Leather goods and gloves', 'Apparel', 'B2B manufacturing'],
    nearby: ['gujranwala', 'gujrat', 'lahore', 'sheikhupura'],
  },
  {
    slug: 'gujranwala',
    name: 'Gujranwala',
    province: 'Punjab',
    intro: 'Rastup designs and develops websites, ad creatives and SEO for Gujranwala manufacturers, shops and restaurants.',
    context: 'Gujranwala is one of Punjab’s main industrial cities, with manufacturers of home appliances, metal products and sanitary fittings, and a famous food scene. Product makers here can sell direct to customers nationwide with a proper online store and ads.',
    industries: ['Manufacturing', 'Home appliances', 'Sanitary and hardware', 'Restaurants and food', 'Retail'],
    nearby: ['sialkot', 'lahore', 'gujrat', 'sheikhupura'],
  },
  {
    slug: 'quetta',
    name: 'Quetta',
    province: 'Balochistan',
    intro: 'Rastup builds websites, ad campaigns and SEO for Quetta businesses, working remotely from our Islamabad studio.',
    context: 'Quetta is the capital of Balochistan, known for its fruit orchards, dry fruit trade and its role as a trade route to Iran and Afghanistan. Businesses that sell produce, minerals or transport services can reach buyers across Pakistan with a clear website.',
    industries: ['Fruit and dry fruit trade', 'Mining and minerals', 'Transport and logistics', 'Hospitality', 'Retail'],
    nearby: ['karachi', 'sukkur', 'multan', 'peshawar'],
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    province: 'Sindh',
    intro: 'Rastup designs websites, creates ad creatives and handles SEO for Hyderabad businesses that want more customers online.',
    context: 'Hyderabad is Sindh’s second-largest city, on the banks of the Indus, and is famous for its glass bangles. Its retailers, clinics and makers can compete with Karachi brands for online customers once their website and search presence are in place.',
    industries: ['Retail', 'Bangles and handicrafts', 'Agriculture', 'Clinics and healthcare', 'Education'],
    nearby: ['karachi', 'sukkur', 'rahim-yar-khan', 'quetta'],
  },
  {
    slug: 'abbottabad',
    name: 'Abbottabad',
    province: 'Khyber Pakhtunkhwa',
    intro: 'Rastup builds websites, ads and SEO for Abbottabad hotels, schools and businesses, from our studio a short drive away in Islamabad.',
    context: 'Abbottabad is a hill city in Khyber Pakhtunkhwa, known for its schools and colleges and as a gateway to the Galiyat and the northern areas. Hotels and tour operators here win bookings from visitors who search and compare online before they travel.',
    industries: ['Hotels and tourism', 'Schools and academies', 'Clinics and healthcare', 'Real estate', 'Retail'],
    nearby: ['islamabad', 'rawalpindi', 'mardan', 'peshawar'],
  },
  {
    slug: 'bahawalpur',
    name: 'Bahawalpur',
    province: 'Punjab',
    intro: 'Rastup designs and develops websites, ad creatives and SEO for Bahawalpur businesses, working remotely from Islamabad.',
    context: 'Bahawalpur, a former princely state, is known for palaces like Noor Mahal, its university and as the gateway to the Cholistan desert. Agriculture, education and heritage tourism all benefit from a website that tells their story well.',
    industries: ['Agriculture and cotton', 'Heritage tourism', 'Education', 'Clinics and healthcare', 'Retail'],
    nearby: ['multan', 'rahim-yar-khan', 'sahiwal', 'faisalabad'],
  },
  {
    slug: 'sargodha',
    name: 'Sargodha',
    province: 'Punjab',
    intro: 'Rastup builds websites, ad campaigns and SEO for Sargodha businesses, from citrus exporters to local retailers.',
    context: 'Sargodha is known as the citrus capital of Pakistan, growing much of the country’s famous kinnow. Growers and exporters can reach international buyers, and local businesses can reach more customers, with a clear website and search presence.',
    industries: ['Citrus and agri exports', 'Agriculture', 'Education', 'Retail', 'Clinics and healthcare'],
    nearby: ['faisalabad', 'gujrat', 'lahore', 'islamabad'],
  },
  {
    slug: 'sukkur',
    name: 'Sukkur',
    province: 'Sindh',
    intro: 'Rastup designs websites, creates ads and handles SEO for Sukkur businesses, working remotely from our Islamabad studio.',
    context: 'Sukkur sits on the Indus and is home to the Sukkur Barrage. It is the trading centre of upper Sindh, and the surrounding region is known for its dates. Traders and transport firms here can sell beyond the region with the right online presence.',
    industries: ['Dates and agri trade', 'Wholesale', 'Transport and logistics', 'Clinics and healthcare', 'Education'],
    nearby: ['hyderabad', 'rahim-yar-khan', 'karachi', 'quetta'],
  },
  {
    slug: 'gujrat',
    name: 'Gujrat',
    province: 'Punjab',
    intro: 'Rastup builds websites, product ad creatives and SEO for Gujrat manufacturers and businesses.',
    context: 'Gujrat is known for its electric fans, ceramics and furniture, and has a large overseas Pakistani community. Manufacturers can sell direct to customers nationwide, and service businesses can reach families abroad, through a strong website and ads.',
    industries: ['Electric fans and appliances', 'Ceramics', 'Furniture', 'Real estate', 'Retail'],
    nearby: ['gujranwala', 'sialkot', 'rawalpindi', 'sargodha'],
  },
  {
    slug: 'sahiwal',
    name: 'Sahiwal',
    province: 'Punjab',
    intro: 'Rastup designs and develops websites, ad creatives and SEO for Sahiwal businesses, working remotely from Islamabad.',
    context: 'Sahiwal is an agricultural district between Lahore and Multan, and gives its name to the Sahiwal cattle breed known for its milk. Dairy, livestock and farm businesses here can build trust and reach buyers with a professional website.',
    industries: ['Dairy and livestock', 'Agriculture', 'Retail', 'Education', 'Clinics and healthcare'],
    nearby: ['lahore', 'multan', 'faisalabad', 'bahawalpur'],
  },
  {
    slug: 'mardan',
    name: 'Mardan',
    province: 'Khyber Pakhtunkhwa',
    intro: 'Rastup builds websites, ad campaigns and SEO for Mardan businesses, from our Islamabad studio.',
    context: 'Mardan is one of the largest cities in Khyber Pakhtunkhwa, at the heart of a farming region known for sugarcane and tobacco, and close to the Takht-i-Bahi ruins. Agricultural, education and tourism businesses can all reach more people online.',
    industries: ['Agriculture', 'Sugar and tobacco', 'Education', 'Retail', 'Tourism'],
    nearby: ['peshawar', 'islamabad', 'abbottabad', 'rawalpindi'],
  },
  {
    slug: 'rahim-yar-khan',
    name: 'Rahim Yar Khan',
    province: 'Punjab',
    intro: 'Rastup designs websites, creates ads and handles SEO for Rahim Yar Khan businesses, working remotely from Islamabad.',
    context: 'Rahim Yar Khan in South Punjab is an agricultural and industrial centre, with sugar mills, cotton and fertiliser plants. Suppliers, dealers and local businesses can win more customers with a website that is easy to find and easy to trust.',
    industries: ['Sugar and agri-industry', 'Cotton', 'Fertiliser and agri inputs', 'Retail', 'Clinics and healthcare'],
    nearby: ['bahawalpur', 'sukkur', 'multan', 'hyderabad'],
  },
  {
    slug: 'sheikhupura',
    name: 'Sheikhupura',
    province: 'Punjab',
    intro: 'Rastup builds websites, ad creatives and SEO for Sheikhupura manufacturers and businesses, just outside Lahore.',
    context: 'Sheikhupura is an industrial city next to Lahore, with large industrial estates, rice mills and the historic Hiran Minar. Factories and suppliers here sell to buyers across Pakistan and abroad, and a credible website is often their first impression.',
    industries: ['Manufacturing', 'Rice mills', 'Industrial suppliers', 'Real estate', 'Retail'],
    nearby: ['lahore', 'gujranwala', 'faisalabad', 'sialkot'],
  },
];

export const cityBySlug = Object.fromEntries(cities.map((c) => [c.slug, c]));
export const cityHref = (c: City) => `/locations/${c.slug}`;

// Services listed on every city page. {city} is replaced with the city name.
export const cityServices = [
  { title: 'Website development', body: 'Custom websites built from scratch for {city} businesses: fast, mobile-first, secure and easy to update.' },
  { title: 'Web design', body: 'Animated, brand-led web design that makes your business look like the leader in {city} and turns visitors into enquiries.' },
  { title: 'E-commerce websites', body: 'Online stores that make it simple for customers in {city} and across Pakistan to browse, order and pay.' },
  { title: 'Digital marketing & ads', body: 'Scroll-stopping ad creatives for social media, posters and billboards that put your product front and centre.' },
  { title: 'SEO services', body: 'Technical, on-page and local SEO so people searching in {city} find your business on Google and Google Maps.' },
  { title: 'AI voice operator', body: 'An AI operator that answers every call on the first ring, day or night, and books the customer in.' },
];
