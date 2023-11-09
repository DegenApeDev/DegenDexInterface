import React, { useContext } from 'react'
import { Menu as UikitMenu} from 'degendexuikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetCakeBusdLpPrice from 'hooks/useGetCorisBusdLpPrice'
import useAuth from 'hooks/useAuth'
import links from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetCakeBusdLpPrice()
  const cakePriceUsd = priceData ? Number(priceData) : undefined

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      logoText="DegenDex"
      cakePriceUsd={cakePriceUsd}
      {...props}
    />
  )
}

export default Menu
