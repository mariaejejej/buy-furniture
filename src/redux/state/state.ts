
export type user ={
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
    ratingValue: number,
    price: string
};

export type state = {
  imgList: imgItem[],
  imgListFiltered: imgItem[],
  users: user[]
}
const itemData = [
  {
    img: 'https://assets.wfcdn.com/im/32285462/resize-h800-w800%5Ecompr-r85/2477/247746995/Isenbert+6+-+Drawer+Dresser.jpg',
    title: 'Dresser',
    author: '@bkristastucchio',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://assets.wfcdn.com/im/54725037/resize-h800-w800%5Ecompr-r85/2410/241018628/Tianna+Diamond+Tufted+Upholstered+Bed+Frame+with+Wingback+Headboard.jpg',
    title: 'Bed',
    author: '@rollelflex_graphy726',
    ratingValue: Math.round(Math.random() * 5),
    price: (Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    ratingValue: Math.round(Math.random() * 5),
    price: 

      (Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    ratingValue: Math.round(Math.random() * 5),
    price: 

     ( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    ratingValue: Math.round(Math.random() * 5),
    price: 

      (Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    ratingValue: Math.round(Math.random() * 5),
    price: 

      (Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    ratingValue: Math.round(Math.random() * 5),
    price:( 

      Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    ratingValue: Math.round(Math.random() * 5),
    price:( 

      Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    ratingValue: Math.round(Math.random() * 5),
    price:( Math.random() * 1000).toFixed(2) 
  },
];
export const getDefaultState = (): state => ({
  imgList: itemData,
  imgListFiltered: itemData,
  users: []
})