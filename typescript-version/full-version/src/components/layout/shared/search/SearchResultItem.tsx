// React Imports
import { Fragment, forwardRef, useMemo } from 'react'
import type { Ref } from 'react'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import type { ActionId, ActionImpl } from 'kbar'

const Title = ({ title, flexGrow = false }: { title: string; flexGrow?: boolean }) => {
  return flexGrow ? (
    <span className='grow text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>{title}</span>
  ) : (
    <span className='text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>{title}</span>
  )
}

const TitleWithAncestors = ({
  title,
  flexGrow = false,
  ancestors
}: {
  title: string
  flexGrow?: boolean
  ancestors: ActionImpl[]
}) => {
  if (ancestors.length === 0) return <Title title={title} flexGrow={flexGrow} />

  return (
    <div className='flex items-center grow gap-2'>
      {ancestors.map((ancestor: ActionImpl) => (
        <Fragment key={ancestor.id}>
          <span style={{ opacity: 0.5 }}>{ancestor.name}</span>
          <span>&rsaquo;</span>
        </Fragment>
      ))}
      <Title title={title} flexGrow={flexGrow} />
    </div>
  )
}

const Shortcut = ({ shortcut }: { shortcut: string[] }) => {
  if (shortcut.length > 1) {
    return (
      <div className='flex items-center gap-1.5'>
        {shortcut.map(sc => (
          <kbd
            key={sc}
            className='kbd flex items-center justify-center is-6 bs-6 rounded-sm text-sm bg-[rgba(0,0,0,0.1)]'
          >
            {sc}
          </kbd>
        ))}
      </div>
    )
  }

  return (
    <kbd className='kbd flex items-center justify-center is-6 bs-6 rounded-sm text-sm bg-[rgba(0,0,0,0.1)]'>
      {shortcut[0]}
    </kbd>
  )
}

const EnterComponent = ({ active }: { active: boolean }) => {
  const theme = useTheme()

  return (
    active && (
      <i
        className={classnames(
          {
            'ri-corner-down-left-fill': theme.direction === 'ltr',
            'ri-corner-down-right-fill': theme.direction === 'rtl'
          },
          'text-xl'
        )}
      />
    )
  )
}

const SearchResultItem = forwardRef(
  (
    {
      action,
      active,
      currentRootActionId
    }: {
      action: ActionImpl
      active: boolean
      currentRootActionId: ActionId | undefined | null
    },
    ref: Ref<HTMLDivElement>
  ) => {
    // Hooks
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors

      const index = action.ancestors.findIndex(ancestor => ancestor.id === currentRootActionId)

      return action.ancestors.slice(index + 1)
    }, [action.ancestors, currentRootActionId])

    return (
      <div
        ref={ref}
        className={classnames('flex items-center justify-between gap-4 relative plb-2.5 pli-6 cursor-pointer', {
          ['bg-[var(--mui-palette-action-hover)]']: active
        })}
      >
        <div className='flex items-center grow gap-2 text-sm'>
          {action.icon && <i className={classnames(action.icon as string, 'text-xl')} />}
          {action.name &&
            (action.subtitle ? (
              <div className='flex flex-col grow gap-0.5'>
                <TitleWithAncestors title={action.name} ancestors={ancestors} />
                {action.subtitle && <span className='text-xs'>{action.subtitle}</span>}
              </div>
            ) : (
              <TitleWithAncestors flexGrow title={action.name} ancestors={ancestors} />
            ))}
        </div>
        <EnterComponent active={active} />
        {action.shortcut?.length && <Shortcut shortcut={action.shortcut} />}
      </div>
    )
  }
)

export default SearchResultItem
