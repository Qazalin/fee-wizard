import useSWR from "swr";

export function useEthExchangeRate(): number | undefined {
  const { data: exchangeRate } = useSWR(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    (args: any) => fetch(args).then((res) => res.json())
  );
  return exchangeRate?.ethereum?.usd;
}
