export const TOGGLE_HOVER = 'isHovering:toggleHover';

export function toggleHover(bool) {
  return {
    type: TOGGLE_HOVER,
    payload: {
      isHovering: bool
    }
  };
}

