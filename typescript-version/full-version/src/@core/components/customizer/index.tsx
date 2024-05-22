'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'
import { useMedia } from 'react-use'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { Direction } from '@core/types'

// Icon Imports
import Cog from '@core/svg/Cog'
import Refresh from '@core/svg/Refresh'
import Close from '@menu/svg/Close'
import ModeDark from '@core/svg/ModeDark'
import ModeLight from '@core/svg/ModeLight'
import ModeSystem from '@core/svg/ModeSystem'
import SkinDefault from '@core/svg/SkinDefault'
import SkinBordered from '@core/svg/SkinBordered'
import LayoutVertical from '@core/svg/LayoutVertical'
import LayoutCollapsed from '@core/svg/LayoutCollapsed'
import LayoutHorizontal from '@core/svg/LayoutHorizontal'
import ContentCompact from '@core/svg/ContentCompact'
import ContentWide from '@core/svg/ContentWide'
import DirectionLtr from '@core/svg/DirectionLtr'
import DirectionRtl from '@core/svg/DirectionRtl'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Style Imports
import styles from './styles.module.css'

type CustomizerProps = {
  breakpoint?: `${number}px` | `${number}rem` | `${number}em`
  dir?: Direction
  disableDirection?: boolean
}

const getLocalePath = (pathName: string, locale: string) => {
  if (!pathName) return '/'
  const segments = pathName.split('/')

  segments[1] = locale

  return segments.join('/')
}

const Customizer = ({ breakpoint = '1200px', dir = 'ltr', disableDirection = false }: CustomizerProps) => {
  // States
  const [isOpen, setIsOpen] = useState(false)
  const [direction, setDirection] = useState(dir)

  // Hooks
  const pathName = usePathname()
  const { settings, updateSettings, resetSettings, isSettingsChanged } = useSettings()
  const isSystemDark = useMedia('(prefers-color-scheme: dark)', false)
  const breakpointReached = useMedia(`(max-width: ${breakpoint})`, false)
  const isMobileScreen = useMedia('(max-width: 600px)', false)
  const isBelowLgScreen = useMedia('(max-width: 1200px)', false)

  // Vars
  const ScrollWrapper = isBelowLgScreen ? 'div' : PerfectScrollbar

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Update Settings
  const handleChange = (field: keyof Settings | 'direction', value: Settings[keyof Settings] | Direction) => {
    // Update direction state
    if (field === 'direction') {
      setDirection(value as Direction)
    } else {
      // Update settings in cookie
      updateSettings({ [field]: value })
    }
  }

  return (
    !breakpointReached && (
      <div
        className={classnames('customizer', styles.customizer, {
          [styles.show]: isOpen,
          [styles.smallScreen]: isMobileScreen
        })}
      >
        <div className={styles.toggler} onClick={handleToggle}>
          <Cog />
        </div>
        <div className={styles.header}>
          <div className='flex flex-col gap-2'>
            <h4 className={styles.customizerTitle}>Theme Customizer</h4>
            <p>Customize & Preview in Real Time</p>
          </div>
          <div className='flex gap-4'>
            <div onClick={resetSettings} className='relative flex cursor-pointer'>
              <Refresh />
              <div className={classnames(styles.dotStyles, { [styles.show]: isSettingsChanged })} />
            </div>
            <Close onClick={handleToggle} className='cursor-pointer' />
          </div>
        </div>
        <ScrollWrapper
          {...(isBelowLgScreen
            ? { className: 'bs-full overflow-y-auto overflow-x-hidden' }
            : { options: { wheelPropagation: false, suppressScrollX: true } })}
        >
          <div className={styles.customizerBody}>
            <div className='flex flex-col gap-6'>
              <p>Theming</p>
              <div className='flex flex-col gap-2.5'>
                <p className='font-medium'>Primary Color</p>
                <div className='flex items-center justify-between'>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#765feb' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#0d9394' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#ffab1d' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#eb3d63' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#2092ec' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#d4d4d4' }} />
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='font-medium'>Mode</p>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'light'
                      })}
                      onClick={() => handleChange('mode', 'light')}
                    >
                      <ModeLight fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'light')}>
                      Light
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'dark'
                      })}
                      onClick={() => handleChange('mode', 'dark')}
                    >
                      <ModeDark fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'dark')}>
                      Dark
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'system'
                      })}
                      onClick={() => handleChange('mode', 'system')}
                    >
                      <ModeSystem fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'system')}>
                      System
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='font-medium'>Skin</p>
                <div className='flex items-center gap-4'>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.skin === 'default' })}
                      onClick={() => handleChange('skin', 'default')}
                    >
                      <SkinDefault />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('skin', 'default')}>
                      Default
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.skin === 'bordered' })}
                      onClick={() => handleChange('skin', 'bordered')}
                    >
                      <SkinBordered />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('skin', 'bordered')}>
                      Bordered
                    </p>
                  </div>
                </div>
              </div>
              {settings.mode === 'dark' ||
              (settings.mode === 'system' && isSystemDark) ||
              settings.layout === 'horizontal' ? null : (
                <div className='flex items-center justify-between'>
                  <label className='font-medium cursor-pointer' htmlFor='customizer-semi-dark'>
                    Semi Dark
                  </label>
                  <input
                    type='checkbox'
                    id='customizer-semi-dark'
                    checked={settings.semiDark === true}
                    onChange={() => handleChange('semiDark', !settings.semiDark)}
                  />
                </div>
              )}
            </div>
            <hr className={styles.hr} />
            <div className='flex flex-col gap-6'>
              <p>Layout</p>
              <div className='flex flex-col gap-2.5'>
                <p className='font-medium'>Layouts</p>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'vertical' })}
                      onClick={() => handleChange('layout', 'vertical')}
                    >
                      <LayoutVertical />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'vertical')}>
                      Vertical
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'collapsed' })}
                      onClick={() => handleChange('layout', 'collapsed')}
                    >
                      <LayoutCollapsed />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'collapsed')}>
                      Collapsed
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'horizontal' })}
                      onClick={() => handleChange('layout', 'horizontal')}
                    >
                      <LayoutHorizontal />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'horizontal')}>
                      Horizontal
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-2.5'>
                <p className='font-medium'>Content</p>
                <div className='flex items-center gap-4'>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, {
                        [styles.active]: settings.contentWidth === 'compact'
                      })}
                      onClick={() =>
                        updateSettings({
                          navbarContentWidth: 'compact',
                          contentWidth: 'compact',
                          footerContentWidth: 'compact'
                        })
                      }
                    >
                      <ContentCompact />
                    </div>
                    <p
                      className={styles.itemLabel}
                      onClick={() =>
                        updateSettings({
                          navbarContentWidth: 'compact',
                          contentWidth: 'compact',
                          footerContentWidth: 'compact'
                        })
                      }
                    >
                      Compact
                    </p>
                  </div>
                  <div className='flex flex-col items-start gap-0.5'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.contentWidth === 'wide' })}
                      onClick={() =>
                        updateSettings({ navbarContentWidth: 'wide', contentWidth: 'wide', footerContentWidth: 'wide' })
                      }
                    >
                      <ContentWide />
                    </div>
                    <p
                      className={styles.itemLabel}
                      onClick={() =>
                        updateSettings({ navbarContentWidth: 'wide', contentWidth: 'wide', footerContentWidth: 'wide' })
                      }
                    >
                      Wide
                    </p>
                  </div>
                </div>
              </div>
              {!disableDirection && (
                <div className='flex flex-col gap-2.5'>
                  <p className='font-medium'>Direction</p>
                  <div className='flex items-center gap-4'>
                    <Link href={getLocalePath(pathName, 'en')}>
                      <div className='flex flex-col items-start gap-0.5'>
                        <div
                          className={classnames(styles.itemWrapper, {
                            [styles.active]: direction === 'ltr'
                          })}
                        >
                          <DirectionLtr />
                        </div>
                        <p className={styles.itemLabel}>
                          Left to Right <br />
                          (English)
                        </p>
                      </div>
                    </Link>
                    <Link href={getLocalePath(pathName, 'ar')}>
                      <div className='flex flex-col items-start gap-0.5'>
                        <div
                          className={classnames(styles.itemWrapper, {
                            [styles.active]: direction === 'rtl'
                          })}
                        >
                          <DirectionRtl />
                        </div>
                        <p className={styles.itemLabel}>
                          Right to Left <br />
                          (Arabic)
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollWrapper>
      </div>
    )
  )
}

export default Customizer
