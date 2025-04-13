import {cva, RecipeVariant} from '../../../styled-system/css'

const selectedState = {
  backgroundColor: 'indigo.500',
  _hover: {
    backgroundColor: 'indigo.600',
  },
}

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
    rounded: 'xs',
    cursor: 'pointer',

    _hover: {
      backgroundColor: 'slate.800',
    },
    _expanded: {
      backgroundColor: 'slate.800',
      _hover: {
        backgroundColor: 'slate.700',
      },
    },
  },
  variants: {
    mode: {
      link: {
        paddingInline: '3',
        _currentPage: selectedState,
      },
      sublink: {
        paddingInlineEnd: '3',
        paddingInlineStart: '8',
        _currentPage: {
          color: 'indigo.400',
        },
      },
      disclosure: {
        paddingInline: '3',
        '.group:has([aria-current="page"]) &': selectedState,
      },
    },
  },
  defaultVariants: {
    mode: 'link',
  },
})

export type NavItemVariant = RecipeVariant<typeof navItemRecipe>
