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
        <GridList minColumns={1} maxColumns={5}>
          <div className="bg-pink-800 p-4 w-screen">Item 1</div>
          <div className="bg-pink-800 p-4 w-screen">Item 1</div>
          <div className="bg-pink-800 p-4 w-screen">Item 1</div>
          <div className="bg-pink-800 p-4 w-screen">Item 1</div>
          <div className="bg-pink-800 p-4 w-screen">Item 1</div>
          <div className="bg-pink-800 p-4 w-screen">Item 1</div>
        </GridList>
      </div>
    </main>
  );
}
