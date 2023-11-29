import {
  box, money, briefcase, hands, bank, Loan, building, invest, coin, book, arrowTop, facebook, twitter,
  linkedin, email, phone, location, quotes, discussion, people, secureAccount, wallet, lamp, server,
  greyBriefcase, mission, vision, company, shakehand, presentation, signature,
  boxes, papers, stars, currency
} from "../assets";

export const links = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Careers",
    link: "/careers",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Security",
    link: "/security",
  },
];

export const ourProducts = {
  description:
    "Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations",
  buttons: [
    {
      id: 1,
      text: "For Individuals",
    },
    {
      id: 2,
      text: "For Businesses",
    },
  ],
  contentIndividuals: [
    {
      id: 1,
      icon: briefcase,
      title: "Checking Accounts",
      desc: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.",
    },
    {
      id: 2,
      icon: box,
      title: "Savings Accounts",
      desc: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.",
    },
    {
      id: 3,
      icon: money,
      title: "Loans and Mortgages",
      desc: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.",
    },
  ],
  contentBusinesses: [
    {
      id: 1,
      icon: briefcase,
      title: "Business Checking Accounts",
      desc: "Enjoy easy and convenient access to your business funds with our range of business checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.Business Savings.",
    },
    {
      id: 2,
      icon: box,
      title: "Business Savings Accounts",
      desc: "Build your business savings with our competitive interest rates and flexible business savings account options. Whether you're saving for a specific business goal or want to grow your wealth over time, we have the right account for you. Business Loans and Lines of Credit ",
    },
    {
      id: 3,
      icon: money,
      title: "Business Loans and Mortgages",
      desc: "Realize your business dreams with our flexible business loan and line of credit options. From business startup loans to equipment financing, our experienced loan officers are here to guide you through the application process and help you secure the funds you need to grow your business. Merchant Services",
    },
  ],
};

export const useCases = {
  description:
    "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions",
  individuals: {
    desc: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
    services: [
      {
        id: 1,
        icon: Loan,
        title: "Managing Personal Finances",
      },
      {
        id: 2,
        icon: hands,
        title: "Saving for the Future",
      },
      {
        id: 3,
        icon: bank,
        title: "Homeownership",
      },
      {
        id: 4,
        icon: book,
        title: "Education Funding",
      },
    ],
    statistics: [
      {
        id: 1,
        number: "78%",
        desc: "Secure Retirement Planning",
      },
      {
        id: 2,
        number: "63%",
        desc: "Manageable Debt Consolidation",
      },
      {
        id: 3,
        number: "91%",
        desc: "Reducing financial burdens",
      },
      {
        id: 4,
        number: "85%",
        desc: "Improved financial literacy",
      },
      {
        id: 5,
        number: "72%",
        desc: "Reduced financial stress",
      },
      {
        id: 6,
        number: "68%",
        desc: "Increased financial security",
      },
    ],
  },
  business: {
    desc: " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
    services: [
      {
        id: 1,
        icon: building,
        title: "Startups and Entrepreneurs",
      },
      {
        id: 2,
        icon: money,
        title: "Cash Flow Management",
      },
      {
        id: 3,
        icon: invest,
        title: "Business Expansion",
      },
      {
        id: 4,
        icon: coin,
        title: "Payment Solutions",
      },
    ],
    statistics: [
      {
        id: 1,
        number: "65%",
        desc: "Cash Flow Management",
      },
      {
        id: 2,
        number: "70%",
        desc: "Drive Business Expansion",
      },
      {
        id: 3,
        number: "45%",
        desc: "Streamline payroll processing",
      },
      {
        id: 4,
        number: "82%",
        desc: "Improved operational efficiency",
      },
      {
        id: 5,
        number: "75%",
        desc: "Increased revenue",
      },
      {
        id: 6,
        number: "62%",
        desc: "Reduced environmental impact",
      },
    ],
  },
};

export const features = {
  description:
    "Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience",
  sidBar: [
    {
      id: 1,
      title: "Online Banking",
    },
    {
      id: 2,
      title: "Financial Tools",
    },
    {
      id: 3,
      title: "Customer Support",
    },
  ],
  onlineBanking: [
    {
      id: 1,
      icon: arrowTop,
      title: "24/7 Account Access",
      desc: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
    },
    {
      id: 2,
      icon: arrowTop,
      title: "Mobile Banking App",
      desc: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
    },
    {
      id: 3,
      icon: arrowTop,
      title: "Secure Transactions",
      desc: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
    },
    {
      id: 4,
      icon: arrowTop,
      title: "Bill Pay and Transfers",
      desc: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
    },
  ],
  financialTools: [
    {
      id: 1,
      icon: arrowTop,
      title: "Budgeting Tools",
      desc: "Create and track budgets to help you reach your financial goals.",
    },
    {
      id: 2,
      icon: arrowTop,
      title: "Investment Tools",
      desc: "Research and invest in stocks, bonds, and ETFs with ease.",
    },
    {
      id: 3,
      icon: arrowTop,
      title: "Retirement Planning Tools",
      desc: "Plan for your future with our retirement planning tools.",
    },
    {
      id: 4,
      icon: arrowTop,
      title: "Tax Planning Tools",
      desc: "Minimize your tax liability with our tax planning tools.",
    },
  ],
  customerSupport: [
    {
      id: 1,
      icon: arrowTop,
      title: "Live Chat",
      desc: "Get help from a real person quickly and easily with our live chat feature.",
    },
    {
      id: 2,
      icon: arrowTop,
      title: "Phone Support",
      desc: "Call us anytime, day or night, and we'll be happy to help.",
    },
    {
      id: 3,
      icon: arrowTop,
      title: "Email Support",
      desc: "Email us your question and we'll respond promptly.",
    },
    {
      id: 4,
      icon: arrowTop,
      title: "FAQ",
      desc: "Find answers to common questions in our FAQ section.",
    },
  ],
};

export const FAQdata = {
  description:
    "Still you have any questions? Contact our Team via support@yourbank.com",
  FAQContent: [
    {
      id: 1,
      title: "How do I open an account with YourBank?",
      desc: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
    },
    {
      id: 2,
      title: "What documents do I need to provide to apply for a loan?",
      desc: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
      id: 3,
      title: "How can I access my accounts online?",
      desc: 'Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven\'t registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.',
    },
    {
      id: 4,
      title: "Are my transactions and personal information secure?",
      desc: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
    },
    {
      id: 5,
      title: "How do I close my account with YourBank?",
      desc: "To close your account with YourBank, please contact our customer support team. We will be happy to assist you with the process and answer any questions you may have.",
    },
    {
      id: 6,
      title: "What are the different types of loans offered by YourBank?",
      desc: "YourBank offers a variety of loans to meet your individual needs. We offer personal loans, student loans, auto loans, home loans, and business loans. To learn more about our loan products, please visit our website or contact one of our loan officers.",
    },
    {
      id: 7,
      title: "How do I transfer money between my accounts?",
      desc: "To transfer money between your accounts, you can log in to online banking or use our mobile app. Simply select the accounts you want to transfer money between and enter the amount you want to transfer. You can also set up recurring transfers to automatically transfer money between your accounts on a regular basis.",
    },
    {
      id: 8,
      title: "How do I report a lost or stolen debit card?",
      desc: "If your debit card is lost or stolen, please contact our customer support team immediately. We will cancel your card and issue you a new one. You can also report a lost or stolen card online or through our mobile app.",
    },
  ],
};

export const CTAData = {
  title: "Start your financial journey with",
  description:
    "Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service",
};

export const footerData = {
  contact: [
    {
      id: 1,
      title: "email",
      icon: email,
      content: "hello@skillbirdge.com",
    },
    {
      id: 2,
      title: "phone",
      icon: phone,
      content: "+91 91813 23 2309",
    },
    {
      id: 3,
      title: "location",
      icon: location,
      content: "Somewhere in the World",
    },
  ],
  socialMedia: [
    {
      id: 1,
      link: 'https://www.facebook.com/profile.php?id=100053501469803',
      title: "facebook",
      icon: facebook,
    },
    {
      id: 2,
      link: 'https://twitter.com/AXGflash',
      title: "Twitter",
      icon: twitter,
    },
    {
      id: 3,
      link: 'https://www.linkedin.com',
      title: "linkedin",
      icon: linkedin,
    },
  ],
};

export const testimonialsData = {
  description: 'Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey',
  buttons: [
    {
      id: 1,
      text: "For Individuals",
    },
    {
      id: 2,
      text: "For Businesses",
    },
  ],
  individualsContent: [
      {
        id: 1,
        icon: quotes,
        name: 'Sara T',
        content: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
      },
      {
        id: 2,
        icon: quotes,
        name: 'John D',
        content: 'I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.',
      },
      {
        id: 3,
        icon: quotes,
        name: 'Emily G',
        content: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
      },
      {
        id: 4,
        icon: quotes,
        name: "Michael R",
        content: "YourBank is more than just a bank, they're a true partner in my financial journey. Their commitment to customer satisfaction and their dedication to providing innovative solutions have made a significant impact on my life."
      },
      {
        id: 5,
        icon: quotes,
        name: "Jessica L",
        content: "I've always been hesitant to trust banks, but YourBank has completely changed my perspective. Their transparency, ethical practices, and genuine care for their customers have earned my unwavering loyalty."
      },
      {
        id: 6,
        icon: quotes,
        name: "David C",
        content: "YourBank's financial education resources have been a game-changer for me. They've helped me understand my finances better, make informed decisions, and achieve my financial goals. I'm so grateful for their commitment to empowering their customers."
      }
    ],
    businessesContent: [
      {
        id: 1,
        icon: quotes,
        name: "Acme Corporation",
        content: "YourBank has been instrumental in supporting our business growth. Their tailored financing solutions and expert guidance have helped us achieve our financial goals and expand our operations."
      },
      {
        id: 2,
        icon: quotes,
        name: "Beta Enterprises",
        content: "We are incredibly grateful for YourBank's commitment to financial security. Their robust fraud protection measures and proactive approach to risk management have given us peace of mind and allowed us to focus on growing our business."
      },
      {
        id: 3,
        icon: quotes,
        name: "Gamma Industries",
        content: "YourBank's dedication to building strong relationships with their clients has been invaluable to our business. Their personalized service and understanding of our industry needs have made them a trusted partner in our success."
      },
      {
        id: 4,
        icon: quotes,
        name: "Delta Solutions",
        content: "YourBank's innovative digital banking solutions have transformed our financial management processes. Their user-friendly platforms and seamless integration with our accounting systems have streamlined our operations and saved us valuable time."
      },
      {
        id: 5,
        icon: quotes,
        name: "Epsilon Technologies",
        content: "YourBank's expertise in international trade finance has been essential for our global expansion. Their tailored solutions and understanding of complex regulations have enabled us to navigate the complexities of cross-border transactions with confidence."
      },
      {
        id: 6,
        icon: quotes,
        name: "Zeta Consulting",
        content: "YourBank's commitment to innovation has been a driving force behind our success. Their willingness to explore new technologies and develop cutting-edge financial solutions has given us a competitive edge in the market."
      }
    ]
}
export const overviewData = {
  careersPage: {
    description: 'Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.',
    title: ['Welcome to', 'YourBank', 'Careers!'],
    image: discussion,
  },
  aboutPage: {
    head: 'Welcome to YourBank',
    description: 'At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.',
    title: ['Where Banking Meets ', 'Excellence!'],
    image: people,
  },
  securityPage: {
    description: 'At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.',
    title: ['Your Security is Our', 'Top Priority'],
    image: secureAccount,
  }
}

export const ourValuesData = {
  description: 'At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.',
  valuesContent: [
    {
      id: 1,
      title: 'Integrity',
      desc: 'We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.',
    },
    {
      id: 2,
      title: 'Customer Centricity',
      desc: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.',
    },
    {
      id: 3,
      title: 'Collaboration',
      desc: 'We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.',
    },
    {
      id: 4,
      title: 'Innovation',
      desc: 'We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.',
    },
  ]
}

export const benefitsData = {
  description: 'At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.',
  benefitsContent: [
    {
      id: 1,
      icon: invest,
      title: 'Competitive Compensation',
      desc: 'We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.',
    },
    {
      id: 2,
      icon: lamp,
      title: 'Health and Wellness',
      desc: 'We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.',
    },
    {
      id: 3,
      icon: wallet,
      title: 'Retirement Planning',
      desc: 'YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.',
    },
    {
      id: 4,
      icon: server,
      title: 'Work-Life Balance',
      desc: 'We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.',
    },
  ]
}

export const jobOpeningsData = {
  description: 'Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry',
  jobOpeningsContent: {
    relationshipManager: {
      title: 'Relationship Manager',
      location: 'Morocco',
      Department: 'Retail Banking',
      desc: 'As a Relationship Manager at YourBank, you will be responsible for developing and maintaining relationships with our valued customers. You will proactively identify their financial needs and offer tailored solutions to help them achieve their goals. We are seeking individuals with excellent communication skills, a strong sales acumen, and a passion for delivering exceptional customer service.',
      requirements: [
        {
          id: 1,
          icon: greyBriefcase,
          content: "Bachelor's degree in Business, Finance, or a related field",
        },
        {
          id: 2,
          icon: greyBriefcase,
          content: "Minimum of 3 years of experience in sales or relationship management in the banking industry",
        },
        {
          id: 3,
          icon: greyBriefcase,
          content: "Proven track record of meeting and exceeding sales targets",
        },
        {
          id: 4,
          icon: greyBriefcase,
          content: "Excellent interpersonal and negotiation skills",
        },
        {
          id: 5,
          icon: greyBriefcase,
          content: "Strong knowledge of banking products and services",
        },
      ]
    },
    riskAnalyst: {
      title: 'Risk Analyst',
      location: 'Morocco',
      Department: 'Risk Management',
      desc: 'As a Risk Analyst at YourBank, you will play a vital role in identifying and assessing potential risks to our organization. You will analyze data, conduct risk assessments, and develop strategies to mitigate risks. We are looking for detail-oriented individuals with strong analytical skills and a solid understanding of risk management principles.',
      requirements: [
        {
          id: 1,
          icon: greyBriefcase,
          content: "Bachelor's degree in Finance, Economics, or a related field",
        },
        {
          id: 2,
          icon: greyBriefcase,
          content: "Minimum of 2 years of experience in risk management or a similar role",
        },
        {
          id: 3,
          icon: greyBriefcase,
          content: "Proficiency in risk analysis tools and techniques",
        },
        {
          id: 4,
          icon: greyBriefcase,
          content: "Strong analytical and problem-solving skills",
        },
        {
          id: 5,
          icon: greyBriefcase,
          content: "Knowledge of regulatory requirements and industry best practices",
        },
      ]
    },
    iTSecuritySpecialist: {
      title: 'Risk Analyst',
      location: 'Morocco',
      Department: 'Information Technology',
      desc: 'As an IT Security Specialist at YourBank, you will be responsible for ensuring the security and integrity of our information systems. You will develop and implement security protocols, conduct vulnerability assessments, and respond to security incidents. We are seeking individuals with a strong technical background, knowledge of cybersecurity best practices, and a commitment to maintaining the confidentiality of customer data.',
      requirements: [
        {
          id: 1,
          icon: greyBriefcase,
          content: "Bachelor's degree in Computer Science, Information Security, or a related field",
        },
        {
          id: 2,
          icon: greyBriefcase,
          content: "Minimum of 5 years of experience in IT security or a similar role",
        },
        {
          id: 3,
          icon: greyBriefcase,
          content: "In-depth knowledge of network security protocols and technologies",
        },
        {
          id: 4,
          icon: greyBriefcase,
          content: "Familiarity with regulatory frameworks such as PCI DSS and GDPR",
        },
        {
          id: 5,
          icon: greyBriefcase,
          content: "Professional certifications such as CISSP or CISM are preferred",
        },
      ]
    },
  }
}
export const missionAndVisionContent = {
  description: 'We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development',
  missionContent: {
    image: mission,
    title: 'Mission',
    desc: 'At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.'
  },
  visionContent: {
    image: vision,
    title: 'Vision',
    desc: 'Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.'
  }
}

export const pressReleasesData = {
  description: 'Stay updated with the latest happenings and exciting developments at YourBank through our press releases.',
  pressReleasesContent: [
    {
      id: 1,
      title: 'YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction',
      image: shakehand,
      location: 'Morocco',
      date: '11/18/2025',
      desc: 'YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.',
    },
    {
      id: 2,
      title: 'YourBank Expands Branch Network with Opening of New Location in Chennai',
      image: company,
      location: 'Morocco',
      date: '11/18/2025',
      desc: 'YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.',
    },
    {
      id: 3,
      title: 'YourBank Partners with Local Nonprofit to Support Financial Education Initiatives',
      image: signature,
      location: 'Morocco',
      date: '11/18/2025',
      desc: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.',
    },
    {
      id: 4,
      title: 'YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility',
      image: presentation,
      location: 'Morocco',
      date: '11/18/2025',
      desc: 'YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.',
    },
  ]
}

export const protectYouData = {
  description: 'At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times',
  protectYouContent: [
    {
      id: 1,
      icon: boxes,
      title: 'Secure Online Banking Platform',
      desc: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.'
    },
    {
      id: 2,
      icon: papers,
      title: 'Multi-Factor Authentication',
      desc: 'To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.'
    },
    {
      id: 3,
      icon: stars,
      title: 'Fraud Monitoring',
      desc: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.'
    },
    {
      id: 4,
      icon: currency,
      title: 'Secure Mobile Banking',
      desc: 'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.'
    },
  ]
}