import { MethodArgs, ArgsOptions } from '../args';

interface WoofOptions {
  language?: string; // ISO 639-1 code
}

const woofs = {
  en: 'Woof!',
  he: ' !הב ',
  ru: ' Гав!',
};

export = function woof() {
  // const args = [...args0];
  // let options: WoofOptions = {};
  // if (typeof args[args.length - 1] === 'object') {
  //   options = (args.pop() as ArgsOptions) as WoofOptions;
  // }
  const lang = 'en';
  console.log(`
    |         |
   /|         |\\
  | |         | |
  | |/-------\\| |
  \\             /
   |  \\     /  |
   | \\o/   \\o/ |
   |    | |    |
    \\/  | |  \\/
    |   | |   |
     \\  ( )  /
      \\_/ \\_/  /-----\\
        \\U/ --( ${woofs[lang]} )
               \\-----/
`);
};
