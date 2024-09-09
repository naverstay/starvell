import { imgSrc4 as ImgSrc44 } from '../MD/md'

const image5 = '/mockImages/image5.jpg'
const image6 = '/mockImages/image6.jpg'
const image7 = '/mockImages/image7.jpg'

export const initialBasket = {
  id: 6,
  is_nft_included: false,
  is_public: true,
  createdAt: '2023-09-15T12:00:00.000Z',
  updatedAt: '2023-09-15T12:00:00.000Z',
  publishedAt: '2023-09-15T12:00:00.000Z',
  model_price_at_order_date: undefined,
  nft_price_at_order_date: undefined,
  print: {
    id: 419,
    is_nft: false,
    is_favorite: true,
    image_src: 'https://example.com/images/print419.jpg',
    prompt_ru: 'Промпт на русском языке для принта 419',
    prompt_en: 'Prompt in English for print 419',
    is_upscaled: false,
    ai_model_print_id: 'model123-print419',
    createdAt: '2023-09-10T12:00:00.000Z',
    updatedAt: '2023-09-10T12:00:00.000Z',
    publishedAt: '2023-09-10T12:00:00.000Z',
    clean_image_src: 'https://example.com/images/print419-clean.jpg',
  },
  model_variation: {
    id: 2,
    color: 'black',
    size_eu: 'm',
    price: 99.99,
    availability_status: 'In stock',
    days_for_production: 0,
    size_ru: '48',
    is_default: false,
    createdAt: '2023-09-01T12:00:00.000Z',
    updatedAt: '2023-09-01T12:00:00.000Z',
    publishedAt: '2023-09-01T12:00:00.000Z',
    model: {
      id: 1,
      type: 't-shirt',
      name: 'Cool T-Shirt',
      size_chart:
        '|   | Талия | Бедра | Грудь |\n|---|-------|-------|-------|\n| S | 94см  | 94см  | 94см  |\n| M | 96см  | 96см  | 96см  |\n| L | 99см  | 99см  | 99см  |',
      description: 'This is a really cool t-shirt!',
      availability_status: 'In stock',
      is_default: true,
      about: 'Learn more about this cool t-shirt...',
      clothing_composition: '100% cotton',
      nft_price: 0.1,
      createdAt: '2023-08-31T12:00:00.000Z',
      updatedAt: '2023-08-31T12:00:00.000Z',
      publishedAt: '2023-08-31T12:00:00.000Z',
    },
  },
}

// export const initialBasket = {
//   printModelVariationId: 14,
//   modelVariationId: 1,
//   name: "AIPE HOODIE 1",
//   sizes: "",
//   size: "M",
//   price: 5490,
//   withNFT: true,
//   printSrc: ImgSrc44,
//   printDescription: "Башня в воздухе на фоне розового облака",
// };

export const initialNFTs = [
  {
    name: 'Принт от 30 янв',
    src: ImgSrc44,
    description: 'Макака с бананом и странным фоном в карамели',
    withNFT: true,
    my: false,
  },
  {
    name: 'Принт от 30 янв',
    src: image5,
    description: 'Постоянный количественный рост ждёт нас всех',
    withNFT: true,
    my: false,
  },
  {
    name: 'Принт от 30 янв',
    src: image6,
    description: 'Постоянный количественный рост идёт вверх',
    withNFT: false,
    my: true,
  },
  {
    name: 'Принт от 30 янв',
    src: image7,
    description: 'Постоянный количественный росток двигатель обезьян',
    withNFT: false,
    my: false,
  },
]
