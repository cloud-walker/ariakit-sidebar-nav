import {cva, RecipeVariant} from '../../../styled-system/css'

export const navItemRecipe = cva({
  base: {
    display: 'flex',
    alignItems: 'center',

    width: 'full',
    gap: '2',
    paddingBlock: '1.5',
    borderRadius: 'xs',
    textStyle: 'sm',
    fontWeight: 'medium',

    _currentPage: {
      textDecoration: 'underline',
    },
  },
  variants: {
    mode: {
      link: {
        paddingInline: '3',
      },
      sublink: {
        paddingInlineEnd: '3',
        paddingInlineStart: '8',
      },
      disclosure: {
        paddingInline: '3',
      },
    },
  },
  defaultVariants: {
    mode: 'link',
  },
})

export type NavItemVariant = RecipeVariant<typeof navItemRecipe>
