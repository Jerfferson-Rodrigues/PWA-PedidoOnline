// import { useSnack } from '../../../hooks/useSnack'

import { Head } from '../../../components/Head'
import { Snacks } from '../../../components/Snacks'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Pizzas() {
  // const { pizzas } = useSnack()

  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Calabresa',
      description:
        'Pizza recheada com calabresa, cebola, mussarela, orégano e azeitona, tendo uma borda recheada com catupiry.',
      price: 25,
      image: 'https://i.imgur.com/5rjJGkV.jpg',
    },
    {
      id: 2,
      snack: 'pizza',
      name: 'Portuguesa',
      description:
        'Pizza recheada com presunto, mussarela, ovo, cebola, azeitona, orégano, tomate e molho de tomate, tendo uma borda recheada com catupiry.',
      price: 28.5,
      image: 'https://i.imgur.com/WCoyGoI.png',
    },
    {
      id: 3,
      snack: 'pizza',
      name: 'Frango com Catupiry',
      description:
        'Pizza recheada com frango, catupiry e brócolis, tendo uma borda recheada com catupiry.',
      price: 24,
      image: 'https://i.imgur.com/BuXrO8d.jpg',
    },
    {
      id: 4,
      snack: 'pizza',
      name: 'Napolitana',
      description:
        'Pizza recheada com queijo, mussarela, tomate e couve, tendo uma borda recheada com catupiry.',
      price: 30,
      image: 'https://i.imgur.com/u3DfvCE.jpg',
    },
    {
      id: 5,
      snack: 'pizza',
      name: 'Mussarela',
      description: 'Pizza recheada com mussarela, tendo uma borda recheada com catupiry. ',
      price: 20.5,
      image: 'https://i.imgur.com/kPNXpa0.jpg',
    },
    {
      id: 6,
      snack: 'pizza',
      name: 'Marguerita',
      description:
        'Pizza recheada com calabresa, mussarela, cebola, azeitona e orégano, tendo uma borda recheada com catupiry.',
      price: 25.5,
      image: 'https://i.imgur.com/AsEfsZN.jpg',
    },
    {
      id: 7,
      snack: 'pizza',
      name: 'Brigadeiro com Morango',
      description: 'Pizza doce recheada com brigadeiro e morango.',
      price: 35.0,
      image: 'https://i.imgur.com/43yC2Ap.jpg',
    },
    {
      id: 8,
      snack: 'pizza',
      name: 'Banana',
      description: 'Pizza doce recheada com banana e leite condensado.',
      price: 33.5,
      image: 'https://i.imgur.com/Pcrgg1P.jpg',
    },
    {
      id: 9,
      snack: 'pizza',
      name: 'Chocolate',
      description: 'Pizza doce recheada com chocolate e bolinhas de chocolate.',
      price: 30,
      image: 'https://i.imgur.com/RahAKkH.jpg',
    },
  ]

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitle>Pizzas</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
