import colors from './colors';
import fonts from './fonts';

const typography = {
  displayLarge: {
    fontFamily: fonts.bold,
    fontSize: 40,
    color: colors.white,
    fontWeight: '900',
    letterSpacing: -1,
  },

  displayMedium: {
    fontFamily: fonts.bold,
    fontSize: 34,
    color: colors.white,
    fontWeight: '800',
  },

  headingLarge: {
    fontFamily: fonts.bold,
    fontSize: 28,
    color: colors.white,
    fontWeight: '800',
  },

  headingMedium: {
    fontFamily: fonts.bold,
    fontSize: 22,
    color: colors.white,
    fontWeight: '700',
  },

  headingSmall: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.white,
    fontWeight: '700',
  },

  bodyLarge: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.text,
  },

  bodyMedium: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.textSecondary,
  },

  bodySmall: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },

  caption: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.placeholder,
  },

  button: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: colors.white,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
};

export default typography;