interface ModeData {
  allowedCommands: Array<string>;
  config: (args) => void;
}

const modes: Record<string, ModeData> = {
  container: {
    allowedCommands: ['test', 'monitor'],
    config: (args): void => {
      args['docker'] = true;
    },
  },
};

const isModesAllowed = (mode: string) => Object.keys(modes).includes(mode);

const isCommandAllowed = (mode: string, command: string) =>
  modes[mode].allowedCommands.includes(command);

const configArgs = (mode: string, args) => modes[mode].config(args);

export default (mode: string, args): string => {
  if (isModesAllowed(mode)) {
    const command: string = args._[0];

    if (isCommandAllowed(mode, command)) {
      configArgs(mode, args);
      mode = args._.shift();
    }
  }

  return mode;
};
