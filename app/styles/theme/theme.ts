// theme.ts

interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
    // outras cores específicas para o tema
  };
  // outras configurações específicas para o tema
}

export const darkTheme: Theme = {
  colors: {
    background: "black",
    text: "white",
    primary: "blue",
    // outras cores específicas para o tema escuro
  },
  // outras configurações específicas para o tema escuro
};

export const lightTheme: Theme = {
  colors: {
    background: "white",
    text: "black",
    primary: "green",
    // outras cores específicas para o tema claro
  },
  // outras configurações específicas para o tema claro
};
