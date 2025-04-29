import ad1 from '/images/ad1.jpg'
import ad2 from '/images/ad2.jpg'
import ad3 from '/images/ad3.jpg'
import ad4 from '/images/ad4.jpg'
import ad5 from '/images/ad5.jpg'
import ad6 from '/images/ad6.jpg'
import ad7 from '/images/ad7.jpg'
import ad8 from '/images/ad8.jpg'
import ad9 from '/images/ad9.jpg'
import ad10 from '/images/ad10.jpg'
import ad11 from '/images/ad11.jpg'
import ad12 from '/images/ad12.jpg'
import ad13 from '/images/ad13.jpg'
import ad14 from '/images/ad14.jpg'
import ad15 from '/images/ad15.jpg'
import ad16 from '/images/ad16.jpg'
import ad17 from '/images/ad17.jpg'
import ad18 from '/images/ad18.jpg'
import ad19 from '/images/ad19.jpg'
import ad20 from '/images/ad20.jpg'
import ad21 from '/images/ad21.jpg'
import ad22 from '/images/ad22.jpg'
import ad23 from '/images/ad23.jpg'


export interface Theme {
  title: string
  description: string
  coverImage: string
  gallery: string[]
}

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export const themes: Theme[] = [
  {
    title: "Hanok Korean BBQ",
    description: "Example",
    coverImage: ad1,
    gallery: shuffleArray([
      ad1,
      ad2,
      ad3,
      ad4,
      ad5,
    ])
  },
  {
    title: "Public Transportation",
    description: "",
    coverImage: ad2,
    gallery: shuffleArray([
     ad6,
     ad7,
     ad8,
     ad9,
     ad10
    ])
  },
  {
    title: "Nature",
    description: "",
    coverImage: ad3,
    gallery: shuffleArray([
     ad11,
     ad12,
     ad13,
     ad14,
     ad15,
     ad16,
     ad17,
     ad18,
     ad19,
     ad20,
     ad21,
     ad22,
     ad23,
    ])
  }
]