
export type user = {
  id: string,
  name: string,
  username: string,
  email: string,
  password: string,
}

export type imgItem = {
  img: string,
  title: string,
  author: string,
  category: string,
  ratingValue: number,
  price: string
};

export type state = {
  imgList: imgItem[],
  imgListFiltered: imgItem[],
  users: user[],
  userLoged?: user
}
const itemData:imgItem[]  = [
  {
    img: 'https://assets.wfcdn.com/im/32285462/resize-h800-w800%5Ecompr-r85/2477/247746995/Isenbert+6+-+Drawer+Dresser.jpg',
    title: 'Dresser',
    author: '@bkristastucchio',
    category: 'bedroom',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://iconbydesign.com/cdn/shop/files/Mosman-MagnusDiningRound14-1.jpg?v=1710966693',
    title: 'Round Dining Table',
    author: '@bkristastucchio',
    category: 'dining',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://cdn.shopify.com/s/files/1/2268/9819/files/amelia-whitewash-dining-table-set-6-seater-freya-oatmeal-carver-chairs-with-whitewash-oak-legs-laura-james-1.jpg?v=1718020921',
    title: 'Square Dining Table',
    author: '@bkristastucchio',
    category: 'dining',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://www.branchfurniture.com/cdn/shop/files/baltic221new.jpg?v=1717687130',
    title: 'Ergonomic Chair',
    author: '@bkristastucchio',
    category: 'office',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://m.media-amazon.com/images/I/81Foum06q6L._AC_UF894,1000_QL80_.jpg',
    title: 'Modern Book Shelf',
    author: '@bkristastucchio',
    category: 'office',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },

  {
    img: 'https://www.mocka.com.au/cdn/shop/files/T03710_Square_01.jpg?v=1717075093',
    title: 'Chair',
    author: '@bkristastucchio',
    category: 'office',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://m.media-amazon.com/images/I/81zYWf9m3CL._AC_UF894,1000_QL80_.jpg',
    title: 'Book Shelve',
    author: '@bkristastucchio',
    category: 'office',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://westcoastmodernla.com/cdn/shop/products/IMG_7948-rotated_f21f9e48-79e2-44ac-a071-635aecc7f872.jpg?v=1684339755',
    title: 'Modern Chair',
    author: '@bkristastucchio',
    category: 'office',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://beautifulbedco.com/cdn/shop/products/beautiful-bed-company-simply-scandinavian-4-night-stand-white-1_2_900x.jpg?v=1696940513',
    title: 'White Nightstand',
    author: '@bkristastucchio',
    category: 'bedroom',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://i5.walmartimages.com/seo/Better-Homes-Gardens-Juliet-Nightstand-with-USB-Light-Honey-Finish_795fda9c-e4c7-4aa9-9ee4-dd755cc83029.b1a21dfd75559a51047831af17b8c7d7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    title: 'Wood Nightstand',
    author: '@bkristastucchio',
    category: 'bedroom',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },

  {
    img: 'https://m.media-amazon.com/images/I/8191zaQ4qIL.jpg',
    title: 'Black Dresser',
    author: '@bkristastucchio',
    category: 'bedroom',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  },
  {
    img: 'https://assets.wfcdn.com/im/54725037/resize-h800-w800%5Ecompr-r85/2410/241018628/Tianna+Diamond+Tufted+Upholstered+Bed+Frame+with+Wingback+Headboard.jpg',
    title: 'Bed',
    author: '@rollelflex_graphy726',
    category: 'bedroom',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2)
  }
];
export const getDefaultState = (): state => ({
  imgList: itemData,
  imgListFiltered: itemData,
  users: [],
  userLoged: undefined
})