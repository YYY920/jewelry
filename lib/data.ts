const data = {
  headerMenus: [
    {
      name: "Today's Deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'New Arrivals',
      href: '/search?tag=new-arrival',
    },
    {
      name: 'Featured Products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-seller',
    },
    {
      name: 'Browsing History',
      href: '/#browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/page/customer-service',
    },
    {
      name: 'About Us',
      href: '/page/about-us',
    },
    {
      name: 'Help',
      href: '/page/help',
    },
  ],
  carousels: [
    {
      title: 'Elegant Bracelet Collection',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.png',
      url: '/search?category=Bracelets',
      isPublished: true,
    },
    {
      title: 'Luxury Rings Selection',
      buttonCaption: 'Explore Now',
      image: '/images/banner2.png',
      url: '/search?category=Rings',
      isPublished: true,
    },
    {
      title: 'Stunning Necklace Showcase',
      buttonCaption: 'See More',
      image: '/images/banner3.png',
      url: '/search?category=Necklaces',
      isPublished: true,
    },
  ],
}

export default data
