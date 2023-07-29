"use client";
import { CepInput } from "./Components/Input/InputCep";
import { CnpjInput } from "./Components/Input/InputCnpj";
import { CpfInput } from "./Components/Input/InputCpf";
import { DecimalInput } from "./Components/Input/InputDecimal";
import { EmailInput } from "./Components/Input/InputEmail";
import { PasswordInput } from "./Components/Input/InputPassword";
import { PercentageInput } from "./Components/Input/InputPercent";
import { CurrencyInput } from "./Components/Input/InputCurrency";
import { TextInput } from "./Components/Input/InputText";
import { GridList } from "./Components/GridList";

export default function Login() {
  return (
    <main className="flex min-h-screen p-4">
      <div className="container mx-auto space-y-4 w-screen">
        <PasswordInput id="password" label="Password" />
        <CepInput id="cep" label="CEP" />
        <CnpjInput id="cnpj" label="CNPJ" />
        <CpfInput id="cpf" label="CPF" />
        <DecimalInput id="decimal" decimalPlaces={3} label="Decimal" />
        <CurrencyInput id="currency" label="Currency" />
        <PercentageInput id="percentage" label="Percentage" />
        <EmailInput id="email" label="Email" />
        <TextInput id="inputText" label="Texto" />
        <GridList numColumns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, "2xl": 6 }}>
          <div className="bg-blue-500 p-4">Item 1</div>
          <div className="bg-red-500 p-4">Item 2</div>
          <div className="bg-green-500 p-4">Item 3</div>
          <div className="bg-yellow-500 p-4">Item 4</div>
          <div className="bg-purple-500 p-4">Item 5</div>
        </GridList>
      </div>
    </main>
  );
}
