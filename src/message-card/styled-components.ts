/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';
import { IMAGE_LAYOUT, BACKGROUND_COLOR_TYPE } from './constants';

export const StyledRoot = styled<
  'button',
  {
    $backgroundColor: string;
    $backgroundColorType: keyof typeof BACKGROUND_COLOR_TYPE;
    $imageLayout: keyof typeof IMAGE_LAYOUT | undefined;
    $isClickable: boolean;
  }
>(
  'button',
  ({
    $theme,
    $backgroundColor,
    $backgroundColorType,
    $imageLayout = IMAGE_LAYOUT.top,
    $isClickable,
  }) => {
    const lightBackgroundStyle = {
      color: $theme.colors.contentOnColorInverse,
      borderStyle: 'solid',
      borderWidth: $theme.sizing.scale0,
      borderColor: $theme.colors.borderOpaque,
    };
    const darkBackgroundStyle = {
      color: $theme.colors.contentOnColor,
      border: 'none',
    };

    return {
      alignItems: 'stretch',
      backgroundColor: $backgroundColor,
      borderRadius: $theme.borders.radius400,
      display: 'flex',
      flexDirection: $imageLayout === IMAGE_LAYOUT.top ? 'column' : 'row',
      overflow: 'hidden',
      padding: '0',
      position: 'relative',
      textAlign: 'start',
      width: '100%',
      boxShadow: `inset 999px 999px 0px ${$theme.colors.backgroundOverlayArt}`,
      ...($backgroundColorType === BACKGROUND_COLOR_TYPE.light
        ? lightBackgroundStyle
        : darkBackgroundStyle),
      ...($isClickable && {
        cursor: 'pointer',
        ':focus': {
          outlineWidth: '3px',
          outlineStyle: 'solid',
          outlineColor: $theme.colors.borderAccent,
          outlineOffset: '-3px',
        },
        ':hover:after': {
          content: '""',
          width: '100%',
          height: '100%',
          zIndex: '1',
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor:
            $backgroundColorType === BACKGROUND_COLOR_TYPE.light
              ? 'rgba(0, 0, 0, 0.04)'
              : 'rgba(255, 255, 255, 0.10)',
        },
        ':active:after': {
          content: '""',
          width: '100%',
          height: '100%',
          zIndex: '1',
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor:
            $backgroundColorType === BACKGROUND_COLOR_TYPE.light
              ? 'rgba(0, 0, 0, 0.08)'
              : 'rgba(255, 255, 255, 0.20)',
        },
      }),
    };
  }
);
StyledRoot.displayName = 'StyledRoot';

export const StyledImage = styled<
  'div',
  {
    $src: string;
    $imageLayout: keyof typeof IMAGE_LAYOUT;
    $backgroundPosition: string;
  }
>('div', ({ $imageLayout = IMAGE_LAYOUT.top, $backgroundPosition = 'center', $src }) => {
  return {
    backgroundImage: `url(${$src})`,
    backgroundSize: 'cover',
    backgroundPosition: $backgroundPosition,
    ...($imageLayout === IMAGE_LAYOUT.top
      ? { height: '132px', width: '100%' }
      : { width: '112px', order: '1' }),
  };
});
StyledImage.displayName = 'StyledImage';

export const StyledContentContainer = styled('div', ({ $theme }) => ({
  width: '100%',
  boxSizing: 'border-box',
  paddingTop: $theme.sizing.scale600,
  paddingRight: $theme.sizing.scale300,
  paddingBottom: $theme.sizing.scale600,
  paddingLeft: $theme.sizing.scale600,
}));
StyledContentContainer.displayName = 'StyledContentContainer';

export const StyledHeadingContainer = styled('div', ({ $theme }) => ({
  ...$theme.typography.HeadingXSmall,
}));
StyledHeadingContainer.displayName = 'StyledHeadingContainer';

export const StyledParagraphContainer = styled('div', ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  marginTop: $theme.sizing.scale100,
}));
StyledParagraphContainer.displayName = 'StyledParagraphContainer';
