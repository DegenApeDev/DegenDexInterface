import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetCorisBusdLpPrice = () => {
  const corisAddress = '0x62c193b240b54f4797d380f591431e52f5f55d76'
  const busdAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
  const inputCurrency = useCurrency(corisAddress)
  const outputCurrency = useCurrency(busdAddress)

  const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
  const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
  const price = bestTradeExactIn?.executionPrice.toSignificant(6)
  return price ? parseFloat(price) : undefined
}

export default useGetCorisBusdLpPrice
