import { useEffect } from 'react'
import useGetCakeBusdLpPrice from 'hooks/useGetCorisBusdLpPrice'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetCakeBusdLpPrice()
  const cakePriceUsd = priceData ? Number(priceData) : 0

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `DegenDex - DDEX${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
