export const createFile = async (url: string, name: string, type: string) => {
  const response = await fetch(url);
  const data = await response.blob();
  return new File([data], name, {
    type,
  });
};

export const throttle = <Args extends unknown[]>(
  fn: (...args: Args) => void,
  cooldown: number,
) => {
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const throttled = (...args: Args) => {
    const isOnCooldown = !!lastArgs;

    lastArgs = args;

    if (isOnCooldown) {
      return;
    }

    window.setTimeout(run, cooldown);
  };

  return throttled;
};

// TODO: debounce
