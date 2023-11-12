import { MenuEntry } from 'degendexuikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Dogechain',
        href: 'https://degendex.xyz/doge/',
      },
      {
        label: 'BSC',
        href: 'https://degendex.xyz/',
      },
    ],
  }
]

export default config
